var exec = require('child_process').exec;
var util = require('util');
var linuxProvider = '/usr/bin/nmcli';

var fields = {
    'SSID': 'ssid',
    'BSSID': 'mac',
    'CHAN': 'channel'
};

function parseNmcli(terms, str) {
    var out = str.split('\n');
    var cells = [];
    var info = {};

    var linesPerCell = Object.keys(fields).length;
    for (var i=0, l=out.length; i<l; i++) {
        var line = out[i].trim();
        if (!line.length) {
            continue;
        }

        if(i % linesPerCell == 0) {
            cells.push(info);
            info = {};
        }
        var components = line.split(":");
        var fieldName = components.shift();
        var fieldValue = components.join(":");

        var cellField = fields[terms[fieldName]];

        info[cellField] = fieldValue.trim();
    }
    cells.push(info);
    cells.shift();
    return cells;
}

function scan(terms, callback) {
    exec(linuxProvider + ' device wifi rescan', function (err, stdout, stderr) {
        var fieldNames = Object.keys(fields).join(",");
        exec(linuxProvider + ' --terse --mode multiline --fields ' + fieldNames + ' device wifi', function (err, stdout, stderr) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, parseNmcli(terms, stdout));
        });
    });
}

exports.scan = scan;
exports.utility = linuxProvider;
exports.parse = parseNmcli;
