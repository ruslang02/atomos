const globalOptions = {
	icon: "application",
	app: "Application",
	title: null,
	message: null,
	color: "var(--primary)",
	dismissable: true
};
const NOTIFICATION_DELAY = 6000; //ms
class Snackbar {
	constructor(options) {
		if (typeof options === "string") options = {message: options};
		let self = this;
		let isDM = (options.window ? options.window.options.darkMode : Shell.ui.darkMode)
		let timeout = options.timeout || (options.message.length > 20 ? options.message.length * 150 : 3000);
		this.ui = document.createElement("snackbar");
		this.ui.style.bottom = options.window ? 0 : window.getComputedStyle(Elements.Bar).height;
		this.ui.style.left = CSS.px(0);
		this.ui.style.right = CSS.px(0);
		this.ui.style.maxWidth = CSS.px(450);
		this.ui.style.zIndex = "1010";
		this.ui.message = document.createElement("div");
		this.ui.button = document.createElement("button");
		this.ui.className = (isDM ? "bg-dark text-white" : "bg-light") + " very-rounded shadow d-flex position-absolute align-items-stretch mx-auto mb-3 pl-3 py-1 pr-1 fly up show";
		this.ui.message.className = "flex-grow-1 text-truncate lh-36";
		this.ui.message.innerText = options.message;
		this.ui.append(this.ui.message);
		if (options.buttonText) {
			this.ui.button.className = "btn btn-white very-rounded px-3 font-weight-bolder ml-1 py-1";
			this.ui.button.style.color = options.buttonColor || "var(--primary)";
			this.ui.button.innerText = options.buttonText;
			this.ui.button.onclick = options.click || console.log;
			this.ui.append(this.ui.button);
		} else this.ui.message.classList.add("text-center");
		if (options.window) options.window.ui.body.append(this.ui); else
			document.body.appendChild(this.ui);
		setTimeout(() => {
			self.ui.classList.add("hide");
			setTimeout(() => self.ui.remove(), Shell.ui.flyAnimation);
		}, timeout)
	}
}

class Notification {
	constructor(win, specificOptions = {}) {
		/* Order of notification options:
		 * ---- Specific Options (override all)
		 * --- App Options
		 * -- Group Options (not in use)
		 * - Global (Default) Options
		 */
		if (!(win instanceof AppWindow)) throw new Error("Two arguments needed to call Notification(): window instance and options object");
		let options = Object.assign({}, globalOptions, win ? win.options.notificationOptions || {} : {}, specificOptions);
		this.window = win;
		this.options = options;
		if (options.title === null && options.message === null) return;
		this.ui = document.createElement("notification");
		this.ui.className = (Shell.ui.darkMode ? "bg-dark text-white" : "bg-white") + " toast very-rounded shadow position-relative fly left hide";
		this.ui.header = document.createElement("header");
		this.ui.header.className = "toast-header pt-2 " + (Shell.ui.darkMode ? " bg-dark border-0 text-white" : " pb-2");
		this.ui.app = document.createElement("strong");
		this.ui.appIcon = document.createElement("icon");
		this.ui.time = document.createElement("small");
		this.ui.body = document.createElement("div");
		this.ui.messageTitle = document.createElement("div");
		this.ui.message = document.createElement("div");
		this.ui.body.className = "toast-body px-0 pt-2 pb-2";
		this.ui.app.className = "mr-auto";
		this.ui.appIcon.className = "mdi mdi-18px lh-18 mr-1 d-flex align-items-center mdi-" + options.icon;
		this.ui.app.innerText = options.app;
		this.ui.time.innerText = "just now";
		this.ui.time.className = "text-muted";
		this.ui.message.className = "text-secondary smaller position-relative text-truncate px-3";
		this.ui.messageTitle.innerText = options.title;
		this.ui.messageTitle.className = "font-weight-bold px-3";
		if (typeof options.message === "object")
			this.ui.message.append(options.message);
		else this.ui.message.innerHTML = options.message;
		if (options.image) {
			this.ui.classList.add("type-image");
			if (Shell.ui.darkMode) this.ui.classList.add("dark");
			this.ui.message.classList.replace("px-3", "mt-2");
			this.ui.body.classList.replace("pb-2", "pb-0")
		}
		this.ui.close = document.createElement("button");
		this.ui.close.className = "close mdi mdi-close ml-2" + (Shell.ui.darkMode ? " text-white" : "");
		this.ui.close.classList.toggle("d-none", !options.dismissable);
		this.ui.close.onclick = () => this.dismiss();
		this.ui.header.append(this.ui.appIcon, this.ui.app, this.ui.time, this.ui.close);
		this.ui.body.append(this.ui.messageTitle, this.ui.message);
		this.ui.append(this.ui.header, this.ui.body);
		if (options.actions) {
			this.ui.actions = document.createElement('notification-actions');
			this.ui.actions.className = "py-2 px-3 d-flex justify-content-between" + (Shell.ui.darkMode ? " bg-dark" : " bg-light");
			options.actions.forEach(action => {
				let btn = document.createElement("button");
				btn.className = "btn btn-link px-0 mr-2 flex-grow-1";
				btn.style.color = options.color;
				btn.style.fontWeight = 600;
				btn.innerText = action.label;
				btn.onclick = action.click;
				this.ui.actions.append(btn);
			});
			this.ui.append(this.ui.actions);
		}

		Elements.MenuBar.notifications.append(this.ui);
		this.trayItem = new TrayItem(options.icon);
		this.notify();
	}

	get title() {
		return this.ui.messageTitle.innerText;
	}

	set title(title) {
		this.ui.messageTitle.innerText = title;
	}

	get message() {
		return this.ui.message.innerHTML;
	}

	set message(title) {
		this.ui.message.innerHTML = title;
	}

	get dismissable() {
		return this.ui.close.classList.contains("d-none");
	}

	set dismissable(bool) {
		return this.ui.close.classList.toggle("d-none", bool);
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
		setTimeout(e => {
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
		}, NOTIFICATION_DELAY);
	}
}

module.exports = {Notification, Snackbar};