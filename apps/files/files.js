const win = AppWindow.fromId(WINDOW_ID);
let registry = new Registry("files");
const {
	remote,
	ipcRenderer
} = require("electron");
const {
	clipboard
} = remote;
const fs = require("fs");
const fsp = fs.promises;
const path = require("path");
const proc = require("child_process");
let sidebar, container, statusBar, fileMenu, nav, main, FCBar, activeItem, mainMenu;
let watcher = "";
let history = {
	current: -1,
	items: []
};
if (!Object.keys(registry.get()).length) {
	let defaultFile = await
	fsp.readFile(__dirname + "/default.json");
	registry.set(JSON.parse(defaultFile));
}
let settings = new Proxy(registry.get(), {
	set(t, p, v) {
		t[p] = v;
		registry.set(settings);
		navigate(":refresh");
		return true;
	}
});

let copy_r = async function (src, dest) {
	let exists = fs.existsSync(src);
	let stats = exists && await fsp.stat(src);
	let isDirectory = exists && stats.isDirectory();
	if (exists && isDirectory) {
		await fsp.mkdir(dest);
		for (const i of (await fsp.readdir(src)).values()) {
			await copy_r(path.join(src, i), path.join(dest, i))
		}
	} else
		await fsp.copyFile(src, dest);
}
let delete_r = async function (input) {
	let stat = await fsp.lstat(input);
	if (stat.isFile()) {
		fsp.unlink(input);
	} else {
		let files = await fsp.readdir(input);
		for (const file of files) {
			var curPath = path.join(input, file);
			let stats = await fsp.lstat(curPath);
			if (stats.isDirectory())
				await delete_r(curPath);
			else
				await fsp.unlink(curPath);
		}
		await fsp.rmdir(input);
	}
};

init();

function init() {
	renderNav();
	renderContainer()
	if (win.arguments.callback)
		renderFCBar();
	renderStatusbar();
	win.show();
	navigate(win.arguments.file || app.getPath("home"));
	renderMainMenu();
}

