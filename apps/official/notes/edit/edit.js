const {
  AppWindow,
  Components: {
    Button
  },
  Shell
} = require("@api");
const {
  remote: {
    app: {
      getPath
    }
  }
} = require("electron");
const win = AppWindow.getCurrentWindow();
const fs = require("fs");
const path = require("path");
const notesLocation = path.join(getPath("userData"), "Notes");
win.ui.root.classList.remove("bg-semiwhite", "bg-semidark");
win.ui.title.classList.add("d-none");
win.ui.header.style.background = "rgba(0,0,0,0.15)";
win.ui.root.style.backgroundColor = "whitesmoke";
let currentFile = win.arguments.file;
let noteName = document.createElement("input");
if (currentFile) {
  fs.promises.readFile(currentFile).then(res => {
    let result = res.toString().trim();
    noteName.value = result.split("\n")[0].substring(2).trim();
    noteArea.innerHTML = result.replace("# " + noteName.value + "\n", "") || "";
  })
} else
  noteName.value = "New note";
noteName.className = "form-control-sm btn btn-white border-0 shadow-none mx-auto font-weight-bolder";
noteName.style.cursor = "text";
let colorBtn = new Button({
  size: "sm",
  icon: "palette",
  color: "light",
  shadow: true
});
let colorButtons = document.createElement("div");
colorButtons.className = "scrollable-x w-100 p-2 d-flex";
let green = new Button({
  icon: "blank",
  color: "--green",
  shadow: true,
  addClasses: "rounded-circle p-2"
}).getDisconnected();
let blue = new Button({
  icon: "blank",
  color: "--blue",
  shadow: true,
  addClasses: "rounded-circle p-2 ml-2"
}).getDisconnected();
let purple = new Button({
  icon: "blank",
  color: "--purple",
  shadow: true,
  addClasses: "rounded-circle p-2 ml-2"
}).getDisconnected();
colorButtons.append(green, blue, purple);
colorBtn.dataset.content = colorButtons.outerHTML;
new Popover(colorBtn, {
  placement: "bottom",
  title: "Color",
  trigger: "click"
});
noteName.dataset.draggable = colorBtn.dataset.draggable = false;
win.ui.header.append(noteName, colorBtn);
let noteArea = document.createElement("textarea");
noteArea.className = "flex-grow-1 bg-transparent form-control border-0 shadow-none";
noteArea.style.resize = "none";
win.ui.body.append(noteArea);
let saveTimeout;
noteArea.oninput = () => {
  clearTimeout(saveTimeout);
  setTimeout(function () {
    if (noteArea.value.trim()) save();
  }, 3000);
};

function save() {
  currentFile = currentFile || (Shell.uniqueId() + ".md");
  fs.promises.writeFile(path.join(notesLocation, currentFile), "# " + noteName.value + "\n" + noteArea.value, "utf-8").then(console.log);
}

win.on('close', save);