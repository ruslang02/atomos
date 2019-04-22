const path = require("path"),
  fs = require("fs"),
  fsp = fs.promises,
  {
    remote
  } = require("electron"),
  {
    screen,
    getCurrentWindow
  } = remote,
  win = getCurrentWindow(),
  os = require("os"),
  proc = require("child_process");
const Registry = require(`@api/Registry`);
module.exports = class Shell2 {
  static get ui() {
    return {
      fadeAnimation: Registry.get("system.fadeAnimationDuration") || 150,
      flyAnimation: Registry.get("system.flyAnimationDuration") || 200,
      darkMode: Registry.get("system.isDarkMode") || false
    }
  }
};
const AppWindow = require("@api/WindowManager");

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
};

let delete_r = async function(input) {
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
};

class Shell {
  static get ui() {
    return {
      fadeAnimation: Registry.get("system.fadeAnimationDuration") || 150,
      flyAnimation: Registry.get("system.flyAnimationDuration") || 200,
      darkMode: Registry.get("system.isDarkMode") || false
    }
  }

  static getCursorScreenPoint() {
    let point = screen.getCursorScreenPoint();
    let pos = win.getContentBounds();
    return {
      x: (point.x - pos.x) / window.zoomFactor,
      y: (point.y - pos.y) / window.zoomFactor
    };
  }

  static uniqueId() {
    let uuid = 'u' + Math.random().toString(36).substr(2, 9);
    if (document.getElementById(uuid))
      return Shell.uniqueId();
    else return uuid;
  }

  static async openItem(file) {
    let settings = Registry.get("system");
    settings.associations = settings.associations || {};
    let extension = path.extname(file).toLowerCase().trim();
    if (settings.associations[extension]) {
      AppWindow.launch(settings.associations[extension], {
        file: file
      }).then(e => (Shell.isDebug ? console.log(settings.associations[extension], extension, e) : ""));
      return true;
    } else return Shell.openItemIn(file);
  }

  static async installApp(file) {
    let tempPath = path.join(os.homedir(), ".aos-appinstall");
    await fsp.mkdir(tempPath);
    console.log(file, tempPath);
    require('tar').x({
      C: tempPath,
      f: file
    }, async function(err) {
      if (err) {
        console.error(err);
        return;
      }
      let pkg = await fsp.readFile(path.join(tempPath, "package.json"));
      let info = JSON.parse(pkg.toString());
      copy_r(tempPath, path.join(osRoot, "apps", info.name.replace("@atomos", "official"))).then(() => {
        new Notification({
          icon: "done",
          message: "It is ready to be launched.",
          app: "App Installer",
          title: (info.productName || info.name) + " is installed",
          color: "var(--success)"
        });

      });
    });
  }

  static openSettings(section) {
    Elements.MenuBar.open();
    Elements.MenuBar.notifications.classList.remove("show");
    setTimeout(() => {
      Elements.MenuBar.settings = document.createElement("section");
      Elements.MenuBar.settings.className = "card shadow fade scrollable-0 position-absolute very-rounded w-100 " + (Shell.ui.darkMode ? "bg-dark text-white" : "");
      Elements.MenuBar.settings.style.zIndex = 100;
      if (Shell.isMobile) {
        Elements.MenuBar.settings.style.top = 0;
        Elements.MenuBar.settings.style.left = 0;
        Elements.MenuBar.settings.classList.add("flex-column-reverse")
      }
      setTimeout(() => Elements.MenuBar.settings.classList.add("show"), Shell.ui.fadeAnimation);
      Elements.MenuBar.settings.style.height = "450px";
      fs.promises.readFile(path.join(osRoot, "apps", "official/settings", "settings.js")).then(code => {
        new Function('root', 'sectionToOpen', code.toString())(Elements.MenuBar.settings, section);
      });
      Elements.MenuBar.prepend(Elements.MenuBar.settings);
    }, Shell.ui.fadeAnimation);
  }

