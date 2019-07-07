/*const AppWindow = require("@api/WindowManager");
const Registry = require("@api/Registry");*/
const {
	AppWindow,
	Registry,
	Snackbar,
	Menu,
	Shell,
	Components: {
		Button,
		Spinner
	}
} = require("@api");
const win = AppWindow.getCurrentWindow();
const pm = new (require('playmusic'));
win.ui.body.classList.remove("flex-column", "scrollable-0");
win.ui.body.classList.add("py-2", "pr-2");
win.ui.header.classList.add("pr-3");
win.ui.title.classList.add("fade");
let cookies;
if (!(cookies = Registry.get("playmusic.account"))) login();
else init();

function init() {
	win.show();
	let logoutBtn = new Button({
		size: "sm",
		shadow: true,
		icon: "exit-to-app",
		color: win.options.theme,
		tooltip: "Sign out"
	});
	logoutBtn.onclick = () => {
		Registry.set("playmusic.account", undefined);
		win.relaunch();
	};
	let services = document.createElement("div");
	services.className = "btn-group btn-group-sm mx-auto";
	services.SS = document.createElement("button");
	services.SS.className = "btn btn-sm shadow-sm d-flex align-items-center btn-light";
	services.SS.icon = document.createElement("icon");
	services.SS.icon.className = "mdi mdi-18px mdi-spotify lh-18 d-flex";
	services.SS.header = document.createElement("div");
	services.SS.header.className = "lh-r1 text-truncate pl-2 pr-1 text-center";
	services.SS.header.innerText = "Spotify";
	services.SS.append(services.SS.icon, services.SS.header);
	services.SS.onclick = e => {
		e.stopPropagation();
		services.gpm.classList.remove("text-white", "bg-orange");
		services.gpm.classList.add("btn-light");
		services.SS.classList.add("text-white", "bg-success");
		services.SS.classList.remove("btn-light");
		sidebar.innerHTML = "";
		main.innerHTML = "";
		const Spotify = require('spotify-web-api-node');
		const SpotifyAPI = new Spotify({
			clientId: '05fcf1bd1a0943d0a5256cd562ec027f',
			redirectUri: 'http://atomos.org.uk/glcallback'
		});
		let authorizeURL = SpotifyAPI.createAuthorizeURL(['user-read-private', 'user-read-email'], 'aos-spotify').replace("response_type=code", "response_type=token");
		openLogIn(authorizeURL).then(accessToken => {
			SpotifyAPI.setAccessToken(accessToken);
			SpotifyAPI.getMe().then(console.log);
		});
		let SS = document.createElement("section");
		tracksBtnSS = gen("Songs", "music-box");
		SS.append(tracksBtnSS);
		sidebar.append(SS);
	};
	services.gpm = document.createElement("button");
	services.gpm.className = "btn btn-sm shadow-sm d-flex align-items-center bg-orange text-white";
	services.gpm.icon = document.createElement("icon");
	services.gpm.icon.className = "mdi mdi-18px mdi-play-circle-outline lh-18 d-flex";
	services.gpm.header = document.createElement("div");
	services.gpm.header.className = "lh-r1 text-truncate pl-2 pr-1 text-center";
	services.gpm.header.innerText = "Google Play Music";
	services.gpm.append(services.gpm.icon, services.gpm.header);
	services.gpm.onclick = e => {
		e.stopPropagation();
		services.SS.classList.remove("text-white", "bg-success");
		services.SS.classList.add("btn-light");
		services.gpm.classList.add("text-white", "bg-orange");
		services.gpm.classList.remove("btn-light");
		sidebar.innerHTML = "";
		main.innerHTML = "";
		pm.init(cookies, err => {
			if (err) {
				new Snackbar("There was a problem loading PM library. Check the console");
				console.error(err);
				return;
			}
			tracksBtnGPM.click();
		});
		let GPM = document.createElement("section");
		tracksBtnGPM = gen("Songs", "music-box");
		plBtnGPM = gen("Playlists", "playlist-music");
		favBtnGPM = gen("Favorites", "heart");

		function songContext(e) {
			if (e) e.stopImmediatePropagation();

			let _this = this;
			let smallItem = document.createElement("button");
			smallItem.className = "btn btn-white d-flex p-0 align-items-center flex-shrink-0 text-left shadow-0" + (win.options.darkMode ? " text-white" : "");
			smallItem.img = new Image(24, 24);
			smallItem.img.src = this.art.src;
			smallItem.img.className = "rounded";
			smallItem.header = document.createElement("div");
			smallItem.header.className = "flex-grow-1 text-truncate px-2";
			smallItem.header.innerText = this.trackTitle.innerText;
			smallItem.songId = this.songId;
			smallItem.addEventListener("contextmenu", () => {
				smallItem.remove();
			});
			smallItem.addEventListener("click", function () {
				controls.play.icon = "loading";
				controls.play.classList.add("mdi-spin-faster");
				controls.play.disabled = true;
				pm.getStreamUrl(this.songId, (err, url) => {
					if (err) {
						console.error(err);
						return;
					}
					/*      let file = fs.createWriteStream(process.env.HOME);
var request = http.get(url, function(response) {
	response.pipe(file);
	file.on('finish', function() {
		file.close(cb);
	});
});*/
					controls.play.disabled = false;
					player.src = url;
					player.play();
					art.src = smallItem.img.src;
					current.audio.innerText = smallItem.header.innerText;
					current.artist.innerText = _this.artist.innerText;
					for (const item of playlist.children) item.classList.remove("active");
					smallItem.classList.add("active");
					playlist.active = smallItem;
				})
			});
			smallItem.append(smallItem.img, smallItem.header);
			if (e) new Menu([{
				label: "Play now",
				icon: "play",
				click() {
					playlist.innerHTML = "";
					playlist.append(smallItem);
					smallItem.click();
				}
			}, {
				label: "Play next",
				icon: "play-speed",
				click() {
					playlist.insertBefore(smallItem, playlist.children[1]);
				}
			}, {
				label: "Add to queue",
				icon: "playlist-play",
				click() {
					playlist.append(smallItem);
				}
			}]).popup();
			else playlist.append(smallItem);
		}

		tracksBtnGPM.addEventListener("click", () => {
			spinner.show();
			tracksBtnGPM.activate();
			plBtnGPM.deactivate();
			favBtnGPM.deactivate();
			main.innerHTML = '';
			let header = document.createElement("h4");
			header.innerText = "All tracks";
			header.className = "mx-2 mt-1 mb-3" + (win.options.darkMode ? " text-white" : "");
			pm.getAllTracks((err, response) => {
				if (err) {
					new Snackbar("There was a problem retrieving tracks. Check the console");
					console.error(err);
					spinner.hide();
					return;
				}
				main.append(header);

				for (const track of response.data.items) {
					let time = Math.trunc(Math.trunc(track.durationMillis / 1000) / 60) + ":" + (Math.trunc(track.durationMillis / 1000) % 60 < 10 ? "0" : "") + Math.trunc(track.durationMillis / 1000) % 60;
					let entry = document.createElement("button");
					entry.className = "dropdown-item d-flex px-1 py-0 align-items-center flex-shrink-0 border-bottom" + (win.options.darkMode ? " border-secondary" : "");
					entry.addEventListener("contextmenu", songContext);
					entry.addEventListener("click", () => songContext.call(entry));
					entry.songId = track.id;
					entry.art = new Image(36, 36);
					entry.art.src = track.albumArtRef[0].url;
					entry.art.className = "mr-2";
					entry.trackTitle = document.createElement("div");
					entry.trackTitle.innerText = track.title;
					entry.trackTitle.className = "col text-truncate px-2";
					entry.artist = document.createElement("div");
					entry.artist.innerText = track.artist;
					entry.artist.className = "col-3 text-truncate pr-2";
					entry.album = document.createElement("div");
					entry.album.innerText = track.album;
					entry.album.className = "col-4 text-truncate px-2";
					entry.duration = document.createElement("div");
					entry.duration.innerText = time;
					entry.duration.className = "ml-auto text-center pl-2";
					entry.duration.style.width = CSS.px(40);
					entry.append(entry.art, entry.trackTitle, entry.artist, entry.album, entry.duration);
					main.append(entry);
				}
				spinner.hide();
			})
		});
		plBtnGPM.addEventListener("click", () => {
			spinner.show();
			plBtnGPM.activate();
			tracksBtnGPM.deactivate();
			favBtnGPM.deactivate();
			main.innerHTML = '';
			let header = document.createElement("h4");
			header.innerText = "Playlists";
			header.className = "mx-2 mt-1 mb-3" + (win.options.darkMode ? " text-white" : "");
			pm.getPlayLists(function (err, data) {
				if (err) {
					new Snackbar("There was a problem retrieving tracks. Check the console");
					console.error(err);
					spinner.hide();
					return;
				}
				console.log(data);
				main.append(header);
			});
		});
		favBtnGPM.addEventListener("click", () => {
			spinner.show();
			favBtnGPM.activate();
			plBtnGPM.deactivate();
			tracksBtnGPM.deactivate();
			main.innerHTML = '';
			let header = document.createElement("h4");
			header.innerText = "Favorites";
			header.className = "mx-2 mt-1 mb-3" + (win.options.darkMode ? " text-white" : "");
			pm.getFavorites(function (err, data) {
				if (err) {
					new Snackbar("There was a problem retrieving tracks. Check the console");
					console.error(err);
					spinner.hide();
					return;
				}
				main.append(header);
				for (const track of data.track) {
					let time = Math.trunc(Math.trunc(track.durationMillis / 1000) / 60) + ":" + (Math.trunc(track.durationMillis / 1000) % 60 < 10 ? "0" : "") + Math.trunc(track.durationMillis / 1000) % 60;
					let entry = document.createElement("button");
					entry.className = "dropdown-item d-flex px-1 py-0 align-items-center flex-shrink-0 border-bottom" + (win.options.darkMode ? " border-secondary" : "");
					entry.addEventListener("contextmenu", songContext);
					entry.addEventListener("click", () => songContext.call(entry));
					entry.songId = track.id;
					entry.art = new Image(36, 36);
					entry.art.src = track.imageBaseUrl;
					entry.art.className = "mr-2";
					entry.trackTitle = document.createElement("div");
					entry.trackTitle.innerText = track.title;
					entry.trackTitle.className = "col text-truncate px-2";
					entry.artist = document.createElement("div");
					entry.artist.innerText = track.artist;
					entry.artist.className = "col-3 text-truncate pr-2";
					entry.album = document.createElement("div");
					entry.album.innerText = track.album;
					entry.album.className = "col-4 text-truncate px-2";
					entry.duration = document.createElement("div");
					entry.duration.innerText = time;
					entry.duration.className = "ml-auto text-center pl-2";
					entry.duration.style.width = CSS.px(40);
					entry.append(entry.art, entry.trackTitle, entry.artist, entry.album, entry.duration);
					main.append(entry);
				}
				spinner.hide();
			});
		});
		GPM.append(tracksBtnGPM/*, plBtnGPM*/, favBtnGPM);
		sidebar.append(GPM);
	};
	services.append(services.SS, services.gpm);
	win.ui.header.prepend(logoutBtn);
	win.ui.header.classList.add("position-absolute", "w-100");
	win.ui.header.style.zIndex = 1000;
	let spinner = new Spinner();

	let sidebar = document.createElement("aside");
	sidebar.className = "mt-5";
	sidebar.style.minWidth = CSS.px(150);
	sidebar.style.width = CSS.px(200);
	let gen = (name, icon, active = false) => {
		let btn = document.createElement("button");
		let className = services.gpm.classList.contains("bg-orange") ? "orange" : "success";
		btn.className = "dropdown-item p-2 flex-shrink-0 font-weight-bolder d-flex align-items-center rounded-right-pill " + (active ? "bg-" + className + " active" : "");
		btn.icon = document.createElement("icon");
		btn.icon.className = `mdi mdi-24px lh-24 d-flex mdi-${icon}${active ? "" : "-outline"} mr-2`;
		btn.label = document.createElement("div");
		btn.label.innerText = name;
		btn.iconName = icon;
		btn.append(btn.icon, btn.label);
		btn.activate = () => {
			btn.classList.add("active", "bg-" + className);
			btn.icon.className = `mdi mdi-24px lh-24 d-flex mdi-${btn.iconName} mr-2`;
		};
		btn.deactivate = () => {
			btn.classList.remove("active", "bg-" + className);
			btn.icon.className = `mdi mdi-24px lh-24 d-flex mdi-${btn.iconName}-outline mr-2`;
		};
		return btn;
	};

	let main = document.createElement("main");
	main.className = "very-rounded shadow scrollable-y flex-grow-1 position-relative mx-2 p-2 d-flex flex-column " + (win.options.darkMode ? "bg-dark" : "bg-light");

	let playSection = document.createElement("section");
	playSection.className = "shadow d-flex flex-column very-rounded p-2 " + (win.options.darkMode ? "bg-dark" : "bg-light");
	playSection.style.minWidth = CSS.px(200);
	playSection.style.width = CSS.px(300);
	playSection.header = document.createElement("h5");
	playSection.header.className = "mt-1 mb-3 mx-1" + (win.options.darkMode ? " text-white" : "");
	playSection.header.innerText = "Now Playing".toLocaleString();
	let playlist = document.createElement("playlist");
	playlist.className = "flex-grow-1 scrollable-y d-flex flex-column position-relative";
	playSection.append(playSection.header, playlist);
	let footer = document.createElement("footer");
	footer.dataset.draggable = false;
	footer.className = "d-flex flex-column very-rounded shadow flex-shrink-0 mx-2 mb-2 " + (win.options.darkMode ? "bg-dark" : "bg-light");
	footer.progress = document.createElement("input");
	footer.progress.type = "range";
	footer.progress.className = "w-100 custom-range";
	footer.progress.max = 10000;
	footer.progress.value = 10000;
	footer.progress.onchange = () => {
		player.currentTime = footer.progress.value;
		footer.progress.style.setProperty("--value", (footer.progress.value / footer.progress.max * 100) + "%");
	};
	footer.progress.style.setProperty("--value", "100%");
	footer.body = document.createElement("div");
	footer.body.className = "flex-grow-1 d-flex";
	let art = new Image(48, 48);
	art.className = "rounded mr-3";
	art.style.cursor = "pointer";
	art.onclick = () => {
		artBig.src = art.src;
		artModal.controller.show();
	};

	let current = document.createElement("div");
	current.className = "d-flex align-items-center pl-1 flex-grow-1" + (win.options.darkMode ? " text-white" : " text-dark");
	current.style.width = 0;
	current.audioInfo = document.createElement("div");
	current.audioInfo.className = "d-flex align-items-start flex-column justify-content-center flex-grow-1";
	current.audioInfo.style.width = 0;
	current.audio = document.createElement("h5");
	current.audio.className = "mb-0 text-truncate w-100 font-weight-bolder";
	current.artist = document.createElement("div");
	current.artist.className = "text-truncate w-100 lh-18";
	let controls = document.createElement("div");
	controls.className = "d-flex align-items-center flex-shrink-0 m-2 justify-content-center";
	controls.previous = new Button({
		icon: "skip-previous",
		iconSize: 24,
		addClasses: "p-1 rounded-circle",
		color: win.options.theme,
		disabled: true
	});
	controls.previous.addEventListener("click", () => {
		if (playlist.active)
			if (playlist.active.previousSibling) playlist.active.previousSibling.click();
	});
	controls.next = new Button({
		icon: "skip-next",
		iconSize: 24,
		addClasses: "p-1 rounded-circle",
		color: win.options.theme,
		disabled: true
	});
	controls.next.addEventListener("click", () => {
		if (playlist.active)
			if (playlist.active.nextSibling) playlist.active.nextSibling.click();
	});
	controls.play = new Button({
		icon: "play",
		iconSize: 24,
		addClasses: "mx-2 p-2 rounded-circle text-white",
		color: "#ff5722",
		disabled: true
	});
	controls.play.addEventListener("click", () => {
		if (!playlist.active) controls.next.click();
		else if (player.paused) player.play();
		else player.pause();
	});
	let addControls = document.createElement("div");
	addControls.className = "flex-grow-1 d-flex align-items-center justify-content-end mr-3" + (win.options.darkMode ? " text-white" : "");
	addControls.style.width = 0;
	controls.append(controls.previous, controls.play, controls.next);
	current.audioInfo.append(current.audio, current.artist);
	current.append(art, current.audioInfo);
	footer.body.append(current, controls, addControls);
	footer.append(footer.progress, footer.body);

	let player = new Audio();
	player.preload = "auto";

	win.on('close', function () {
		player.pause();
		player.removeAttribute("src");
		player.load();
		player = null;
	});
	player.onerror = console.error;
	player.ontimeupdate = function () {
		footer.progress.value = player.currentTime || 0;
		footer.progress.max = player.duration || 0;
		addControls.innerText = Math.trunc(footer.progress.value / 60) + ":" + (footer.progress.value % 60 < 10 ? "0" : "") + footer.progress.value % 60 + " / " + Math.trunc(footer.progress.max / 60) + ":" + (footer.progress.max % 60 < 10 ? "0" : "") + Math.round(footer.progress.max % 60);
		footer.progress.style.setProperty("--value", (footer.progress.value / footer.progress.max * 100) + "%");
		controls.next.disabled = playlist.active === playlist.lastChild;
		controls.previous.disabled = playlist.active === playlist.firstChild;
		controls.play.icon = "pause";
	};
	player.onended = () => controls.next.click();
	player.onplay = function () {
		controls.play.icon = "pause";
		controls.play.disabled = false;
	};
	player.onprogress = function () {
		footer.progress.style.setProperty("--loaded-value", (player.buffered.end(player.buffered.length - 1) / footer.progress.max * 100) + "%");
		controls.play.disabled = false;
	};
	player.onpause = function () {
		controls.play.icon = "play";
		controls.play.disabled = false;
	};
	player.onwaiting = function () {
		controls.play.icon = "loading";
		controls.play._iconElement.classList.add("mdi-spin-faster");
		controls.play.disabled = true;
	};
	win.ui.body.append(sidebar, main, spinner, playSection);
	win.ui.ui.append(footer);
	services.gpm.click();

	let artModal = document.createElement("div");
	artModal.dialog = document.createElement("div");
	artModal.content = document.createElement("div");
	artModal.className = "modal fade position-absolute w-100 h-100 very-rounded";
	artModal.style.boxShadow = "inset 0 0 0 1000px rgba(0,0,0,0.7)";
	artModal.tabIndex = -1;
	artModal.dataset.draggable = false;
	artModal.setAttribute("aria-hidden", "true");
	artModal.onclick = () => {
		artModal.controller.hide();
	};

	artModal.dialog.className = "modal-dialog modal-dialog-centered my-0 h-100";
	artModal.dialog.style.maxWidth = CSS.px(512);
	artModal.content.className = "modal-content very-rounded border-0 scrollable-0 bg-" + win.options.theme;
	let artBig = new Image(512, 512);
	artModal.content.append(artBig);
	artModal.dialog.append(artModal.content);
	artModal.append(artModal.dialog);
	win.ui.ui.append(artModal);
	artModal.controller = new Modal(artModal, {backdrop: false});

	artModal.addEventListener("show.bs.modal", () => {
		artModal.style.left = CSS.px(win.mainDisp.bounds.x / zoomFactor);
		artModal.style.top = CSS.px(win.mainDisp.bounds.y / zoomFactor);
		artModal.style.width = CSS.px(win.mainDisp.bounds.width / zoomFactor);
		artModal.style.height = CSS.px(win.mainDisp.bounds.height / zoomFactor);
	});
}

