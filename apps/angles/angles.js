const win = AppWindow.fromId(WINDOW_ID);
let fs, html_beautify, js_beautify, css_beautify, path;
try {
	fs = require('fs').promises;
	html_beautify = require('js-beautify').html;
	js_beautify = require('js-beautify').js;
	css_beautify = require('js-beautify').css;
	path = require("path");
	require("ace-builds/src-min/ace");
} catch (e) {
	win.close();
	shell.showMessageBox({
		type: "error",
		title: "Libraries required",
		message: `
In order to launch Angles, you should also install the following Node.JS libraries:<br>
<ul><li>js-beautify</li><li>ace-builds</li></ul>
You can do it by executing following commands:
<pre class="bg-dark rounded text-white p-2"><code>$ cd _atomos-dir_
atomos/$ npm i js-beautify ace-builds</code></pre>
`
	});
	return 0;
}

win.on('second-instance', (e, args) => {
	if (args.newWindow) e.preventDefault();
	else if (args.file) newTab(args.file);
	win.show();
});
win.once('closed', function() {
	window.removeEventListener("keydown", altEvent);
	prefs.remove();
});
win.on('resize', function() {
	tabs.active.editor.resize();
});
const registry = new Registry("angles");
let prefs;
if (!Object.keys(registry.get()).length) registry.set({
	indentSize: 2,
	indentTab: true,
	wrapLength: 80,
	theme: "merbivore_soft",
	showTabs: true,
	showToolbar: true
});
let settings = new Proxy(registry.get(), {
	set(a, b, c) {
		a[b] = c;
		registry.set(settings);
	}
});
let ofdPath = process.env.HOME;
let tabs = [];
let fileMenu, editMenu, viewMenu;
let tabCollection = document.createElement("section");
tabCollection.className =
	"d-flex scrollable-x-0 flex-grow-1 pl-1 flex-shrink-0 scrollable-0";
tabCollection.style.marginBottom = "-1px";
tabCollection.style.width = 0;
tabCollection.style.zIndex = "100";
tabCollection.onmousewheel = e => tabCollection.scrollLeft += e.deltaY;
tabCollection.toolbarToggle = document.createElement("button");
tabCollection.toolbarToggle.className =
	"btn btn-outline-light p-0 mb-2 rounded-circle border-0 mdi mdi-chevron-double-up mdi-chevron-double-down d-flex mdi-18px lh-18 ml-2";
tabCollection.toolbarToggle.addEventListener("click", e => {
	tabCollection.toolbarToggle.classList.toggle("mdi-chevron-double-up",
		viewMenu.menu.getMenuItemById("angles-showtoolbar").checked = !nav.classList
			.toggle("d-none"));
});
win.ui.header.classList.remove("p-2");
win.ui.header.classList.add("px-2", "pt-2");
win.ui.buttons.style.marginTop = "-0.5rem";
win.ui.buttons.classList.replace("mr-3", "mr-2");
win.ui.title.classList.add("d-none");
win.ui.header.prepend(tabCollection, tabCollection.toolbarToggle);
let nav = document.createElement("nav");
nav.className = "bg-dark p-1";
win.ui.body.append(nav);
let tabsContainer = document.createElement("main");
tabsContainer.className = "flex-grow-1 d-flex border-top border-dark";
root.append(tabsContainer);
generateMenus();
win.show();
let altEvent = function(e) {
	if (win.isFocused() && e.key === "Alt") tabCollection.toolbarToggle.click();
};
window.addEventListener("keydown", altEvent);

function init() {
	ace.config.set('basePath', osRoot + "/node_modules/ace-builds/src-min");
	if (win.arguments.file) newTab(win.arguments.file);
	else newTab();
	renderPreferencesDialog().then(() => console.log(
		"Preferences window generated"));
}
setImmediate(init);

