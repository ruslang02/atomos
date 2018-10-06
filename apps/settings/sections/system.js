const fs = require("fs").promises;
const path = require("path");

setTitle("System");
let info = JSON.parse(await fs.readFile(path.join(osRoot, "package.json")));
let osinfo = document.createElement("section");
osinfo.className = "d-flex flex-column align-items-center p-3 mb-2";
osinfo.icon = document.createElement("icon");
osinfo.icon.className = "mdi mdi-atom mdi-36px d-flex rounded-circle bg-primary p-2 text-white lh-36 mb-2";
osinfo.osname = document.createElement("div");
osinfo.osname.innerText = info.productName || info.name;
osinfo.osname.className = "h5";
osinfo.osver = document.createElement("div");
osinfo.osver.innerText = `Version ${info.version}. Build ${info.buildversion}`;
osinfo.osver.className = "text-muted smaller";
osinfo.append(osinfo.icon, osinfo.osname, osinfo.osver);
root.append(osinfo);

let list = document.createElement("section");
list.className = "list-group mb-2 rounded-0";
list.dat = newSmallListItem({
	color: "var(--secondary)",
	icon: "clock-outline",
	label: "Date and time",
	click: e => openSection("system-time")
});
list.pcinfo = newSmallListItem({
	color: "var(--primary)",
	icon: "memory",
	label: "Device specifications"
});
list.sources = newSmallListItem({
	color: "var(--success)",
	icon: "source-branch",
	label: "Open source licenses"
});
list.author = newSmallListItem({
	color: "var(--dark)",
	icon: "account",
	label: "Developer's contacts"
});
list.append(list.dat);
root.append(list);
