const cp = require("child_process");
let altTabbing = false;
let altTabWins = [];
let altTabCurrent;
let altTabTimer;
window.addEventListener("keydown", e => {
		if (e.code === "Tab" && e.altKey) {
			if (altTabTimer)
				clearTimeout(altTabTimer);
			altTabWins = []
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
	}
);
let timer;

function changeVolume(volume) {
	clearTimeout(timer);
	Elements.MenuBar.notifications.classList.add("d-none");
	Elements.MenuBar.quickItems.classList.add("d-none");
	Elements.MenuBar.soundSettings.classList.replace("d-none", "d-flex");
	Elements.MenuBar.classList.replace("hide", "show");
	Elements.BarItems["tray"].disabled = true;
	timer = setTimeout(() => {
			Elements.MenuBar.classList.replace("show", "hide");
			setTimeout(() => {
					Elements.MenuBar.notifications.classList.remove("d-none");
					Elements.MenuBar.quickItems.classList.remove("d-none");
					Elements.MenuBar.soundSettings.classList.replace("d-flex", "d-none");
					Elements.BarItems["tray"].disabled = false;

				}
				, shell.ui.flyAnimation);
		}
		, 3000)
	cp.execSync("amixer -q -D pulse sset Master " + volume);
	Elements.MenuBar.soundSettings.updateControls();
}
