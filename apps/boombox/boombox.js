let ofdDefaultPath = app.getPath("music");
const path = require("path");
const fs = require("fs");
const fsp = fs.promises;
let _this = this;
let prevNotification;
setImmediate(() => {
	_this.xml2js = require('xml2js');
	_this.js2xml = require('jstoxml');
	_this.renderID3 = require('musicmetadata');
	if (win.arguments.file) load(win.arguments.file);
});
const win = AppWindow.fromId(WINDOW_ID);
win.on('second-instance', (e, args) => {
	load(args.file);
});
win.on('close', e => {
	if(prevNotification) prevNotification.dismiss();
});
win.ui.header.style.background = win.options.darkMode ? "rgba(52,58,64, 0.88)" : "rgba(222, 226, 230, 0.88)";
let nav = document.createElement("nav");
nav.className = "d-flex";
nav.openFile = document.createElement("button");
nav.openFile.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mdi-folder-outline mr-2 mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.openFile.onclick = () => {
	shell.selectFile(shell.ACTION_OPEN, {
		defaultPath: ofdDefaultPath,
		buttonLabel: "Play"
	}).then(file => {
		if (!file.url)
			ofdDefaultPath = path.dirname(file);
		load(file);
	})
};
nav.openFile.title = "Open (Ctrl+O)";
nav.saveFile = document.createElement("button");
nav.saveFile.className = "btn mdi d-flex btn-sm shadow-sm align-items-center mdi-playlist-play mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.saveFile.onclick = async function() {
	let trackList = [];
	let file = await shell.selectFile(shell.ACTION_SAVE, {
		defaultPath: ofdDefaultPath,
		buttonLabel: "Export"
	});
	for (const track of playlist.childNodes) {
		trackList.push({
			track: {
				location: new URL((!file.location.startsWith("http") ? "file://" : "") +
					escape(file.location)).href,
				title: escape(track.innerText),
				creator: escape(track.creator)
			}
		});
	}
	let playlist = js2xml.toXML({
		playlist: {
			_attrs: {
				xmlns: "http://xspf.org/ns/0/",
				version: "1"
			},
			title: title || "Playlist",
			trackList: trackList
		}
	}, {
		header: true,
		indent: "	"
	});
	await fsp.writeFile(url, playlist, 'utf-8');
	new Notification(win, {
		title: "Playlist successfully saved",
		app: "Boombox",
		color: "var(--danger)",
		icon: "boombox",
		actions: [{
			label: "Show in folder",
			click() {
				shell.showItemInFolder(url);
			}
		}]
	});
};
nav.saveFile.title = "Export playlist (Ctrl+S)";
nav.append(nav.openFile, nav.saveFile);
win.ui.header.prepend(nav);
win.ui.header.classList.remove("border-bottom");
win.ui.header.classList.add("position-absolute", "w-100");
win.ui.header.style.zIndex = 10;
new BSN.Tooltip(nav.openFile, {
	placement: "bottom"
});
new BSN.Tooltip(nav.saveFile, {
	placement: "bottom"
});


let main = document.createElement("main");
main.className = "row m-0 flex-grow-1 p-0";
let playlist = document.createElement("section");
playlist.className = "col-4 px-0 pt-5";
playlist.style.minWidth = "12rem";
playlist.style.maxWidth = "20rem";
let cover = document.createElement("section");
cover.className = "flex-grow-1 d-flex align-items-center border-left position-relative border-top justify-content-center" + (win.options.darkMode ? " bg-dark border-secondary" : " bg-light");
cover.image = new Image();
cover.image.className = "position-absolute m-auto mw-100 mh-100";
cover.appendChild(cover.image);
let footer = document.createElement("footer");
footer.className = "d-flex flex-column" + (win.options.darkMode ? " bg-dark" : " bg-light");
footer.progress = document.createElement("progress");
footer.progress.className = "w-100";
footer.progress.max = 100;
footer.progress.value = 100;
footer.body = document.createElement("div");
footer.body.className = "flex-grow-1 d-flex";
let current = document.createElement("div");
current.className = "d-flex align-items-start w-25 flex-column px-2 py-1 d-flex flex-grow-1" + (win.options.darkMode ? " text-white" : " text-dark");
current.audio = document.createElement("h5");
current.audio.className = "mb-0 text-truncate w-100 font-weight-bolder";
current.artist = document.createElement("div");
current.artist.className = "text-truncate w-100";
let controls = document.createElement("div");
controls.className = "d-flex align-items-center m-2 justify-content-center";
controls.previous = document.createElement("button");
controls.previous.className = "btn btn-sm mdi mdi-skip-previous mdi-24px d-flex lh-24 py-1 px-2" + (win.options.darkMode ? " btn-dark" : " btn-light");
controls.previous.addEventListener("click", e => {
	if (playlist.active)
		if (playlist.active.previousSibling) playlist.active.previousSibling.click();
});
controls.next = document.createElement("button");
controls.next.className = "btn btn-sm mdi mdi-skip-next mdi-24px lh-24 d-flex py-1 px-2" + (win.options.darkMode ? " btn-dark" : " btn-light");
controls.next.addEventListener("click", e => {
	if (playlist.active)
		if (playlist.active.nextSibling) playlist.active.nextSibling.click();
});
controls.play = document.createElement("button");
controls.play.className = "btn btn-sm btn-danger mdi mdi-pause mdi-24px lh-24 d-flex mdi-play py-1 px-2";
controls.play.style.zIndex = "5";
controls.play.addEventListener("click", e => {
	if (!playlist.active) controls.next.click();
	else if (player.paused) player.play();
	else player.pause();
});
controls.append(controls.previous, controls.play, controls.next);
current.append(current.audio, current.artist);
footer.body.append(current, controls);
footer.append(footer.progress, footer.body);
main.append(playlist, cover);
root.append(main, footer);
win.show();

