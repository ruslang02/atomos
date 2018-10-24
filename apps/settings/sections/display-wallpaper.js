const fs = require("fs");
const path = require("path");
const aclock = path.join(osRoot, "apps", "alphaclock", "aclock.js");
const aclockIndex = Registry.get("system.autostart").findIndex(e => {
	return path.normalize(e.src) === aclock && fs.existsSync(aclock);
});
setTitle("Wallpaper");
root.append(newSmallListItem({
	label: "Choose a new wallpaper",
	sublabel: "From local storage",
	click() {
		shell.selectFile(shell.ACTION_OPEN).then(file => {
			fs.promises.copyFile(file, path.join(app.getPath("appData"), "wallpaper.jpg")).then(e => {
				new Snackbar("Wallpaper have been changed");
			});
		});
	}
}));
root.append(newSmallListItem({
	label: "Use \"α\" Clock wallpapers",
	sublabel: "Every day the wallpaper will be updated",
	type: "checkbox",
	checked: aclockIndex !== -1,
	click(checked) {
		let old = Registry.get("system.autostart");
		if(checked) {
			old.push({
				name: "α Clock Wallpaper Service",
				src: aclock
			});
			Registry.set("system.autostart", old);
		} else {
			old.splice(aclockIndex, 1);
			Registry.set("system.autostart", old);
		}
		openSection("display-wallpaper", false)
	}
}))
