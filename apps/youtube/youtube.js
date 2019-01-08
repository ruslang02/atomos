const win = AppWindow.fromId(WINDOW_ID);
const path = require("path");
const fs = require("fs");

try {
	fs.accessSync(osRoot + "/node_modules/googleapis");
	fs.accessSync(osRoot + "/node_modules/google-auth-library");
	fs.accessSync(osRoot + "/node_modules/youtube-dl");
} catch (e) {
	win.close();
	console.error(e);
	shell.showMessageBox({
		type: "error",
		title: "Libraries required",
		message: `
In order to launch YouTube, you should also install the following Node.JS libraries:<br>
<ul><li>googleapis</li><li>google-auth-library</li><li>youtube-dl</li></ul>
You can do it by executing following commands:
<pre class="bg-dark rounded text-white p-2"><code>$ cd _atomos-dir_
atomos/$ npm i googleapis google-auth-library youtube-dl</code></pre>
`
	});
	return;
}

let backend = new Worker(path.join(__dirname, "worker.js"));
backend.onmessage = e => {
	switch (e.data.action) {
		case "log-in":
			loginBtn.disabled = false;
			loginBtn.onclick = () => openLogIn(e.data.url);
			spinner.classList.replace("show", "hide");
			loginBtn.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mdi-account-circle-outline mdi-18px lh-18 mr-2 btn-danger";
			loginBtn.innerHTML = "<div class='ml-2'>Sign in</div>";
			break;
		case "logged-out":
			win.relaunch();
			break;
		case "logged-in":
			loginBtn.disabled = false;
			searchBtn.disabled = false;
			sidebar.trending.disabled = false;
			sidebar.subs.disabled = false;
			sidebar.search.disabled = false;
			loginBtn.innerHTML = "";
			loginBtn.onclick = e => {
				e.stopPropagation();
				new Menu(win, [{
					label: "Sign out",
					icon: "exit-to-app",
					click() {
						backend.postMessage({
							action: "log-out"
						});
					}
				}]).popup({
					x: loginBtn.offsetLeft + win.getPosition()[0],
					y: loginBtn.offsetTop + win.getPosition()[1] + loginBtn.offsetHeight
				});
			};
			loginBtn.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mr-2 btn-danger dropdown-toggle";
			let avatar = new Image(18, 18);
			avatar.src = e.data.user.avatarURL;
			avatar.className = "rounded-circle mr-2"
			let displayName = document.createElement("div");
			displayName.innerText = e.data.user.displayName;
			loginBtn.append(avatar, displayName);
			spinner.classList.replace("show", "hide");
			break;
		case "list-popular":
			body.innerHTML = "<h3 class='mt-3 mb-2'>Most popular</h3>";
			for (const item of e.data.items) {
				let elem = document.createElement("div");
				elem.className = "card mt-2 p-2 btn flex-shrink-0 text-left";
				elem.onclick = () => {
					playVideo(item.id);
				}
				elem.media = document.createElement("div");
				elem.media.className = "media";
				elem.thumb = document.createElement("img");
				elem.thumb.className = "mr-3";
				elem.thumb.style.height = CSS.rem(3);
				elem.thumb.src = item.snippet.thumbnails.medium.url;
				elem.body = document.createElement("div");
				elem.body.className = "media-body position-relative text-truncate";
				elem.body.innerHTML = `<h5 class="my-0 text-truncate text-nowrap">${item.snippet.title}</h5><small>${item.snippet.channelTitle}</small>`;
				elem.media.append(elem.thumb, elem.body);
				elem.append(elem.media);
				body.append(elem);
			}
			spinner.classList.replace("show", "hide");
			break;
	}
}
win.on('close', e => {
	backend.terminate();
})
root.classList.remove("flex-column");

let searchBtn = document.createElement("button");
searchBtn.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mdi-magnify mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
searchBtn.title = "Search videos";
searchBtn.disabled = true;
let loginBtn = document.createElement("button");
loginBtn.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mdi-account-circle-outline mdi-18px lh-18 mr-2 btn-danger";
loginBtn.title = "Sign in with Google";
loginBtn.disabled = true;
win.ui.header.append(loginBtn, searchBtn);

