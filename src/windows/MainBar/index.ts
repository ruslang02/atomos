import { createWindow } from '../../utilities/createWindow';
createWindow('MainBar', {
  frame: false,
  transparent: true,
  webPreferences: {
    nodeIntegration: true
  }
});