function login() {
	let modal = document.createElement("message-box");
	modal.addEventListener("mousedown", function (e) {
		e.stopPropagation();
	});
	modal.addEventListener("click", function (e) {
		e.stopPropagation();
	});
	modal.dialog = document.createElement("form");
	modal.content = document.createElement("main");
	modal.body = document.createElement("div");
	modal.footer = document.createElement("div");
	modal.header = document.createElement("h5");
	modal.dialog.className = "modal-dialog modal-dialog-centered";
	modal.content.className = "modal-content shadow-lg" + (win.options.darkMode ? " bg-dark text-white" : "");
	modal.body.className = "modal-body d-flex align-items-start";
	modal.header.innerText = "Log in to your Google account".toLocaleString();
	modal.header.className = "mb-1";
	modal.footer.className = "modal-footer d-flex align-items-center" + (win.options.darkMode ? " border-secondary" : "");
	modal.className = "modal fade";
	modal.tabIndex = -1;
	modal.setAttribute("aria-hidden", "true");
	let icon = document.createElement("icon");
	icon.className = "mdi mdi-play-circle-outline rounded-circle mr-3 shadow text-white d-flex p-2 lh-36 mdi-36px";
	icon.style.background = "radial-gradient(#ff8f00 35%, #e65100 35%)";
	let container = document.createElement("div");
	container.className = "d-flex flex-column flex-grow-1";
	let login = document.createElement("input");
	let pass = document.createElement("input");
	pass.type = "password";
	login.placeholder = "Email".toLocaleString();
	pass.placeholder = "••••••••";
	login.className = "form-control my-2";
	pass.className = "form-control";
	let errorText = document.createElement("div");
	errorText.className = "text-danger text-truncate flex-grow-1";
	let submit = document.createElement("button");
	submit.className = "btn btn-primary ml-2";
	submit.type = "submit";
	submit.innerText = "Sign In".toLocaleString();
	let cancel = document.createElement("button");
	cancel.className = "btn btn-secondary ml-auto";
	cancel.type = "button";
	cancel.innerText = "Cancel".toLocaleString();
	cancel.onclick = () => modal.controller.hide();

	modal.dialog.addEventListener("submit", e => {
		e.preventDefault();
		errorText.innerText = "";
		login.classList.remove("is-invalid");
		pass.classList.remove("is-invalid");
		pm.login({
			email: login.value,
			password: pass.value
		}, function (err, data) {
			login.classList.toggle("is-invalid", !!(!data || err));
			pass.classList.toggle("is-invalid", !!(!data || err));
			if (err || !data)
				errorText.innerText = "Username or password are incorrect";
			else {
				Registry.set("playmusic.account", data);
				cookies = data;
				modal.controller.hide();
				init();
			}
		});
	});

	container.append(modal.header, login, pass);
	modal.body.append(icon, container);
	modal.footer.append(errorText, cancel, submit);
	modal.content.append(modal.body, modal.footer);
	modal.dialog.append(modal.content);
	modal.append(modal.dialog);
	document.body.append(modal);
	modal.controller = new Modal(modal);
	modal.addEventListener("show.bs.modal", () => {
		modal.style.left = CSS.px(win.mainDisp.bounds.x / zoomFactor);
		modal.style.top = CSS.px(win.mainDisp.bounds.y / zoomFactor);
		modal.style.width = CSS.px(win.mainDisp.bounds.width / zoomFactor);
		modal.style.height = CSS.px(win.mainDisp.bounds.height / zoomFactor);
	});
	modal.controller.show();
	modal.addEventListener("hidden.bs.modal", () => {
		modal.remove();
		if (!cookies) win.close();
	});
}

