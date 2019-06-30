const Shell = require("@api/Shell");
const AppWindow = require("@api/WindowManager");
const Registry = require(`@api/Registry`);
const Menu = require(`@api/Menu`);
const
	fs = require("fs"),
	fsp = fs.promises,
	path = require("path"),
	win = AppWindow.getCurrentWindow(),
	GitLab = require('gitlab/dist/es5').default,
	semver = require('semver'),
	OAUTH_ID = "aa323e6ea377cc2626142787c548389cc0cddc308d295f05d3e886bdf240e84f", // "6f212c4f252faec9050f17668bea8945278ca317975500e847e67a2f8f087eeb"
	BASE_SERVER = "http://192.168.1.72", // "http://apps.atomos.org.uk"
	REDIRECT_URI = "http://atomos.org.uk/glcallback";
let
	api,
	access = Registry.get("market.account"),
	nav = {
		backButton: document.createElement("button"),
		forwardButton: document.createElement("button"),
		mainBar: document.createElement("div"),
		secSwitch: document.createElement("div"),
		install: document.createElement("button"),
		manage: document.createElement("button"),
		account: document.createElement("button"),
		search: document.createElement("button"),
		downloads: document.createElement("button"),
		downloadsSection: document.createElement("section"),
		downloadsQueue: document.createElement("section"),
		downloadsButton: document.createElement("button")
	},
	body = document.createElement("section"),
	spinner = document.createElement("icon"),
	currentUser = {};

win.ui.title.classList.add("d-none");
nav.backButton.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mdi-arrow-left mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.backButton.disabled = true;
nav.backButton.type = "button";
nav.backButton.onclick = () => nav.secSwitch.querySelector("button:not(.btn-dark):not(.btn-light)").click();
nav.backButton.title = "Back".toLocaleString();

nav.search.className = "btn btn-sm mdi d-none shadow-sm align-items-center mdi-magnify ml-2 mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.search.type = "button";
nav.search.onclick = () => nav.secSwitch.querySelector("button:not(.btn-dark):not(.btn-light)").click();
nav.search.title = "Search".toLocaleString();

nav.install.className = "btn btn-sm btn-primary px-3" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.install.innerText = "Applications".toLocaleString();
nav.install.onclick = () => {
	nav.manage.classList.add(win.options.darkMode ? "btn-dark" : "btn-light");
	nav.install.classList.remove(win.options.darkMode ? "btn-dark" : "btn-light");
	refreshApps();
};

nav.manage.className = "btn btn-sm btn-primary px-4" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.manage.innerText = "Manage".toLocaleString();
nav.manage.onclick = () => {
	nav.install.classList.add(win.options.darkMode ? "btn-dark" : "btn-light");
	nav.manage.classList.remove(win.options.darkMode ? "btn-dark" : "btn-light");
	refreshInstalledApps();
};
nav.secSwitch.className = "btn-group shadow-sm align-items-stretch flex-shrink-0 mx-auto";
nav.secSwitch.append(nav.install, nav.manage);

nav.downloadsButton.className = "btn btn-primary btn-sm mdi mdi-18px lh-18 mdi-cancel btn-block";
nav.downloadsButton.innerHTML = "&nbsp;&nbsp;" + "Cancel All".toLocaleString();
let downloadApp = document.createElement("button");
downloadApp.className = "btn btn-white p-1 d-flex align-items-center";
downloadApp.icon = new Image(36, 36);
downloadApp.icon.src = "http://apps.atomos.org.uk/uploads/-/system/project/avatar/1/angles_logo.png";
downloadApp.info = document.createElement("div");
downloadApp.info.className = "d-flex flex-column justify-content-center text-left";
downloadApp.info.innerHTML = "<b>Angles</b><progress class='progress-bar progre'></progress>";
downloadApp.append(downloadApp.icon, downloadApp.info);
nav.downloadsQueue.append(downloadApp);
nav.downloadsSection.append(nav.downloadsQueue, nav.downloadsButton);
nav.downloads.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mdi-arrow-down-bold mr-2 mdi-18px lh-18 " + (win.options.darkMode ? "btn-dark" : "btn-light");
//nav.downloads.title = "Download in progress...";
nav.account.className = "btn btn-sm shadow-sm dropdown-toggle d-flex align-items-center " + (win.options.darkMode ? "btn-dark" : "btn-light");
nav.account.innerHTML = "<icon class='spinner-border spinner-border-sm mr-2'></icon>Loading...";

