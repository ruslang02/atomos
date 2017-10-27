# atomOS Desktop Environment
Fully web-based X11 Desktop Environment on Linux, working in Electron.
Contains web-based applications with absolute Node.JS access.
There is also an operating system available based on this.

## Installation

Download this repository and unpack it to `/atomos`.

Firstly, you should have Node.JS and NPM installed:
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```
Then you need Electron to work:
```
sudo npm install -g electron --unsafe-perm=true --allow-root
```
And, finally, to run this monster:
```
electron /atomos
```
