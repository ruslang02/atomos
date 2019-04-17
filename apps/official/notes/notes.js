const {
  AppWindow
} = require("@api");
const {
  Button,
  Spinner
} = require("@api/Components");
const {
  remote: {
    app: {
      getPath
    }
  }
} = require("electron");
const path = require("path");
const fs = require("fs");
const notesLocation = path.join(getPath("userData"), "Notes");
const win = AppWindow.getCurrentWindow();
win.ui.root.classList.remove("bg-semiwhite");
win.ui.title.classList.add("d-none");
win.ui.buttons.classList.add("my-1");
win.ui.header.style.background = "#c67100";
win.ui.root.style.background = "#edeef0";
let header = document.createElement("header");
header.className = "shadow-sm";
header.style.background = "#ffa000";
header.container = document.createElement("div");
header.container.className = "container my-0 pl-4 pr-3 d-flex align-items-center";
header.text = document.createElement("div");
header.text.className = "h4 my-0 py-3 font-weight-bolder";
header.text.innerText = "Notes";
header.searchBtn = new Button({
  icon: "magnify",
  iconSize: CSS.px(24),
  color: "#ffa000",
  addClasses: "p-1 rounded-circle ml-2",
  tooltip: "Search"
});
header.refreshBtn = new Button({
  icon: "refresh",
  iconSize: CSS.px(24),
  color: "#ffa000",
  addClasses: "p-1 rounded-circle ml-auto",
  tooltip: "Refresh"
});
header.refreshBtn.onclick = refreshNotes;
header.container.append(header.text, header.refreshBtn, header.searchBtn)
header.append(header.container);
let noteContainer = document.createElement("main");
noteContainer.className = "container p-3 flex-grow-1 scrollable-y d-flex flex-wrap align-items-start justify-content-start";
let newNote = new Button({
  icon: "plus",
  iconSize: CSS.px(36),
  color: "warning",
  addClasses: "p-2 rounded-circle shadow m-4 position-absolute",
  tooltip: "Create new note"
});
newNote.style.cssText = "bottom:0;right:0;";
newNote.onclick = () => AppWindow.launch("@atomos/notes/edit");
let spin = new Spinner();
win.ui.ui.append(spin);
refreshNotes();
win.ui.body.append(header, noteContainer, newNote);
async function refreshNotes() {
  let entries = [];
  noteContainer.innerHTML = "";
  spin.show();
  try {
    entries = await fs.promises.readdir(notesLocation);
  } catch (e) {
    // first run 100%
    fs.promises.mkdir(notesLocation).then(refreshNotes);
    spin.hide();
    return;
  }
  if (entries.length === 0) {
    let noNotes = document.createElement("section");
    noNotes.className = "align-self-center w-100 text-center text-muted d-flex flex-column lead font-weight-bolder";
    noNotes.innerHTML = "<i class='mdi mdi-notebook display-1'></i>Nothing here";
    newNote.animate([{
      boxShadow: "0 0 0 0 var(--warning), 0 .5rem 1rem rgba(0,0,0,.15)"
    }, {
        boxShadow: "0 0 0 20px rgba(255, 193, 7, 0.01), 0 .5rem 1rem rgba(0,0,0,.15)"
    }, {
        boxShadow: "0 0 0 20px rgba(255, 193, 7, 0.01), 0 .5rem 1rem rgba(0,0,0,.15)"
    }, {
        boxShadow: "0 0 0 20px rgba(255, 193, 7, 0.01), 0 .5rem 1rem rgba(0,0,0,.15)"
    }, {
        boxShadow: "0 0 0 20px rgba(255, 193, 7, 0.01), 0 .5rem 1rem rgba(0,0,0,.15)"
    }, {
        boxShadow: "0 0 0 20px rgba(255, 193, 7, 0.01), 0 .5rem 1rem rgba(0,0,0,.15)"
    }], {
      iterations: Infinity,
      duration: 6000
    })
    noteContainer.append(noNotes)
  }
  for (const entry of entries) {
    fs.promises.readFile(path.join(notesLocation, entry), "utf-8").then(file => {
      card.note.innerHTML = file || "<i class='text-muted'>Empty note</i>";
    })
    fs.promises.stat(entry).then(stat => {
      let nowDate = new Date().getTime();
      let text = new Date().toLocaleDateString("en-US", {
        month: 'long',
        day: 'numeric'
      });
      if (nowDate - 1000 * 60 < stat.mtimeMs)
        text = Math.trunc((nowDate - stat.mtimeMs) / 1000) + " seconds ago";
      else if (nowDate - 1000 * 60 * 60 < stat.mtimeMs)
        text = Math.trunc((nowDate - stat.mtimeMs) / 60 / 1000) + " minutes ago";
      else if (nowDate - 1000 * 60 * 60 * 24 < stat.mtimeMs)
        text = Math.trunc((nowDate - stat.mtimeMs) / 60 / 60 / 1000) + " hours ago";
      else if (nowDate - 1000 * 60 * 60 * 24 * 31 < stat.mtimeMs)
        text = Math.trunc((nowDate - stat.mtimeMs) / 60 / 60 / 24 / 1000) + " days ago";
      card.actions.lastModified.innerText = text
    })
    let card = document.createElement("span");
    card.onmouseenter = () => card.actions.classList.add("show");
    card.onmouseleave = () => card.actions.classList.remove("show");
    card.className = "very-rounded shadow card mb-3 d-inline-flex mr-3";
    card.style.cssText = "min-width: 200px;"
    card.header = document.createElement("h5");
    card.header.innerText = path.basename(entry, ".html");
    card.header.className = "font-weight-bolder mx-3 mt-3";
    card.note = document.createElement("div");
    card.note.className = "mx-3"
    card.actions = document.createElement("footer");
    card.actions.className = "d-flex align-items-center mr-2 ml-3 mb-2 fade";
    card.actions.delete = document.createElement("button");
    card.actions.delete.className = "mdi mdi-delete-outline btn btn-outline-danger border-0 p-1 lh-18 mdi-18px d-flex";
    card.actions.edit = document.createElement("button");
    card.actions.edit.className = "mdi mdi-pencil-outline btn btn-outline-warning border-0 p-1 lh-18 mdi-18px d-flex";
    card.actions.lastModified = document.createElement("div");
    card.actions.lastModified.className = "text-muted flex-grow-1 text-truncate mr-auto smaller";
    card.actions.append(card.actions.lastModified, card.actions.edit, card.actions.delete);
    card.append(card.header, card.note, card.actions);
    noteContainer.append(card);
  }
  spin.hide();
}
