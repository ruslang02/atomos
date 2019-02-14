const fs = require("fs").promises;
const path = require("path");
const Shell = require("@api/Shell");
setTitle("Apps and notifications");
let main = document.createElement("main");
root.append(main);
let osinfo = document.createElement("section");
osinfo.className = "d-flex flex-column flex-shrink-0 align-items-center p-3";
osinfo.icon = document.createElement("icon");
osinfo.icon.className = "mdi mdi-application mdi-36px d-flex rounded-circle py-2 pr-2 text-white lh-36 mb-2";
osinfo.icon.style.background = "var(--orange)";
osinfo.icon.style.paddingLeft = "calc(0.5rem - 0.6px)"; // An awful workaround. Question materialdesignicons.com why I should do this
osinfo.osname = document.createElement("div");
osinfo.osname.className = "h5 m-0";
osinfo.append(osinfo.icon, osinfo.osname);
main.append(osinfo);

let list = document.createElement("section");
list.className = "list-group flex-shrink-0 rounded-0";
list.default = newSmallListItem({
	color: "var(--primary)",
	icon: "open-in-app",
	label: "Default applications"
});
list.assocs = newSmallListItem({
	color: "var(--success)",
	icon: "link",
	label: "File associations"
});
list.autostart = newSmallListItem({
	color: "var(--warning)",
	icon: "auto-fix",
	label: "Auto-start management",
	click() {
		openSection("apps-autostart")
	}
});
list.append(list.autostart);
main.append(list);

let amLabel = newSmallListItem({
	label: "Application Manager",
	type: "header"
});
main.append(amLabel);

let appList = document.createElement("section");
appList.className = "list-group scrollable-x-0";

async function listApps(dir) {
	let apps = await fs.readdir(dir);
	osinfo.osname.innerText = apps.length + " apps installed";
	for (const item of apps) {
		let itemPath = path.join(dir, item);
		let stat = await fs.stat(itemPath);
		if (stat.isDirectory()) {
			listApps(itemPath);
			continue;
		} else if (item.toLowerCase().trim() !== "package.json") continue;
		try {
			let pkg = JSON.parse(await fs.readFile(itemPath));
			let elem = document.createElement("button");
			elem.onclick = () => {
				window.__currentApp = pkg.name.replace("@atomos", "official").replace("@", "");
				openSection("apps-app");
			};
			elem.className = "rounded-0 border-top border-bottom-0 border-left-0 border-right-0 d-flex align-items-center text-left py-2 mb-0 btn px-3 " + (Shell.ui.darkMode ? "btn-dark border-secondary" : "btn-white");
			elem.icon = document.createElement("icon");
			elem.icon.className = "mdi mdi-24px rounded-max text-white d-flex p-2 lh-24 my-1 mr-2 mdi-" + pkg.icon;
			elem.icon.style.background = pkg.color;
			elem.header = document.createElement("header");
			elem.header.className = "text-truncate";
			elem.header.innerText = pkg.productName || pkg.name;
			elem.footer = document.createElement("footer");
			elem.footer.innerText = pkg.version;
			elem.footer.className = "smaller text-muted";
			elem.header.append(elem.footer);
			elem.append(elem.icon, elem.header);
			appList.append(elem)
		} catch (e) {
			console.log(e)
		}
	}
}

main.append(appList);
listApps(path.join(osRoot, "apps"));