function openLogIn(url) {
	return new Promise(resolve => {
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
			if (e.channel === "log-in" && JSON.parse(e.args[0]).state === "aos-spotify") {
				Registry.set("spotify.account", JSON.parse(e.args[0]));
				resolve(JSON.parse(e.args[0]).access_token);
				modal.controller.hide();
			}
		});
		modal.dialog.append(modal.content);
		modal.append(modal.dialog);
		document.body.append(modal);
		modal.controller = new Modal(modal);
		modal.addEventListener("show.bs.modal", () => {
			modal.style.left = CSS.px(win.mainDisp.bounds.x / zoomFactor);
			modal.style.top = CSS.px(win.mainDisp.bounds.y / zoomFactor);
			modal.style.width = CSS.px(win.mainDisp.bounds.width / zoomFactor);
			modal.style.height = CSS.px(win.mainDisp.bounds.height / zoomFactor);
		});
		modal.controller.show();
	});
}

let styling = document.createElement("style");
styling.innerHTML = `
window[id='${win.id}'] img:not([src]) {display: none}
window[id='${win.id}'] progress[value]::-webkit-progress-value {
	background: #ff5722;
}
window[id='${win.id}'] .dropdown-item.active,
window[id='${win.id}'] .dropdown-item:active {
	background-color: #ff5722 !important;
}
window[id='${win.id}'] footer:hover .custom-range::-webkit-slider-thumb {
	opacity: 1;
}
window[id='${win.id}'] .custom-range {
	height: 5px;
	z-index:100;
}
window[id='${win.id}'] playlist:empty::before {
	position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  content: "${"Queue is empty".toLocaleString()}";
  color: var(--secondary);
  margin:auto;
  line-height:16px;
  font-size:16px;
  height:16px;
  text-align:center;
}
window[id='${win.id}'] .custom-range::-webkit-slider-thumb {
	background: #ff5722;
	opacity: 0;
	width: 11px;
	height: 11px;
	transition: opacity .3s ease;
}
window[id='${win.id}'] .custom-range::-webkit-slider-runnable-track {
	height: 5px;
	background: linear-gradient(to right, #ff5722 0%, #ff5722 var(--value), #777 var(--value), #777 var(--loaded-value), ${win.options.darkMode ? "#252525" : "#ddd"} var(--loaded-value), ${win.options.darkMode ? "#252525" : "#ddd"} 100%);
	border-radius: 0;
}
`;
win.ui.body.append(styling);
