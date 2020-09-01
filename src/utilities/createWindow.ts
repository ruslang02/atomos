import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import { pathToFileURL } from 'url';
import { join } from 'path';

export function createWindow(app: string, options?: BrowserWindowConstructorOptions): BrowserWindow {
  const window = new BrowserWindow(options);
  const url = pathToFileURL(join(__dirname, 'index.html'));
  window.loadURL(`${url.href}?app=${app}`);
  return window;
}