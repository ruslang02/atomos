const cp = require("child_process");

setTitle("Network & internet");
let main = document.createElement("main");
root.append(main);

let list = document.createElement("section");
list.className = "list-group flex-shrink-0 rounded-0";
list.wifi = newSmallListItem({
	color: "var(--primary)",
	icon: "wifi-strength-4",
	label: "Wi-Fi",
	click: () => openSection("network-wlan")
});
list.ethernet = newSmallListItem({
	color: "var(--dark)",
	icon: "ethernet",
	label: "Ethernet"
});
list.generalLabel = newSmallListItem({
	label: "General settings",
	type: "header"
});
list.networking = newSmallListItem({
	label: "Airplane mode",
	sublabel: "Disable all networks",
	type: "checkbox",
	checked: cp.execSync("nmcli networking").toString().trim() !== "enabled",
	click(checked) {
		cp.exec("nmcli networking " + (checked ? "off" : "on"))
	}
});
list.append(list.wifi, list.ethernet, list.generalLabel, list.networking);
main.append(list);