async function navigate(url) {
	if (watcher) {
		watcher.close();
		watcher = undefined;
	}

	if (FCBar) {
		FCBar.textField.value = "";
		FCBar.submitButton.disabled = true;
	}

	if (!win.arguments.callback)
		win.setTitle(path.basename(url) + " - Files");
	url = path.normalize(url.trim());
	switch (url.toLowerCase()) {
		case ":back":
			url = history.items[--history.current];
			break;
		case ":forward":
			url = history.items[++history.current];
			break;
		case ":refresh":
			url = history.items[history.current];
			break;
		default:
			history.items.splice(++history.current, history.items.length);
			history.items.push(url);
	}
	nav.pathField.value = url;

	sidebar.querySelectorAll(".dropdown-item").forEach(item => {
		item.classList.toggle('active', [path.basename(url), url].indexOf(item.location) >= 0)
	});

	nav.backButton.disabled = !(history.current);
	nav.forwardButton.disabled = (history.current === history.items.length - 1);
	if (!fs.existsSync(url)) {
		main.innerHTML = `
				<div class="text-muted h-100 d-flex justify-content-center align-items-center flex-column">
				<icon class="mdi mdi-folder-outline display-1"></icon>
				This folder does not exist.
				<button class='btn btn-outline-primary d-flex align-items-center mt-3' onclick='require("fs").mkdir("${url}", e => new Snackbar("Directory created"))'><icon class='mdi mdi-plus mdi-18px lh-18 mr-2'></icon><div class="lh-r1">Create</div></button>
				</div>`;
		return;
	}
	let stat = await fsp.stat(url);
	let selectFile;
	if (stat.isFile()) {
		selectFile = path.basename(url);
		url = path.dirname(url);
	}
	nav.pathField.value = url;
	try {
		watcher = fs.watch(url, (a, b) => {
			if (a !== "change") navigate(":refresh")
		});
	} catch (e) {
		console.log(e);
		return;
	}

	statusBar.text.innerText = "Retrieving folder contents...";

	async function generateItem(file) {
		let item = document.createElement("button");
		item.stat = await fsp.lstat(file);
		item.draggable = true;
		item.className = 'dropdown-item px-2 py-1 rounded mb-1 d-flex align-items-center';
		item.isDirectory = item.stat.isDirectory();
		item.isShortcut = path.extname(file).substring(1).toUpperCase() === "LNK";
		item.disabled = (win.arguments.open === shell.DIRECTORY && item.stat.isFile());
		item.path = file;

		fs.access(item.path, fs.constants.R_OK, e => item.readable = e ? false : true);
		fs.access(item.path, fs.constants.W_OK, e => item.writable = e ? false : true);
		fs.access(item.path, fs.constants.X_OK, e => item.executable = e ? false : true);

		if (item.isShortcut) {
			item.shortcut = JSON.parse(await fsp.readFile(file));
		}
		item.addEventListener("click", function () {
			if (FCBar) {
				FCBar.textField.value = item.fileName.innerText;
				FCBar.submitButton.disabled = (!item.isDirectory && win.arguments.open === shell.DIRECTORY) ||
					(item.isDirectory && win.arguments.open === shell.FILE);
			}
		});
		item.addEventListener("mousedown", function (e) {
			e.stopPropagation();
			main.childNodes.forEach(item => item.classList.remove("active"));
			item.classList.add("active");
			activeItem = item;
			renderFileMenu();
		})
		item.addEventListener('contextmenu', e => {
			e.stopPropagation();
			fileMenu.popup();
		})
		item.addEventListener('dragstart', function (e) {
			e.dataTransfer.effectAllowed = 'move';
			e.dataTransfer.setData("application/file", file);
			return true;
		});
		item.delete = function () {
			delete_r(item.path);
		}
		item.openProperties = function () {
			let container = document.createElement("main");
			container.className = "d-flex flex-column";
			let header = document.createElement("div");
			header.className = "d-flex align-items-center mb-2";
			let icon = document.createElement("icon");
			icon.className = "mdi mdi-36px lh-36 mr-2 d-flex bg-warning p-1 very-rounded";
			icon.classList.add(item.isDirectory ? "mdi-folder-outline" : "mdi-file-outline");
			let fileName = document.createElement("input");
			fileName.className = "form-control flex-grow-1";
			fileName.value = path.basename(file);
			header.append(icon, fileName);
			let info = document.createElement("div");
			let size = document.createElement("div");
			size.innerText = "Size: " + item.stat.size + " bytes";

			function formatDate(date) {
				return new Date(date).toLocaleDateString({}, {
					weekday: 'long',
					year: 'numeric',
					month: 'short',
					day: 'numeric',
					hour: '2-digit',
					minute: '2-digit'
				});
			}

			let atime = document.createElement("div");
			atime.innerText = "Last Access Time: " + formatDate(item.stat.atime)
			let mtime = document.createElement("div");
			mtime.innerText = "Last Modification Time: " + formatDate(item.stat.mtime);
			let perms = document.createElement("div");
			perms.innerHTML = `Permissions: ${item.readable ? "readable" : "<s>readable</s>"}, ${item.writable ? "writable" : "<s>writable</s>"}, ${item.executable ? "executable" : "<s>executable</s>"}`;
			info.append(size, atime, mtime, perms);
			container.append(header, info);
			shell.showMessageBox({
				message: container,
				type: "none"
			});
		}
		item.cut = function () {
			clipboard.write({
				text: item.path,
				html: "<action>cut</action>"
			});
		}
		item.copy = function () {
			clipboard.write({
				text: item.path,
				html: "<action>copy</action>"
			});
		}
		item.install = function () {
			if (!item.isDirectory && path.extname(item.path) === ".wapp")
				AppWindow.launch("install", {
					file: item.path
				});
		}
		item.compress = function () {
			if (!item.isDirectory) return;
			shell.selectFile(shell.ACTION_SAVE, {
				buttonLabel: "Compress",
				defaultPath: nav.pathField.value
			}).then(async function (file) {
				require('tar').create({
					gzip: true,
					file: file,
					C: item.path
				}, await fsp.readdir(item.path)).then(e => new Notification(win, {
					app: "Archive Manager",
					icon: "archive",
					title: "Archive was successfully created",
					message: "Find it in your directory listing.",
					color: "var(--success)"
				})).catch(console.error)
			})
		}
		item.extract = function () {
			if (item.isDirectory) return;
			shell.selectFile(shell.ACTION_FOLDER, {
				buttonLabel: "Extract",
				defaultPath: nav.pathField.value,
				callback(file) {
					if (path.extname(item.path) === ".zip")
						require('extract-zip')(item.path, {
							dir: file
						}, e => navigate(":refresh"));
					else if ([".gz", ".tgz"].includes(path.extname(item.path)))
						fs.createReadStream(item.path).pipe(require('tar').x({
							C: file
						}));
				}
			});
		};
		item.open = function () {
			if (this.isDirectory) {
				navigate(file);
			} else {
				if (win.arguments.callback) sendBack();
				else if (this.shortcut) {
					AppWindow.launch(item.shortcut.app, item.shortcut.args);
				} else
					shell.openItem(file);
			}
		};
		item.openWith = function () {
			shell.openItemIn(file);
		}
		item.addEventListener("dblclick", item.open);
		item.icon = document.createElement("icon");
		item.icon.className = "mdi mdi-18px mdi-" + (item.isDirectory ? 'folder-outline' : 'file-outline') + " lh-18 mr-2";
		item.fileName = document.createElement("div");
		item.fileName.className = "scrollable-0 flex-grow-1 text-truncate";
		item.fileName.innerText = path.basename(file);
		item.append(item.icon, item.fileName);
		if (selectFile && item.fileName.innerText === selectFile) activeItem = item;
		return item;
	}

	let files = await fsp.readdir(url);
	statusBar.text.innerText = '0 elements';
	activeItem = undefined;
	main.innerHTML = "";
	if (files.length === 0) {
		main.innerHTML = `
			<div class="text-muted h-100 d-flex justify-content-center align-items-center flex-column">
			<icon class="mdi mdi-folder-outline display-1"></icon>
			This folder is empty.
			</div>`;
		return;
	}
	let items = [];
	for (const i of files.keys()) {
		let file = files[i];
		statusBar.text.innerText = `Retrieving folder contents: ${i} of ${files.length}`;
		if (file.startsWith(".") && !settings.showHidden) return;
		items.push(await generateItem(path.join(url, file)));
	}
	statusBar.text.innerText = `${files.length} elements`;
	items.sort((a, b) => {
		var o1 = a.isDirectory;
		var o2 = b.isDirectory;
		var p1 = a.fileName.innerText.trim().toLowerCase();
		var p2 = b.fileName.innerText.trim().toLowerCase();
		if (o1 < o2)
			return settings.foldersFirst ? 1 : 0;
		if (o1 > o2)
			return settings.foldersFirst ? -1 : 0;
		if (p1 < p2)
			return settings.sorting === "A-Z" ? -1 : 1;
		if (p1 > p2)
			return settings.sorting === "A-Z" ? 1 : -1;
		return 0;
	});
	main.append(...items);
	if (activeItem) {
		activeItem.focus();
		activeItem.classList.add("active");
	}
}

