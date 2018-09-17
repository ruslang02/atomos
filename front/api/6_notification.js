const globalOptions = {
	icon: "application",
	app: "Application",
	title: null,
	message: null,
	color: "var(--primary)",
	dismissable: true
};
const NOTIFICATION_DELAY = 6000; //ms
window.Notification = class Notification {
	constructor(specificOptions = {}) {
		/* Order of notification options:
		 * ---- Specific Options (override all)
		 * --- App Options (not in use)
		 * -- Group Options (not in use)
		 * - Global (Default) Options
		 */
		let options = Object.assign({}, globalOptions, specificOptions);
		let _this = this;
		if (options.title === null && options.message === null) return;
		this.ui = document.createElement("notification");
		this.ui.app = document.createElement("app");
		this.ui.app.icon = document.createElement("icon");
		this.ui.app.displayName = document.createElement("name");
		this.ui.time = document.createElement("time");
		this.ui.messageTitle = document.createElement("notification-title");
		this.ui.message = document.createElement("notification-message");
		let appTimeBar = document.createElement("div");
		appTimeBar.className = "d-flex px-3 pt-2";
		this.ui.className = "card shadow scrollable-0 mb-2 position-relative fly left hide";
		this.ui.app.className = "align-items-center d-flex mr-1 smaller";
		this.ui.app.style.color = options.color;
		this.ui.app.icon.className = "mdi mdi-18px lh-18 mr-1 mdi-" + options.icon;
		this.ui.app.displayName.innerText = options.app;
		this.ui.time.innerText = "• now";
		this.ui.time.className = "text-muted smaller";
		this.ui.message.className = "text-secondary smaller px-3 pb-2 position-relative text-truncate";
		this.ui.messageTitle.innerText = options.title;
		this.ui.messageTitle.className = "px-3";
		this.ui.message.style.maxHeight = "150px";
		this.ui.message.append(options.message || "");
		if(options.image) {
			this.ui.classList.add("type-image");
			this.ui.messageTitle.classList.add("mb-2")
		}
		this.ui.app.append(this.ui.app.icon, this.ui.app.displayName);
		appTimeBar.append(this.ui.app, this.ui.time);
		this.ui.append(appTimeBar, this.ui.messageTitle, this.ui.message);
		if (options.actions) {
			this.ui.actions = document.createElement('notification-actions');
			this.ui.actions.className = "bg-light py-2 px-3 d-flex justify-content-between";
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
		if (options.dismissable) {
			this.ui.close = document.createElement("button");
			this.ui.close.className = "p-1 border-0 my-1 mx-2 btn btn-link mdi mdi-close fade mdi-24px lh-24 text-secondary";
			this.ui.close.style.position = "absolute";
			this.ui.close.style.top = 0;
			this.ui.close.style.right = 0;
			this.ui.close.style.height = "32px";
			this.ui.close.onclick = e => this.dismiss();
			this.ui.onmouseenter = e => this.ui.close.classList.add("show");
			this.ui.onmouseleave = e => this.ui.close.classList.remove("show");
			this.ui.append(this.ui.close);
		}
		Elements.MenuBar.notifications.append(this.ui);
		this.notify();
	}
	dismiss() {
		this.ui.classList.replace("show", "hide")
		setTimeout(e => this.ui.remove(), FLY_ANIMATION_DURATION);
	}
	notify() {
		if(window.NOTIFICATIONS_MUTED) return;
		this.ui.classList.replace("hide", "show")
		if (Elements.MenuBar.classList.contains("show")) return;
		Elements.MenuBar.childNodes.forEach(node => {
			if (!node.classList.contains("d-none") && node.tagName.toLowerCase() !== "notifications")
				node.classList.add("d-none", "notification-showing");
		})
		Elements.MenuBar.notifications.childNodes.forEach((node, i, nodes) => {
			if (node !== this.ui && node !== Elements.MenuBar.notifications.none) node.classList.add("d-none", "notification-showing");
		})
		this.ui.classList.remove("mb-2");
		Elements.MenuBar.classList.replace("fly", "show");
		Elements.BarItems["tray"].Container.classList.add("active");
		setTimeout(e => {
			Elements.MenuBar.classList.add("fly", "hide");
			Elements.MenuBar.classList.remove("show");
			Elements.BarItems["tray"].Container.classList.remove("active");
			setTimeout(e => {
				this.ui.classList.add("mb-2")
				Elements.MenuBar.notifications.classList.remove("mt-2");
				Elements.MenuBar.querySelectorAll("section").forEach(elem => {
					if (elem.classList.contains("d-none") && elem.classList.contains("notification-showing"))
						elem.classList.remove("d-none", "notification-showing");
				});
				Elements.MenuBar.notifications.childNodes.forEach(node => {
					if (node.classList.contains("d-none") && node.classList.contains("notification-showing"))
						node.classList.remove("d-none", "notification-showing");
				});
			}, FLY_ANIMATION_DURATION);
		}, NOTIFICATION_DELAY);
	}
}
