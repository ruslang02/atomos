'use strict';

const path = require('path');
const os = require('os');
const jetpack = require('fs-jetpack');
const appRoot = require('app-root-path');

var getAppDataPath = () => {
	let appDataPath;

	switch (os.platform()) {
		case 'darwin':
			appDataPath = 'Library/Application Support/';
			break;

		case 'linux':
			appDataPath = '.config';
			break;

		case 'win32':
			appDataPath = 'AppData\\Roaming';
			break;
	}

	return path.join(os.homedir(), appDataPath);
};

var getManifestData = () => {
	let manifest = jetpack.read(path.join(appRoot.toString(), 'package.json'), 'json');

	return manifest;
};

var checkExistingKeys = (object, keys) => {
	let noKeyMissing = true;

	for (let val of keys) {
		if (typeof object[val] === 'undefined') noKeyMissing = false;
	}

	return noKeyMissing;
};

var getKeyIndex = (array, name) => {
	var found = false;

	for (var i = 0; i < array.length; i++) {
		if (Object.keys(array[i])[0] === name) {
			found = true;
			break;
		}
	}

	if (found) {
		return i;
	} else {
		return false;
	}
};

module.exports.getAppDataPath = getAppDataPath;
module.exports.getManifestData = getManifestData;
module.exports.checkExistingKeys = checkExistingKeys;
module.exports.getKeyIndex = getKeyIndex;
