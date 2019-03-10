let pwd = "suslik2002!";
const fs = require("fs");
const fsp = fs.promises;
const path = require("path");
const md5 = require("md5");
document.body.innerHTML += "<div id='pwdentry' style='color:white; margin:1rem; font-family: FreeMono; font-weight:900'>Insert USB key to proceed.</div>";
let succeeded = false;
module.exports = {
	validate: function () {
		return new Promise(resolve => {
			setInterval(() => {
				if (succeeded)
					resolve();
			}, 100);
		});
	}
};

async function checkPass(device) {
	if (!device) return;
	let cmd = `udisksctl mount -b ${device}`;
	require("child_process").exec(cmd, (e, so, se) => {
		if (e || se) return;
		let mountDir = so.toString();
		mountDir = mountDir.substring(mountDir.lastIndexOf(" at ") + 4, mountDir.length - 2);
		fsp.readFile(path.join(mountDir, ".hash")).then(file => {
			console.log(file.toString().trim(), md5(pwd).trim());
			if (md5(pwd).trim() === file.toString().trim()) {
				succeeded = true;
				document.body.querySelector("#pwdentry").remove();
			}
		}).catch(console.error);
	});

}

fs.watch("/dev", function (a, b) {
	if (b.startsWith("mmc") || b.startsWith("sd") || b.startsWith("cd"))
		setTimeout(() => checkPass("/dev/" + b), 100);
});