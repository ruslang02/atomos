const fs = require("fs").promises;
let button = document.createElement("button");
const Menu = require("@api/Menu"), AppWindow = require("@api/WindowManager"), Shell = require("@api/Shell");
let menu = new Menu([{
		label: "Refresh app list",
		icon: "refresh",
		click() {
			Elements.StartMenu.scanApps();
		}
	}, {type: "separator"}, {
		label: "File Manager",
		icon: "folder-outline",
		click() {
			AppWindow.launch("official/files");
		}
	},
		{
			label: "Terminal",
			icon:
				"console-line",
			click() {
				AppWindow.launch("official/terminal");
			}
		}
		,
		{
			label: "Settings",
			icon:
				"settings-outline",
			click() {
				Shell.openSettings();
			}
		}
		,
		{
			type: "separator"
		}
		,
		{
			label: "Toggle Developer Tools",
			icon:
				"developer-board",
			shortLabel:
				"Dev Tools",
			click:
				() => {
					require("electron").remote.getCurrentWindow().toggleDevTools();
				}
		}
		,
		{
			label: "Restart System UI",
			icon:
				"restart",
			shortLabel:
				"Reboot",
			click:
				() => {
					require("electron").remote.getCurrentWindow().reload();
				}
		}
		,
		{
			label: "Quit AtomOS",
			icon:
				"exit-to-app",
			shortLabel:
				"Quit",
			click:
				() => {
					window.close();
				}
		}
	])
;
body.className = "d-flex position-relative align-items-center ml-2 mr-3";
button.className = "btn border-0 rounded-max mdi mdi-36px lh-36 shadow d-flex align-items-center justify-content-center text-white p-0 my-1 mdi-chevron-up";
button.style.background = "linear-gradient(135deg, #283593, #1565c0)";
button.style.height = button.style.width = CSS.px(38);
button.style.zIndex = 1;
if (!Shell.isMobile) button.title = "All Apps";
button.addEventListener("click", e => {
	e.stopPropagation();
	Elements.StartMenu.toggle();
});
button.addEventListener("contextmenu", e => {
	e.stopPropagation();
	menu.popup();
});
button.style.transition = "transform .25s linear";
/*let searchBar = document.createElement("input");
searchBar.className = "form-control rounded-pill pl-5 shadow" + (Shell.ui.darkMode ? "bg-dark border-dark text-white" : "");
searchBar.style.cssText = "margin-left: -30px;width: 300px;height: 32px;";
searchBar.placeholder = "What are you up to today?";*/
body.append(button);
if (Shell.isMobile) {
	body.className = "d-flex justify-content-around flex-grow-1";
	let closeButton = document.createElement("button");
	closeButton.className = "mdi mdi-chevron-left mdi-36px btn d-flex align-items-center bg-transparent lh-36 py-1";
	closeButton.onclick = e => {
		e.stopPropagation();
		AppWindow.getFocusedWindow().close();
	};
	body.prepend(closeButton);
	let tasksButton = document.createElement("button");
	tasksButton.className = "mdi mdi-crop-square mdi-36px btn d-flex align-items-center bg-transparent lh-36 py-1";
	tasksButton.onclick = () => TaskManager.toggle();
	body.append(tasksButton);
}
if (!Shell.isMobile) new Tooltip(button);
window.addEventListener("keydown", e => {
	if (e.key === "Meta") window.__MetaKeyOverriden = false;
});
window.addEventListener("keyup", e => {
	if (!window.__MetaKeyOverriden && e.code === "KeyA") {
		if (Elements.StartMenu.classList.contains("hide"))
			Elements.StartMenu.open();
		Elements.StartMenu.AssistantButton.click();
		window.__MetaKeyOverriden = true;
	} else if (e.key === "Meta" && !window.__MetaKeyOverriden) Elements.StartMenu.toggle();
});

fs.readFile(__dirname + "/menu.js", "utf-8").then(code => {
	new Function('body', '__dirname', code)(body, __dirname)
});
return button;
