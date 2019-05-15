const fs = require('fs').promises;
const path = require('path');
const {
	Shell,
	Registry,
	Components: {Button}
} = require("@api");
const cp = require("child_process");
const wifi = require("node-wifi");
wifi.init({
	iface: null
});
let overlay;
if (!Elements)
	window.Elements = [];
Elements.MenuBar = document.createElement("aside");
Elements.MenuBar.className = "position-fixed m-2 d-flex flex-column-reverse hide fly up";
Elements.MenuBar.id = "official/tray";
Elements.MenuBar.style.zIndex = "990";
if (!Shell.isMobile) {
	Elements.MenuBar.style.width = "350px";
	Elements.MenuBar.style.bottom = "var(--taskbar-height)";
	Elements.MenuBar.style.right = "0px";

} else {
	Elements.MenuBar.classList.add("w-100", "h-100");
	Elements.MenuBar.classList.replace("m-2", "p-2");
	Elements.MenuBar.style.top = "29px";
	Elements.MenuBar.classList.replace("flex-column-reverse", "flex-column");
	overlay = document.createElement("div");
	overlay.style.cssText = "position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0,0,0,0.5);z-index: 989; opacity:0; visibility: hidden";
	document.body.appendChild(overlay);
}

Elements.MenuBar.toggle = function () {
	if (Elements.MenuBar.classList.contains("show"))
		Elements.MenuBar.close();
	else
		Elements.MenuBar.open();
};
Elements.MenuBar.open = function () {
	Elements.Bar.keepOpen(true);
	Elements.MenuBar.classList.replace("hide", "show");
	Elements.BarItems["official/tray"].Container.classList.add("active");
	Elements.BarItems["official/tray"].Date.classList.remove("d-none", "hide");
	Elements.BarItems["official/tray"].NIcons.classList.replace("d-inline-flex", "d-none");
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
};
Elements.MenuBar.close = function () {
	Elements.Bar.keepOpen(false);
	Elements.MenuBar.classList.replace("show", "hide");
	Elements.BarItems["official/tray"].Container.classList.remove("active");
	Elements.BarItems["official/tray"].Date.classList.add("hide");
	Elements.MenuBar.notifications.classList.add("show");
	setTimeout(() => {
		if (Elements.MenuBar.settings)
			Elements.MenuBar.settings.remove();
		Elements.BarItems["official/tray"].Date.classList.add("d-none");
	}, Shell.ui.flyAnimation);
	Elements.BarItems["official/tray"].NIcons.classList.replace("d-none", "d-inline-flex");
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
};

Elements.MenuBar.addEventListener("click", function (e) {
	e.stopPropagation();
});
window.addEventListener("click", Elements.MenuBar.close);
renderQuickSection();
renderNotifications();
renderBrightnessSettings();
renderSoundSettings();
document.body.appendChild(Elements.MenuBar);

