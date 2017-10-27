var fs = require('fs');
var airport = require('./airport');
var iwlist = require('./iwlist');
var nmcli = require('./nmcli');
var netsh = require('./netsh');
var osLocale = require('os-locale');
var path = require('path');

var terms;

function setLocale(locale) {
    var shortLocale = locale.split('_')[0];
    var termsPath = path.join(__dirname, '../locales/' + shortLocale + '.json');
    if (!fs.existsSync(termsPath)) {
        shortLocale = 'en';
        termsPath = path.join(__dirname, '../locales/' + shortLocale + '.json');
    }
    terms = require(termsPath);
}

function scan(callback) {
    fs.exists(airport.utility, function (exists) {
        if (exists) {
            airport.scan(terms.airport, callback);
            return;
        }

        fs.exists(nmcli.utility, function (exists) {
            if(exists) {
                nmcli.scan(terms.nmcli, callback);
                return;
            }

            fs.exists(iwlist.utility, function (exists) {
                if (exists) {
                    iwlist.scan(terms.iwlist, callback);
                    return;
                }

                fs.exists(netsh.utility, function (exists) {
                    if (exists) {
                        netsh.scan(terms.netsh, callback);
                        return;
                    }

                    callback("No scanning utility found", null);
                });
            });
        });
    });
}

var fullLocale = osLocale.sync({ spawn: true }) || 'en_US';
setLocale(fullLocale);

exports.scan = scan;
exports.setLocale = setLocale;
