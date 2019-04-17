const fs = require("fs").promises;
const path = require("path");
const Shell = require("@api/Shell");
setTitle("Wi-Fi");
let main = document.createElement("main");
root.append(main);

let networkList = document.createElement("section");
networkList.className = "list-group scrollable-x-0";

async function listNetworks() {
	let apps = await fs.readdir(dir);
	osinfo.osname.innerText = apps.length + " " + "apps installed".toLocaleString();
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