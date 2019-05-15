const fs = require("fs");
const path = require("path");
const aclock = path.join(osRoot, "apps", "official/alphaclock", "aclock.js");
const Shell = require("@api/Shell");
const Registry = require(`@api/Registry`);
const {Snackbar} = require("@api/Notification");
const aclockIndex = (Registry.get("system.autostart") || []).findIndex(e => {
	return path.normalize(e.src) === aclock && fs.existsSync(aclock);
});
const wpFile = path.join(process.env.HOME, ".config", "wallpaper.jpg");
if (!fs.existsSync(wpFile)) fs.copyFile(path.join(osRoot, "resources", "wallpaper.jpg"), wpFile, e => (e ? new Snackbar(e) : ""));
setTitle("Wallpaper");
root.append(newSmallListItem({
	label: "Choose a new wallpaper",
	sublabel: "From local storage",
	click() {
		Shell.selectFile(Shell.ACTION_OPEN).then(file => {
			fs.promises.copyFile(file, wpFile).then(e => {
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
		if (checked) {
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
}));
