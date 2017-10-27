'use strict';

module.exports = function (cp) {
  return {
    interfaces: require('./ifconfig.interfaces')(cp),
    configure: require('./ifconfig.configure')(cp)
  };
};
