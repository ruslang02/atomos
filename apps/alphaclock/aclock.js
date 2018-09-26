const fs = require("fs").promises;
fetch("https://www.sony.net/united/clock/assets/js/heritage_data.js")
	.then(async function(res) {
		let data = new Function(await res.text() + " return a_clock_heritage_data;")();
		let pid = Math.floor(Math.random() * data.length);
		let image = await fetch(`https://www.sony.net/united/clock/share/img/photo/${data[pid].id}/fp_hd/${Math.ceil(new Date().getHours() / 2)}.jpg`).catch(self.close);
		fs.writeFile(process.env.HOME + "/.config/wallpaper.jpg", Buffer.from(await image.arrayBuffer()))
			.then(e => self.close()).catch(console.error);
	}).catch(self.close)
