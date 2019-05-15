setTitle("Device specifications");
const si = require("systeminformation");
let listgrp = document.createElement("section");
listgrp.className = "list-group mb-2 rounded-0 d-flex flex-column";
let list = [];
let i = await si.getAllData();
console.clear();
console.log("Here are your PC stats:", i);
list.cpu = newSmallListItem({
	label: i.cpu.manufacturer + " " + i.cpu.brand,
	icon: "chip",
	color: "var(--primary)",
	alignToTop: true,
	sublabel: `Base clock: ${i.cpu.speed} GHz<br>Max clock: ${i.cpu.speedmax} GHz<br>Cores: ${i.cpu.cores} (${i.cpu.physicalCores} physical)<br>Temperature: ${i.temp.main}°C `
});
list.memory = newSmallListItem({
	label: i.memLayout.length ? (i.memLayout[0].manufacturer + " " + i.memLayout[0].type) : "Memory",
	icon: "memory",
	color: "var(--secondary)",
	alignToTop: true,
	sublabel: `Total: ${Math.trunc(i.mem.total / 1024 / 1024)} MB<br>Free: ${Math.trunc(i.mem.available / 1024 / 1024)} MB<br>Used: ${Math.trunc(i.mem.active / 1024 / 1024)} MB`
});
if (i.battery.hasbattery) list.battery = newSmallListItem({
	label: i.battery.percent + "%",
	icon: "battery-outline",
	color: "var(--success)",
	alignToTop: true,
	sublabel: `Total capacity: ${i.battery.maxcapacity}`
});
list.gpu = newSmallListItem({
	label: i.graphics.controllers[0].vendor + " " + i.graphics.controllers[0].model,
	icon: "gpu",
	color: "var(--warning)",
	alignToTop: true,
	sublabel: `Video memory: ${i.graphics.controllers[0].vram} MB`
});
listgrp.append(...Object.values(list));
root.append(listgrp);
root.innerHTML += "<p class='mx-3'>More info in Developer Tools Console.</p>";


