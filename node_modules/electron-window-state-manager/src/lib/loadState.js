'use strict';

const jetpack = require('fs-jetpack');

var sync = (stateFile) => {
	if (!jetpack.exists(stateFile)) {
		return {states: []};
	} else {
        try {
		    return jetpack.read(stateFile, 'json');
        } catch (e) {
            return {states: []};
        }
	}
};

module.exports.sync = sync;