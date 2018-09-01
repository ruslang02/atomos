const fs = require("fs-extra");
const path = require("path");

setTitle("System");
let info = fs.readJsonSync(path.join(osRoot, "package.json"));
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
list.pcinfo = newSmallListItem({
	color: "var(--primary)",
	icon: "memory",
	title: "Device specifications"
});
list.sources = newSmallListItem({
	color: "var(--success)",
	icon: "source-branch",
	title: "Open source licenses"
});
list.author = newSmallListItem({
	color: "var(--dark)",
	icon: "account",
	title: "Developer's contacts"
});
list.append(list.pcinfo, list.sources, list.author);
root.append(list);