function renderQuickSection() {
	//TODO: Make more customizable

	Elements.MenuBar.quickItems = document.createElement("section");
	Elements.MenuBar.quickItems.className = "card very-rounded shadow flex-row p-3 fade show justify-content-around mt-2 flex-shrink-0 " + (Shell.ui.darkMode ? "bg-dark text-white" : "");
	Elements.MenuBar.quickItems.items = [];
	if (Shell.isMobile)
		Elements.MenuBar.quickItems.classList.add("mb-2");
	let WiFi = new Button({
		tooltip: "Not connected",
		color: "primary",
		icon: "wifi-strength-outline",
		addClasses: "p-2 rounded-circle",
		iconSize: 24,
		visible: false
	});

	function updateNetwork() {
		cp.exec("nmcli device wifi", (_e, output) => {
			if (!output.trim().split("\n")[1]) {
				WiFi.visible = false;
				if (WiFi.tray) WiFi.tray.remove();
				WiFi.tray = undefined;
			} else {
				WiFi.visible = true;
				if (!WiFi.tray) WiFi.tray = new TrayItem("wifi-strength-outline");
				cp.exec("nmcli radio wifi", function (_e, output) {
					output = output.toString().trim();
					WiFi.color = output === "enabled" ? "primary" : "secondary";
					WiFi.outline = output !== "enabled";
				});
				wifi.getCurrentConnections().then(network => {
					WiFi.tray.elem.classList.remove("mdi-wifi-strength-outline", "mdi-wifi-strength-1", "mdi-wifi-strength-2", "mdi-wifi-strength-3", "mdi-wifi-strength-4");
					if (network.length) {
						network = network[0];
						WiFi.tray.elem.classList.add("mdi-wifi-strength-" + Math.ceil(network.quality / 25));
						WiFi.icon = "wifi-strength-" + Math.ceil(network.quality / 25);
						WiFi.tooltip = network.ssid;
					} else {
						WiFi.icon = "wifi-strength-outline";
						WiFi.tooltip = "Not connected";
						WiFi.tray.elem.classList.add("mdi-wifi-strength-outline");
					}
				});
			}
		});
		cp.exec("nmcli networking", (_e, output) => {
			let enabled = output.trim() === "enabled";
			Radio.outline = enabled;
			Radio.color = enabled ? "secondary" : "primary";
			Radio.icon = enabled ? "airplane-off" : "airplane";
			if (!enabled) {
				if (!Radio.tray) Radio.tray = new TrayItem("airplane");
			} else if (Radio.tray) {
				Radio.tray.remove();
				Radio.tray = undefined;
			}
		})

	}

	setInterval(updateNetwork, 1000);
	let Screen = new Button({
		tooltip: "Brightness",
		color: "primary",
		icon: "brightness-6",
		addClasses: "p-2 rounded-circle",
		iconSize: 24,
	});
	let DND = new Button({
		tooltip: "Do Not Disturb",
		color: "secondary",
		outline: true,
		icon: "do-not-disturb",
		addClasses: "p-2 rounded-circle",
		iconSize: 24,
	});
	let Radio = new Button({
		tooltip: "Airplane mode",
		color: "secondary",
		outline: true,
		icon: "airplane-off",
		addClasses: "p-2 rounded-circle",
		iconSize: 24,
	});
	let Sound = new Button({
		tooltip: "Volume",
		color: "primary",
		icon: "volume-high",
		addClasses: "p-2 rounded-circle",
		iconSize: 24,
	});
	let Settings = new Button({
		tooltip: "Settings",
		color: "info",
		icon: "settings",
		addClasses: "p-2 rounded-circle",
		iconSize: 24,
	});
	Radio.onclick = () => {
		cp.exec("nmcli networking " + (Radio.classList.contains("btn-primary") ? "on" : "off"), updateNetwork);
	};
	Radio.oncontextmenu = e => {
		Shell.openSettings("network");
	};
	WiFi.oncontextmenu = e => {
		e.stopPropagation();
		Shell.openSettings("network-wlan");
	};
	WiFi.onclick = () => {
		cp.exec("nmcli radio wifi " + (WiFi.classList.contains("btn-primary") ? "off" : "on"), updateNetwork);
	};

	Screen.oncontextmenu = e => {
		e.stopPropagation();
		Elements.MenuBar.brightnessSettings.classList.toggle("d-none");
		Elements.MenuBar.brightnessSettings.classList.toggle("d-flex");
	};
	DND.onclick = () => {
		window.NOTIFICATIONS_MUTED = !window.NOTIFICATIONS_MUTED;
		DND.color = window.NOTIFICATIONS_MUTED ? "danger" : "secondary";
		DND.outline = !window.NOTIFICATIONS_MUTED;
		Elements.BarItems["official/tray"].Container.menu.getMenuItemById("DND").checked = window.NOTIFICATIONS_MUTED;
		if (window.NOTIFICATIONS_MUTED) DND.tray = new TrayItem("minus-circle-outline"); else if (DND.tray) DND.tray.remove();
	};
	Sound.onclick = () => {
		cp.execSync("amixer -q -D pulse sset Master toggle");
		Elements.MenuBar.soundSettings.updateControls();
	};
	Sound.oncontextmenu = e => {
		e.stopPropagation();
		Elements.MenuBar.soundSettings.classList.toggle("d-none");
		Elements.MenuBar.soundSettings.classList.toggle("d-flex");
	};
	Settings.onclick = () => Shell.openSettings();
	Elements.MenuBar.quickItems.items = {
		WiFi,
		Screen,
		DND,
		Radio,
		Sound,
		Settings
	};
	Elements.MenuBar.quickItems.append(...Object.values(Elements.MenuBar.quickItems.items));
	if (!Shell.isMobile)
		Elements.MenuBar.appendChild(Elements.MenuBar.quickItems);
	else
		Elements.MenuBar.prepend(Elements.MenuBar.quickItems);
}

async function renderBrightnessSettings() {
	try {
		Elements.MenuBar.brightnessSettings = document.createElement("section");
		Elements.MenuBar.brightnessSettings.className = "px-3 very-rounded d-none py-2 mt-2 shadow card " + (Shell.ui.darkMode ? "bg-dark" : "");
		let master = document.createElement('div');
		master.className = "d-flex align-items-center";
		master.icon = document.createElement("icon");
		master.icon.className = `btn p-1 mdi mdi-24px mdi-brightness-6 lh-24 d-flex rounded-circle mr-3 my-1 ` + (Shell.ui.darkMode ? "text-white btn-dark" : "btn-white text-dark");
		master.range = document.createElement("input");
		master.range.max = parseInt((await fs.readFile("/sys/class/backlight/intel_backlight/brightness")).toString());
		master.range.min = 0;
		master.range.step = 1;
		master.range.className = "custom-range";
		master.range.type = "range";
		master.range.onchange = function () {
			fs.writeFile("/sys/class/backlight/intel_backlight/brightness", master.range.value).then(() => {
				Elements.MenuBar.brightnessSettings.updateControls(true);
			});
		};
		Elements.MenuBar.brightnessSettings.updateControls = async function (norange) {
			let brightness = (await fs.readFile("/sys/class/backlight/intel_backlight/brightness")).toString();
			if (!norange)
				master.range.value = parseInt(brightness);
		};
		Elements.MenuBar.brightnessSettings.updateControls();
		master.append(master.icon, master.range);
		Elements.MenuBar.brightnessSettings.append(master);
		Elements.MenuBar.insertBefore(Elements.MenuBar.brightnessSettings, Elements.MenuBar.notifications);
	} catch (e) {
		Elements.MenuBar.quickItems.items.Screen.remove();
	}
}

