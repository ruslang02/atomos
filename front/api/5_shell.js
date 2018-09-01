const path = require("path");
const fs = require("fs-extra");
const proc = require("child_process");
let registry = new Registry("system");
window.shell = class Shell {
  static async openItem(file) {
    let settings = registry.get();
    settings.associations = settings.associations || {};
    let extension = path.extname(file).toLowerCase().trim();
    if (settings.associations[extension]) {
      AppWindow.launch(settings.associations[extension], {
        file: file
      });
      return true;
    } else return shell.openItemIn(file);
  }
  static selectFile(action, options) { // TODO: Custom Places as in .NET, multiselect
    return new Promise(resolve => {
      let args = Object.assign({
        createDirectory: action !== 0,
        overwritePrompt: action === 1,
        checkFileExists: action === 0,
        defaultPath: app.getPath("home"),
        buttonLabel: action === 1 ? "Save" : "Select",
        showHiddenFiles: false,
        open: action !== 2 ? shell.FILE : shell.DIRECTORY,
        showInput: action !== 0,
        filter: [{
          name: "All Files",
          extenstions: ['*']
        }]
      }, options, {
        callback(file) {
          resolve(file);
        }
      })
      Object.assign(args, {
        file: path.normalize(args.defaultPath)
      })
      AppWindow.launch("files", args, {
        parent: AppWindow.getFocusedWindow(),
        modal: true
      })

    })
  }
  static showItemInFolder(file) {
    AppWindow.launch("files", {
      file: file
    });
  }
  static openExternal(url) {
    AppWindow.launch("browser", {
      file: url
    });
  }
  static isDefaultApp(eg, prog) { // extension or generic
    if (!prog) prog = AppWindow.getFocusedWindow().app;
    if (eg.startsWith(".")) {
      if (!registry.get().associations) registry.set(Object.assign({}, registry.get(), {
        associations: {}
      }));
      let settings = registry.get();
      return settings.associations[eg] === prog;
    } else {
      if (!registry.get().defaultApps) registry.set(Object.assign({}, registry.get(), {
        defaultApps: {}
      }));
      let settings = registry.get();
      return settings.defaultApps[eg] === app;
    }
  }
  static setAsDefaultApp(eg, prog) {
    return new Promise(async function(resolve) {

      if (!prog) prog = AppWindow.getFocusedWindow().app;
      let pkg = await fs.readJson(path.join(osRoot, "apps", prog, "package.json"));
      shell.showMessageBox({
        type: "question",
        buttons: ["No", "Yes"],
        defaultId: 1,
        cancelId: 0,
        title: "Do you wish to set " + pkg.productName + " as your default \"" + eg + "\" application?",
        message: "You can always change this in the Settings panel."
      }).then(button => {
        if (button === "Yes") {
          let settings;
          if (eg.startsWith(".")) {
            if (!registry.get().associations) registry.set(Object.assign({}, registry.get(), {
              associations: {}
            }));
            settings = registry.get();
            settings.associations[eg] = prog;
          } else {
            if (!registry.get().defaultApps) registry.set(Object.assign({}, registry.get(), {
              defaultApps: {}
            }));
            settings = registry.get();
            settings.defaultApps[eg] = prog;
          }
          registry.set(settings);
          resolve(true);
        } else resolve(false);
      })
    })
  }
  static removeAsDefaultApp(eg, prog) {
    if (!prog) prog = AppWindow.getFocusedWindow().app;
    let settings;
    if (eg.startsWith(".")) {
      if (!registry.get().associations) registry.set(Object.assign({}, registry.get(), {
        associations: {}
      }));
      settings = registry.get();
      settings.associations.splice(eg, 1);
    } else {
      if (!registry.get().defaultApps) registry.set(Object.assign({}, registry.get(), {
        defaultApps: {}
      }));
      settings = registry.get();
      settings.defaultApps.splice(eg, 1);
    }
    registry.set(settings);
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
      confirmButton.innerText = "Confirm";
      cancelButton.innerText = "Cancel";
      confirmButton.type = "submit";
      cancelButton.type = "button";

      errorText.className = "text-danger font-weight-bold flex-grow-1 smaller lh-r1";
      cancelButton.addEventListener("click", e => modal.controller.hide());
      modal.addEventListener('hidden.bs.modal', e => {
        reject("User rejected to run command as root.");
        modal.remove();
      }, false);
      modal.addEventListener("submit", e => {
        e.preventDefault();
        let cmd = `echo '${password.value}' | sudo -k -S -- sh -c '${command}'`;
        console.log(cmd)
        modal.content.disabled = true;
        proc.exec(cmd, {
          cwd: options.cwd || "/"
        }, function(error, stdout, stderr) {
          modal.content.disabled = false;
          stderr = stderr.replace("[sudo] password for " + process.env.USER + ": ", "");
          if (stderr.includes("incorrect password")) {
            errorText.innerText = "The password you entered is incorrect.";
            return;
          }
          if (stderr.trim().startsWith("sudo:")) stderr = "";
          else {
            resolve({
              error: error,
              stdout: stdout,
              stderr: stderr
            });
            modal.controller.hide();
          }
        })
      })


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
      header.innerText = options.title || "App wants to run command as an administrator";
      message.innerText = options.message || "Type administrator password to proceed";
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
      modal.controller = new BSN.Modal(modal);
      modal.controller.show();
    });
  }
  static createFile(baseDir, options = {}) {
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
        elem.tab.icon.className = "mdi mdi-24px lh-24 p-2 d-flex rounded-circle bg-info text-white mdi-file-outline mr-3"
        elem.tab.input = document.createElement("input");
        elem.tab.input.className = "form-control w-25 flex-grow-1";
        elem.tab.invalidLabel = document.createElement("div");
        elem.tab.invalidLabel.className = "invalid-feedback ml-5 pl-3";
        elem.tab.input.addEventListener("input", function() {
          elem.tab.input.classList.remove("is-invalid");
          confirmButton.disabled = false;

          if (!elem.tab.input.value.trim()) {
            elem.tab.invalidLabel.innerText = "Required field.";
          } else if (fs.existsSync(path.join(baseDir, elem.tab.input.value)))
            elem.tab.invalidLabel.innerText = "This name already exists in this folder.";
          else return;
          elem.tab.input.classList.add("is-invalid");
          confirmButton.disabled = true;
        })
        elem.tab.append(elem.tab.icon, elem.tab.input, elem.tab.invalidLabel);
        return elem;
      }
      let file = generate();
      file.innerText = "File"

      let folder = generate();
      folder.innerText = "Folder"
      folder.tab.icon.classList.add("text-black", "bg-warning", "mdi-folder-outline");
      folder.tab.icon.classList.remove("bg-info", "mdi-file-outline", "text-white");

      nav.append(file, folder)
      container.append(nav, file.tab, folder.tab);
      if (options.defaultTab) new Function(options.defaultTab + ".click()")();
      else file.click();

      modal.className = "modal fade";
      modal.tabIndex = -1;
      modal.setAttribute("aria-hidden", "true");
      modal.dialog.className = "modal-dialog modal-dialog-centered";
      modal.content.className = "modal-content";
      modal.footer.className = "modal-footer";

      confirmButton.className = "btn btn-primary ml-2 flex-shrink-0";
      cancelButton.className = "btn btn-secondary ml-2 flex-shrink-0";
      confirmButton.innerText = "Create";
      cancelButton.innerText = "Cancel";
      confirmButton.type = "submit";
      cancelButton.type = "button";
      modal.footer.append(cancelButton, confirmButton)
      modal.content.append(container, modal.footer);
      modal.dialog.append(modal.content);
      modal.append(modal.dialog);
      document.body.append(modal);
      modal.controller = new BSN.Modal(modal);
      modal.controller.show();
      cancelButton.addEventListener("click", modal.controller.hide);
      confirmButton.addEventListener("click", e => {
        modal.addEventListener("hidden.bs.modal", e => {
          modal.remove();
        });
        modal.controller.hide();
        if (file.classList.contains("active")) {
          let newFile = path.join(baseDir, file.tab.input.value);
          fs.writeFile(newFile, "", "utf-8").catch(reject).then(e => resolve(newFile));
        } else {
          let newFolder = path.join(baseDir, folder.tab.input.value);
          fs.mkdir(newFolder).catch(reject).then(e => resolve(newFolder));
        }

      });
    })

  }
  static async openItemIn(file, options = {
    checked: false
  }) {
    let settings = registry.get();
    settings.associations = settings.associations || {};

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
    modal.defaultCheckbox.check.id = '_' + Math.random().toString(36).substr(2, 9); // https://gist.github.com/gordonbrander/2230317

    if (!path.extname(file).includes(".")) {
      modal.defaultCheckbox.check.checked = false;
      modal.defaultCheckbox.check.disabled = true;
    }

    modal.defaultCheckbox.label = document.createElement("label");
    modal.defaultCheckbox.label.innerText = "Make default";
    modal.defaultCheckbox.label.className = "custom-control-label flex-grow-1";
    modal.defaultCheckbox.label.htmlFor = modal.defaultCheckbox.check.id;

    modal.className = "modal fade";
    modal.tabIndex = -1;
    modal.setAttribute("aria-hidden", "true");

    modal.dialog.className = "modal-dialog modal-dialog-centered";
    modal.content.className = "modal-content";
    modal.apps.className = "border py-2 m-3 rounded bg-white scrollable-y";
    modal.apps.style.maxHeight = "400px";
    modal.apps.style.minHeight = "200px";
    modal.header.className = "text-muted px-3 pt-3";
    modal.header.innerText = "Open file in...";
    modal.footer.className = "modal-footer";
    modal.selectButton.className = "btn btn-primary ml-2";
    modal.cancelButton.className = "btn btn-secondary ml-2";
    modal.selectButton.innerText = "Launch";
    modal.selectButton.disabled = true;
    modal.cancelButton.innerText = "Cancel";
    let apps = await fs.readdir(path.join(osRoot, "apps"));
    for (const item of apps) {
      try {
        let pkg = await fs.readJson(path.join(osRoot, "apps", item, "package.json"));
        if (pkg.type !== "app" || pkg.hidden)
          continue;
        pkg.icon = pkg.icon.replace("$SYSTEM_ROOT", osRoot).replace("$APP_ROOT", path.join(osRoot, "apps", item));
        let elem = document.createElement("button");
        elem.appID = item;
        elem.className = "dropdown-item d-flex align-items-center px-2";
        elem.icon = new Image(24, 24);
        elem.icon.src = new URL("file://" + pkg.icon).href;
        elem.icon.className = "mr-2"
        elem.app = document.createElement("div");
        elem.app.innerText = pkg.productName || pkg.name;
        elem.app.className = "flex-grow-1 text-truncate";
        elem.append(elem.icon, elem.app);
        elem.addEventListener("click", e => {
          modal.apps.childNodes.forEach(item => item.classList.remove("active"));
          elem.classList.add("active");
          modal.selectButton.disabled = false;
        })
        modal.apps.appendChild(elem);
      } catch (e) {}
    };
    modal.defaultCheckbox.append(modal.defaultCheckbox.check, modal.defaultCheckbox.label);
    modal.footer.append(modal.defaultCheckbox, modal.cancelButton, modal.selectButton)
    modal.content.append(modal.header, modal.apps, modal.footer);
    modal.dialog.append(modal.content);
    modal.append(modal.dialog)
    document.body.append(modal);
    let control = new BSN.Modal(modal);
    modal.cancelButton.addEventListener("click", control.hide);
    modal.selectButton.addEventListener("click", e => {
      control.hide();
      if (modal.defaultCheckbox.check.checked)
        settings.associations[path.extname(file)] = modal.apps.querySelector(".active").appID;
      AppWindow.launch(modal.apps.querySelector(".active").appID, {
        file: file
      });
      registry.set(settings);
    });
    control.show();
  }
  static showMessageBox(options) {
    return new Promise(resolve => {

      options = Object.assign({}, defaultOptions, options);

      let modal = document.createElement("div");
      modal.dialog = document.createElement("form");
      modal.content = document.createElement("main");
      modal.body = document.createElement("div");
      modal.footer = document.createElement("div");
      modal.header = document.createElement("h5");
      modal.dialog.className = "modal-dialog modal-dialog-centered";
      modal.content.className = "modal-content";
      modal.body.className = "modal-body d-flex";
      modal.header.innerText = options.title;
      modal.header.className = "mb-1"
      modal.footer.className = "modal-footer";
      modal.className = "modal fade";
      modal.tabIndex = -1;
      modal.setAttribute("aria-hidden", "true");
      let container = document.createElement("div");
      container.innerHTML = options.message;
      container.className = "flex-grow-1";
      modal.body.append(container);
      let customCheckbox = document.createElement("div");
      customCheckbox.checkbox = document.createElement("input");
      customCheckbox.label = document.createElement("label");
      customCheckbox.className = "custom-control custom-checkbox flex-grow-1";
      customCheckbox.checkbox.className = "custom-control-input";
      customCheckbox.checkbox.checked = options.checkboxChecked;
      customCheckbox.checkbox.type = "checkbox";
      customCheckbox.checkbox.id = '_' + Math.random().toString(36).substr(2, 9);
      customCheckbox.label.htmlFor = customCheckbox.checkbox.id;
      customCheckbox.label.innerText = options.checkboxLabel;
      customCheckbox.label.className = "custom-control-label";
      customCheckbox.append(customCheckbox.checkbox, customCheckbox.label);
      for (const i of options.buttons.keys()) {
        function send() {
          resolve(options.buttons[i], customCheckbox.checkbox.checked);
        }
        let button = document.createElement("button");
        button.className = "btn " + (options.defaultId === i ? "btn-primary" : "btn-secondary");
        button.innerText = options.buttons[i];
        modal.footer.append(button);
        button.addEventListener("click", function() {
          if (options.cancelId === i) modal.controller.hide();
          send();
          modal.addEventListener("hidden.bs.modal", modal.remove)
          modal.controller.hide();
        });
        if (options.defaultId === i) {
          modal.dialog.addEventListener("submit", e => {
            e.preventDefault();
            send();
            modal.addEventListener("hidden.bs.modal", modal.remove)
            modal.controller.hide();
          });
        }
        if (options.cancelId === i)
          modal.addEventListener("hidden.bs.modal", send)
      }

      switch (options.type) {
        case "info":
          options.icon = options.icon || "information-outline";
          options.iconBG = "var(--info)";
          break;
        case "error":
          options.icon = options.icon || "fire";
          options.iconBG = "var(--danger)";
          break;
        case "question":
          options.icon = options.icon || "help";
          options.iconBG = "var(--secondary)";
          break;
        case "warning":
          options.icon = options.icon || "alert-outline";
          options.iconBG = "var(--warning)";
          break;
        default:
          options.iconBG = "var(--primary)";
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
      container.prepend(modal.header)
      modal.content.append(modal.body, modal.footer);
      modal.dialog.append(modal.content);
      modal.append(modal.dialog);
      document.body.append(modal);
      modal.controller = new BSN.Modal(modal);
      modal.controller.show();
    })
  }
};
const defaultOptions = {
  type: "none",
  buttons: ["OK"],
  defaultId: 0,
  cancelId: 0,
  title: "",
  message: "",
  checkboxLabel: "",
  checkboxChecked: false,
  icon: "",
  iconBG: "var(--primary)"
};
Object.defineProperty(window.shell, "ACTION_OPEN", {
  value: 0
});
Object.defineProperty(window.shell, "ACTION_SAVE", {
  value: 1
});
Object.defineProperty(window.shell, "FILE", {
  value: 0
});
Object.defineProperty(window.shell, "DIRECTORY", {
  value: 1
});
Object.defineProperty(window.shell, "ACTION_FOLDER", {
  value: 2
});
