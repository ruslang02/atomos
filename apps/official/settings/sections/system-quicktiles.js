setTitle("Quick Tiles order")
const {Registry, Shell, Menu} = require("@api");
const fs = require("fs").promises;
const path = require("path");
let description = document.createElement("p");
description.innerText = "Add new and sort existing quick tiles in Tray.".toLocaleString();
description.className = "smaller px-3 pt-2 text-muted";
let container = document.createElement("div");
container.className = "list-group rounded-0";

function saveTiles() {
    let newQT = [];
    for (const child of container.children)
        newQT.push(child.innerText.trim());
    Registry.set("tray.quickTiles", newQT);
    Elements.MenuBar.reloadQT();
}

function loadTiles() {
    container.innerHTML = "";
    let tiles = Registry.get("tray.quickTiles");
    for (let i of Object.keys(tiles)) {
        let tile = tiles[i];
        let elem = newSmallListItem({label: tile});
        elem.oncontextmenu = () => {
            new Menu([{
                icon: "arrow-up",
                label: "Move up",
                click() {
                    container.insertBefore(elem, container.children.item(--i));
                    saveTiles();
                }
            }, {
                icon: "arrow-down",
                label: "Move down",
                click() {
                    container.insertBefore(elem, container.children.item(++i));
                    saveTiles();
                }
            }, {
                type: "separator"
            }, {
                icon: "delete-outline",
                label: "Delete",
                click() {
                    elem.remove();
                    saveTiles();
                }
            }]).popup();
        }
        container.appendChild(elem);
    }
}

loadTiles();
let newButton = document.createElement("button");
newButton.className = "m-2 lh-24 p-1 mdi mdi-24px mdi-plus btn rounded-circle d-flex " + (Shell.ui.darkMode ? "btn-dark" : "btn-white");
newButton.onclick = async function () {
    let message = document.createElement("div");
    let desc = document.createElement("p");
    desc.innerText = "Press on the installed Quick Tiles to add them to the Tray.";
    let newTiles = document.createElement("div");
    newTiles.className = "card py-2 flex-shrink-0 bg-transparent border-secondary";
    newTiles.append(...(await renderQT()));
    message.append(desc, newTiles);
    Shell.showMessageBox({
        title: "Add Quick Tile",
        icon: "card",
        message: message,
        cancelId: 0,
        buttons: ["Done"],
        defaultId: 0,
        iconBG: "var(--primary)"
    });

};

async function renderQT() {
    let allQT = [];

    async function addQT(dir) {
        let dirs = await fs.readdir(dir);
        for (const item of dirs) {
            let name = path.join(dir, item);
            let stat = await fs.stat(name);
            try {
                if (stat.isDirectory()) {
                    await addQT(name);
                    continue;
                } else if (item.toLowerCase().trim() !== "package.json") continue;
                let pkg = require(name);
                console.log(Object.keys(pkg.quickTiles || {}));
                for (let qt of Object.keys(pkg.quickTiles || {})) {
                    qt = pkg.name + "." + qt;
                    let tile = newSmallListItem({label: qt});
                    tile.onclick = () => {
                        let newqt = Registry.get("tray.quickTiles");
                        newqt.push(qt);
                        Registry.set("tray.quickTiles", newqt);
                        loadTiles();
                    }
                    allQT.push(tile)
                }
            } catch (error) {
            }
        }
    }

    await addQT(path.join(osRoot, "apps"));
    console.log(allQT)
    return allQT;
}

setActionButton(newButton);
root.append(description, container)