async function renderUser() {
	nav.account.icon = new Image(16, 16);
	nav.account.icon.src = currentUser.avatar_url;
	nav.account.icon.className = "rounded-circle mr-2";
	nav.account.userName = document.createElement("div");
	nav.account.userName.innerText = currentUser.name;
	nav.account.innerHTML = "";
	nav.account.title = "Account";
	nav.account.append(nav.account.icon, nav.account.userName);

	nav.account.menu = new Menu([{
		label: "Open in GitLab",
		icon: "gitlab",
		click() {
			AppWindow.launch("official/proton", {
				file: `${BASE_SERVER}/${currentUser.username}`
			})
		}
	}, {
		label: "Settings",
		icon: "tune",
		click() {
			Shell.openSettings("apps");
		}
	}, {
		label: "Sign out",
		icon: "exit-to-app",
		click() {
			Registry.set("market.account", undefined);
			win.relaunch();
		}
	}]);
	nav.account.onclick = () => {
		nav.account.menu.popup({
			x: nav.account.offsetLeft + win.getPosition()[0],
			y: nav.account.offsetTop + win.getPosition()[1] + nav.account.offsetHeight
		});
	};
	setTimeout(() => nav.install.click(), 100);
	new Tooltip(nav.account, {placement: "bottom"});
}


win.ui.header.prepend(nav.backButton, nav.search, nav.secSwitch, nav.downloads, nav.account);
new Tooltip(nav.backButton, {placement: "bottom"});
new Tooltip(nav.search, {placement: "bottom"});
//new Tooltip(nav.downloads, {placement: "bottom"});
new Popover(nav.downloads, {
	content: nav.downloadsSection,
	placement: "bottom",
	trigger: "click",
	template: `<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-content p-2">${nav.downloadsSection.innerHTML}</div></div>`
});
win.ui.body.classList.add(win.options.darkMode ? "bg-dark" : "bg-white");

body.className = "flex-grow-1 py-3 container scrollable-y" + (win.options.darkMode ? " text-white" : "");
spinner.style.cssText = "position:absolute;left:0;right:0;width:36px;height:36px";
spinner.className = "mdi mdi-spin-faster mdi-loading mdi-24px mt-5 fly down hide lh-24 d-flex justify-content-center align-items-center bg-light border mx-auto p-1 rounded-circle shadow";
win.ui.body.append(spinner, body);


login();

async function installApp(app, version) {
	console.log(app, version) //TODO: This
}