function renderFCBar() {
	FCBar = document.createElement("form");
	FCBar.className = "input-group p-1 m-0 bg-light border border-left-0 border-right-0 border-bottom-0 needs-validation flex-shrink-0";
	FCBar.onsubmit = function (e) {
		e.preventDefault();
		sendBack();
		return false;
	}
	FCBar.igPrepend = document.createElement("span");
	FCBar.igPrepend.className = "input-group-prepend";
	FCBar.cancelButton = document.createElement("button");
	FCBar.cancelButton.className = "btn btn-sm btn-secondary btn-block";
	FCBar.cancelButton.onclick = e => win.close();
	FCBar.cancelButton.type = "button";
	FCBar.cancelButton.innerText = "Cancel" || win.arguments.cancelText;
	FCBar.igPrepend.append(FCBar.cancelButton);
	FCBar.textField = document.createElement("input");
	FCBar.textField.type = "text";
	FCBar.textField.className = "form-control form-control-sm";

	function validate() {

		FCBar.submitButton.disabled = !(!!FCBar.textField.value.trim());
	}

	FCBar.textField.oninput = validate;
	FCBar.textField.onchange = validate;
	FCBar.tooltip = document.createElement("label");
	FCBar.tooltip.className = "invalid-tooltip m-2 p-1";
	FCBar.tooltip.style.top = 0;
	FCBar.tooltip.style.right = "50px";
	FCBar.tooltip.innerText = "File or folder does not exist";
	FCBar.igAppend = document.createElement("span");
	FCBar.igAppend.className = "input-group-append";
	FCBar.submitButton = document.createElement("button");
	FCBar.submitButton.className = "btn btn-sm btn-primary btn-block";
	FCBar.submitButton.type = "submit";
	FCBar.submitButton.innerText = win.arguments.buttonLabel;
	FCBar.submitButton.addEventListener("click", sendBack)
	FCBar.igAppend.append(FCBar.submitButton);
	FCBar.append(FCBar.igPrepend, FCBar.textField, FCBar.tooltip, FCBar.igAppend);
	win.ui.body.append(FCBar);
}

