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
	el.textarea.className = "flex-grow-1 w-100 h-100 border-0";
	el.textarea.style.resize = "none";
	el.textarea.autofocus = true;
	el.textarea.style.outline = 0;
	el.textarea.addEventListener('contextmenu', e => menu.popup());
	root.appendChild(el.textarea);

	let fileButton = document.createElement("button");
	fileButton.menu = new Menu(win, [{
		label: "New Window",
		click() {
			AppWindow.launch("typewriter");
		},
		accelerator: "Ctrl+Shift+N",
		id: "new",
		icon: "new-box"
	}, {
		label: "Open...",
		click() {
			shell.selectFile(shell.ACTION_OPEN, {
				defaultPath: app.getPath("documents")
			}).then(loadFile);
		},
		id: "open",
		icon: "folder-outline",
		accelerator: "Ctrl+O"
	}, {
		label: "Save",
		click() {
			if (currentFile)
				fs.writeFile(currentFile, el.textarea.innerText, "utf-8");
			else fileButton.menu.getMenuItemById("saveAs").click();
		},
		id: "save",
		icon: "content-save",
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
		icon: "content-save-settings",
		accelerator: "Ctrl+Shift+S"
	}]);
	fileButton.addEventListener('click', e => {
		let pos = win.getPosition();
		e.stopPropagation();
		fileButton.menu.togglePopup({
			x: fileButton.offsetLeft + pos[0],
			y: fileButton.offsetTop + fileButton.offsetHeight + pos[1]
		});
	});
	fileButton.className = "btn btn-outline-primary border-0 p-1 mdi mdi-text mdi-18px lh-18 mr-2";
	win.ui.header.prepend(fileButton);

win.show();

async function loadFile(file, force = false) {
	if(!file) return;
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
}(win.arguments.file);
