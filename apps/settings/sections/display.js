//const fs = require("fs");
const path = require("path");
setTitle("Display")
let main = document.createElement("main");
root.append(main)

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
	label: "Effects"
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
			buttonColor: "var(--danger)",
			timeout: 1000 * 60 * 60 * 24,
			click() {
				require("electron").remote.getCurrentWindow().reload();
			}
		})
	}
});
list.thumbEnabled = newSmallListItem({
	label: "Thumbnails",
	sublabel: "View small shots of running apps",
	type: "checkbox",
	checked: Registry.get("system.enableThumbnails"),
	click(checked) {
		Registry.set("system.enableThumbnails", checked);
	}
});
list.thumbEnabled.input.disabled = true;
list.thumbEnabled.classList.add("disabled");
list.transparency = newSmallListItem({
	label: "Transparency",
	sublabel: "Semi-transparent windows, may affect performance",
	type: "checkbox",
	checked: Registry.get("system.enableTransparentWindows"),
	click(checked) {
		Registry.set("system.enableTransparentWindows", checked);
	}
});
list.shadows = newSmallListItem({
	label: "Shadows",
	sublabel: "Cast shadows behind windows",
	type: "checkbox",
	checked: Registry.get("system.enableWindowShadows"),
	click(checked) {
		Registry.set("system.enableWindowShadows", checked);
	}
});
list.liveTransforms = newSmallListItem({
	label: "Live Transformations",
	sublabel: "Transform window's content immediately.<br />Disabling this significantly improves UI performance.<br/><i>Restart will be needed</i>",
	type: "checkbox",
	checked: !Registry.get("system.disableLiveTransformations"),
	click(checked) {
		Registry.set("system.disableLiveTransformations", !checked);
	}
});
list.menuIcons = newSmallListItem({
	label: "Show icons in menus",
	type: "checkbox",
	checked: Registry.get('system.showMenuIcons') !== false,
	click(checked) {
		Registry.set("system.showMenuIcons", checked);
	}
});
list.append(list.wallpaper, list.generalLabel, list.darkMode, list.thumbEnabled, list.transparency, list.shadows, list.liveTransforms, list.menuIcons);
main.append(list);
