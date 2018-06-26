function update() {
	systemRegistry.taskbar.items.forEach(function(item) {
		fs.readFile(__dirname + "/plugins/" + item + ".html", "utf-8").then((plugin) => {
			if(!plugin) console.error("Plugin " + item + " not loaded."); else $("nav-bar").append(plugin);
																																				
		})
	});
}
update();
ipcRenderer.on("update", update);
ipcRenderer.on("enter-full-screen", function() {
	app.window.setPosition(x, y + height - 2);
	$(window).mousemove(function() {
		app.window.setPosition(x, y + height - 32);
	});
	$("body").mouseleave(function() {
		app.window.setPosition(x, y + height - 2);
		app.window.show();
	})
});
ipcRenderer.on("leave-full-screen", function() {
	app.window.setPosition(x, y + height - 32);
	$(window).off("mousemove");
	$("body").off("mouseleave");
});
