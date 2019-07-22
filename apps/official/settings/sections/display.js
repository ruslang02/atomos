const Registry = require(`@api/Registry`);
const {Snackbar} = require("@api/Notification");
setTitle("Display");
let main = document.createElement("main");
root.append(main);

let list = document.createElement("section");
list.className = "list-group flex-shrink-0 rounded-0";
list.wallpaper = newSmallListItem({
	color: "var(--success)",
	icon: "image-filter-hdr",
	label: "Wallpaper",
	click: e => openSection("display-wallpaper")
});
list.themes = newSmallListItem({
	color: "var(--warning)",
	icon: "brush",
	label: "Themes"
});
list.wm = newSmallListItem({
	color: "var(--primary)",
	icon: "transition",
	label: "Effects",
	click: () => openSection("display-effects")
});
list.generalLabel = newSmallListItem({
	label: "General settings",
	type: "header"
});
list.darkMode = newSmallListItem({
	label: "Dark mode",
	sublabel: "<i>Restart will be needed</i>",
	type: "checkbox",
	checked: Registry.get("system.isDarkMode") || false,
	click(checked) {
		Registry.set("system.isDarkMode", checked);
	}
});

let dScale = newSmallListItem({
	label: "Display Scaling",
	sublabel: "x" + require("electron").remote.getCurrentWebContents().getZoomFactor()
});
dScale.classList.remove("btn", "btn-white", "btn-dark", "align-items-center");
dScale.classList.add("flex-column");
dScale.notifRange = document.createElement("input");
dScale.notifRange.type = "range";
dScale.notifRange.className = "custom-range mt-2";
dScale.notifRange.min = 0.5;
dScale.notifRange.max = 2.0;
dScale.notifRange.step = 0.25;
dScale.notifRange.value = require("electron").remote.getCurrentWebContents().getZoomFactor();
dScale.notifRange.onchange = () => {
	require("electron").remote.getCurrentWebContents().setZoomFactor(parseFloat(dScale.notifRange.value));
	dScale.querySelector("div.small").innerText = "x" + dScale.notifRange.value;
	window.relocate();
};
dScale.append(dScale.notifRange);
list.append(list.wallpaper, list.wm, /* list.generalLabel , */list.darkMode, dScale);
main.append(list);
