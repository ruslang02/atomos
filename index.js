const {
  BrowserWindow,
  app,
  session
} = require('electron');
const fs = require("fs");
const path = require("path");
global.isDebug = (process.argv[2] ? process.argv[2].trim().toLowerCase() == "-d" : false);
global.shutdown = {
  confirmed: false
};
let win;
//app.disableHardwareAcceleration()
app.on('ready', function() {
  /*const {
	 *		width,
	 *		height,
	 *		x,
	 *		y
} = require("electron").screen.getPrimaryDisplay().bounds;*/
  win = new BrowserWindow({
    //frame: false,
    //kiosk: true,
    //resizable: false,
    //movable: false,
    //minimizable: false,
    //maximizable: false,
    //closable: false,
    show: true,
    title: 'AtomOS (Launching...)',
    //type: "desktop",
    //x: x,
    //y: y,
    //width: width,
    //height: height,
    //skipTaskbar: true,
    backgroundColor: '#bbd8e8',
    webPreferences: {
      defaultFontSize: 16
    }
  });
  win.maximize();
  win.loadFile("front/desktop.html");
  win.toggleDevTools();
  global.desktopID = win.webContents.id;
  win.on("close", e => {
    if (!global.shutdown) e.preventDefault();
  });
  win.webContents.on('will-navigate', ev => {
    ev.preventDefault()
  });
  //win.setSize(width, height);
});
