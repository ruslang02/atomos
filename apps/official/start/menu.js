const fso = require("fs");
const fs = fso.promises;
const path = require("path");
const Shell = require("@api/Shell");
const AppWindow = require("@api/WindowManager");
const Menu = require(`@api/Menu`);
const appPath = path.join(osRoot, "apps");
let root;
let active;
let allApps = [];
let allActions = [];

function render() {
	Elements.StartMenu = document.createElement("startmenu");
	root = Elements.StartMenu;
	Elements.StartMenu.className = "position-fixed d-flex flex-column p-2 hide fly up";
	Elements.StartMenu.style.height = "400px";
	Elements.StartMenu.style.width = "400px";
	Elements.StartMenu.addEventListener("contextmenu", e => e.stopPropagation());
	if (Shell.isMobile) {
		Elements.StartMenu.classList.add("w-100");
		setTimeout(function () {
			Elements.StartMenu.style.height = "calc(100% - " + CSS.px(Elements.Bar.offsetHeight + Elements.MenuBar.offsetTop) + ")";
		}, 500);
	}
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

	function updatePosition() {
		Elements.StartMenu.style.bottom = Elements.Bar.offsetHeight + "px";
		Elements.StartMenu.style.left = root.clientLeft + "px";
	}

	Elements.StartMenu.style.zIndex = 990;
	body.appendChild(Elements.StartMenu);

	updatePosition();
	if (!Shell.isMobile) {
		new ResizeObserver(updatePosition).observe(Elements.Bar);
	}

	renderSearch();
	renderApps();
	renderSearchSection();
	renderNotFound();
	renderNewApp();
	renderActions();

	return Elements.StartMenu;
}

