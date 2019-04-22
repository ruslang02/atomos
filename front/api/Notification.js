const globalOptions = {
  body: "",
  sticky: false,
  requireInteraction: false
};
const Registry = require(`@api/Registry`);
const Shell = require("@api/Shell");
const AppWindow = require("@api/WindowManager");
const NOTIFICATION_DELAY = 6000; //ms
class Snackbar {
  constructor(options, position) {
    if (typeof options === "string") options = {
      message: options
    };
    let self = this;
    let timeout = options.timeout || (options.message.length > 20 ? options.message.length * 150 : 3000);
    options.position = options.position || position || "bottom right";
    this.ui = document.createElement("snackbar");
    this.ui.style.minWidth = CSS.px(300);
    this.ui.style.maxWidth = CSS.px(450);
    this.ui.style.zIndex = "1010";
    this.ui.message = document.createElement("div");
    this.ui.button = document.createElement("button");
    this.ui.className = "bg-dark border border-secondary text-white very-rounded shadow-lg d-flex position-absolute align-items-center m-2 p-2 fly show";
    this.ui.message.className = "px-2 lh-18 my-1";
    this.ui.message.innerText = options.message.toLocaleString();
    this.ui.append(this.ui.message);
    if (options.buttonText) {
      this.ui.button.className = "btn px-3 border-0 lh-18 font-weight-bolder btn-" + (options.type ? "outline-" + options.type : "white");
      this.ui.button.innerText = options.buttonText.toLocaleString();
      this.ui.button.onclick = options.click || console.log;
      this.ui.append(this.ui.button);
    } else this.ui.message.classList.replace("my-1", "py-2");
    let currentWindow = function currentWindow(win) {
      win = win || module.parent;
      if (win.id && win.type === "window") return win;
      else if (win.parent) return currentWindow(win.parent);
      else return null;
    }();
    if (currentWindow && AppWindow.fromId(currentWindow.id)) {
      AppWindow.fromId(currentWindow.id).ui.body.append(this.ui)
    } else {
      document.body.appendChild(this.ui);
    }
    let calcLeft = document.body.offsetWidth / 2 - this.ui.offsetWidth / 2;
    switch (options.position) {
      case "top":
        this.ui.style.left = CSS.px(calcLeft);
        this.ui.style.top = 0;
        this.ui.classList.add("down");
        break;
      case "top left":
        this.ui.style.left = this.ui.style.top = 0;
        this.ui.classList.add("down");
        break;
      case "top right":
        this.ui.style.right = this.ui.style.top = 0;
        this.ui.classList.add("down");
        break;
      case "bottom":
        this.ui.style.left = CSS.px(calcLeft);
        this.ui.style.bottom = currentWindow ? 0 : window.getComputedStyle(Elements.Bar).height;
        this.ui.classList.add("up");
        break;
      case "bottom left":
        this.ui.style.left = 0;
        this.ui.style.bottom = currentWindow ? 0 : window.getComputedStyle(Elements.Bar).height;
        this.ui.classList.add("up");
        break;
      default:
        this.ui.style.right = 0;
        this.ui.style.bottom = currentWindow ? 0 : window.getComputedStyle(Elements.Bar).height;
        this.ui.classList.add("up");
        break;

    }
    setTimeout(() => {
      self.ui.classList.add("hide");
      setTimeout(() => self.ui.remove(), Shell.ui.flyAnimation);
    }, timeout)
  }
}

