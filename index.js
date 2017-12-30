const {
  BrowserWindow,
  app,
  ipcMain
} = require('electron');
/* System Components IDs
 * 1 - Desktop
 * 2 - Taskbar
 * 3 - Notifications
*/
global.windowArgs = [];
global.windowIcons = [];
global.clipboards = {
  file: []
};
app.commandLine.appendSwitch("disable-web-security");
require("child_process").exec("xfwm4");
ipcMain.on("setArguments", function(event, args) {
  global.windowArgs[args.wid] = args.arguments || {};
});
ipcMain.on("getArguments", function(event, wid) {
  event.returnValue = global.windowArgs[wid] || {};
});
ipcMain.on("pipe", function(event, args) {
  BrowserWindow.fromId(args.window).webContents.send(args.options);
});
let win;
let taskbar;
let notification;
ipcMain.on("icon-change", function(event, args) {
  global.windowIcons[args.wid] = args.icon;
});
ipcMain.on("icon-get", function(event, wid) {
  event.returnValue = global.windowIcons[wid] || (__dirname + "/icons/Application.png");
});

app.on('ready', function() {
  const {
    width,
    height
  } = require('electron').screen.getPrimaryDisplay().bounds;
  win = new BrowserWindow({
    frame: false,
    resizable: false,
    movable: false,
    minimizable: false,
    maximizable: false,
    closable: false,
    type: "desktop",
    x: 0,
    y: 0,
    width: width,
    height: height,
    fullscreenable: false,
    backgroundColor: '#bbd8e8',
    webPreferences: {
      nativeWindowOpen: true
    }
  });
  win.loadURL("file://" + __dirname + "/apps/aos-cabinet/index.html");
  win.on("beforeunload", function() {
    return false;
  });
  win.on('close', function() {
    win = null
  });
  win.show();
  win.setSize(width, height);
  taskbar = new BrowserWindow({
    x: 0,
    y: height - 46,
    width: width,
    height: 47,
    frame: false,
    closable: false,
    minimizable: false,
    maximizable: false,
    resizable: false,
    movable: false,
    fullscreenable: false,
    alwaysOnTop: true,
    type: "dock"
  });
	taskbar.webContents.on('did-finish-load', function() {
		const fs = require('fs-extra');
		console.log("Starting Autostart...");
		fs.readJson(app.getPath("appData") + "/autostart.json")
				.then(function(autostart) {
					autostart.forEach(function(item) {
						console.log(item);
						let service = new BrowserWindow({
							fullscreeenable: false,
							show: false,
							width: 0,
							height: 0,
							x: height + 10,
							y: width + 10,
							resizable: false,
							frame: false
						});
						service.setMenu(null);
						global.windowArgs[service.id] = {
							autostart: true
						};
						Object.assign(global.windowArgs[service.id], item.args);
						service.loadURL("file:///" + app.getAppPath() + "/apps/" + item.app + "/index.html");
					})
				})
	})
  taskbar.loadURL("file://" + __dirname + "/sys/taskbar/index.html");
  taskbar.show();

  notification = new BrowserWindow({
    x: width - 10 - 350,
    y: height - 37 - 150,
    width: 450,
    height: 450,
    frame: false,
    closable: false,
    minimizable: false,
    maximizable: false,
    alwaysOnTop: true,
    resizable: false,
    fullscreenable: false,
    movable: false,
    show: false,
    type: "notification"
  });
  notification.loadURL("file://" + __dirname + "/sys/notification/index.html");
  if (process.argv.indexOf("--test") !== -1) {
    taskbar.toggleDevTools();
    notification.toggleDevTools();
  }
});
