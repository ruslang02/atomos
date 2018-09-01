//TODO: Save All using async/await/Promise

const win = AppWindow.fromId(WINDOW_ID);
const fs = require('fs-extra'),
  {
    clipboard
  } = require('electron'),
  html_beautify = require('js-beautify').html,
  js_beautify = require('js-beautify').js,
  css_beautify = require('js-beautify').css,
  path = require("path");
win.on('second-instance', (e, args) => {
  if (args.newWindow) e.preventDefault();
  else if (args.file) loadFile(args.file, newTab());
  win.show();
})
win.once('closed', function() {
  window.removeEventListener("keydown", altEvent);
  prefs.remove();
});
const registry = new Registry("angles");
let prefs
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
tabCollection.className = "d-flex scrollable-x-0 flex-grow-1 flex-shrink-0 text-truncate ml-3";
tabCollection.style.marginBottom = "-1px";
tabCollection.style.width = 0;
tabCollection.style.zIndex = "100";
tabCollection.addEventListener("mousewheel", function(e) {
  tabCollection.scrollLeft += e.deltaY;
});
tabCollection.toolbarToggle = document.createElement("button");
tabCollection.toolbarToggle.className = "btn btn-sm btn-outline-light p-0 mb-2 rounded border-0 mdi mdi-chevron-double-up mdi-chevron-double-down d-flex mdi-18px lh-18 mx-2";
tabCollection.toolbarToggle.addEventListener("click", e => {
  tabCollection.toolbarToggle.classList.toggle("mdi-chevron-double-up", viewMenu.menu.getMenuItemById("angles-showtoolbar").checked = !nav.classList.toggle("d-none"));
});
win.ui.root.classList.replace("bg-semiwhite", "bg-semidark")
win.ui.root.classList.add("border-secondary")
win.ui.root.style.overflow = "unset";
win.ui.header.classList.remove("border-bottom", "py-1");
win.ui.header.classList.add("pt-2");
win.ui.buttons.style.marginTop = "-0.5rem";
win.ui.body.classList.add("bg-dark")
win.ui.title.classList.add("d-none");
win.ui.header.prepend(tabCollection, tabCollection.toolbarToggle);
let nav = document.createElement("nav");
nav.className = "bg-dark border-bottom-0 border-top p-1 border-secondary scrollable-y-0";
win.ui.body.append(nav);
let tabsContainer = document.createElement("main");
tabsContainer.className = "flex-grow-1 d-flex border-top border-secondary";
root.append(tabsContainer);
generateMenus();
win.show();
let altEvent = function(e) {
  if(win.isFocused() && e.key === "Alt") tabCollection.toolbarToggle.click();
}
window.addEventListener("keydown", altEvent)

function init() {
  require("ace-builds/src-min/ace");
  ace.config.set('basePath', osRoot + "/node_modules/ace-builds/src-min");
  if (win.arguments.file) loadFile(win.arguments.file, newTab());
  else newTab();
  renderPreferencesDialog();
}
setImmediate(init);

function loadFile(file, tab) {
  let f = path.parse(file);
  ofdPath = f.dir;
  fs.readFile(file, tab.editor.encoding, function(err, data) {
    if (err) console.error(err);
    tab.name.innerText = f.base;
    tab.editor.setValue(data);
    tab.url = file;
    tab.isRemote = true;
    tab.editor.session.setMode("ace/mode/" + (f.ext === ".js" ? "javascript" : f.ext.substring(1)));
    tab.reload();
    tab.classList.remove("active", "font-italic");
    win.setTitle(f.base + " - Angles");
  })

}

function writeFile(tab, url) {
  fs.writeFile(url, tab.editor.getValue(), tab.editor.encoding, function(err) {
    if (err) {
      new Notification({
        title: "Angles unable to save the file",
        message: err
      })
    } else {
      tab.classList.remove("font-italic");
      tab.reload();
      tab.url = url;
      new Notification({
        title: "File was successfully saved",
        icon: "code-tags",
        app: "Angles",
        color: "var(--success)",
        actions: [{
          label: "Open in folder",
          click() {
            shell.showItemInFolder(url);
          }
        }]
      })
    }
  });
}

function saveFile(tab) {
  if (tab.url) writeFile(tab, tab.url);
  else openSaveDialog(tab);
}

