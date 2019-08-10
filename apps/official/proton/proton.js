const Shell = require("@api/Shell");
const AppWindow = require("@api/WindowManager");
const Registry = require(`@api/Registry`);
const Menu = require(`@api/Menu`);
const win = AppWindow.getCurrentWindow();
const fs = require("fs");
win.on('second-instance', (e, args) => {
	if (args.newWindow) e.preventDefault();
	else if (args.file || args.url) newTab(args.file || args.url);
	win.show();
});
const isDarkMode = win.options.darkMode;

if (!Registry.get("proton.history")) Registry.set("proton", {
	history: [],
	saveHistory: true
});
let preferences = new Proxy(Registry.get("proton"), {
	set(t, p, v) {
		if (p === "history" && false) {
			v.forEach((item) => {
				$("datalist").append("<option>" + item + "</option>");
			});
		}
		t[p] = v;
		Registry.set("proton", preferences);
		return true;
	}
});
let tabs = document.createElement("section");
tabs.className = "d-flex scrollable-x-0 flex-shrink-0 text-truncate px-1";
tabs.style.marginBottom = "-1px";
tabs.style.zIndex = "100";
tabs.style.maxWidth = "calc(100% - 110px)";
tabs.onmousewheel = e => tabs.scrollLeft += e.deltaY;
win.ui.root.style.overflow = "unset";
win.ui.header.classList.remove("border-bottom", "p-2");
win.ui.header.classList.add("pt-2", "px-2");
win.ui.buttons.style.marginTop = "-0.5rem";
win.ui.title.classList.add("d-none");
let ntbtn = document.createElement("button");
ntbtn.className =
	"btn btn-white p-0 mdi mdi-plus rounded-circle ml-1 mdi-24px d-flex " + (
		isDarkMode ? "text-white" : "text-dark");
ntbtn.style.lineHeight = "24px";
ntbtn.onclick = () => newTab();
win.ui.header.prepend(tabs, ntbtn);

let nav = document.createElement("form");
nav.className = "d-flex p-1 scrollable-y-0 align-items-center shadow-sm " + (
	isDarkMode ? "bg-dark" : "bg-white");
nav.style.zIndex = 2;
nav.back = document.createElement("button");
nav.forward = document.createElement("button");
nav.back.type = "button";
nav.forward.type = "button";
nav.back.onclick = e => tabs.active.webview.goBack();
nav.forward.onclick = e => tabs.active.webview.goForward();
nav.back.className =
	"btn mr-1 mdi mdi-arrow-left rounded-circle mdi-21px lh-21 d-flex p-1 " + (
		isDarkMode ? "btn-dark" : "btn-white");
nav.forward.className =
	"btn mr-1 mdi mdi-arrow-right rounded-circle mdi-21px lh-21 d-flex p-1 " + (
		isDarkMode ? "btn-dark" : "btn-white");
nav.back.disabled = true;
nav.forward.disabled = true;
nav.refresh = document.createElement("button");
nav.refresh.type = "submit";
nav.refresh.className =
	"btn mr-2 mdi rounded-circle mdi-refresh mdi-21px lh-21 d-flex p-1 " + (
		isDarkMode ? "btn-dark" : "btn-white");
let address = document.createElement("input");
address.className =
	"form-control mr-2 rounded-pill form-control-sm border-0 h-auto py-1 px-3 " + (isDarkMode ?
	"bg-secondary text-white" : "bg-light");
address.onblur = () => tabs.active.update();
address.change = function (url) {
	if (document.activeElement !== address) address.value = url;
	if (!address.value.trim() || address.value.trim() === "about:blank") address.value = tabs.active.webview.getURL();
};
address.blur = function () {
	tabs.active.update();
};

nav.menu = document.createElement("button");
nav.menu.className =
	"btn mdi mdi-dots-vertical rounded-circle mdi-21px lh-21 d-flex p-1 " + (
		isDarkMode ? "btn-dark" : "btn-white");
