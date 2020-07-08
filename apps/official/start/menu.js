const fso = require("fs");
const fs = fso.promises;
const path = require("path");
const cp = require("child_process");
const Menu = require("@api/Menu"), AppWindow = require("@api/WindowManager"), Registry = require("@api/Registry"),
    Shell = require("@api/Shell"), {Button} = require("@api/Components");
const appPath = osRoot + "/apps";
let root, active, allApps = [], allActions = [], mathjs;

function render() {
    Elements.StartMenu = document.createElement("startmenu");
    root = Elements.StartMenu;
    Elements.StartMenu.className = "position-absolute d-flex flex-column hide fly up";
    Elements.StartMenu.style.bottom = "var(--taskbar-height)";
    Elements.StartMenu.style.height = CSS.px(430);
    Elements.StartMenu.style.width = CSS.px(400);
    Elements.StartMenu.addEventListener("contextmenu", e => e.stopPropagation());
    /*if (Shell.isMobile) {
        Elements.StartMenu.classList.add("w-100");
        setTimeout(function () {
            Elements.StartMenu.style.height = "calc(100% - " + CSS.px(Elements.Bar.offsetHeight + Elements.MenuBar.offsetTop) + ")";
        }, 500);
    }*/
    Elements.StartMenu.toggle = function () {
        let condition = Elements.StartMenu.classList.contains("show");
        if (condition)
            Elements.StartMenu.close();
        else Elements.StartMenu.open();
        return !condition;
    };
    Elements.StartMenu.open = function () {
        Elements.Bar.keepOpen(true);
        Elements.StartMenu.classList.replace("hide", "show");
        Elements.StartMenu.Search.Input.value = "";
        if (root.Search.Input.tooltip) root.Search.Input.tooltip.show();
        home();
        Elements.BarItems["official/start"].style.transform = "rotate(180deg)";
        setTimeout(() => Elements.StartMenu.Search.Input.focus(), 50);
        root.Search.Input.placeholder = "Search apps or execute any action...".toLocaleString();
    };
    Elements.StartMenu.close = function () {
        Elements.Bar.keepOpen(false);
        Elements.StartMenu.classList.replace("show", "hide");
        Elements.BarItems["official/start"].style.transform = "rotate(0deg)";
    };

    Elements.StartMenu.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    window.addEventListener("click", function () {
        Elements.StartMenu.close();
    });

    Elements.StartMenu.style.zIndex = 990;
    body.appendChild(Elements.StartMenu);

    renderApps();
    renderSearchSection();
    renderSearch();
    renderAccountSection();
    root.append(root.Account, root.SearchSection, root.AppsSection, root.Search);
    return Elements.StartMenu;
}

fso.watch(appPath, () => {
    scanApps();
    renderActions();
});
let delete_r = async function (input) {
    let stat = await fs.lstat(input);
    if (stat.isFile()) {
        fs.unlink(input);
    } else {
        let files = await fs.readdir(input);
        for (const file of files) {
            var curPath = path.join(input, file);
            let stats = await fs.lstat(curPath);
            if (stats.isDirectory())
                await delete_r(curPath);
            else
                await fs.unlink(curPath);
        }
        await fs.rmdir(input);
    }
};

async function scanApps(dir = appPath) {

    if (dir === appPath) {
        allApps = [];
        root.Apps.innerHTML = "";
    }
    let dirs = await fs.readdir(dir);
    const showHidden = Registry.get("system.showAllApps") === true;
    let appEntries = [];
    for (const item of dirs) {
        let itemPath = path.join(dir, item);
        let stat = await fs.lstat(itemPath);
        if (stat.isDirectory()) {
            await scanApps(itemPath);
            continue;
        } else if (item.trim().toLowerCase() !== "package.json") continue;
        let appEntry = document.createElement("button");
        let appIcon = document.createElement("icon");
        let appName = document.createElement("div");
        appName.className = "text-center";
        appEntry.className = "btn py-1 px-2 mb-1 flex-shrink-0 d-flex flex-column align-items-center justify-content-center " + (Shell.ui.darkMode ? "btn-dark" : "btn-white");

        try {
            let json = await fs.readFile(itemPath);
            let config = JSON.parse(json.toString());
            if ((config.hidden && !showHidden) || config.type !== "app")
                continue;
            let appID = config.name.replace("@atomos", "official").replace("@", "");
            appEntry.addEventListener("contextmenu", e => {
                if (!appEntry.menu) appEntry.menu = new Menu([{
                    label: "Launch",
                    icon: "open-in-app",
                    click() {
                        appEntry.click();
                    }
                }, {
                    type: "separator"
                }, {
                    label: "Uninstall",
                    icon: "delete",
                    click() {
                        delete_r(itemPath)
                    }
                }, {
                    label: "App info",
                    icon: "information-variant",
                    click() {
                        window.__currentApp = appID;
                        Shell.openSettings("apps-app");
                    }
                }]);
                appEntry.menu.popup();
            });
            appEntry.addEventListener("click", () => {
                AppWindow.launch(appID);
                Elements.BarItems["official/start"].click();
            });
            appIcon.className = "mdi mdi-24px rounded-max shadow text-white d-flex p-2 lh-24 my-1 mdi-" + config.icon;
            appIcon.style.background = config.color;
            allApps.push({
                name: config.productName || config.name,
                icon: config.icon,
                item: appID
            });
            appName.innerText = config.productName || config.name || "App";
            appEntry.append(appIcon, appName);
            appEntries.push(appEntry);
        } catch (e) {
            console.error(item, "not loaded, because configuration file is missing.");
        }
    }

    appEntries = appEntries.sort((a, b) => {
        return a.name.toLowerCase() - b.name.toLowerCase();
    });

    for (const entry of appEntries)
        root.Apps.append(entry);
}

