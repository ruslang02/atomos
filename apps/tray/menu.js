const fs = require('fs').promises;
const path = require('path');
const wc = require("electron").remote.getCurrentWebContents();
const cp = require("child_process");
let overlay;
if (!Elements)
	window.Elements = [];
Elements.MenuBar = document.createElement("aside");
Elements.MenuBar.className = "position-fixed m-2 d-flex flex-column-reverse hide fly up";
Elements.MenuBar.style.zIndex = "990";
if (!shell.isMobile) {
	Elements.MenuBar.style.width = "350px";

} else {
	Elements.MenuBar.classList.add("w-100", "h-100");
	Elements.MenuBar.classList.replace("m-2", "p-2");
	Elements.MenuBar.style.top = "29px";
	Elements.MenuBar.classList.replace("flex-column-reverse", "flex-column");
	overlay = document.createElement("div");
	overlay.style.cssText = "position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0,0,0,0.5);z-index: 989; opacity:0; visibility: hidden"
	document.body.appendChild(overlay);
}

Elements.MenuBar.toggle = function() {
	if (Elements.MenuBar.classList.contains("show"))
		Elements.MenuBar.close();
	else
		Elements.MenuBar.open();
}
;
Elements.MenuBar.open = function() {
	Elements.MenuBar.classList.replace("hide", "show");
	Elements.BarItems["tray"].Container.classList.add("active");
	Elements.BarItems["tray"].Date.classList.remove("d-none", "hide");
	Elements.BarItems["tray"].NIcons.classList.replace("d-inline-flex", "d-none");
	if (overlay) {
		overlay.classList.remove("d-none");
		overlay.animate([{
			opacity: 0,
			visibility: "hidden"
		}, {
			opacity: 1,
			visibility: "visible"
		}], {
			fill: "forwards",
			duration: 200
		});
	}
}
;
Elements.MenuBar.close = function() {
	Elements.MenuBar.classList.replace("show", "hide");
	Elements.BarItems["tray"].Container.classList.remove("active");
	Elements.BarItems["tray"].Date.classList.add("hide");
	setTimeout(() => {
			if (Elements.MenuBar.settings)
				Elements.MenuBar.settings.remove();
			Elements.BarItems["tray"].Date.classList.add("d-none");
		}
		, window.shell.ui.flyAnimation);
	Elements.BarItems["tray"].NIcons.classList.replace("d-none", "d-inline-flex");
	if (overlay) {
		overlay.animate([{
			opacity: 1,
			visibility: "visible"
		}, {
			opacity: 0,
			visibility: "hidden"
		}], {
			fill: "forwards",
			duration: 200
		}).onfinish = () => overlay.classList.add("d-none");
	}
}
;

Elements.MenuBar.addEventListener("click", function(e) {
	e.stopPropagation();
});
window.addEventListener("click", Elements.MenuBar.close);
renderQuickSection();
renderNotifications();
renderSoundSettings();
root.appendChild(Elements.MenuBar);
if (!shell.isMobile)
	update();
if (!shell.isMobile)
	new ResizeObserver(update).observe(Elements.Bar);
if (!shell.isMobile)
	window.addEventListener("resize", update);

function update() {
	Elements.MenuBar.style.right = CSS.px(0);
	Elements.MenuBar.style.bottom = Elements.Bar.clientHeight + "px";
	Elements.MenuBar.style.maxHeight = "calc(" + (document.body.clientHeight - Elements.Bar.clientHeight) + "px - 1rem)";
}

