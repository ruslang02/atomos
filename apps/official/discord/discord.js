const {AppWindow, Notification, Shell, Registry} = require("@api");
const path = require("path");
const {promises} = require("fs");
const win = AppWindow.getCurrentWindow();
//win.ui.root.style.background = "#202225";
let webview = document.createElement("webview");
webview.src = "https://discordapp.com/channels/@me";
webview.className = "border-0 w-100 h-100";
webview.preload = path.join(__dirname, "captureNotifications.js");
win.ui.body.append(webview);
let disableDZ = !!Registry.get("discord.disableUIShift");
if (Registry.get("discord.enableTitlebar") !== true) {
	win.ui.body.classList.replace("very-rounded-bottom", "very-rounded");
	win.ui.title.classList.add("fade");
	win.ui.header.classList.remove("p-2");
	win.ui.header.classList.add("position-absolute", "w-100", "py-2", "pr-2");
	win.ui.header.style.zIndex = "100";
	win.ui.buttons.style.width = CSS.px(82);
	win.ui.buttons.putToBG.classList.add("mr-1");
	win.ui.buttons.classList.add("justify-content-center", "my-1");
	win.ui.buttons.classList.remove("ml-2");
	if (disableDZ) {
		win.ui.header.classList.add("pb-0");
		win.ui.buttons.classList.replace("my-1", "mt-1");
	}
}
let firstStart = false;
let settingsContent = document.createElement("section");
webview.addEventListener("dom-ready", function () {
	if (!firstStart)
		settingsBtn.classList.add("show");
	firstStart = true;
	webview.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chrome/77.0.3833.0 Safari/537.36");
	if (!win.ui.title.classList.contains("fade"))
		webview.insertCSS(`[class*=systemPad] > [class*=listItem]:last-child, [class*=systemPad] > [class*=listItem]:nth-last-child(2) > [class*=guildSeparator] {display:none}`);
	else promises.readFile(path.join(__dirname, disableDZ ? "discord_min.css" : "discord.css")).then(file => {
		webview.insertCSS(file.toString());
	});
});
webview.addEventListener("new-window", (e, url) => {
	e.preventDefault();
	console.log(e.url);
	Shell.openExternal(e.url)
});
let settingsBtn = document.createElement("button");
settingsBtn.className = "mdi mdi-18px fade mdi-settings lh-18 d-flex close text-white";
settingsBtn.style.order = 9999;
settingsBtn.style.textShadow = "0 1px 2px black";
settingsBtn.title = "Settings";
settingsBtn.onclick = openSettings;
new Tooltip(settingsBtn);
win.ui.header.append(settingsBtn);

win.on('focus', function () {
	webview.focus();
});
webview.addEventListener("focus", () => win.focus());
webview.addEventListener("ipc-message", (e) => {
	let n = e.args[0];
	Object.assign(n[1], {
		sticky: false,
		requireInteraction: false
	});
	new Notification(n[0], n[1]);
});

function openSettings() {
	settingsContent.innerHTML = "";
	let rows = [];
	rows[0] = document.createElement("div");
	rows[0].className = "form-group row flex-nowrap mx-0";
	let zoomFactor = document.createElement("input");
	zoomFactor.label = document.createElement("label");
	zoomFactor.className = "form-control";
	zoomFactor.label.className = 'col-sm-3 col-form-label font-weight-bold';
	zoomFactor.label.innerText = "Zoom";
	zoomFactor.type = "number";
	zoomFactor.step = 0.05;
	zoomFactor.value = webview.getZoomFactor();
	zoomFactor.id = zoomFactor.label.htmlFor = Shell.uniqueId();
	rows[0].append(zoomFactor.label, zoomFactor);

	rows[1] = document.createElement("div");
	rows[1].className = "row mx-3 custom-control custom-checkbox";
	let dragZone = document.createElement("input");
	dragZone.type = "checkbox";
	dragZone.className = "custom-control-input";
	dragZone.label = document.createElement("label");
	dragZone.label.innerText = "Use alt. panel shift";
	dragZone.label.className = "custom-control-label";
	dragZone.id = dragZone.label.htmlFor = Shell.uniqueId();
	dragZone.checked = disableDZ;
	rows[1].append(dragZone, dragZone.label);

	rows[2] = document.createElement("div");
	rows[2].className = "row mx-3 custom-control custom-checkbox";
	let hideHeader = document.createElement("input");
	hideHeader.type = "checkbox";
	hideHeader.className = "custom-control-input";
	hideHeader.label = document.createElement("label");
	hideHeader.label.innerText = "Enable titlebar";
	hideHeader.label.className = "custom-control-label";
	hideHeader.id = hideHeader.label.htmlFor = Shell.uniqueId();
	hideHeader.checked = !win.ui.title.classList.contains("fade");
	rows[2].append(hideHeader, hideHeader.label);

	settingsContent.append(...rows);

	Shell.showMessageBox({
		message: settingsContent,
		title: "Discord Client Settings",
		buttons: ["Cancel", "Apply"],
		defaultId: 1
	}).then(button => {
		if (button !== "Apply") return;
		webview.setZoomFactor(parseFloat(zoomFactor.value));
		Registry.set("discord.disableUIShift", dragZone.checked);
		Registry.set("discord.enableTitlebar", hideHeader.checked);
		if (hideHeader.checked !== !win.ui.title.classList.contains("fade"))
			win.relaunch();
		if (disableDZ !== dragZone.checked)
			webview.reload();
		disableDZ = dragZone.checked;
		if (disableDZ && win.ui.title.classList.contains("fade")) {
			win.ui.header.classList.add("pb-0");
			win.ui.buttons.classList.replace("my-1", "mt-1");
		}
	});
}
