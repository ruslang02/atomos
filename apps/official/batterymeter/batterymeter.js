const {
	Button
} = require("@api/Components");
const Menu = require("@api/Menu");
const Shell = require("@api/Shell");
const Registry = require("@api/Registry");
const si = require("systeminformation");
let batteryTimer = setInterval(updateBattery, 10000);

function updateBattery() {
	return si.battery().then(data => {
		if (!data.model)
			clearInterval(batteryTimer);
		let icon = Math.round(data.percent / 10) * 10;
		if (icon === 100) icon = "battery";
		else if (icon === 0) icon = "battery-outline";
		else icon = "battery-" + icon;
        if (data.ischarging) icon = icon.replace("battery", "battery-charging");
        let isPerc = !!Registry.get("system.showBatteryPercentage");
        let iconSize = isPerc ? 18 : 24;
        let hours = Math.trunc(data.timeremaining / 60);
        let minutes = data.timeremaining - Math.trunc(data.timeremaining / 60) * 60;
		let time = hours > 0 ? hours + " hours" + (minutes > 0 ? " " + minutes + " minutes" : "") : (minutes > 0 ? minutes + " minutes" : "Not available")
        let status = (data.percent > 49 || data.ischarging) ? "success" : (data.percent > 19 ? "warning" : "danger");
        button.icon.className = `mdi mdi-${iconSize}px d-flex lh-${iconSize} mdi-${icon}`;
        batteryIcon.className = `mdi mdi-48px d-flex lh-48 mdi-${icon}`;
        button.icon.classList.toggle("mr-1", isPerc);
        button.percentage.classList.toggle("d-none", !isPerc);
        batteryIcon.style["-webkit-text-stroke"] = `2px var(--${status})`;
        batteryHeader.className = "text-white d-flex py-2 px-3 align-items-center bg-" + status;
		button.icon.style.height = CSS.px(iconSize);
        button.percentage.innerText = batteryPerc.innerText = data.percent + "%";
        button.className = `${data.model ? "d-flex" : "d-none"} btn btn-${status} rounded-pill d-flex mr-2 align-items-center`;
        button.dataset.originalTitle = "Time remaining: " + time;
        button.style.padding = isPerc ? ".25rem .75rem" : ".25rem";
        batteryInfo.innerHTML = `<b class="mr-2">Manufacturer</b> ${data.manufacturer || "Unknown"}<br/><b class="mr-2">Model</b> ${data.model || "Unknown"}<br/><b class="mr-2">Time remaining</b> ${time}`
	}).catch(e => {
		clearInterval(batteryTimer);
	})
}

body.className = "d-flex align-items-center position-relative";
let button = document.createElement("button");
button.icon = document.createElement("icon");
button.percentage = document.createElement("div");
button.style.height = CSS.px(35);
button.append(button.icon, button.percentage);
button.addEventListener("click", e => {
    e.stopPropagation();
    if (batteryPanel.classList.contains("show")) batteryPanel.close(); else batteryPanel.open();
});
button.oncontextmenu = e => {
	e.stopPropagation();
	new Menu([{
		type: "checkbox",
		label: "Show battery percentage",
		checked: Registry.get("system.showBatteryPercentage"),
		click(checked) {
			Registry.set("system.showBatteryPercentage", checked);
			updateBattery();
		}
	}]).popup();
};

let batteryPanel = document.createElement("section");
batteryPanel.className = "toast fly up hide card m-0 position-absolute " + (Shell.ui.darkMode ? "bg-dark" : "bg-white");
batteryPanel.style.right = CSS.rem(0.5);
batteryPanel.style.minWidth = CSS.px(300);
batteryPanel.style.bottom = "var(--taskbar-height)";
batteryPanel.open = function () {
	Elements.Bar.keepOpen(true);
	batteryPanel.classList.replace("hide", "show");
};
batteryPanel.close = function () {
	Elements.Bar.keepOpen(false);
	batteryPanel.classList.replace("show", "hide");
};
let batteryHeader = document.createElement("header");
let batteryIcon = document.createElement("icon");
let batteryPerc = document.createElement("div");
batteryPerc.className = "h1 m-0 font-weight-light";
batteryHeader.append(batteryIcon, batteryPerc);
let batteryInfo = document.createElement("div");
batteryInfo.className = "py-3 px-4";
batteryPanel.append(batteryHeader, batteryInfo);
body.append(button, batteryPanel);
updateBattery().then(() => {
    new Tooltip(button);
});
return button;