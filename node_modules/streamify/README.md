# node-streamify

Streamify helps you easily provide a streaming interface for your code.

[![Build Status](https://secure.travis-ci.org/fent/node-streamify.svg)](http://travis-ci.org/fent/node-streamify)
[![Dependency Status](https://david-dm.org/fent/node-streamify.svg)](https://david-dm.org/fent/node-streamify)
[![codecov](https://codecov.io/gh/fent/node-streamify/branch/master/graph/badge.svg)](https://codecov.io/gh/fent/node-streamify)

# Usage

```js
var streamify = require('streamify');
var request   = require('request');

exports.doSomething = function doSomething() {
  var stream = streamify();

  request(url1, function(err, res, body) {
    // do something with `body`

    // once the actual stream you want to return is ready,
    // call `stream.resolve()`
    stream.resolve(request(url2));
  });

  // your function can return back a stream!!
  return stream;
}

// because `doSomething()` returns a stream, it can be piped
exports.doSomething().pipe(anotherStream);
```


# API
### streamify([options])

Returns an instance of a stream. `options` can be

* `superCtor` - The object from which it inherits. Defaults to `require('stream').Stream`. Sometimes you may want to use this if your stream might be checked with the `instanceof` operator against objects such as `http.ServerResponse`.
* `readable` - Defaults to `true`.
* `writable` - Defaults to `true`.

### Stream#resolve(stream)

Must be called only once when the actual stream you are proxying to becomes available after an asynchronous operation.

### Stream#unresolve()

Can be used to unbind a a resolved stream to later call `resolve()` again.

### Stream#addSource(stream)

Add a source readable stream.

### Stream#removeSource()

Remove previously added source stream.

### Stream#addDest(stream)

Add a destination writable stream.

### Stream#removeDest()

Remove a previously added destination stream.


# Install

    npm install streamify


# Tests
Tests are written with [mocha](https://mochajs.org)

```bash
npm test
```

# License
MIT
