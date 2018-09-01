const fs = require('fs-extra'), path = require("path");
let registry = new Registry("taskbar");
if(!Object.getOwnPropertyNames(registry.get()).length)
	registry.set({
		items: ["start", "tasker", "tray"]
	});

render();

function render() {
	Elements.Bar = document.createElement("taskbar");
	Elements.BarItems = {};
	loadPlugins();
	Elements.Bar.className = "px-2 pt-1 pb-2 d-flex flex-nowrap mt-auto";
	root.appendChild(Elements.Bar);
}

function loadPlugins() {
	registry.get().items.forEach((id, i) => {
		fs.readJSON(path.join(osRoot, "apps", id, "package.json"), "utf-8").then(pkg => {
			if(pkg.type !== "bar-plugin")
				return;
			let plugin = document.createElement("plugin");
			fs.readFile(path.join(osRoot, "apps", id, pkg.main), "utf-8").then(file => {
				try {
					Elements.BarItems[id] = new Function("root", "__dirname", file)(plugin, path.join(osRoot, "apps", id))
					plugin.id = id;
					plugin.style.order = i;
					Elements.Bar.appendChild(plugin);
				} catch(e) {
					console.error(id, "was not loaded.", e);
				}
			});
		});
	});
}
