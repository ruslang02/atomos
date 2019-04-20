const EventEmitter = require("events");
const Registry = require(`@api/Registry`);
const Shell = require(`@api/Shell`);
const AppWindow = require(`@api/WindowManager`);
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


if (!Registry.get("system.menu")) Registry.get("system.menu", {
		showIcons: true,
		showAccelerators: false
});

class Menu extends EventEmitter {
	constructor(template = []) {
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
		this.menu.className = "dropdown-menu fade d-flex flex-column shadow" + (Shell.ui.darkMode ? " bg-dark" : "");
		this.menu.close = () => this.closePopup();
		this.menu.overlay = document.createElement("overlay");
		this.menu.overlay.className = "position-fixed w-100 h-100";
		this.menu.overlay.style.cssText = "top:0;left:0;z-index:-1";
		this.menu.onclick = e => e.stopPropagation();
		this.menu.overlay.onclick = () => {
			let event = {
				preventDefault: () => event.returnValue = false,
				returnValue: true
			};
			_this.emit('menu-will-close', event);
			if (event.returnValue) _this.closePopup();
		};
    let currentWindow = function currentWindow(win) {
      win = win || module.parent;
      if(win.id && win.type === "window") return win;
      else if(win.parent) return currentWindow(win.parent); else return null;
    };
		this.window = AppWindow.fromId(currentWindow.id);
		this.id = Shell.uniqueId();
		this.menu.id = this.id;
		this.renderMenu();
	}

	static getFocusedMenu() {
		return document.querySelector("menu");
	}

	static buildFromTemplate(template) {
		return new Menu(template);
	}

	g(property) {
		if (typeof property === "function") {
			return property();
		} else return property;
	}

	renderMenu() {
		let _this = this;
		this.menu.innerHTML = "";
		this.menu.prepend(this.menu.overlay);
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
					menuItem.onmouseup = e => {
						(item.click || (() => console.log("This menu item does not have an onclick event."))).call(null, item, _this.window, _this.activeElement);
						_this.menu.overlay.onclick(e);

					};
					if (Registry.get('system.showMenuIcons') !== false) {
						menuItem.classList.add("pl-3");
						menuItem.icon = document.createElement("icon");
						menuItem.icon.className = "mdi mdi-18px flex-shrink-0 d-flex lh-21 mr-1 mdi-" + (item.icon || "blank");
						menuItem.append(menuItem.icon);
					}
					let menuTitle = document.createElement("div");
					menuTitle.className = "flex-grow-1 text-truncate lh-21";
					menuTitle.innerText = this.g(item.label).toLocaleString();
					menuItem.append(menuTitle);
					if (item.accelerator && Registry.get('system.showAccelerators') !== false) {
						let menuAccelerator = document.createElement("div");
						menuAccelerator.className = "ml-auto pl-4 flex-shrink-0";
						menuAccelerator.style.opacity = "0.7";
						menuAccelerator.innerText = item.accelerator;
						menuItem.append(menuAccelerator);
					}
				} else if (item.type === "separator") {
					menuItem = document.createElement("div");
					menuItem.className = "dropdown-divider" + (Shell.ui.darkMode ? " border-secondary" : "");
				} else if (item.type === "header") {
					menuItem = document.createElement("div");
					menuItem.className = "dropdown-header font-weight-bolder";
					menuItem.innerText = this.g(item.label).toLocaleString();
				} else if (item.type === "checkbox") {
					menuItem = document.createElement("button");
					menuItem.className = "dropdown-item d-flex align-items-center custom-control custom-checkbox pl-4";
					let menuInput = document.createElement("input");
					menuInput.className = "custom-control-input";
					menuInput.type = "checkbox";
					menuItem.onmouseup = e => {
						menuInput.checked = item.checked = !menuInput.checked;
						(item.click || (() => console.log("This menu item does not have an onclick event."))).call(null, this.g(item.checked), item, _this.window, _this.activeElement);
						_this.menu.overlay.onclick(e);
					};
					menuInput.checked = this.g(item.checked);
					let menuTitle = document.createElement("label");
					menuTitle.className = "flex-grow-1 custom-control-label" + (Shell.ui.darkMode ? " text-white" : "");
					menuTitle.innerText = this.g(item.label).toLocaleString();
					menuItem.append(menuInput, menuTitle);
				}
				menuItem.disabled = !this.g(item.enabled);

				menuItem.id = "dm_" + (item.id || Math.random().toString(36).substr(2, 9));
				menuItem.style.order = this.g(item.position) || 0;
				_this.menu.append(menuItem);
			}
		}
		if (!this.menu.querySelector("button > icon:not(.mdi-blank)") && !this.menu.querySelector("label")) {
			for (const item of this.menu.children) {
				item.classList.remove("pl-3");
				if (item.icon) item.icon.remove();
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
			x: Shell.getCursorScreenPoint().x,
			y: Shell.getCursorScreenPoint().y,
			callback: null
		};
		//this.activeElement.classList.add("active");
		options = Object.assign({}, defaultPopUpOptions, options);
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
		setTimeout(() => this.menu.remove(), Shell.ui.fadeAnimation);
	}

	togglePopup(options) {
		if (this.menu.classList.contains("show")) this.closePopup();
		else this.popup(options);
		return this.menu.classList.contains("show")
	}
}

module.exports = Menu;
