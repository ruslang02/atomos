const fs = require("fs").promises;
const AppWindow = require("@api/WindowManager");
const Menu = require(`@api/Menu`);
const Shell = require("@api/Shell");
const path = require("path");
const {Snackbar} = require("@api/Notification");
const MAX_SIZE = 51240;
let win = AppWindow.getCurrentWindow();
let el = {};
let currentFile;
el.textarea = document.createElement("textarea");
el.textarea.className = "flex-grow-1 mx-2 mb-2 very-rounded shadow p-2 border-0" + (Shell.ui.darkMode ? " text-white bg-dark" : "");
el.textarea.style.resize = "none";
el.textarea.autofocus = true;
el.textarea.style.outline = 0;
win.ui.body.appendChild(el.textarea);
let nav = document.createElement("nav");
nav.className = "d-flex";
nav.openFile = document.createElement("button");
nav.openFile.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mdi-folder-outline mr-2 mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.openFile.onclick = () => Shell.selectFile(Shell.ACTION_OPEN, {
	defaultPath: path.join(process.env.HOME, "Documents")
}).then(loadFile);
nav.openFile.title = "Open".toLocaleString();
nav.save = document.createElement("div");
nav.save.className = "btn-group";
nav.saveFile = document.createElement("button");
nav.saveFile.className = "btn mdi d-flex btn-sm shadow-sm align-items-center mdi-content-save-outline mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.saveFile.onclick = () => nav.saveDrop.menu.getMenuItemById("save").click();
nav.saveFile.title = "Save".toLocaleString();
nav.saveDrop = document.createElement("button");
nav.saveDrop.className = "btn dropdown-toggle btn-sm dropdown-toggle-split shadow-sm mr-2" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.saveDrop.onclick = e => {
	e.stopPropagation();
	nav.saveDrop.menu.togglePopup({
		x: nav.save.offsetLeft + win.getPosition()[0],
		y: nav.save.offsetTop + win.getPosition()[1] + nav.save.offsetHeight
	});
};
nav.saveDrop.menu = new Menu([{
	label: "Open",
	visible: false,
	click() {
		nav.openFile.click();
	},
	id: "open",
	icon: "folder-outline",
	accelerator: "Ctrl+O"
}, {
	label: "Save",
	click() {
		if (currentFile)
			fs.writeFile(currentFile, el.textarea.value, "utf-8")
				.then(() => new Snackbar("File was saved"))
				.catch(() => new Snackbar('There was a problem saving the file'));
		else nav.saveDrop.menu.getMenuItemById("saveAs").click();
	},
	id: "save",
	icon: "content-save-outline",
	accelerator: "Ctrl+S"
}, {
	label: "Save As...",
	click() {
		Shell.selectFile(Shell.ACTION_SAVE, {
			defaultPath: path.join(process.env.HOME, "Documents")
		}).then(file => {
			currentFile = file;
			win.setTitle(path.basename(file) + " - Typewriter");
			nav.saveDrop.menu.getMenuItemById("save").click();
		});
	},
	id: "saveAs",
	icon: "content-save-settings-outline",
	accelerator: "Ctrl+Shift+S"
}]);
nav.save.append(nav.saveFile, nav.saveDrop);
nav.append(nav.openFile, nav.save);
new Tooltip(nav.openFile, {
	placement: "bottom"
});
new Tooltip(nav.saveFile, {
	placement: "bottom"
});
win.ui.header.prepend(nav);


async function loadFile(file, force = false) {
	if (!file) return;
	let stat = await fs.stat(file);
	if (stat.size > MAX_SIZE && !force)
		Shell.showMessageBox({
			type: "warning",
			title: "File is too large",
			message: "This file is larger than 50 KBytes, opening which can cause significant hanging or even a system crash.",
			buttons: ["Cancel", "OK"]
		}).then(button => {
			if (button === "OK") loadFile(file, true)
		});
	else {
		currentFile = file;
		win.setTitle(path.basename(file) + " - Typewriter");
		el.textarea.value = await fs.readFile(file, 'utf8');
	}
}

loadFile(win.arguments.file);
