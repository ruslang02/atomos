const {
  AppWindow,
  Shell,
  Menu,
  Registry,
  Notification,
  Snackbar,
  Components: {
    Button,
    Spinner
  }
} = require("@api");
const win = AppWindow.getCurrentWindow();
const {
  remote: {
    clipboard
  }
} = require("electron");
const fs = require("fs");
const fsp = fs.promises;
const path = require("path");
let watcher = "",
  sidebar, spinner = new Spinner(), container, statusBar, fileMenu, nav, navigation, backFolder, notActive = false,
  main, FCBar, activeItem, mainMenu;
let history = {
  current: -1,
  items: []
};
if (!Registry.get("files.accessList")) {
  let defaultFile = fs.readFileSync(__dirname + "/default.json");
  Registry.set("files", JSON.parse(defaultFile));
}
win.ui.body.classList.add("position-relative");
win.task.menu.insert(-2, {
  label: "Edit location",
  icon: "pencil",
  click() {

    nav.pathField.dispatchEvent(new MouseEvent('dblclick', {
      'view': window,
      'bubbles': true,
      'cancelable': true
    }));
  }
});
win.task.menu.insert(-1, {
  type: "separator"
});
let settings = new Proxy(Registry.get("files"), {
  set(t, p, v) {
    t[p] = v;
    Registry.set("files", settings);
    navigate(":refresh");
    return true;
  }
});