function renderQuickSection() {
	//TODO: Make more customizable
	Elements.MenuBar.quickItems = document.createElement("section");
	Elements.MenuBar.quickItems.className = "card shadow flex-row p-3 fade show justify-content-around mt-2 flex-shrink-0 " + (shell.ui.darkMode ? "bg-dark text-white" : "");
	Elements.MenuBar.quickItems.items = []
	if (shell.isMobile)
		Elements.MenuBar.quickItems.classList.add("mb-2");
	let itemBattery = document.createElement("button");
	let itemDND = document.createElement("button");
	let itemSound = document.createElement("button");
	let itemSettings = document.createElement("button");

	itemBattery.className = "rounded-circle btn btn-primary mdi mdi-24px mdi-power-plug";
	itemDND.className = "rounded-circle btn btn-secondary mdi mdi-24px mdi-do-not-disturb";
	itemDND.onclick = () => {
		window.NOTIFICATIONS_MUTED = !window.NOTIFICATIONS_MUTED
		itemDND.classList.toggle("btn-primary", window.NOTIFICATIONS_MUTED);
		itemDND.classList.toggle("btn-secondary", !window.NOTIFICATIONS_MUTED);
	}
	;
	itemSound.className = "rounded-circle btn btn-primary mdi mdi-24px mdi-volume-high";
	itemSound.onclick = () => {
		cp.execSync("amixer -q -D pulse sset Master toggle");
		Elements.MenuBar.soundSettings.updateControls();
	}
	;
	itemSound.oncontextmenu = e => {
		e.stopPropagation();
		Elements.MenuBar.soundSettings.classList.toggle("d-none");
		Elements.MenuBar.soundSettings.classList.toggle("d-flex");
	}
	itemSettings.className = "rounded-circle btn btn-info mdi mdi-24px mdi-settings";
	itemSettings.onclick = e => shell.openSettings();
	Elements.MenuBar.quickItems.items.push(itemBattery, itemDND, itemSound, itemSettings)
	Elements.MenuBar.quickItems.append(itemBattery, itemDND, itemSound, itemSettings);
	if (!shell.isMobile)
		Elements.MenuBar.appendChild(Elements.MenuBar.quickItems);
	else
		Elements.MenuBar.prepend(Elements.MenuBar.quickItems)
}

function renderSoundSettings() {
	Elements.MenuBar.soundSettings = document.createElement("section");
	Elements.MenuBar.soundSettings.className = "px-3 d-none py-2 mt-2 shadow card " + (shell.ui.darkMode ? "bg-dark" : "");
	let master = document.createElement('div');
	master.className = "d-flex align-items-center";
	master.icon = document.createElement("icon");
	master.icon.onclick = e => {
		cp.execSync("amixer -q -D pulse sset Master toggle");
		Elements.MenuBar.soundSettings.updateControls();
	}
	master.icon.className = `btn p-1 mdi mdi-24px lh-24 d-flex rounded-circle mr-3 my-1 ` + (shell.ui.darkMode ? "text-white btn-dark" : "btn-white text-dark");
	master.range = document.createElement("input");
	master.range.max = 100;
	master.range.min = 0;
	master.range.step = 1;
	master.range.className = "custom-range";
	master.range.type = "range";
	master.range.onchange = function () {
		cp.execSync("amixer -q -D pulse sset Master " + master.range.value + "%");
		Elements.MenuBar.soundSettings.updateControls(true);
	}
	Elements.MenuBar.soundSettings.updateControls = function (norange) {
		let sound = getCurrentVolume();
		if (!norange)
			master.range.value = sound.volume;
		master.icon.classList.remove("mdi-volume-high", "mdi-volume-off")
		master.icon.classList.add("mdi-volume-" + (sound.muted ? "off" : "high"));
		Elements.MenuBar.quickItems.items[2].classList.remove("btn-secondary", "btn-primary");
		Elements.MenuBar.quickItems.items[2].classList.add(sound.muted ? "btn-secondary" : "btn-primary");
	}
	Elements.MenuBar.soundSettings.updateControls();
	master.append(master.icon, master.range)

	let notifVolume = document.createElement('div');
	notifVolume.className = "d-flex align-items-center mt-2";
	notifVolume.icon = document.createElement("icon");
	notifVolume.icon.onclick = e => {
		cp.execSync("amixer -q -D pulse sset Master toggle");
		Elements.MenuBar.soundSettings.updateControls();
	}
	notifVolume.icon.className = `btn p-1 mdi mdi-24px lh-24 d-flex mdi-bell-outline rounded-circle mr-3 my-1 ` + (shell.ui.darkMode ? "text-white btn-dark" : "btn-white text-dark");
	notifVolume.range = document.createElement("input");
	notifVolume.range.max = 1;
	notifVolume.range.min = 0;
	notifVolume.range.step = 0.01;
	notifVolume.range.value = Registry.get("system.notificationsVolume") || 1;
	notifVolume.range.className = "custom-range";
	notifVolume.range.type = "range";
	notifVolume.range.onchange = function () {
		notifVolume.icon.classList.remove("mdi-bell-outline", "mdi-bell-off-outline");
		notifVolume.icon.classList.add(notifVolume.range.value === 0 ? "mdi-bell-off-outline" : "mdi-bell-outline");
		Registry.set("system.notificationsVolume", notifVolume.range.value);
	}
	notifVolume.range.onchange();
	notifVolume.append(notifVolume.icon, notifVolume.range)
	Elements.MenuBar.soundSettings.append(master, notifVolume);
	Elements.MenuBar.insertBefore(Elements.MenuBar.soundSettings, Elements.MenuBar.notifications);
}

