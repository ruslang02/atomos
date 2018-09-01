const fs = require("fs-extra");
const path = require("path");
const win = AppWindow.fromId(WINDOW_ID);

let Elements = {};
let info = fs.readJsonSync(path.join(osRoot, "package.json"));
let codename = (info.productName ? info.productName.substring(info.productName.indexOf("(") + 1, info.productName.indexOf(")")) : "n/a")

init();
function init() {
	Elements.App = document.createElement("app");
	Elements.App.className = "d-inline-flex p-3 bg-white";

	Elements.LeftPanel = document.createElement("section");

	Elements.Icon = new Image(64, 64);
	Elements.Icon.src = iconDB.retrieveIconURL("AtomOS");
	Elements.Icon.className = "mr-3";

	Elements.RightPanel = document.createElement("main");
	Elements.RightPanel.className = "flex-grow-1";
	Elements.RightPanel.innerHTML = `<p class='mb-1'>This PC runs <b>${info.productName || info.name}</b></p>
	<p class='mb-1'><b>Release</b> ${info.version}</p>
	<p class='mb-1'><b>CodeName</b> ${codename}</p>
	<p class='mb-1'><b>Build</b> ${info.buildversion}</p>`;

	Elements.CloseButton = document.createElement("button")
	Elements.CloseButton.className = "btn btn-sm btn-primary ml-2 float-right";
	Elements.CloseButton.innerText = "Close";
	Elements.CloseButton.addEventListener("click", e => win.close());

	Elements.LeftPanel.appendChild(Elements.Icon);
	Elements.RightPanel.appendChild(Elements.CloseButton);
	Elements.App.appendChild(Elements.LeftPanel);
	Elements.App.appendChild(Elements.RightPanel);
	win.ui.body.appendChild(Elements.App);
	win.show();
}
