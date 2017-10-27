'use strict';
var fs = require('fs');
var path = require('path');

module.exports = {
  ifconfig_get_1: fs.readFileSync(path.resolve(__dirname, './ifconfig_get_1.txt'), 'utf8'),
  ifconfig_get_2: fs.readFileSync(path.resolve(__dirname, './ifconfig_get_2.txt'), 'utf8'),
  ifconfig_get_3: fs.readFileSync(path.resolve(__dirname, './ifconfig_get_3.txt'), 'utf8'),

  interfaces_1: fs.readFileSync(path.resolve(__dirname, './interfaces_1.txt'), 'utf8'),
  interfaces_1_out: fs.readFileSync(path.resolve(__dirname, './interfaces_1_out.txt'), 'utf8'),
  interfaces_2: fs.readFileSync(path.resolve(__dirname, './interfaces_2.txt'), 'utf8'),
  interfaces_2_out: fs.readFileSync(path.resolve(__dirname, './interfaces_2_out.txt'), 'utf8'),
  interfaces_3: fs.readFileSync(path.resolve(__dirname, './interfaces_3.txt'), 'utf8'),
  interfaces_3_out: fs.readFileSync(path.resolve(__dirname, './interfaces_3_out.txt'), 'utf8'),

  route_get_1: fs.readFileSync(path.resolve(__dirname, './route_get_1.txt'), 'utf8'),
  route_get_2: fs.readFileSync(path.resolve(__dirname, './route_get_2.txt'), 'utf8'),
  route_get_3: fs.readFileSync(path.resolve(__dirname, './route_get_3.txt'), 'utf8')
};