let delete_r = async function(input) {
  let stat = await fsp.lstat(input);
  if (!stat.isDirectory()) {
    fsp.unlink(input);
  } else {
    let files = await fsp.readdir(input);
    for (const file of files) {
      let curPath = path.join(input, file);
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
  renderContainer();
  if (win.arguments.callback)
    renderFCBar();
  renderStatusbar();

  navigate(win.arguments.file || process.env.HOME).finally(() => win.show());
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

	url = path.normalize(url);
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
  if (!win.arguments.callback)
    win.setTitle(path.basename(url) + " - Files");

  sidebar.querySelectorAll(".dropdown-item").forEach(item => {
    item.classList.toggle('active', [path.basename(url), url].indexOf(item.location) >= 0)
  });

  nav.backButton.disabled = !(history.current);
  nav.forwardButton.disabled = (history.current === history.items.length - 1);
  if (!fs.existsSync(url)) {
    main.innerHTML = `
				<div class="h-100 d-flex justify-content-center align-items-center flex-column ${win.options.darkMode ? "text-white" : "text-dark"}">
				<icon class="mdi mdi-folder-remove-outline" style="font-size: 96px;line-height: 96px;-webkit-text-stroke: 4px ${win.options.darkMode ? "var(--dark)" : "white"};"></icon>
				This folder does not exist.
				<button class='btn btn-outline-primary d-flex align-items-center mt-3' onclick='require("fs").mkdir("${url}", e => new Snackbar("Directory created"))'><icon class='mdi d-flex mdi-plus mdi-18px lh-18 mr-2'></icon><div class="lh-r1">Create</div></button>
				</div>`;
    return;
  }
  statusBar.innerText = "0 elements";
  spinner.show();
  let stat = await fsp.stat(url);
  let selectFile;
  if (stat.isFile()) {
    selectFile = path.basename(url);
    url = path.dirname(url);
  }
  nav.pathField.blur();
  nav.pathField.dataset.edited = "false";
  nav.pathField.value = url;
  try {
    watcher = fs.watch(url, (a, b) => {
      if (a !== "change") navigate(":refresh")
    });
  } catch (e) {
    if (e.code === "EACCES") {
      main.innerHTML = `
				<div class="h-100 d-flex justify-content-center align-items-center flex-column ${win.options.darkMode ? "text-white" : "text-dark"}">
				<icon class="mdi mdi-cancel" style="font-size: 96px;line-height: 96px;-webkit-text-stroke: 4px ${win.options.darkMode ? "var(--dark)" : "white"};"></icon>
				Permission denied
				</div>`;
    }
    console.dir(e);
    return;
  }


  async function generateItem(file) {
    let item = document.createElement("button");
    try {
      item.stat = await fsp.lstat(file);
    } catch (e) {
      item.stat = {
        isDirectory: function() {
          return false
        },
        isFile: function() {
          return false
        },
        isUnknown: function() {
          return true
        },
        size: 0,
        atime: 0,
        mtime: 0
      };
    }
    item.draggable = true;
    item.className = 'dropdown-item px-2 py-1 rounded mb-1 d-flex align-items-center' + (win.options.darkMode ? " text-white" : "");
    item.isDirectory = item.stat.isDirectory();
    item.isShortcut = path.extname(file).substring(1).toUpperCase() === "LNK";
    item.disabled = (win.arguments.open === Shell.DIRECTORY && item.stat.isFile());
    item.path = file;

    fs.access(item.path, fs.constants.R_OK, e => item.readable = !e);
    fs.access(item.path, fs.constants.W_OK, e => item.writable = !e);
    fs.access(item.path, fs.constants.X_OK, e => item.executable = !e);

    if (item.isShortcut)
      item.shortcut = JSON.parse(await fsp.readFile(file));
    item.addEventListener("click", function() {
      if (FCBar) {
        FCBar.textField.value = item.fileName.innerHTML;
        FCBar.submitButton.disabled = (!item.isDirectory && win.arguments.open === Shell.DIRECTORY) ||
          (item.isDirectory && win.arguments.open === Shell.FILE);
      }
    });
    item.addEventListener("mousedown", function(e) {
      e.stopPropagation();
      main.childNodes.forEach(item => item.classList.remove("active"));
      item.classList.add("active");
      activeItem = item;
      renderFileMenu();
    });
    item.addEventListener('contextmenu', e => {
      e.stopPropagation();
      fileMenu.popup();
    });
    item.addEventListener('dragstart', function(e) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData("application/file", file);
      return true;
    });
    item.delete = function() {
      Shell.showMessageBox({
        window: win,
        title: "Are you sure?",
        type: "warning",
        message: `File ${path.basename(item.path)} will be deleted.`,
        buttons: ["No", "Yes"],
        defaultId: 1
      }).then(button => {
        if (button === "Yes") delete_r(item.path);
      })
    };
    item.openProperties = function() {
      let container = document.createElement("main");
      container.className = "d-flex flex-column";
      let header = document.createElement("div");
      header.className = "d-flex align-items-center mb-2";
      let icon = document.createElement("icon");
      icon.className = "mdi mdi-36px lh-36 mr-2 d-flex p-1 very-rounded";
      icon.classList.add(item.isDirectory ? "mdi-folder-outline" : "mdi-file-outline");
      icon.classList.add(item.isDirectory ? "bg-warning" : "bg-info");
      let fileName = document.createElement("input");
      fileName.className = "form-control flex-grow-1";
      fileName.value = path.basename(file);
      header.append(icon, fileName);
      let info = document.createElement("div");
      let size = document.createElement("div");
      size.innerText = "Size: " + item.stat.size + " bytes";

      function formatDate(date) {
        return new Date(date).toLocaleDateString([], {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      }

      let atime = document.createElement("div");
      atime.innerText = "Last Access Time: " + formatDate(item.stat.atime);
      let mtime = document.createElement("div");
      mtime.innerText = "Last Modification Time: " + formatDate(item.stat.mtime);
      let perms = document.createElement("div");
      perms.innerHTML = `Permissions: ${item.readable ? "readable" : "<s>readable</s>"}, ${item.writable ? "writable" : "<s>writable</s>"}, ${item.executable ? "executable" : "<s>executable</s>"}`;
      info.append(size, atime, mtime, perms);
      container.append(header, info);
      notActive = true;
      Shell.showMessageBox({
        message: container,
        type: "none"
      }).then(e => notActive = false);
    };
    item.cut = function() {
      clipboard.write({
        text: item.path,
        html: "<action>cut</action>"
      });
    };
    item.copy = function() {
      clipboard.write({
        text: item.path,
        html: "<action>copy</action>"
      });
    };
    item.install = function() {
      if (!item.isDirectory && path.extname(item.path) === ".wapp")
        Shell.installApp(item.path);
    };
    item.compress = function() {
      if (!item.isDirectory) return;
      Shell.selectFile(Shell.ACTION_SAVE, {
        buttonLabel: "Compress",
        defaultPath: nav.pathField.value
      }).then(async function(file) {
        require('tar').create({
          gzip: true,
          file: file,
          C: item.path
        }, await fsp.readdir(item.path)).then(() => new Notification({
          app: "Archive Manager",
          icon: "archive",
          title: "Archive was successfully created",
          message: "Find it in your directory listing.",
          color: "var(--success)"
        })).catch(console.error)
      })
    };
    item.extract = function() {
      if (item.isDirectory) return;
      Shell.selectFile(Shell.ACTION_FOLDER, {
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
    item.open = function() {
			if (item.isDirectory)
        navigate(file);
      else {
				if (win.arguments.callback) {
					item.click();
					sendBack();
				}
        else if (this.shortcut) {
          AppWindow.launch(item.shortcut.app, item.shortcut.args);
        } else
          Shell.openItem(file);
      }
    };
    item.openWith = function() {
      Shell.openItemIn(file);
    };
    item.addEventListener("dblclick", item.open);
    item.icon = document.createElement("icon");
    item.icon.className = "mdi mdi-18px mdi-" + (item.isDirectory ? 'folder-outline' : (item.stat.isUnknown ? 'help-rhombus-outline' : 'file-outline')) + " lh-18 mr-2";
    item.fileName = document.createElement("div");
    item.fileName.className = "scrollable-0 flex-grow-1 text-truncate";
    item.fileName.style.whiteSpace = "pre";
    item.fileName.innerText = path.basename(file);
    item.append(item.icon, item.fileName);
    if (selectFile && item.fileName.innerText === selectFile) activeItem = item;
    return item;
  }

  let files = await fsp.readdir(url);
  activeItem = undefined;
  main.innerHTML = "";
  if (files.length === 0) {
    main.innerHTML = `
			<div class="h-100 d-flex justify-content-center align-items-center flex-column ${win.options.darkMode ? "text-white" : "text-dark"}">
			<icon class="mdi mdi-folder-remove-outline" style="font-size: 96px;line-height: 96px;-webkit-text-stroke: 4px ${win.options.darkMode ? "var(--dark)" : "white"};"></icon>
			This folder is empty.
			</div>`;
		  spinner.hide();
    	statusBar.innerText = "0 elements";
    return;
  }
  let items = [];
  backFolder = await generateItem(url);
  let hCount = 0;
  for (const i of files.keys()) {
    let file = files[i];
    if (file.startsWith(".") && !settings.showHidden) {
      hCount++;
      continue;
    }
    if (files.length - hCount === 0) {
      main.innerHTML = `
			<div class="h-100 d-flex justify-content-center align-items-center flex-column ${win.options.darkMode ? "text-white" : "text-dark"}">
			<icon class="mdi mdi-folder-remove-outline" style="font-size: 96px;line-height: 96px;-webkit-text-stroke: 4px ${win.options.darkMode ? "var(--dark)" : "white"};"></icon>
			This folder is empty.
			</div>`;
		  spinner.hide();
      statusBar.innerText = `0 elements (${hcount} hidden)`;
      return;
    }
    items.push(await generateItem(path.join(url, file)));
  }
  items.sort((a, b) => {
    let o1 = a.isDirectory,
      o2 = b.isDirectory,
      p1 = a.fileName.innerText.trim().toLowerCase(),
      p2 = b.fileName.innerText.trim().toLowerCase();
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
  spinner.hide();
  statusBar.innerText = `${files.length} elements${hCount ? " (" + hCount + " hidden)" : ""}`;
  if (activeItem) {
    activeItem.focus();
    activeItem.classList.add("active");
  }
}

function renderFCBar() {
  FCBar = document.createElement("form");
  FCBar.className = "px-2 pb-2 m-0 d-flex flex-shrink-0 align-items-center";
  FCBar.onsubmit = function(e) {
    e.preventDefault();
    sendBack();
    return false;
  };
  FCBar.cancelButton = new Button({
		color: "secondary",
		shadow: true,
		text: "Cancel" || win.arguments.cancelText
	});
  FCBar.cancelButton.onclick = () => win.close();
  FCBar.cancelButton.type = "button";
  FCBar.textField = document.createElement("input");
  FCBar.textField.type = "text";
  FCBar.textField.className = "form-control mx-2 shadow-sm" + (win.options.darkMode ? " bg-dark border-secondary text-white" : "");

  let validate = () => FCBar.submitButton.disabled = !FCBar.textField.value.trim();

  FCBar.textField.oninput = validate;
  FCBar.textField.onchange = validate;
  FCBar.submitButton = new Button({
		color: "primary",
		shadow: true,
		text: "Open" || win.arguments.buttonLabel
	});
  FCBar.submitButton.type = "submit";
  FCBar.append(FCBar.cancelButton, FCBar.textField, FCBar.submitButton);
  win.ui.body.append(FCBar);
}

async function sendBack() {
  let file = path.join(nav.pathField.value, FCBar.textField.value);
  let exists = fs.existsSync(file);

  function send() {
    win.arguments.callback(file);
    win.close();
  }

  if (!exists) {
    if (win.arguments.open === Shell.FILE) {
      if (win.arguments.checkFileExists) {
        new Snackbar("File does not exist")
      } else send();
    } else if (win.arguments.open === Shell.DIRECTORY) {
      if (win.arguments.createDirectory)
        await fsp.mkdir(file);
      send();
    }
  } else {
    if (win.arguments.open === Shell.FILE) {
      if (win.arguments.overwritePrompt) {
        Shell.showMessageBox({
          type: "warning",
          buttons: ["Cancel", "Overwrite"],
          defaultId: 1,
          message: `File "${FCBar.textField.value}" already exists and <b>will be overwriten</b>.<br /> Continue?`
        }).then(result => {
          if (result === "Overwrite") send();
        });
      } else send();
    } else if (win.arguments.open === Shell.DIRECTORY) send();
  }
}

function renderMain() {
	let contain = document.createElement("section");
	contain.className = "shadow-sm very-rounded flex-grow-1 mx-2 mb-2 scrollable-0 position-relative " + (win.options.darkMode ? "bg-dark" : "bg-white");
  main = document.createElement("div");
  main.className = "scrollable-y h-100 p-2";
  main.oncontextmenu = e => {
    e.stopPropagation();
    renderMainMenu();
    mainMenu.popup();
  };
  main.onmousedown = () => {
    if (!activeItem) return;
    activeItem.classList.remove("active");
    activeItem = undefined;
  };
	contain.append(spinner, main);
  container.append(contain);
}

async function renderAccessSection() {
  settings.accessList.forEach(function(item) {
    let dItem;
    if (item.type === "item") {
      let location = item.location.replace("$HOME_DIR", process.env.HOME).replace("$SYSTEM_ROOT", osRoot);
      dItem = document.createElement("button");
      dItem.className = 'dropdown-item d-flex py-2 rounded-right-pill align-items-center' + (win.options.darkMode ? " text-white" : "");
      dItem.onclick = e => navigate(location);
			dItem.onmousedown = dItem.onmousemove = e => e.stopPropagation();
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
  sidebar.devicesSection.innerHTML = "<div class='dropdown-header'>Devices</div>";
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
      let that = this;
      try {
        let cmd = `grep -s '/mnt/${process.env.USER}/${link}' /proc/mounts`;
        isMounted = require("child_process").execSync(cmd);
      } catch (e) {}
      item.className = "dropdown-item rounded-right-pill d-flex align-items-center" + (win.options.darkMode ? " text-white" : "");
      item.icon = document.createElement("icon");
      item.icon.className = "mdi mdi-18px mr-1 lh-18 mdi-usb";
      item.header = document.createElement("div");
      item.header.innerText = label || link;
      item.header.className = "text-truncate flex-grow-1";
			item.onmousedown = item.onmousemove = e => e.stopPropagation();
      item.menu = new Menu([{
        label: "Open/Mount",
        click() {
          that.click();
        }
      }, {
        label: "Unmount",
        click() {
          Shell.execAsRoot("umount '" + mountDir + "'", {
            title: "Authentication is needed to unmount drives"
          }).then(renderDeviceSection);
        }
      }]);
      item.append(item.icon, item.header);
      item.addEventListener('click', function() {
        if (isMounted)
          navigate(mountDir);
        else {
          let cmd = `mkdir -p '${mountDir}'; mount -o uid=${process.getuid()},gid=${process.getgid()} ${device} '${mountDir}'`;
          Shell.execAsRoot(cmd, {
            title: "Authentication is needed to mount drives"
          }).then(res => {
            if (res.stderr) Shell.showMessageBox({
              title: "Failed to mount drives",
              message: res.stderr
            });
            else navigate(mountDir);
          });
        }
      });
      item.addEventListener('contextmenu', function(e) {
        item.menu.popup();
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
  container.style.height = 0;
  renderSidebar();
  renderMain();
  win.ui.body.append(container);
  renderAccessSection();
  renderDeviceSection();
}

function renderStatusbar() {
  statusBar = document.createElement("footer");
  statusBar.className = "m-2 px-2 py-1 position-absolute border" + (win.options.darkMode ? " text-white border-secondary bg-dark" : " bg-light text-dark");
  statusBar.style.bottom = win.arguments.callback ? CSS.rem(3) : CSS.px(0);
  statusBar.style.right = 0;
  statusBar.style.borderRadius = ".5rem 0 .5rem 0";
	statusBar.innerText = "0 elements";
  win.ui.body.append(statusBar);
}

function renderSidebar() {
  sidebar = document.createElement("aside");
  sidebar.className = "scrollable-y w-25 scrollable-x-0 " + (win.arguments.open ? "d-none" : "d-block") + " py-1";
  sidebar.dataset.draggable = "true";
  sidebar.style.maxWidth = "270px";
  sidebar.style.minWidth = "170px";
  container.append(sidebar);
  sidebar.devicesSection = document.createElement("section");
  sidebar.append();
  sidebar.accessSection = document.createElement("section");
  sidebar.append(sidebar.accessSection, sidebar.devicesSection);
}

function renderNav() {
  nav = {
    backButton: new Button({
      size: "sm",
      icon: "arrow-left",
      color: win.options.darkMode ? "dark" : "light",
      disabled: true,
			tooltip: "Back",
			addClasses: "m-0 border-0"
    }),
    forwardButton: new Button({
      size: "sm",
      icon: "arrow-right",
      color: win.options.darkMode ? "dark" : "light",
      disabled: true,
			tooltip: "Forward",
			addClasses: "m-0 border-0"
    }),
    folderButton: new Button({
      size: "sm",
      icon: "folder-plus-outline",
      color: win.options.darkMode ? "dark" : "light",
      shadow: true,
      tooltip: "New folder"
    }),
    refreshButton: new Button({
      size: "sm",
      icon: "refresh",
      color: win.options.darkMode ? "dark" : "light",
      tooltip: "Refresh",
      addClasses: "input-group-append"
    }),
    inputGroup: document.createElement("form"),
    mainBar: document.createElement("div"),
    pathField: document.createElement("input")
  };
  navigation = document.createElement('nav');
  navigation.className = "d-flex align-items-stretch flex-grow-1";

  nav.backButton.onclick = () => navigate(":back");
  nav.forwardButton.onclick = () => navigate(":forward");

  nav.mainBar.className = "btn-group align-items-stretch flex-shrink-0 mr-2 shadow-sm";
  nav.mainBar.ondblclick = e => e.stopPropagation();
  nav.mainBar.dataset.draggable = false;
  nav.mainBar.append(nav.backButton, nav.forwardButton);

  nav.folderButton.onclick = () => Shell.createFile(nav.pathField.value, "folder");
  nav.folderButton.dataset.draggable = false;

  nav.refreshButton.type = "submit";
  nav.refreshButton.dataset.draggable = false;
  nav.refreshButton.onclick = () => {
    navigate(nav.pathField.dataset.edited === "true" ? nav.pathField.value : ":REFRESH");
  };
  nav.refreshButton.ondblclick = e => e.stopPropagation();
  nav.inputGroup.className = "input-group shadow-sm flex-grow-1 ml-2";
  nav.pathField.className = "form-control border-0 h-100 shadow-none px-2 us-0 flex-grow-1 text-center" + (win.options.darkMode ? " bg-dark text-white" : " bg-light");
  nav.pathField.oninput = () => nav.pathField.dataset.edited = "true";
  nav.pathField.style.zIndex = -1;
  nav.pathField.dataset.editMenu = false;

	function kek(e) {
		e.stopPropagation()
	}
  nav.pathField.addEventListener("dblclick", function(e) {
    e.stopPropagation();
    nav.pathField.dataset.editMenu = true;
		nav.pathField.addEventListener("mousedown", kek);
		nav.pathField.addEventListener("mousemove", kek);
    nav.pathField.classList.remove("text-center");
    nav.inputGroup.classList.replace("shadow-sm", "shadow");
    nav.pathField.style.zIndex = 0;
    nav.pathField.focus();
  });
  nav.pathField.addEventListener("contextmenu", e => {
    if (nav.pathField.dataset.editMenu === "true") e.stopPropagation()
  });
  nav.pathField.addEventListener("blur", function() {
    if (document.querySelector("menu.dropdown-menu")) return;
    nav.pathField.classList.add("text-center");
    nav.inputGroup.classList.replace("shadow", "shadow-sm");
    nav.pathField.style.zIndex = -1;
		nav.pathField.removeEventListener("mousedown", kek);
		nav.pathField.removeEventListener("mousemove", kek);
    nav.pathField.dataset.editMenu = false;
  });
	nav.inputGroup.append(nav.pathField, nav.refreshButton);
  navigation.append(nav.mainBar, nav.folderButton, nav.inputGroup);
  win.ui.header.prepend(navigation);
  win.ui.title.classList.add("d-none");
  window.addEventListener("keydown", e => {
    if (!win.isFocused() || win.isDestroyed()) return;
    if (e.ctrlKey) {
      if (e.code === "ArrowLeft") nav.backButton.click();
      if (e.code === "ArrowRight") nav.forwardButton.click();
      if (e.code === "KeyN") nav.folderButton.click();
      if (e.code === "KeyV") mainMenu.getMenuItemById("paste").click();
    }
    if (e.altKey) {
      if (e.code === "Enter") mainMenu.getMenuItemById("openProperties").click();

    }
    if (e.code === "F5") nav.refreshButton.click();
  })
}

function renderMainMenu() {
  mainMenu = new Menu([{
    label: "Duplicate",
    icon: "open-in-new",
    click() {
      AppWindow.launch("@atomos/files", {
        file: nav.pathField.value
      })
    }
  }, {
    label: "Open in Terminal",
    icon: "console-line",
    click() {
      AppWindow.launch("@atomos/terminal", {
        cwd: nav.pathField.value
      })
    }
  }, {
    type: "separator"
  }, {
    label: "Refresh",
    icon: "refresh",
    click() {
      navigate(":refresh")
    }
  }, {
    label: "Paste",
    id: "paste",
    icon: "content-paste",
    click: async function() {
      let url = clipboard.readText();
      if (!path.isAbsolute(url) || !fs.existsSync(url) || document.activeElement === nav.pathField || notActive) return;
      let copied = 0;
      let notif = new Notification("Copied 0 items", {
        sticky: false,
        quiet: true,
        message: "<div class='progress progress-bar-striped progress-bar-animated w-100 my-2 bg-primary' style='height:0.5rem'></div>"
      });
      let copy_r = async function(src, dest) {
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
        copied++;
      };
      let count = setInterval(e => {
        notif.title = `Copied ${copied} item${copied > 1 ? "s" : ""}`
      }, 1000);
      await copy_r(url, path.join(nav.pathField.value, path.basename(url)));
      if (clipboard.readHTML().includes("cut"))
        await delete_r(url);
      notif.title = "All files successfully copied";
      notif.message = `${copied} item${copied > 1 ? "s" : ""} are copied to the directory.`;
      clearInterval(count);
    },
    enabled: path.isAbsolute(clipboard.readText().split("\n")[0])
  }, {
    type: "separator"
  }, {
    label: "Show hidden files",
    checked: settings.showHidden,
    type: "checkbox",
    click(ch) {
      settings.showHidden = ch;
    }
  }, {
    type: "separator"
  }, {
    label: "Create File",
    icon: "file-outline",
    click() {
      Shell.createFile(nav.pathField.value);
    }
  }, {
    label: "Properties",
    icon: "details",
    id: "openProperties",
    click() {
      (activeItem || backFolder).openProperties()
    }
  }]);
}

function renderFileMenu() {
  fileMenu = new Menu([{
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
