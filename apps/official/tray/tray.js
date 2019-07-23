const Menu = require("@api/Menu"), AppWindow = require("@api/WindowManager"), Shell = require("@api/Shell");
let elems = {
	Container: document.createElement("button"),
	NIcons: document.createElement("section"),
	Clock: document.createElement("clock"),
	Date: document.createElement("date"),
	updatePosition() {
		Elements.MenuBar.updatePosition();
	}
};

function updateTime() {
	if (Shell.isMobile) document.body.style.paddingTop = elems.Container.offsetHeight + "px";
	elems.Clock.innerText = new Date().toLocaleTimeString("en-US", {
		hour: '2-digit',
		minute: '2-digit'
	});
	elems.Date.innerText = elems.Container.dataset.originalTitle = new Date().toLocaleDateString("en-US", {
		weekday: 'long',
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
}

if (Shell.isMobile) {
	body.className = "position-fixed w-100";
	body.style.top = 0;
	body.style.left = 0;
	elems.Container.className = "btn btn-dark shadow-sm px-2 py-1 w-100 rounded-0 d-flex align-items-stretch";
	elems.Clock.className = "lh-r1 font-weight-bolder ml-auto";
	elems.NIcons.style.maxWidth = "calc(18px * 6 + .25rem * 5)";
	elems.NIcons.style.order = -1;
} else {
	body.className = "d-flex align-items-center position-relative";
	elems.Container.className = "btn shadow rounded-pill d-flex align-items-center" + (Shell.ui.darkMode ? " btn-dark" : " btn-light");
	elems.Clock.className = "font-weight-bolder mr-2";
	elems.NIcons.style.maxWidth = "calc(18px * 3 + .25rem * 2)";
}
elems.NIcons.className = "fly left show d-inline-flex flex-row-reverse justify-content-end mr-2 text-truncate";
elems.Date.className = "fly left show d-none mr-2";
elems.Container.addEventListener("click", e => {
	e.stopPropagation();
	let win = AppWindow.getFocusedWindow();
	if (win) win.blur();
	Elements.MenuBar.toggle()
});
elems.Container.menu = new Menu([{
	label: "Adjust Date and Time...",
	icon: "clock-outline",
	click() {
		Shell.openSettings("system-time");
	}
}, {
	label: "Do Not Disturb",
	type: "checkbox",
	id: "DND",
	checked: window.NOTIFICATIONS_MUTED,
	click(_checked, elem) {
		Elements.MenuBar.quickItems.items.DND.onclick(null);
		elem.checked = window.NOTIFICATIONS_MUTED;
	}
}]);
elems.Container.addEventListener("contextmenu", e => {
	e.stopPropagation();
	elems.Container.menu.popup();
});
elems.Container.append(elems.Date, elems.NIcons, elems.Clock);
body.appendChild(elems.Container);
if (!Shell.isMobile) new Tooltip(elems.Container);

setInterval(updateTime, 1000);
window.TrayItem = class TrayItem {
	constructor(icon) {
		let iconSize = 18;
		this.elem = document.createElement("icon");
		this.elem.className = `mdi mdi-${icon} mdi-${iconSize}px mr-1 lh-21 d-flex`;
		elems.NIcons.append(this.elem);
	}

	remove() {
		this.elem.remove();

	}
};

window.addEventListener("keypress", e => {
	if (e.metaKey && e.code === "KeyN") {
		window.__MetaKeyOverriden = true;
		Elements.MenuBar.toggle();
	}
	if (e.metaKey && e.code === "KeyS") {
		window.__MetaKeyOverriden = true;
		Shell.openSettings();
	}
	if (e.metaKey && e.code === "KeyD") {
		window.__MetaKeyOverriden = true;
	}
});
require(__dirname + "/menu")(body);
return elems;
