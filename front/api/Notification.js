const globalOptions = {
	body: "",
	sticky: false,
	requireInteraction: false
};
const Registry = require(`@api/Registry`);
const Shell = require("@api/Shell");
const EventListener = require("events");
let AppWindow = require("@api/WindowManager");

const NOTIFICATION_DELAY = 6000; //ms
class Snackbar {
	constructor(options, position) {
		if (typeof options === "string") options = {
			message: options
		};
		let self = this;
		let timeout = options.timeout || (options.message.length > 20 ? options.message.length * 150 : 3000);
		let currentWindow = AppWindow.getCurrentWindow();
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
		if (currentWindow) currentWindow.ui.body.append(this.ui);
		else document.body.appendChild(this.ui);
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

class Notification extends EventListener {
	constructor(title, options) {
		/* How-to:
		 * title -- title of the notification
		 * options:
		 * * body -- notification body, may be none
		 * * requireInteraction -- indicates if notification will be active until user does something to it, defaults to false
		 * * sticky -- if it is true, notification can't be cleared by user itself, closed automatically when app closes
		 */
		super();
		let win = AppWindow.getCurrentWindow();
		let self = this;
		this._hidedNodes = false;
		if (typeof options === "string") options = {body: options}; else if (typeof options !== "object") options = {};
		console.log(win, module);
		if (!win) options = Object.assign({}, globalOptions, options);
		else options = Object.assign({}, globalOptions, win.options.notificationOptions || {}, options);
		this.window = win = win ? (Object.keys(win).length ? win : {options: {}}) : {options: {}};
		this.options = options;
		if (title === null) return;
		this.ui = document.createElement("notification");
		this.ui.container = document.createElement("main");
		this.ui.container.className = Shell.ui.darkMode ? "btn-dark" : "btn-white";
		this.ui.className = (Shell.ui.darkMode ? "bg-dark text-white" : "bg-white") + " toast position-relative fly left show flex-shrink-0";
		this.ui.header = document.createElement("header");
		this.ui.header.className = "toast-header border-0 pt-2 pb-1 bg-transparent" + (Shell.ui.darkMode ? " text-white" : "");
		this.ui.app = document.createElement("strong");
		this.ui.appIcon = document.createElement("icon");
		this.ui.time = document.createElement("small");
		this.ui.body = document.createElement("div");
		this.ui.messageTitle = document.createElement("div");
		this.ui.message = document.createElement("div");
		this.ui.body.className = "toast-body px-0 d-flex pb-2 pt-1 pr-2";
		this.ui.container.addEventListener("click", function () {
			if (win.options.title) {
				self.emit("click");
				win.show();
				Elements.MenuBar.close();
			}
		});
		this.ui.text = document.createElement("div");
		this.ui.text.className = "px-3 flex-grow-1 w-100";
		this.ui.app.className = "mr-auto lh-18 ml-1";
		this.ui.appIcon.className = "mdi mdi-18px lh-18 mr-1 d-flex align-items-center mdi-" + (win.options.icon || "android");
		this.ui.app.style.WebkitTextFillColor = this.ui.appIcon.style.WebkitTextFillColor = "transparent";
		this.ui.app.style.background = this.ui.appIcon.style.background = (win.options.color || "var(--success)") + " 50% 50% / 1000px";
		//this.ui.app.style.color = this.ui.appIcon.style.color = "var(--primary)";
		this.ui.app.innerText = win.options.productName || "System UI";
		this.ui.time.innerText = "just now";
		this.ui.time.className = "text-muted smaller font-weight-bolder";
		this.ui.message.className = "position-relative scrollable-0 w-100";
		this.ui.message.style.textOverflow = "ellipsis";
		this.ui.message.style["-webkit-line-clamp"] = "3";
		this.ui.message.style["-webkit-box-orient"] = "vertical";
		this.ui.message.style.maxHeight = CSS.rem(5);
		this.ui.message.style.wordBreak = "break-word";
		this.ui.message.style.display = "-webkit-box";
		this.title = title;
		this.ui.messageTitle.className = "font-weight-bold";
		this.body = options.body;
		this.ui.close = document.createElement("button");
		this.ui.close.className = "close mdi mdi-close ml-2" + (Shell.ui.darkMode ? " text-white" : "");
		this.ui.close.classList.toggle("d-none", options.sticky);
		this.ui.close.onclick = e => {
			e.stopPropagation();
			this.dismiss();
		};
		this.ui.header.append(this.ui.appIcon, this.ui.app, /*this.ui.time, */ this.ui.close);
		this.ui.text.append(this.ui.messageTitle, this.ui.message);
		this.ui.body.append(this.ui.text);
		if (options.image || (options.image = options.icon)) {
			this.ui.avatarImage = document.createElement("div");
			this.ui.avatarImage.style.background = `url("${options.image}") cover center center no-repeat`;
			this.ui.avatarImage.className = "rounded ml-auto shadow-sm";
			this.ui.body.append(this.ui.avatarImage);
		}
		this.ui.container.append(this.ui.header, this.ui.body);
		this.ui.append(this.ui.container);
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

		Elements.MenuBar.append(this.ui);
		this.trayItem = new TrayItem(win.options.icon || "android");
		Elements.MenuBar.notifications.push(this);
		this.notify();

	}

	show() {
		this.ui.classList.remove("notification-showing");
		if (this.ui.classList.contains("show")) return;
		this.ui.classList.remove("d-none");
		setTimeout(() => this.ui.classList.replace("hide", "show"), Shell.ui.fadeAnimation);
	}

	hide() {
		if (!this.ui.classList.contains("show")) return;
		this.ui.classList.replace("show", "hide");
		setTimeout(() => this.ui.classList.add("d-none"), Shell.ui.fadeAnimation);
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
		let self = this;
		this.ui.classList.replace("show", "hide");
		this.trayItem.remove();
		Elements.MenuBar.notifications.splice(Elements.MenuBar.notifications.indexOf(this), 1);
		setTimeout(() => {
			if (self._hidedNodes) self._stopShowing();
			self.ui.remove()
		}, Shell.ui.flyAnimation);
		this.emit("dismiss");
	}

	_stopShowing() {
		let self = this;
		Elements.MenuBar.close();
		setTimeout(() => {
			if (self._hidedNodes) {
				for (const node of self._hidedNodes)
					node.classList.remove("notification-showing");
				self._hidedNodes = false;
			}
		}, Shell.ui.flyAnimation);
		if (this.ui) this.ui.removeEventListener("click", this._stopShowing)
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
		this._hidedNodes = [];
		for (const node of Elements.MenuBar.childNodes) {
			if (node !== that.ui) {
				this._hidedNodes.push(node);
				node.classList.add("notification-showing");
			}
		}
		Elements.MenuBar.open();

		if (this.options.requireInteraction === true)
			setTimeout(this._stopShowing, NOTIFICATION_DELAY);
		else this.ui.addEventListener("click", this._stopShowing)
	}
}

module.exports = {
	Notification,
	Snackbar
};