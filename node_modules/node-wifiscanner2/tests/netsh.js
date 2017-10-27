'use strict';

var fs = require('fs');
var assert = require('assert');

var netsh = require('../lib/netsh');

describe('Netsh', function() {
	var locales = ['en', 'de'];
	locales.forEach(function (locale) {
		it('parses ' + locale + ' locale output', function() {
			var terms = require('../locales/' + locale + '.json').netsh;
			var aps = netsh.parse(terms, fs.readFileSync('./tests/fixtures/netsh/' + locale + '.txt', { encoding: 'utf8' }));
			assert.ok(aps);
			assert.equal(aps.length, 5);
			var ap = aps[0];
			assert.equal(ap.mac, '00:aa:f2:77:a5:53');
			assert.equal(ap.ssid, 'AP-Test1');
			assert.equal(ap.signal_level, -77);
			assert.strictEqual(ap.channel, '6');
		});
	});
});
