const fs = require("fs");
const path = require("path");
const win = AppWindow.fromId(WINDOW_ID);
let nav = {
	backButton: document.createElement("button"),
	forwardButton: document.createElement("button"),
	mainBar: document.createElement("div"),
	secSwitch: document.createElement("div"),
	install: document.createElement("button"),
	manage: document.createElement("button")
};
win.ui.title.classList.add("d-none");
nav.backButton.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mdi-arrow-left mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.backButton.disabled = true;
nav.backButton.type = "button";
nav.backButton.onclick = e => nav.secSwitch.querySelector("button:not(.btn-dark):not(.btn-light)").click();
nav.backButton.title = "Previous (Ctrl+<i class='mdi mdi-chevron-left'></i>)";

nav.install.className = "btn btn-sm btn-primary px-3 lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.install.innerText = "Applications";
nav.install.onclick = e => {
	nav.manage.classList.add(win.options.darkMode ? "btn-dark" : "btn-light");
	nav.install.classList.remove(win.options.darkMode ? "btn-dark" : "btn-light");
	refreshApps();
};

nav.manage.className = "btn btn-sm btn-primary px-4 lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.manage.innerText = "Manage";
nav.manage.onclick = e => {
	nav.install.classList.add(win.options.darkMode ? "btn-dark" : "btn-light");
	nav.manage.classList.remove(win.options.darkMode ? "btn-dark" : "btn-light");
	refreshInstalledApps();
};
nav.secSwitch.className = "btn-group align-items-stretch flex-shrink-0 mx-auto";
nav.secSwitch.append(nav.install, nav.manage);

win.ui.header.prepend(nav.backButton, nav.secSwitch);
new BSN.Tooltip(nav.backButton, {placement: "bottom"})
win.ui.body.classList.add(win.options.darkMode ? "bg-dark" : "bg-white");

let body = document.createElement("section");
body.className = "flex-grow-1 pt-3 pb-2 px-5 scrollable-y";

let spinner = document.createElement("icon");
spinner.style.cssText = "position:absolute;top:4rem;left:0;right:0;width:36px;height:36px";
spinner.className = "mdi mdi-spin-faster mdi-loading mdi-24px fly down hide lh-24 d-flex align-items-center bg-light border mx-auto p-1 rounded-circle shadow";
root.append(spinner, body);

async function loadApp(app) {
	let appPath = path.join(osRoot, "apps", app, "package.json");
	let installedVersion = false;
	if (fs.existsSync(appPath))
		fs.promises.readFile(appPath)
			.then(file => installedVersion = JSON.parse(file.toString()).version);
	body.innerHTML = "";
	spinner.classList.replace("hide", "show");
	nav.backButton.disabled = false;
	let response = await fetch(`http://atomos.org.uk/api?action=app.get&id=${app}`);
	let pkg = await response.json();
	if (!pkg) {
		body.innerHTML = "<p class='text-center position-absolute m-auto h1 font-weight-light' style='top:0;left:0;right:0;bottom:0;height: 3rem'>Application not found</p>";
		spinner.classList.replace("show", "hide");
		return;
	}
	let main = document.createElement("header");
	main.className = "bg-light very-rounded px-4 py-3 d-flex shadow-sm";
	let appIcon = document.createElement("icon");
	appIcon.className = "mdi mdi-24px rounded-max shadow text-white d-flex p-2 lh-24 my-1 mr-3 mdi-" + pkg.Icon;
	appIcon.style.background = pkg.IconBG;
	let appName = document.createElement("b");
	appName.className = "lead font-weight-bolder";
	appName.innerText = pkg.ProductName;
	let descr = document.createElement("div");
	descr.innerText = pkg.ShortDescription;
	let appInfo = document.createElement("div");
	appInfo.className = "d-flex flex-column justify-content-center flex-grow-1";
	let appBtns = document.createElement("div");
	appBtns.className = "d-flex flex-column justify-content-center align-content-center";
	if (installedVersion) {
		let grp = document.createElement("div");
		grp.className = "btn-group m-0";
		let launchBtn = document.createElement("button");
		launchBtn.className = "btn btn-success btn-block btn-lg mdi mdi-open-in-new";
		launchBtn.innerText = " Launch";
		launchBtn.onclick = () => AppWindow.launch(app);
		let removeBtn = document.createElement("button");
		removeBtn.className = "btn btn-danger btn-lg mdi mdi-delete-outline";
		removeBtn.onclick = () => {

		};
		grp.append(launchBtn, removeBtn);
		appBtns.append(grp)
	} else {
		let installBtn = document.createElement("button");
		installBtn.className = "btn btn-primary btn-lg";
		installBtn.innerText = "Install";
		appBtns.append(installBtn);
	}
	appInfo.append(appName, descr);
	main.append(appIcon, appInfo, appBtns);
	let description = document.createElement("section");
	description.innerHTML = pkg.LongDescription || pkg.ShortDescription;
	description.className = "px-4 py-3 mt-4 bg-light very-rounded shadow-sm scrollable-y";
	description.style.maxHeight = "300px";
	body.append(main, description);
	spinner.classList.replace("show", "hide");
}

