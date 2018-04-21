'use strict';

const jetpack = require('fs-jetpack');
const utils = require('../utils/utils');
const loadState = require('./loadState');

var sync = (name, window, stateFile, defaultWidth, defaultHeight) => {
	var existingStates = loadState.sync(stateFile);
	var entryIndex = utils.getKeyIndex(existingStates.states, name);

	// We don't want to save the dimensions and position of a fullscreen window
	if (!window.isFullScreen()) {
		var newState;

		if (!window.isMaximized()) {
			newState = {
				[name]: {
					dimensions: {
						width: window.getBounds().width,
						height: window.getBounds().height
					},
					positions: {
						x: window.getBounds().x,
						y: window.getBounds().y
					},
					windowState: {
						maximized: window.isMaximized()
					}
				}
			};
		} else {
			if (entryIndex === false) {
				newState = {
					[name]: {
						dimensions: {
							width: defaultWidth,
							height: defaultHeight
						},
						positions: {
							x: 'undefined',
							y: 'undefined'
						},
						windowState: {
							maximized: window.isMaximized()
						}
					}
				};
			} else {
				newState = existingStates.states[entryIndex];
				newState[name].windowState.maximized = window.isMaximized();
			}
		}

		if (entryIndex === false) {
			existingStates.states.push(newState);
		} else {
			existingStates.states[entryIndex] = newState;
		}

		try {
			jetpack.write(stateFile, existingStates);
			return true;
		} catch (error) {
			return false;
		}
	} else {
		return false;
	}
};

module.exports.sync = sync;