  static selectFile(action, options) { // TODO: Custom Places as in .NET, multiselect
    return new Promise(resolve => {
      let args = Object.assign({
        createDirectory: action !== 0,
        overwritePrompt: action === 1,
        checkFileExists: action === 0,
        defaultPath: process.env.HOME,
        buttonLabel: action === 1 ? "Save" : "Select",
        showHiddenFiles: false,
        open: action !== 2 ? Shell.FILE : Shell.DIRECTORY,
        showInput: action !== 0,
        filter: [{
          name: "All Files",
          extenstions: ['*']
        }]
      }, options, {
        callback(file) {
          resolve(file);
        }
      });
      Object.assign(args, {
        file: path.normalize(args.defaultPath)
      });
      AppWindow.launch("official/files", args, {
        parent: AppWindow.getFocusedWindow(),
        modal: true
      })

    })
  }

  static showItemInFolder(file) {
    AppWindow.launch("official/files", {
      file: file
    });
  }

  static openExternal(url) {
    AppWindow.launch("official/proton", {
      file: url
    });
  }

  static isDefaultApp(eg, prog) { // extension or generic
    if (!prog) prog = AppWindow.getFocusedWindow().app;
    if (eg.startsWith("."))
      return (Registry.get("system.associations") || {})[eg] === prog;
    else
      return (Registry.get("system.defaultApps") || {})[eg] === prog;
  }

  static setAsDefaultApp(eg, prog) {
    return new Promise(async function(resolve) {

      if (!prog) prog = AppWindow.getFocusedWindow().app;
      let pkg = JSON.parse(await fsp.readFile(path.join(osRoot, "apps", prog, "package.json")));
      Shell.showMessageBox({
        type: "question",
        buttons: ["No", "Yes"],
        defaultId: 1,
        cancelId: 0,
        title: "Do you wish to set " + pkg.productName + " as your default \"" + eg + "\" application?",
        message: "You can always change this in the Settings panel."
      }).then(button => {
        if (button === "Yes") {
          if (eg.startsWith("."))
            Registry.set("system.associations." + eg, prog);
          else
            Registry.set("system.defaultApps." + eg, prog);
          resolve(true);
        } else resolve(false);
      })
    })
  }

  static removeAsDefaultApp(eg, prog) {
    if (!prog) prog = AppWindow.getFocusedWindow().app;
    let settings = Registry.get("system");
    if (eg.startsWith(".")) {
      if (!settings.associations) settings.associations = [];
      settings.associations.splice(eg, 1);
    } else {
      if (!settings.associations) settings.defaultApps = [];
      settings.defaultApps.splice(eg, 1);
    }
    Registry.set("system", settings);
  }

  static isAppInstalled(app) {
    return fs.existsSync(path.join(osRoot, "apps", app, "package.json"));
  }

