const cp = require("child_process");
const fs = require("fs").promises;
const path = require("path");
const {
	Shell,
	Snackbar,
	Menu
} = require("@api");
const wifi = require("node-wifi");
wifi.init({
	iface: "wlx18a6f7143aea"
});
setTitle("Wi-Fi");

cp.exec("nmcli networking", (_e, res) => {
	if (res.toString().trim() === "enabled") {
		cp.exec("nmcli radio wifi", (_e, res2) => {
			if (res2.toString().trim() === "enabled") init(); else fail();
		});
	} else fail();
});

function fail() {
	root.innerHTML = "<div style='justify-self:center' class='align-self-center m-auto text-muted text-center'><i class='display-1 mdi mdi-wifi-strength-off-outline mb-2'></i><div>Airplane mode on. Disable it in Settings.</div></div>";
}

function init() {
	let connectedSSIDs = [];
	let connectedList = document.createElement("section");
	connectedList.className = "list-group flex-shrink-0";
	let anLabel = newSmallListItem({
		label: "Available networks",
		type: "header"
	});
	let networkList = document.createElement("section");
	networkList.className = "list-group scrollable-y";

	async function listConnectedNetworks() {
		connectedList.innerHTML = "";
		connectedSSIDs = [];
		let networks = await wifi.getCurrentConnections().catch(err => {
			console.error(err);
			new Snackbar("We couldn't list connected networks, check console.");
		}) || [];
		for (const hs of networks) {
			connectedSSIDs.push(hs.ssid);
			let elem = document.createElement("div");
			let strength = Math.ceil(hs.quality / 25);
			elem.className = "rounded-0 flex-shrink-0 d-flex align-items-center text-left pb-2 pt-1 mb-0 px-3 " + (Shell.ui.darkMode ? " text-white border-secondary" : "");
			elem.icon = document.createElement("button");
			elem.icon.className = "mdi mdi-24px border-0 rounded-max text-white d-flex p-2 lh-24 my-1 mr-2 btn btn-primary mdi-wifi-strength-" + strength;
			elem.icon.onmouseup = () => {
				new Menu([{
					icon: "information-outline",
					label: "Properties",
					click() {
						Shell.showMessageBox({
							title: "Network properties",
							icon: "wifi-strength-" + strength,
							message: `<kbd class="us d-block mt-3" style="white-space: pre">SSID: ${hs.ssid}
BSSID (MAC address): ${hs.bssid}
Channel: ${hs.channel}
Frequency: ${hs.frequency}
Signal level: ${hs.signal_level}
Security: ${hs.security}, ${hs.security_flags}</kbd>`,
							iconBG: "var(--info)"
						});
					}
				}, {
					icon: "vanish",
					label: "Forget",
					click() {
						wifi.deleteConnection({
							ssid: hs.ssid
						}).then(function () {
							listConnectedNetworks().then(listNetworks);
						}).catch(console.error)
					}
				}, {
					type: "separator"
				}, {
					icon: "wifi-strength-off-outline",
					label: "Disconnect",
					click() {
						wifi.disconnect().then(function () {
							listConnectedNetworks().then(listNetworks);
						}).catch(console.error)
					}
				}]).popup();
			};
			elem.header = document.createElement("header");
			elem.header.className = "text-truncate";
			elem.header.innerText = hs.ssid;
			elem.footer = document.createElement("footer");
			elem.footer.innerText = "Connected";
			elem.footer.className = "smaller text-muted";
			elem.header.append(elem.footer);
			elem.append(elem.icon, elem.header);
			connectedList.append(elem);
		}
	}

	async function listNetworks() {
		networkList.innerHTML = "";
		let networks = await wifi.scan().catch(err => {
			console.error(err);
			new Snackbar("We couldn't list available networks, check console.");
		}) || [];
		for (const hs of networks) {
			if (connectedSSIDs.includes(hs.ssid)) continue;
			let elem = document.createElement("button");
			let strength = Math.ceil(hs.quality / 25);
			let again = false;
			elem.onclick = async function () {
				if (!!hs.security.trim()) {
					let message = document.createElement("div");
					message.lead = document.createElement("p");
					message.lead.className = "mb-2";
					message.lead.innerHTML = `Network "${hs.ssid}" is secured. Enter hotspot's password.` +
						(again ? "<br /><div class='text-danger'>Check the password you entered.</div>" : "");
					message.pass = document.createElement("input");
					message.pass.placeholder = "Passphrase".toLocaleString();
					message.pass.type = "password";
					message.pass.required = true;
					message.pass.minlength = 8;
					message.pass.className = "form-control";
					message.append(message.lead, message.pass);
					let button = await Shell.showMessageBox({
						title: "Passphrase required",
						icon: "wifi-strength-lock-outline",
						message: message,
						cancelId: 0,
						buttons: ["Cancel", "<i class='mdi mdi-fingerprint mdi-18px lh-18 d-inline-flex align-text-top'></i> Connect"],
						defaultId: 1,
						iconBG: "var(--orange)"
					});
					if (button === "Cancel") {
						again = false;
						return;
					}
					const pass = document.querySelector("message-box input");
					await wifi.connect({
						ssid: hs.ssid,
						password: pass.value
					}).catch(err => {
						//console.error(err);
						again = true;
						elem.click();
					});
					listConnectedNetworks().then(listNetworks);
					again = false;
				} else {
					await wifi.connect({
						ssid: hs.ssid
					}).catch(console.error);
					listConnectedNetworks().then(listNetworks);
				}
			};
			elem.className = "rounded-0 flex-shrink-0 border-top border-bottom-0 border-left-0 border-right-0 d-flex align-items-center text-left py-2 mb-0 btn px-3 " + (Shell.ui.darkMode ? "btn-dark border-secondary" : "btn-white");
			elem.icon = document.createElement("icon");
			elem.icon.className = "mdi mdi-24px rounded-max text-white d-flex p-2 lh-24 my-1 mr-2 bg-secondary mdi-wifi-strength-" + strength;
			elem.header = document.createElement("header");
			elem.header.className = "text-truncate";
			elem.header.innerText = hs.ssid;
			elem.footer = document.createElement("footer");
			elem.footer.innerText = !!hs.security.trim() ? "Secured" : "Not secured";
			elem.footer.className = "smaller text-muted";
			elem.header.append(elem.footer);
			elem.append(elem.icon, elem.header);
			networkList.append(elem)
		}
	}

	root.append(connectedList, anLabel, networkList);
	listConnectedNetworks().then(listNetworks);
}
