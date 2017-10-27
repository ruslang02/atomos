var exec = require('child_process').exec;
var macProvider = '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport';

function parseAirport(terms, str) {
    var lines = str.split('\n');
    var colSsid = 0;
    var colMac = lines[0].indexOf(terms.BSSID);
    var colRssi = lines[0].indexOf(terms.RSSI);
    var colChannel = lines[0].indexOf(terms.CHANNEL);
    var colHt = lines[0].indexOf(terms.HT);
    var colSec = lines[0].indexOf(terms.SECURITY);
    //var colCC = lines[0].indexOf(terms.CC);

    var wifis = [];
    for (var i=1,l=lines.length; i<l; i++) {
        wifis.push({
            'mac' : lines[i].substr(colMac, colRssi - colMac).trim(),
            'ssid' : lines[i].substr(0, colMac).trim(),
            'channel' : lines[i].substr(colChannel, colHt - colChannel).trim(),
            'signal_level' : lines[i].substr(colRssi, colChannel - colRssi).trim(),
            'security' : lines[i].substr(colSec).trim()
        });
    }
    wifis.pop();
    return wifis;
}

function scan(terms, callback) {
    exec(macProvider + ' -s', function(err, stdout, stderr){
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, parseAirport(terms, stdout));
    });
}

exports.scan = scan;
exports.utility = macProvider;
exports.parse = parseAirport;
