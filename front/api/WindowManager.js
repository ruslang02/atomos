const
	fs = require("fs").promises,
	path = require("path"),
	Module = require("module"),
	EventEmitter = require("events"),
	defaultOptions = {
		width: 400,
		height: 300,
		main: "app.js",
		title: "Application",
		x: 100,
		y: 100,
		minWidth: 150,
		minHeight: 150,
		maxHeight: Infinity,
		maxWidth: Infinity,
		maximizable: true,
		minimizable: true,
		closable: true,
		show: true,
		showOnLoad: false,
		draggable: true,
		resizable: true,
		alwaysOnTop: false,
		autoSize: false,
		darkMode: false,
		disableBlur: false,
		arguments: {},
		cheapResize: false,
		backgroundable: false
	},
	{remote: {screen}} = require("electron");
const Shell = require("@api/Shell");
const Registry = require(`@api/Registry`);
const {
	Button
} = require("@api/Components");
window._wzindex = window._wzindex || 0;
let
	windowCollection = new Proxy(window.instances = window.instances || [], {
		set(t, p, v) {
			t[p] = v;
			window.instances = windowCollection;
			return true;
		}
	}),
	appCache = new Proxy(window.appCache = window.appCache || {}, {
		set(t, p, v) {
			t[p] = v;
			window.appCache = appCache;
			return true;
		}
	}); // Contains all AppWindow instances
if (Registry.get("system.enableSuperFetch") === true && Object.keys(appCache).length === 0) {
	scanApps(path.join(osRoot, "apps")).then(() => {
		console.clear();
		console.log("SuperFetch complete. You may disable it in Settings");
	});

	async function scanApps(dir) {
		let dirs = await fs.readdir(dir);
		for (const item of dirs) {
			let itemPath = path.join(dir, item);
			let stat = await fs.lstat(itemPath);
			if (stat.isDirectory()) {
				await scanApps(itemPath);
				continue;
			} else if (item.trim().toLowerCase() !== "package.json") continue;

			let json = await fs.readFile(itemPath);
			let config = JSON.parse(json.toString());
			if (config.hidden || config.type !== "app")
				continue;
			let appPath = path.join(itemPath, "..", config.main);
			let appCode = (await fs.readFile(appPath)).toString();
			appCode = "module.exports = function() {" + appCode + "}";
			let appModule = new Module();
			appModule.filename = appPath;
			appModule.type = "window";
			appModule.paths = [path.join(osRoot, "node_modules"), path.join(osRoot, "apps", config.name.replace("@atomos", "official"), "node_modules")];
			appModule._compile(appCode, appPath);
			appCache[appPath] = appModule;
		}
	}

}

class AppWindow extends EventEmitter {
	constructor(wID, prog) {
		if (typeof wID !== "number") throw new Error("Can not be called directly: use Window.fromId or Window.launch");
		super();
		this.id = wID;
		this.dateCreated = new Date().getTime();
		this.ready = false;
		this.app = prog;
	}

	static getFocusedWindow() {
		return windowCollection.slice().reverse().find(win => (win ? win.isFocused() : false)) || null;
	}
	static clearGarbage() {
		for (const i of Object.keys(windowCollection)) {
			if (!windowCollection[i]) windowCollection.splice(i, 1);
		}
	}

	static getCurrentWindow() {
		let curModule = module;
		while (curModule) {
			console.log(curModule.parent);
			if (curModule.parent && curModule.parent.id !== undefined && curModule.parent.type === "window")
				return windowCollection[curModule.parent.id];
			else if (curModule.parent) curModule = curModule.parent;
			else return null;
		}
	}

	static getAllWindows() {
		return windowCollection;
	}