  static execAsRoot(command, options = {}) {
    return new Promise((resolve, reject) => {

      let modal = document.createElement("form");
      modal.dialog = document.createElement("main");
      modal.content = document.createElement("fieldset");
      modal.footer = document.createElement("div");
      let confirmButton = document.createElement("button");
      let cancelButton = document.createElement("button");
      let password = document.createElement("input");
      let errorText = document.createElement("div");

      modal.className = "modal fade";
      modal.tabIndex = -1;
      modal.setAttribute("aria-hidden", "true");
      modal.dialog.className = "modal-dialog justify-content-center modal-dialog-centered";
      modal.dialog.style.maxWidth = "unset";
      modal.content.className = "modal-content";
      modal.content.style.width = "auto";
      modal.footer.className = "modal-footer";

      confirmButton.className = "btn btn-primary ml-2 flex-shrink-0";
      cancelButton.className = "btn btn-secondary ml-2 flex-shrink-0";
      confirmButton.innerText = "Confirm".toLocaleString();
      cancelButton.innerText = "Cancel".toLocaleString();
      confirmButton.type = "submit";
      cancelButton.type = "button";

      errorText.className = "text-danger font-weight-bold flex-grow-1 smaller lh-r1";
      cancelButton.addEventListener("click", () => modal.controller.hide());
      modal.addEventListener('hidden.bs.modal', () => {
        reject("User rejected to run command as root.");
        modal.remove();
      }, false);
      modal.addEventListener("submit", e => {
        e.preventDefault();
        command = command.replace('\'', '\\\'');
        let cmd = 'echo \'' + password.value + '\' | sudo -k -S -- sh -c \'' + command + '\'';
        console.log(cmd);
        modal.content.disabled = true;
        proc.exec(cmd, {
          cwd: options.cwd || "/"
        }, function(error, stdout, stderr) {
          console.log(arguments);
          modal.content.disabled = false;
          stderr = stderr.replace("[sudo] password for " + process.env.USER + ": ", "");
          if (stderr.includes("incorrect password")) {
            errorText.innerText = "The password you entered is incorrect.".toLocaleString();
            return;
          }
          if (stderr.trim().startsWith("sudo:"))
            stderr = "";
          else {
            resolve({
              error: error,
              stdout: stdout,
              stderr: stderr
            });
            modal.controller.hide();
          }
        })
      });


      let container = document.createElement("div");
      let glyphContainer = document.createElement("div");
      let glyph = document.createElement("icon");
      glyph.className = "mdi mdi-shield-outline mdi-36px p-2 lh-36 d-flex text-white rounded-circle";
      glyph.style.background = "var(--orange)";
      let main = document.createElement("div");
      let header = document.createElement("h5");
      let message = document.createElement("div");
      container.className = "modal-body d-flex";
      glyphContainer.className = "flex-shrink-0 mr-3";
      main.className = "flex-grow-1 d-flex flex-column";
      header.innerText = (options.title || "App wants to run command as an administrator").toLocaleString();
      message.innerText = (options.message || "Type administrator password to proceed").toLocaleString();
      password.className = "form-control mt-3";
      password.autofocus = true;
      password.type = "password";
      main.append(header, message, password);
      glyphContainer.append(glyph);
      container.append(glyphContainer, main);


      modal.footer.append(errorText, cancelButton, confirmButton);
      modal.content.append(container, modal.footer);
      modal.dialog.append(modal.content);
      modal.append(modal.dialog);
      document.body.append(modal);
      modal.controller = new Modal(modal);
      modal.controller.show();
      password.focus();
    });
  }

  static createFile(baseDir, defaultTab) {
    return new Promise((resolve, reject) => {
      let modal = document.createElement("form");
      modal.dialog = document.createElement("main");
      modal.content = document.createElement("fieldset");
      modal.footer = document.createElement("div");
      let confirmButton = document.createElement("button");
      let cancelButton = document.createElement("button");
      let container = document.createElement("div");
      container.className = "modal-body d-flex flex-column";
      let nav = document.createElement("nav");
      nav.className = "nav nav-pills nav-fill";

      function generate() {
        let elem = document.createElement("a");
        elem.tab = document.createElement("section");
        elem.tab.className = "flex-grow-1 d-none mt-3 flex-wrap align-items-center";
        elem.className = "nav-item nav-link flex-grow-1 w-25";
        elem.href = "#";
        elem.addEventListener("click", function() {
          container.querySelectorAll("a").forEach(item => {
            item.classList.remove("active");
            item.tab.classList.replace("d-flex", "d-none");
            item.tab.input.value = "";
            item.tab.input.classList.remove("is-invalid");
            confirmButton.disabled = true;
          });
          elem.classList.add("active");
          elem.tab.classList.replace("d-none", "d-flex");
        });
        elem.tab.icon = document.createElement("icon");
        elem.tab.icon.className = "mdi mdi-24px lh-24 p-2 d-flex rounded-circle bg-info text-white mdi-file-outline mr-3";
        elem.tab.input = document.createElement("input");
        elem.tab.input.className = "form-control w-25 flex-grow-1" + (Shell.ui.darkMode ? " bg-secondary text-white" : "");
        elem.tab.invalidLabel = document.createElement("div");
        elem.tab.invalidLabel.className = "invalid-feedback ml-5 pl-3";
        elem.tab.input.addEventListener("input", function() {
          elem.tab.input.classList.remove("is-invalid");
          confirmButton.disabled = false;

          if (!elem.tab.input.value.trim()) {
            elem.tab.invalidLabel.innerText = "Required field.".toLocaleString();
          } else if (fs.existsSync(path.join(baseDir, elem.tab.input.value)))
            elem.tab.invalidLabel.innerText = "This name already exists in this folder.";
          else return;
          elem.tab.input.classList.add("is-invalid");
          confirmButton.disabled = true;
        });
        elem.tab.append(elem.tab.icon, elem.tab.input, elem.tab.invalidLabel);
        return elem;
      }

      let file = generate();
      file.innerText = "File".toLocaleString();

      let folder = generate();
      folder.innerText = "Folder".toLocaleString();
      folder.tab.icon.classList.add("text-black", "bg-warning", "mdi-folder-outline");
      folder.tab.icon.classList.remove("bg-info", "mdi-file-outline", "text-white");

      nav.append(file, folder);
      container.append(nav, file.tab, folder.tab);
      if (defaultTab)
        eval(defaultTab + ".click()");
      else file.click();

      modal.className = "modal fade";
      modal.tabIndex = -1;
      modal.setAttribute("aria-hidden", "true");
      modal.dialog.className = "modal-dialog modal-dialog-centered";
      modal.content.className = "modal-content" + (Shell.ui.darkMode ? " bg-dark text-white" : "");
      modal.footer.className = "modal-footer" + (Shell.ui.darkMode ? " border-secondary" : "");

      confirmButton.className = "btn btn-primary ml-2 flex-shrink-0";
      cancelButton.className = "btn btn-secondary ml-2 flex-shrink-0";
      confirmButton.innerText = "Create".toLocaleString();
      cancelButton.innerText = "Cancel".toLocaleString();
      confirmButton.type = "submit";
      cancelButton.type = "button";
      modal.footer.append(cancelButton, confirmButton);
      modal.content.append(container, modal.footer);
      modal.dialog.append(modal.content);
      modal.append(modal.dialog);
      document.body.append(modal);
      modal.controller = new Modal(modal);
      modal.controller.show();
      cancelButton.addEventListener("click", modal.controller.hide);
      confirmButton.addEventListener("click", () => {
        modal.addEventListener("hidden.bs.modal", () => {
          modal.remove();
        });
        modal.controller.hide();
        if (file.classList.contains("active")) {
          let newFile = path.join(baseDir, file.tab.input.value);
          fsp.writeFile(newFile, "", "utf-8").catch(reject).then(() => resolve(newFile));
        } else {
          let newFolder = path.join(baseDir, folder.tab.input.value);
          fsp.mkdir(newFolder).catch(reject).then(() => resolve(newFolder));
        }

      });
    })

  }