async function loadApp(app) {
	body.innerHTML = "";
	spinner.classList.replace("hide", "show");
	nav.backButton.disabled = false;
	let installedVersion = "";

	let main = document.createElement("header");
	let appIcon = new Image(48, 48);
	appIcon.className = "mr-3 shadow rounded-circle";
	let appName = document.createElement("b");
	appName.className = "lead font-weight-bolder";
	let descr = document.createElement("div");
	let appInfo = document.createElement("div");
	appInfo.className = "d-flex flex-column justify-content-center flex-grow-1";
	let appBtns = document.createElement("div");
	appBtns.className = "d-flex flex-column justify-content-center align-content-center";
	let installInfo = document.createElement("section");
	main.className = installInfo.className = "px-4 py-3 mb-4 very-rounded shadow-sm d-flex " + (win.options.darkMode ? "bg-secondary" : "bg-light");
	let isInstalled = document.createElement("div");
	let versionSection = document.createElement("label");
	versionSection.innerText = "Version".toLocaleString() + ":";
	versionSection.className = "d-flex align-items-center mb-0";
	let versionSelect = document.createElement("select");
	versionSelect.className = "custom-select custom-select-sm ml-3";
	versionSelect.onchange = () => {
		console.log(installedVersion);
		versionInstall.classList.toggle("d-none", installedVersion === versionSelect.value);
	};
	let versionInstall = document.createElement("button");
	versionInstall.className = "btn btn-sm btn-success d-none text-nowrap ml-2";
	versionInstall.innerText = "Install".toLocaleString();
	versionSection.append(versionSelect, versionInstall);
	installInfo.append(isInstalled, versionSection);
	appInfo.append(appName, descr);
	main.append(appIcon, appInfo, appBtns);

	api.Projects.show(app).then(async function (pkg) {
		console.log(pkg);
		let appPath = path.join(osRoot, "apps", pkg.path_with_namespace, "package.json");
		if (fs.existsSync(appPath)) {
			let file = await fsp.readFile(appPath);
			installedVersion = JSON.parse(file.toString()).version;
		}
		descr.innerText = pkg.description;
		isInstalled.className = "d-flex align-items-center mdi mdi-18px font-weight-bolder mr-auto " + (installedVersion ? "mdi-check" : "mdi-close");
		isInstalled.innerHTML = "&nbsp;&nbsp;" + (installedVersion ? "This app is installed".toLocaleString() : "This app is not installed".toLocaleString());
		if (installedVersion)
			versionSelect.value = installedVersion;
		appIcon.src = pkg.avatar_url;
		appName.innerText = pkg.name;
		let releases = await api.Tags.all(app);
		for (const tag of releases) {
			console.log(tag);
			versionSelect.add(new Option(tag.name));
		}
		let latestVersion = releases[0].name;
		console.log(latestVersion);
		if (installedVersion) {
			versionSelect.value = installedVersion;
			let grp = document.createElement("div");
			grp.className = "btn-group m-0";
			if (semver.lt(installedVersion, latestVersion)) {
				let updateBtn = document.createElement("button");
				updateBtn.className = "btn btn-primary btn-block btn-lg mdi mdi-update";
				updateBtn.innerText = " " + "Update".toLocaleString();
				updateBtn.onclick = () => {
					installApp(app, latestVersion);
				};
				let launchBtn = document.createElement("button");
				launchBtn.className = "btn btn-success btn-lg mdi mdi-open-in-new";
				launchBtn.onclick = () => AppWindow.launch(app);
				grp.append(updateBtn, launchBtn);
			} else {
				let launchBtn = document.createElement("button");
				launchBtn.className = "btn btn-success btn-block btn-lg mdi mdi-open-in-new";
				launchBtn.innerText = " " + "Launch".toLocaleString();
				launchBtn.onclick = () => AppWindow.launch(app);
				let removeBtn = document.createElement("button");
				removeBtn.className = "btn btn-danger btn-lg mdi mdi-delete-outline";
				grp.append(launchBtn, removeBtn);
			}
			appBtns.append(grp)
		} else {
			let installBtn = document.createElement("button");
			installBtn.className = "btn btn-primary btn-lg";
			installBtn.innerText = "Install".toLocaleString();
			installBtn.onclick = () => {

			};
			appBtns.append(installBtn);
		}
	});


	api.RepositoryFiles.show(app, "README.md", "master").then(readme => {
		api.Markdown.render(atob(readme.content)).then(text => {
			description.innerHTML = text.html;
		})
	});
	console.log(api);
	api.Issues.all(app, {
		order_by: "updated_at"
	}).then(issues => {
		issuesSection.innerHTML = `<h4 class="px-3 mb-3">Issues(${issues.length})</h4>`;
		for (const issue of issues) {
			let elem = document.createElement("button");
			elem.className = "btn m-0 border-top px-3 d-flex rounded-0 btn-block align-items-center text-left " + (win.options.darkMode ? "btn-secondary" : "btn-white");
			elem.onclick = () => {
				AppWindow.launch("official/proton", {
					file: issue.web_url
				})
			};
			elem.icon = new Image(32, 32);
			elem.icon.src = issue.author.avatar_url;
			elem.icon.className = "mr-3";
			elem.info = document.createElement("div");
			elem.info.className = "d-flex flex-column flex-grow-1";
			elem.header = document.createElement("b");
			elem.header.innerText = issue.title;
			elem.addInfo = document.createElement("div");
			elem.addInfo.innerHTML = `${issue.author.name} • <icon class="mdi mdi-thumb-up-outline lh-r1"></icon> ${issue.upvotes} • <icon class="mdi mdi-thumb-down-outline lh-r1"></icon> ${issue.downvotes}`;
			elem.info.append(elem.header, elem.addInfo);
			elem.append(elem.icon, elem.info);
			issuesSection.append(elem);
		}
	});

	let description = document.createElement("section");
	description.style.maxHeight = "300px";

	let issuesSection = document.createElement("section");
	description.className = "p-3 mb-4 very-rounded shadow-sm d-flex flex-column px-0 scrollable-y " + (win.options.darkMode ? "bg-secondary" : "bg-light");
	issuesSection.className = "py-3 mb-4 very-rounded shadow-sm d-flex flex-column px-0 scrollable-y " + (win.options.darkMode ? "bg-secondary" : "bg-light");
	body.append(main, installInfo, description, issuesSection);
	spinner.classList.replace("show", "hide");
}