class Notification {
  constructor(title, options = {}) {
    /* How-to:
     * title -- title of the notification
     * options:
     * * body -- notification body, may be none
     * * requireInteraction -- indicates if notification will be active until user does something to it, defaults to false
     * * sticky -- if it is true, notification can't be cleared by user itself, closed automatically when app closes
     */
    console.log(module);
    let currentWindow = function currentWindow(win) {
      win = win || module.parent;
      console.log(win.type);
      if (win.id && win.type === "window") return win;
      else if (win.parent) return currentWindow(win.parent);
      else return null;
    }();
    let win = AppWindow.fromId((currentWindow || "").id) || null;
    options = Object.assign({}, globalOptions, win ? win.options.notificationOptions || {} : {}, options);
    this.window = win;
    this.options = options;
    if (title === null) return;
    this.ui = document.createElement("notification");
    this.ui.className = (Shell.ui.darkMode ? "bg-dark text-white" : "bg-white") + " toast very-rounded d-block shadow position-relative fly left hide";
    this.ui.header = document.createElement("header");
    this.ui.header.className = "toast-header py-2 border-0 " + (Shell.ui.darkMode ? "text-white" : "");
    this.ui.header.style.background = "rgba(255,255,255,0.2)";
    this.ui.app = document.createElement("strong");
    this.ui.appIcon = document.createElement("icon");
    this.ui.time = document.createElement("small");
    this.ui.body = document.createElement("div");
    this.ui.messageTitle = document.createElement("div");
    this.ui.message = document.createElement("div");
    this.ui.body.className = "toast-body px-0";
    this.ui.app.className = "mr-auto lh-18 ml-1";
    this.ui.appIcon.className = "mdi mdi-18px lh-18 mr-1 d-flex align-items-center mdi-" + win.options.icon;
    //this.ui.app.style.WebkitTextFillColor = this.ui.appIcon.style.WebkitTextFillColor = "transparent";
    //this.ui.app.style.background = this.ui.appIcon.style.background = win.options.color + " 50% 50% / 1000px";
    this.ui.app.style.color = this.ui.appIcon.style.color = "var(--primary)";
    this.ui.app.innerText = win.options.productName;
    this.ui.time.innerText = "just now";
    this.ui.time.className = "text-muted smaller font-weight-bolder";
    this.ui.message.className = "smaller position-relative text-truncate px-3 " + (Shell.ui.darkMode ? "text-light" : "text-muted");

    this.title = title;
    this.ui.messageTitle.className = "font-weight-bold px-3";
    this.body = options.body;
    if (options.image) {
      this.ui.classList.add("type-image");
      if (Shell.ui.darkMode) this.ui.classList.add("dark");
      this.ui.message.classList.replace("px-3", "mt-2");
      this.ui.body.classList.replace("pb-2", "pb-0")
    }
    this.ui.close = document.createElement("button");
    this.ui.close.className = "close mdi mdi-close ml-2" + (Shell.ui.darkMode ? " text-white" : "");
    this.ui.close.classList.toggle("d-none", options.sticky);
    this.ui.close.onclick = () => this.dismiss();
    this.ui.header.append(this.ui.appIcon, this.ui.app, /*this.ui.time, */ this.ui.close);
    this.ui.body.append(this.ui.messageTitle, this.ui.message);
    this.ui.append(this.ui.header, this.ui.body);
    if (options.actions) {
      this.ui.actions = document.createElement('notification-actions');
      this.ui.actions.className = "py-2 px-3 d-flex justify-content-between" + (Shell.ui.darkMode ? " bg-dark" : " bg-light");
      this.ui.actions.style.background = this.ui.header.style.background;
      options.actions.forEach(action => {
        let btn = document.createElement("button");
        btn.className = "btn btn-link px-0 mr-2 flex-grow-1";
        btn.style.color = "var(--primary)";
        //btn.style.WebkitTextFillColor = "transparent";
        //btn.style.background = win.options.color + " 50% 50% / 1000px";
        btn.style.fontWeight = 600;
        btn.innerText = action.title.toLocaleString();
        btn.onclick = action.click;
        this.ui.actions.append(btn);
      });
      this.ui.append(this.ui.actions);
    }

    Elements.MenuBar.notifications.append(this.ui);
    this.trayItem = new TrayItem(win.options.icon);
    this.notify();
  }

  get title() {
    return this.ui.messageTitle.innerText;
  }

  set title(title) {
    this.ui.messageTitle.innerText = title.toLocaleString();
  }

  get body() {
    return this.ui.message.innerHTML;
  }

  set body(title) {
    if (typeof title === "object")
      this.ui.message.append(title);
    else this.ui.message.innerHTML = title.toLocaleString() || "";
  }

  get sticky() {
    return !this.ui.close.classList.contains("d-none");
  }

  set sticky(bool) {
    return this.ui.close.classList.toggle("d-none", !bool);
  }

  dismiss() {
    this.ui.classList.replace("show", "hide");
    this.trayItem.remove();
    setTimeout(e => this.ui.remove(), Shell.ui.flyAnimation);
  }

  notify() {
    if (this.window)
      if (this.window.options.notificationsDisabled) return;
    if (window.NOTIFICATIONS_MUTED) return;
    if (!this.options.quiet) {
      let notificationAlert = new Audio(osRoot + "/resources/notification.ogg");
      notificationAlert.volume = Registry.get("system.notificationsVolume") || 1;
      notificationAlert.play();
    }
    let that = this;
    this.ui.classList.replace("hide", "show");
    if (Elements.MenuBar.classList.contains("show")) return;
    Elements.MenuBar.style.bottom = "var(--taskbar-hided)";
    Elements.MenuBar.childNodes.forEach(node => {
      if (!node.classList.contains("d-none") && node.tagName.toLowerCase() !== "notifications")
        node.classList.add("d-none", "notification-showing");
    });
    Elements.MenuBar.notifications.childNodes.forEach((node) => {
      if (node !== this.ui && node !== Elements.MenuBar.notifications.none) node.classList.add("d-none", "notification-showing");
    });
    Elements.MenuBar.classList.replace("fly", "show");
    Elements.BarItems["official/tray"].Container.classList.add("active");

    function stopShowing() {
      Elements.MenuBar.classList.add("fly", "hide");
      Elements.MenuBar.classList.remove("show");
      Elements.BarItems["official/tray"].Container.classList.remove("active");
      setTimeout(e => {
        Elements.MenuBar.style.bottom = "var(--taskbar-height)";
        Elements.MenuBar.notifications.classList.remove("mt-2");
        Elements.MenuBar.querySelectorAll("section").forEach(elem => {
          if (elem.classList.contains("d-none") && elem.classList.contains("notification-showing"))
            elem.classList.remove("d-none", "notification-showing");
        });
        Elements.MenuBar.notifications.childNodes.forEach(node => {
          if (node.classList.contains("d-none") && node.classList.contains("notification-showing"))
            node.classList.remove("d-none", "notification-showing");
        });
      }, Shell.ui.flyAnimation);
      that.ui.removeEventListener("click", stopShowing)
    }

    if (!this.options.requireInteraction)
      setTimeout(stopShowing, NOTIFICATION_DELAY);
    else this.ui.addEventListener("click", stopShowing)
  }
}

module.exports = {
  Notification,
  Snackbar
};
