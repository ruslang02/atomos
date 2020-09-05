import { getWindowList } from 'wmctrljs';
import { createWindow } from '../../utilities/createWindow';
import { screen } from 'electron';
const { x, y } = screen.getPrimaryDisplay().bounds;
const { width, height } = screen.getPrimaryDisplay().size;
setTimeout(() => {
  const win = createWindow('MainBar', {
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true
    },
    type: 'dock',
    alwaysOnTop: true
  });
  win.setBounds({x, y: height - 50, width, height: 50});
  win.show();
  setInterval(async () => {
    const windows = await getWindowList();
    win.webContents.send('x11.getWindows', windows);
  }, 1000);
}, 1);