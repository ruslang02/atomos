const {
	BrowserWindow,
	app
} = require('electron');
const fs = require("fs");
/* System Components IDs
 * 1 - Desktop
 * 2 - Taskbar
 * 3 - Notifications
*/
global.clipboards = {
	file: []
};

if(fs.existsSync("/etc/os-release"))
	if(fs.readFileSync("/etc/os-release").indexOf("atomos") !== -1)
		require("child_process").exec("xfwm4");
let win;
let taskbar;
let notification;

app.on('ready', function () {
	const {
		width,
		height,
		x,
		y
	} = require("electron").screen.getPrimaryDisplay().bounds;
	win = new BrowserWindow({
		frame: false,
		resizable: false,
		movable: false,
		minimizable: false,
		maximizable: false,
		closable: false,
		type: "desktop",
		x: x,
		y: y,
		width: width,
		height: height,
		skipTaskbar: true,
		backgroundColor: '#bbd8e8',
		webPreferences: {
			nativeWindowOpen: true
		},
		arguments: {
			desktop: true
		}
	});
	win.loadURL("file://" + __dirname + "/apps/aos-files/index.html");
	win.on("beforeunload", function () {
		return false;
	});
	win.on('close', function () {
		win = null
	});
	win.webContents.on('will-navigate', ev => {
		ev.preventDefault()
	});
	win.show();
	win.setSize(width, height);
	taskbar = new BrowserWindow({
		x: x,
		y: y + height - 46,
		width: width,
		height: 47,
		frame: false,
		closable: false,
		minimizable: false,
		maximizable: false,
		resizable: false,
		movable: false,
		skipTaskbar: true,
		alwaysOnTop: true,
		type: "dock"
	});
	taskbar.webContents.on('did-finish-load', function () {
		fs.readFile(app.getPath("appData") + "/autostart.json", function (err, autostart) {
			if(err || !autostart) {
				console.error(err);
				return;
			}
			autostart = JSON.parse(autostart);
			autostart.forEach(function (item) {
				let service = new BrowserWindow({
					skipTaskbar: true,
					show: false,
					width: 0,
					height: 0,
					x: x + height + 10,
					y: y + width + 10,
					resizable: false,
					frame: false,
					arguments: Object.assign({},{autostart: true}, item.args)
				});
				service.setMenu(null);
				service.loadURL("file:///" + app.getAppPath() + "/apps/" + item.app + "/index.html");
			})
		})
	});
	taskbar.loadURL("file://" + __dirname + "/sys/taskbar/index.html");
	taskbar.show();
	taskbar.webContents.on('will-navigate', ev => {
		ev.preventDefault()
	});

	notification = new BrowserWindow({
		x: x + width - 10 - 350,
		y: y + height - 37 - 150,
		width: 450,
		height: 450,
		frame: false,
		closable: false,
		minimizable: false,
		maximizable: false,
		alwaysOnTop: true,
		resizable: false,
		skipTaskbar: true,
		movable: false,
		show: false,
		type: "notification"
	});
	notification.webContents.on('will-navigate', ev => {
		ev.preventDefault()
	});
	notification.loadURL("file://" + __dirname + "/sys/notification/index.html");
	if (process.argv.indexOf("--debug-taskbar") !== -1)
		taskbar.toggleDevTools();
});
