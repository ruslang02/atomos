global.fs = require('fs');
global.wifi = require('wifi-control');
global.network = require('network-config');
global.exec = require('child_process').spawn;
global.ipc = require('electron').ipcRenderer;
	const {
		BrowserWindow
	} = require("electron").remote;
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
		"choose": function (wid, options) {
			options = options || {};

			var path = options.path || "/atomos/home/";
			new aos.components.Window("aos-cabinet", {
				path: path,
				action: "ofd",
				callback: options.callback,
				okText: options.okText || "Open",
				cancelText: options.cancelText || "Cancel",
				titleText: options.title || "Choose a file to open..."
			}, {
				modal: true,
				parent: wid
			});
		},
		"save": function (wid, options) {
			options = options || {};

			var path = options.path || "/atomos/home/";
			new aos.components.Window("aos-cabinet", {
				path: path,
				action: "sfd",
				callback: options.callback,
				okText: options.okText || "Save",
				cancelText: options.cancelText || "Cancel",
				titleText: options.title || "Choose where to save the file..."
			}, {
				modal: true,
				parent: wid
			});
		},
		"open": function (path, mime) {
			aos.file.get("/atomos/etc/associations.json", {
				format: "json"
			}, function (assocs) {
				assocs = assocs.filter(function (obj) {
					return obj.mime == mime
				})
				if (assocs.length > 0) new aos.components.Window(assocs[0].app, {
					path: path
				});
				else new aos.components.Window("aos-appchooserdialog", {
					path: path,
					mimeType: mime
				});
			});
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
				if (err) aos.notifications.add("danger", "node-fs error", err);
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
									new aos.components.Window(shrt.app, shrt.arguments || {});
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
		"getMimeType": function (ext) {
			if (!aos.vars.mimeList.find(o => o.extension === ext) || !ext) return "text/plain";
			else return aos.vars.mimeList.find(o => o.extension === ext)["mime"]
		},
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

function createWindow(app, args) {
	$.getJSON("/atomos/etc/apps/" + app + ".json", function (settings) {
		let win = new BrowserWindow({
			width: settings.width || 400,
			height: settings.height || 300,
			minWidth: settings.minWidth || 350,
			minHeight: settings.minHeight || 250,
			resizable: (settings.resizable === undefined ? true : settings.resizable),
			minimizable: (settings.minimizable === undefined ? true : settings.minimizable),
			maximizable: (settings.maximizable === undefined ? true : settings.maximizable),
			closable: (settings.closable === undefined ? true : settings.closable),
			title: settings.name || "New Application",
			icon: settings.icon || "/atomos/icons/Application.png",
			acceptFirstMouse: true,
			webPreferences: {
				preload: "/atomos/apps/preload.js",
				defaultEncoding: "utf-8"
			}
		});
		win.setMenuBarVisibility(false);
		win.setAutoHideMenuBar(true);
		win.setMenu(null);
		global.ipc.send("setArguments",{
			wid: win.id,
			arguments: args
		})
		win.loadURL("file:///atomos/apps/" + app + "/index.html");
		win.webContents.on("did-finish-load", function () {
			win.show()
		});
	})
}