nav.menu.type = "button";
nav.menu.addEventListener("click", e => {
	e.stopPropagation();
	const pos = win.getContentPosition();
	nav.menu.menu.popup({
		x: nav.menu.offsetLeft + pos[0],
		y: nav.menu.offsetTop + nav.menu.offsetHeight + pos[1]
	});
});
nav.menu.menu = new Menu([{
	label: "Home",
	icon: "home-outline",
	visible: false,
	click() {
		newTab('proton://home');
	}
}, {
	label: "History",
	icon: "history",
	visible: false,
	click() {
		newTab('proton://history')
	}
}, {
	label: "Settings",
	icon: "settings-outline",
	visible: false,
	click() {
		newTab('proton://settings')
	}
},
	/* {
		type: "separator"
	},*/
	{
		label: "Toggle full screen mode",
		icon: "fullscreen",
		click() {
			win.setFullScreen(!win.isFullScreen());
		}
	}, {
		label: "Toggle Night mode",
		icon: "eye",
		visible: false,
		click() {
		}
	}, {
		type: "separator"
	},
	{
		label: "Open Developer Tools",
		icon: "developer-board",
		visible: false,
		click() {
			tabs.active.webview.getWebContents().openDevTools();
		}
	}, {
		label: "About Proton",
		icon: "information-outline",
		click() {
			Shell.showMessageBox({
				backdrop: false,
				icon: "earth",
				iconBG: "linear-gradient(135deg, #1b5e20, #689f38)",
				title: "Proton",
                message: `Version ${require(__dirname + "/package.json").version}. Based on <code>&lt;webview&gt;</code> + Electron.<br/><br/>
&copy; Copyright 2017-2018 AtomOS devs.`
			})
		}
	}
]);
nav.addEventListener("submit", e => {
	e.preventDefault();
	if (tabs.active) tabs.active.navigate(address.value);
});
nav.append(nav.back, nav.forward, nav.refresh, address, nav.menu);
let tabCollection = document.createElement("section");
tabCollection.className = "flex-grow-1 h-100 position-relative";
let urlTooltip = document.createElement("label");
urlTooltip.className = "p-1 m-0 text-truncate fade show " + (isDarkMode ?
	"bg-dark text-white" : "bg-light");
urlTooltip.style.cssText =
	"bottom:0;left:0;position:absolute;max-width: 400px;border: 1px solid lightgray; border-bottom-left-radius: .25rem";
win.ui.body.append(nav, tabCollection, urlTooltip);
setImmediate(() => newTab(win.arguments.file || win.arguments.url));


let tabMenu = new Menu([{
	label: "Refresh",
	icon: "refresh",
	accelerator: "F5",
	click() {
		tabs.active.webview.reload();
	}
}, {
	type: "separator"
}, {
	label: "Close other tabs",
	icon: "notification-clear-all",
	click() {
		for (const tab of tabs.children)
			if (tab !== tabs.active) tab.close();
	}
}, {
	label: "Close tab",
	icon: "close",
	accelerator: "Ctrl+W",
	click() {
		tabs.active.close();
	}
}]);

