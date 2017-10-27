# node-wifiscanner2

This is a fork of [node-wifiscanner](https://github.com/mauricesvay/node-wifiscanner).

## Installing

    npm install node-wifiscanner2

## About

Scan surrounding WiFi access points with NodeJS.

On Mac, it will use the `airport` command.  
On Linux, it will use the `iwlist` command (may require root privileges).
On Windows, it will use the `netsh` command.

How to use :

	// scanner.js

	var wifiscanner = require('./wifiscanner.js');

	wifiscanner.scan(function(err, data){
		if (err) {
			console.log("Error : " + err);
			return;
		}

		console.log(data);
	});

Scanning surrounding WiFi access points is useful for getting geolocation. See `geolocation.js` for an example.

Similar project : [node_wifi_location](https://github.com/swdyh/node_wifi_location)

## Author

Fork Author
* Bryce Kahle <bryce@particle.io>

Original Author
* Maurice Svay <maurice@svay.com>, [http://svay.com](http://svay.com)

## Simplified BSD License

	Copyright 2012 Maurice Svay. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are
	permitted provided that the following conditions are met:

	   1. Redistributions of source code must retain the above copyright notice, this list of
	      conditions and the following disclaimer.

	   2. Redistributions in binary form must reproduce the above copyright notice, this list
	      of conditions and the following disclaimer in the documentation and/or other materials
	      provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY Maurice Svay ''AS IS'' AND ANY EXPRESS OR IMPLIED
	WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
	FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL Maurice Svay OR
	CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
	SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
	ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
	ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

	The views and conclusions contained in the software and documentation are those of the
	authors and should not be interpreted as representing official policies, either expressed
	or implied, of Maurice Svay.
