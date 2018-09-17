const fs = require("fs").promises;
const path = require("path");
const win = AppWindow.fromId(WINDOW_ID);

let file = await fs.readFile(path.join(osRoot, "package.json"));
let info = JSON.parse(file);
let codename = info.productName ? info.productName.substring(info.productName.indexOf("(") + 1, info.productName.indexOf(")")) : "n/a";

let App = document.createElement("app");
App.className = "d-inline-flex p-3 bg-white";

let LeftPanel = document.createElement("section");

let Icon = new Image(64, 64);
Icon.src = iconDB.retrieveIconURL("AtomOS");
Icon.className = "mr-3";

let RightPanel = document.createElement("main");
RightPanel.className = "flex-grow-1";
RightPanel.innerHTML = `<p class='mb-1'>This PC runs <b>${info.productName || info.name}</b></p>
<p class='mb-1'><b>Release</b> ${info.version}</p>
<p class='mb-1'><b>CodeName</b> ${codename}</p>
<p class='mb-1'><b>Build</b> ${info.buildversion}</p>`;

let CloseButton = document.createElement("button")
CloseButton.className = "btn btn-sm btn-primary ml-2 float-right";
CloseButton.innerText = "Close";
CloseButton.addEventListener("click", e => win.close());

LeftPanel.appendChild(Icon);
RightPanel.appendChild(CloseButton);
App.append(LeftPanel, RightPanel);
win.ui.body.appendChild(App);
win.show();