	static async launch(prog, args = {}, launchOptions = {}) {
		window._firstAppLoaded = true;
		Shell.clearAPICache();
		let similar = windowCollection.find(e => {
			return e ? e.app === prog : false;
		});
		if (similar && similar.eventNames().includes("second-instance")) {
			let e = {
				returnValue: undefined,
				preventDefault: e => {
					e.returnValue = true;
				}
			};
			similar.emit("second-instance", e, args);
			if (e.returnValue === undefined) return;
		}
		console.time("full render");
		const winID = window._wzindex++;
		prog = prog.replace("@atomos", "official");
		const appRoot = path.join(osRoot, 'apps', prog);
		let appOptions = JSON.parse((await fs.readFile(appRoot + "/package.json")).toString());
		let options = Object.assign({}, defaultOptions, {
			darkMode: Registry.get("system.isDarkMode"),
			theme: Registry.get("system.isDarkMode") ? "dark" : "light"
		}, appOptions, launchOptions, {
			arguments: args,
			parent: AppWindow.getCurrentWindow(),
			children: []
		});


		await fs.access(appRoot + "/" + options.main);
		let win = new AppWindow(winID, prog);
		win.options = options;
		win.arguments = win.options.arguments;
		win._render();
		if (win.options.show) win.show();
		if (win.options.modal) {
			win.options.parent.setEnabled(false);
			win.on('closed', () => win.options.parent.setEnabled(true));
		}
		if (win.options.parent) win.options.parent.options.children.push(win);
		win.on('closed', () => {
			if (win.options.parent)
				win.options.parent.options.children.splice(win.options.parent.options.children.indexOf(win), 1)
		});
		windowCollection[winID] = win;
		win._paint();
		win.file = path.join(osRoot, "apps", prog, options.main);
		if (!win.options.skipTaskbar) win.task = new TaskManager(winID);
		if (appCache[win.file]) {
			console.time("app load (precached)");
			appCache[win.file].id = winID;
			appCache[win.file].exports();
			console.timeEnd("app load (precached)");
		} else {
			console.time("app load");
			let appCode = "module.exports = () => {" + (await fs.readFile(win.file)).toString() + "}";
			let appModule = new Module();
			appModule.paths = [path.join(osRoot, "node_modules"), path.join(osRoot, "apps", prog), path.join(osRoot, "apps", prog, "node_modules")];
			appModule.id = winID;
			appModule.type = "window";
			appModule.filename = win.file;
			console.time("app execution");
			appModule._compile(appCode, win.file);
			if (Registry.get("system.enableCaching")) appCache[win.file] = appModule;
			try {
				appModule.exports();
			} catch (e) {
				console.error(e);
				delete windowCollection[winID];
				win = undefined;
				return;
			} finally {
				console.timeEnd("app execution");
				console.timeEnd("app load");
			}
		}
		Shell.clearAPICache();
		win._initEvents();
		if (Shell.isMobile) win.maximize();
		win.setMovable(win.options.draggable);
		win.setResizable(win.options.resizable);
		win.setMinimumSize(win.options.minWidth || 100, win.options.minHeight || 100);
		win.setMaximumSize(win.options.maxWidth || 100, win.options.maxHeight || 100);
		if (win.options.center) win.center();
		win.ready = true;
		win.emit('ready-to-show');
		if (win._awaitingShow || win.options.showInLoad) win.show();
		setInterval(() => win.updateThumbnail(), 500);
		console.timeEnd("full render");
		return win;
	}

	static fromId(wID) {
		return windowCollection[wID];
	}

	_calculateOffsets() {
		this._offsets = {
			left: this.ui.body.offsetLeft + this.ui.root.clientLeft,
			right: this.ui.root.clientWidth - this.ui.body.clientWidth - this.ui.body.offsetLeft,
			top: this.ui.body.offsetTop + this.ui.root.clientTop,
			bottom: this.ui.root.clientHeight - this.ui.body.clientHeight - this.ui.body.offsetTop
		}
	}

	_paint() {
		document.body.appendChild(this.ui.root);
		this._calculateOffsets();
		this.focus();
		this.setContentPosition(this.options.x, this.options.y);
		if (!this.options.autoSize) {
			this.setContentSize(this.options.width, this.options.height);
		}
		//console.log("painted")
	}

