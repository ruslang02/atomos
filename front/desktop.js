const BSN = require('bootstrap.native/dist/bootstrap-native-v4');/*
window.$ = window.jQuery = require("jquery");
let jui = document.createElement("script");
jui.src = "../node_modules/jquery-ui-dist/jquery-ui.min.js";
document.body.append(jui);*/
let Elements = {};
let shutdown = false
const FADE_ANIMATION_DURATION = 150;
const FLY_ANIMATION_DURATION = 200;
const osRoot = require("electron").remote.app.getAppPath();
const isDebug = require("electron").remote.getGlobal("isDebug");
(function() {
	const {
		remote
	} = require("electron");

	const {
		app
	} = remote;
	const fs = require("fs-extra");
	const path = require("path");
	const taskbarPath = path.join(app.getAppPath(), "apps/bar");
	LoadCSS().then(async function() {
		for(const api of await fs.readdir(__dirname + "/api")) {
			new Function(await fs.readFile(path.join(__dirname, "api", api)))();
		}
		renderWall();
		new Function('root', '__dirname', await fs.readFile(taskbarPath + "/bar.js", "utf-8"))
		(document.body, taskbarPath);
		document.title = "AtomOS (Render complete)";
	}).catch(console.error);

	function renderWall() {
		let registry = new Registry("system");
		if(!Object.getOwnPropertyNames(registry.get().wallpaper || {}).length)
			registry.set(Object.assign(registry.get(), {
				wallpaper: {
					path: path.join(app.getAppPath(), "wallpaper.jpg"),
					positioning: "scalencrop",
					color: 'black'
				}
			}));
		let wpSettings = registry.get().wallpaper;
		let wpURL = "url('" + new URL("file://" + wpSettings.path).href + "')";
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
})()