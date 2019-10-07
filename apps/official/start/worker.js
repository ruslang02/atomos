onmessage = e => {
    switch (e.data.action) {
        case "init":
            settings = e.data.settings;
            break;
        case "updateApps":
            scanApps().then(() => {
                postMessage({
                    action: "getApps",
                    result: allApps
                })
            });
            break;
        case "updateActions":
            renderActions();
            break;
        case "search":
            renderActions();
            break;
    }
}
const appPath = osRoot + "/apps";
const mathjs = require("mathjs");
let settings = {};
let allApps = [];
let allActions = [];

async function scanApps(dir = appPath) {
    if (dir === appPath)
        allApps = [];
    let dirs = await fs.readdir(dir);
    const showHidden = settings.showAllApps === true;
    for (const item of dirs) {
        let itemPath = path.join(dir, item);
        let stat = await fs.lstat(itemPath);
        if (stat.isDirectory()) {
            await scanApps(itemPath);
            continue;
        } else if (item.trim().toLowerCase() !== "package.json") continue;

        try {
            let json = await fs.readFile(itemPath);
            let config = JSON.parse(json.toString());
            if ((config.hidden && !showHidden) || config.type !== "app")
                continue;
            let id = config.name.replace("@atomos", "official").replace("@", "");
            allApps.push({
                id,
                type: "app",
                rootDir: path.dirname(itemPath),
                info: config
            });
        } catch (e) {
            console.error(item, "not loaded, because configuration file is missing.");
        }
    }

    allApps = allApps.sort((a, b) => {
        return (a.config.productName || a.config.name).toLowerCase() - (b.config.productName || b.config.name).toLowerCase();
    });
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

async function search(q) {
    let res = [];
    if (q.startsWith("=")) {
        showSection(root.SearchSection);
        try {
            let calc = mathjs.eval(q.substring(1));
            if (!calc) calc = 0;
            if (typeof calc !== "number") return;
            postMessage({
                action: "search",
                type: "math",
                result: calc
            });
        } catch (e) {
        }
        return;
    }
    allActions.forEach((item, i) => {
        try {
            if (item.name.search(new RegExp(q, "gi")) !== -1)
                res.push(item);
        } catch {
        }
    });
    allApps.forEach((app, i) => {
        try {
            if ((app.config.productName || app.config.name).search(new RegExp(q, "gi")) !== -1)
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