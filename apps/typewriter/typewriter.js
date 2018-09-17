const fs = require("fs").promises;
const path = require("path");
const MAX_SIZE = 51240;
let win = AppWindow.fromId(WINDOW_ID);
let el = {};
let currentFile;


function renderBar() {
  el.bar = document.createElement("nav");
  el.bar.className = "bg-light flex-shrink-0";
  root.appendChild(el.bar);
}

function renderMain() {
  let menu = new Menu([{
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
}

function renderFileItem() {
  let fileButton = document.createElement("button");
  let menu = new Menu([{
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
      else menu.getMenuItemById("saveAs").click();
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
        menu.getMenuItemById("save").click();
      });
    },
    id: "saveAs",
    icon: "content-save-settings",
    accelerator: "Ctrl+Shift+S"
  }]);
  console.log(menu);
  fileButton.addEventListener('click', e => {
    let pos = win.getPosition();
    e.stopPropagation();
    menu.togglePopup({
      x: fileButton.offsetLeft + pos[0],
      y: fileButton.offsetTop + fileButton.offsetHeight + pos[1]
    });
  });
  fileButton.className = "btn btn-outline-primary border-0 p-1 mdi mdi-text mdi-18px lh-18 mr-2";
  win.ui.header.prepend(fileButton);
}

async function loadFile(file, force = false) {
  let stat = await fs.stat(file);
  if (stat.size > MAX_SIZE && !force)
    openTLFConfirmationDialog(file);
  else {
    currentFile = file;
    win.setTitle(path.basename(file) + " - Typewriter");
    let data = await fs.readFile(file, 'utf8');
    el.textarea.innerText = data;
  }
}

function openTLFConfirmationDialog(file) {
  let modal = {
    root: document.createElement("modal"),
    body: document.createElement("div"),
    content: document.createElement("main"),
    message: document.createElement("div"),
    messageText: document.createElement("p"),
    icon: new Image(48, 48),
    header: document.createElement("h4"),
    footer: document.createElement("footer"),
    cancel: document.createElement("button"),
    ok: document.createElement("button")
  }
  modal.icon.src = iconDB.retrieveIconURL("Warning");
  modal.root.className = "modal fade position-absolute";
  modal.root.setAttribute("aria-hidden", "true");
  modal.body.className = "modal-dialog modal-dialog-centered";
  modal.content.className = "modal-content";
  modal.root.appendChild(modal.body);
  modal.header.className = "modal-header m-0";
  modal.message.className = "modal-body d-flex";
  modal.messageText.className = "m-0";
  modal.messageText.innerText = "This file is larger than 50 KBytes, opening which can cause significant hanging or even a system crash.";
  modal.header.innerHTML = "File is too large";
  modal.icon.className = "mr-3";
  modal.cancel.className = "btn btn-secondary";
  modal.cancel.innerText = "Cancel";
  modal.ok.className = "btn btn-outline-primary";
  modal.ok.innerText = "Continue";
  modal.ok.addEventListener("click", e => loadFile(file, true));
  modal.footer.className = "modal-footer";
  modal.footer.append(modal.cancel, modal.ok);
  modal.message.append(modal.icon, modal.messageText);
  modal.content.append(modal.header, modal.message, modal.footer);
  modal.body.appendChild(modal.content);
  document.body.appendChild(modal.root);
  let modalBSN = new BSN.Modal(modal.root);
  modal.cancel.onclick = modalBSN.hide;
  modalBSN.show();
}

renderMain();
renderFileItem();
if (win.arguments.file)
  loadFile(win.arguments.file);
win.show();
