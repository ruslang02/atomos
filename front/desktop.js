const BSN = require('bootstrap.native/dist/bootstrap-native-v4');/*
window.$ = window.jQuery = require("jquery");
let jui = document.createElement("script");
jui.src = "../node_modules/jquery-ui-dist/jquery-ui.min.js";
document.body.append(jui);*/
let Elements = {};
let shutdown = false;
let autoStartWorkers = [];
let isMobile = false;
const FADE_ANIMATION_DURATION = 150;
const FLY_ANIMATION_DURATION = 200;
const osRoot = require("electron").remote.app.getAppPath();
const isDebug = require("electron").remote.getGlobal("isDebug");

const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
(async function() {
	const {
		remote
	} = require("electron");
	const {
		app
	} = remote;
	const fso = require("fs");
	const fs = fso.promises;
	const path = require("path");
	const taskbarPath = path.join(app.getAppPath(), "apps/bar");
	LoadCSS();
	for(const api of await fs.readdir(__dirname + "/api")) {
		await new AsyncFunction(await fs.readFile(path.join(__dirname, "api", api)))();
	}
		for(const worker of (Registry.get("system.autostart") || [])) {
			let work = new Worker(worker.src);
			autoStartWorkers.push({
				name: worker.name,
				src: worker.src,
				worker: work
			})
		}

		new AsyncFunction('root', '__dirname', await fs.readFile(taskbarPath + "/bar.js", "utf-8"))
		(document.body, taskbarPath);
	let wFile = path.join(process.env.HOME, ".config", "wallpaper.jpg");
	let time;
	renderWall();
	fso.watch(wFile, e => {
		if(!time) time = setTimeout(renderWall, 1000);
	});

	function renderWall() {
		clearTimeout(time);
		let registry = new Registry("system");
		let settings = registry.get();
		if(!fso.existsSync(wFile)) {
			console.log(wFile);
			fso.copyFileSync(path.join(osRoot, "resources", "wallpaper.jpg"), wFile);
		}
		if(!Object.getOwnPropertyNames(settings.wallpaper || {}).length)
			registry.set(Object.assign(settings, {
				wallpaper: {
																 positioning: "scalencrop",
															color: 'black'
				}
			}));
			let wpSettings = settings.wallpaper;
			let wpURL = "url('" + new URL("file://" + wFile).href + "?" + shell.uniqueId() + "')";
			switch(wpSettings.positioning) {
				case "scale":
					document.body.style.background = `${wpSettings.color} ${wpURL} 100% 100% no-repeat`;
					break;
				case "scalencrop":
					document.body.style.background = `${wpSettings.color} ${wpURL} center/cover no-repeat`;
					break;
				case "scalencontain":
					document.body.style.background = `${wpSettings.color} ${wpURL} center/contain no-repeat`;
					break;
				case "center":
					document.body.style.background = `${wpSettings.color} ${wpURL} no-repeat center`;
					break;
				case "tile":
					document.body.style.background = `${wpSettings.color} ${wpURL}`;
					break;
			}
	}

	function LoadCSS() {
		document.title = "AtomOS (Rendering...)";
		let cssList = [
		"node_modules/bootstrap/dist/css/bootstrap.min.css",
 "node_modules/@mdi/font/css/materialdesignicons.min.css",
 "node_modules/source-sans-pro/source-sans-pro.css",
 //"node_modules/jquery-ui-dist/jquery-ui.min.css",
 "front/desktop.css"
		];
		let promises = [];
		cssList.forEach(function(item) {
			promises.push(new Promise(resolve => {
				let style = document.createElement("link");
				style.rel = "stylesheet";
				style.href = path.join(app.getAppPath(), item);
				style.onload = resolve;
				document.head.appendChild(style);
			}));
		});
		return Promise.all(promises);
	}
})().then(e => document.title = "AtomOS (Render complete)");
