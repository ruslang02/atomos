LoadCSS();
const {
	ipcRenderer,
	remote
} = require("electron");
let wc = remote.getCurrentWebContents();
const Registry = require(`@api/Registry`);
const {Snackbar, Notification} = require(`@api/Notification`);
require('gitlab/dist/es5');
const fso = require("fs");
const fs = fso.promises;
let autoStartWorkers = [];
let blockNW;
ipcRenderer.on('new-window', (e, u) => {
	const AppWindow = require(`@api/WindowManager`);
	if (blockNW || u === "about:blank") return;
	AppWindow.launch("official/proton", {
		url: u
	});
	blockNW = true;
	setTimeout(() => blockNW = false, 50);
});

window.zoomFactor = 1;
setInterval(() => {
	wc.getZoomFactor(zoom => {
		if (zoomFactor !== zoom) {
			new Snackbar("Zoom Factor was changed to " + zoom);
			window.zoomFactor = zoom
		}
	})
}, 5000);

for (const worker of (Registry.get("system.autostart") || [])) {
	let work = new Worker(worker.src);
	autoStartWorkers.push({
		name: worker.name,
		src: worker.src,
		worker: work
	})
}
renderLocale().then(() => require("@apps/official/bar"));
String.toLocaleString = function (name) {
	for (const data of window.localeData) {
		if (data[name])
			return data[name];
	}
};
String.prototype.toLocaleString = function () {
	for (const data of window.localeData) {
		if (data[this])
			return data[this];
	}
	return `${this}`;
};
let wFile = path.join(process.env.HOME, ".config", "wallpaper.jpg");
let time;
renderWall();
fso.watch(wFile, () => {
	if (!time) time = setTimeout(renderWall, 1000);
});

async function renderLocale() {
	let locale = "ru-RU";
	let files = await fs.readdir(path.join(osRoot, "locales", locale));
	for (let file of files) {
		if (file === "default.json") continue;
		file = path.join(osRoot, "locales", locale, file);
		let localeFile = (await fs.readFile(file)).toString();
		let localeData = JSON.parse(localeFile);
		(window.localeData = window.localeData || []).push(localeData);
	}
}

function renderWall() {
	clearTimeout(time);
	let settings = Registry.get("system.wallpaper");
	if (!fso.existsSync(wFile)) {
		console.log(wFile);
		fso.copyFileSync(path.join(osRoot, "resources", "wallpaper.jpg"), wFile);
	}
	if (!settings)
		Registry.set("system.wallpaper", settings = {
			positioning: "scalencrop",
			color: 'black'
		});
	let wpURL = "url('" + new URL("file://" + wFile).href + "?" + require(`@api/Shell`).uniqueId() + "')";
	switch (settings.positioning) {
		case "scale":
			document.body.style.background = `${settings.color} ${wpURL} 100% 100% no-repeat`;
			break;
		case "scalencrop":
			document.body.style.background = `${settings.color} ${wpURL} center/cover no-repeat`;
			break;
		case "scalencontain":
			document.body.style.background = `${settings.color} ${wpURL} center/contain no-repeat`;
			break;
		case "center":
			document.body.style.background = `${settings.color} ${wpURL} no-repeat center`;
			break;
		case "tile":
			document.body.style.background = `${settings.color} ${wpURL}`;
			break;
	}
}

function LoadCSS() {
	document.title = "AtomOS (Rendering...)";
	let cssList = [
		"front/desktop-pre.css",
		"node_modules/bootstrap/dist/css/bootstrap.min.css",
		"node_modules/@mdi/font/css/materialdesignicons.min.css",
		"node_modules/source-sans-pro/source-sans-pro.css",
		"front/desktop.css"
	];
	let promises = [];
	cssList.forEach(function (item) {
		promises.push(new Promise(resolve => {
			let style = document.createElement("link");
			style.rel = "stylesheet";
			style.href = path.join(osRoot, item);
			style.onload = resolve;
			document.head.appendChild(style);
		}));
	});
	return Promise.all(promises);
}

document.title = "AtomOS (Render complete)";
if (Registry.get("system.enableSimpleEffects") === true)
	document.body.classList.add("simple");
if (Registry.get("system.disableAnimations") === true)
	document.body.classList.add("noAnim");
require(`@api/EditMenu`);
require(`@api/Shortcuts`);
