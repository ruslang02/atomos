const fs = require("fs").promises;
const path = require("path");
const MAX_SIZE = 51240;
let win = AppWindow.fromId(WINDOW_ID);
let el = {};
let currentFile;

let menu = new Menu(win, [{
	label: "Undo",
	icon: "undo",
	click() {
		el.textarea.focus();
		document.execCommand('undo', false)
	}
}, {
	label: "Redo",
	icon: "redo",
	click() {
		el.textarea.focus();
		document.execCommand('redo', false)
	}
}, {
	type: "separator"
}, {
	label: "Cut",
	icon: "content-cut",
	click() {
		el.textarea.focus();
		document.execCommand('cut', false)
	}
}, {
	label: "Copy",
	icon: "content-copy",
	click() {
		el.textarea.focus();
		document.execCommand('copy', false)
	}
}, {
	label: "Paste",
	icon: "content-paste",
	click() {
		el.textarea.focus();
		document.execCommand('paste', false)
	}
}, {
	type: "separator"
}, {
	label: "Select All",
	icon: "select-all",
	click() {
		el.textarea.focus();
		document.execCommand('selectAll', false)
	}
}]);
el.textarea = document.createElement("textarea");
el.textarea.className = "flex-grow-1 mx-2 mb-2 very-rounded shadow p-2 border-0" + (shell.ui.darkMode ? " text-white bg-dark" : "");
el.textarea.style.resize = "none";
el.textarea.autofocus = true;
el.textarea.style.outline = 0;
el.textarea.addEventListener('contextmenu', e => menu.popup());
root.appendChild(el.textarea);
let nav = document.createElement("nav");
nav.className = "d-flex";
nav.openFile = document.createElement("button");
nav.openFile.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mdi-folder-outline mr-2 mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.openFile.onclick = () => shell.selectFile(shell.ACTION_OPEN, {
	defaultPath: app.getPath("documents")
}).then(loadFile);
nav.openFile.title = "Open (Ctrl+O)";
nav.save = document.createElement("div");
nav.save.className = "btn-group";
nav.saveFile = document.createElement("button");
nav.saveFile.className = "btn mdi d-flex btn-sm shadow-sm align-items-center mdi-content-save-outline mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.saveFile.onclick = () => nav.saveDrop.menu.getMenuItemById("save").click();
nav.saveFile.title = "Save (Ctrl+N)";
nav.saveDrop = document.createElement("button");
nav.saveDrop.className = "btn dropdown-toggle btn-sm dropdown-toggle-split shadow-sm mr-2" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.saveDrop.onclick = e => {
	e.stopPropagation();
	nav.saveDrop.menu.togglePopup({
		x: nav.save.offsetLeft + win.getPosition()[0],
		y: nav.save.offsetTop + win.getPosition()[1] + nav.save.offsetHeight
	});
};
nav.saveDrop.menu = new Menu(win, [{
	label: "Save",
	click() {
		if (currentFile)
			fs.writeFile(currentFile, el.textarea.innerText, "utf-8");
		else fileButton.menu.getMenuItemById("saveAs").click();
	},
	id: "save",
	icon: "content-save-outline",
	accelerator: "Ctrl+S"
}, {
	label: "Save As...",
	click() {
		shell.selectFile(shell.ACTION_SAVE, {
			defaultPath: app.getPath("documents")
		}).then(file => {
			currentFile = file;
			fileButton.menu.getMenuItemById("save").click();
		});
	},
	id: "saveAs",
	icon: "content-save-settings-outline",
	accelerator: "Ctrl+Shift+S"
}]);
nav.save.append(nav.saveFile, nav.saveDrop);
nav.append(nav.openFile, nav.save);
new BSN.Tooltip(nav.openFile, {
	placement: "bottom"
});
new BSN.Tooltip(nav.saveFile, {
	placement: "bottom"
});
win.ui.header.prepend(nav);
win.show();

async function loadFile(file, force = false) {
	if (!file) return;
	let stat = await fs.stat(file);
	if (stat.size > MAX_SIZE && !force)
		shell.showMessageBox({
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
		el.textarea.innerText = await fs.readFile(file, 'utf8');
	}
}

(win.arguments.file);
