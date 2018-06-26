const {
	BrowserWindow,
	app,
	protocol,
	session
} = require('electron');
const fs = require("fs");
global.wsk = require('electron-window-state-manager');
global.clipboards = {
	file: []
};
global.gui = {};
/*
if(fs.existsSync("/etc/os-release"))
	if(fs.readFileSync("/etc/os-release").indexOf("atomos") !== -1)
		require("child_process").exec("mutter");
*/
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

app.disableHardwareAcceleration();

app.on('before-quit', function() {
	BrowserWindow.getAllWindows().forEach(w => w.destroy());
});
app.on('ready', function() {
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
		showOnLoad: true,
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

	let uiScaling = 1.0;
	let autostart = [];
	session.fromPartition("persist:registry").cookies.get({
		name: "system"
	}, function(e, cookie) {
		if (cookie.length) {
			if (typeof JSON.parse(cookie[0].value).uiScaling === 'number')
				uiScaling = JSON.parse(cookie[0].value).uiScaling;
			if (typeof JSON.parse(cookie[0].value).autoStart === 'object')
				autostart = JSON.parse(cookie[0].value).autoStart;
		}
		taskbar = new BrowserWindow({
			x: x,
			y: y + height - Math.ceil(32 * uiScaling),
			width: width,
			height: Math.ceil(32 * uiScaling),
			minHeight: Math.ceil(32 * uiScaling),
			minWidth: width,
			maxWidth: width,
			maxHeight: Math.ceil(96 * uiScaling),
			frame: false,
			closable: false,
			fullscreenable: false,
			minimizable: false,
			maximizable: false,
			skipTaskbar: true,
			showOnLoad: true,
			alwaysOnTop: true,
			transparent: true,
			type: "dock",
			title: "atomos_taskbar",
			webPreferences: {
      	nodeIntegrationInWorker: true
			}
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
});
