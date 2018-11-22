const EventEmitter = require("events");
const registry = new Registry('system');
const defaultOptions = {
	click: undefined,
	role: undefined,
	type: "normal",
	label: "",
	sublabel: "",
	accelerator: "",
	icon: "",
	enabled: true,
	visible: true,
	checked: false,
	submenu: [],
	id: "",
	position: "",
	setKeyboardEvents: true
};


if (!registry.get().menu) registry.set(Object.assign({}, registry.get(), {
	menu: {
		showIcons: true,
		showAccelerators: false
	}
}));

window.Menu = class Menu extends EventEmitter {
	constructor(win, template = []) {
		super();
		let _this = this;
		this.activeElement = document.activeElement;
		template.forEach((item, i, arr) => {
			arr[i] = Object.assign({}, defaultOptions, item);
		});
		let proxyChange = {
			get(target, prop) {
				if (typeof target[prop] === 'object' && target[prop] !== null) {
					return new Proxy(target[prop], proxyChange)
				} else {
					return target[prop];
				}
			},
			set(target, prop, value) {
				target[prop] = value;
				_this.renderMenu();
				return true;
			}
		};
		this.items = new Proxy(template, proxyChange);
		this.menu = document.createElement("menu");
		this.menu.className = "dropdown-menu fade d-flex flex-column shadow" + (shell.ui.darkMode ? " bg-dark" : "");
		this.menu.close = () => this.closePopup();
		window.addEventListener("click", () => {
			let event = {
				preventDefault: function () {
					event.returnValue = false;
				},
				returnValue: true
			};
			_this.emit('menu-will-close', event);
			if (event.returnValue) _this.closePopup();
		});
		this.window = win;
		this.id = shell.uniqueId();
		this.menu.id = this.id;
		this.renderMenu();
	}

	static getFocusedMenu() {
		return document.querySelector("menu");
	}

	static buildFromTemplate(win, template) {
		return new Menu(win, template);
	}

	renderMenu() {
		let _this = this;
		this.menu.innerHTML = "";
		let shortcuts = [];

		function acceleratorEvent(e) {
			if (!(e.ctrlKey || e.shiftKey || e.altKey)) return;
			if (_this.window)
				if (!_this.window.isFocused()) return;
			shortcuts.forEach(acc => {
				if ((e.ctrlKey ^ !acc.ctrl) && (e.shiftKey ^ !acc.shift) && (e.altKey ^ !acc.alt) && (e.key.toLowerCase() === acc.key.toLowerCase()))
					acc.click.call(acc.menuItem, _this.window, _this.activeElement);
			})
		}

		window.removeEventListener('keydown', acceleratorEvent);
		let hasAccelerators = false;
		for (const item of this.items) {
			if (item.visible) {
				let menuItem;
				if (item.type === "normal") {
					if (item.accelerator && item.setKeyboardEvents) {
						hasAccelerators = true;
						shortcuts.push({
							click: item.click,
							ctrl: item.accelerator.includes("Ctrl+"),
							alt: item.accelerator.includes("Alt+"),
							shift: item.accelerator.includes("Shift+"),
							key: item.accelerator.substring(item.accelerator.lastIndexOf("+") + 1),
							menuItem: item
						});
					}
					menuItem = document.createElement("button");
					menuItem.className = "dropdown-item d-flex align-items-center";
					menuItem.onclick = () => {
						(item.click || (() => console.log("This menu item does not have an onclick event."))).call(null, item, _this.window, _this.activeElement);
					};
					if (item.icon && Registry.get('system.showMenuIcons') !== false) {
						menuItem.classList.add("px-3");
						let menuIcon = document.createElement("icon");
						menuIcon.className = "mdi mdi-18px flex-shrink-0 d-flex lh-18 mr-1 mdi-" + item.icon;
						menuItem.append(menuIcon);
					}
					let menuTitle = document.createElement("div");
					menuTitle.className = "flex-grow-1 text-truncate";
					menuTitle.innerText = item.label;
					menuItem.append(menuTitle);
					if (item.accelerator && registry.get().menu.showAccelerators) {
						let menuAccelerator = document.createElement("div");
						menuAccelerator.className = "ml-auto pl-4 flex-shrink-0";
						menuAccelerator.style.opacity = "0.7";
						menuAccelerator.innerText = item.accelerator;
						menuItem.append(menuAccelerator);
					}
				} else if (item.type === "separator") {
					menuItem = document.createElement("div");
					menuItem.className = "dropdown-divider" + (shell.ui.darkMode ? " border-secondary" : "");
				} else if (item.type === "header") {
					menuItem = document.createElement("div");
					menuItem.className = "dropdown-header font-weight-bolder";
					menuItem.innerText = item.label;
				} else if (item.type === "checkbox") {
					menuItem = document.createElement("button");
					menuItem.className = "dropdown-item d-flex align-items-center custom-control custom-checkbox pl-4";
					let menuInput = document.createElement("input");
					menuInput.className = "custom-control-input";
					menuInput.type = "checkbox";
					menuItem.onclick = () => {
						menuInput.checked = item.checked = !menuInput.checked;
						(item.click || (() => console.log("This menu item does not have an onclick event."))).call(null, item, _this.window, _this.activeElement);
					};
					menuInput.checked = item.checked;
					let menuTitle = document.createElement("label");
					menuTitle.className = "flex-grow-1 custom-control-label" + (shell.ui.darkMode ? " text-white" : "");
					menuTitle.innerText = item.label;
					menuItem.append(menuInput, menuTitle);
				}
				menuItem.disabled = !item.enabled;
				menuItem.id = "dm_" + (item.id || Math.random().toString(36).substr(2, 9));
				menuItem.style.order = item.position || 0;
				_this.menu.append(menuItem);
			}
		}

		if (hasAccelerators) window.addEventListener('keydown', acceleratorEvent);
	}

	append(item) {
		this.insert(0, item);
	}

	getMenuItemById(id) {
		let item = this.items.find(item => {
			return item.id === id
		});
		return item || undefined;
	}

	insert(pos, item) {
		this.items.push(Object.assign({}, defaultOptions, item, {
			position: pos
		}));
	}

	popup(options = {}) {
		document.querySelectorAll("menu").forEach(menu => menu.close());
		const defaultPopUpOptions = {
			window: AppWindow.getFocusedWindow(),
			x: shell.getCursorScreenPoint().x,
			y: shell.getCursorScreenPoint().y,
			callback: null
		};
		//this.activeElement.classList.add("active");
		options = Object.assign({}, defaultPopUpOptions, options);
		this.window = options.window;
		let event = {
			preventDefault: function () {
				event.returnValue = false;
			},
			returnValue: true
		};
		this.emit('menu-will-show', event);
		if (event.returnValue) {
			document.body.appendChild(this.menu);
			if (options.x + this.menu.offsetWidth > window.innerWidth) options.x = window.innerWidth - this.menu.offsetWidth;
			if (options.y + this.menu.offsetHeight > window.innerHeight) options.y = options.y - this.menu.offsetHeight;

			this.menu.style.top = options.y + "px";
			this.menu.style.left = options.x + "px";
			this.menu.classList.add("show");
			if (options.callback)
				this.once('menu-will-close', options.callback);
		}
	}

	closePopup() {
		this.menu.classList.remove("show");
		//this.activeElement.classList.remove("active");
		setTimeout(() => this.menu.remove(), shell.ui.fadeAnimation);
	}

	togglePopup(options) {
		if (this.menu.classList.contains("show")) this.closePopup();
		else this.popup(options);
		return this.menu.classList.contains("show")
	}
};