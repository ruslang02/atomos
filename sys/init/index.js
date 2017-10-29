global.fs = require('fs');
global.ipc = require('electron').ipcRenderer;
	const {
		BrowserWindow
	} = require("electron").remote;
	require('atomos-framework');
var toPing = false;
var aos = {
	"debug": (location.search.includes("debug") ? true : false),
	"vars": {
		"mimeList": []
	},
	"files": {
		"list": function (path, options, callback) {
			var result = [];
			fs.readdir(path, function (errno, files) {
				files.forEach(function (file) {
					if (!options.showHidden && file.startsWith(".")) return;
					var fileRes = {
						"name": file
					}
					var stat = fs.lstatSync(path + "/" + file);
					if (stat.isFile()) {
						fileRes.type = "file";
						fileRes.mimeType = aos.utils.getMimeType(file.substring(file.lastIndexOf(".") + 1));
					} else if (stat.isDirectory()) fileRes.type = "folder";
					else if (stat.isSymbolicLink()) {
						fileRes.link = true;
						var link = fs.readlinkSync(path + file);
						fileRes.linkDestination = link;
						console.log(link);
						var statLink = fs.statSync("/" + link);
						if (statLink.isFile()) {
							fileRes.type = "file";
							fileRes.mimeType = aos.utils.getMimeType(link.lastIndexOf(".") + 1);
						} else if (statLink.isDirectory()) fileRes.type = "folder";
					}
					fileRes.atime = stat.atime;
					fileRes.mtime = stat.mtime;
					fileRes.ctime = stat.ctime;
					try {
						fs.accessSync(path, fs.constants.R_OK);
						fileRes.readable = true
					} catch (e) {
						fileRes.readable = false
					}
					try {
						fs.accessSync(path, fs.constants.W_OK);
						fileRes.writable = true
					} catch (e) {
						fileRes.writable = false
					}
					try {
						fs.accessSync(path, fs.constants.X_OK);
						fileRes.executable = true
					} catch (e) {
						fileRes.executable = false
					}
					if (fileRes.type == "folder") {

						if (fs.existsSync(path + "/" + file + "/.folderinfo")) {
							var data = $.parseJSON(fs.readFileSync(path + "/" + file + "/.folderinfo", "utf8"));
							if (options.iconSize == "small") fileRes.icon = data.smallIcon;
							else fileRes.icon = data.icon;
						} else if (options.iconSize == "small")
							if (fileRes.link) fileRes.icon = "/atomos/icons/folders-small/Symlink Folder.png";
							else fileRes.icon = "/atomos/icons/folders-small/Extensions Folder.png";
						else if (fileRes.link) fileRes.icon = "/atomos/icons/Symlink Folder.png";
						else fileRes.icon = "/atomos/icons/Extensions Folder.png";

					} else if (fileRes.type == "file") {
						var mime = "/atomos/icons/file-types/" + file.substring(file.lastIndexOf(".") + 1).toUpperCase() + ".png";
						if (fs.existsSync(mime)) fileRes.icon = mime;
						else if (fileRes.link) fileRes.icon = "/atomos/icons/file-types/Symlink.png";
						else fileRes.icon = "/atomos/icons/file-types/Unknown.png";
						if (options.iconSize == "small") fileRes.icon = fileRes.icon.replace(/file-types/g, "file-types-small");
					}
					result.push(fileRes);
					console.log(result);
				});
				if (options.sorting == "D-F") {
					var files = [];
					var folders = [];
					result.forEach(function (element) {
						if (element.type == "file") files.push(element);
						else folders.push(element);
					});

					folders.sort(function (a, b) {
						var nameA = a.name.toLowerCase(),
							nameB = b.name.toLowerCase();
						if (nameA < nameB) return -1;
						if (nameA > nameB) return 1;
						return 0;
					});
					files.sort(function (a, b) {
						var nameA = a.name.toLowerCase(),
							nameB = b.name.toLowerCase();
						if (nameA < nameB) return -1;
						if (nameA > nameB) return 1;
						return 0;
					});
					result = folders.concat(files);
				} else if (options.sorting == "A-Z") {
					result.sort(function (a, b) {
						var nameA = a.name.toLowerCase(),
							nameB = b.name.toLowerCase();
						if (nameA < nameB) return -1;
						if (nameA > nameB) return 1;
						return 0;
					});
				}

				callback(result);
			})
		}
	},
	"file": {
		"open": function (path) {
			window.fileOpen(path);
		},
		"get": function (path, options, callback) {
			var result = "";
			fs.readFile(path, options.encoding || "utf-8", function (errno, contents) {

				if (options.format == "json") result = $.parseJSON(contents);
				else result = contents;
				if (typeof callback === "function") callback(result);

			})
		},
		"write": function (path, contents, callback) {
			fs.writeFile(path, contents, function (err) {
				//if (err) aos.notifications.add("danger", "node-fs error", err);
				try {
					callback(err)
				} catch (e) {}
			})
		}
	},
	"core": {
		"reloadDesktop": function () {
			fs.readdir("/atomos/home/Desktop", function (err, data) {
				$(".files").html("")
				data.forEach(function (item) {
					fs.lstat("/atomos/home/Desktop/" + item, function (err, stat) {
						if (stat.isFile()) {
							if (item.endsWith(".lnk")) {
								var shrt = fs.readFileSync("/atomos/home/Desktop/" + item, "utf8");
								console.log(shrt)
								shrt = $.parseJSON(shrt);
								$(".files").append("<button type='shortcut' realname='" + item + "' class='file-item'><img src='" + shrt.icon + "'><div class='file-title'>" + shrt.title + "</div></button>")
								$(".files .file-item").last().on("dblclick", function () {
									window.new(shrt.app, shrt.arguments || {});
								})
							} else {
								if (!item.startsWith(".")) {
									var icon = '/atomos/icons/file-types/' + item.substring(item.lastIndexOf(".") + 1) + ".png"
									if (!fs.existsSync(icon)) icon = '/atomos/icons/file-types/Unknown.png';
									$(".files").append("<button realname='" + item + "' class='file-item'><img src='" + icon + "'><div class='file-title'>" + item + "</div></button>");
								}
							}
						} else if (stat.isDirectory()) {

						}
					})
				})
			})
		},
		"init": function () {
			aos.core.reloadDesktop();


		}
	},
	"utils": {
		"initMimes": function () {

			fs.readFile("/etc/mime.types", "utf8", function (errno, mimeList) {
				var mimeArr = mimeList.split("\n");
				mimeArr.forEach(function (mime) {
					if (mime[0] != "#" && mime.trim() != "" && mime.indexOf("	") !== -1) {
						var m1 = mime.trim().split("	");
						m1 = m1.filter((n) => {
							return n != ""
						});
						var exts = m1[1].trim().split(" ");
						exts.forEach(function (ext) {
							aos.vars.mimeList.push({
								mime: m1[0].trim(),
								extension: ext
							});
						})
					}
				})
			})
		}
	}
}
aos.core.init()