function openSaveDialog(tab, file) {
  shell.selectFile(shell.ACTION_SAVE, {
    defaultPath: file || ofdPath
  }).then(result => {
    tab.name.innerText = path.basename(result);
    writeFile(tab, result);
  })
}

function newTab() {
  let tab = document.createElement("div");
  tab.addEventListener("mousedown", function(e) {
    e.stopPropagation();
    tab.activate();
  })
  tab.className = "d-flex px-2 pb-1 us-0 mt-1 mr-1 align-items-center bg-dark text-white border-top border-left border-right border-secondary rounded-top";
  tab.name = document.createElement("div");
  tab.name.innerText = "untitled";
  tab.deactivate = function() {
    tab.classList.remove("py-1");
    tab.classList.add("pb-1", "mt-1", "border-bottom");
    tab.tab.classList.add("d-none");
  }
  tab.close = function() {
    console.log(tabs);
    if (tabs.length === 1) newTab();
    else if (tab.previousSibling) tab.previousSibling.activate();
    else if (tab.nextSibling) tab.nextSibling.activate();
    tab.tab.remove();
    tab.remove();
    tab.editor.destroy();
    tabs.splice(tabs.indexOf(tab), 1);
  }
  tab.activate = function() {
    if (tabs.active) tabs.active.deactivate();
    tab.classList.add("py-1");
    tab.classList.remove("pb-1", "mt-1", "border-bottom");
    tab.tab.classList.remove("d-none");
    tabs.active = tab;
    tab.editor.focus();
  }
  tab.reload = function() {
    tab.editor.eventNum++;
    let len = tab.editor.getValue().length;
    let currentEvent = tab.editor.eventNum;
    tab.editor.on('change', function() {
      if (tab.editor.eventNum === currentEvent)
        tab.classList.toggle("font-italic", tab.editor.getValue().length !== len);
    })
  }
  tab.setAttribute("data-draggable", "false")
  tab.closeButton = document.createElement("button");
  tab.closeButton.className = 'mdi mdi-close mdi-18px lh-18 d-flex btn btn-outline-danger border-0 p-0 ml-2';
  tab.closeButton.addEventListener("click", tab.close)
  tab.tab = document.createElement("section");
  tab.tab.className = "flex-grow-1 mr-1 d-none"
  tab.append(tab.name, tab.closeButton);
  tabCollection.append(tab)
  tabsContainer.append(tab.tab);
  tab.editor = ace.edit(tab.tab);
  tab.editor.getSession().setWrapLimitRange(0, settings.wrapLength);
  tab.editor.getSession().setUseSoftTabs(!settings.indentTab);
  tab.editor.getSession().setTabSize(settings.indentSize);
  tab.editor.setFontSize(14)
  tab.editor.encoding = "utf-8";
  tab.url = "";
  tab.editor.eventNum = 0;
  tab.editor.focus();
  tab.editor.setTheme("ace/theme/" + settings.theme);
  tab.reload();
  tab.activate();
  tabs.push(tab)
  return tab;
}