	_render() {
		let _this = this;
		this.ui = this.ui || {};

		this.ui.root = document.createElement("window");
		this.ui.root.id = this.id;
		this.ui.root.className = "very-rounded d-none flex-column position-absolute" + (Registry.get("system.enableWindowShadows") ? " shadow-sm" : "");
		if (Registry.get("system.enableTransparentWindows")) {
			this.ui.root.classList.add(this.options.darkMode ? "bg-semidark" : "bg-semiwhite");
		} else {
			if (this.options.darkMode) this.ui.root.style.background = "#0a0a0a";
			else this.ui.root.style.background = "#dee2e6";
		}
		if (this.options.disableBlur) this.ui.root.classList.add("noBlur");
		this.ui.root.style.transition = "background .25s linear, backdrop-filter .25s linear";
		this.ui.root.appWindow = this;
		this._fade = this.ui.root.animate([{
			opacity: 0
		}, {
			opacity: 1
		}], {
			duration: Shell.ui.fadeAnimation,
			fill: "both"
		});
		this._fade.pause();
		this._fade.onfinish = () => {
			if (getComputedStyle(_this.ui.root).opacity === "0")
				_this.ui.root.classList.replace("d-flex", "d-none")
		};
		this.ui.header = document.createElement("window-header");
		this.ui.header.className = "d-flex align-items-center very-rounded-top flex-shrink-0 p-2" + (this.options.darkMode ? " text-white" : "");
		this.ui.header.addEventListener("dblclick", () => this._toggle());
		this.ui.title = document.createElement("window-title");
		this.ui.title.className = "flex-grow-1 text-center us-0";
		this.ui.title.innerText = this.options.title;

		this.ui.ui = document.createElement("window-ui");
		this.ui.ui.className = "d-flex flex-column flex-grow-1 position-relative h-100 very-rounded";

		this.ui.buttons = document.createElement("window-buttons");
		this.ui.buttons.style.order = -10;
		this.ui.buttons.className = "mr-3 ml-2 d-flex flex-shrink-0 flex-row-reverse";


		this.ui.buttons.minimize = new Button({
			color: "warning",
			tooltip: "Minimize",
			shadow: true,
			visible: this.options.minimizable,
			addClasses: "ml-2 rounded-circle position-relative"
		});
		this.ui.buttons.maximize = new Button({
			color: "success",
			tooltip: "Maximize",
			shadow: true,
			visible: this.options.maximizable,
			addClasses: "ml-2 rounded-circle position-relative"
		});
		this.ui.buttons.close = new Button({
			color: "danger",
			tooltip: "Close",
			shadow: true,
			visible: this.options.closable,
			addClasses: "rounded-circle position-relative"
		});
		this.ui.buttons.putToBG = new Button({
			color: "info",
			tooltip: "Background",
			shadow: true,
			visible: this.options.backgroundable,
			addClasses: "mx-2 rounded-circle ml-2 position-relative"
		});
		this.ui.buttons.minimize.addEventListener("click", e => {
			e.stopPropagation();
			_this.minimize();
		});
		this.ui.buttons.maximize.addEventListener("click", () => this._toggle());
		this.ui.buttons.close.addEventListener("click", e => {
			e.stopPropagation();
			_this.close();
		});
		this.ui.buttons.putToBG.addEventListener("click", e => {
			e.stopPropagation();
			_this.background();
		});
		this.ui.buttons.minimize.style.padding =
			this.ui.buttons.maximize.style.padding =
				this.ui.buttons.close.style.padding =
					this.ui.buttons.putToBG.style.padding = CSS.px(6);
		this.ui.buttons.putToBG.style.order = 10000;

		this.ui.body = document.createElement("window-body");
		this.ui.body.className = "flex-grow-1 d-flex flex-column scrollable-0 position-relative very-rounded-bottom";
		this.ui.body.style.height = 0;
		this.ui.body.dataset.draggable = false;
		/*
				this.ui.overlay = document.createElement("overlay");
				this.ui.overlay.style.cssText = "top:0;left:0;z-index:100";
				this.ui.overlay.className = "d-none position-fixed w-100 h-100";
				this.ui.root.append(this.ui.overlay);*/

		this.ui.buttons.append(this.ui.buttons.maximize, this.ui.buttons.minimize, this.ui.buttons.close);
		this.ui.header.append(this.ui.buttons, this.ui.title, this.ui.buttons.putToBG);
		this.ui.ui.append(this.ui.header, this.ui.body);
		this.ui.root.append(this.ui.ui);
		//console.log("rendered")
	}

	_initEvents() {
		new ResizeObserver(() => this.emit('resize')).observe(this.ui.root);
		this.ui.root.addEventListener("click", () => this.show());
		Elements.Bar.addEventListener("click", () => this.blur())
	}

	destroy() {
		this.hide();
		setTimeout(() => {
			this.ui.root.remove();
			this.emit('closed');
			windowCollection[windowCollection.indexOf(this)] = false;
		}, Shell.ui.fadeAnimation)
		// TODO: Implement
	}

	close() {
		if (!this.isClosable()) return false;
		let cancel = false;
		let e = {
			preventDefault: function () {
				cancel = true;
			}
		};
		this.emit('close', e);
		if (this.fullscreen) this.setFullScreen(false);
		Elements.Bar.classList.remove("maximized");
		if (!cancel) this.destroy();
		return !cancel;
	}

	relaunch() {
		let newOptions = Object.assign({}, this.options, this.getContentBounds(), {
			y: this.getContentPosition()[1] - 2 * this._offsets.top
		});
		if (this.close())
			AppWindow.launch(this.app, this.options.arguments, newOptions)
	}

