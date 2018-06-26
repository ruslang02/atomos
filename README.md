# atomOS Desktop Environment
![alt text](https://raw.githubusercontent.com/ruslang02/atomos/master/PREVIEW.png)
**Tested on Electron 2.0.2, 3.x is not guaranteed to work**

Latest version: 0.6.1 (build 156). [Download .iso](https://github.com/ruslang02/atomos/releases).

Fully web-based X11 Desktop Environment on Linux, working in Electron.
Contains web-based applications with absolute Node.JS access.
There is also an operating system available based on this.

## Installation (for Linux)

Download this repository and unpack it to `/atomos` or run this command:
```
git clone https://github.com/ruslang02/atomos.git
```

Firstly, you should have Node.JS and NPM installed:
```
sudo apt-get install -y nodejs npm
```
Then you need Electron to work:
```
npm install -g electron
```
Install the libraries:
```
npm update
```
And, finally, to run this monster:
```
npm start
```

## Extras
System itself uses XfWM4 as a default window manager (Mutter is also possible).

lightdm-webkit theme: https://github.com/ruslang02/atomos-lightdm-webkit-theme

## Changelog

Changelog is available [here](https://github.com/ruslang02/atomos/blob/master/CHANGELOG.md).

## Hacking
You can edit your desktop envionment in real-time, adding features and modifying the look and feel.