async function refreshApps() {
	body.innerHTML = "";
	spinner.classList.replace("hide", "show");
	nav.backButton.disabled = true;
	let apps = await api.Projects.all({
		simple: true,
		orderBy: "last_activity_at"
	});
	console.log(apps);
	let h2 = document.createElement("h2");
	h2.className = "mb-3";
	h2.innerText = "Latest activity".toLocaleString();
	body.append(h2);
	for (const app of apps) {
		let elem = document.createElement("div");
		elem.className = "btn very-rounded d-flex text-left mt-2 align-items-center " + (win.options.darkMode ? "btn-outline-light" : "btn-white");
		elem.icon = new Image(36, 36);
		elem.icon.className = "mr-3 my-1 rounded-max";
		elem.icon.src = app.avatar_url;
		elem.appID = app.id;
		elem.onclick = () => {
			loadApp(app.id)
		};
		let main = document.createElement("div");
		main.className = "d-flex flex-column justify-content-center";
		elem.productName = document.createElement("b");
		elem.productName.innerText = app.name;
		elem.description = document.createElement("div");
		elem.description.innerText = app.description;
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
	let h2 = document.createElement("h2");
	h2.className = "mb-3";
	h2.innerText = "Installed apps".toLocaleString();
	body.append(h2);

	async function addApps(appPath) {
		let apps = await fsp.readdir(appPath);
		for (const dir of apps) {
			let name = path.join(appPath, dir);
			let stat = await fsp.stat(name);
			if (stat.isDirectory()) {
				await addApps(name);
				continue;
			} else if (dir.toLowerCase().trim() !== "package.json") continue;
			try {
				let app = JSON.parse(await fsp.readFile(name));
				let elem = document.createElement("div");
				elem.className = "btn very-rounded d-flex text-left mt-2 align-items-center " + (win.options.darkMode ? "btn-outline-light" : "btn-white");
				elem.icon = document.createElement("icon");
				elem.icon.className = "mdi mdi-24px rounded-max shadow text-white d-flex p-2 lh-24 my-1 mr-3 mdi-" + app.icon;
				elem.icon.style.background = app.color;
				elem.appID = dir;
				elem.onclick = () => {
					loadApp(app.name.replace("@atomos", "official").replace("@", ""));
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
	}

	await addApps(path.join(osRoot, "apps"));

	spinner.classList.replace("show", "hide");
}

async function login() {
	if (access) {
		try {
			api = new GitLab({
				url: BASE_SERVER,
				oauthToken: access.access_token
			});
			console.log(api);
			currentUser = await api.Users.current();
			await renderUser();
			return;
		} catch (e) {
			console.log("Login using access_token failed. Proceeding with OAuth2", e, access);
		}
	} else
		console.log("First time login. Welcome in!");
	let modal = document.createElement("div");
	modal.dialog = document.createElement("form");
	modal.content = document.createElement("main");
	modal.dialog.className = "modal-dialog modal-dialog-centered";
	modal.content.className = "modal-content very-rounded scrollable-0";
	modal.content.style.height = CSS.px(550);
	modal.className = "modal fade";
	modal.tabIndex = -1;
	modal.setAttribute("aria-hidden", "true");
	let webview = document.createElement("webview");
	webview.src = `${BASE_SERVER}/oauth/authorize?client_id=${OAUTH_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&state=GitLab`;
	webview.nodeintegration = true;
	webview.setAttribute("autosize", 'on');
	webview.className = "h-100";
	modal.content.append(webview);
	webview.addEventListener("ipc-message", e => {
		if (e.channel === "log-in") {
			let response = JSON.parse(e.args[0]);
			access = response = Object.assign(response, {
				receiveTimestamp: new Date().getTime()
			});
			Registry.set("market.account", response);
			modal.controller.hide();
			modal = undefined;
			login();
		}
	});
	modal.dialog.append(modal.content);
	modal.append(modal.dialog);
	document.body.append(modal);
	modal.controller = new Modal(modal);

	modal.addEventListener("show.bs.modal", () => {
		modal.style.left = CSS.px(win.mainDisp.bounds.x / zoomFactor);
		modal.style.top = CSS.px(win.mainDisp.bounds.y / zoomFactor);
		modal.style.width = CSS.px(win.mainDisp.bounds.width / zoomFactor);
		modal.style.height = CSS.px(win.mainDisp.bounds.height / zoomFactor);
	});
	modal.controller.show();
}
