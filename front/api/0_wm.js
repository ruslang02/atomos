	const fs = require("fs").promises;
	const path = require("path");
	const EventEmitter = require("events");
	const interact = require("interactjs");
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
		arguments: {}
	}
	let wCount = 1;
	let windowCollection = []; // Contains all AppWindow instances

	let windows = []; // Contains all options that windows have. NOT RECOMMENDED to rely on.
	function getError(errno, app) {
		let errObj = {
			errno: errno,
			message: errors[errno].replace('$app', app)
		};
		return errObj.message;
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
			this.ui.root.style.left = Math.round(event.dx + this.ui.root.offsetLeft) + 'px';
			this.ui.root.style.top = Math.round(event.dy + this.ui.root.offsetTop) + 'px';
			if(Menu.getFocusedMenu()) Menu.getFocusedMenu().close();
		}
		_resize(event) {
			if(!this.isFocused()) this.show()
			this.ui.root.style.width  = event.rect.width + 'px';
			this.ui.root.style.height = event.rect.height + 'px';
			this.ui.root.style.left = event.rect.left + 'px';
			this.ui.root.style.top = event.rect.top + 'px';
			clearTimeout(this.resizeTimeout);
			this.resizeTimeout = setTimeout(e => {
				this.updateThumbnail();
				this.emit('resized');
			}, 500)
			if(Menu.getFocusedMenu()) Menu.getFocusedMenu().close();
			this.emit('resize');
		}
		_update(p, n) {
			switch (p) {
				case "minWidth":
				case "minHeight":
				case "maxWidth":
				case "maxHeight":
					if(isMobile) return;
					this.ui.root.style[p] = n;
					break;
				case 'resizable':
					if(isMobile) return;
					if(n) interact(this.ui.root).resizable({
						edges: {
							top: true,
							left: true,
							bottom: true,
							right: true
						},
						restrictSize: {
							min: { width: this.options.minWidth + this._offsets.left + this._offsets.right, height: this.options.minHeight + this._offsets.top + this._offsets.bottom },
							max: { width: this.options.maxWidth + this._offsets.left + this._offsets.right, height: this.options.maxHeight + this._offsets.top + this._offsets.bottom }
						},
						enabled: true,
						onmove: e => this._resize(e),
						onresizemove: e => this.show()
					}); else interact(this.ui.root).resizable({enabled: false})
					break;
				case 'draggable':
					if(isMobile) return;
					if(n) interact(this.ui.root).draggable({
						allowFrom: "[data-draggable]",
						ignoreFrom: "button:not([data-draggable='true']), input:not([data-draggable='true']), [data-draggable='false']",
						enabled: true,
					 	//inertia: true,
						onmove: e => this._drag(e),
						ondragmove: e => this.show()
					}).pointerEvents({allowFrom: ''}); else interact(this.ui.root).draggable({enabled: false});
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
				case 'alwaysOnTop':
					this.alwaysOnTop = n;
					break;
			}
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
			if(!this.options.autoSize) {
				this.setContentSize(this.options.width, this.options.height);
			}
			console.log("painted")
		}
		_render() {
			let _this = this;
			this.ui = this.ui || {}

			this.ui.root = document.createElement("window");
			this.ui.root.id = this.id;
			this.ui.root.className = "shadow-sm border scrollable-0 fade card position-absolute bg-semiwhite";
			this.ui.header = document.createElement("window-header");
			this.ui.header.className = "d-flex align-items-center flex-shrink-0 border-bottom px-2 py-1";
			this.ui.header.setAttribute("data-draggable", true);
			this.ui.header.addEventListener("dblclick", e => this._toggle());
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
			this.ui.body.className = "flex-grow-1 d-flex flex-column scrollable-0";
			//this.ui.body.setAttribute("data-draggable", false);

			this.ui.buttons.append(this.ui.buttons.minimize, this.ui.buttons.maximize, this.ui.buttons.close);
			this.ui.header.append(this.ui.title, this.ui.buttons);
			this.ui.root.append(this.ui.header, this.ui.body);

			console.log("rendered")

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
			if(similar && similar.eventNames().includes("second-instance")) {
				let e = {
					returnValue: undefined,
					preventDefault: e => {
						e.returnValue = true;
					}
				}
				similar.emit("second-instance", e, args);
				if(e.returnValue === undefined) return;
			}
			console.time("full render");
			const winID = wCount++;
			const appRoot = path.join(osRoot, 'apps', prog);
			let appOptions = JSON.parse(await fs.readFile(appRoot + "/package.json"));
			let options = Object.assign({}, defaultOptions, appOptions, launchOptions, {arguments: args});

			if(options.main.ui) {
				await fs.access(appRoot + "/" + options.main.ui);
				if(options.main.worker)
					await fs.access(appRoot + "/" + options.main.worker);
			} else
				await fs.access(appRoot + "/" + options.main);

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
			win._paint();
			win.file = path.join(osRoot, "apps", prog, options.main.ui || options.main);
			console.time("app render")
			if(options.main.worker)
				win.worker = new Worker(path.join(osRoot, "apps", prog, options.main.worker));
			await new AsyncFunction("__dirname", "root", "WINDOW_ID", await fs.readFile(win.file))(path.join(win.file, ".."), win.ui.body, win.id);
			console.timeEnd("app render")
			win._initEvents();
			if(isMobile) win.maximize();
			win._update("draggable", win.options.draggable);
			win._update("resizable", win.options.resizable);
			if(win.options.center) win.center();
			if(!win.options.skipTaskbar) win.task = new TaskManager(winID);
			win.ready = true;
			win.emit('ready-to-show');
			if(win._awaitingShow) win.show();
			setInterval(e => win.updateThumbnail(), 500)
			console.timeEnd("full render");
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

		destroy() {
				this.hide();
				setTimeout(e => {
					this.ui.root.remove();
					this.emit('closed');
					windowCollection[windowCollection.indexOf(this)] = undefined;
				}, FADE_ANIMATION_DURATION)
			// TODO: Implement
		}
		close() {
			let cancel = false;
			let e = {
				preventDefault: function() {
					cancel = true;
				}
			}
			this.emit('close', e);
			if(this.fullscreen) this.setFullScreen(false);
			Elements.Bar.classList.remove("maximized");
			if(!cancel) this.destroy()
		}
		focus() {
			let _this = this;
			if(!this.isFocused()) {
			setTimeout(e => this.updateThumbnail(), 300);
				windowCollection.forEach(win => {
					if(_this !== win && win)
						win.blur()
				});
				this.ui.root.classList.replace("shadow-sm", "shadow");
				this.ui.buttons.maximize.classList.remove("btn-outline-success");
				this.ui.buttons.minimize.classList.remove("btn-outline-warning");
				this.emit("focus");
			}
		}
		blur() {
			if(this.isFocused()) {
				this.ui.root.classList.replace("shadow", "shadow-sm");
				this.ui.buttons.maximize.classList.add("btn-outline-success");
				this.ui.buttons.minimize.classList.add("btn-outline-warning");
				this.emit("blur");
			}
		}
		updateThumbnail() {
			let _this = this;
			if(isMobile && !this.isFocused()) return;
			if(!Registry.get("system.enableThumbnails")) return;
			wc.capturePage(this.getContentBounds(), image => {
				_this.thumbnail = image.toDataURL();
				_this.emit("thumbnail-changed");
			})

		}
		isFocused() {
			return this.ui.root.classList.contains("shadow");
		}
		isDestroyed() {
			return document.body.contains(this.ui.root);
		}
		show() {
			if(!this.ready) this._awaitingShow = true; else {
				this.showInactive();
				this.focus();
			}
		}
		showInactive() {
			this.ui.root.classList.remove("d-none");
			setImmediate(e => this.ui.root.classList.add("show"));
			this.moveTop();
			if(this.isMaximized())
				Elements.Bar.classList.add("maximized");
		}
		hide() {
			this.ui.root.classList.remove("show");
			Elements.Bar.classList.remove("maximized");
			setTimeout(e => this.ui.root.classList.add("d-none"), FADE_ANIMATION_DURATION);
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
			if(this.fullscreen) this.setFullScreen(false);
			this.show();
			this.ui.root.classList.add("maximized");
			Elements.Bar.classList.add("maximized");
			this.emit('maximize');
		}
		minimize() {
			if(this.fullscreen) this.setFullScreen(false);
			this.hide();
			this.blur();
		}
		restore() {
			this.show();
			if(isMobile) return;
			this.ui.root.classList.remove("maximized");
			Elements.Bar.classList.remove("maximized");
			this.emit('restore');
			this.emit('unmaximize');
		}
		isMinimized() {
			return this.isVisible();
		}
		setFullScreen(flag) {
			Elements.Bar.classList.toggle("d-flex", !flag)
			if(Elements.Bar.classList.toggle("d-none", flag)) {
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
			if(isMobile) return;
			this.ui.root.style.width = width + "px";
			this.ui.root.style.height = height + "px";
			this.emit('resize');
		}
		getSize() {
			return [this.ui.root.clientWidth, this.ui.root.clientHeight];
		}
		setContentSize(width, height) {
			if(isMobile) return;
			this.ui.root.style.width = width + this._offsets.left + this._offsets.right + "px";
			this.ui.root.style.height = height + this._offsets.top + this._offsets.bottom + "px";
			this.emit('resize');
		}
		getContentSize() {
			return [this.ui.body.clientWidth, this.ui.body.clientHeight];
		}
		setMinimumSize(width, height) {
			this.options.minWidth = width;
			this.options.minHeight = height;
		}
		getMinimumSize() {
			return [this.options.minWidth, this.options.minHeight];
		}
		setMaximumSize(width, height) {
			this.options.maxWidth = width;
			this.options.maxHeight = height;
		}
		getMaximumSize() {
			return [this.options.maxWidth, this.options.maxHeight];
		}
		setResizable(bool) {
			this.options.resizable = bool;
		}
		isResizable() {
			return this.options.resizable;
		}
		setMovable(bool) {
			this.options.draggable = bool;
		}
		isResizable() {
			return this.options.draggable;
		}
		setMinimizable(bool) {
			this.options.minimizable = bool;
		}
		isMinimizable() {
			return this.options.minimizable;
		}
		setMaximizable(bool) {
			this.options.maximizable = bool;
		}
		isMaximizable() {
			return this.options.maximizable;
		}
		setFullScreenable(bool) {
			this.options.fullscreenable = bool;
		}
		isFullScreenable() {
			return this.options.fullscreenable;
		}
		setClosable(bool) {
			this.options.closable = bool;
		}
		isClosable() {
			return this.options.closable;
		}
		setAlwaysOnTop(flag) {
			this.alwaysOnTop = flag; // TODO: Always On Top windows
		}
		isAlwaysOnTop() {
			return this.alwaysOnTop;
		}
		center() {
			if(isMobile) return;
			if(this.isMaximized()) return;
			this.ui.root.style.left = (document.body.clientWidth - this.ui.root.clientWidth) / 2 + "px"
			this.ui.root.style.top = (document.body.clientHeight - this.ui.root.clientHeight) / 2 - document.querySelector("taskbar").clientHeight + "px"
			console.log("centered");
		}
		setPosition(x, y) {
			if(isMobile) return;
			this.ui.root.style.left = x + "px";
			this.ui.root.style.top = y + "px";
		}
		getPosition() {
			return [this.ui.root.offsetLeft, this.ui.root.offsetTop];
		}
		setContentPosition(x, y) {
			if(isMobile) return;
			this.ui.root.style.left = x + this._offsets.left + "px";
			this.ui.root.style.top = y + this._offsets.top + "px";
		}
		getContentPosition() {
			return [this.ui.root.offsetLeft + this._offsets.left, this.ui.root.offsetTop + this.ui.body.offsetTop + (isMobile ? -29 : 0)]
		}
		setTitle(title) {
			this.ui.title.innerHTML = title;
			this.emit("title-updated", title);
		}
		getTitle() {
			return this.options.title;
		}
		flashFrame(flag) {
			// TODO: Flash frame windows
		}
		setSkipTaskbar(skip) {
			this.options.skipTaskbar = skip;
		}
		setKiosk(flag) {
			this.options.kiosk = flag;
		}
		isKiosk() {
			return this.options.kiosk;
		}

		getFile() {
			return this.file;
		}
		getAppName() {
			return this.prog;
		}
		moveTop() {
			let zCount = 0;
				AppWindow.getAllWindows().forEach(win => {
					if(!win) return;
					if(win.isAlwaysOnTop()) return;
					let z = parseInt(win.ui.root.style.zIndex);
					if(z > zCount) zCount = z;
				});
			if(this.alwaysOnTop) {
				AppWindow.getAllWindows().forEach(win => {
					if(!win) return;
					if(!win.isAlwaysOnTop()) return;
					let z = parseInt(win.ui.root.style.zIndex);
					if(z > zCount) zCount = z;
				});
			}
			this.ui.root.style.zIndex = zCount + 1;
		}
		_toggle() {
			if(this.isMaximized()) this.restore(); else this.maximize();
		}
	}


	const errors = [
		"",
		"Application $app does not have a valid JSON-based application file. Reinstalling the application is recommended.",
		"Application $app does not have an entry file. Reinstalling the application is recommended."
	]
