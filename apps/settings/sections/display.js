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
	title: "Wallpaper",
	onclick: e => openSection("display-wallpaper")
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
list.append(list.wallpaper);
main.append(list);
