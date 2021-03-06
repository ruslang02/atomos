# AtomOS Desktop Environment

![alt text](https://raw.githubusercontent.com/ruslang02/atomos/master/PREVIEW.png)
**Tested on Electron 9.0. Previous versions of Electron are not guaranteed to work with recent builds.**

Fully JS-based X11 Desktop Environment on Linux, working in Electron.
Contains web-based applications with full Node.JS and Electron access. All latest JS technologies are used.
There is also an operating system available based on this.

## Installation (for Linux)

Clone:
```
$ git clone https://github.com/ruslang02/atomos.git
```

Firstly, you should have Node.JS and NPM installed (instructions for Ubuntu-based systems):
```
# apt install -y nodejs npm
```
Install the libraries and launch:
```
$ cd atomos
atomos/$ npm install
atomos/$ npm start
```

## Extras
lightdm-webkit theme: https://github.com/ruslang02/atomos-lightdm-webkit-theme

## Changelog
Changelog is available [here](https://github.com/ruslang02/atomos/blob/master/CHANGELOG.md).

## Hacking
You can open Developer Tools in debug menu or by right-clicking Menu button.
All apps and elements are being generated with VanillaJS.