async function sendBack(force = false) {
	let file = path.join(nav.pathField.value, FCBar.textField.value);
	let exists = fs.existsSync(file);

	function send() {
		win.arguments.callback(file);
		win.close();
	}

	if (!exists) {
		if (win.arguments.open === shell.FILE) {
			if (win.arguments.checkFileExists) {
				statusBar.text.classList.add("text-danger", "font-weight-bold");
				statusBar.text.innerText = "File does not exist.";
			} else send();
		} else if (win.arguments.open === shell.DIRECTORY) {
			if (win.arguments.createDirectory)
				await fsp.mkdir(file);
			send();
		}
	} else {
		if (win.arguments.open === shell.FILE) {
			if (win.arguments.overwritePrompt) {
				window.__filespopover = new BSN.Popover(FCBar.submitButton, {
					content: `<overlay></overlay>
						<small>File "${FCBar.textField.value}" already exists.<br>Do you want to replace it?</small>
						<div class='text-right mt-2'>
						<button class="btn btn-secondary btn-sm" onclick="__filespopover.hide()">No</button>
						<button class="btn btn-outline-danger btn-sm" onclick="sendBack(true)">Yes, replace it</button>
						</div>`,
					placement: "top",
					trigger: 'manual'
				})
				__filespopover.show();
			} else send();
		} else if (win.arguments.open === shell.DIRECTORY) send();
	}
}

function renderMain() {
	main = document.createElement("section");
	main.className = "p-2 flex-grow-1 scrollable bg-white border-top";
	main.oncontextmenu = e => {
		e.stopPropagation();
		mainMenu.popup();
	};
	main.onmousedown = e => {
		if (!activeItem) return;
		activeItem.classList.remove("active");
		activeItem = undefined;
	}
	container.append(main);
}

async function renderAccessSection() {
	let homeDir = app.getPath("home");
	settings.accessList.forEach(function (item) {
		let dItem;
		if (item.type === "item") {
			let location = item.location.replace("$HOME_DIR", homeDir).replace("$SYSTEM_ROOT", osRoot);
			dItem = document.createElement("button");
			dItem.className = 'dropdown-item d-flex py-2 align-items-center';
			dItem.onclick = e => navigate(location);
			dItem.location = location;
			dItem.icon = document.createElement("icon");
			dItem.icon.className = "mdi mdi-18px lh-18 mr-1 d-flex mdi-" + item.icon;
			dItem.header = document.createElement("div");
			dItem.header.innerText = item.name;
			dItem.header.className = "lh-r1";
			dItem.append(dItem.icon, dItem.header);
		} else {
			dItem = document.createElement("div");
			dItem.className = "dropdown-header";
			dItem.innerText = item.name;
		}
		sidebar.accessSection.append(dItem);
	});
}

