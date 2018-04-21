'use strict';

const electron = require('electron');
const path = require('path');
const jetpack = require('fs-jetpack');
const checkState = require('./checkState');
const saveState = require('./saveState');

const stateFile = path.join(electron.app.getPath('appData'), electron.app.getName(), 'windowStates.json');


module.exports = class WindowStateManager {
	constructor(name, options) {
		this._isInitialized = false;

		this._name = name;
		this._defaultWidth = options.defaultWidth;
		this._defaultHeight = options.defaultHeight;
	}

	get name() {
		return this._name;
	}

	get width() {
		this._checkState();
		return this._width;
	}

	get height() {
		this._checkState();
		return this._height;
	}

	get x() {
		this._checkState();
		return this._x;
	}

	get y() {
		this._checkState();
		return this._y;
	}

	get maximized() {
		this._checkState();
		return this._maximized;
	}

	get bounds() {
		this._checkState();
		return {
			width: this._width,
			height: this._height
		};
	}

	saveState(window) {
		return saveState.sync(this._name, window, stateFile, this._defaultWidth, this._defaultHeight);
	}

	_checkState() {
		if (!this._isInitialized) {
			var _this = this;
			let state = checkState.sync(this._name, stateFile, this._defaultWidth, this._defaultHeight);

			this._checkWindowPosition(state, function() {
				let primaryDisplayBounds = electron.screen.getPrimaryDisplay().bounds;

				state.width = _this._defaultWidth;
				state.height = _this._defaultHeight;
				state.x = (primaryDisplayBounds.width - _this._defaultWidth) / 2;
				state.y = (primaryDisplayBounds.height - _this._defaultHeight) / 2;
			});

			this._width = state.width;
			this._height = state.height;
			this._x = state.x;
			this._y = state.y;
			this._maximized = state.maximized;

			this._isInitialized = true;
		}
	}

	_checkWindowPosition(state, callback) {
		var allDisplays = electron.screen.getAllDisplays(),
			primaryDisplay = electron.screen.getPrimaryDisplay(),
			inBounds = false;

		//Check if window is in bounds of primary display
		if (state.x >= 0 && state.y >= 0 && state.x < primaryDisplay.bounds.width && state.y < primaryDisplay.bounds.height) {
			inBounds = true;
		} else {
			//Find all external displays
			var externalDisplays = allDisplays.find((display) => {
				return display.bounds.x !== 0 || display.bounds.y !== 0;
			});

			//Check if there are external displays present
			if (externalDisplays) {
				//Create an array if it is a single display
				if (typeof externalDisplays.length === 'undefined') {
					let singleExternal = externalDisplays;
					externalDisplays = [];
					externalDisplays.push(singleExternal);
				}

				//Iterate over each display
				for (let i = 0; i < externalDisplays.length; i++) {
					let display = externalDisplays[i];

					//Check if window is in bounds of this external display
					if (state.x >= display.bounds.x && state.y >= display.bounds.y && state.x < (display.bounds.x + display.bounds.width) && state.y < (display.bounds.y + display.bounds.height)) {
						inBounds = true;
					}
				}
			}
		}

		if (!inBounds)
			callback();
	}
};
