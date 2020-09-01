import { app, BrowserWindow } from 'electron';

app.whenReady().then(() => {
  const windows = [
    require('./windows/MainBar')
  ];
})