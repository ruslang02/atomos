## v0.3.2
**Changes**:

- Merged hkuclion pull request so that the app data path and the app name is retreived via electron's native functions rather than via the manifest file.
- Adjusted unit tests to work with this change

## v0.3.1
**Bugfixes**:

- Fixed a bug, where the application crashed when loading a currupt window states json file

## v0.3.0
**Features**:

- Added Support for multi monitor setups.
 - The application now checks if a previously saved window is in the viewport of a monitor. If it is not (e.g. monitor constellation has changed since last using your electron app) the window will be centered on the primary monitor.

## v0.2.2
**Bugfixes**:

- Fixed a bug, where the maximized state of a window was saved incorrectly

## v0.2.1
Initial release
