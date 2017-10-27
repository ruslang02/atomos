'use strict';

var fs = require('fs');
var assert = require('assert');

var nmcli = require('../lib/nmcli');
var terms = require('../locales/en.json').nmcli;

describe('Nmcli', function() {
	it('parses output', function() {
		var aps = nmcli.parse(terms, fs.readFileSync('./tests/fixtures/nmcli/output.txt', { encoding: 'utf8' }));
		assert.ok(aps);
		assert.equal(aps.length, 5);
		var ap = aps[0];
		assert.equal(ap.mac, '68:7F:74:00:00:00');
		assert.equal(ap.ssid, 'AP-Test1');
		assert.strictEqual(ap.channel, '36');
	});
});