async function refreshApps() {
	body.innerHTML = "";
	spinner.classList.replace("hide", "show");
	nav.backButton.disabled = true;
	let response = await fetch("http://atomos.org.uk/api?action=apps.list&sortBy=downloads");
	let apps = await response.json();
	console.log(apps);
	let h2 = document.createElement("h2");
	h2.className = "mb-3";
	h2.innerText = "Most downloaded apps";
	body.append(h2);
	for (const app of apps) {
		let elem = document.createElement("div");
		elem.className = "btn btn-white very-rounded d-flex text-left border mt-2";
		elem.icon = document.createElement("icon");
		elem.icon.className = "mdi mdi-24px rounded-max shadow text-white d-flex p-2 lh-24 my-1 mr-3 mdi-" + app.Icon;
		elem.icon.style.background = app.IconBG;
		elem.appID = app.App;
		elem.onclick = () => {
			loadApp(app.App)
		};
		let main = document.createElement("div");
		main.className = "d-flex flex-column justify-content-center";
		elem.productName = document.createElement("b");
		elem.productName.innerText = app.ProductName;
		elem.description = document.createElement("div");
		elem.description.innerText = app.ShortDescription;
		main.append(elem.productName, elem.description);
		elem.append(elem.icon, main);
		body.append(elem);
	}
	spinner.classList.replace("show", "hide");
}

async function refreshInstalledApps() {
	body.innerHTML = "";
	spinner.classList.replace("hide", "show");
	nav.backButton.disabled = true;
	let response = await fetch("http://atomos.org.uk/api?action=apps.list&sortBy=downloads");
	let apps = await fs.promises.readdir(path.join(osRoot, "apps"));
	console.log(apps);
	let h2 = document.createElement("h2");
	h2.className = "mb-3";
	h2.innerText = "Installed apps";
	body.append(h2);
	for (const dir of apps) {
		try {
			let app = JSON.parse(await fs.promises.readFile(path.join(osRoot, "apps", dir, "package.json")));
			let elem = document.createElement("div");
			elem.className = "btn btn-white very-rounded d-flex text-left border mt-2 align-items-center";
			elem.icon = document.createElement("icon");
			elem.icon.className = "mdi mdi-24px rounded-max shadow text-white d-flex p-2 lh-24 my-1 mr-3 mdi-" + app.icon;
			elem.icon.style.background = app.color;
			elem.appID = dir;
			elem.onclick = () => {
				loadApp(dir)
			};
			let main = document.createElement("div");
			main.className = "d-flex flex-column justify-content-center";
			elem.productName = document.createElement("b");
			elem.productName.innerText = app.productName || app.name;
			main.append(elem.productName);
			if (app.description) {
				elem.description = document.createElement("div");
				elem.description.innerText = app.description;
				main.append(elem.description);
			}
			elem.append(elem.icon, main);
			body.append(elem);
		} catch (e) {
			console.log(dir, "could not be listed in Market.");
		}
	}
	spinner.classList.replace("show", "hide");
}

win.show();
nav.install.click();