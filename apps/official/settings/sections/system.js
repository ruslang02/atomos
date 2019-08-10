const fs = require("fs").promises;
const path = require("path");
const {Shell, AppWindow} = require("@api");
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
osinfo.osver.innerText = `v. ${info.version}`;
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
    color: "var(--dark)",
	icon: "memory",
	label: "Device specifications",
	click: () => openSection("system-specs")
});
list.sources = newSmallListItem({
	color: "var(--success)",
	icon: "source-branch",
	label: "Open source licenses",
	click: () => AppWindow.launch("@atomos/typewriter", {file: osRoot + "/LICENSE"})
});
list.quickTiles = newSmallListItem({
    color: "var(--primary)",
    icon: "gamepad-circle-outline",
    label: "Quick Tiles",
    click: () => openSection("system-quicktiles")
});
let newButton = document.createElement("button");
newButton.className = "m-2 lh-24 p-1 mdi mdi-24px mdi-github-face btn rounded-circle d-flex " + (Shell.ui.darkMode ? "btn-dark" : "btn-white");
newButton.onclick = () => Shell.openExternal(info.repository.url);
setActionButton(newButton);
list.append(list.dat, list.pcinfo, list.sources, list.quickTiles);
let debugInfo = document.createElement("div");
debugInfo.className = "smaller text-muted lh-24 px-3";
debugInfo.innerText = `Electron ${process.versions.electron}
Chromium ${process.versions.chrome}
node ${process.versions.node}`;
root.append(list, debugInfo);