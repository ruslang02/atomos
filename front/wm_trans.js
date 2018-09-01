module.exports = (root) => {
	const fs = require("fs-extra");
	const path = require("path");
	const EventEmitter = require("events");
	const interact = require("interactjs");
	const defaultOptions = {
		width: 400,
		height: 300,
		x: 100,
		y: 100,
		minWidth: 50,
		minHeight: 50,
		maxHeight: 4320,
		maxWidth: 4320,
		maximizable: true,
		minimizable: true,
		closable: true,
		show: true,
		showOnLoad: false,
		draggable: true,
		resizable: true,
		alwaysOnTop: false,
		autoSize: false
	}
	let wCount = 1;
	let windowCollection = [];

	let windows = [];

	root.AppWindow = class Window extends EventEmitter {
		constructor(wID) {
			if(typeof wID !== "number") throw new Error("Can not be called directly: use Window.fromId or Window.launch");
			super();
			let _this = this;
			this.id = wID;
			this.dateCreated = new Date().getTime();
			this.options = windows[wID];
			this.isReady = false;
		}
		_drag(event) {
			this.x += event.dx;
			this.y += event.dy;
			this.ui.root.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px)';
		}
		_resize(event) {
    this.ui.root.style.width  = event.rect.width + 'px';
    this.ui.root.style.height = event.rect.height + 'px';
			this.x = event.rect.left;
			this.y = event.rect.top;
			this.ui.root.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px)';

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
					if(n) interact(this.ui.root).resizable({
						edges: {
							top: true,
							left: true,
							bottom: true,
							right: true
						},
						enabled: true,
						onmove: e => this._resize(e)
					}); else interact(this.ui.root).resizable({enabled: false})
					break;
				case 'draggable':
					if(n) interact(this.ui.root).draggable({
						allowFrom: "[data-draggable]",
						ignoreFrom: "button, input, [data-draggable=false]",
						enabled: true,
						onmove: e => this._drag(e)
					}); else interact(this.ui.root).draggable({enabled: false});
					break;
				case 'maximizable':
					this.ui.buttons.querySelector('.btn-success').classList.add("d-none", !n);
					break;
				case 'minimizable':
					this.ui.buttons.querySelector('.btn-warning').classList.add("d-none", !n);
					break;
				case 'closable':
					this.ui.buttons.querySelector('.btn-danger').classList.add("d-none", !n);
					break;
			}
		}
		_paint() {
			let _this = this;
			let offset = {
				// width: this.ui.root.outerWidth() - this.ui.body.outerWidth(), TODO: If needed, make it work
				// height: this.ui.root.outerHeight() - this.ui.body.outerHeight()
				width: 2,
				height: 43
			};
			let winProps = {
				width: this.options.width + offset.width,
				height: this.options.height + offset.height,
				maxHeight: this.options.maxHeight + offset.height,
				maxWidth: this.options.maxWidth + offset.width,
				minHeight: this.options.minHeight + offset.height,
				minWidth: this.options.minWidth + offset.width
			}
			document.body.appendChild(this.ui.root);
			if(!this.options.autoSize) {
				this.ui.root.style.height = winProps.height + "px";
				this.ui.root.style.width = winProps.width + "px";
			}
			this.ui.root.style.minWidth = winProps.minWidth + "px";
			this.ui.root.style.maxWidth = winProps.maxWidth + "px";
			this.ui.root.style.minHeight = winProps.minHeight + "px";
			this.ui.root.style.maxHeight = winProps.maxHeight + "px";

			console.log("painted")
		}
		_render() {
			let _this = this;
			this.ui = this.ui || {}
			let minBtn = document.createElement("button");
			let maxBtn = document.createElement("button");
			let closeBtn = document.createElement("button");

			this.ui.root = document.createElement("window");
			this.ui.root.id = this.id;
			this.ui.root.style.left = 0;
			this.ui.root.style.top = 0;
			this._drag({dx:this.options.x,dy:this.options.y})
			this.ui.root.className = "rounded shadow border card position-fixed bg-white";
			this.ui.root.style.display = "none";

			this.ui.header = document.createElement("window-header");
			this.ui.header.className = "d-flex align-items-center flex-shrink-0 bg-light border-bottom p-2";
			this.ui.header.setAttribute("data-draggable", true);

			this.ui.title = document.createElement("window-title");
			this.ui.title.className = "flex-grow-1";
			this.ui.title.innerText = this.options.title;

			this.ui.buttons = document.createElement("window-buttons");
			this.ui.buttons.className = "ml-auto d-flex flex-shrink-0";
			this.ui.buttons.setAttribute("data-draggable", false);

			minBtn.className = "btn btn-warning p-2 material-icons ml-1" + (this.options.minimizable ? "" : " d-none");
			minBtn.addEventListener("click", e => {
				_this.minimize();
			});
			maxBtn.className = "btn btn-success p-2 material-icons ml-1" + (this.options.maximizable ? "" : " d-none");
			maxBtn.addEventListener("click", e => {
				_this._toggle();
			});
			closeBtn.className = "btn btn-danger p-2 material-icons ml-1" + (this.options.closable ? "" : " d-none");
			closeBtn.addEventListener("click", e => {
				_this.close();
			});

			this.ui.body = document.createElement("window-body");
			this.ui.body.className = "flex-grow-1 text-truncate";
			this.ui.body.setAttribute("data-draggable", false);

			this.ui.buttons.appendChild(minBtn);
			this.ui.buttons.appendChild(maxBtn);
			this.ui.buttons.appendChild(closeBtn);
			this.ui.header.appendChild(this.ui.title);
			this.ui.header.appendChild(this.ui.buttons);
			this.ui.root.appendChild(this.ui.header);
			this.ui.root.appendChild(this.ui.body);

			console.log("rendered")

		}
		static async launch(prog, args = {}, launchOptions = {}) {
			console.time();
			const winID = wCount;
			const appRoot = path.join(osRoot, 'apps', prog);
			let registry = new Registry("wm");
			if(!registry.get()) registry.set({apps: {}});
			let appOptions = await fs.readJson(appRoot + "/package.json").catch(Promise.reject)

			windows[winID] = new Proxy(Object.assign({}, defaultOptions, appOptions, launchOptions), {
				get: function(obj, prop) {
					return prop in obj ?
					obj[prop] : false;
				},
				set: function(obj, prop, n) {
					obj[prop] = n;
					win._update(prop, n)
				}
			});

			let win = new Window(winID, false);
			win._render();
			windowCollection[winID] = win;
			await win._loadFile(appRoot + "/" + win.options.main);
			win._paint();
			win._initEvents();
			win._update("draggable", win.options.draggable);
			win._update("resizable", win.options.resizable);
			if(win.options.center) win.center();
			console.timeEnd();
			return win;
		}
		_initEvents() {
			let _this = this;
			new ResizeObserver(function() {
				_this.emit('resize');
			}).observe(this.ui.root)
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
			}
			this.isReady = true;
		}
		getFile() {
			return this.file;
		}
		show() {
			this.showInactive();
			this.focus();
		}
		focus() {
			this._deActivateAll();
			this.ui.root.classList.add("shadow", "active")
			this.ui.root.classList.remove("shadow-sm");
		}
		_deActivateAll() {
			document.querySelectorAll("window").forEach(win => {
				win.classList.remove("shadow", "active");
				win.classList.add("shadow-sm");
			});
		}
		isFocused() {
			return this.ui.root.classList.contains("active");
		}
		moveTop() {
			let zCount = 0;
			document.querySelectorAll("window").forEach(function(item) {
				let z = item.style.zIndex;
				if(z > zCount) zCount = z + 1;
			})
			this.ui.root.style.zIndex = zCount;
		}
		hide() {
			this.ui.root.style.display = "none";
		}
		blur() {
			this.ui.root.classList.remove("shadow", "active");
			this.ui.root.classList.add("shadow-sm");
		}
		minimize() {
			this.hide();
			this.blur();
		}
		maximize() {
			this.show();
			this.ui.root.classList.add("maximized");
		}
		restore() {
			this.show();
			this.ui.root.classList.remove("maximized");
		}
		_toggle() {
			if(this.isMaximized()) this.restore(); else this.maximize();
		}
		showInactive() {
			this.ui.root.style.display = "inline-block";
			this.moveTop();
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
			if(!cancel) this.ui.root.remove();
		}
		center() {

			this.x = (document.body.clientWidth - this.ui.root.clientWidth) / 2;
			this.y = (document.body.clientHeight - this.ui.root.clientHeight) / 2 - document.querySelector("taskbar").clientHeight;
			this.ui.root.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px)';
			console.log("centered");
		}
	}
}