async function renderDeviceSection() {
	try {
		const byLabel = fs.existsSync("/dev/disk/by-label");
		let files;
		if (byLabel)
			files = await fsp.readdir("/dev/disk/by-label");
		for (const link of await fsp.readdir("/dev/disk/by-uuid")) {
			let loc = await fsp.readlink("/dev/disk/by-uuid/" + link);
			let device = path.resolve("/dev/disk/by-uuid/", loc);
			let label = "";
			if (byLabel) {
				try {
					for (const file of files) {
						if (path.resolve("/dev/disk/by-label/", await fsp.readlink("/dev/disk/by-label/" + file)) === device)
							label = file;
					}
					label = label.replace("\\x20", " ");
				} catch (e) {
					label = loc;
				}
			}

			let mountDir = path.normalize("/mnt/" + process.env.USER + "/" + link);
			let item = document.createElement("button");
			let isMounted = false;
			try {
				isMounted = require("child_process").execSync(`grep -s '/mnt/${process.env.USER}/${label}' /proc/mounts`);
			} catch (e) {
			}
			item.className = "dropdown-item d-flex align-items-center";
			item.title = 'Click to mount/open drive';
			item.icon = document.createElement("icon");
			item.icon.className = "mdi mdi-18px mr-1 lh-18 mdi-usb";
			item.header = document.createElement("div");
			item.header.innerText = label || link;
			item.header.className = "text-truncate flex-grow-1"
			item.append(item.icon, item.header);
			new BSN.Tooltip(item, {placement: "right"});
			item.addEventListener('click', function () {
				if (isMounted)
					navigate(mountDir);
				else {
					let cmd = `mkdir -p '${mountDir}'; mount -o uid=${process.getuid()},gid=${process.getgid()} ${device} '${mountDir}'`;
					shell.execAsRoot(cmd, {
						title: "Authentication is needed to mount drives"
					}).then(res => {
						if (res.stderr) shell.showMessageBox({
							title: "Failed to mount drives",
							message: res.stderr
						});
						else navigate(mountDir);
					});
				}
			});
			item.addEventListener('contextmenu', function (e) {
				e.stopPropagation();
				var that = this;
				Menu.buildFromTemplate([{
					label: "Open/Mount",
					click() {
						that.click();
					}
				}, {
					label: "Unmount",
					click() {
						shell.execAsRoot("umount '" + mountDir + "'", {
							title: "Authentication is needed to unmount drives"
						}).then(renderDeviceSection);
					}
				}]).popup();
			});
			sidebar.devicesSection.append(item);
		}
	} catch (e) {
		let noItems = document.createElement("div");
		noItems.className = "dropdown-item disabled";
		noItems.innerText = "No external devices";
		sidebar.devicesSection.append(noItems);
	}
}

function renderContainer() {
	container = document.createElement("main");
	container.className = "d-flex flex-grow-1";
	renderSidebar();
	renderMain();
	win.ui.body.append(container);
	renderAccessSection();
	renderDeviceSection();
}

function renderStatusbar() {
	statusBar = document.createElement("footer");
	statusBar.className = "bg-light border-top d-flex align-items-end flex-shrink-0 rounded-bottom";
	statusBar.text = document.createElement("div");
	statusBar.text.className = "flex-grow-1 smaller p-1 text-truncate";
	statusBar.text.innerText = "Loading...";
	let drag = document.createElement("icon");
	drag.className = "mdi mdi-24px lh-24 text-muted mdi-drag float-right"
	statusBar.append(statusBar.text, drag)
	win.ui.body.append(statusBar);
}

