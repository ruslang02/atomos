# Node.js: fs-filesystem

`fs-filesystem` allows you to read the state of the filesystem of the host on which
it is run. It returns information about both the devices and the partitions (volumes)
of the system.

[![npm version](https://badge.fury.io/js/fs-filesystem.svg)](https://badge.fury.io/js/fs-filesystem)
[![Travis Build Status](https://travis-ci.org/qzdio/node-fs-filesystem.svg?branch=master)](https://travis-ci.org/we-human-space/misstep)
[![Windows Build Status](https://img.shields.io/appveyor/ci/philippefutureboy/node-fs-filesystem/master.svg?label=windows%20build)](https://ci.appveyor.com/project/philippefutureboy/node-fs-filesystem/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/qzdio/node-fs-filesystem/badge.svg?branch=master)](https://coveralls.io/github/qzdio/node-fs-filesystem?branch=master)
[![Dependencies Status](https://david-dm.org/qzdio/node-fs-filesystem.svg)](https://david-dm.org/)

## Why?

Because sometimes your desktop applications need information about the filesystem
(~~\*cough\* like on Windows \*cough\*~~)

## Installation

`npm install --save fs-filesystem`

## Native Dependencies

Bear in mind that this utility *shells out* to the machine, and thus requires the
host to be able to run such commands. If any of the commands listed below are
missing from your OS, the utility **will** throw a `Command Failed: ...` error. This
shouldn't be a problem however since these are standard, core commands generally
available on their respective distros (well, except maybe minimal Linux distros
like Arch and Alpine), so you should be fine :)

* **Linux:** `df`, `fdisk`, `lsblk`
* **MacOS:** `diskutil`
* **Windows:** `wmic`


## API

### Async

```js
import filesystem from 'fs-filesystem';

const devices = filesystem(filter, callback);
```

#### filesystem( [ filter , ], callback )

`// filesystem :: string|RegExp|function|undefined|null, function -> Object`

* `filter` {string|RegExp|function|undefined|null}: A filter for which devices
should be returned. If the filter is a string or RegExp, `fs-filesystem` will match
the device keys against it. If the filter is left `undefined` or `null`, `fs-filesystem`
will return all of the devices. If the filter is a function, it will receive
**(device, key, devices)** as arguments.
  * `device` {Object}: The device to filter
  * `key` {string}: The key of the device (also known as `id`)
  * `devices` {Object}: The hash of all devices
* `callback` {function}: Function following the common Node.js callback style,
i.e. taking a `(err, value) => ...`

If only a function is provided to `filesystem`, the utility will assume that it is
the `callback` function.


**Wanna get rid of the callback?** Try [`util.promisify`](https://nodejs.org/api/util.html#util_util_promisify_original) for Node >=8, [`bluebird`](https://www.npmjs.com/package/bluebird)'s `Promise.promisify` or [`universalify`](https://www.npmjs.com/package/universalify) ;)

### Sync

```js
import filesystem from 'fs-filesystem';

const devices = filesystem.sync(filter);
```

#### filesystem.sync( [ filter ] )

*Remember, it's usually discouraged to use sync functions except when doing early setup!*

`// filesystem :: string|RegExp|function|undefined|null -> Object`

* `filter` {string|RegExp|function|undefined|null}: A filter for which devices
should be returned. If the filter is a string or RegExp, `fs-filesystem` will match
the device keys against it. If the filter is left `undefined` or `null`, `fs-filesystem`
will return all of the devices. If the filter is a function, it will receive
**(device, key, devices)** as arguments.
  * `device` {Object}: The device to filter
  * `key` {string}: The key of the device (also known as `id`)
  * `devices` {Object}: The hash of all devices

## What Data Can I Expect?

`fs-filesystem` will return a hash object of all the devices available on the computer,
whether networked, internal or external/removable. Their respective volumes are
available as an array of volumes under the `device.volumes` property.
Linux and MacOS users will be pleased
with the amount of detail available - **block size**, **partition type**, **filesystem**, **mounted**, **mount point**, **blocks**, and more is available. Windows users fall
on the short straw however with a much less rich output. This is because (a) the
main maintainer of `fs-filesystem` has very little knowledge of DOS/PowerShell utilities
and (b) there seems to be very little filesystem utilities available on Windows
that do not require elevated privileges. So if you are a Windows DemiGod, feel free
to enlighten us :rocket:

### Sample Outputs

#### MacOS

```json
{
  "disk1": {
    "id": "disk1",
    "node": "/dev/disk1",
    "whole": true,
    "parent": "disk1",
    "name": null,
    "size": 2000398934016,
    "description": "APPLE HDD ST2000DM001",
    "protocol": "SATA",
    "blockSize": 512,
    "removable": true,
    "mounted": false,
    "volumes": [
      {
        "id": "disk1s1",
        "node": "/dev/disk1s1",
        "whole": false,
        "parent": "disk1",
        "name": "EFI",
        "description": null,
        "blockSize": null,
        "blocks": null,
        "readOnly": null,
        "mounted": true,
        "mountPoint": null,
        "partitionType": "EFI",
        "fs": "FAT32",
        "space": {
          "total": 0,
          "available": 0,
          "used": 0
        }
      },
      {
        "id": "disk1s2",
        "node": "/dev/disk1s2",
        "whole": false,
        "parent": "disk1",
        "name": "Recovery HD",
        "description": null,
        "blockSize": null,
        "blocks": null,
        "readOnly": null,
        "mounted": true,
        "mountPoint": null,
        "partitionType": "Apple_Boot",
        "fs": "HFS+",
        "space": {
          "total": 0,
          "available": 0,
          "used": 0
        }
      }
    ]
  }
}
```

#### Linux

```json
{
  "sda": {
    "id": "sda",
    "node": "/dev/sda",
    "whole": true,
    "parent": "sda",
    "name": "sda",
    "size": 250059350016,
    "description": null,
    "protocol": null,
    "blockSize": 512,
    "readOnly": false,
    "removable": false,
    "blocks": 488397168,
    "volumes": [
      {
        "id": "sda2",
        "node": "/dev/sda2",
        "whole": false,
        "parent": "sda",
        "name": "sda2",
        "description": "Linux filesystem",
        "blockSize": 512,
        "blocks": 455499776,
        "readOnly": false,
        "mounted": true,
        "mountPoint": "/",
        "partitionType": null,
        "fs": "ext4",
        "space": {
          "total": 229421658112,
          "available": 21887852544,
          "used": 195856236544
        },
        "removable": false
      },
      {
        "id": "sda1",
        "node": "/dev/sda1",
        "whole": false,
        "parent": "sda",
        "name": "sda1",
        "description": "BIOS boot",
        "blockSize": 512,
        "blocks": 2048,
        "readOnly": false,
        "mounted": false,
        "mountPoint": null,
        "partitionType": null,
        "fs": null,
        "space": {
          "total": null,
          "available": null,
          "used": null
        },
        "removable": false
      }
    ]
  }
}
```

#### Windows

```json
{
  "C:": {
    "id": "C:",
    "node": "C:",
    "whole": true,
    "parent": "C:",
    "name": "C:",
    "size": 22288527360,
    "description": "Local Fixed Disk",
    "protocol": null,
    "blockSize": null,
    "readOnly": null,
    "removable": null,
    "volumes": [
      {
        "id": "C:",
        "node": "C:",
        "whole": false,
        "parent": "C:",
        "name": null,
        "description": null,
        "blockSize": null,
        "blocks": null,
        "readOnly": null,
        "mounted": true,
        "mountPoint": "C:",
        "partitionType": null,
        "fs": "NTFS",
        "space": {
          "total": 22288527360,
          "available": 4928057344,
          "used": 17360470016
        }
      }
    ]
  }
}
```

### Data Types

You can find a list of the types of each field below. Keep in mind that **all
fields besides `whole` are null by default**, and that integers are all in **bytes**.

#### Devices

```
id: string,
node: string,
whole: boolean,
parent: string,
name: string,
size: integer,
description: string,
protocol: string,
blockSize: integer,
readOnly: boolean,
removable: boolean
```

#### Volumes

```
id: string,
node: string,
whole: boolean,
parent: string,
name: string,
description: string,
blockSize: number,
blocks: number,
readOnly: boolean,
mounted: boolean,
mountPoint: boolean,
partitionType: string,
fs: string,
space: {
  total: number,
  available: number,
  used: number
}
```
