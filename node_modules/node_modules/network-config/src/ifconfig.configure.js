'use strict';
var _ = require('lodash');
var assert = require('assert');
var fs = require('fs');

module.exports = function (cp) {
  /**
   * Configure a network interface
   * @param  {string} name        interface name
   * @param  {object} description interface definition
   * @param  {function} f(err)
   */
  function configure(name, description, f) {
    assert(_.isString(name));
    assert(_.isPlainObject(description));

    fs.readFile(configure.FILE, {
      encoding: 'utf8'
    }, function (err, content) {
      if (err) {
        return f(err);
      }

      fs.writeFile(configure.FILE, replaceInterface(name, content, description), function (err) {
        if (err) {
          return f(err);
        }

        cp.exec('service networking reload', function (err, __, stderr) {
          f(err || stderr || null);
        });
      });

    });
  }

  configure.FILE = '/etc/network/interfaces';

  return configure;
};


function replaceInterface(name, content, interfaceDescription) {
  return excludeInterface(name, content).trim() + '\n\n' + formatConfig(_.extend({
    name: name
  }, interfaceDescription)) + '\n';
}


function excludeInterface(name, content) {
  var without = _.curry(function (name, content) {
    return !_.includes(content, name);
  });

  return _.chain(content)
    .split('\n\n')
    .filter(without(name))
    .join('\n\n').trim();
}

var formatConfig = _.template(function () {
  /**
auto <%= name %>
iface <%= name %> inet static
    address <%= ip %>
    netmask <%= netmask %>
    gateway <%= gateway %>
  */
}.toString().split('\n').slice(2, -2).join('\n'));