async function renderApps() {
    root.AppsSection = document.createElement("section");
    root.AppsSection.className = "flex-nowrap px-2 card flex-grow-1 toast show mw-100 scrollable " + (Shell.ui.darkMode ? "bg-dark" : "bg-white");
    if (root.Apps) {
        root.Apps.innerHTML = "";
    } else {
        root.Apps = document.createElement("apps");
        active = root.Apps;
        root.Apps.className = "py-2";
        root.Apps.style.cssText = "--display: grid";
        root.Apps.style.display = "grid";
        root.Apps.style.gridTemplateColumns = "25% 25% 25% 25%";
    }

    Elements.StartMenu.scanApps = scanApps;
    root.AppsSection.append(root.Apps);
    await scanApps(appPath);
}

function renderAccountSection() {
    root.Account = document.createElement("section");
    root.Account.className = "flex-nowrap p-1 align-items-center flex-shrink-0 d-flex toast show mw-100 " + (Shell.ui.darkMode ? "bg-dark" : "bg-white");
    let userName = document.createElement('div');
    let userAvatar = new Image(32, 32);
    root.OffButton = document.createElement("button");
    root.OffButton.className = "mdi mdi-18px lh-18 p-2 border-0 mdi-power-standby btn btn-outline-danger d-flex align-items-center" + (Shell.ui.darkMode ? " text-white" : "");
    root.OffButton.title = "End session".toLocaleString();
    root.OffButton.onclick = () => {
        new Menu([{
            label: "Suspend",
            icon: "power-cycle",
            click() {
                require("child-process").exec("systemctl suspend");
            }
        }, {
            "label": "Restart",
            "icon": "restart",
            click() {
                require("child-process").exec("reboot");
            }
        }, {
            "label": "Shut down",
            "icon": "power",
            click() {
                require("child-process").exec("poweroff");
            }
        }]).popup();
    };
    userName.className = "h5 m-0 flex-grow-1 text-truncate" + (Shell.ui.darkMode ? " text-white" : "");
    cp.exec(`getent passwd | grep "$USER" | cut -d":" -f5 | cut -d"," -f1`, {
        shell: "/bin/bash"
    }, (_e, out) => userName.innerText = out);
    userAvatar.className = "mr-2 rounded";
    userAvatar.src = "file://" + process.env.HOME + "/.face";
    root.Account.append(userAvatar, userName, root.OffButton);
    new Tooltip(root.OffButton);
}

async function renderActions() {
    allActions = [];

    async function addAction(dir) {
        let dirs = await fs.readdir(dir);
        for (const item of dirs) {
            let name = path.join(dir, item);
            let stat = await fs.stat(name);
            try {
                if (stat.isDirectory()) {
                    await addAction(name);
                    continue;
                } else if (item.toLowerCase().trim() !== "package.json") continue;
                let json = await fs.readFile(name);
                let pkg = JSON.parse(json.toString());
                for (const action of pkg.actions)
                    allActions.push(Object.assign(action, {
                        name: action.name.toLocaleString(),
                        app: path.join(dir, action.main),
                        appName: pkg.productName || pkg.name
                    }));
            } catch (error) {
            }
        }
    }

    await addAction(path.join(osRoot, "apps"));
}

function renderSearchSection() {
    root.SearchSection = document.createElement("section");
    root.SearchSection.className = "flex-nowrap p-2 flex-column-reverse flex-grow-1 toast show mw-100 scrollable " + (Shell.ui.darkMode ? "bg-dark" : "bg-white");
    root.SearchSection.style.cssText = "--display: flex";
    root.SearchSection.style.display = "none";
}