function renderSidebar() {
	sidebar = document.createElement("aside");
	sidebar.className = "scrollable-y scrollable-x-0 " + (win.arguments.open ? "d-none" : "d-block") + " border-right py-1";
	sidebar.style.width = "25%";
	sidebar.style.maxWidth = "270px";
	sidebar.style.minWidth = "170px";
	container.append(sidebar);
	sidebar.devicesSection = document.createElement("section");
	let header = document.createElement("div");
	header.className = "dropdown-header";
	header.innerText = "Devices";
	sidebar.devicesSection.append(header);
	sidebar.append();
	sidebar.accessSection = document.createElement("section");
	sidebar.append(sidebar.accessSection, sidebar.devicesSection);
}

function renderNav() {
	nav = document.createElement('nav');
	nav.remove();
	nav.className = "btn-toolbar flex-nowrap align-items-center flex-grow-1";
	if (win.arguments.open) {
		nav.sbToggleButton = document.createElement("button");
		nav.sbToggleButton.className = "btn btn-outline-primary btn-sm mr-1 mdi mdi-menu mdi-18px lh-18";
		nav.sbToggleButton.onclick = function () {
			sidebar.classList.toggle("d-none");
			sidebar.classList.toggle("d-block");
			this.classList.toggle("active");
		};
		nav.folderButton = document.createElement("div");
		nav.folderButton.className = "btn btn-outline-primary btn-sm ml-1 mdi mdi-folder-outline mdi-18px lh-18";
		nav.folderButton.onclick = function () {
			AppWindow.launch("aos-creator", {
				path: nav.pathField.value
			}, {
				modal: true,
				parent: win
			});
		}
		nav.append(nav.sbToggleButton);
	}
	nav.backButton = document.createElement("button");
	nav.backButton.className = "btn btn-outline-primary btn-sm mdi mdi-arrow-left mdi-18px lh-18";
	nav.backButton.disabled = true;
	nav.backButton.onclick = e => navigate(":back");

	nav.forwardButton = document.createElement("button");
	nav.forwardButton.className = "btn btn-outline-primary btn-sm mdi mdi-arrow-right mdi-18px lh-18";
	nav.forwardButton.disabled = true;
	nav.forwardButton.onclick = e => navigate(":forward");

	nav.refreshButton = document.createElement("button");
	nav.refreshButton.className = "btn btn-outline-primary btn-sm mdi mdi-refresh mdi-18px lh-18";
	nav.refreshButton.onclick = e => navigate(nav.pathField.getAttribute("edited") === "true" ? nav.pathField.value : ":REFRESH");

	nav.mainBar = document.createElement("div");
	nav.mainBar.className = "btn-group align-items-stretch flex-shrink-0";
	nav.mainBar.append(nav.backButton, nav.forwardButton, nav.refreshButton);

	nav.pathField = document.createElement("input");
	nav.pathField.className = "form-control border-0 py-1 px-2 mx-2 us-0 flex-grow-1 text-center bg-transparent h-auto lh-r1";
	nav.pathField.oninput = e => nav.pathField.setAttribute("edited", "true");
	nav.pathField.setAttribute("data-draggable", "true");
	nav.pathField.style.cursor = "inherit";
	nav.pathField.addEventListener("mousedown", function (e) {
		if (nav.pathField.classList.contains("bg-transparent")) {
			e.preventDefault();
			nav.pathField.focus();
			nav.pathField.blur();
		}
	}, true);
	nav.pathField.addEventListener("dblclick", function (e) {
		e.stopPropagation();
		nav.pathField.style.pointerEvents = "initial";
		nav.pathField.setAttribute("data-draggable", "false");
		nav.pathField.classList.remove("bg-transparent", "text-center");
		nav.pathField.style.cursor = "text";
		nav.pathField.focus();
	});
	nav.pathField.addEventListener("blur", function () {
		nav.pathField.classList.add("bg-transparent", "text-center");
		nav.pathField.setAttribute("data-draggable", "true");
		nav.pathField.style.cursor = "inherit";
	})
	nav.append(nav.mainBar);
	if (win.arguments.open) nav.append(nav.folderButton);
	nav.append(nav.pathField);
	win.ui.header.prepend(nav);
	win.ui.header.classList.add("pl-1", "pr-2");
	win.ui.header.classList.remove("border-bottom", "px-2");
	win.ui.title.classList.add("d-none");
}

