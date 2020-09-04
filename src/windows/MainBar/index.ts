import { getWindowList } from 'wmctrljs';
import { createWindow } from '../../utilities/createWindow';

const win = createWindow('MainBar', {
  frame: false,
  transparent: true,
  webPreferences: {
    nodeIntegration: true
  },
  show: true,
  type: 'dock',
  alwaysOnTop: true
});
win.show();
setInterval(async () => {
  const windows = await getWindowList();
  win.webContents.send('x11.getWindows', windows);
}, 1000);