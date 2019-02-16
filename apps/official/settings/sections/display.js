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
		new Snackbar({
			message: "UI restart is needed to apply changes",
			buttonText: "Restart",
			type: "danger",
			timeout: 1000 * 60 * 60 * 24,
			click() {
				require("electron").remote.getCurrentWindow().reload();
			}
		})
	}
});
list.append(list.wallpaper, list.wm, /* list.generalLabel , */list.darkMode);
main.append(list);