function getCurrentVolume() {
	let mono = cp.execSync("amixer -D pulse sget 'Master'").toString();
	let volume = mono.substring(mono.indexOf("[") + 1, mono.indexOf("]") - 1);
	let muted = mono.substring(mono.lastIndexOf("[") + 1, mono.lastIndexOf("]")) !== "on";
	return {
		volume: volume,
		muted: muted
	};
}

shell.openSettings = function (section) {
	setTimeout(e => {
			Elements.MenuBar.open();
			Elements.MenuBar.settings = document.createElement("section");
			Elements.MenuBar.settings.className = "card shadow fade scrollable-0 position-absolute w-100 " + (shell.ui.darkMode ? "bg-dark text-white" : "");
			Elements.MenuBar.settings.style.zIndex = 100;
			if (shell.isMobile) {
				Elements.MenuBar.settings.style.top = 0;
				Elements.MenuBar.settings.style.left = 0;
				Elements.MenuBar.settings.classList.add("flex-column-reverse")
			}
			setTimeout(e => Elements.MenuBar.settings.classList.add("show"), shell.ui.fadeAnimation);
			Elements.MenuBar.settings.style.height = "450px";
			fs.readFile(path.join(osRoot, "apps", "settings", "settings.js")).then(code => {
					new Function('root', 'sectionToOpen', code.toString())(Elements.MenuBar.settings, section);
				}
			);
			Elements.MenuBar.prepend(Elements.MenuBar.settings);

		}
		, shell.ui.fadeAnimation);
}
;

function renderNotifications() {
	Elements.MenuBar.notifications = document.createElement("notifications");
	Elements.MenuBar.notifications.className = "flex-grow-1 scrollable-y scrollable-x-0";
	Elements.MenuBar.notifications.none = document.createElement("section");
	Elements.MenuBar.notifications.none.className = "card shadow flex-column p-3 text-center text-muted font-italic " + (shell.ui.darkMode ? "bg-dark text-white" : "");
	Elements.MenuBar.notifications.none.innerText = "No new notifications";
	Elements.MenuBar.notifications.appendChild(Elements.MenuBar.notifications.none);
	Elements.MenuBar.appendChild(Elements.MenuBar.notifications)
}
let notificationsCount = Elements.MenuBar.notifications.childElementCount - 1;
new MutationObserver(e => {
		notificationsCount = e[0].target.childNodes.length - 1;
		Elements.MenuBar.notifications.none.classList.toggle("d-none", !!notificationsCount);
	}
).observe(Elements.MenuBar.notifications, {
	childList: true
});
