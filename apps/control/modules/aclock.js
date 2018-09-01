const fs = require("fs-extra");
const http = require("http");
const https = require("https");
let aScript;
https.get("https://www.sony.net/united/clock/assets/js/heritage_data.js", (res) => {
	res.on('data', (d) => {
		aScript += d.toString() || "";
	});
	res.on('end', () => {
		new Function(aScript.replace("undefinedvar ", "global."))();
		let pid = getRandomPhotoID(a_clock_heritage_data.length);
		let file = fs.createWriteStream(process.env.HOME + "/.config/wallpaper.jpg");
		https.get("https://www.sony.net/united/clock/share/img/photo/" + a_clock_heritage_data[pid].id + "/fp_hd/05.jpg", (res) => {
			res.pipe(file);
			file.on('finish', function() {
				file.close(close);
			});
		});
	})
}).on('error', close);

function getRandomPhotoID(len) {
	return Math.floor(Math.random() * len);
}