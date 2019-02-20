setTitle("Settings");
const Shell = require("@api/Shell");

function newItem(title, descr, icon, color, onclick) {
	let elem = document.createElement("button");
	elem.className = "btn-block btn btn-white d-flex p-2 align-items-stretch m-0 rounded-0 flex-shrink-0 " + (Shell.ui.darkMode ? "text-white" : "");
	elem.icon = document.createElement("icon");
	elem.icon.className = "rounded-circle text-white d-flex mdi mdi-21px mdi-" + icon + " p-2 lh-21 flex-shrink-0 ml-1 mr-2";
	elem.icon.style.backgroundColor = color;
	elem.textContainer = document.createElement("div");
	elem.textContainer.className = "d-flex flex-column flex-grow-1 text-left justify-content-around ml-1 lh-r1";
	elem.header = document.createElement("header");
	elem.header.innerText = title.toLocaleString();
	elem.footer = document.createElement("footer");
	elem.footer.className = "small text-muted font-weight-bolder";
	elem.footer.innerText = descr.toLocaleString();
	elem.onclick = onclick;
	elem.textContainer.append(elem.header, elem.footer);
	elem.append(elem.icon, elem.textContainer);
	return elem;
}

let items = {};
items.account = newItem("Account", "Sign in to Atom Link", "account-box", "var(--indigo)", () => openSection("account"));
items.apps = newItem("Apps & notifications", "Default apps, package manager", "apps", "var(--orange)", () => openSection("apps"));
//items.battery = newItem("Battery", "100% - fully charged", "battery", "var(--cyan)", () => {});
items.display = newItem("Display", "Wallpaper, themes, brightness", "brightness-6", "var(--yellow)", () => openSection("display"));
items.sound = newItem("Sound", "Volume, ringtone, external speakers", "volume-high", "var(--teal)", () => openSection("sound"));
//items.storage = newItem("Storage", "36% used - 3.85 GB free", "dns", "var(--purple)", () => {});
//items.security = newItem("Security & protection", "Screen lock, encryption", "lock", "var(--success)", () => {});
items.system = newItem("System", "About device, OS version, debug info", "information-outline", "var(--secondary)", () => openSection("system"));
items.developer = newItem("Developer options", "Enhancements for better development", "code-braces", "var(--secondary)", () => openSection("developer"));
root.append(...Object.values(items));
