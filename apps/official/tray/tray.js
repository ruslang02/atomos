const path = require("path"),
	fs = require("fs").promises;
const Shell = require("@api/Shell");
const AppWindow = require("@api/WindowManager");
const Menu = require(`@api/Menu`);

let elems = {
	Container: document.createElement("button"),
	NIcons: document.createElement("section"),
	Clock: document.createElement("clock"),
	Date: document.createElement("date")
};
if (Shell.isMobile) {
	body.className = "position-fixed w-100";
	body.style.top = 0;
	body.style.left = 0;
	elems.Container.className = "btn btn-dark shadow-sm px-2 py-1 w-100 rounded-0 d-flex align-items-stretch";
	elems.Clock.className = "lh-r1 font-weight-bold ml-auto";
	elems.NIcons.style.maxWidth = "calc(18px * 6 + .25rem * 5)";
	elems.NIcons.style.order = -1;
} else {
	body.className = "d-flex align-items-center";
	elems.Container.className = "btn shadow d-flex align-items-center" + (Shell.ui.darkMode ? " btn-dark" : " btn-light");
	elems.Clock.className = "font-weight-bold mr-1";
	elems.Container.title = "Tray (<i class='mdi mdi-atom'></i>+N)";
	elems.NIcons.style.maxWidth = "calc(18px * 3 + .25rem * 2)";
}
elems.NIcons.className = "fly left show d-inline-flex mr-1 text-truncate";
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
	click(checked, elem) {
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

setInterval(function () {
	if (Shell.isMobile) document.body.style.paddingTop = elems.Container.offsetHeight + "px";
	elems.Clock.innerText = new Date().toLocaleTimeString("en-US", {
		hour: '2-digit',
		minute: '2-digit'
	});
	elems.Date.innerText = new Date().toLocaleDateString("en-US", {
		weekday: 'long',
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
}, 1000);

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
});
require(__dirname + "/menu");
return elems;
