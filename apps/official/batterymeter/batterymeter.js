const {
	Button
} = require("@api/Components");
const Menu = require("@api/Menu");
const Registry = require("@api/Registry");
const si = require("systeminformation");
let batteryTimer = setInterval(updateBattery, 10000);

function updateBattery() {
	si.battery().then(data => {
		if (!data.model)
			clearInterval(batteryTimer);
		let icon = Math.round(data.percent / 10) * 10;
		if (icon === 100) icon = "battery";
		else if (icon === 0) icon = "battery-outline";
		else icon = "battery-" + icon;
		let iconSize = !!Registry.get("system.showBatteryPercentage") ? 18 : 24;
		button.icon.className = `mdi mdi-${iconSize}px lh-${iconSize} mdi-${icon} `;
		button.percentage.innerText = !!Registry.get("system.showBatteryPercentage") ? data.percent + "%" : "";
		button.className = `${data.model ? "d-flex" : "d-none"} btn btn-${data.percent > 49 ? "success" : (data.percent > 19 ? "warning" : "danger")} shadow rounded-pill d-flex mr-2 align-items-center`
		ж
		button.dataset.originalTitle = "Time remaining: " + data.timeremaining + " minutes";
		button.style.padding = (!!Registry.get("system.showBatteryPercentage") ? ".25rem .5rem" : ".25rem") + " !important";
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
body.append(button);
updateBattery();
return button;
/*
*/