function renderSoundSettings() {
	Elements.MenuBar.soundSettings = document.createElement("section");
	Elements.MenuBar.soundSettings.className = "px-3 very-rounded d-none py-2 mt-2 shadow card " + (Shell.ui.darkMode ? "bg-dark" : "");
	let master = document.createElement('div');
	master.className = "d-flex align-items-center";
	master.icon = document.createElement("icon");
	master.icon.onclick = () => {
		cp.execSync("amixer -q -D pulse sset Master toggle");
		Elements.MenuBar.soundSettings.updateControls();
	};
	master.icon.className = `btn p-1 mdi mdi-24px lh-24 d-flex rounded-circle mr-3 my-1 ` + (Shell.ui.darkMode ? "text-white btn-dark" : "btn-white text-dark");
	master.range = document.createElement("input");
	master.range.max = 100;
	master.range.min = 0;
	master.range.step = 1;
	master.range.className = "custom-range";
	master.range.type = "range";
	master.range.onchange = function () {
		cp.execSync("amixer -q -D pulse sset Master " + master.range.value + "%");
		Elements.MenuBar.soundSettings.updateControls(true);
	};
	Elements.MenuBar.soundSettings.updateControls = function (norange) {
		let sound = getCurrentVolume();
		if (!norange)
			master.range.value = sound.volume;
		master.icon.classList.remove("mdi-volume-high", "mdi-volume-off");
		master.icon.classList.add("mdi-volume-" + (sound.muted ? "off" : "high"));
		Elements.MenuBar.quickItems.items.Sound.color = sound.muted ? "secondary" : "primary";
		Elements.MenuBar.quickItems.items.Sound.outline = sound.muted;
		if (sound.muted) Elements.MenuBar.soundSettings.tray = new TrayItem("volume-off");
		else if (Elements.MenuBar.soundSettings.tray) {
			Elements.MenuBar.soundSettings.tray.remove();
			Elements.MenuBar.soundSettings.tray = undefined
		}
	};
	Elements.MenuBar.soundSettings.updateControls();
	master.append(master.icon, master.range);

	let notifVolume = document.createElement('div');
	notifVolume.className = "d-flex align-items-center mt-2";
	notifVolume.icon = document.createElement("icon");
	notifVolume.icon.className = `btn p-1 mdi mdi-24px lh-24 d-flex mdi-bell-outline rounded-circle mr-3 my-1 disabled ` + (Shell.ui.darkMode ? "text-white btn-dark" : "btn-white text-dark");
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
		Registry.set("system.notificationsVolume", parseFloat(notifVolume.range.value));
	};
	notifVolume.range.onchange(null);
	notifVolume.append(notifVolume.icon, notifVolume.range);
	Elements.MenuBar.soundSettings.append(master, notifVolume);
	Elements.MenuBar.insertBefore(Elements.MenuBar.soundSettings, Elements.MenuBar.notifications);
}

function getCurrentVolume() {
	try {
		let mono = cp.execSync("amixer -D pulse sget 'Master'").toString();
		let volume = mono.substring(mono.indexOf("[") + 1, mono.indexOf("]") - 1);
		let muted = mono.substring(mono.lastIndexOf("[") + 1, mono.lastIndexOf("]")) !== "on";
		return {
			volume: volume,
			muted: muted
		};
	} catch (e) {
		Elements.MenuBar.quickItems.items.Sound.oncontextmenu = function () {
		};
		return {
			volume: 50,
			muted: false
		}
	}
}

function renderNotifications() {
	Elements.MenuBar.notifications = document.createElement("notifications");
	Elements.MenuBar.notifications.className = "flex-grow-1 fade show";
	Elements.MenuBar.notifications.none = document.createElement("section");
	Elements.MenuBar.notifications.none.className = "card shadow very-rounded flex-column p-3 text-center text-muted font-italic " + (Shell.ui.darkMode ? "bg-dark text-white" : "");
	Elements.MenuBar.notifications.none.innerText = "No new notifications".toLocaleString();
	Elements.MenuBar.notifications.appendChild(Elements.MenuBar.notifications.none);
	Elements.MenuBar.appendChild(Elements.MenuBar.notifications)
}

let notificationsCount = Elements.MenuBar.notifications.childElementCount - 1;
new MutationObserver(e => {
	notificationsCount = e[0].target.childNodes.length - 1;
	Elements.MenuBar.notifications.none.classList.toggle("d-none", !!notificationsCount);
}).observe(Elements.MenuBar.notifications, {
	childList: true
});
