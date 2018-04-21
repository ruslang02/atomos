var path = require('path');

var TMP_BASE = path.join(__dirname, '..', '.tmp');

var ECHO_SCRIPT = path.join(__dirname, '..', 'helpers', 'echo_input.js');

module.exports.echoScript = ECHO_SCRIPT;

function getTempDirectory() {
    return path.join(TMP_BASE, String(Date.now()));
}
module.exports.getTempDirectory = getTempDirectory;

/**
 * Prepare a directory with a list of files.
 *
 * @param {String} dirPath
 * @param {Array} fileList
 */
function prepareFS(dirPath, fileList) {

}
module.exports.prepareFS = prepareFS;

