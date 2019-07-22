const cp = require("child_process");
const Registry = require("@api/Registry");
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
let wifiDev = document.createElement("div");
let wifiInt = document.createElement("input");
wifiInt.className = "form-control w-100";
wifiInt.value = Registry.get("system.networking.wlanInterface") || "wlp1s0";
wifiInt.onchange = () => Registry.set("system.networking.wlanInterface", wifiInt.value);
wifiDev.append(document.createTextNode("Wi-Fi interface:"), wifiInt);
list.append(list.wifi, list.generalLabel, list.networking);
main.append(list);
