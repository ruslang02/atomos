const {
	BrowserWindow,
	app,
	session
} = require('electron');
const fs = require("fs");
const path = require("path");
let isDebug = global.isDebug = (process.argv[2] ? process.argv[2].trim().toLowerCase() == "-d" : false);
global.shutdown = {
	confirmed: false
};
let win;
app.on('ready', function() {
	const {
		width,
		height,
		x,
		y
	} = require("electron").screen.getPrimaryDisplay().bounds;

	win = new BrowserWindow({
		frame: isDebug,
		resizable: isDebug,
		movable: isDebug,
		minimizable: isDebug,
		maximizable: isDebug,
		closable: isDebug,
		show: true,
		title: 'AtomOS (Launching...)',
		x: isDebug ? 100 : x,
		y: isDebug ? 100 : y,
		width: isDebug ? 1280 : width,
		height: isDebug ? 720 : width,
		backgroundColor: '#000000',
		webPreferences: {
			defaultFontSize: 16,
			nodeIntegrationInWorker: true,
			experimentalFeatures: true
		}
	});
	win.maximize();
	win.loadFile(path.join(__dirname, "front/desktop.html"));
	if(isDebug) win.toggleDevTools(); else win.setMenu(null);
	win.on("close", e => {
		if (!global.shutdown) e.preventDefault();
	});
	win.webContents.on('devtools-opened', () => {
		win.webContents.addWorkSpace(__dirname)
	})
	win.webContents.on('will-navigate', ev => {
		ev.preventDefault()
	});
	if(!isDebug) win.setSize(width, height);
});
