const registry = new Registry("proton");
const win = AppWindow.fromId(WINDOW_ID);
win.on('second-instance', (e, args) => {
	if (args.newWindow) e.preventDefault();
			 else if (args.file) newTab(args.file);
			 win.show();
})

if (!Object.keys(registry.get()).length) registry.set({
	history: [],
	nightMode: 1,
	saveHistory: true
});
let preferences = new Proxy(registry.get(), {
	set(t, p, v) {
		if (p === "nightMode" && false) {
			if (v) {
				$("body").addClass("night-mode");
				$("input").addClass("btn-outline-light");
			} else {
				$("body").removeClass("night-mode");
				$("input").removeClass("btn-outline-light");
			}
		}
		if (p === "history" && false) {
			v.forEach((item) => {
				$("datalist").append("<option>" + item + "</option>");
			});
		}

		t[p] = v;
		registry.set(preferences)
		return true;
	}
});
let tabs = document.createElement("section");
tabs.className = "d-flex scrollable-x-0 flex-shrink-0 text-truncate px-3";
tabs.style.marginBottom = "-1px";
tabs.style.zIndex = "100";
tabs.style.maxWidth = "calc(100% - 100px)"
tabs.onmousewheel = e => tabs.scrollLeft += e.deltaY;
win.ui.root.style.overflow = "unset";
win.ui.header.classList.remove("border-bottom", "py-1");
win.ui.header.classList.add("pt-2");
win.ui.header.style.boxShadow = "inset 0px 0px 0px 50px #6c757d2b"
win.ui.buttons.style.marginTop = "-0.5rem";
win.ui.title.classList.add("d-none");
let ntbtn = document.createElement("button");
ntbtn.className = "btn btn-white p-0 mdi mdi-plus mdi-24px d-flex text-dark";
ntbtn.style.lineHeight = "24px";
ntbtn.onclick = e => newTab();
win.ui.header.prepend(tabs, ntbtn);

let nav = document.createElement("form");
nav.className = "bg-white d-flex p-1 scrollable-y-0 align-items-center shadow-sm";
nav.style.zIndex = 1;
nav.back = document.createElement("button");
nav.forward = document.createElement("button");
nav.back.type = "button";
nav.forward.type = "button";
nav.back.onclick = e => tabs.active.webview.goBack();
nav.forward.onclick = e => tabs.active.webview.goForward();
nav.back.className = "btn btn-white mr-1 mdi mdi-arrow-left rounded-circle mdi-21px lh-21 d-flex p-1";
nav.forward.className = "btn btn-white mr-1 mdi mdi-arrow-right rounded-circle mdi-21px lh-21 d-flex p-1";
nav.back.disabled = true;
nav.forward.disabled = true;
nav.refresh = document.createElement("button");
nav.refresh.type = "submit";
nav.refresh.className = "btn btn-white mr-2 mdi rounded-circle mdi-refresh mdi-21px lh-21 d-flex p-1";
let address = document.createElement("input");
address.className = "form-control mr-2 form-control-sm bg-light border-0 h-auto py-1 px-3";
address.style.borderRadius = "100px";

