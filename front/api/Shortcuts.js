const cp = require("child_process");
let altTabbing = false;
let altTabWins = [];
let altTabCurrent;
let altTabTimer;
window.addEventListener("keydown", e => {
	if (e.code === "F4" && e.altKey) {
		require("@api/WindowManager").getFocusedWindow().close();
	}
	if (e.code === "F3" && e.altKey) {
		require("@api/WindowManager").getFocusedWindow().task.menu.popup();
	}
	if (e.code === "Tab" && e.altKey) {
		if (altTabTimer)
			clearTimeout(altTabTimer);
		altTabWins = [];
		for (const win of document.querySelectorAll("window")) {
			altTabWins.push(win);
		}
		altTabWins = altTabWins.sort((a, b) => {
				return a.style.zIndex - b.style.zIndex;
			}
		);
		if (!altTabbing)
			altTabCurrent = altTabWins.length - 1;
		console.log(altTabbing);
		altTabbing = true;
		if (altTabCurrent === 0)
			altTabCurrent = altTabWins.length;
		altTabWins[--altTabCurrent].appWindow.show();
		console.log(altTabCurrent);
		altTabTimer = setTimeout(e => altTabbing = false, 1000);
	}
	if (e.code === "AudioVolumeUp")
		changeVolume("5%+");
	if (e.code === "AudioVolumeDown")
		changeVolume("5%-");
	if (e.code === "AudioVolumeMute")
		changeVolume("toggle");
});
let timer;

function changeVolume(volume) {
	clearTimeout(timer);
	cp.execSync("amixer -q -D pulse sset Master " + volume);
	Elements.MenuBar.soundSettings.updateControls();
	Elements.MenuBar.soundSettings.classList.replace("d-none", "d-flex");
	if (Elements.MenuBar.classList.contains("show")) return;
	let _hidedNodes = [];
	for (const node of Elements.MenuBar.childNodes) {
		if (node !== Elements.MenuBar.soundSettings) {
			_hidedNodes.push(node);
			node.classList.add("notification-showing");
		}
	}
	Elements.MenuBar.open();

	timer = setTimeout(() => {
		Elements.MenuBar.close();
		setTimeout(() => {
			Elements.MenuBar.soundSettings.classList.replace("d-flex", "d-none");
			if (_hidedNodes) {
				for (const node of _hidedNodes)
					node.classList.remove("notification-showing");
				_hidedNodes = false;
			}
		}, Shell.ui.flyAnimation);
	}, 3000);
}
