module.exports = function (body) {
	const fs = require('fs').promises;
	const path = require('path');
	const Registry = require("@api/Registry"), Shell = require("@api/Shell");
	const cp = require("child_process");
	let overlay;
	if (!Registry.get("tray.quickTiles"))
		Registry.set("tray.quickTiles", ["@atomos/settings.wifi", "@atomos/settings.dnd", "@atomos/settings.radio", "@atomos/settings.sound", "@atomos/settings.brightness", "@atomos/settings.shortcut"])
	if (!Elements)
		window.Elements = [];
	Elements.MenuBar = document.createElement("aside");
	Elements.MenuBar.className = "position-absolute shadow-sm d-flex mb-0 flex-column hide fly up scrollable-y scrollable-x-0";
	Elements.MenuBar.style.right = 0;
	Elements.MenuBar.style.width = CSS.px(350);
	Elements.MenuBar.style.bottom = "var(--taskbar-height)";
	Elements.MenuBar.style.maxHeight = "var(--taskbar-y)";
	Elements.MenuBar.id = "official/tray";
	Elements.MenuBar.oncontextmenu = e => e.stopPropagation();
	Elements.MenuBar.style.zIndex = "990";
	if (Shell.isMobile) {
		Elements.MenuBar.classList.add("w-100", "h-100");
		Elements.MenuBar.classList.replace("m-2", "p-2");
		Elements.MenuBar.style.top = "29px";
		overlay = document.createElement("div");
		overlay.style.cssText = "position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0,0,0,0.5);z-index: 989; opacity:0; visibility: hidden";
		document.body.appendChild(overlay);
	}

	Elements.MenuBar.toggle = function () {
		if (Elements.MenuBar.classList.contains("show"))
			Elements.MenuBar.close();
		else
			Elements.MenuBar.open();
	};
	Elements.MenuBar.open = function () {
		Elements.Bar.keepOpen(true);
		Elements.MenuBar.notifications.show();
		Elements.MenuBar.classList.replace("hide", "show");
		Elements.BarItems["official/tray"].Container.classList.add("active");
		Elements.BarItems["official/tray"].Date.classList.remove("d-none", "hide");
		Elements.BarItems["official/tray"].NIcons.classList.replace("d-inline-flex", "d-none");
		if (overlay) {
			overlay.classList.remove("d-none");
			overlay.animate([{
				opacity: 0,
				visibility: "hidden"
			}, {
				opacity: 1,
				visibility: "visible"
			}], {
				fill: "forwards",
				duration: 200
			});
		}
	};
	Elements.MenuBar.close = function () {
		Elements.Bar.keepOpen(false);
		Elements.MenuBar.classList.replace("show", "hide");
		Elements.BarItems["official/tray"].Container.classList.remove("active");
		Elements.BarItems["official/tray"].Date.classList.add("hide");
		Elements.BarItems["official/tray"].NIcons.classList.replace("d-none", "d-inline-flex");
		if (overlay) {
			overlay.animate([{
				opacity: 1,
				visibility: "visible"
			}, {
				opacity: 0,
				visibility: "hidden"
			}], {
				fill: "forwards",
				duration: 200
			}).onfinish = () => overlay.classList.add("d-none");
		}
		setTimeout(() => {
			if (Elements.MenuBar.settings)
				Elements.MenuBar.settings.remove();
			Elements.BarItems["official/tray"].Date.classList.add("d-none");
			Elements.MenuBar.notifications.show();
			Elements.MenuBar.footerBar.classList.remove("d-none", "notification-showing");
		}, Shell.ui.flyAnimation);

	};
	Elements.MenuBar.addEventListener("click", function (e) {
		e.stopPropagation();
	});
	window.addEventListener("click", Elements.MenuBar.close);
	renderQuickSection();
	Elements.MenuBar.notifications = [];

	function updN() {
		Elements.MenuBar.nCount.innerText = Elements.MenuBar.notifications.length + " new notification" + (Elements.MenuBar.notifications.length !== 1 ? "s" : "");
		Elements.MenuBar.clearN.classList.toggle("show", Elements.MenuBar.notifications.length)
	}

	Elements.MenuBar.notifications = new Proxy(Elements.MenuBar.notifications, {
		apply: function (target, thisArg, argumentsList) {
			return thisArg[target].apply(this, argumentsList);
		},
		deleteProperty: function () {
			updN();
			return true;
		},
		set: function (target, property, value) {
			target[property] = value;
			updN();
			return true;
		}
	});
	Elements.MenuBar.notifications.hide = function () {
		for (const n of Elements.MenuBar.notifications)
			n.hide();
	};
	Elements.MenuBar.notifications.show = function () {
		for (const n of Elements.MenuBar.notifications)
			n.show();
	};

	function loadQuickTiles() {
		let quickTiles = Registry.get("tray.quickTiles");
		Elements.MenuBar.quickItems.items = {};
		Elements.MenuBar.quickItems.innerHTML = "";
		for (const tile of quickTiles) {
			let [app, tileName] = tile.split(".");
			app = app.replace("@atomos", "official");
			//let pkg = require("@apps/" + app + "/package.json");
			Elements.MenuBar.quickItems.items[tile] = require(path.join(osRoot, "apps", app, "tray_plugins", tileName + ".js"));
		}
		Elements.MenuBar.quickItems.append(...Object.values(Elements.MenuBar.quickItems.items));
	}

	Elements.MenuBar.reloadQT = loadQuickTiles;
	loadQuickTiles();
	body.appendChild(Elements.MenuBar);

	async function renderQuickSection() {
		//TODO: Make more customizable

		Elements.MenuBar.footerBar = document.createElement("section");
		Elements.MenuBar.footerBar.className = "toast card shadow-lg position-sticky fade show mb-0 flex-shrink-0 " + (Shell.ui.darkMode ? "bg-dark text-white" : "bg-white");
		Elements.MenuBar.footerBar.style.order = Elements.MenuBar.footerBar.style.zIndex = 10000;
		Elements.MenuBar.footerBar.style.marginTop = CSS.rem(0.75);
		Elements.MenuBar.footerBar.style.bottom = 0;
		Elements.MenuBar.nBar = document.createElement("div");
		Elements.MenuBar.nBar.className = "d-flex border-bottom align-items-center px-3 py-2" + (Shell.ui.darkMode ? " border-secondary" : "");
		Elements.MenuBar.nCount = document.createElement("div");
		Elements.MenuBar.nCount.className = Shell.ui.darkMode ? "text-white" : "text-muted";
		Elements.MenuBar.nCount.innerText = "No new notifications";
		Elements.MenuBar.clearN = document.createElement("button");
		Elements.MenuBar.clearN.className = "btn btn-secondary rounded-pill py-1 lh-r1 px-2 ml-auto fade show";
		Elements.MenuBar.clearN.innerText = "Clear all";
		Elements.MenuBar.clearN.onclick = () => {
			Elements.MenuBar.notifications.forEach((n, i) => {
				setTimeout(() => n.dismiss(), i * 5);
			});
			Elements.MenuBar.notifications.length = 0;
		};
		Elements.MenuBar.nBar.append(Elements.MenuBar.nCount, Elements.MenuBar.clearN);
		Elements.MenuBar.quickItems = document.createElement("section");
		Elements.MenuBar.footerBar.append(Elements.MenuBar.nBar, Elements.MenuBar.quickItems);
		Elements.MenuBar.prepend(Elements.MenuBar.footerBar);
		Elements.MenuBar.quickItems.className = "p-3 flex-shrink-0";
		Elements.MenuBar.quickItems.style.cssText = "display: grid; grid-template-columns: repeat(4, auto); justify-items: center; grid-row-gap: 1rem";
		Elements.MenuBar.quickItems.items = [];
		if (Shell.isMobile)
			Elements.MenuBar.footerBar.classList.add("mb-2");
	}
};