	background() {
		this.task.task.classList.replace("d-inline-flex", "d-none");
		this.hide();
		this.once('show', function () {
			this.backgrounded = false;
			this.task.task.classList.replace("d-none", "d-inline-flex");
			_windowBGPanel.delete(this.id);
		});
		this.backgrounded = true;
		_windowBGPanel.add(this.id);
	}

	focus() {
		let _this = this;
		if (this.ui.overlay && this.options.children)
			for (const child of this.options.children) child.show();
		else if (!this.isFocused()) {
			this.flashFrame(false);
			setTimeout(() => this.updateThumbnail(), 300);
			windowCollection.forEach(win => {
				if (_this !== win && win)
					win.blur()
			});
			this.ui.root.classList.add("active");
			this.ui.root.classList.replace("shadow-sm", "shadow");
			this.ui.buttons.maximize.classList.replace("btn-outline-success", "btn-success");
			this.ui.buttons.minimize.classList.replace("btn-outline-warning", "btn-warning");
			this.emit("focus");
		}
	}

	blur() {
		if (this.isFocused()) {
			this.ui.root.classList.remove("active");
			this.ui.root.classList.replace("shadow", "shadow-sm");
			this.ui.buttons.maximize.classList.replace("btn-success", "btn-outline-success");
			this.ui.buttons.minimize.classList.replace("btn-warning", "btn-outline-warning");
			this.emit("blur");
		}
	}

	updateThumbnail() {
	}

	isFocused() {
		return this.ui.root.classList.contains("active");
	}

	isDestroyed() {
		return !document.body.contains(this.ui.root);
	}

	show() {
		if (!this.ready) this._awaitingShow = true;
		else {
			this.showInactive();
			this.focus();
			this.emit("show");
		}
	}

	showInactive() {
		if (this.ui.root.classList.contains("d-none")) {
			this.ui.root.classList.replace("d-none", "d-flex");
			this._fade.playbackRate = 1;
			this._fade.play();
		}
		if (!(this.ui.overlay && this.options.children))
			this.moveTop();
		if (this.isMaximized() && this._maxDisp === screen.getPrimaryDisplay())
			Elements.Bar.classList.add("maximized");
	}

	hide() {
		Elements.Bar.classList.remove("maximized");
		if (this.ui.root.classList.contains("d-flex")) {
			this._fade.playbackRate = -1;
			this._fade.play();
		}
	}

	isVisible() {
		return getComputedStyle(this.ui.root).opacity === "1" && !this.isDestroyed();
	}

	isModal() {
		return this.options.modal;
	}

	unmaximize() {
		this.restore();
	}

	isMaximized() {
		return this.ui.root.classList.contains("maximized");
	}

	_updateMainDisp() {
		if (this.isMaximized()) return;
		let maxArea = 0, target, styles = window.getComputedStyle(this.ui.root);
		let bounds = this._bounds = {
			x: parseInt(styles.left),
			y: parseInt(styles.top),
			width: parseInt(styles.width),
			height: parseInt(styles.height)
		};

		for (const disp of screen.getAllDisplays()) {
			let areaI = (Math.min((disp.bounds.x + disp.bounds.width) / zoomFactor, bounds.x + bounds.width) - Math.max(disp.bounds.x / zoomFactor, bounds.x)) *
				(Math.min((disp.bounds.y + disp.bounds.height) / zoomFactor, bounds.y + bounds.height) - Math.max(disp.bounds.y / zoomFactor, bounds.y));

			if (areaI > maxArea) {
				maxArea = areaI;
				target = disp
			}
		}

		this.mainDisp = target;
	}

	maximize() {
		if (this.fullscreen) this.setFullScreen(false);
		this.show();
		this._updateMainDisp();
		let target = this.mainDisp;
		if (!this.isMaximizable()) return;
		if (target.id === screen.getPrimaryDisplay().id)
			Elements.Bar.classList.add("maximized");
		this.ui.root.style.left = CSS.px(target.bounds.x / zoomFactor);
		this.ui.root.style.top = CSS.px(target.bounds.y / zoomFactor);
		this.ui.root.style.width = CSS.px(target.bounds.width / zoomFactor);
		this.ui.root.style.height = CSS.px(target.bounds.height / zoomFactor);
		this.ui.root.classList.add("maximized");
		this._maxDisp = target;
		this.emit('maximize');
	}

	minimize() {
		if (this.fullscreen) this.setFullScreen(false);
		if (!this.isMinimizable()) return;
		this.hide();
		this.blur();
	}

