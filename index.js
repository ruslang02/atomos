const {
  BrowserWindow,
  app,
  ipcMain
} = require('electron');

/* System Components IDs
 * 1 - Desktop
 * 2 - Taskbar
 * 3 - Clock Menu
 * 4 - Internet Menu
 * 5 - Start Menu
 * 6 - Notifications
*/

global.windowArgs = [];
global.windowIcons = [];
global.clipboards = {
  file: []
};

ipcMain.on("setArguments", function(event, args) {
  global.windowArgs[args.wid] = args.arguments || {};
})
ipcMain.on("getArguments", function(event, wid) {
  event.returnValue = global.windowArgs[wid] || {};
})
const path = require('path')
let win
let taskbar
let startMenu
let internetMenu;
let clockMenu;
let notification;
ipcMain.on("toggleStart", function() {
  if (startMenu.isVisible()) startMenu.hide();
  else startMenu.show();
})
ipcMain.on("toggleNet", function() {
  if (internetMenu.isVisible()) internetMenu.hide();
  else internetMenu.show();
})
ipcMain.on("toggleClock", function() {
  if (clockMenu.isVisible()) clockMenu.hide();
  else clockMenu.show();
})
ipcMain.on("icon-change", function(event, args) {
  global.windowIcons[args.wid] = args.icon;
})
ipcMain.on("icon-get", function(event, wid) {
  event.returnValue = global.windowIcons[wid] || "/atomos/icons/Application.png";
})

app.on('ready', function(event) {
  const {
    width,
    height
  } = require('electron').screen.getPrimaryDisplay().bounds
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
    webPreferences: {
      webSecurity: false,
      allowRunningInsecureContent: true
    },
    backgroundColor: '#bbd8e8'
  })
  win.loadURL("file:///atomos/sys/init/index.html")
  win.onbeforeunload = function() {
    return false;
  };
  win.on('close', function(e) {
    win = null
  })
  win.show();
  win.setSize(width, height)
  var bounds = win.getBounds();
  taskbar = new BrowserWindow({
    x: 0,
    y: bounds.height - 46,
    width: win.getContentSize()[0],
    height: 47,
    frame: false,
    closable: false,
    minimizable: false,
    maximizable: false,
    resizable: false,
    movable: false,
    alwaysOnTop: true,
    type: "dock"
  })
  taskbar.loadURL("file:///atomos/sys/taskbar/index.html");
  taskbar.show();

  clockMenu = new BrowserWindow({
    x: bounds.x + bounds.width - 10 - 350,
    y: bounds.y + bounds.height - 37 - 252,
    width: 350,
    height: 252,
    frame: false,
    closable: false,
    minimizable: false,
    maximizable: false,
    alwaysOnTop: true,
    resizable: false,
    movable: false,
    show: false,
    type: "dock"
  })

  clockMenu.loadURL("file:///atomos/sys/clockMenu/index.html")

  internetMenu = new BrowserWindow({
    x: bounds.x + bounds.width - 10 - 350,
    y: bounds.y + bounds.height - 387,
    width: 350,
    height: 350,
    frame: false,
    closable: false,
    minimizable: false,
    maximizable: false,
    alwaysOnTop: true,
    resizable: false,
    movable: false,
    show: false,
    type: "dock"
  })

  internetMenu.loadURL("file:///atomos/sys/internetMenu/index.html")

  startMenu = new BrowserWindow({
    x: bounds.x + 10,
    y: bounds.y + bounds.height - 57 - 315,
    width: 350,
    height: 315,
    frame: false,
    closable: false,
    minimizable: false,
    maximizable: false,
    alwaysOnTop: true,
    resizable: false,
    movable: false,
    show: false,
    type: "dock"
  })
  startMenu.loadURL("file:///atomos/sys/startMenu/index.html")

  notification = new BrowserWindow({
    x: bounds.width - 10 - 350,
    y: bounds.height - 37 - 150,
    width: 350,
    height: 150,
    frame: false,
    closable: false,
    minimizable: false,
    maximizable: false,
    alwaysOnTop: true,
    resizable: false,
    movable: false,
    show: false,
    type: "notification"
  })
  notification.loadURL("file:///atomos/sys/notification/index.html")
  if (process.argv[2] == "--test") {
    //startMenu.toggleDevTools();
    //internetMenu.toggleDevTools();
    //clockMenu.toggleDevTools();
    taskbar.toggleDevTools();
    win.toggleDevTools();
    //notification.toggleDevTools();
  }
});