function newTab(url = "https://www.startpage.com") {
	if (tabs.active) tabs.active.deactivate();
	let tab = document.createElement("tab");
	tab.section = document.createElement("section");
	tab.section.className = "d-flex w-100 h-100 position-absolute";
	tab.dataset.draggable = false;
	tab.loaded = false;
	tab.webview = document.createElement("webview");
	tab.webview.className =
		"flex-grow-1 w-100 h-100 d-inline-flex very-rounded-bottom scrollable-0 " + (win.options.darkMode ? "bg-dark" : "bg-white");
	tab.webview.src = "about:blank";
	tab.webview.autosize = true;
	/*tab.devToolsWebview = document.createElement("webview");
	tab.devToolsWebview.style.resize = "horizontal";
	tab.devToolsWebview.className =
		"w-100 h-100 d-inline-flex rounded-bottom scrollable-0 " + (win.options.darkMode ? "bg-dark" : "bg-white");*/
	tab.section.append(tab.webview/*,tab.devToolsWebview*/);
	tabCollection.appendChild(tab.section);
	tab.className =
		"nav-item shadow-sm nav-link align-items-center position-relative d-flex fade " +
		(isDarkMode ? "bg-dark text-white" : "bg-white");
	tab.style.transition = "background .2s linear";
	setTimeout(() => tab.classList.add("show"), Shell.ui.fadeAnimation);
	tab.style.borderRadius = "0.5rem 0.5rem 0 0";
	tab.icon = new Image(14, 14);
	tab.icon.className = "rounded-circle mr-2";
	tab.header = document.createElement("div");
	tab.header.className = "flex-grow-1 text-truncate lh-r1 smaller";
	tab.header.style.maxWidth = CSS.px(150);
	tab.header.innerText = "untitled";
	tab.addEventListener("contextmenu", e => {
		e.stopPropagation();
		tabMenu.popup();
	});
	tab.addEventListener("mousedown", () => tab.activate());
	tab.addEventListener("click", e => e.stopPropagation());
	tab.closeButton = document.createElement("button");
	tab.closeButton.className =
		"btn btn-outline-danger border-0 text-decoration-none rounded mdi-close mdi mdi-18px lh-18 p-0 ml-2 d-flex";
	tab.closeButton.onclick = () => tab.close();
	tab.append(tab.icon, tab.header, tab.closeButton);
	tabs.append(tab);
	tab.initEvents = function () {
		tab.webview.addEventListener("will-navigate", tab.update);
		tab.webview.addEventListener("did-navigate", tab.update);
		tab.webview.addEventListener("page-title-updated", tab.update);
		tab.webview.addEventListener("page-favicon-updated", e => {
			tab.icon.src = e.favicons[0];
		});
		tab.webview.addEventListener("new-window", e => {
			e.preventDefault();
			if (["default", "foreground-tab", "background-tab", "new-window"].includes(
				e.disposition))
				newTab(e.url);
		});
		tab.webview.addEventListener("did-get-response-details", e => {
			e.preventDefault();
		});
		tab.webview.addEventListener("close", e => tab.close());
		tab.webview.addEventListener("update-target-url", e => {
			if (tabs.active === tab) urlTooltip.innerText = e.url;
		});
		tab.webview.addEventListener("dom-ready", e => {
			if (!tab.loaded) {
				tab.navigate(url);
				tab.loaded = true;
				//tab.webview.getWebContents().setDevToolsWebContents(tab.devToolsWebview.getWebContents());
				//tab.webview.getWebContents().on("new-window", console.log);
				//tab.webview.getWebContents().on("did-get-response-details", console.log);
			} else tab.update();
		});
		tab.webview.addEventListener("load-commit", e => {
			if (!preferences.saveHistory)
				return;
			let _this = tab.webview;
			if (e.isMainFrame) {
				preferences.history.push({
					title: _this.getTitle(),
					time: new Date().getTime(),
					url: _this.getURL()
				});
			}
			tab.update();
		});
	};
	tab.initEvents();
	address.focus();
	tabs.active = tab;
	tab.close = function () {
		if (tabs.childElementCount === 1) win.close();
		else {
			tabs.active = (tabs.active.nextSibling || tabs.active.previousSibling);
			tab.classList.remove("show");
			setTimeout(() => tab.remove(), Shell.ui.fadeAnimation);
			tab.section.remove();
			tabs.active.activate();
		}
	};
	tab.activate = function () {
		if (tabs.active) tabs.active.deactivate();
		tab.classList.add(isDarkMode ? "bg-dark" : "bg-white", "shadow-sm");
		tab.closeButton.classList.replace("d-none", "d-flex");
		tab.section.classList.replace("d-none", "d-flex");
		tabs.active = tab;
		tab.update();
	};
	tab.update = function () {
		let w = tab.webview;
		try {
			tab.header.innerText = w.getTitle();
		} catch {
			setTimeout(() => tab.header.innerText = w.getTitle(), 100)
		}
		if (tab === tabs.active) {
			address.change(w.getURL());
			win.setTitle(w.getTitle() + " - Proton Web Browser");
			nav.back.disabled = !w.canGoBack();
			nav.forward.disabled = !w.canGoForward();
		}
		if (!address.value.trim() || address.value.trim() === "about:blank") address.value = tabs.active.webview.getURL();
		tab.checkForAppURLs();
	};
	tab.deactivate = function () {
		tab.classList.remove(isDarkMode ? "bg-dark" : "bg-white", "shadow-sm");
		tab.closeButton.classList.replace("d-flex", "d-none");
		tab.section.classList.replace("d-flex", "d-none");
	};
	tab.navigate = function (url) {
		try {
			url = new URL((!url.includes("://") && url.includes(".") ? "http://" : "") + url);
		} catch (e) {
			url = "http://google.com/search?q=" + url;
		}
		tab.checkForAppURLs();
		tab.webview.src = url.href || url;
	};
	tab.checkForAppURLs = () => {
		let url = tab.webview.getURL();
		if (url.includes("youtube.com") && url.includes("watch") && tabs.active === tab) {
			let offerOk = document.createElement("button");
			offerOk.className = "btn btn-danger rounded-max btn-sm mdi mdi-18px lh-18 d-flex mr-2 mdi-youtube font-weight-bolder";
			offerOk.innerHTML = "&nbsp;&nbsp;YouTube";
			offerOk.onclick = () => {
				AppWindow.launch("official/youtube", {
					url
				});
				tab.close();
			};
			nav.insertBefore(offerOk, nav.menu);
			tab.webview.addEventListener("load-commit", () => offerOk.remove());
		}
	};

	return tab.webview;
}

let css = document.createElement("style");
let id = win.id;
css.innerHTML =
	`
window[id='${id}'] tab:before {
  z-index: 1;
}
window[id='${id}'] tab:hover {
	background: rgba(255,255,255,0.5)
}
window[id='${id}'] tab:before,
window[id='${id}'] tab:after {
  position: absolute;
  bottom: -1px;
  width: .5rem;
  height: .5rem;
  content: " ";
}
window[id='${id}'] tab:before {
  left: -.5rem;
}
window[id='${id}'] tab:after {
  right: -.5rem;
}
window[id='${id}'] tab:before {
  border-bottom-right-radius: .5rem;
}
window[id='${id}'] tab:after {
  border-bottom-left-radius: .5rem;
}
window[id='${id}'] tab.bg-white:before {
  box-shadow: 2px 2px 0 white;
}
window[id='${id}'] tab.bg-white:after {
  box-shadow: -2px 2px 0 white;
}
window[id='${id}'] tab.bg-dark:before {
  box-shadow: 2px 2px 0 var(--dark);
}
window[id='${id}'] tab.bg-dark:after {
  box-shadow: -2px 2px 0 var(--dark);
}
window[id='${id}'] window-body > label:empty{
  display:none;
}
`;
win.ui.body.append(css);
