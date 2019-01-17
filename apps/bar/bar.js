const fs = require('fs').promises, path = require("path");
let registry = new Registry("taskbar");
if(!Registry.get("taskbar.items"))
	Registry.set('taskbar.items', ["start", "launcher", "tasker", "tray"]);
let autoHide = Registry.get("taskbar.autoHide") || false;
registry.on("changed", updatePosition);
render();

function render() {
	Elements.Bar = document.createElement("taskbar");
	Elements.BarItems = {};
	loadPlugins();
	Elements.Bar.className = "px-2 py-1 d-flex flex-nowrap mt-auto w-100 flex-shrink-0";
	Elements.Bar.transition = "bottom 1s ease";
	updatePosition();
	new ResizeObserver(updatePosition).observe(Elements.Bar);
	Elements.Bar.menu = new Menu(null, [{
		type: "checkbox",
		label: "Automatically hide taskbar",
		checked: autoHide || false,
		click() {
			Registry.set("taskbar.autoHide", !autoHide)
		}
	}]);
	Elements.Bar.addEventListener("contextmenu", () => {
		Elements.Bar.menu.popup();
		Elements.Bar.keepOpen(true);
		Elements.Bar.menu.once("menu-will-close", () => Elements.Bar.keepOpen(false))
	});
	Elements.Bar.keepOpen = function (bool) { // Not to close in auto-hide mode when sth is happening
		Elements.Bar.classList.toggle("show", bool);
	};
	root.appendChild(Elements.Bar);
}
function updatePosition() {
	console.log("upd");
	autoHide = Registry.get("taskbar.autoHide") || false;
	Elements.Bar.classList.toggle("autoHide", autoHide);
	document.body.style.setProperty("--taskbar-height", CSS.px(Elements.Bar.offsetHeight));
	document.body.style.setProperty("--taskbar-hided", autoHide ? "0px" : CSS.px(Elements.Bar.offsetHeight));
}

async function loadPlugins() {
	let items = Registry.get("taskbar.items");
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
