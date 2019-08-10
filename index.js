const {
	BrowserWindow,
	app
} = require('electron');
const widevine = require('electron-widevinecdm-dev');
widevine.load(app);
const path = require("path");
let isDebug = !!(process.argv[2] && (process.argv[2].trim().toLowerCase() === "-d" || process.argv[1].includes("inspect-brk")));
app.commandLine.appendSwitch('--enable-features', 'OverlayScrollbar');
global.shutdown = {
	confirmed: false
};
global.isDebug = isDebug;
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
		fullscreen: false,
		fullscreenable: false,
		show: true,
		title: 'AtomOS (Launching...)',
		x: isDebug ? 100 : x,
		y: isDebug ? 100 : y,
		width: isDebug ? 1280 : width,
		height: isDebug ? 720 : width,
		backgroundColor: '#000000',
		webPreferences: {
			defaultFontSize: 14,
			nodeIntegrationInWorker: true,
			experimentalFeatures: true,
			nodeIntegration: true,
			webviewTag: true,
			sandbox: false,
			blinkFeatures: 'OverlayScrollbars'
		}
	});
	win.maximize();
	win.loadFile(path.join(__dirname, "front/desktop.html"));
	if (win.removeMenu) win.removeMenu(); else win.setMenu(null);
	if (isDebug) win.webContents.on('devtools-opened', () => {
		win.webContents.addWorkSpace(__dirname)
	});
	win.webContents.on('new-window', (e, u) => {
		e.preventDefault();
		win.webContents.send("new-window", u);
	});
	win.webContents.on('will-navigate', ev => {
		ev.preventDefault()
	});
	if(!isDebug) win.setSize(width, height);
});
