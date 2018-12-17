const win = AppWindow.fromId(WINDOW_ID);
let nav = {
	backButton: document.createElement("button"),
	forwardButton: document.createElement("button"),
	mainBar: document.createElement("div"),
	secSwitch: document.createElement("div"),
	install: document.createElement("button"),
	remove: document.createElement("button")
};
win.ui.title.classList.add("d-none");
nav.backButton.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mdi-arrow-left mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.backButton.disabled = true;
nav.backButton.type = "button";
nav.backButton.onclick = e => navigate(":back");
nav.backButton.title = "Previous (Ctrl+<i class='mdi mdi-chevron-left'></i>)";

nav.forwardButton.className = "btn btn-sm mdi d-flex shadow-sm align-items-center m-0 mdi-arrow-right mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.forwardButton.disabled = true;
nav.forwardButton.type = "button";
nav.forwardButton.onclick = e => navigate(":forward");
nav.forwardButton.title = "Next (Ctrl+<i class='mdi mdi-chevron-right'></i>)";

nav.mainBar.className = "btn-group align-items-stretch flex-shrink-0 mr-2";
nav.mainBar.append(nav.backButton, nav.forwardButton);

nav.install.className = "btn btn-sm btn-primary px-3 lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.install.innerText = "Applications";
nav.install.onclick = e => {
	nav.remove.classList.add(win.options.darkMode ? "btn-dark" : "btn-light");
	nav.install.classList.remove(win.options.darkMode ? "btn-dark" : "btn-light");
	appSection.classList.remove("d-none");
	manageSection.classList.add("d-none");
}

nav.remove.className = "btn btn-sm btn-primary px-4 lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.remove.innerText = "Manage";
nav.remove.onclick = e => navigate(":forward");

nav.secSwitch.className = "btn-group align-items-stretch flex-shrink-0 mx-auto";
nav.secSwitch.append(nav.install, nav.remove);

win.ui.header.prepend(nav.mainBar, nav.secSwitch);

let appSection = document.createElement("section");
appSection.className = "flex-grow-1";
let manageSection = document.createElement("section");
manageSection.className = "flex-grow-1 d-none";

root.append(appSection, manageSection);

function refreshApps() {
	fetch("https://atomos.org.uk/api?action=listApps", {
		method: "GET",
		body: "action=listApps"
	})
}