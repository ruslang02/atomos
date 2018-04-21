'use strict';

const jetpack = require('fs-jetpack');
const utils = require('../utils/utils');

var setDefaultValues = (state, defaultWidth, defaultHeight) => {
	state.width = defaultWidth;
	state.height = defaultHeight;
	state.x = 'undefined';
	state.y = 'undefined';
	state.maximized = false;

	return state;
};

var checkSavedValues = (state, defaultWidth, defaultHeight) => {
	if ('dimensions' in state) {
		if (!('width' in state.dimensions)) {
			state.dimensions.width = defaultWidth;
		}

		if (!('height' in state.dimensions)) {
			state.dimensions.height = defaultHeight;
		}
	} else {
		state.dimensions = {};
		state.dimensions.width = defaultWidth;
		state.dimensions.height = defaultHeight;
	}

	if ('positions' in state) {
		if (!('x' in state.positions) || !('y' in state.positions)) {
			state.positions.x = 'undefined';
			state.positions.y = 'undefined';
		}
	} else {
		state.dimensions = {};
		state.positions.x = 'undefined';
		state.positions.y = 'undefined';
	}

	if ('windowState' in state) {
		if (!('maximized' in state.windowState)) {
			state.windowState.maximized = false;
		}
	} else {
		state.windowState = {};
		state.windowState.maximized = false;
	}

	return state;
};

var sync = (name, stateFile, defaultWidth, defaultHeight) => {
	var state = {};

	if(!jetpack.exists(stateFile)) {
		state = setDefaultValues(state, defaultWidth, defaultHeight);
	} else {
		try {
			var savedState = jetpack.read(stateFile, 'json');
			var singleState = savedState.states[utils.getKeyIndex(savedState.states, name)];

			if (typeof singleState !== 'undefined' && singleState !== null) {
				let savedName = Object.keys(singleState)[0];
				let secureState = checkSavedValues(singleState[savedName], defaultWidth, defaultHeight);

				state.width = secureState.dimensions.width;
				state.height = secureState.dimensions.height;
				state.x = secureState.positions.x;
				state.y = secureState.positions.y;
				state.maximized = secureState.windowState.maximized;
			} else {
				state = setDefaultValues(state, defaultWidth, defaultHeight);
			}
		} catch (e) {
			state = setDefaultValues(state, defaultWidth, defaultHeight);
		}
	}

	return state;
};

module.exports.sync = sync;
