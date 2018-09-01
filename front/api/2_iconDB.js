
	const fs = require("fs-extra");
	const path = require("path");
	window.iconDB = class IconDB {
		static retrieveIconURL(iconID) {
			let iconPath = path.join(osRoot, "icons", iconID + ".png");
			if (fs.existsSync(iconPath))
				return "file://" + iconPath;
			else {
				var url = "https://png.icons8.com/color/96/000000/" + iconID.split(/(?=[A-Z])/).join('_').toLowerCase() + ".png";
				var file = fs.createWriteStream(iconPath);
				require('https').get(url, function(response) {
					response.pipe(file);
					file.on('finish', function() {
						file.close(cb);
					});
				});
				return url;
			}
		}
	}
