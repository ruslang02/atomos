const win = AppWindow.fromId(WINDOW_ID);
let iframe = document.createElement("iframe");
iframe.className = "flex-grow-1 border-0";
iframe.src = "https://devdocs.io/"
root.append(iframe);
win.show();