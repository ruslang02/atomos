const {
  BrowserWindow,
  app,
  ipcMain
} = require('electron');

global.windowArgs = [];
global.windowIcons = [];

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
  } = require('electron').screen.getPrimaryDisplay().workAreaSize
  if (process.argv[2] !== "--test") {
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
      width: width + 2,
      height: height + 2,
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
  } else {
    win = new BrowserWindow({
      x: 100,
      y: 240,
      width: 1024,
      frame: false,
      height: 600,
      webPreferences: {
        webSecurity: false,
        allowRunningInsecureContent: true
      },
      backgroundColor: '#bbd8e8'
    })
    win.loadURL("file:///atomos/sys/init/index.html?debug")
  }
  win.on('close', function(e) {
    win = null
  })
  win.show();
  var bounds = win.getBounds();
  taskbar = new BrowserWindow({
    x: bounds.x,
    y: bounds.y + bounds.height - 47,
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
    y: bounds.y + bounds.height - 57 - 252,
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
    y: bounds.y + bounds.height - 407,
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
});
