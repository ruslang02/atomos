const AppWindow = require("@api/WindowManager");
AppWindow.launch("official/files", {
	file: require("path").join(process.env.HOME, "Pictures")
});
