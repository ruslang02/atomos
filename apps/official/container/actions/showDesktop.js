const AppWindow = require(`@api/WindowManager`);
if (AppWindow.getAllWindows().length !== 0) AppWindow.getAllWindows().forEach(win => {
	if (win) win.minimize()
});