	restore() {
		this.show();
		if (Shell.isMobile) return;
		this.ui.root.style.left = CSS.px(this._bounds.x);
		this.ui.root.style.top = CSS.px(this._bounds.y);
		this.ui.root.style.width = CSS.px(this._bounds.width);
		this.ui.root.style.height = CSS.px(this._bounds.height);
		this.ui.root.classList.remove("maximized");
		Elements.Bar.classList.remove("maximized");
		this.emit('restore');
		this.emit('unmaximize');
	}

	isMinimized() {
		return !this.isVisible();
	}

	setFullScreen(flag) {
		Elements.Bar.classList.toggle("d-flex", !flag);
		if (Elements.Bar.classList.toggle("d-none", flag)) {
			this.maximize();
			this.setAlwaysOnTop(true);
		} else {
			this.restore();
			this.setAlwaysOnTop(false);
		}
		this.fullscreen = flag;
	}

	isFullScreen() {
		return this.fullscreen;
	}

	setBounds(rect) {
		this.setSize(rect.width, rect.height);
		this.setPosition(rect.x, rect.y);
	}

	getBounds() {
		return {
			x: this.ui.root.offsetLeft,
			y: this.ui.root.offsetTop,
			width: this.ui.root.offsetWidth,
			height: this.ui.root.offsetHeight
		};
	}

	setContentBounds(rect) {
		this.setContentSize(rect.width, rect.height);
		this.setContentPosition(rect.x, rect.y);
	}

	getContentBounds() {
		let pos = this.getContentPosition();
		let size = this.getContentSize();
		return {
			x: pos[0],
			y: pos[1],
			width: size[0],
			height: size[1]
		};
	}

	setEnabled(enable) {
		if (!enable && !this.ui.overlay) {
			this.ui.overlay = document.createElement("overlay");
			this.ui.overlay.addEventListener("mousedown", e => e.stopPropagation());
			this.ui.root.append(this.ui.overlay);
		} else if (enable && this.ui.overlay) {
			this.ui.overlay.remove();
			this.ui.overlay = undefined;
		}
	}

	setSize(width, height) {
		if (Shell.isMobile) return;
		this.ui.root.style.width = width + "px";
		this.ui.root.style.height = height + "px";
		this.emit('resize');
		this._updateMainDisp();
	}

	getSize() {
		return [this.ui.root.clientWidth, this.ui.root.clientHeight];
	}

	setContentSize(width, height, emit = true) {
		if (Shell.isMobile) return;
		this.ui.root.style.width = width + this._offsets.left + this._offsets.right + "px";
		this.ui.root.style.height = height + this._offsets.top + this._offsets.bottom + "px";
		this._updateMainDisp();
		if (emit) this.emit('resize');
	}

	getContentSize() {
		return [this.ui.body.clientWidth, this.ui.body.clientHeight];
	}

	setMinimumSize(width, height) {
		this.ui.root.style.minWidth = width + this._offsets.left + this._offsets.right + "px";
		this.ui.root.style.minHeight = height + this._offsets.top + this._offsets.bottom + "px";
	}

	getMinimumSize() {
		return [parseInt(this.ui.root.style.minWidth), parseInt(this.ui.root.style.minHeight)];
	}

	setMaximumSize(width, height) {
		this.ui.root.style.maxWidth = width + "px";
		this.ui.root.style.maxHeight = height + "px";
	}

	getMaximumSize() {
		return [parseInt(this.ui.root.style.maxWidth), parseInt(this.ui.root.style.maxHeight)];
	}

