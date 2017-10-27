var exec = require('child_process').exec;
var util = require('util');
var linuxProvider = '/sbin/iwlist';

function parseIwlist(terms, str) {
    var out = str.replace(/^\s+/mg, '');
    out = out.split('\n');
    var cells = [];
    var line;
    var info = {};
    var fields = {
        'mac' : new RegExp('^' + terms.Cell + ' \\d+ - ' + terms.Address + ': (.*)'),
        'ssid' : new RegExp('^' + terms.ESSID + ':"(.*)"'),
        'channel': new RegExp('^' + terms.Channel + ':(.*)'),
        // 'protocol' : /^Protocol:(.*)/,
        // 'mode' : /^Mode:(.*)/,
        // 'frequency' : /^Frequency:(.*)/,
        // 'encryption_key' : /Encryption key:(.*)/,
        // 'bitrates' : /Bit Rates:(.*)/,
        // 'quality' : /Quality(?:=|\:)([^\s]+)/,
        'signal_level' : new RegExp(terms['Signal level'] + '(?:=|\\:)([-\\w]+)')
    };

    for (var i=0,l=out.length; i<l; i++) {
        line = out[i].trim();

        if (!line.length) {
            continue;
        }
        if (line.match(terms["Scan completed :"])) {
            continue;
        }
        if (line.match(terms["Interface doesn't support scanning."])) {
            continue;
        }

        if (line.match(fields.mac)) {
            cells.push(info);
            info = {};
        }

        for (var field in fields) {
            if (line.match(fields[field])) {
                info[field] = (fields[field].exec(line)[1]).trim();
            }
        }
    }
    cells.push(info);
    cells.shift();
    return cells;
}

function scan(terms, callback) {
    var new_env = util._extend(process.env, { LANG: "en" });
    exec(linuxProvider + ' scan', new_env, function (err, stdout, stderr) {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, parseIwlist(terms, stdout));
    });
}

exports.scan = scan;
exports.utility = linuxProvider;