function newTab(url) {
	let tab = document.createElement("tab");
	tab.addEventListener("mousedown", function(e) {
		e.stopPropagation();
		tab.activate();
	});
	tab.className =
		"d-flex px-2 pb-1 us-0 mt-1 mr-1 align-items-center position-relative bg-dark text-white very-rounded-top";
	tab.name = document.createElement("div");
	tab.name.innerText = "untitled";
	tab.deactivate = function() {
		tab.classList.remove("py-1", "shadow-lg", "bg-dark");
		tab.classList.add("pb-1", "mt-1");
		tab.tab.classList.add("d-none");
		tab.closeButton.classList.replace("d-flex", "d-none");
	};
	tab.load = async function(file) {
		let f = path.parse(file);
		ofdPath = f.dir;
		let data = await fs.readFile(file, tab.editor.encoding);
		tab.name.innerText = f.base;
		tab.editor.setValue(data);
		tab.url = file;
		tab.isRemote = true;
		tab.editor.session.setMode("ace/mode/" + (f.ext === ".js" ? "javascript" :
			f.ext.substring(1)));
		tab.reload();
		tab.classList.remove("active", "font-italic");
		win.setTitle(f.base + " - Angles");
	};
	tab.write = async function(url) {
		await fs.writeFile(url, tab.editor.getValue(), tab.editor.encoding);
		tab.classList.remove("font-italic");
		tab.reload();
		tab.url = url;
		let bname = path.basename(url);
		new Snackbar({
			message: "File " + (bname.length < 25 ? `"${bname}" ` : "") + "saved",
			window: win,
			buttonText: "View",
			click() {
				shell.showItemInFolder(url)
			}
		})
	};
	tab.save = async function () {
		if (tab.url) tab.write(tab.url);
		else tab.saveAs();
	}
	tab.saveAs = async function () {
		shell.selectFile(shell.ACTION_SAVE, {
			defaultPath: tab.url || ofdPath
		}).then(result => {
			tab.name.innerText = path.basename(result);
			tab.write(result);
		});

	}
	tab.close = function() {
		if (tabs.length === 1) newTab();
		else if (tab.previousSibling) tab.previousSibling.activate();
		else if (tab.nextSibling) tab.nextSibling.activate();
		tab.tab.remove();
		tab.remove();
		tab.editor.destroy();
		tabs.splice(tabs.indexOf(tab), 1);
	};
	tab.activate = function() {
		if (tabs.active) tabs.active.deactivate();
		tab.classList.add("py-1", "shadow-lg", "bg-dark");
		tab.classList.remove("pb-1", "mt-1");
		tab.tab.classList.remove("d-none");
		tab.closeButton.classList.replace("d-none", "d-flex");
		tab.editor.resize();
		tabs.active = tab;
		tab.editor.focus();
	};
	tab.reload = function() {
		tab.editor.eventNum++;
		let len = tab.editor.getValue().length;
		let currentEvent = tab.editor.eventNum;
		tab.editor.on('change', function() {
			if (tab.editor.eventNum === currentEvent)
				tab.classList.toggle("font-italic", tab.editor.getValue().length !== len);
		})
	};
	tab.dataset.draggable = "false";
	tab.closeButton = document.createElement("button");
	tab.closeButton.className =
		'mdi mdi-close mdi-18px lh-18 d-flex btn btn-outline-danger border-0 p-0 ml-2';
	tab.closeButton.addEventListener("click", tab.close);
	tab.tab = document.createElement("section");
	tab.tab.className = "flex-grow-1 mr-1 d-none";
	tab.append(tab.name, tab.closeButton);
	tabCollection.append(tab);
	tabsContainer.append(tab.tab);
	tab.editor = ace.edit(tab.tab);
	tab.editor.getSession().setWrapLimitRange(0, settings.wrapLength);
	tab.editor.getSession().setUseSoftTabs(!settings.indentTab);
	tab.editor.getSession().setTabSize(settings.indentSize);
	tab.editor.setFontSize(14);
	tab.editor.encoding = "utf-8";
	tab.url = "";
	tab.editor.eventNum = 0;
	tab.editor.focus();
	tab.editor.setTheme("ace/theme/" + settings.theme);
	tab.reload();
	tab.activate();
	tabs.push(tab);
	if (url) tab.load(url).then(() => console.log("File", url, "has been loaded"));
	return tab;
}