async function renderPreferencesDialog() {
  prefs = document.createElement("div");
  prefs.id = "angles"
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
  prefs.dismissButton.setAttribute("data-dismiss", "modal");
  prefs.applyButton.className = "btn btn-primary"
  prefs.cancelButton.className = "btn btn-secondary"
  prefs.applyButton.innerText = "Save changes"
  prefs.cancelButton.innerText = "Discard"
  prefs.cancelButton.setAttribute("data-dismiss", "modal");
  prefs.applyButton.type = "submit"
  prefs.cancelButton.type = "button";
  prefs.content.addEventListener("submit", e => {
    e.preventDefault();
    settings.indentSize = prefs.indentSize.value;
    settings.wrapLength = prefs.wrapLength.value;
    settings.indentTab = prefs.indentTab.checked;
    prefs.controller.hide();
  })
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
  prefs.indentTab.id = '_' + Math.random().toString(36).substr(2, 9);
  prefs.indentTab.className = "custom-control-input";
  prefs.indentTab.required = true;
  prefs.indentTab.value = settings.indentTab;
  e1.label = document.createElement("label");
  e1.label.className = "custom-control-label col-sm-4 p-0 position-static";
  e1.label.htmlFor = prefs.indentTab.id;
  e1.label.innerHTML = "Indent using <kbd>Tab</kbd>"
  e1.append(prefs.indentTab, e1.label)
  e2.className = "form-group row";
  e2.col9 = document.createElement("div");
  e2.col9.className = "col-sm-8";
  prefs.indentSize = document.createElement("input");
  prefs.indentSize.type = "number";
  prefs.indentSize.min = 1;
  prefs.indentSize.max = 8;
  prefs.indentSize.value = settings.indentSize;
  prefs.indentSize.id = '_' + Math.random().toString(36).substr(2, 9);
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
  prefs.wrapLength.id = '_' + Math.random().toString(36).substr(2, 9);
  prefs.wrapLength.className = "form-control";
  e3.label = document.createElement("label");
  e3.label.className = "col-sm-4 col-form-label";
  e3.label.htmlFor = prefs.wrapLength.id;
  e3.label.innerHTML = "Wrap Length";
  e3.col9.append(prefs.wrapLength);
  e3.append(e3.label, e3.col9);

  prefs.body.append(e1, e2, e3);
  let style = document.createElement("style");
  style.innerText = `
.modal#angles .custom-control-label::before,
.modal#angles .custom-control-label::after {left: 10.5rem}
`;
  root.append(style);
}
async function generateMenus() {
  fileMenu = document.createElement("button");
  fileMenu.className = "btn btn-outline-light border-0 mr-1";
  fileMenu.innerText = "File";
  fileMenu.menu = new Menu([{
    label: "New Tab",
    accelerator: "Ctrl+N",
    click: newTab,
    icon: "new-box"
  }, {
    type: "separator"
  }, {
    label: "Open...",
    accelerator: "Ctrl+O",
    click() {
      shell.selectFile(shell.ACTION_OPEN).then(file => {
        loadFile(file, newTab());
      })
    },
    icon: "folder-outline"
  }, {
    type: "separator"
  }, {
    label: "Save",
    accelerator: "Ctrl+S",
    click() {
      saveFile(tabs.active);
    },
    icon: "content-save"
  }, {
    label: "Save As...",
    accelerator: "Ctrl+Shift+S",
    click() {
      openSaveDialog(tabs.active);
    },
    icon: "content-save-settings"
  }]);
  fileMenu.addEventListener("click", e => {
    let pos = win.getPosition();
    e.stopPropagation();
    fileMenu.menu.togglePopup({
      x: fileMenu.offsetLeft + pos[0],
      y: fileMenu.offsetTop + fileMenu.offsetHeight + pos[1]
    });
  })

  editMenu = document.createElement("button");
  editMenu.className = "btn btn-outline-light border-0 mr-1";
  editMenu.innerText = "Edit";
  editMenu.menu = new Menu([{
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
        indent_char: tabs.active.editor.getSession().getTabString(),
        indent_with_tabs: (tabs.active.editor.getSession().getTabString() === "\t"),
        wrap_line_length: tabs.active.editor.getSession().getWrapLimit()
      };
      let tabText = tabs.active.name.innerText;
      let btext;
      if (tabText.endsWith(".js") || tabText.endsWith(".json")) btext =
        js_beautify(tabs.active.editor.getValue(), settings);
      else if (tabText.endsWith(".css")) btext = css_beautify(tabs.active.editor.getValue(),
        settings);
      else if (tabText.endsWith(".html")) btext = html_beautify(tabs.active.editor.getValue(),
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
  })

  viewMenu = document.createElement("button");
  viewMenu.className = "btn btn-outline-light border-0 mr-1";
  viewMenu.innerText = "View";
  viewMenu.menu = new Menu([{
    label: "Show toolbar",
    type: "checkbox",
    id: "angles-showtoolbar",
    checked: true,
    click(item) {
      nav.classList.toggle("d-none", !item.checked)
      tabCollection.toolbarToggle.classList.toggle("mdi-chevron-double-up", item.checked);
    }
  }, {
    label: "Configure layouts...",
    icon: "layers-outline"
  }]);
  viewMenu.addEventListener("click", e => {
    let pos = win.getPosition();
    e.stopPropagation();
    viewMenu.menu.togglePopup({
      x: viewMenu.offsetLeft + pos[0],
      y: viewMenu.offsetTop + viewMenu.offsetHeight + pos[1]
    });
  })
  nav.append(fileMenu, editMenu, viewMenu);
}
