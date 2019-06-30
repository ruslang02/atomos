setTitle("Developer options");
const Registry = require(`@api/Registry`);
let main = document.createElement("main");
root.append(main);

let list = document.createElement("section");
list.className = "list-group flex-shrink-0 rounded-0";
list.windowProps = newSmallListItem({
	label: "Show window properties",
	sublabel: "Works only when Live Transformations are turned <b>off</b>",
	type: "checkbox",
	checked: Registry.get("system.showWindowProps"),
	click(checked) {
		Registry.set("system.showWindowProps", checked);
	}
});
list.enableCaching = newSmallListItem({
	label: "Enable Caching",
	sublabel: "Caches application code after its first run",
	type: "checkbox",
	checked: Registry.get("system.enableCaching"),
	click(checked) {
		Registry.set("system.enableCaching", checked);
	}
});
list.enableSuperFetch = newSmallListItem({
	label: "Enable SuperFetch <span class='badge badge-warning'>beta</span>",
	sublabel: "Preloads all apps on boot, lowers app startup times, but may increase boot times",
	type: "checkbox",
	checked: Registry.get("system.enableSuperFetch"),
	click(checked) {
		Registry.set("system.enableSuperFetch", checked);
	}
});
list.enableUltraFetch = newSmallListItem({
	label: "Enable UltraFetch <span class='badge badge-warning'>beta</span>",
	sublabel: "Preloads <b>all</b> libraries that could be used in apps. Makes app start-up almost instant, but may create a great hang on boot",
	type: "checkbox",
	checked: Registry.get("system.enableUltraFetch"),
	click(checked) {
		Registry.set("system.enableUltraFetch", checked);
	}
});
list.showAllApps = newSmallListItem({
	label: "Show all apps",
	sublabel: "Also show unfinished, WIP and dummy apps in Start drawer",
	type: "checkbox",
	checked: Registry.get("system.showAllApps"),
	click(checked) {
		Registry.set("system.showAllApps", checked);
	}
});
list.append(list.windowProps, list.enableCaching, list.enableSuperFetch, list.enableUltraFetch, list.showAllApps);
main.append(list);
