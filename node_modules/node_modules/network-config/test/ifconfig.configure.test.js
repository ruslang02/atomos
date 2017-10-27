'use strict';
var fixtures = require('./fixtures');
var path = require('path');
var fs = require('fs');
var t = require('chai').assert;
var INTERFACE_FILE = path.resolve(__dirname, './tmp/interfaces');

describe('ifconfig', function () {
  var ifconfigFactory;

  beforeEach(function () {
    ifconfigFactory = require('../src/ifconfig');
  });

  describe('.configure', function () {
    var ifconfig, os;
    beforeEach(function () {
      os = {
        error: [],
        stdout: [],
        stderr: [],
        cmd: [],
        exec: function (cmd, f) {
          this.cmd.push(cmd);
          f(this.error.shift(), this.stdout.shift(), this.stderr.shift());
        }
      };
      ifconfig = ifconfigFactory(os);
      ifconfig.configure.FILE = INTERFACE_FILE;
    });

    it('should rewrite the interface configuration', function (done) {
      fs.writeFileSync(INTERFACE_FILE, fixtures.interfaces_1, 'utf8');

      ifconfig.configure('eth0', {
        ip: '1.1.1.77',
        netmask: '1.1.1.1',
        broadcast: '1.1.1.255',
        gateway: '10.10.10.10'
      }, function (err) {
        t.strictEqual(err, null);
        t.strictEqual(
          fs.readFileSync(path.resolve(__dirname, './tmp/interfaces'), 'utf8'),
          fixtures.interfaces_1_out
        );
        t.deepEqual(os.cmd.shift(), 'service networking reload');
        done();
      });
    });

    it('should write the network file even if the interface as not present', function (done) {
      fs.writeFileSync(INTERFACE_FILE, fixtures.interfaces_2, 'utf8');

      ifconfig.configure('eth1', {
        ip: '1.1.1.77',
        netmask: '1.1.1.1',
        broadcast: '1.1.1.255',
        gateway: '10.10.10.10'
      }, function (err) {
        t.strictEqual(err, null);
        t.strictEqual(
          fs.readFileSync(path.resolve(__dirname, './tmp/interfaces'), 'utf8'),
          fixtures.interfaces_2_out
        );
        done();
      });
    });

    it('should write the network file even if the interface as not present', function (done) {
      fs.writeFileSync(INTERFACE_FILE, fixtures.interfaces_3, 'utf8');

      ifconfig.configure('eth1', {
        ip: '1.1.1.77',
        netmask: '1.1.1.1',
        broadcast: '1.1.1.255',
        gateway: '10.10.10.10'
      }, function (err) {
        t.strictEqual(err, null);
        t.strictEqual(
          fs.readFileSync(path.resolve(__dirname, './tmp/interfaces'), 'utf8'),
          fixtures.interfaces_3_out
        );
        done();
      });
    });
  });
});
