setTitle("Developer options");
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
list.append(list.windowProps);
main.append(list);
