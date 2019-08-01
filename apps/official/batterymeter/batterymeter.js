const {
	Button
} = require("@api/Components");
const Menu = require("@api/Menu");
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
		let iconSize = !!Registry.get("system.showBatteryPercentage") ? 18 : 24;
		button.icon.className = `mdi mdi-${iconSize}px lh-${iconSize} mdi-${icon} ${!!Registry.get("system.showBatteryPercentage") ? "mr-1" : ""}`;
		button.icon.style.height = CSS.px(iconSize);
		button.percentage.innerText = !!Registry.get("system.showBatteryPercentage") ? data.percent + "%" : "";
		button.className = `${data.model ? "d-flex" : "d-none"} btn  btn-${data.percent > 49 ? "success" : (data.percent > 19 ? "warning" : "danger")} rounded-pill d-flex mr-2 align-items-center`
		button.dataset.originalTitle = "Time remaining: " + data.timeremaining + " minutes";
		button.style.padding = !!Registry.get("system.showBatteryPercentage") ? ".25rem .75rem" : ".25rem";
		button.style.height = CSS.px(35);
	}).catch(e => {
		console.error(e);
		clearInterval(batteryTimer);
	})
}

body.className = "d-flex align-items-center position-relative";
let button = document.createElement("button");
button.className = "";
button.icon = document.createElement("icon");
button.icon.className = "mdi mdi-18px lh-18";
button.percentage = document.createElement("div");
button.append(button.icon, button.percentage);
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
updateBattery().then(() => {
	new Tooltip(button);
});

let batteryPanel = document.createElement("section");
batteryPanel.className = "toast fly up hide card position-absolute";
batteryPanel.style.right = 0;
batteryPanel.open = function () {
	Elements.Bar.keepOpen(true);
	batteryPanel.classList.replace("hide", "show");
};
batteryPanel.close = function () {
	Elements.Bar.keepOpen(false);
	batteryPanel.classList.replace("show", "hide");
};
let batteryHeader = document.createElement("header");
batteryHeader.className = "text-white d-flex";
let batteryIcon = document.createElement("icon");
batteryIcon.className = "mdi mdi-48px lh-48 mdi-battery-30";
let batteryPerc = document.createElement("div");
batteryPerc.className = "h1 m-0 font-weight-light";
batteryHeader.append(batteryIcon, batteryPerc);
batteryPanel.append(batteryHeader);
body.append(button, batteryPanel);
setTimeout(() =>
	batteryPanel.style.bottom = CSS.px(body.offsetHeight), 100);
return button;