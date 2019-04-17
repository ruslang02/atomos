const AppWindow = require("@api/WindowManager");
const win = AppWindow.getCurrentWindow();
let iframe = document.createElement("iframe");
iframe.className = "flex-grow-1 border-0";
iframe.src = "https://devdocs.io/";
win.ui.body.append(iframe);