  static async openItemIn(file, options = {
    checked: false
  }) {

    let modal = document.createElement("div");
    modal.dialog = document.createElement("div");
    modal.content = document.createElement("main");
    modal.apps = document.createElement("div");
    modal.footer = document.createElement("div");
    modal.header = document.createElement("div");
    modal.selectButton = document.createElement("button");
    modal.cancelButton = document.createElement("button");
    modal.defaultCheckbox = document.createElement("div");

    modal.defaultCheckbox.className = "custom-control custom-checkbox flex-grow-1 align-items-center d-flex ml-2";
    modal.defaultCheckbox.check = document.createElement("input");
    modal.defaultCheckbox.check.checked = options.checked;
    modal.defaultCheckbox.check.type = "checkbox";
    modal.defaultCheckbox.check.className = "custom-control-input";
    modal.defaultCheckbox.check.id = Shell.uniqueId(); // https://gist.github.com/gordonbrander/2230317

    if (!path.extname(file).includes(".")) {
      modal.defaultCheckbox.check.checked = false;
      modal.defaultCheckbox.check.disabled = true;
    }

    modal.defaultCheckbox.label = document.createElement("label");
    modal.defaultCheckbox.label.innerText = "Make default".toLocaleString();
    modal.defaultCheckbox.label.className = "custom-control-label flex-grow-1";
    modal.defaultCheckbox.label.htmlFor = modal.defaultCheckbox.check.id;

    modal.className = "modal fade";
    modal.tabIndex = -1;
    modal.setAttribute("aria-hidden", "true");

    modal.dialog.className = "modal-dialog modal-dialog-centered";
    modal.content.className = "modal-content" + (Shell.ui.darkMode ? " bg-dark text-white" : " bg-light");
    modal.apps.className = " py-2 m-3 rounded scrollable-y" + (Shell.ui.darkMode ? " bg-secondary border border-secondary text-white" : "bg-white shadow");
    modal.apps.style.maxHeight = "400px";
    modal.apps.style.minHeight = "200px";
    modal.header.className = "text-muted px-3 pt-3 ml-1";
    modal.header.innerText = "Open file in".toLocaleString() + "...";
    modal.footer.className = "modal-footer" + (Shell.ui.darkMode ? " border-secondary" : "");
    modal.selectButton.className = "btn btn-primary ml-2";
    modal.cancelButton.className = "btn btn-secondary ml-2";
    modal.selectButton.innerText = "Launch".toLocaleString();
    modal.selectButton.disabled = true;
    modal.cancelButton.innerText = "Cancel".toLocaleString();

    async function scanApps(dir) {
      let dirs = await fsp.readdir(dir);
      for (const item of dirs) {
        let itemPath = path.join(dir, item);
        let stat = await fsp.lstat(itemPath);
        if (stat.isDirectory()) {
          await scanApps(itemPath);
          continue;
        } else if (item.trim().toLowerCase() !== "package.json") continue;
        try {
          let json = await fsp.readFile(itemPath);
          let pkg = JSON.parse(json.toString());
          if (pkg.hidden || pkg.type !== "app")
            continue;
          let elem = document.createElement("button");
          elem.appID = pkg.name;
          elem.className = "dropdown-item d-flex align-items-center px-2";
          elem.icon = document.createElement("icon");
          elem.icon.className = "mr-2 very-rounded p-1 lh-18 mdi-18px d-flex mdi shadow text-white mdi-" + pkg.icon;
          elem.icon.style.background = pkg.color;
          elem.app = document.createElement("div");
          elem.app.innerText = pkg.productName || pkg.name;
          elem.app.className = "flex-grow-1 text-truncate";
          elem.append(elem.icon, elem.app);
          elem.addEventListener("click", () => {
            modal.apps.childNodes.forEach(item => item.classList.remove("active"));
            elem.classList.add("active");
            modal.selectButton.disabled = false;
          });
          modal.apps.appendChild(elem);
        } catch (e) {
          console.error(item, "not loaded, because configuration file is missing.");
        }
      }
    }

    await scanApps(path.join(osRoot, "apps"));
    modal.defaultCheckbox.append(modal.defaultCheckbox.check, modal.defaultCheckbox.label);
    modal.footer.append(modal.defaultCheckbox, modal.cancelButton, modal.selectButton);
    modal.content.append(modal.header, modal.apps, modal.footer);
    modal.dialog.append(modal.content);
    modal.append(modal.dialog);
    document.body.append(modal);
    let control = new Modal(modal);
    modal.cancelButton.addEventListener("click", control.hide);
    modal.selectButton.addEventListener("click", () => {
      control.hide();
      let reg = Registry.get("system.associations") || [];
      if (modal.defaultCheckbox.check.checked)
        reg[path.extname(file)] = modal.apps.querySelector(".active").appID;
      AppWindow.launch(modal.apps.querySelector(".active").appID, {
        file: file
      });
      Registry.set("system.associations", reg);
    });
    control.show();
  }

