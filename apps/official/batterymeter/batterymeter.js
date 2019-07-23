const {
	Button
} = require("@api/Components");
const si = require("systeminformation");
let batteryTimer = setInterval(updateBattery, 1000);

function updateBattery() {
	si.battery().then(data => {
		if (!data.model)
			clearInterval(batteryTimer);
		let icon = Math.round(data.percent / 10) * 10;
		button.visible = !!data.model;
		if (icon === 100) icon = "battery";
		else if (icon === 0) icon = "battery-outline";
		else icon = "battery-" + icon;
		button.icon = icon;
		button.innerText = data.percent + "%";
		if (data.percent > 49)
			button.color = "success";
		else if (data.percent > 19)
			button.color = "warning";
		else button.color = "danger";
	}).catch(e => {
		console.error(e);
		clearInterval(batteryTimer);
	})
}

body.className = "d-flex align-items-center position-relative";
let button = new Button({
	icon: "battery-60",
	text: "60%",
	color: "success",
	shadow: true,
	addClasses: "rounded-pill mr-2",
	visible: false
});
body.append(button);
updateBattery();
return button;
/*
let button = document.createElement("button");
button.className = "btn btn-success shadow rounded-pill d-flex align-items-center";
let icon = document.createElement("icon");
icon.cl*/