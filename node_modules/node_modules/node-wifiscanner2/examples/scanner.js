var wifiscanner = require('../lib/wifiscanner.js');

wifiscanner.scan(function(err, data){
	if (err) {
		console.log("Error : " + err);
		return;
	}

	console.log(data);
});
