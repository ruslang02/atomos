const fs = require('fs-extra');
const path = require('path');

	Elements.MenuBar = document.createElement("aside");
	Elements.MenuBar.className = "position-fixed m-2 d-flex flex-column-reverse hide fly up";
	Elements.MenuBar.style.minWidth = "350px";
	Elements.MenuBar.style.maxWidth = "400px";
	Elements.MenuBar.style.zIndex = "990";

	Elements.MenuBar.toggle = function() {
		if (Elements.MenuBar.classList.contains("show"))
			Elements.MenuBar.close();
		else Elements.MenuBar.open();
	}
	Elements.MenuBar.open = function() {
		Elements.MenuBar.classList.replace("hide", "show")
		Elements.BarItems["tray"].Container.classList.add("active");
		Elements.BarItems["tray"].Date.classList.remove("d-none");
		Elements.BarItems["tray"].NIcons.classList.replace("d-inline-flex", "d-none");
	}
	Elements.MenuBar.close = function() {
		if(Elements.MenuBar.settings) {
			Elements.MenuBar.settings.remove();
			Elements.MenuBar.quickItems.classList.remove("d-none");
		}
		Elements.MenuBar.classList.replace("show", "hide")
		Elements.BarItems["tray"].Container.classList.remove("active");
		Elements.BarItems["tray"].Date.classList.add("d-none");
		Elements.BarItems["tray"].NIcons.classList.replace("d-none", "d-inline-flex");
	}

	Elements.MenuBar.addEventListener("click", function(e) {
		e.stopPropagation();
	});
	window.addEventListener("click", Elements.MenuBar.close);
	renderQuickSection();
	renderNotifications()
	document.body.appendChild(Elements.MenuBar);
	update();
	new ResizeObserver(update).observe(Elements.Bar);
	window.addEventListener("resize", update)

function update() {
	Elements.MenuBar.style.right = 0;
	Elements.MenuBar.style.bottom = Elements.Bar.clientHeight + "px";
	Elements.MenuBar.style.maxHeight = "calc(" + (document.body.clientHeight - Elements.Bar.clientHeight) + "px - 1rem)";
}

function renderQuickSection() { //TODO: Make more customizable
	Elements.MenuBar.quickItems = document.createElement("section");
	Elements.MenuBar.quickItems.className = "card shadow flex-row p-3 justify-content-around flex-shrink-0";

	let itemBattery = document.createElement("button");
	let itemDND = document.createElement("button");
	let itemSound = document.createElement("button");
	let itemSettings = document.createElement("button");

	itemBattery.className = "rounded-circle btn btn-primary mdi mdi-24px mdi-battery-charging-80";
	itemDND.className = "rounded-circle btn btn-secondary mdi mdi-24px mdi-do-not-disturb";
	itemSound.className = "rounded-circle btn btn-primary mdi mdi-24px mdi-volume-high";
	itemSettings.className = "rounded-circle btn btn-secondary mdi mdi-24px mdi-settings";
	itemSettings.onclick = openSettings;
	Elements.MenuBar.quickItems.append(itemBattery, itemDND, itemSound, itemSettings);
	Elements.MenuBar.appendChild(Elements.MenuBar.quickItems)
}

async function openSettings() {
	Elements.MenuBar.settings = document.createElement("section");
	Elements.MenuBar.settings.className = "card shadow scrollable-0";
	Elements.MenuBar.settings.style.height = "450px";
	new Function('root', await fs.readFile(path.join(osRoot, "apps", "settings", "settings.js")))(Elements.MenuBar.settings);
	Elements.MenuBar.prepend(Elements.MenuBar.settings);
	Elements.MenuBar.quickItems.classList.add("d-none");
}

function renderNotifications() {
	Elements.MenuBar.notifications = document.createElement("notifications");
	Elements.MenuBar.notifications.className = "flex-grow-1 scrollable-y scrollable-x-0";
	Elements.MenuBar.notifications.none = document.createElement("section");
	Elements.MenuBar.notifications.none.className = "card shadow flex-column mb-2 p-3 text-center text-muted font-italic";
	Elements.MenuBar.notifications.none.innerText = "No new notifications";
	Elements.MenuBar.notifications.appendChild(Elements.MenuBar.notifications.none);
	Elements.MenuBar.appendChild(Elements.MenuBar.notifications)
}
let notificationsCount = Elements.MenuBar.notifications.childElementCount - 1;
new MutationObserver(e => {
	notificationsCount = e[0].target.childNodes.length - 1;
	Elements.MenuBar.notifications.none.classList.toggle("d-none", !!notificationsCount);
}).observe(Elements.MenuBar.notifications, {
	childList: true
});
