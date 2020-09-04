import { app } from 'electron';

app.whenReady().then(() => {
  const windows = [
    require('./windows/MainBar')
  ];
  console.log(`[atomos] ${windows.length} windows opened.`);
})