	setResizable(bool) {
		let self = this;
		let ghost;
		if (this.isResizable() === bool) return;
		if (bool) {
			let prevX = 0,
				prevY = 0,
				size = 8,
				corners = {
					topLeft: document.createElement("div"),
					top: document.createElement("div"),
					topRight: document.createElement("div"),
					right: document.createElement("div"),
					bottomRight: document.createElement("div"),
					bottom: document.createElement("div"),
					bottomLeft: document.createElement("div"),
					left: document.createElement("div")
				};
			let triggerResizer = function (e) {
				self.isResizing = e.currentTarget.resizer;
				prevX = e.clientX;
				prevY = e.clientY;
				self.show();
				if (Registry.get("system.disableLiveTransformations") || self.options.cheapResize) {
					ghost = document.createElement("ghost");
					ghost.className = "very-rounded position-absolute d-flex align-items-center justify-content-center";
					ghost.style.cssText = `${self.ui.root.style.cssText}; height: ${self.ui.root.offsetHeight}px; box-shadow: inset 0 0 0 5px ${window.getComputedStyle(self.ui.root).backgroundColor}; background: ${self.options.darkMode ? "rgba(30,30,30,0.7)" : "rgba(222,226,230, 0.6)"}; z-index:1020`;
					self.ui.root.style.visibility = "hidden";
					document.body.append(ghost);
				}
				_winoverlay.classList.remove("d-none");
			};
			corners.topLeft.style.cssText = `position:absolute;top: -${size}px; left:-${size}px; width:${2 * size}px; height:${2 * size}px; cursor: nwse-resize; z-index:101`;
			corners.topLeft.resizer = 1;
			corners.top.style.cssText = `position:absolute;top: -${size}px; left:${size}px; width:calc(100% - ${2 * size}px); height:${2 * size}px; cursor: ns-resize; z-index:101`;
			corners.top.resizer = 2;
			corners.topRight.style.cssText = `position:absolute;top: -${size}px; right:-${size}px; width:${2 * size}px; height:${2 * size}px; cursor: nesw-resize; z-index:101`;
			corners.topRight.resizer = 3;
			corners.right.style.cssText = `position:absolute;top: ${size}px; right:-${size}px; width:${2 * size}px; height:calc(100% - ${2 * size}px); cursor: ew-resize; z-index:101`;
			corners.right.resizer = 4;
			corners.bottomRight.style.cssText = `position:absolute;bottom: -${size}px; right:-${size}px; width:${2 * size}px; height:${2 * size}px; cursor: nwse-resize; z-index:101`;
			corners.bottomRight.resizer = 5;
			corners.bottom.style.cssText = `position:absolute;bottom: -${size}px; left:${size}px; width:calc(100% - ${2 * size}px); height:${2 * size}px; cursor: ns-resize; z-index:101`;
			corners.bottom.resizer = 6;
			corners.bottomLeft.style.cssText = `position:absolute;bottom: -${size}px; left: -${size}px; width:${2 * size}px; height:${2 * size}px; cursor: nesw-resize; z-index:101`;
			corners.bottomLeft.resizer = 7;
			corners.left.style.cssText = `position:absolute;top: ${size}px; left: -${size}px; width:${2 * size}px; height:calc(100% - ${2 * size}px); cursor: ew-resize; z-index:101`;
			corners.left.resizer = 8;
			for (const corner of Object.values(corners))
				corner.addEventListener("mousedown", triggerResizer);
			this.ui.ui.append.apply(this.ui.ui, Object.values(corners));
			document.body.addEventListener("mouseup", () => {
				self.isResizing = false;
				if (ghost) {
					self.ui.root.style.left = ghost.style.left;
					self.ui.root.style.top = ghost.style.top;
					self.ui.root.style.width = ghost.style.width;
					self.ui.root.style.height = ghost.style.height;
					ghost.remove();
					ghost = null;
				}
				self.ui.root.style.visibility = "visible";
				this._updateMainDisp();
				_winoverlay.classList.add("d-none");
			});
			this.resizerTrigger = e => {
				let elem = ghost || self.ui.root;
				_winoverlay.style.background = "none";
				if (!self.isResizing) return;
				e.stopImmediatePropagation();
				switch (self.isResizing) {
					case 1:
						elem.style.top = (elem.offsetTop + (e.clientY - prevY)) + "px";
						elem.style.height = (elem.clientHeight - (e.clientY - prevY)) + "px";
						elem.style.left = (elem.offsetLeft + (e.clientX - prevX)) + "px";
						elem.style.width = (elem.clientWidth - (e.clientX - prevX)) + "px";
						document.body.style.cursor = "";
						break;
					case 2:
						elem.style.top = (elem.offsetTop + (e.clientY - prevY)) + "px";
						elem.style.height = (elem.clientHeight - (e.clientY - prevY)) + "px";
						break;
					case 3:
						elem.style.top = (elem.offsetTop + (e.clientY - prevY)) + "px";
						elem.style.height = (elem.clientHeight - (e.clientY - prevY)) + "px";
						elem.style.width = (elem.clientWidth + (e.clientX - prevX)) + "px";
						break;
					case 4:
						elem.style.width = (elem.clientWidth + (e.clientX - prevX)) + "px";
						break;
					case 5:
						elem.style.width = (elem.clientWidth + (e.clientX - prevX)) + "px";
						elem.style.height = (elem.clientHeight + (e.clientY - prevY)) + "px";
						break;
					case 6:
						elem.style.height = (elem.clientHeight + (e.clientY - prevY)) + "px";
						break;
					case 7:
						elem.style.left = (elem.offsetLeft + (e.clientX - prevX)) + "px";
						elem.style.width = (elem.clientWidth - (e.clientX - prevX)) + "px";
						elem.style.height = (elem.clientHeight + (e.clientY - prevY)) + "px";
						break;
					case 8:
						elem.style.width = (elem.clientWidth - (e.clientX - prevX)) + "px";
						elem.style.left = (elem.offsetLeft + (e.clientX - prevX)) + "px";
						break;
				}
				prevX = e.clientX;
				prevY = e.clientY;
				if (Registry.get("system.showWindowProps") && (Registry.get("system.disableLiveTransformations") || self.options.cheapResize))
					ghost.innerHTML = `<div class="bg-light text-dark py-1 px-2 text-center very-rounded">(${elem.offsetLeft}; ${elem.offsetTop})<br />${elem.clientWidth}x${elem.clientHeight}</div>`;
			};
			document.body.addEventListener("mousemove", this.resizerTrigger);
		} else {
			this.ui.root.querySelectorAll(":scope > div").forEach(elem => elem.remove());
			document.body.removeEventListener("mousemove", this.resizerTrigger);
		}
		this._isResizable = bool;
	}