async function renderPreferencesDialog() {
	prefs = document.createElement("div");
	prefs.id = "angles";
	prefs.dialog = document.createElement("div");
	prefs.content = document.createElement("form");
	prefs.header = document.createElement("div");
	prefs.heading = document.createElement("h5");
	prefs.dismissButton = document.createElement("button");
	prefs.body = document.createElement("div");
	prefs.footer = document.createElement("div");
	prefs.applyButton = document.createElement("button");
	prefs.cancelButton = document.createElement("button");
	prefs.className = "modal fade";
	prefs.tabIndex = -1;
	prefs.setAttribute("aria-hidden", "true");

	prefs.dialog.className = "modal-dialog modal-dialog-centered";
	prefs.content.className = "modal-content";
	prefs.header.className = "modal-header";
	prefs.body.className = "modal-body";
	prefs.footer.className = "modal-footer";
	prefs.heading.className = "modal-title";
	prefs.heading.innerText = "Preferences";
	prefs.dismissButton.className = "close";
	prefs.dismissButton.innerHTML = "&times;";
	prefs.dismissButton.dataset.dismiss = "modal";
	prefs.applyButton.className = "btn btn-primary";
	prefs.cancelButton.className = "btn btn-secondary";
	prefs.applyButton.innerText = "Save changes";
	prefs.cancelButton.innerText = "Discard";
	prefs.cancelButton.dataset.dismiss = "modal";
	prefs.applyButton.type = "submit";
	prefs.cancelButton.type = "button";
	prefs.content.addEventListener("submit", e => {
		e.preventDefault();
		settings.indentSize = prefs.indentSize.value;
		settings.wrapLength = prefs.wrapLength.value;
		settings.indentTab = prefs.indentTab.checked;
		prefs.controller.hide();
	});
	prefs.append(prefs.dialog);
	prefs.dialog.append(prefs.content);
	prefs.content.append(prefs.header, prefs.body, prefs.footer);
	prefs.header.append(prefs.heading, prefs.dismissButton);
	prefs.footer.append(prefs.cancelButton, prefs.applyButton);
	document.body.append(prefs);
	prefs.controller = new BSN.Modal(prefs);
	let e1 = document.createElement("div");
	let e2 = document.createElement("div");
	let e3 = document.createElement("div");
	e1.className = "form-group row custom-control custom-checkbox p-0 mx-0";
	prefs.indentTab = document.createElement("input");
	prefs.indentTab.type = "checkbox";
	prefs.indentTab.id = shell.uniqueId();
	prefs.indentTab.className = "custom-control-input";
	prefs.indentTab.required = true;
	prefs.indentTab.value = settings.indentTab;
	e1.label = document.createElement("label");
	e1.label.className = "custom-control-label col-sm-4 p-0 position-static";
	e1.label.htmlFor = prefs.indentTab.id;
	e1.label.innerHTML = "Indent using <kbd>Tab</kbd>";
	e1.append(prefs.indentTab, e1.label);
	e2.className = "form-group row";
	e2.col9 = document.createElement("div");
	e2.col9.className = "col-sm-8";
	prefs.indentSize = document.createElement("input");
	prefs.indentSize.type = "number";
	prefs.indentSize.min = 1;
	prefs.indentSize.max = 8;
	prefs.indentSize.value = settings.indentSize;
	prefs.indentSize.id = shell.uniqueId();
	prefs.indentSize.className = "form-control";
	prefs.indentSize.required = true;
	e2.label = document.createElement("label");
	e2.label.className = "col-sm-4 col-form-label";
	e2.label.htmlFor = prefs.indentSize.id;
	e2.label.innerHTML = "Indent Size";
	e2.col9.append(prefs.indentSize);
	e2.append(e2.label, e2.col9)

	e3.className = "form-group row";
	e3.col9 = document.createElement("div");
	e3.col9.className = "col-sm-8";
	prefs.wrapLength = document.createElement("input");
	prefs.wrapLength.type = "number";
	prefs.wrapLength.min = 40;
	prefs.wrapLength.value = settings.wrapLength;
	prefs.wrapLength.required = true;
	prefs.wrapLength.id = shell.uniqueId();
	prefs.wrapLength.className = "form-control";
	e3.label = document.createElement("label");
	e3.label.className = "col-sm-4 col-form-label";
	e3.label.htmlFor = prefs.wrapLength.id;
	e3.label.innerHTML = "Wrap Length";
	e3.col9.append(prefs.wrapLength);
	e3.append(e3.label, e3.col9);

	prefs.body.append(e1, e2, e3);
	let style = document.createElement("style");
	style.innerText =
		`
	.modal#angles .custom-control-label::before,
	.modal#angles .custom-control-label::after {left: 10.5rem}
	`;
	root.append(style);
}
async function generateMenus() {
	fileMenu = document.createElement("button");
	fileMenu.className = "btn btn-outline-light border-0 mr-1";
	fileMenu.innerText = "File";
	fileMenu.menu = new Menu(win, [{
		label: "New Tab",
		accelerator: "Ctrl+N",
		click: e => newTab(),
		icon: "new-box"
	}, {
		type: "separator"
	}, {
		label: "Open...",
		accelerator: "Ctrl+O",
		click() {
			shell.selectFile(shell.ACTION_OPEN).then(newTab)
		},
		icon: "folder-outline"
	}, {
		type: "separator"
	}, {
		label: "Save",
		accelerator: "Ctrl+S",
		click() {
			tabs.active.save();
		},
		icon: "content-save"
	}, {
		label: "Save As...",
		accelerator: "Ctrl+Shift+S",
		id: "saveAs",
		click() {
			tabs.active.saveAs();
		},
		icon: "content-save-settings"
	}, {
		label: "Save All",
		accelerator: "Ctrl+L",
		id: "saveAll",
		click: async function () {
			for (const tab of tabs) {
				await tab.save();
			}
		}
	}]);
	fileMenu.addEventListener("click", e => {
		let pos = win.getPosition();
		e.stopPropagation();
		fileMenu.menu.togglePopup({
			x: fileMenu.offsetLeft + pos[0],
			y: fileMenu.offsetTop + fileMenu.offsetHeight + pos[1]
		});
	});

	editMenu = document.createElement("button");
	editMenu.className = "btn btn-outline-light border-0 mr-1";
	editMenu.innerText = "Edit";
	editMenu.menu = new Menu(win, [{
		label: "Find",
		icon: "magnify",
		click() {
			tabs.active.editor.execCommand("find");
		}
	}, {
		label: "Find and Replace",
		icon: "find-replace",
		click() {
			tabs.active.editor.execCommand("replace");
		}
	}, {
		type: "separator"
	}, {
		label: "Beautify",
		icon: "format-align-left",
		click() {
			let settings = {
				indent_size: 1,
				indent_with_tabs: tabs.active.editor.getSession().getTabString() ===
				"\t",
				wrap_line_length: tabs.active.editor.getSession().getWrapLimit(),
				indent_char: tabs.active.editor.getSession().getTabString()
			};
			let tabText = tabs.active.name.innerText;
			let btext;
			if (tabText.endsWith(".js") || tabText.endsWith(".json")) btext =
				js_beautify(tabs.active.editor.getValue(), settings);
			else if (tabText.endsWith(".css")) btext = css_beautify(tabs.active.editor
					.getValue(),
				settings);
			else if (tabText.endsWith(".html")) btext = html_beautify(tabs.active.editor
					.getValue(),
				settings);
			else return;
			tabs.active.editor.setValue(btext);
		}
	}, {
		type: "separator"
	}, {
		label: "Preferences",
		accelerator: "Ctrl+P",
		icon: "settings",
		click() {
			prefs.controller.show();
		}
	}]);
	editMenu.addEventListener("click", e => {
		let pos = win.getPosition();
		e.stopPropagation();
		editMenu.menu.togglePopup({
			x: editMenu.offsetLeft + pos[0],
			y: editMenu.offsetTop + editMenu.offsetHeight + pos[1]
		});
	});

	viewMenu = document.createElement("button");
	viewMenu.className = "btn btn-outline-light border-0 mr-1";
	viewMenu.innerText = "View";
	viewMenu.menu = new Menu(win, [{
		label: "Show toolbar",
		type: "checkbox",
		id: "angles-showtoolbar",
		checked: true,
		click(ch) {
			nav.classList.toggle("d-none", !ch)
			tabCollection.toolbarToggle.classList.toggle("mdi-chevron-double-up", ch);
		}
	}]);
	viewMenu.addEventListener("click", e => {
		let pos = win.getPosition();
		e.stopPropagation();
		viewMenu.menu.togglePopup({
			x: viewMenu.offsetLeft + pos[0],
			y: viewMenu.offsetTop + viewMenu.offsetHeight + pos[1]
		});
	});
	nav.append(fileMenu, editMenu, viewMenu);
}

let css = document.createElement("style");
let id = win.id;
css.innerHTML =
	`
window[id='${id}'] tab:before {
  z-index: 1;
}
window[id='${id}'] tab:hover {
	background: rgba(255,255,255,0.5)
}
window[id='${id}'] tab:before,
window[id='${id}'] tab:after {
  position: absolute;
  bottom: -1px;
  width: .5rem;
  height: .5rem;
  content: " ";
}
window[id='${id}'] tab:before {
  left: -.5rem;
}
window[id='${id}'] tab:after {
  right: -.5rem;
}
window[id='${id}'] tab:before {
  border-bottom-right-radius: .5rem;
}
window[id='${id}'] tab:after {
  border-bottom-left-radius: .5rem;
}
window[id='${id}'] tab.bg-white:before {
  box-shadow: 2px 2px 0 white;
}
window[id='${id}'] tab.bg-white:after {
  box-shadow: -2px 2px 0 white;
}
window[id='${id}'] tab.bg-dark:before {
  box-shadow: 2px 2px 0 var(--dark);
}
window[id='${id}'] tab.bg-dark:after {
  box-shadow: -2px 2px 0 var(--dark);
}
`;
root.append(css);