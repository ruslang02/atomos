	const {
	  screen,
	  remote
	} = require('electron');
	let win = remote.getCurrentWindow();
	const winBounds = win.getContentBounds();
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
	}


	if (!registry.get().menu) registry.set(Object.assign({}, registry.get(), {
		menu: {
			showIcons: true,
			showAccelerators: false
		}
	}));

	window.Menu = class Menu extends EventEmitter {
	  constructor(template = []) {
	    super();
	    let _this = this;
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
	    }
	    this.items = new Proxy(template, proxyChange);
	    this.menu = document.createElement("menu");
	    this.menu.className = "dropdown-menu fade d-flex flex-column shadow";
	    this.menu.close = e => this.closePopup();
	    window.addEventListener("click", e => {
	      let event = {
	        preventDefault: function() {
	          event.returnValue = false;
	        },
	        returnValue: true
	      }
	      _this.emit('menu-will-close', event);
	      if (event.returnValue) _this.closePopup();
	    });
	    this.window = AppWindow.getFocusedWindow();
	    this.renderMenu();
	  }
	  static getFocusedMenu() {
	    return document.querySelector("menu");
	  }
	  static buildFromTemplate(template) {
	    return new Menu(template);
	  }
	  renderMenu() {
	    let _this = this;
	    this.menu.innerHTML = "";
	    let shortcuts = [];

	    function acceleratorEvent(e) {
	      if (!_this.window) return;
	      //if (_this.window.isDestroyed()) window.removeEventListener('keypress', acceleratorEvent); else {
	      if (!_this.window.isFocused()) return;
	      shortcuts.forEach(acc => {
	        if ((e.ctrlKey ^ !acc.ctrl) && (e.shiftKey ^ !acc.shift) && (e.altKey ^ !acc.alt) && (e.key.toLowerCase() === acc.key.toLowerCase()))
	          acc.click.call(acc.menuItem);
	      })
	      //}
	    }
	    window.removeEventListener('keydown', acceleratorEvent);

	    this.items.forEach(item => {

	      if (item.visible) {
	        if (item.type === "normal") {
	          if (item.accelerator && item.setKeyboardEvents) shortcuts.push({
	            click: item.click,
	            ctrl: item.accelerator.includes("Ctrl+"),
	            alt: item.accelerator.includes("Alt+"),
	            shift: item.accelerator.includes("Shift+"),
	            key: item.accelerator.substring(item.accelerator.lastIndexOf("+") + 1),
	            menuItem: item
	          })
	          let menuItem = document.createElement("button");
	          menuItem.className = "dropdown-item d-flex align-items-center";
	          menuItem.disabled = !item.enabled;
	          menuItem.onclick = e => {
	            (item.click || (e => console.log("This menu item does not have an onclick event."))).call(null, item, _this.window, e);
	          };
	          menuItem.id = "dm_" + (item.id || Math.random().toString(36).substr(2, 9));
	          menuItem.style.order = item.position || 0;
	          if (item.icon && registry.get().menu.showIcons) {
	            menuItem.classList.add("px-3")
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
	          _this.menu.append(menuItem);
	        } else if (item.type === "separator") {
	          let separator = document.createElement("div");
	          separator.className = "dropdown-divider";
	          _this.menu.append(separator);
					} else if (item.type === "header") {
						let header = document.createElement("div");
	          header.className = "dropdown-header font-weight-bolder";
						header.innerText = item.label;
	          _this.menu.append(header);
					} else if (item.type === "checkbox") {
	          let menuItem = document.createElement("button");
	          menuItem.className = "dropdown-item d-flex align-items-center custom-control custom-checkbox pl-4";
	          let menuInput = document.createElement("input");
	          menuInput.className = "custom-control-input";
	          menuInput.disabled = !item.enabled;
	          menuInput.type = "checkbox"
	          menuInput.onchange = e => {
	            item.checked = menuInput.checked;
	            (item.click || (e => console.log("This menu item does not have an onclick event."))).call(null, item, _this.window, e);
	          };
	          menuInput.id = "dm_" + (item.id || Math.random().toString(36).substr(2, 9));
	          menuItem.style.order = item.position || 0;
	          menuInput.checked = item.checked;
	          let menuTitle = document.createElement("label");
	          menuTitle.className = "flex-grow-1 custom-control-label";
	          menuTitle.htmlFor = menuInput.id;
	          menuTitle.innerText = item.label;
	          menuItem.append(menuInput, menuTitle);
	          _this.menu.append(menuItem);
	        }
	        // TODO: checkbox, radio variants
	      }
	    });

	    window.addEventListener('keydown', acceleratorEvent);
	  }
	  append(item) {
	    this.items.push(item);
	  }
	  getMenuItemById(id) {
	    let _this = this;
	    let item = this.items.find(item => {
	      return item.id === id
	    });
	    if (item) {
	      /*let res = new Proxy(item, {
	        set(a, b, c) {
	          _this.items[_this.items.indexOf(item)][b] = c;
	          item[b] = c;
	          return true;
	        }
	      });*/
	      return item;
	    } else return undefined;
	  }
	  insert(pos, item) {
	    this.items.push(Object.assign(item, {
	      position: pos
	    }));
	  }
	  popup(options = {}) {
	    document.querySelectorAll("menu").forEach(menu => menu.close());
	    const defaultPopUpOptions = {
	      window: AppWindow.getFocusedWindow(),
	      x: Math.abs(screen.getCursorScreenPoint().x - winBounds.x),
	      y: Math.abs(screen.getCursorScreenPoint().y - winBounds.y),
	      callback: null
	    };
	    options = Object.assign({}, defaultPopUpOptions, options);
	    this.window = options.window;
	    let event = {
	      preventDefault: function() {
	        event.returnValue = false;
	      },
	      returnValue: true
	    }
	    this.emit('menu-will-show', event);
	    if (event.returnValue) {
	      document.body.append(this.menu);
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
	    setTimeout(e => this.menu.remove(), FADE_ANIMATION_DURATION);
	  }
	  togglePopup(options) {
	    if (this.menu.classList.contains("show")) this.closePopup();
	    else this.popup(options);
	    return this.menu.classList.contains("show")
	  }
	}
