const fs = require("fs").promises;
const path = require("path");
setTitle("Apps and notifications")
let main = document.createElement("main");
root.append(main)
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
	click() {openSection("apps-autostart")}
});
list.append(list.autostart);
main.append(list);

let amLabel = document.createElement("label");
amLabel.className = "dropdown-header flex-shrink-0 px-3 font-weight-bolder";
amLabel.innerText = "Application Manager"
main.append(amLabel);

let appList = document.createElement("section");
appList.className = "list-group scrollable-x-0";
async function listApps() {
	let apps = await fs.readdir(path.join(osRoot, "apps"));
	osinfo.osname.innerText = apps.length + " apps installed";
	for(const item of apps) {
    try {
      let pkg = JSON.parse(await fs.readFile(path.join(osRoot, "apps", item, "package.json")));
      let elem = document.createElement("button");
			elem.onclick = e => {
				root.currentApp = item;
				openSection("apps-app");
			}
      elem.className = "list-group-item fly left show flex-shrink-0 rounded-0 list-group-item-action border-left-0 border-right-0 d-flex align-items-center px-3 py-2"
      elem.icon = new Image(48, 48);
      elem.icon.className = "mr-2";
      elem.icon.src = path.join(osRoot, "apps", item, pkg.icon);
      elem.header = document.createElement("header");
      elem.header.innerText = pkg.productName || pkg.name;
      elem.footer = document.createElement("footer");
      elem.footer.innerText = pkg.version;
      elem.footer.className = "smaller text-muted";
      elem.header.append(elem.footer);
      elem.append(elem.icon, elem.header);
      appList.append(elem)
    } catch(e) {console.log(e)}
  }
}
main.append(appList)
listApps();
