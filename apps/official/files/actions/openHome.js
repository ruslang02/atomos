const AppWindow = require("@api/WindowManager");
AppWindow.launch("official/files", {
	file: process.env.HOME
});