  static showMessageBox(options) {
    return new Promise(resolve => {

      options = Object.assign({}, defaultOptions, options);

      let modal = document.createElement("message-box");
      modal.addEventListener("mousedown", e => e.stopPropagation());
      modal.addEventListener("click", e => e.stopPropagation());
      modal.dialog = document.createElement("form");
      modal.content = document.createElement("main");
      modal.body = document.createElement("div");
      modal.footer = document.createElement("div");
      modal.header = document.createElement("h5");
      modal.dialog.className = "modal-dialog modal-dialog-centered";
      modal.content.className = "modal-content shadow-lg" + (Shell.ui.darkMode ? " bg-dark text-white" : "");
      modal.body.className = "modal-body d-flex";
      modal.header.innerText = options.title.toLocaleString();
      modal.header.className = "mb-1";
      modal.footer.className = "modal-footer" + (Shell.ui.darkMode ? " border-secondary" : "");
      modal.className = "modal fade";
      modal.tabIndex = -1;
      modal.setAttribute("aria-hidden", "true");
      let container = document.createElement("div");
      if (typeof options.message === "string") container.innerHTML = options.message.toLocaleString();
      else
        container.append(options.message);
      container.className = "flex-grow-1";
      modal.body.append(container);
      let customCheckbox = document.createElement("div");
      customCheckbox.checkbox = document.createElement("input");
      customCheckbox.label = document.createElement("label");
      customCheckbox.className = "custom-control custom-checkbox flex-grow-1";
      customCheckbox.checkbox.className = "custom-control-input";
      customCheckbox.checkbox.checked = options.checkboxChecked;
      customCheckbox.checkbox.type = "checkbox";
      customCheckbox.checkbox.id = Shell.uniqueId();
      customCheckbox.label.htmlFor = customCheckbox.checkbox.id;
      customCheckbox.label.innerText = options.checkboxLabel;
      customCheckbox.label.className = "custom-control-label";
      customCheckbox.append(customCheckbox.checkbox, customCheckbox.label);
      for (const i of options.buttons.keys()) {
        let send = function() {
          if (options.checkboxLabel)
            resolve([options.buttons[i], customCheckbox.checkbox.checked]);
          else resolve(options.buttons[i]);
        };
        let button = document.createElement("button");
        button.className = "btn " + (options.defaultId === i ? "btn-primary" : "btn-secondary");
        button.style.minWidth = CSS.px(60);
        button.innerHTML = options.buttons[i].toLocaleString();
        button.realText = options.buttons[i];
        button.type = options.defaultId === i ? "submit" : "button";
        modal.footer.append(button);
        button.addEventListener("click", function() {
          send();
          if (options.cancelId === i)
            modal.controller.hide();
          modal.addEventListener("hidden.bs.modal", modal.remove);
          modal.controller.hide();
        });
        if (options.defaultId === i) {
          modal.dialog.addEventListener("submit", e => {
            e.preventDefault();
            send();
            modal.addEventListener("hidden.bs.modal", modal.remove);
            modal.controller.hide();
          });
        }
        if (options.cancelId === i)
          modal.addEventListener("hidden.bs.modal", () => send())
      }
      switch (options.type) {
        case "info":
          options.icon = options.icon || "information-outline";
          options.iconBG = options.iconBG || "var(--info)";
          break;
        case "error":
          options.icon = options.icon || "fire";
          options.iconBG = options.iconBG || "var(--danger)";
          break;
        case "question":
          options.icon = options.icon || "help";
          options.iconBG = options.iconBG || "var(--secondary)";
          break;
        case "warning":
          options.icon = options.icon || "alert-outline";
          options.iconBG = options.iconBG || "var(--warning)";
          break;
        default:
          options.iconBG = options.iconBG || "var(--primary)";
      }

      if (options.icon) {
        let icon = document.createElement("icon");
        icon.className = "mdi mdi-36px lh-36 p-2 d-flex rounded-circle text-white mdi-" + options.icon;
        icon.style.background = options.iconBG;
        let iconContainer = document.createElement("div");
        iconContainer.className = "flex-shrink-0 mr-3";
        iconContainer.append(icon);
        modal.body.prepend(iconContainer);
      }

      if (options.checkboxLabel)
        modal.footer.prepend(customCheckbox);
      container.prepend(modal.header);
      modal.content.append(modal.body, modal.footer);
      modal.dialog.append(modal.content);
      modal.append(modal.dialog);
      document.body.append(modal);
      modal.controller = new Modal(modal, {
        backdrop: options.backdrop
      });
      modal.controller.show();
    })
  }
}

module.exports = Shell;
const defaultOptions = {
  type: "none",
  buttons: ["OK"],
  defaultId: 0,
  cancelId: 0,
  title: "",
  message: "",
  checkboxLabel: "",
  checkboxChecked: false,
  backdrop: true,
  icon: "",
  iconBG: ""
};
Object.defineProperty(Shell, "ACTION_OPEN", {
  value: 0
});
Object.defineProperty(Shell, "ACTION_SAVE", {
  value: 1
});
Object.defineProperty(Shell, "FILE", {
  value: 0
});
Object.defineProperty(Shell, "DIRECTORY", {
  value: 1
});
Object.defineProperty(Shell, "ACTION_FOLDER", {
  value: 2
});
Object.defineProperty(Shell, "isMobile", {
  value: require("electron").remote.getGlobal("isMobile")
});
Object.defineProperty(Shell, "isDebug", {
  value: require("electron").remote.getGlobal("isDebug")
});
if (Shell.ui.darkMode) document.body.classList.add("dark");
