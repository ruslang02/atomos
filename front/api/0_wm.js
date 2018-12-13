const fs = require("fs").promises;
const path = require("path");
const EventEmitter = require("events");
const wc = require("electron").remote.getCurrentWebContents();
const defaultOptions = {
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
	arguments: {}
};
let wCount = 1;
let windowCollection = []; // Contains all AppWindow instances

window.AppWindow = class Window extends EventEmitter {
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

	static getAllWindows() {
		return windowCollection;
	}

	static async launch(prog, args = {}, launchOptions = {}) {
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
		const winID = wCount++;
		const appRoot = path.join(osRoot, 'apps', prog);
		let appOptions = JSON.parse(await fs.readFile(appRoot + "/package.json"));
		let options = Object.assign({}, defaultOptions, {darkMode: shell.ui.darkMode}, appOptions, launchOptions, {arguments: args});

		await fs.access(appRoot + "/" + (options.main || options.main.ui));
		if (options.main.worker)
			await fs.access(appRoot + "/" + options.main.worker);
		let win = new Window(winID, prog);
		win.options = options;
		win.arguments = win.options.arguments;
		win._render();
		windowCollection[winID] = win;
		win._paint();
		win.file = path.join(osRoot, "apps", prog, options.main.ui || options.main);
		console.time("app render");
		if (options.main.worker)
			win.worker = new Worker(path.join(osRoot, "apps", prog, options.main.worker));
		if (!win.options.skipTaskbar) win.task = new TaskManager(winID);
		await new AsyncFunction("__dirname", "root", "WINDOW_ID", await fs.readFile(win.file))(path.join(win.file, ".."), win.ui.body, win.id);
		console.timeEnd("app render");
		win._initEvents();
		if (shell.isMobile) win.maximize();
		win.setMovable(win.options.draggable);
		win.setResizable(win.options.resizable);
		win.setMinimumSize(win.options.minWidth || 100, win.options.minHeight || 100);
		if (win.options.center) win.center();
		win.ready = true;
		win.emit('ready-to-show');
		if (win._awaitingShow) win.show();
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
		console.log("painted")
	}

	_render() {
		let _this = this;
		this.ui = this.ui || {};

		this.ui.root = document.createElement("window");
		this.ui.root.id = this.id;
		this.ui.root.className = "shadow-sm very-rounded border-0 scrollable-0 fade card position-absolute " + (this.options.darkMode ? "bg-semidark" : "bg-semiwhite");
		this.ui.header = document.createElement("window-header");
		this.ui.header.className = "d-flex align-items-center flex-shrink-0 p-2" + (this.options.darkMode ? " text-white" : "");
		this.ui.header.addEventListener("dblclick", e => this._toggle());
		this.ui.title = document.createElement("window-title");
		this.ui.title.className = "flex-grow-1 text-center us-0";
		this.ui.title.innerText = this.options.title;

		this.ui.buttons = document.createElement("window-buttons");
		this.ui.buttons.style.order = "-10";
		this.ui.buttons.className = "ml-2 mr-3 d-flex flex-shrink-0 flex-row-reverse";
		this.ui.buttons.dataset.draggable = "false";


		this.ui.buttons.minimize = document.createElement("button");
		this.ui.buttons.maximize = document.createElement("button");
		this.ui.buttons.close = document.createElement("button");

		this.ui.buttons.minimize.className = "btn btn-warning rounded-max ml-2" + (this.options.minimizable ? "" : " d-none");
		this.ui.buttons.minimize.style.padding = "7px";
		this.ui.buttons.minimize.addEventListener("click", e => {
			e.stopPropagation();
			_this.minimize();
		});
		this.ui.buttons.minimize.title = "Minimize (<i class='mdi mdi-atom'></i>+Down)";
		this.ui.buttons.maximize.className = "btn btn-success rounded-max ml-2" + (this.options.maximizable ? "" : " d-none");
		this.ui.buttons.maximize.style.padding = "7px";
		this.ui.buttons.maximize.title = "Maximize (<i class='mdi mdi-atom'></i>+Up)";
		this.ui.buttons.maximize.addEventListener("click", e => {
			_this._toggle();
		});
		this.ui.buttons.close.className = "btn btn-danger rounded-max" + (this.options.closable ? "" : " d-none");
		this.ui.buttons.close.style.padding = "7px";
		this.ui.buttons.close.title = "Close (Alt+F4)";
		this.ui.buttons.close.addEventListener("click", e => {
			e.stopPropagation();
			_this.close();
		});

		this.ui.body = document.createElement("window-body");
		this.ui.body.className = "flex-grow-1 d-flex flex-column scrollable-0";
		this.ui.body.dataset.draggable = "false";

		this.ui.buttons.append(this.ui.buttons.maximize, this.ui.buttons.minimize, this.ui.buttons.close);
		this.ui.header.append(this.ui.buttons, this.ui.title);
		this.ui.root.append(this.ui.header, this.ui.body);
		this.on('ready-to-show', () => {
			new BSN.Tooltip(this.ui.buttons.maximize);
			new BSN.Tooltip(this.ui.buttons.minimize);
			// new BSN.Tooltip(this.ui.buttons.close); Tooltip are being left unclosed when window closes.
		});
		console.log("rendered")
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
			windowCollection[windowCollection.indexOf(this)] = undefined;
		}, shell.ui.fadeAnimation)
		// TODO: Implement
	}

	close() {
		let cancel = false;
		let e = {
			preventDefault: function () {
				cancel = true;
			}
		};
		this.emit('close', e);
		if (this.fullscreen) this.setFullScreen(false);
		Elements.Bar.classList.remove("maximized");
		if (!cancel) this.destroy()
	}

	focus() {
		let _this = this;
		if (!this.isFocused()) {
			this.flashFrame(false);
			setTimeout(() => this.updateThumbnail(), 300);
			windowCollection.forEach(win => {
				if (_this !== win && win)
					win.blur()
			});
			this.ui.root.classList.replace("shadow-sm", "shadow");
			this.ui.buttons.maximize.classList.remove("btn-outline-success");
			this.ui.buttons.minimize.classList.remove("btn-outline-warning");
			this.emit("focus");
		}
	}

	blur() {
		if (this.isFocused()) {
			this.ui.root.classList.replace("shadow", "shadow-sm");
			this.ui.buttons.maximize.classList.add("btn-outline-success");
			this.ui.buttons.minimize.classList.add("btn-outline-warning");
			this.emit("blur");
		}
	}

	updateThumbnail() {
	}

	isFocused() {
		return this.ui.root.classList.contains("shadow");
	}

	isDestroyed() {
		return !document.body.contains(this.ui.root);
	}

	show() {
		if (!this.ready) this._awaitingShow = true; else {
			this.showInactive();
			this.focus();
		}
	}

	showInactive() {
		this.ui.root.classList.remove("d-none");
		setImmediate(e => this.ui.root.classList.add("show"));
		this.moveTop();
		if (this.isMaximized())
			Elements.Bar.classList.add("maximized");
	}

	hide() {
		this.ui.root.classList.remove("show");
		Elements.Bar.classList.remove("maximized");
		setTimeout(e => this.ui.root.classList.add("d-none"), shell.ui.fadeAnimation);
	}

	isVisible() {
		return this.ui.root.classList.contains("show") && !this.isDestroyed();
	}

	isModal() {
		// TODO: Modal windows
	}

	unmaximize() {
		this.restore();
	}

	isMaximized() {
		return this.ui.root.classList.contains("maximized");
	}

	maximize() {
		if (this.fullscreen) this.setFullScreen(false);
		this.show();
		this.ui.root.classList.add("maximized");
		Elements.Bar.classList.add("maximized");
		this.emit('maximize');
	}

	minimize() {
		if (this.fullscreen) this.setFullScreen(false);
		this.hide();
		this.blur();
	}

	restore() {
		this.show();
		if (shell.isMobile) return;
		this.ui.root.classList.remove("maximized");
		Elements.Bar.classList.remove("maximized");
		this.emit('restore');
		this.emit('unmaximize');
	}

	isMinimized() {
		return this.isVisible();
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
		// TODO: What?
	}

	setSize(width, height) {
		if (shell.isMobile) return;
		this.ui.root.style.width = width + "px";
		this.ui.root.style.height = height + "px";
		this.emit('resize');
	}

	getSize() {
		return [this.ui.root.clientWidth, this.ui.root.clientHeight];
	}

	setContentSize(width, height) {
		if (shell.isMobile) return;
		this.ui.root.style.width = width + this._offsets.left + this._offsets.right + "px";
		this.ui.root.style.height = height + this._offsets.top + this._offsets.bottom + "px";
		this.emit('resize');
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
		if(this.isResizable() === bool) return;
		if(bool) {
			let prevX = 0, prevY = 0, size = 10, corners = {
				topLeft: document.createElement("div"),
				top: document.createElement("div"),
				topRight: document.createElement("div"),
				right: document.createElement("div"),
				bottomRight: document.createElement("div"),
				bottom: document.createElement("div"),
				bottomLeft: document.createElement("div"),
				left: document.createElement("div")
			};
			let triggerResizer = function(e) {
				self.isResizing = e.currentTarget.resizer;
				prevX = e.clientX;
				prevY = e.clientY;
			};
			corners.topLeft.style.cssText = `position:absolute;top: -${size}px; left:-${size}px; width:${2 * size}px; height:${2 * size}px; cursor: nwse-resize`;
			corners.topLeft.resizer = 1;
			corners.topLeft.addEventListener("mousedown", triggerResizer);
			corners.top.style.cssText = `position:absolute;top: -${size}px; left:${size}px; width:calc(100% - ${2 * size}px); height:${2 * size}px; cursor: ns-resize`;
			corners.top.addEventListener("mousedown", triggerResizer);
			corners.top.resizer = 2;
			corners.topRight.style.cssText = `position:absolute;top: -${size}px; right:-${size}px; width:${2 * size}px; height:${2 * size}px; cursor: nesw-resize`;
			corners.topRight.addEventListener("mousedown", triggerResizer);
			corners.topRight.resizer = 3;
			corners.right.style.cssText = `position:absolute;top: ${size}px; right:-${size}px; width:${2 * size}px; height:calc(100% - ${2 * size}px); cursor: ew-resize`;
			corners.right.addEventListener("mousedown", triggerResizer);
			corners.right.resizer = 4;
			corners.bottomRight.style.cssText = `position:absolute;bottom: -${size}px; right:-${size}px; width:${2 * size}px; height:${2 * size}px; cursor: nwse-resize`;
			corners.bottomRight.addEventListener("mousedown", triggerResizer);
			corners.bottomRight.resizer = 5;
			corners.bottom.style.cssText = `position:absolute;bottom: -${size}px; left:${size}px; width:calc(100% - ${2 * size}px); height:${2 * size}px; cursor: ns-resize`;
			corners.bottom.addEventListener("mousedown", triggerResizer);
			corners.bottom.resizer = 6;
			corners.bottomLeft.style.cssText = `position:absolute;bottom: -${size}px; left: -${size}px; width:${2 * size}px; height:${2 * size}px; cursor: nesw-resize`;
			corners.bottomLeft.addEventListener("mousedown", triggerResizer);
			corners.bottomLeft.resizer = 7;
			corners.left.style.cssText = `position:absolute;top: ${size}px; left: -${size}px; width:${2 * size}px; height:calc(100% - ${2 * size}px); cursor: ew-resize`;
			corners.left.addEventListener("mousedown", triggerResizer);
			corners.left.resizer = 8;
			this.ui.root.append.apply(this.ui.root, Object.values(corners));
			document.body.addEventListener("mouseup", e => self.isResizing = false);
			this.resizerTrigger = e => {
				let elem = self.ui.root;
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
		if(this.isMovable() === bool) return;
		if(bool) {
			let prevX = 0, prevY = 0, isDragging = false, cancel = false, force = false;
			self.drag = e => {
				if (isDragging && !self.isResizing && (!cancel || force)) {
					self.ui.root.style.left = CSS.px(e.clientX - prevX);
					self.ui.root.style.top = CSS.px(e.clientY - prevY);
				} else {
					prevX = e.clientX - self.ui.root.offsetLeft;
					prevY = e.clientY - self.ui.root.offsetTop;
				}
			};
			self.mouseUpDrag = e => {
				isDragging = false;
				cancel = false;
				force = false;
				document.body.style.cursor = "default";
			};
			document.body.addEventListener("mouseup", self.mouseUpDrag);
			document.body.addEventListener("mousemove", self.drag);
			self.ui.root.addEventListener("mousedown", () => {
				isDragging = true;
				if (!self.isResizing && (!cancel || force)) document.body.style.cursor = "move";
			});
			self.ui.root.querySelectorAll("[data-draggable='true']").forEach(elem => {
				elem.addEventListener("mousedown", () => force = true)
			});
			self.ui.root.querySelectorAll("[data-draggable='false']").forEach(elem => {
				elem.addEventListener("mousedown", () => cancel = true)
			});
		} else {
			if(self.drag)
				document.body.removeEventListener("mousemove", self.drag);
			if(self.mouseUpDrag)
				document.body.removeEventListener("mouseup", self.mouseUpDrag);
		}
		this._isMovable = bool;
	}

	isMovable() {
		return this._isMovable;
	}

	setMinimizable(bool) {
		this.ui.buttons.minimize.classList.toggle("d-none", !bool);
	}

	isMinimizable() {
		return this.ui.buttons.minimize.classList.contains("d-none");
	}

	setMaximizable(bool) {
		this.ui.buttons.maximize.classList.toggle("d-none", !bool);
	}

	isMaximizable() {
		return this.ui.buttons.maximize.classList.contains("d-none");
	}

	setClosable(bool) {
		this.ui.buttons.close.classList.toggle("d-none", !bool);
	}

	isClosable() {
		return this.ui.buttons.close.classList.contains("d-none");
	}

	setAlwaysOnTop(flag) {
		this.alwaysOnTop = flag; // TODO: Always On Top windows
	}

	isAlwaysOnTop() {
		return this.alwaysOnTop;
	}

	center() {
		if (shell.isMobile) return;
		if (this.isMaximized()) return;
		let root = this.ui.root;
		root.style.left = CSS.px(document.body.clientWidth - root.clientWidth);
		root.style.top = CSS.px((document.body.clientHeight - root.clientHeight) / 2 - Elements.Bar.clientHeight);
		console.log("centered");
	}

	setPosition(x, y) {
		if (shell.isMobile) return;
		this.ui.root.style.left = x + "px";
		this.ui.root.style.top = y + "px";
	}

	getPosition() {
		return [this.ui.root.offsetLeft, this.ui.root.offsetTop];
	}

	setContentPosition(x, y) {
		if (shell.isMobile) return;
		this.ui.root.style.left = x + this._offsets.left + "px";
		this.ui.root.style.top = y + this._offsets.top + "px";
	}

	getContentPosition() {
		return [
			this.ui.root.offsetLeft + this._offsets.left,
			this.ui.root.offsetTop + this.ui.body.offsetTop + (shell.isMobile ? -29 : 0)
		];
	}

	setTitle(title) {
		this.ui.title.innerHTML = title;
		this.emit("title-updated", title);
	}

	flashFrame(flag) {
		if(this.isFocused() || !this.task) return;
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
		if (this.isMaximized()) this.restore(); else this.maximize();
	}
};