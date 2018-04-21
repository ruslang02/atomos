var Readable = require('stream').Readable;
var Writable = require('stream').Writable;
var Duplex  = require('stream').Duplex;
var hashish = require('hashish');


/**
 * Proxy some events from underlying readable and writable streams.
 */
var SOURCE_EVENTS = ['error', 'close'];
var DEST_EVENTS = ['drain', 'close'];


/**
 * Creates property to use with `Object.create()`
 *
 * @param {Object} value
 * @return {Object}
 */
function prop(value) {
  return {
    writable: true,
    enumerable: true,
    configurable: true,
    value: value
  };
}


/**
 * @constructor
 * @param {Object} options
 *   {Object} superCtor
 *   {Boolean} readable
 *   {Boolean} writable
 * @return {Duplex}
 */
var Streamify = module.exports = function Streamify(options) {
  options = options || {};
  options.readable = typeof options.readable !== 'undefined' ?
    options.readable : true;
  options.writable = typeof options.writable !== 'undefined' ?
    options.writable : true;

  var superCtor = getConstructor(options);

  // Add `Streamify.prototype` methods.
  var properties = hashish.map(Streamify.prototype, prop);

  var o = Object.create(superCtor.prototype, properties);
  superCtor.call(o);
  o.readable = options.readable;
  o.writable = options.writable;
  o.__options = options;
  o._onevent = function onevent() {
  };
  o._destWritten = [];

  if (options.writable) {
    o.once('finish', function() {
      if (o._dest) {
        o._dest.stream.end();
      }
    });
  }
  return o;
};


/**
 * Required implementation by streaming API.
 *
 * @param {Number} size
 */
Streamify.prototype._read = function(size) {
  if (this._source) {
    var self = this;
    var onreadable = this._source.onreadable = function onreadable() {
      if (!self._source) { return; }
      var data = self._source.stream.read(size);
      if (data) {
        self.push(data);
      } else {
        self._source.stream.once('readable', onreadable);
      }
    };
    onreadable();

  } else {
    this._sourceRead = size;
  }
};


/**
 * Required implementation by streaming API.
 *
 * @param {Buffer|String} chunk
 * @param {!String} encoding
 * @param {Function(!Error)} callback
 */
Streamify.prototype._write = function(chunk, encoding, callback) {
  if (this._dest) {
    this._dest.stream.write(chunk, encoding, callback);
  } else {
    this._destWritten.push(arguments);
  }
};


/**
 * Add a stream to be the readable stream source.
 *
 * @param {Readable|Stream} stream
 */
Streamify.prototype.addSource = function(stream) {
  if (this._source) {
    throw Error('A source stream has already been added.');
  }
  stream = getReadable(stream);

  this._source = { stream: stream, listeners: {}, onend: onend };
  var self = this;

  SOURCE_EVENTS.forEach(function(event) {
    var onevent = self._source.listeners[event] = function onevent() {
      var args = Array.prototype.slice.call(arguments);
      self.emit.apply(self, [event].concat(args));
    };
    stream.on(event, onevent);
  });

  // Listen for `end` event to signal for end of data.
  function onend() {
    self.push(null);
  }
  stream.on('end', onend);

  // Check if `Readable#_read()` has already been called.
  this._read(this._sourceRead);
};


/**
 * Remove a stream from being the source.
 */
Streamify.prototype.removeSource = function() {
  if (!this._source) {
    throw Error('A source stream has not been added.');
  }

  var source = this._source;
  SOURCE_EVENTS.forEach(function(event) {
    source.stream.removeListener(event, source.listeners[event]);
  });
  source.stream.removeListener('readable', source.onreadable);
  source.stream.removeListener('end', source.onend);

  delete this._source;
};


/**
 * Add a stream to be the writable stream destination.
 *
 * @param {Writable|Stream} stream
 */
Streamify.prototype.addDest = function(stream) {
  if (this._dest) {
    throw Error('A destination stream has already been added.');
  }

  this._dest = { stream: stream, listeners: {} };
  var self = this;

  DEST_EVENTS.forEach(function(event) {
    var onevent = self._dest.listeners[event] = function onevent() {
      var args = Array.prototype.slice.call(arguments);
      self.emit.apply(self, [event].concat(args));
    };
    stream.on(event, onevent);
  });

  if (this._destWritten.length) {
    this._destWritten.forEach(function(args) {
      stream.write.apply(stream, args);
    });
  }
};


/**
 * Remove a stream from being the destination.
 */
Streamify.prototype.removeDest = function() {
  if (!this._dest) {
    throw Error('A destination stream has not been added.');
  }

  var dest = this._dest;
  DEST_EVENTS.forEach(function(event) {
    dest.stream.removeListener(event, dest.listeners[event]);
  });

  delete this._dest;
  this._destWritten = [];
};


/**
 * Begins fueling data from actual stream into Streamify instance.
 *
 * @param {Readable|Writable|Duplex|Stream} stream
 */
Streamify.prototype.resolve = function(stream) {
  if (this.__options.readable && stream.readable) {
    this.addSource(stream);
  }

  if (this.__options.writable && stream.writable) {
    this.addDest(stream);
  }
};


/**
 * Removes a stream from this, possibly because another is replacing it.
 */
Streamify.prototype.unresolve = function() {
  if (this._source) {
    this.removeSource();
  }

  if (this._dest) {
    this.removeDest();
  }
};


/**
 * Returns a readable new stream API stream if the stream is using the
 * old API. Otherwise it returns the same stream.
 *
 * @param {Readable|Stream} stream
 * @return {Readable}
 */
function getReadable(stream) {
  if (isOldStyleStream(stream)) {
    var readable = new Readable();
    readable.wrap(stream);
    return readable;
  } else {
    return stream;
  }
}


/**
 * Returns true if a stream is an old style API stream.
 *
 * @param {Readable|Stream} stream
 * @return {Boolean}
 */
function isOldStyleStream(stream) {
  return typeof stream.read !== 'function' ||
    typeof stream._read !== 'function' ||
    typeof stream.push !== 'function' ||
    typeof stream.unshift !== 'function' ||
    typeof stream.wrap !== 'function';
}


function getConstructor (options) {
  var superCtor = Duplex;
  if (options.readable && !options.writable) {
    superCtor = Readable;
  }

  if (options.writable && !options.readable) {
    superCtor = Writable;
  }

  return superCtor;
}