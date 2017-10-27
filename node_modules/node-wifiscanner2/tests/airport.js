'use strict';

var fs = require('fs');
var assert = require('assert');

var airport = require('../lib/airport');
var terms = require('../locales/en.json').airport;

describe('Airport', function() {
	it('parses channel information', function() {
		var aps = airport.parse(terms, fs.readFileSync('./tests/fixtures/airport/basic.txt', { encoding: 'utf8' }));
		assert.ok(aps);
		assert.equal(aps.length, 1);
		assert.deepEqual(aps[0].channel, '1');
	});

	it('handles APs with multiple channels', function() {
		var aps = airport.parse(terms, fs.readFileSync('./tests/fixtures/airport/multi-channel.txt', { encoding: 'utf8' }));
		assert.ok(aps);
		assert.equal(aps.length, 1);
		assert.deepEqual(aps[0].channel, '157,+1');
	});
});