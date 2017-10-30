# atomOS Desktop Environment

![alt text](http://pp.userapi.com/c841636/v841636258/2ec95/7cDypn8Pu4I.jpg)

Latest version: 0.4-dev33. 0.3.3 is available only inside the [atomOS itself](https://drive.google.com/drive/folders/0B_VomIpGvKyvU0RPUnVxM2pOeDg).

Fully web-based X11 Desktop Environment on Linux, working in Electron.
Contains web-based applications with absolute Node.JS access.
There is also an operating system available based on this.

## Installation

Download this repository and unpack it to `/atomos` or run this command:
```
sudo git clone https://github.com/ruslang02/atomos.git /
```

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

## Changelog

Changelog is available [here](https://github.com/ruslang02/atomos/blob/master/home/Documents/changelog.md).

## Hacking
You can edit your desktop envionment in real-time, adding features and modifying the look and feel.
