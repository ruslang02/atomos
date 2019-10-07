const {AppWindow, Notification} = require("@api");
const path = require("path");
const {promises} = require("fs");
const win = AppWindow.getCurrentWindow();
let webview = document.createElement("webview");
webview.src = "https://teams.microsoft.com";
webview.className = "border-0 w-100 h-100";
//webview.preload = path.join(__dirname, "captureNotifications.js");
win.ui.body.append(webview);
win.ui.header.style.background = "#4E57C4";
win.ui.root.style.background = `var(--${win.options.darkMode ? "dark" : "light"})`;
win.ui.title.classList.add("fade");
webview.addEventListener("dom-ready", function () {
    //webview.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36");
    /*promises.readFile(path.join(__dirname, "skype.css")).then(file => {
        webview.insertCSS(file.toString());
        console.log("stop", file.toString())
    });*/
});
webview.addEventListener("new-window", (e, url) => {
    e.preventDefault();
    Shell.openExternal(e.url)
});
webview.addEventListener("focus", () => win.show());
webview.addEventListener("ipc-message", (e) => {
    let n = e.args[0];
    console.log(n);
    new Notification(n[0], n[1]);
});