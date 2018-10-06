const fs = require("fs").promises;
const path = require("path");
setTitle("Wallpaper");
root.append(newSmallListItem({
	label: "Choose a new wallpaper",
	sublabel: "From local storage",
	click() {
		shell.selectFile(shell.ACTION_OPEN).then(file => {
			fs.copyFile(file, path.join(app.getPath("appData"), "wallpaper.jpg")).then(e => {
				new Snackbar("Wallpaper have been changed");
			});
		});
	}
}))