nav.menu = document.createElement("button");
nav.menu.className = "btn btn-white mdi mdi-dots-vertical rounded-circle mdi-21px lh-21 d-flex p-1";
nav.menu.type = "button"
nav.menu.addEventListener("click", e => {
	e.stopPropagation();
	const pos = win.getPosition();
	nav.menu.menu.popup({
		x: nav.menu.offsetLeft + pos[0],
		y: nav.menu.offsetTop + nav.menu.offsetHeight + pos[1]
	});
});
nav.menu.menu = new Menu(win, [{
	label: "Home",
	icon: "home-outline",
	visible: false,
	click() {
		console.log(newTab('proton://home'));
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
},/* {
	type: "separator"
},*/ {
	label: "Toggle full screen mode",
	icon: "fullscreen",
	click() {
		win.setFullScreen(!win.isFullScreen());
	}
}, {
	label: "Toggle Night mode",
	icon: "eye",
	visible: false,
	click() {}
},/* {
	type: "separator"
}, */{
	label: "Open Developer Tools",
	icon: "developer-board",
	visible: false,
	click() {}
}, {
	label: "About Proton",
	icon: "information-outline",
	visible: false,
	click() {
		newTab("proton://version")
	}
}]);
nav.addEventListener("submit", e => {
	e.preventDefault();
	if(tabs.active) tabs.active.navigate(address.value);
});
nav.append(nav.back, nav.forward, nav.refresh, address, nav.menu);
let tabCollection = document.createElement("main");
tabCollection.className = "flex-grow-1 h-100 position-relative";
let urlTooltip = document.createElement("label");
urlTooltip.className = "p-1 m-0 text-truncate bg-light fade show";
urlTooltip.style.cssText = "bottom:0;left:0;position:absolute;max-width: 400px;outline: 1px solid lightgray;";
root.append(nav, tabCollection, urlTooltip);
setImmediate(e => newTab(win.arguments.file || win.arguments.url))
win.show();

let tabMenu = new Menu(win, [{
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
		tabs.children.forEach(tab => {
			if(tab !== tabs.active) tab.close();
		})
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
	if(tabs.active) tabs.active.deactivate();
	let tab = document.createElement("tab");
	tab.dataset.draggable = false;
	tab.loaded = false;
	tab.webview = document.createElement("webview");
	tab.webview.className = "position-absolute w-100 h-100 d-inline-flex rounded-bottom bg-white";
	tab.webview.src = "about:blank";
	tab.webview.autosize = true;
	tabCollection.appendChild(tab.webview)
	console.log(tabCollection, tab.webview)
	tab.className = "nav-item shadow-lg nav-link bg-white position-relative d-flex fade";
	tab.style.transition = "all .2s linear";
	setTimeout(e => tab.classList.add("show"), FADE_ANIMATION_DURATION);
	tab.style.borderRadius = "0.5rem 0.5rem 0 0";
	tab.header = document.createElement("div");
	tab.header.className = "flex-grow-1 text-truncate lh-r1"
	tab.header.innerText = "untitled";
	tab.addEventListener("contextmenu", e => {
		e.stopPropagation();
		tabMenu.popup();
	})
	tab.addEventListener("mousedown", e => tab.activate());
	tab.addEventListener("click", e => e.stopPropagation())
	tab.closeButton = document.createElement("button");
	tab.closeButton.className = "btn btn-outline-danger border-0 text-decoration-none rounded mdi-close mdi mdi-18px lh-18 p-0 ml-2 d-flex";
	tab.closeButton.onclick = e => tab.close()
	tab.append(tab.header, tab.closeButton);
	tabs.append(tab)
	tab.initEvents = function() {
		tab.webview.addEventListener("will-navigate", tab.update);
		tab.webview.addEventListener("did-navigate", tab.update);
		tab.webview.addEventListener("page-title-updated", tab.update);
		tab.webview.addEventListener("close", e => tab.close());
		tab.webview.addEventListener("update-target-url", e => {
			if(tabs.active === tab) urlTooltip.innerText = e.url;
		});
		tab.webview.addEventListener("dom-ready", e => {
			if(!tab.loaded) {
				tab.navigate(url);
				tab.loaded = true
			} else tab.update();
		});
		tab.webview.addEventListener("load-commit", e => {
			if(!preferences.saveHistory)
				return;
			let _this = tab.webview;
			if (!_this.getURL().startsWith("about:") && !_this.getURL().startsWith("proton:") && e.isMainFrame) {
				preferences.history.push({
					title: _this.getTitle(),
																 time: new Date().getTime(),
																 url: _this.getURL()
				});
			}
		});
	}
	tab.initEvents();
	address.focus();
	tabs.active = tab;
	tab.close = function() {
		if(tabs.childElementCount === 1) win.close();
		else {
		tabs.active = (tabs.active.nextSibling || tabs.active.previousSibling);
		tab.classList.remove("show");
		setTimeout(e => tab.remove(), FADE_ANIMATION_DURATION);
		tab.webview.remove();
		tabs.active.activate();

		}
	}
	tab.activate = function() {
		if(tabs.active) tabs.active.deactivate();
		tab.classList.add("bg-white", "shadow-lg");
		tab.closeButton.classList.replace("d-none", "d-flex");
		tab.webview.classList.replace("d-none", "d-inline-flex");
		tabs.active = tab;
		tab.update();
	}
	tab.update = function() {
		let w = tab.webview;
		tab.header.innerText = w.getTitle();
		if(tab === tabs.active) {
			if(!w.getURL().includes("/proton/webpages"))
				address.value = w.getURL();
			else
				address.value = "proton://" + path.parse(w.getURL()).name
				win.setTitle(w.getTitle() + " - Proton Web Browser");
			nav.back.disabled = !w.canGoBack()
			nav.forward.disabled = !w.canGoForward();
		}
	}
	tab.deactivate = function() {
		tab.classList.remove("bg-white", "shadow-lg");
		tab.closeButton.classList.replace("d-flex", "d-none");
		tab.webview.classList.replace("d-inline-flex", "d-none");

	}
	tab.navigate = function(url) {
		if (url.startsWith("http:") || url.startsWith("ftp:") || url.startsWith(
				"https:") || url.startsWith("//") || url.startsWith("file:")) 1 + 1;
		else if (url.startsWith("/"))
			url = "file://" + url;
		else if (url.indexOf(".") === -1)
			url = "http://google.com/search?q=" + url;
		else
			url = "http://" + url;
		tab.webview.src = url;
	}

	return tab.webview;
}
let css = document.createElement("style");
let id = win.id;
css.innerHTML = `
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
`
root.append(css);
