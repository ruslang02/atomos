import { app } from 'electron';

app.disableHardwareAcceleration();
app.commandLine.appendSwitch('enable-transparent-visuals');

app.on('ready', () => {
  setTimeout(() => {
    const windows = [
      require('./windows/MainBar')
    ];
    console.log(`[atomos] ${windows.length} windows opened.`);
  }, 1000);
})