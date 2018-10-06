module.exports = (root) => {
	const fs = require("fs-extra");
	const path = require("path");
	const EventEmitter = require("events");
	const interact = require("interactjs");
	const defaultOptions = {
		width: 400,
		height: 300,
		main: "app.js",
		title: "Application",
		icon: "$SYSTEM_ROOT/icons/Application.png",
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
		arguments: {}
	}
	const windowOffset = {
		// width: this.ui.root.outerWidth() - this.ui.body.outerWidth(), TODO: If needed, make it work
		// height: this.ui.root.outerHeight() - this.ui.body.outerHeight()
		width: 2,
		height: 43
	};
	let wCount = 1;
	let windowCollection = []; // Contains all AppWindow instances

	let windows = []; // Contains all options that windows have. NOT RECOMMENDED to rely on.
	function getError(errno, app) {
		let errObj = {
			errno: errno,
			message: errors[errno].replace('$app', app)
		};
		console.error(errObj.message);
			console.timeEnd();
		return errObj;
	}

	window.AppWindow = class Window extends EventEmitter {
		constructor(wID, prog) {
			if(typeof wID !== "number") throw new Error("Can not be called directly: use Window.fromId or Window.launch");
			super();
			this.id = wID;
			this.dateCreated = new Date().getTime();
			this.options = windows[wID];
			this.arguments = this.options.arguments;
			this.ready = false;
			this.app = prog;
		}
		_drag(event) {
			if(!this.isFocused()) this.show()
			this.ui.root.style.left = (event.dx + this.ui.root.offsetLeft) + 'px';
			this.ui.root.style.top = (event.dy + this.ui.root.offsetTop) + 'px';
		}
		_resize(event) {
			if(!this.isFocused()) this.show()
			this.ui.root.style.width  = event.rect.width + 'px';
			this.ui.root.style.height = event.rect.height + 'px';
			this.ui.root.style.left = event.rect.left + 'px';
			this.ui.root.style.top = event.rect.top + 'px';
		}
		_update(p, n) {
			switch (p) {
				case "minWidth":
				case "minHeight":
				case "maxWidth":
				case "maxHeight":
					this.ui.root.style[p] = n;
					break;
				case 'resizable':
					if(n) $(this.ui.root).resizable({
						handles: "all",
						minWidth: this.options.minWidth + windowOffset.width, minHeight: this.options.minHeight + windowOffset.height,
						maxWidth: this.options.maxWidth + windowOffset.width, maxHeight: this.options.maxHeight + windowOffset.height,
						disabled: false,
						start: e => this.show()
					}); else $(this.ui.root).resizable("disable")
					break;
				case 'draggable':
					if(n) $(this.ui.root).draggable({
						handle: "[data-draggable]",
						cancel: "button, input, [data-draggable=false]",
						disabled: false,
						start: e => this.show()
					}); else $(this.ui.root).draggable("disable");
					break;
				case 'maximizable':
					this.ui.buttons.querySelector('.btn-success').classList.toggle("d-none", !n);
					break;
				case 'minimizable':
					this.ui.buttons.querySelector('.btn-warning').classList.toggle("d-none", !n);
					break;
				case 'closable':
					this.ui.buttons.querySelector('.btn-danger').classList.toggle("d-none", !n);
					break;
				case 'title':
					this.ui.title.innerHTML = n;
					break;
			}
		}
		_paint() {
			console.log(this.ui.root.className)
			document.body.appendChild(this.ui.root);
			if(!this.options.autoSize) {
				this.ui.root.style.height = this.options.height + windowOffset.height + "px";
				this.ui.root.style.width = this.options.width + windowOffset.width + "px";
			}
			console.log("painted")
		}
		_render() {
			let _this = this;
			this.ui = this.ui || {}

			this.ui.root = document.createElement("window");
			this.ui.root.id = this.id;
			this.ui.root.style.left = this.options.x + "px";
			this.ui.root.style.top = this.options.y + "px";
			this.ui.root.style.overflow = "hidden";
			this.ui.root.className = "shadow-sm border fade card position-absolute bg-semiwhite";

			this.ui.header = document.createElement("window-header");
			this.ui.header.className = "d-flex align-items-center flex-shrink-0 border-bottom px-2 py-1";
			this.ui.header.setAttribute("data-draggable", true);

			this.ui.title = document.createElement("window-title");
			this.ui.title.className = "flex-grow-1";
			this.ui.title.style["user-select"] = "none";
			this.ui.title.innerText = this.options.title;

			this.ui.buttons = document.createElement("window-buttons");
			this.ui.buttons.className = "ml-auto d-flex flex-shrink-0";
			this.ui.buttons.setAttribute("data-draggable", false);


			this.ui.buttons.minimize = document.createElement("button");
			this.ui.buttons.maximize = document.createElement("button");
			this.ui.buttons.close = document.createElement("button");

			this.ui.buttons.minimize.className = "btn btn-warning p-2 material-icons" + (this.options.minimizable ? "" : " d-none");
			this.ui.buttons.minimize.addEventListener("click", e => {
				e.stopPropagation();
				_this.minimize();
			});
			this.ui.buttons.maximize.className = "btn btn-success p-2 material-icons ml-2" + (this.options.maximizable ? "" : " d-none");
			this.ui.buttons.maximize.addEventListener("click", e => {
				_this._toggle();
			});
			this.ui.buttons.close.className = "btn btn-danger p-2 material-icons ml-2" + (this.options.closable ? "" : " d-none");
			this.ui.buttons.close.addEventListener("click", e => {
				e.stopPropagation();
				_this.close();
			});

			this.ui.body = document.createElement("window-body");
			this.ui.body.className = "flex-grow-1 d-flex flex-column";
			this.ui.body.setAttribute("data-draggable", false);
			this.ui.body.style.overflow = "hidden";

			this.ui.buttons.append(this.ui.buttons.minimize, this.ui.buttons.maximize, this.ui.buttons.close);
			this.ui.header.append(this.ui.title, this.ui.buttons);
			this.ui.root.append(this.ui.header, this.ui.body);

			console.log("rendered")

		}
		static getFocusedWindow() {
			return (document.querySelector("window.shadow") ? windowCollection[document.body.querySelector("window.shadow").id] : null);
		}
		static getAllWindows() {
			return windowCollection;
		}
		static async launch(prog, args = {}, launchOptions = {}) {
			console.time();
			const winID = wCount++;
			const appRoot = path.join(osRoot, 'apps', prog);
			let registry = new Registry("wm");
			if(!registry.get()) registry.set({apps: {}});
			let appOptions = await fs.readJson(appRoot + "/package.json").catch(e => {return getError(1, prog)});
			let options = Object.assign({}, defaultOptions, appOptions, launchOptions, {arguments: args})
			if(!fs.existsSync(appRoot + "/" + options.main))
				return getError(2, prog);
			windows[winID] = new Proxy(options, {
				get: function(obj, prop) {
					return prop in obj ? obj[prop] : false;
				},
				set: function(obj, prop, n) {
					obj[prop] = n;
					win._update(prop, n)
				}
			});

			let win = new Window(winID, prog);
			win._render();
			windowCollection[winID] = win;
			await win._loadFile(appRoot + "/" + win.options.main);
			win._paint();
			win._initEvents();
			win._update("draggable", win.options.draggable);
			win._update("resizable", win.options.resizable);
			if(win.options.center) win.center();
			if(!win.options.skipTaskbar) win.task = new TaskManager(winID);
			console.timeEnd();
			win.ready = true;
			win.emit('ready-to-show');
			if(win.awaitingShow) win.show();
			return win;
		}
		_initEvents() {
			let _this = this;
			new ResizeObserver(function() {
				_this.emit('resize');
			}).observe(this.ui.root);
			this.ui.root.addEventListener("click", function(e) {
				_this.show();
			});
			Elements.Bar.addEventListener("click", function() {
				_this.blur();
			})
		}
		static fromId(wID) {
			return windowCollection[wID];
		}
		async _loadFile(file) {
			this.ui.body.innerHTML = "";
			this.file = file;
			try {
				new Function("__dirname", "root", "WINDOW_ID", await fs.readFile(file))(path.join(file, ".."), this.ui.body, this.id)
			} catch(e) {
				console.error(e);
			}

		}
		getFile() {
			return this.file;
		}
		getAppName() {
			return this.prog;
		}
		show() {
			if(!this.ready) this.awaitingShow = true; else {
				this.showInactive();
				this.focus();
			}
		}
		focus() {
			let _this = this;
			if(!this.isFocused()) {
				windowCollection.forEach(win => {
					if(_this !== win)
						win.blur()
				});
				this.ui.root.classList.replace("shadow-sm", "shadow");
				this.ui.buttons.maximize.classList.remove("btn-outline-success");
				this.ui.buttons.minimize.classList.remove("btn-outline-warning");
				this.emit("focus");
			}
		}
		isFocused() {
			return this.ui.root.classList.contains("shadow");
		}
		moveTop() {
			let zCount = 0;
			document.querySelectorAll("window").forEach(function(item) {
				let z = parseInt(item.style.zIndex);
				if(z > zCount) zCount = z;
			})
			this.ui.root.style.zIndex = zCount + 1;
		}
		hide() {
			this.ui.root.classList.remove("show");
			Elements.Bar.classList.remove("maximized");
		}
		blur() {
			if(this.isFocused()) {
				this.ui.root.classList.replace("shadow", "shadow-sm");
				this.ui.buttons.maximize.classList.add("btn-outline-success");
				this.ui.buttons.minimize.classList.add("btn-outline-warning");
				this.emit("blur");
			}
		}
		minimize() {
			this.hide();
			this.blur();
		}
		isMaximized() {
			return this.ui.root.classList.contains("maximized");
		}
		maximize() {
			this.show();
			this.ui.root.classList.add("maximized");
			Elements.Bar.classList.add("maximized");
		}
		restore() {
			this.show();
			this.ui.root.classList.remove("maximized");
			Elements.Bar.classList.remove("maximized");
		}
		_toggle() {
			if(this.isMaximized()) this.restore(); else this.maximize();
		}
		showInactive() {
			this.ui.root.classList.add("show");
			this.moveTop();
			if(this.isMaximized())
				Elements.Bar.classList.add("maximized");
		}
		setSize(width, height) {
			this.ui.root.style.width = width + "px";
			this.ui.root.style.height = height + "px";
			this.emit('resize');
		}
		setContentSize(width, height) {
			this.ui.root.style.width = width + "px";
			this.ui.root.style.height = height - this.ui.header.clientHeight + "px";
			this.emit('resize');
		}
		getContentSize() {
			return [this.ui.body.clientWidth, this.ui.body.clientHeight];
		}
		getSize() {
			return [this.ui.root.clientWidth, this.ui.root.clientHeight];
		}
		getMaximumSize() {
			return [this.options.maxWidth, this.options.maxHeight];
		}
		getMinimumSize() {
			return [this.options.minWidth, this.options.minHeight];
		}
		setMaximumSize(width, height) {
			this.options.maxWidth = width;
			this.options.maxHeight = height;
		}
		setMinimumSize(width, height) {
			this.options.minWidth = width;
			this.options.minHeight = height;
		}
		setResizable(bool) {
			this.options.resizable = bool;
		}
		setMovable(bool) {
			this.options.draggable = bool;
		}
		setMaximizable(bool) {
			this.options.maximizable = bool;
		}
		setMinimizable(bool) {
			this.options.minimizable = bool;
		}
		setClosable(bool) {
			this.options.closable = bool;
		}
		close() {
			let cancel = false;
			let e = {
				preventDefault: function() {
					cancel = true;
				}
			}
			this.emit('close', e);
			Elements.Bar.classList.remove("maximized");
			if(!cancel) {
				this.hide();
				setTimeout(e => {
					this.ui.root.remove();
					this.emit('closed', e);
				}, FADE_ANIMATION_DURATION)
			}
		}
		center() {
			if(this.isMaximized()) return;
			this.ui.root.style.left = (document.body.clientWidth - this.ui.root.clientWidth) / 2 + "px"
			this.ui.root.style.top = (document.body.clientHeight - this.ui.root.clientHeight) / 2 - document.querySelector("taskbar").clientHeight + "px"
			console.log("centered");
		}
		setTitle(title) {
			this.ui.title.innerHTML = title;
			this.emit("title-updated", title);
		}
		getTitle() {
			return this.options.title;
		}
	}


	const errors = [
		"",
		"Application $app does not have a valid JSON-based application file. Reinstalling the application is recommended.",
		"Application $app does not have an entry file. Reinstalling the application is recommended."
	]
}
