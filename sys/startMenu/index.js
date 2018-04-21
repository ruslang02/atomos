const fs = require('fs-extra');
const path = require('path');
const {app, Menu} = require("atomos-framework");

module.exports.listApps = function (newApp = "") {
	let apps = [];

	fs.readdir(path.join(app.getPath("os"), "apps"), function (err, dir) {
		console.log(dir);
		let length = dir.length;
		dir.forEach(function (item, i, arr) {
			fs.readJson(path.join(app.getPath("os"), "apps", item, "app.json")).then(function (ap) {
				ap.icon = ap.icon.replace("$SYSTEM_ROOT", app.getPath("os")).replace("$APP_ROOT", path.join(app.getPath("os"), "apps", item))
					if (!ap.hidden)
						apps.push($("<a></a>", {
							href: "#",
							click: function () {
								app.launch(item)
							},
							"data-app": item,
							contextmenu: function () {
								Menu.buildFromTemplate([{
									label: "Launch",
									click() {
										app.launch(item)
									}
								}, {
									label: "Send to Desktop",
									click() {
										fs.readdir(app.getPath("desktop"))
											.then(function (dir) {
												let newShortcutName = ".1.lnk";
												dir.forEach(function (item) {
													if (item.startsWith(".")) {
														if (parseInt(item.substring(1)) >= parseInt(newShortcutName.substring(1)))
															newShortcutName = "." + (parseInt(item.substring(1)) + 1) + ".lnk";
														console.log(item, newShortcutName);
													}
												});
												fs.writeJson(path.join(app.getPath("desktop"), newShortcutName), {
													"title": ap.name,
													"icon": ap.icon,
													"app": item
												})
											})
									}
								}, {
									label: "Uninstall",
									click() {
										fs.remove(path.join(app.getPath("os"), "apps", item))
											.catch(console.error);
									}
								}]).popup()
							},
							class: "list-item btn btn-light",
							html: [
								$("<img />", {
									src: ap.icon
								}),
								$("<name></name>", {
									html: [
										ap.name,
										(newApp === item ? $("<small></small>", {
											class: "badge badge-primary ml-2",
											text: "New!"
										}) : "")
									]
								}),
								$("<br />"),
								$("<description></description>", {
									text: ap.description
								})
							]
						}));
					else length -= 1;
				console.log(length, apps.length);
				if (length === apps.length) {
					console.log(apps);
					apps.sort(function (a, b) {
						return a.find("name").text().toUpperCase().localeCompare(b.find("name").text().toUpperCase());
					});
					apps.forEach(function (itm) {
						$("#applications").append(itm);
					});
					fs.readJson(app.getPath("appData") + "/notify.json", function (e, sets = {}) {
						apps.forEach(function (itm) {
							console.log(itm);
							if (sets[itm.attr("data-app")] === undefined)
								sets[itm.attr("data-app")] = [1, 1];
						});
						fs.writeJson(app.getPath("appData") + "/notify.json", sets);
					})
				}

			}).catch(console.error);
		})
	});
};