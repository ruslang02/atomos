const path = require("path"),
fs = require("fs").promises;

let button = document.createElement("button");
let icon = new Image(48, 48);
let menu = Menu.buildFromTemplate([{
	label: "Toggle Developer Tools",
	click: e => {
		require("electron").remote.getCurrentWindow().toggleDevTools();
	}
}, {
	label: "Restart System UI",
	click: e => {
		location.reload();
	}
}, {
	label: "Quit AtomOS",
	click: e => {
		shutdown = true;
		window.close();
	}
}]);
button.className = "btn p-0 m-0 border-0 bg-transparent rounded-circle mr-3";
icon.src = iconDB.retrieveIconURL("Slide Up");
button.appendChild(icon);
button.title = "All Apps (<i class='mdi mdi-atom'></i>)";
button.addEventListener("click", e => {
	e.stopPropagation();
	Elements.StartMenu.toggle();
});
button.addEventListener("contextmenu", e => {
	e.stopPropagation();
	menu.popup();
})
icon.style.transition = "transform .25s linear";
root.appendChild(button);
BSN.Tooltip(button);
window.addEventListener("keydown", e => {
	if(e.key === "Meta") window.__MetaKeyOverriden = false;
});
window.addEventListener("keyup", e => {
	if(e.key === "Meta" && !window.__MetaKeyOverriden) Elements.StartMenu.toggle();
});

fs.readFile(__dirname + "/menu.js", "utf-8").then(code => {
	new Function('body', '__dirname', code)(root, __dirname)
});
return button;
