function update() {
	fs.readJson(app.getPath("appData") + "/taskbar.json", function(err, settings) {
		if(err) if(!fs.existsSync(app.getPath("appData") + "/taskbar.json")) {
			fs.writeJson(app.getPath("appData") + "/taskbar.json", fs.readJsonSync(__dirname + "/defaults.json"))
					.then(location.reload)
					.catch(console.error);
			settings = fs.readJsonSync(__dirname + "/defaults.json");
		}
		settings.order.forEach(function(item) {
			let plugin = fs.readFileSync(__dirname + "/plugins/" + item + ".html", "utf-8");
			if(!plugin) console.error("Plugin " + item + " not loaded.");
			else $("nav-bar").append(plugin);
		})
	});
}
update();
ipcRenderer.on("update", update);