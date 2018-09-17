const fs = require('fs').promises, path = require("path");
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

async function loadPlugins() {
	let items = registry.get().items;
	for(const id of items.values()) {
		let file = await fs.readFile(path.join(osRoot, "apps", id, "package.json"), "utf-8");
		let pkg = JSON.parse(file)
		if(pkg.type !== "bar-plugin") 
			return;
		try {
			let script = await fs.readFile(path.join(osRoot, "apps", id, pkg.main), "utf-8");
			let plugin = document.createElement("plugin");
			Elements.BarItems[id] = await new AsyncFunction("root", "__dirname", script)
			(plugin, path.join(osRoot, "apps", id));
			plugin.id = id;
			Elements.Bar.appendChild(plugin);
		} catch(e) {
			console.error(id, "was not loaded.", e);
		}
	}
}
