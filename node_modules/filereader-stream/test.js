var test = require('tape');
var drop = require('drag-and-drop-files');
var concat = require('concat-stream');
var frs = require('./');

drop(document.body, function(files) {
  var first = files[0], 
      s = frs(first),
      cursor, paused

  test('should read file when one is dropped', function(t) {
    s.pipe(concat(function(contents) {        
        t.true(contents.length > 0)
        t.end()       
    }))
  })  
  
  s.on('progress', function(offset){
  	if (offset / first.size < 0.5 || paused) return  	  		
  	test('should pause when over 30% of the file is read', function(t) {
	    cursor = s.pause()  				
	    t.true(cursor / first.size >= 0.5)
	    t.end()
  	})

  	test('should resume 2 seconds after pause', function(t) {
  	  setTimeout(function(){
   	    s.resume()
  	    t.true(s.paused === false)
  	    t.end()
  	  }, 2000)
  	})

  	paused = true  	
  })

  s.on('end', function(offset){
  	test('should return correct offset upon end event', function(t) {
	    t.true(first.size === offset)
	    t.end()
  	})		
  })

})
