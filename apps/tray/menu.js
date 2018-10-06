const fs = require('fs').promises;
const path = require('path');
const wc = require("electron").remote.getCurrentWebContents();
let overlay;
Elements.MenuBar = document.createElement("aside");
Elements.MenuBar.className = "position-fixed m-2 d-flex flex-column-reverse hide fly up";
Elements.MenuBar.style.zIndex = "990";
if(!isMobile) {
Elements.MenuBar.style.width = "350px";

} else {
	Elements.MenuBar.classList.add("w-100", "h-100");
	Elements.MenuBar.classList.replace("m-2", "p-2")
	Elements.MenuBar.style.top = "29px";
	Elements.MenuBar.classList.replace("flex-column-reverse", "flex-column");
	overlay = document.createElement("div");
	overlay.style.cssText = "position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0,0,0,0.5);z-index: 989; opacity:0; visibility: hidden"
	document.body.append(overlay);
}

Elements.MenuBar.toggle = function() {
  if (Elements.MenuBar.classList.contains("show"))
    Elements.MenuBar.close();
  else Elements.MenuBar.open();
}
Elements.MenuBar.open = function() {
  Elements.MenuBar.classList.replace("hide", "show")
  Elements.BarItems["tray"].Container.classList.add("active");
  Elements.BarItems["tray"].Date.classList.remove("d-none", "hide");
  Elements.BarItems["tray"].NIcons.classList.replace("d-inline-flex", "d-none");
	if(overlay) {
		overlay.classList.remove("d-none")
		overlay.animate([{
			opacity:0,
			visibility: "hidden"
		}, {
			opacity:1,
			visibility: "visible"
		}], {
			fill: "forwards",
			duration: 200
		});
	}
}
Elements.MenuBar.close = function() {
  Elements.MenuBar.classList.replace("show", "hide")
  Elements.BarItems["tray"].Container.classList.remove("active");
  Elements.BarItems["tray"].Date.classList.add("hide");
	setTimeout(e => {
    if (Elements.MenuBar.settings) Elements.MenuBar.settings.remove();
	  Elements.BarItems["tray"].Date.classList.add("d-none");
  }, FLY_ANIMATION_DURATION);
  Elements.BarItems["tray"].NIcons.classList.replace("d-none", "d-inline-flex");
	if(overlay) {
		overlay.animate([{
			opacity:1,
			visibility: "visible"
		}, {
			opacity:0,
			visibility: "hidden"
		}], {
			fill: "forwards",
			duration: 200
		}).onfinish = e => overlay.classList.add("d-none");
	}
}

Elements.MenuBar.addEventListener("click", function(e) {
  e.stopPropagation();
});
window.addEventListener("click", Elements.MenuBar.close);
renderQuickSection();
renderNotifications()
document.body.appendChild(Elements.MenuBar);
if(!isMobile) update();
if(!isMobile) new ResizeObserver(update).observe(Elements.Bar);
if(!isMobile) window.addEventListener("resize", update);

function update() {
  Elements.MenuBar.style.right = 0;
  Elements.MenuBar.style.bottom = Elements.Bar.clientHeight + "px";
  Elements.MenuBar.style.maxHeight = "calc(" + (document.body.clientHeight - Elements.Bar.clientHeight) + "px - 1rem)";
}

function renderQuickSection() { //TODO: Make more customizable
  Elements.MenuBar.quickItems = document.createElement("section");
  Elements.MenuBar.quickItems.className = "card shadow flex-row p-3 fade show justify-content-around flex-shrink-0";
	if(isMobile) Elements.MenuBar.quickItems.classList.add("mb-2")
  let itemBattery = document.createElement("button");
  let itemDND = document.createElement("button");
  let itemSound = document.createElement("button");
  let itemSettings = document.createElement("button");

  itemBattery.className = "rounded-circle btn btn-primary mdi mdi-24px mdi-power-plug";
  itemDND.className = "rounded-circle btn btn-secondary mdi mdi-24px mdi-do-not-disturb";
  itemDND.onclick = e => {
    window.NOTIFICATIONS_MUTED = !window.NOTIFICATIONS_MUTED
    itemDND.classList.toggle("btn-primary", window.NOTIFICATIONS_MUTED);
    itemDND.classList.toggle("btn-secondary", !window.NOTIFICATIONS_MUTED);
  }
  itemSound.className = "rounded-circle btn btn-primary mdi mdi-24px mdi-volume-high";
  itemSound.onclick = e => {
    let muted = wc.isAudioMuted();
    wc.setAudioMuted(!muted);
    itemSound.classList.toggle("btn-primary", muted);
    itemSound.classList.toggle("btn-secondary", !muted);
  }
  itemSettings.className = "rounded-circle btn btn-info mdi mdi-24px mdi-settings";
  itemSettings.onclick = openSettings;
  Elements.MenuBar.quickItems.append(itemBattery, itemDND, itemSound, itemSettings);
  if(!isMobile) Elements.MenuBar.appendChild(Elements.MenuBar.quickItems);
	else Elements.MenuBar.prepend(Elements.MenuBar.quickItems)
}

async function openSettings() {
  Elements.MenuBar.settings = document.createElement("section");
  Elements.MenuBar.settings.className = "card shadow fade scrollable-0 position-absolute w-100";
  Elements.MenuBar.settings.style.zIndex = 100;
	if(isMobile) {
		Elements.MenuBar.settings.style.top = 0;
		Elements.MenuBar.settings.style.left = 0;
		Elements.MenuBar.settings.classList.add("flex-column-reverse")
	}
	setTimeout(e => Elements.MenuBar.settings.classList.add("show"), FADE_ANIMATION_DURATION);
  Elements.MenuBar.settings.style.height = "450px";
  new Function('root', await fs.readFile(path.join(osRoot, "apps", "settings", "settings.js")))(Elements.MenuBar.settings);
  Elements.MenuBar.prepend(Elements.MenuBar.settings);
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
