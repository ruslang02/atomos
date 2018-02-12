const {
	BrowserWindow,
	app
} = require('electron');
const fs = require("fs");
global.wsk = require('electron-window-state-manager');
global.clipboards = {
	file: []
};
global.gui = {};

if(fs.existsSync("/etc/os-release"))
	if(fs.readFileSync("/etc/os-release").indexOf("atomos") !== -1)
		require("child_process").exec("xfwm4");

let win;
let taskbar;

const isSecondInstance = app.makeSingleInstance(() => {
	if (win)
		win.focus()
});

if (isSecondInstance) {
	console.log("Another AtomOS instance is already running. Quitting...");
	app.exit()
}
app.on('before-quit', function() {
	BrowserWindow.getAllWindows().forEach(w => w.destroy());
});
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

	win.webContents.on('will-navigate', ev => {
		ev.preventDefault()
	});
	win.show();
	global.gui.desktop = win.id;
	win.setSize(width, height);
	taskbar = new BrowserWindow({
		x: x,
		y: y + height - 32,
		width: width,
		height: 32,
		minHeight: 32,
		minWidth: width,
		maxWidth: width,
		maxHeight: 96,
		frame: false,
		closable: false,
		fullscreenable: false,
		minimizable: false,
		maximizable: false,
		skipTaskbar: true,
		alwaysOnTop: true,
		type: "dock",
		background: "#f8f9fa"
	});
	taskbar.webContents.on('did-finish-load', function () {
		fs.readFile(app.getPath("appData") + "/autostart.json", function (err, autostart) {
			if(err || !autostart) {
				autostart = "[]";
				fs.writeFileSync(app.getPath("appData") + "/autostart.json", autostart)
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
	global.gui.taskbar = taskbar.id;
	taskbar.webContents.on('will-navigate', ev => {
		ev.preventDefault()
	});
	if (process.argv.indexOf("--debug-taskbar") !== -1)
		taskbar.toggleDevTools();
});
