# electron-window-state-manager [![Build Status](https://travis-ci.org/Sethorax/electron-window-state-manager.svg?branch=master)](https://travis-ci.org/Sethorax/electron-window-state-manager) [![Build status](https://ci.appveyor.com/api/projects/status/eude9rmxi0oi1pe8/branch/master?svg=true)](https://ci.appveyor.com/project/Sethorax/electron-window-state-manager/branch/master)

The Electron Window State Manager is a small package that gives you the ability to save the state of a `BrowserWindow` and retreive the saved data of the state later.

# Installation
```
npm install electron-window-state-manager
```

# What does it do?

The Window State Manager can store the dimensions (width and height), the position (x and y coordinates) and the current state (maximized or not) of a `BrowserWindow` and save it to a json file.  
The saved state can than later be retreived when using the same window name at the instance creation.
The saved state's data will be automatically retreived when creating a `WindowStateManager`instance with an already saved window name.

## Usage

To be able to use this package in your project you need to require it:
```javascript
const WindowStateManager = require('electron-window-state-manager');
```

#### Class: WindowStateManager

It creates a new `WindowStateManager` with a `name` and default properties as set by the `options`.

### `new WindowStateManager(name, [options])`

* `name` String - Name of the window.
* `options` Object
  * `defaultWidth` Integer - Default window width in pixels.
  * `defaultHeight` Integer - Default window height in pixels.

The value of `name` is used to reference a saved state in the json file. If you create a new instance of `WindowStateManager` with a name which was already saved previously, the data of this state will be loaded.

If a state with the value of `name` cannot be found in the json file or a saved state has wrong data, the default values assigned in the `options` Object will be used.

### Methods

The `WindowStateManager` class has the following methods:

#### `WindowStateManager.saveState(window)`

* `window` [BrowserWindow](https://github.com/atom/electron/blob/master/docs/api/browser-window.md)

Saves the state of the passed `BrowserWindow` and returns `true`or `false` depending on whether the state was successfully saved to the json file.

In case the state of a window in fullscreen is saved, the saving process will not succeed because we don't want to save the dimensions of a fullscreen window.

The method returns `false` and will not save anything if a window in fullscreen is saved, because we don't want to save the dimensions of a fullscreen window.

If a maximized window is saved, the dimensions and position of the window will not be stored, only the previously saved values or the default values will be saved.
However the maximized state of the window will be saved, so that you can open the window in a maximized state again later if the window was closed in a maximized state.


## Example
```javascript
const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;
const WindowStateManager = require('electron-window-state-manager');

const mainWindow;

// Create a new instance of the WindowStateManager
// and pass it the name and the default properties
const mainWindowState = new WindowStateManager('mainWindow', {
    defaultWidth: 1024,
    defaultHeight: 768
});

app.on('ready', () => {
    // When creating a new BrowserWindow
    // you can assign the properties of the mainWindowState.
    // If a window with the name 'main' was saved before,
    // the saved values will now be assigned to the BrowserWindow again
    mainWindow = new BrowserWindow({
        width: mainWindowState.width,
        height: mainWindowState.height,
        x: mainWindowState.x,
        y: mainWindowState.y,
    });

    // You can check if the window was closed in a maximized saveState
    // If so you can maximize the BrowserWindow again
    if (mainWindowState.maximized) {
        mainWindow.maximize();
    }

    // Don't forget to save the current state
    // of the Browser window when it's about to be closed
    mainWindow.on('close', () => {
        mainWindowState.saveState(mainWindow);
    });
});
```
