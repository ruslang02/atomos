# network-config [![Deps](https://david-dm.org/FGRibreau/network-config.png)](https://david-dm.org/FGRibreau/network-config) [![Version](http://badge.fury.io/js/network-config.png)](https://david-dm.org/FGRibreau/network-config) [![Version](https://travis-ci.org/FGRibreau/network-config.svg)](https://travis-ci.org/FGRibreau/network-config) [![Downloads](http://img.shields.io/npm/dm/network-config.svg)](https://www.npmjs.com/package/network-config)

Network configuration for NodeJS. **Only used & tested on Debian**

# Setup

```
npm install network-config
```

<p align="center">
<a target="_blank" href="https://play.spotify.com/track/4fZJG8y70r2hyw3Kb4sU4N"><img style="width:100%" src="https://cloud.githubusercontent.com/assets/138050/6771675/9996f128-d0e5-11e4-93b1-6fef5c2c499a.gif"></a>
</p>

# Usage

### List active interfaces

```javascript
var network = require('network-config');

network.interfaces(function(err, interfaces){
  /* interfaces should be something like:

  [{
    name: 'eth0',
    ip: '1.1.1.77',
    netmask: '1.1.1.0',
    mac: 'aa:aa:aa:aa:aa:aa',
    gateway: '10.10.10.1'
   },
   { ... }, { ... }]
  */
 
});
```

### Update interface (static)

```
network.configure('eth0', {
    ip: 'x.x.x.x',
    netmask:'x.x.x.x',
    broadcast: 'x.x.x.x',
    gateway: 'x.x.x.x'    
}, function(err){

})
```

### Update interface (dhcp) (coming soon)
    
```javascript
network.configure('eth0', {
    dhcp: true
}, function(err){
});
```

# [Changelog](/CHANGELOG.md)
