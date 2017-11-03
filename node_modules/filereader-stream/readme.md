# filereader-stream

Given an HTML5 File object (from e.g. HTML5 drag and drops), turn it into a readable stream.

[![NPM](https://nodei.co/npm/filereader-stream.png)](https://nodei.co/npm/filereader-stream/)

If you want this for FileLists then definitely check out [fileliststream](http://github.com/brianloveswords/fileliststream).

# install

Use it with npm & [browserify >= 3.0](/substack/node-browserify)

```bash
$ npm install filereader-stream
```

# example
```js
var drop = require('drag-and-drop-files');
var concat = require('concat-stream');
var createReadStream = require('filereader-stream');

test('should read file when one is dropped', function(t) {
  drop(document.body, function(files) {
    var first = files[0]
    createReadStream(first).pipe(concat(function(contents) {
      // contents is the contents of the entire file
    }))
  })
})
```

# usage

```js
var createReadStream = require('filereader-stream', [options]);
```

`options` is optional and can specify `output`. Possible values are:

* `arraybuffer` [default]
* `binary` 
* `dataurl`
* `text`

You can also specify `chunkSize`, default is `8128`. This is how many bytes will be read and written at a time to the stream you get back for each file.

# run the tests

```
npm install
npm test
```

then open your browser to the address provided, open your JS console, and drag and drop files onto the page until the test suite passes/fails