let player = document.createElement("audio");
root.append(player);
player.ontimeupdate = function() {
	footer.progress.value = player.currentTime || 0;
	footer.progress.max = player.duration || 0;
};
player.onended = controls.next;
player.onplay = function() {
	controls.play.classList.remove("mdi-play")
};
player.onpause = function() {
	controls.play.classList.add("mdi-play")
};


function generate(file) {
	let track = document.createElement("button");
	track.className = 'dropdown-item text-truncate d-inline-block' + (win.options.darkMode ? " text-white" : "");
	track.id = file.id;
	track.location = file.url;
	track.artist = file.artist || "No artist";
	track.innerText = file.title || "Unknown title";
	track.onclick = e => {
		if (playlist.active) playlist.active.classList.remove("active");
		track.classList.add("active");
		playlist.active = track;
		loadFromPlaylist();
	}
	playlist.append(track);
}

async function loadFromPlaylist() {
	let track = playlist.active;
	let file = decodeURIComponent(track.location);
	player.src = file;
	player.play();
	if (file.startsWith("http:") || file.startsWith("https:")) {
		current.artist.innerText = this.artist;
		current.audio.innerText = this.innerText;
	} else {
		let tags = await new Promise((resolve, reject) => renderID3(fs.createReadStream(file), (e, res) => {
			if (e) reject(e);
			else resolve(res);
		}));
		current.artist.innerText = tags.artist[0] || playlist.active.artist || "No artist";
		current.audio.innerText = tags.title || playlist.active.innerText;

		if (tags.picture[0])
			cover.image.src = "data:image/" + tags.picture[0].format +
			";base64," + btoa(String.fromCharCode.apply(null, tags.picture[0].data));
		else cover.image.src = "";
	}

	if (prevNotification) prevNotification.dismiss();
	prevNotification = new Notification(win, {
		title: current.audio.innerText,
		message: current.artist.innerText + " playing",
		app: "Boombox",
		icon: "boombox",
		dismissable: false,
		color: "var(--danger)",
		actions: [{
			label: "Play/Pause",
			click() {
				if (player.paused) player.play();
				else player.pause();
			}
		}, {
			label: "Previous track",
			click() {
				controls.previous.click();
			}
		}, {
			label: "Next track",
			click() {
				controls.next.click();
			}
		}]
	});
}

async function load(file) {
	if (typeof file === "object") {
		let exists = false;
		playlist.children.forEach(item => {
			if (file.id === item.id) exists = true;
		});
		if (exists) playlist.getElementById(file.id).location = file.url;
		else {
			generate(file);
			if (player.paused) controls.next.click();
		}
	} else if (path.extname(file) === ".xspf") {
		let data = await fsp.readFile(file, "utf-8");
		xml2js.parseString(data, function(err, list) {
			if (!err) {
				playlist.innerHTML = "";
				list.playlist.trackList[0].track.forEach(function(track) {
					generate({
						url: track.location[0],
						artist: unescape(track.creator),
						title: unescape(track.title)
					});
				});
				controls.next.click();
			} else console.error("Error parsing playlist file (" + file +
				"). Error: " + err)
		});
	} else {
		console.log(file);
		renderID3(fs.createReadStream(file), function(err, tags) {
			generate({
				url: file,
				artist: tags.artist[0],
				title: tags.title || path.basename(file)
			});
			if (player.paused) controls.next.click();
		})
	}
}


if (!shell.isDefaultApp("music") && Registry.get("boombox.firstRun") === undefined)
	shell.setAsDefaultApp("music");
Registry.set("boombox.firstRun", true);

let styling = document.createElement("style");
styling.innerHTML = `
window[id='${win.id}'] progress {
	height: 4px;
	-webkit-appearance: none;
}
window[id='${win.id}'] progress[value]::-webkit-progress-value {
	background: var(--danger);
}
window[id='${win.id}'] .dropdown-item.active,
window[id='${win.id}'] .dropdown-item:active {
	background-color: var(--danger) !important;
}
`;
root.append(styling);