	isResizable() {
		return this._isResizable;
	}

	setMovable(bool) {
		let self = this;
		let ghost;
		if (this.isMovable() === bool) return;
		if (bool) {
			let prev = {
					x: 0,
					y: 0
				}, preCords,
				begin, isDragging = false,
				cancel = false,
				force = false;
			self.drag = e => {
				if (isDragging && !self.isResizing && (!cancel || force)) {
					_winoverlay.style.background = e.clientY < 10 ? "rgba(30,30,30,0.7)" : "none";
					if (Registry.get("system.disableLiveTransformations")) {
						if (Math.abs(e.clientX - begin.x) < 3 || Math.abs(e.clientY - begin.y) < 3) return;
						if (!ghost) {
							ghost = document.createElement("ghost");
							ghost.className = "very-rounded position-absolute d-flex align-items-center justify-content-center";
							ghost.style.cssText = `border:5px solid ${window.getComputedStyle(self.ui.root).backgroundColor}; ${self.ui.root.style.cssText}; height: ${self.ui.root.offsetHeight}px; background: ${self.options.darkMode ? "rgba(30,30,30,0.7)" : "rgba(222,226,230, 0.6)"};z-index:1020`;
							self.ui.root.style.visibility = "hidden";
							document.body.append(ghost);
						}
						ghost.style.left = CSS.px(e.clientX - prev.x);
						ghost.style.top = CSS.px(e.clientY - prev.y);
						if (Registry.get("system.showWindowProps"))
							ghost.innerHTML = `<div class="bg-light text-dark py-1 px-2 text-center very-rounded">(${ghost.offsetLeft}; ${ghost.offsetTop})<br />${ghost.clientWidth}x${ghost.clientHeight}</div>`;
					} else {
						self.ui.root.style.left = CSS.px(e.clientX - prev.x);
						self.ui.root.style.top = CSS.px(e.clientY - prev.y);
					}
					_winoverlay.classList.remove("d-none");
				} else {
					prev.x = e.clientX - self.ui.root.offsetLeft;
					prev.y = e.clientY - self.ui.root.offsetTop;
				}
			};
			self.mouseUpDrag = e => {
				this._updateMainDisp();
				if (ghost) {
					if (!self.isMaximized()) {
						self.ui.root.style.left = ghost.style.left;
						self.ui.root.style.top = ghost.style.top;
					}
					ghost.remove();
					ghost = null;
				}
				if (e.clientY < 10 && isDragging && !self.isResizing && (!cancel || force)) {
					self.maximize();
					self._bounds.x = preCords[0];
					self._bounds.y = preCords[1];
				} else if (isDragging && !self.isResizing && (!cancel || force)) {
					for (const disp of screen.getAllDisplays()) {
						if (e.clientX - disp.bounds.x / zoomFactor < 20 && e.clientX - disp.bounds.x / zoomFactor >= 0)
							self.setBounds({
								x: disp.bounds.x / zoomFactor,
								y: disp.bounds.y / zoomFactor,
								height: disp.bounds.height / zoomFactor,
								width: disp.bounds.width / 2 / zoomFactor
							});
						else if ((disp.bounds.x + disp.bounds.width) / zoomFactor - e.clientX < 20 && (disp.bounds.x + disp.bounds.width) / zoomFactor - e.clientX >= 0)
							self.setBounds({
								x: (disp.bounds.x + (disp.bounds.width / 2)) / zoomFactor,
								y: disp.bounds.y / zoomFactor,
								height: disp.bounds.height / zoomFactor,
								width: disp.bounds.width / 2 / zoomFactor
							});
					}
				}
				isDragging = false;
				cancel = false;
				force = false;
				_winoverlay.classList.add("d-none");
				self.ui.root.style.visibility = "visible";
				document.body.style.cursor = "default";
			};
			document.body.addEventListener("mouseup", self.mouseUpDrag);
			document.body.addEventListener("mousemove", self.drag);
			self.ui.root.addEventListener("mousedown", e => {
				self.show();
				preCords = self.getPosition();
				if (self.isResizing || self.isMaximized() || self.isFullScreen()) return;
				begin = {
					x: e.clientX,
					y: e.clientY
				};
				isDragging = true;
				if (!self.isResizing && (!cancel || force)) {
					document.body.style.cursor = "move";
				}
			});
			self.ui.root.querySelectorAll("[data-draggable='true']").forEach(elem => {
				elem.addEventListener("mousedown", () => force = cancel !== true)
			});
			self.ui.root.querySelectorAll("[data-draggable='false'], button").forEach(elem => {
				elem.addEventListener("mousedown", () => cancel = force !== true)
			});
		} else {
			if (self.drag)
				document.body.removeEventListener("mousemove", self.drag);
			if (self.mouseUpDrag)
				document.body.removeEventListener("mouseup", self.mouseUpDrag);
		}
		this._isMovable = bool;
	}