require("fs").watch(appPath, (a, b) => {
	renderApps();
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

async function renderApps() {
	if (root.Apps) {
		root.Apps.innerHTML = "";
	} else {
		root.Apps = document.createElement("apps");
		active = root.Apps;
		root.Apps.className = "very-rounded flex-grow-1 p-2 card shadow scrollable" + (Shell.ui.darkMode ? " bg-dark" : "");
		root.Apps.style.cssText = "--display: grid";
		root.Apps.style.display = "grid";
		root.Apps.style.gridTemplateColumns = "25% 25% 25% 25%";
		root.Apps.style.alignContent = "space-around";
		root.appendChild(root.Apps);
	}

	async function scanApps(dir) {
		let dirs = await fs.readdir(dir);
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
			appName.className = "text-truncate text-center";
			appEntry.className = "btn py-1 px-2 flex-shrink-0 d-flex flex-column align-items-center justify-content-center " + (Shell.ui.darkMode ? "btn-dark" : "btn-white");

			appEntry.menu = new Menu([{
				label: "Launch",
				icon: "open-in-app"
			}, {
				type: "separator"
			}, {
				label: "Uninstall",
				icon: "delete",
				click() {
					delete_r(itemPath)
				}
			}, {
				label: "Info",
				icon: "information-variant",
				click() {
					window.__currentApp = item;
					Shell.openSettings("apps-app");
				}
			}]);
			appEntry.addEventListener("contextmenu", e => {
				appEntry.menu.popup();
			});
			try {
				let json = await fs.readFile(itemPath);
				let config = JSON.parse(json.toString());
				if (config.hidden || config.type !== "app")
					continue;
				appEntry.addEventListener("click", () => {
					AppWindow.launch(config.name.replace("@atomos", "official").replace("@", ""));
					Elements.BarItems["official/start"].click();
				});
				appIcon.className = "mdi mdi-24px rounded-max shadow text-white d-flex p-2 lh-24 my-1 mdi-" + config.icon;
				appIcon.style.background = config.color;
				allApps.push({
					name: config.productName || config.name,
					icon: config.icon,
					item: item
				});
				appName.innerText = config.productName || config.name || "App";
				appEntry.append(appIcon, appName);
				root.Apps.append(appEntry);
			} catch (e) {
				console.error(item, "not loaded, because configuration file is missing.");
			}
		}
	}

	await scanApps(appPath);

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
						app: item,
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
	root.SearchSection.className = "flex-nowrap very-rounded p-2 flex-grow-1 card shadow scrollable" + (Shell.ui.darkMode ? " bg-dark" : "");
	root.SearchSection.style.cssText = "--display: flex";
	root.SearchSection.style.display = "none";
	root.appendChild(root.SearchSection);
}

function renderSearch() {
	root.Search = document.createElement("search");
	root.Search.className = "input-group very-rounded card flex-row shadow mb-2 flex-shrink-0" + (Shell.ui.darkMode ? " bg-dark" : "");
	let igp = document.createElement("label");
	igp.className = "input-group-prepend m-0 d-flex align-items-center";
	igp.htmlFor = "__searchInput";
	root.AddButton = document.createElement("button");
	root.AddButton.className = "input-group-append mdi mdi-24px lh-24 px-2 bg-transparent border-0 shadow-none mdi-plus btn" + (Shell.ui.darkMode ? " text-white" : "");
	root.AddButton.onclick = () => {
		root.AddButton.classList.toggle("mdi-apps");
		if (!root.AddButton.classList.toggle("mdi-plus"))
			showSection(root.NewApp); else home();
	};
	let igt = document.createElement("div");
	igt.className = "mdi mdi-magnify mdi-18px input-group-text text-muted border-0 bg-transparent pr-1 py-0";

	root.Search.Input = document.createElement("input");
	root.Search.Input.placeholder = "Search apps or execute any action...";
	root.Search.Input.className = "form-control bg-transparent py-2 px-1 border-0 shadow-none" + (Shell.ui.darkMode ? " text-white" : "");
	root.Search.Input.id = "__searchInput";
	root.Search.Input.dataset.editMenu = "false";
	/*if (firstRun) {
		root.Search.Input.title = "Use Quick Search to browse through apps and actions";
		root.Search.Input.tooltip = new Tooltip(root.Search.Input);
	}*/
	igp.appendChild(igt);
	root.Search.append(igp, root.Search.Input, root.AddButton);
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
	root.appendChild(root.Search);
}

function renderNewApp() {
	root.NewApp = document.createElement("section");
	root.NewApp.className = "card very-rounded shadow justify-content-center align-items-center flex-grow-1" + (Shell.ui.darkMode ? " bg-dark" : "");
	root.NewApp.style.display = "none";
	root.NewApp.style.cssText = "--display: flex";
	let icon = document.createElement("icon");
	icon.className = "mdi mdi-shape-plus display-1 " + (Shell.ui.darkMode ? " text-white" : " text-secondary");
	let header = document.createElement("p");
	header.className = "mx-5 px-4 text-center" + (Shell.ui.darkMode ? " text-white" : " text-secondary");
	header.innerHTML = "To install a new application, drag and drop '.wapp' archive here or select it from File Manager.";
	root.NewApp.append(icon, header);
	root.append(root.NewApp);
}

function renderNotFound() {

	root.NotFound = document.createElement("section");
	root.NotFound.className = "card very-rounded shadow justify-content-center align-items-center flex-grow-1" + (Shell.ui.darkMode ? " bg-dark text-white" : "");
	root.NotFound.style.display = "none";
	root.NotFound.style.cssText = "--display: flex";
	let icon = document.createElement("icon");
	icon.className = "mdi mdi-folder-remove-outline";
	icon.style.cssText = `font-size: 96px;line-height: 96px;-webkit-text-stroke: 4px ${(Shell.ui.darkMode ? "var(--dark)" : "white")}`;
	let title = document.createElement("h5");
	title.className = "font-weight-normal";
	title.innerText = '"" was not found';
	let uselessinfo = document.createElement("p");
	uselessinfo.className = "font-weight-normal";
	uselessinfo.innerText = "There is no such application installed, but there may be one online.";
	uselessinfo.style.width = '80%';
	let searchBtn = document.createElement("button");
	searchBtn.className = "btn btn-outline-success";
	searchBtn.innerText = "Search in Store";
	searchBtn.onclick = e => AppWindow.launch("market", {
		q: root.Search.Input.value
	});
	root.NotFound.append(icon, title);
	root.appendChild(root.NotFound)
}

function home() {
	root.AddButton.classList.replace("mdi-apps", "mdi-plus");
	showSection(root.Apps);
	root.Search.Input.value = "";
}

async function search() {
	root.AddButton.classList.replace("mdi-apps", "mdi-plus");
	let q = root.Search.Input.value.toLowerCase().trim();
	root.NotFound.querySelector("h5").innerText = `"${q}" was not found`;
	let res = [];
	if (!q.trim()) {
		showSection(root.Apps);
		return;
	}
	root.SearchSection.innerHTML = "";
	allActions.forEach((item, i) => {
		if (item.name.search(new RegExp(q, "gi")) !== -1)
			res.push(item);
	});
	allApps.forEach((app, i) => {
		if (app.name.search(new RegExp(q, "gi")) !== -1)
			res.push(app);
	});
	if (!res.length)
		showSection(root.NotFound);
	else {
		let items = [];
		for (const i of res.keys()) {
			const item = res[i];

			let elem = document.createElement("button");
			elem.icon = document.createElement("icon");
			elem.header = document.createElement("div");
			elem.additional = document.createElement("div");
			elem.additional.innerText = (item.main ? item.appName : "Open");
			elem.additional.className = "text-muted flex-shrink-0 ml-auto fade mr-1";
			elem.header.className = "text-truncate text-left ml-2";
			elem.className = "btn p-1 flex-shrink-0 w-100 d-flex align-items-center" + (Shell.ui.darkMode ? " btn-dark text-white" : " btn-white");
			elem.addEventListener("click", e => {
				if (item.main) {
					fs.readFile(path.join(osRoot, "apps", item.app, item.main)).then(script => {
						new Function('__dirname', script)(path.join(osRoot, "apps", item.app));
					})
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
		items.sort(function (a, b) {
			return a.header.innerText.toLowerCase().localeCompare(b.header.innerText.toLowerCase());
		});
		items[0].classList.add("active");
		items[0].additional.classList.add("show");
		root.SearchSection.append(...items);
		showSection(root.SearchSection);
	}
}

function showSection(elem) {
	active = elem;
	root.NotFound.style.display = "none";
	root.SearchSection.style.display = "none";
	root.Apps.style.display = "none";
	root.NewApp.style.display = "none";
	elem.style.display = elem.style.getPropertyValue("--display");
}

return render();
