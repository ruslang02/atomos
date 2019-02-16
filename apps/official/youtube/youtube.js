const AppWindow = require("@api/WindowManager");
const Menu = require(`@api/Menu`);
const Shell = require("@api/Shell");
const win = AppWindow.getCurrentWindow();
const path = require("path");

let backend = new Worker(path.join(__dirname, "worker.js"));
backend.onmessage = e => {
	console.log(e.data);
	switch (e.data.action) {
		case "library-error":
			win.close();
			Shell.showMessageBox({
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
		case "log-in":
			loginBtn.disabled = false;
			loginBtn.onclick = () => openLogIn(e.data.url);
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
				new Menu([{
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
			avatar.className = "rounded-circle mr-2";
			let displayName = document.createElement("div");
			displayName.innerText = e.data.user.displayName;
			loginBtn.append(avatar, displayName);
			/*backend.postMessage({
				action: "get-channels"
			});*/
			/*if (win.arguments.url || win.arguments.file) {
				let url = new URL(win.arguments.url || win.arguments.file);
				spinner.classList.replace("hide", "show");
				backend.postMessage({action: "play-video", id: url.searchParams.get("v")});
			}*/
			break;
		case "get-channel-info":
			let channel = e.data.info;
			body.innerHTML = "";
			body.channelHeader = document.createElement("header");
			body.channelHeader.className = "mt-2 mx-3 card very-rounded shadow bg-light flex-shrink-0";
			let banner = new Image();
			banner.src = channel.brandingSettings.image.bannerImageUrl;
			banner.className = "mw-100 very-rounded-top";
			let channelHeader = document.createElement("div");
			channelHeader.className = "py-2 px-3 d-flex align-items-center";
			let channelIcon = new Image(48, 48);
			channelIcon.src = channel.snippet.thumbnails.default.url;
			channelIcon.className = "img-thumbnail rounded-circle mr-2";
			let channelInfo = document.createElement("div");
			channelInfo.className = "mr-auto d-flex flex-column justify-content-center";
			let channelTitle = document.createElement("p");
			channelTitle.className = "h5 mb-0";
			channelTitle.innerText = channel.snippet.title;
			let channelSubs = document.createElement("div");
			channelSubs.className = "text-muted smaller";
			channelSubs.innerText = channel.statistics.subscriberCount + " subscribers";
			channelInfo.append(channelTitle, channelSubs);
			let channelSubscribe = document.createElement("div");
			channelSubscribe.className = "font-weight-bold btn btn-outline-danger border-0";
			channelSubscribe.innerText = "Subscribed";
			channelHeader.append(channelIcon, channelInfo, channelSubscribe);
			body.channelHeader.append(banner, channelHeader);
			body.append(body.channelHeader);
			break;
		case "get-channel-videos":
			body.channelResults = document.createElement("section");
			for (const video of e.data.items)
				body.channelResults.append(genVid(video));
			body.append(body.channelResults);
			spinner.classList.replace("show", "hide");
			break;
		case "get-channels":
			sidebar.noChannels.innerText = "No items to show";
			if (e.data.items.length) sidebar.noChannels.remove();
			for (const channel of e.data.items) {
				let elem = document.createElement("button");
				elem.className = "dropdown-item d-flex align-items-center";
				elem.id = channel.id;
				elem.innerHTML = `<img width=18 height=18 class='rounded-circle mr-2' src='${channel.snippet.thumbnails.default.url}'><div class="w-25 text-truncate flex-grow-1">${channel.snippet.title}</div>`;
				elem.onclick = () => {
					console.log(channel.snippet);
					backend.postMessage({action: "get-channel-info", id: channel.snippet.resourceId.channelId});
					backend.postMessage({action: "get-channel-videos", id: channel.snippet.resourceId.channelId});
					spinner.classList.replace("hide", "show");

				};
				sidebar.channels.append(elem);
			}
			break;
		case "list-popular":
			body.innerHTML = "<h3 class='mt-3 mb-2 mx-4'>Most popular</h3>";
			for (const item of e.data.items)
				body.append(genVid(item));
			break;
		case "search":
			body.resultsSection.innerHTML = "";
			for (const item of e.data.items)
				body.resultsSection.append(genVid(item));
			break;
		case "list-subscriptions":
			body.innerHTML = "<h3 class='mt-3 mb-2 mx-4'>Popular on YouTube</h3><div class='alert alert-danger mb-0 mx-4'>Due to Google's illogical APIs to list your subscriptions a large amount of quota points are used and the operation is very slow and irrational. Sorry.</div>";
			for (const item of e.data.result.items)
				body.append(genVid(item));
			break;
		case "play-video":
			body.innerHTML = `<video class="w-100 h-100 bg-dark" controls autoplay poster="${e.data.result.thumbnail}" src="${e.data.result.url}"></video>`;
			break;
		default:
			console.log("Unknown response from backend", e.data);
	}
	spinner.classList.replace("show", "hide");
};
win.on('close', e => {
	backend.terminate();
});
win.ui.body.classList.remove("flex-column");

function genVid(item) {
	let elem = document.createElement("div");
	elem.className = "card mt-2 p-2 mx-4 btn flex-shrink-0 text-left";
	elem.onclick = () => {
		spinner.classList.replace("hide", "show");
		console.log(item);
		backend.postMessage({action: "play-video", id: item.id.videoId || item.contentDetails.upload.videoId || item.id});
	};
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
	return elem;
}

let searchBtn = document.createElement("button");
searchBtn.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mdi-magnify mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
searchBtn.title = "Search videos";
searchBtn.disabled = true;
let loginBtn = document.createElement("button");
loginBtn.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mdi-account-circle-outline mdi-18px lh-18 mr-2 btn-danger";
loginBtn.title = "Sign in with Google";
loginBtn.disabled = true;
win.ui.header.append(loginBtn, searchBtn);

new Tooltip(searchBtn, {
	placement: "bottom"
});

new Tooltip(loginBtn, {
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
};
sidebar.subs = document.createElement("button");
sidebar.subs.className = "dropdown-item d-flex align-items-center";
sidebar.subs.innerHTML = "<icon class='mdi mdi-checkbox-multiple-blank-outline mdi-18px mr-1'></icon><div>Subscriptions</div>";
sidebar.subs.disabled = true;
sidebar.subs.onclick = () => {
	backend.postMessage({
		action: "list-subscriptions"
	});
	for (const child of sidebar.children) child.classList.remove("active");
	sidebar.subs.classList.add("active");
	spinner.classList.replace("hide", "show");
};
sidebar.search = document.createElement("button");
sidebar.search.className = "dropdown-item d-flex align-items-center";
sidebar.search.innerHTML = "<icon class='mdi mdi-magnify mdi-18px mr-1'></icon><div>Search</div>";
sidebar.search.disabled = true;
sidebar.search.onclick = () => {
	body.innerHTML = "";
	for (const child of sidebar.children) child.classList.remove("active");
	sidebar.search.classList.add("active");
	let searchSection = document.createElement("section");
	searchSection.className = "d-flex flex-column align-items-center text-center flex-shrink-0 p-4";
	let searchBar = document.createElement("form");
	searchBar.className = "input-group";
	searchBar.placeholder = "Search";
	let search = document.createElement("input");
	search.className = "form-control text-left";
	let iappend = document.createElement("div");
	iappend.className = "input-group-append";
	let searchBtn = document.createElement("button");
	searchBtn.className = "btn btn-danger mdi mdi-18px mdi-magnify lh-18 d-flex";
	searchBar.onsubmit = e => {
		e.preventDefault();
		backend.postMessage({
			action: "search",
			q: search.value
		});
		spinner.classList.replace("hide", "show");
	};
	iappend.append(searchBtn);
	searchBar.append(search, iappend);
	searchSection.append(searchBar);
	body.resultsSection = document.createElement("div");
	body.append(searchSection, body.resultsSection);
};
sidebar.channelsTitle = document.createElement("div");
sidebar.channelsTitle.className = "dropdown-header";
sidebar.channelsTitle.innerText = "Channels";
sidebar.channels = document.createElement("div");
sidebar.noChannels = document.createElement("button");
sidebar.noChannels.disabled = true;
sidebar.noChannels.className = "dropdown-item d-flex align-items-center";
sidebar.noChannels.innerHTML = "<div>Loading...</div>";
sidebar.append(sidebar.trending, sidebar.subs, sidebar.search/*, sidebar.channelsTitle, sidebar.channels, sidebar.noChannels*/);

let main = document.createElement("main");
main.className = "bg-white shadow very-rounded mx-2 mb-2 flex-grow-1 position-relative w-25 scrollable-y";
let spinner = document.createElement("icon");
spinner.style.cssText = "left:0;right:0;width:36px;height:36px;z-index:1000;";
spinner.className = "mdi mdi-spin-faster mdi-loading mdi-24px mt-5 position-absolute fly down show d-flex mx-auto p-1 rounded-circle lh-24 align-items-center justify-content-center " + (win.options.darkMode ? "bg-dark text-white border border-secondary" : "bg-light text-dark shadow");
let body = document.createElement("section");
body.className = "d-flex flex-column w-100 h-100";
main.append(spinner, body);
win.ui.body.append(sidebar, main);
spinner.classList.replace("hide", "show");
win.show();

function openLogIn(url) {
	console.log(url);
	let modal = document.createElement("div");
	modal.dialog = document.createElement("form");
	modal.content = document.createElement("main");
	modal.dialog.className = "modal-dialog modal-dialog-centered";
	modal.content.className = "modal-content very-rounded scrollable-0";
	modal.content.style.height = CSS.px(580);
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
		if (e.channel === "log-in") {
			backend.postMessage({
				action: "return-token",
				token: e.args[0]
			});
			modal.controller.hide();
		}
	});
	modal.dialog.append(modal.content);
	modal.append(modal.dialog);
	document.body.append(modal);
	modal.controller = new Modal(modal);
	modal.controller.show();
}

let css = document.createElement("style");
css.innerHTML =
	`
window[id='${win.id}'] .dropdown-item:active, window[id='${win.id}'] .dropdown-item.active {
  background-color: var(--danger);
}
`;
win.ui.body.append(css);