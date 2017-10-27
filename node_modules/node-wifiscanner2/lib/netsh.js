var exec = require('child_process').exec;
var systemRoot = process.env.SystemRoot || 'C:\\Windows';
var winProvider = systemRoot + '\\System32\\netsh.exe';

function parseNetsh(terms, str) {
    var lines = str.split('\n');
    var wifis = [];
    var info = {};
    var line;
    var ssid;
    var fields = {
        'mac' : new RegExp('^' + terms.BSSID + ' \\d+\\s*:\\s*(.+)'),
        'ssid' : new RegExp('^' + terms.SSID + ' \\d+\\s*:\\s*(.*)'),
        'signal_level' : new RegExp('^' + terms.Signal + '\\s*:\\s*(\\d+)'),
        'channel' : new RegExp('^' + terms.Channel + '\\s*:\\s*(\\d+)')
    };

    for (var i=0, l=lines.length; i<l; i++) {
        line = lines[i].trim();

        if (!line.length) {
            continue;
        }

        else if (line.match(fields.ssid)) {
            if (info.ssid) {
                wifis.push(info);
            }
            info = {};
            info.ssid = fields.ssid.exec(line)[1];
        }

        else if (line.match(fields.mac)) {
            info.mac = fields.mac.exec(line)[1];
        }

        else if (line.match(fields.signal_level)) {
            info.signal_level = fields.signal_level.exec(line)[1];

            // According to http://stackoverflow.com/q/15797920
            // Microsoft's signal quality is 0 to 100,
            //   representing RSSI values between -100 and -50 dbm.
            info.signal_level = (info.signal_level / 2) - 100;

        }
        else if (line.match(fields.channel)) {
            info.channel = fields.channel.exec(line)[1];
        }
    }

    if (info.ssid) {
        wifis.push(info);
    }
    return wifis;
}

function scan(terms, callback) {
    exec(winProvider + ' wlan show networks mode=Bssid', function(err, stdout, stderr){
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, parseNetsh(terms, stdout));
    });
}

exports.scan = scan;
exports.utility = winProvider;
exports.parse = parseNetsh;
