const fs = require("fs-extra");
const path = require("path");
setTitle("Apps and notifications")
let main = document.createElement("main");
root.append(main)

let list = document.createElement("section");
list.className = "list-group flex-shrink-0 rounded-0";
list.wallpaper = newSmallListItem({
	color: "var(--success)",
	icon: "image-filter-hdr",
	title: "Wallpaper"
});
list.themes = newSmallListItem({
	color: "var(--warning)",
	icon: "brush",
	title: "Themes"
});
list.wm = newSmallListItem({
	color: "var(--primary)",
	icon: "transition",
	title: "Effects"
});
list.append(list.wallpaper, list.themes, list.wm);
main.append(list);