new BSN.Tooltip(searchBtn, {
	placement: "bottom"
});

new BSN.Tooltip(loginBtn, {
	placement: "bottom"
});

let sidebar = document.createElement("aside");
sidebar.className = "scrollable-y w-25 scrollable-x-0 d-block";
sidebar.style.maxWidth = "270px";
sidebar.style.minWidth = "170px";
sidebar.trending = document.createElement("button");
sidebar.trending.className = "dropdown-item d-flex align-items-center";
sidebar.trending.innerHTML = "<icon class='mdi mdi-fire mdi-18px mr-1'></icon><div>Trending</div>";
sidebar.trending.disabled = true;
sidebar.trending.onclick = () => {
	backend.postMessage({
		action: "list-popular"
	});
	for (const child of sidebar.children) child.classList.remove("active");
	sidebar.trending.classList.add("active");
	spinner.classList.replace("hide", "show");

}
sidebar.subs = document.createElement("button");
sidebar.subs.className = "dropdown-item d-flex align-items-center";
sidebar.subs.innerHTML = "<icon class='mdi mdi-checkbox-multiple-blank-outline mdi-18px mr-1'></icon><div>Subscriptions</div>";
sidebar.subs.disabled = true;
sidebar.search = document.createElement("button");
sidebar.search.className = "dropdown-item d-flex align-items-center";
sidebar.search.innerHTML = "<icon class='mdi mdi-magnify mdi-18px mr-1'></icon><div>Search</div>";
sidebar.search.disabled = true;
sidebar.channels = document.createElement("div");
sidebar.channels.className = "dropdown-header";
sidebar.channels.innerText = "Channels";
sidebar.noChannels = document.createElement("button");
sidebar.noChannels.disabled = true
sidebar.noChannels.className = "dropdown-item d-flex align-items-center";
sidebar.noChannels.innerHTML = "<div>No items to show.</div>";
sidebar.append(sidebar.trending, sidebar.subs, sidebar.search, sidebar.channels, sidebar.noChannels);

let main = document.createElement("main");
main.className = "bg-white shadow very-rounded mx-2 mb-2 flex-grow-1 position-relative w-25 scrollable-y";
let spinner = document.createElement("icon");
spinner.style.cssText = "position:absolute;top:2rem;left:0;right:0;width:36px;height:36px";
spinner.className = "mdi mdi-spin-faster mdi-loading mdi-24px fly down hide lh-24 d-flex align-items-center bg-light border mx-auto p-1 rounded-circle shadow";
let body = document.createElement("section");
body.className = "d-flex flex-column w-100 h-100 px-4";
main.append(spinner, body);
root.append(sidebar, main);
spinner.classList.replace("hide", "show");
win.show();

function openLogIn(url) {
	let modal = document.createElement("div");
	modal.dialog = document.createElement("form");
	modal.content = document.createElement("main");
	modal.dialog.className = "modal-dialog modal-dialog-centered";
	modal.content.className = "modal-content very-rounded scrollable-0";
	modal.content.style.height = CSS.px(550);
	modal.className = "modal fade";
	modal.tabIndex = -1;
	modal.setAttribute("aria-hidden", "true");
	let webview = document.createElement("webview");
	webview.src = url;
	webview.nodeintegration = true;
	webview.setAttribute("autosize", 'on');
	webview.className = "h-100";
	modal.content.append(webview);
	webview.addEventListener("ipc-message", e => {
		console.log(e);
		if (e.channel === "log-in") {
			backend.postMessage({
				action: "return-token",
				token: e.args[0]
			});
			modal.controller.hide();
		}

	})
	modal.dialog.append(modal.content);
	modal.append(modal.dialog);
	document.body.append(modal);
	modal.controller = new BSN.Modal(modal);
	modal.controller.show();
}

let css = document.createElement("style");
css.innerHTML =
	`
window[id='${win.id}'] .dropdown-item:active {
  background-color: var(--danger);
}
`;
root.append(css);