	isMovable() {
		return this._isMovable;
	}

	setMinimizable(bool) {
		this.ui.buttons.minimize.classList.visible = bool;
	}

	isMinimizable() {
		return this.ui.buttons.minimize.visible;
	}

	setMaximizable(bool) {
		this.ui.buttons.maximize.classList.visible = bool;
	}

	isMaximizable() {
		return this.ui.buttons.maximize.visible;
	}

	setClosable(bool) {
		this.ui.buttons.close.classList.visible = bool;
	}

	isClosable() {
		return this.ui.buttons.close.visible;
	}

	setAlwaysOnTop(flag) {
		this.alwaysOnTop = flag; // TODO: Always On Top windows
	}

	isAlwaysOnTop() {
		return this.alwaysOnTop;
	}

	center() {
		if (Shell.isMobile) return;
		if (this.isMaximized()) return;
		let root = this.ui.root;
		root.style.left = CSS.px(document.body.clientWidth - root.clientWidth);
		root.style.top = CSS.px((document.body.clientHeight - root.clientHeight) / 2 - Elements.Bar.clientHeight);
	}

	setPosition(x, y) {
		if (Shell.isMobile) return;
		this.ui.root.style.left = x + "px";
		this.ui.root.style.top = y + "px";
		this._updateMainDisp();
	}

	getPosition() {
		return [this.ui.root.offsetLeft, this.ui.root.offsetTop];
	}

	setContentPosition(x, y) {
		if (Shell.isMobile) return;
		this.ui.root.style.left = x + this._offsets.left + "px";
		this.ui.root.style.top = y + this._offsets.top + "px";
		this._updateMainDisp();
	}

	getContentPosition() {
		return [
			this.ui.root.offsetLeft + this._offsets.left,
			this.ui.root.offsetTop + this.ui.body.offsetTop + (Shell.isMobile ? -29 : 0)
		];
	}

	setTitle(title) {
		this.ui.title.innerHTML = title;
		this.emit("title-updated", title);
	}

	flashFrame(flag) {
		if (this.isFocused() || !this.task) return;
		this.ui.root.classList.toggle("flash", flag);
		this.task.task.classList.toggle("flash", flag);
	}

	moveTop() {
		let zCount = 0;
		AppWindow.getAllWindows().forEach(win => {
			if (!win) return;
			if (win.isAlwaysOnTop()) return;
			let z = parseInt(win.ui.root.style.zIndex);
			if (z > zCount) zCount = z;
		});
		if (this.alwaysOnTop) {
			AppWindow.getAllWindows().forEach(win => {
				if (!win) return;
				if (!win.isAlwaysOnTop()) return;
				let z = parseInt(win.ui.root.style.zIndex);
				if (z > zCount) zCount = z;
			});
		}
		this.ui.root.style.zIndex = zCount + 1;
	}

	_toggle() {
		if (this.isMaximized()) this.restore();
		else this.maximize();
	}
}

module.exports = AppWindow;