function renderMainMenu() {
	mainMenu = new Menu(win, [{
		label: "Duplicate",
		icon: "open-in-new",
		accelerator: "Ctrl+N",
		click() {
			AppWindow.launch("files", {
				file: nav.pathField.value
			})
		}
	}, {
		type: "separator"
	}, {
		label: "Refresh",
		icon: "refresh",
		accelerator: "F5",
		click() {
			navigate(":refresh")
		}
	}, {
		label: "Paste",
		icon: "content-paste",
		accelerator: "Ctrl+V",
		click: async function () {
			let urls = clipboard.readText().split("\n");
			let copying = new Notification(win, {
				icon: "sync",
				app: "Files",
				dismissable: false,
				title: `Copying ${urls.length} item${urls.length > 1 ? 's' : ''}`,
				message: "<div class='progress progress-bar-striped progress-bar-animated w-100 my-2 bg-primary' style='height:0.5rem'></div>",
				actions: [{
					label: "Cancel",
					click() {
						//TODO: How to do this?
					}
				}]
			});
			for (const i of urls.keys()) {
				let url = urls[i];
				await copy_r(url, path.join(nav.pathField.value, path.basename(url)));
				if (clipboard.readHTML().includes("cut"))
					await delete_r(url);
			}
			copying.dismiss();
			new Notification(win, {
				icon: "check_all",
				app: "Files",
				title: "All files successfully copied.",
				message: promises.length + " are copied to the directory."
			});
		},
		enabled: path.isAbsolute(clipboard.readText().split("\n")[0])
	}, {
		type: "separator"
	}, {
		label: "Create File",
		icon: "file-outline",
		click() {
			shell.createFile(nav.pathField.value);
		}
	}, {
		label: "Create Folder",
		icon: "folder-outline",
		click() {
			shell.createFile(nav.pathField.value, {
				defaultTab: "folder"
			});
		}
	}, {
		label: "Properties",
		icon: "details",
		accelerator: "Alt+Enter",
		click() {
			if (activeItem) activeItem.openProperties();
			else {
				// TODO: Props Window
			}
		}
	}]);
}

function renderFileMenu() {
	fileMenu = new Menu(win, [{
		label: "Open",
		click: activeItem.open,
		icon: "launch"
	}, {
		label: "Open in...",
		visible: !activeItem.isDirectory,
		click: activeItem.openWith,
		icon: "open-in-app"
	}, {
		type: ([".wapp", ".zip", ".gz", ".tgz"].includes(path.extname(activeItem.path)) || activeItem.isDirectory ? 'separator' : "normal"),
		visible: ([".wapp", ".zip", ".gz", ".tgz"].includes(path.extname(activeItem.path)) || activeItem.isDirectory)
	}, {
		label: 'Compress to...',
		icon: "package-variant-closed",
		visible: activeItem.isDirectory,
		click: activeItem.compress
	}, {
		label: 'Install',
		icon: "plus-circle-outline",
		visible: activeItem.path.endsWith(".wapp"),
		click: activeItem.install
	}, {
		label: 'Extract to...',
		icon: "package-variant",
		visible: [".zip", ".gz", ".tgz"].includes(path.extname(activeItem.path)),
		click: activeItem.extract
	}, {
		type: "separator"
	}, {
		label: "Cut",
		icon: "content-cut",
		click: activeItem.cut,
		accelerator: "Ctrl+X"
	}, {
		label: "Copy",
		icon: "content-copy",
		click: activeItem.copy,
		accelerator: "Ctrl+C"
	}, {
		type: "separator"
	}, {
		label: "Delete",
		icon: "delete-outline",
		click: activeItem.delete,
		accelerator: "Delete"
	}, {
		label: "Properties",
		icon: "details",
		click: activeItem.openProperties,
		setKeyboardEvents: false,
		accelerator: "Alt+Enter"
	}]);
}