function renderSearch() {
    root.Search = document.createElement("search");
    root.Search.className = "input-group toast show mw-100 d-flex shadow flex-shrink-0 " + (Shell.ui.darkMode ? "bg-dark" : "bg-white");
    let igp = document.createElement("label");
    igp.className = "input-group-prepend m-0 d-flex align-items-center";
    root.SearchIcon = document.createElement("div");
    root.SearchIcon.className = "mdi mdi-magnify mdi-18px lh-18 input-group-text text-muted border-0 bg-transparent pr-1 py-0";

    root.Search.Input = document.createElement("input");
    root.Search.Input.placeholder = "Search apps or execute any action...".toLocaleString();
    root.Search.Input.className = "form-control bg-transparent py-2 px-1 border-0 shadow-none" + (Shell.ui.darkMode ? " text-white" : "");
    igp.htmlFor = root.Search.Input.id = "__searchInput";
    root.Search.Input.dataset.editMenu = "false";
    
    igp.appendChild(root.SearchIcon);
    root.Search.append(igp, root.Search.Input);
    root.Search.Input.addEventListener("input", search);
    root.Search.Input.addEventListener("keydown", e => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            let prev = active.querySelector("button.active");
            if (!prev)
                return;
            if (!prev.previousSibling)
                return;
            prev.classList.remove("active");
            prev.additional.classList.remove("show");
            prev.additional.classList.remove("show");
            prev.previousSibling.classList.add("active");
            prev.previousSibling.scrollIntoView(false);
            prev.previousSibling.additional.classList.add("show")
        }
        if (e.key === "ArrowDown") {
            e.preventDefault();
            let prev = active.querySelector("button.active");
            if (!prev)
                return;
            if (!prev.nextSibling)
                return;
            prev.classList.remove("active");
            prev.additional.classList.remove("show");
            prev.nextSibling.classList.add("active");
            prev.nextSibling.scrollIntoView(false);
            prev.nextSibling.additional.classList.add("show")
        }
        if (e.key === "Escape")
            Elements.StartMenu.close();
        if (e.key === "Enter" && active.querySelector(".active"))
            active.querySelector(".active").click();
    });
}

function home() {
    showSection(root.AppsSection);
    root.Search.Input.value = "";
}

async function search() {
    let q = root.Search.Input.value.toLowerCase().trim();
    let res = [];
    if (!q.trim()) {
        showSection(root.AppsSection);
        return;
    }
    if (q.startsWith("=")) {
        if (!mathjs) mathjs = require("mathjs");
        showSection(root.SearchSection);
        try {
            let calc = mathjs.eval(q.substring(1));
            if (!calc) calc = 0;
            if (typeof calc !== "number") return;
            root.SearchSection.innerHTML = `<div class='p-3'>Calculation result is:<h1>${calc}</h1></div>`;
        } catch (e) {
        }
        return;
    }
    root.SearchSection.innerHTML = "";
    allActions.forEach((item, i) => {
        try {
            if (item.name.search(new RegExp(q, "gi")) !== -1)
                res.push(item);
        } catch {
        }
    });
    allApps.forEach((app, i) => {
        try {
            if (app.name.search(new RegExp(q, "gi")) !== -1)
                res.push(app);
        } catch {
        }
    });
    res.sort(function (a, b) {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
    if (q.includes(".")) {
        res.push({
            name: `Visit "${q}"`,
            appName: "Proton",
            main: "proton",
            icon: "earth",
            app: path.join(osRoot, "apps", "official/proton", "visit.js")
        });
    }
    res.push({
        name: `Search "${q}"`,
        appName: "Google",
        main: "proton",
        icon: "magnify",
        app: path.join(osRoot, "apps", "official/proton", "search.js")
    });
    if (res.length) {
        let items = [];
        for (const i of res.keys()) {
            const item = res[i];

            let elem = document.createElement("button");
            elem.icon = document.createElement("icon");
            elem.header = document.createElement("div");
            elem.additional = document.createElement("div");
            elem.additional.innerText = (item.main ? item.appName : "Open".toLocaleString());
            elem.additional.className = "text-muted flex-shrink-0 ml-auto fade mr-1";
            elem.header.className = "text-truncate text-left ml-2";
            elem.className = "btn p-1 flex-shrink-0 w-100 d-flex align-items-center" + (Shell.ui.darkMode ? " btn-dark text-white" : " btn-white");
            elem.addEventListener("click", e => {
                if (item.main) {
                    require(item.app/*path.join("@apps", item.app, item.main)*/);
                    delete require.cache[item.app];
                } else AppWindow.launch(item.item);
                Elements.StartMenu.close();
            });
            elem.addEventListener("mouseenter", function () {
                elem.additional.classList.add("show")
            });
            elem.addEventListener("mouseleave", function () {
                elem.additional.classList.remove("show")
            });
            elem.icon.className = "mdi mdi-24px lh-24 d-flex mdi-" + item.icon;
            elem.header.innerHTML = item.name;
            elem.append(elem.icon, elem.header, elem.additional);
            items.push(elem);
        }
        items[0].classList.add("active");
        items[0].additional.classList.add("show");
        root.SearchSection.append(...items);
        showSection(root.SearchSection);
    }	
}

function showSection(elem) {
    active = elem;
    root.SearchSection.style.display = "none";
    root.AppsSection.style.display = "none";
    elem.style.display = elem.style.getPropertyValue("--display");
}

return render();
