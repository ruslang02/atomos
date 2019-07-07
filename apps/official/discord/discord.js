const {AppWindow, Notification} = require("@api");
const path = require("path");
const {promises} = require("fs");
const win = AppWindow.getCurrentWindow();
let webview = document.createElement("webview");
webview.src = "https://discordapp.com/channels/@me";
webview.className = "border-0 w-100 h-100";
webview.preload = path.join(__dirname, "captureNotifications.js");
win.ui.body.append(webview);
win.ui.body.classList.replace("very-rounded-bottom", "very-rounded");
win.ui.root.style.background = "#202225";
win.ui.title.classList.add("fade");
win.ui.header.classList.remove("p-2");
win.ui.header.classList.add("position-absolute", "py-2", "w-100", "pr-2");
win.ui.header.style.zIndex = "100";
win.ui.buttons.style.width = CSS.px(82);
win.ui.buttons.putToBG.classList.add("mr-1");
win.ui.buttons.classList.add("justify-content-center", "my-1");
win.ui.buttons.classList.remove("ml-2", "mr-3");
webview.addEventListener("dom-ready", function () {
	webview.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36");
	promises.readFile(path.join(__dirname, "discord.css")).then(file => {
		webview.insertCSS(file.toString());
		console.log("stop", file.toString())
	});
});

function discordKBEvent(e) {
	if (!win.isFocused()) return;
	if (e.ctrlKey) {
		if (e.key === "=") webview.setZoomFactor(webview.getZoomFactor() + 0.1);
		if (e.key === "-") webview.setZoomFactor(webview.getZoomFactor() - 0.1);
	}
}

window.addEventListener("keydown", discordKBEvent);
win.on('closed', function () {
	window.removeEventListener("keydown", discordKBEvent);
});
win.on('focus', function () {
	webview.focus();
});
webview.addEventListener("focus", () => win.show());
webview.addEventListener("ipc-message", (e) => {
	let n = e.args[0];
	Object.assign(n[1], {
		avatarImage: n[1].icon || n[1].image,
		sticky: false,
		requireInteraction: n[1].sticky
	});
	console.log(n[1]);
	new Notification(n[0], n[1]);
});