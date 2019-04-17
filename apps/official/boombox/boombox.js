const path = require("path");
const AppWindow = require("@api/WindowManager");
const Shell = require("@api/Shell");
const Registry = require(`@api/Registry`);
const {Notification} = require("@api/Notification");
const xml2js = require('xml2js');
const js2xml = require('jstoxml');
const renderID3 = require('musicmetadata');
let ofdDefaultPath = path.join(process.env.HOME, "Music");
const fs = require("fs");
const fsp = fs.promises;
let prevNotification;
const win = AppWindow.getCurrentWindow();
setImmediate(() => {
	if (win.arguments.file) load(win.arguments.file);
});
win.on('second-instance', (_e, args) => {
	load(args.file);
});
win.on('close', () => {
	if (prevNotification) prevNotification.dismiss();
});
let nav = document.createElement("nav");
nav.className = "d-flex";
nav.openFile = document.createElement("button");
nav.openFile.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mdi-folder-outline mr-2 mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.openFile.onclick = () => {
	Shell.selectFile(Shell.ACTION_OPEN, {
		defaultPath: ofdDefaultPath,
		buttonLabel: "Play"
	}).then(file => {
		if (!file.url)
			ofdDefaultPath = path.dirname(file);
		load(file);
	})
};
nav.openFile.title = "Open".toLocaleString();
nav.saveFile = document.createElement("button");
nav.saveFile.className = "btn mdi d-flex btn-sm shadow-sm align-items-center mdi-playlist-play mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.saveFile.onclick = async function () {
	let trackList = [];
	let file = await Shell.selectFile(Shell.ACTION_SAVE, {
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
	new Notification("Playlist successfully saved", {
		actions: [{
			title: "Show in folder",
			click() {
				Shell.showItemInFolder(url);
			}
		}]
	});
};
nav.saveFile.title = "Export playlist".toLocaleString();
nav.append(nav.openFile, nav.saveFile);
win.ui.header.prepend(nav);
win.ui.header.classList.remove("border-bottom");
win.ui.header.classList.add("position-absolute", "w-100");
win.ui.header.style.zIndex = 10;
new Tooltip(nav.openFile, {
	placement: "bottom"
});
new Tooltip(nav.saveFile, {
	placement: "bottom"
});


let main = document.createElement("main");
main.className = "row m-0 flex-grow-1 p-0";
let playlist = document.createElement("section");
playlist.className = "col-4 pl-0 pr-2 mt-2 pt-5 scrollable-y";
playlist.style.minWidth = "12rem";
playlist.style.maxWidth = "20rem";
let cover = document.createElement("section");
cover.className = "flex-grow-1 d-flex align-items-center position-relative justify-content-center mx-2 very-rounded shadow mt-5 " + (win.options.darkMode ? "bg-dark border-secondary" : "bg-light");
cover.image = new Image();
cover.image.className = "position-absolute m-auto mw-100 mh-100";
cover.appendChild(cover.image);
let footer = document.createElement("footer");
footer.className = "d-flex flex-column very-rounded shadow m-2 " + (win.options.darkMode ? "bg-dark" : "bg-light");
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
let current = document.createElement("div");
current.className = "d-flex align-items-start flex-column justify-content-center pl-2 d-flex flex-grow-1" + (win.options.darkMode ? " text-white" : " text-dark");
current.style.width = 0;
current.audio = document.createElement("h5");
current.audio.className = "mb-0 text-truncate w-100 font-weight-bolder";
current.artist = document.createElement("div");
current.artist.className = "text-truncate w-100";
let controls = document.createElement("div");
controls.className = "d-flex align-items-center flex-shrink-0 m-2 justify-content-center";
controls.previous = document.createElement("button");
controls.previous.className = "btn mdi mdi-skip-previous mdi-24px lh-24 rounded-circle d-flex p-1" + (win.options.darkMode ? " btn-dark" : " btn-light");
controls.previous.addEventListener("click", () => {
	if (playlist.active)
		if (playlist.active.previousSibling) playlist.active.previousSibling.click();
});
controls.next = document.createElement("button");
controls.next.className = "btn mdi mdi-skip-next mdi-24px lh-24 rounded-circle d-flex p-1" + (win.options.darkMode ? " btn-dark" : " btn-light");
controls.next.addEventListener("click", () => {
	if (playlist.active)
		if (playlist.active.nextSibling) playlist.active.nextSibling.click();
});
controls.play = document.createElement("button");
controls.play.className = "btn mdi mdi-play mdi-pause mdi-24px mx-2 lh-24 rounded-circle d-flex p-2 text-white";
controls.play.style.background = "var(--orange)";
controls.play.style.zIndex = "5";
controls.play.addEventListener("click", () => {
	if (!playlist.active) controls.next.click();
	else if (player.paused) player.play();
	else player.pause();
});
let addControls = document.createElement("div");
addControls.className = "flex-grow-1 d-flex align-items-center justify-content-end mr-2";
addControls.style.width = 0;
controls.append(controls.previous, controls.play, controls.next);
current.append(current.audio, current.artist);
footer.body.append(current, controls, addControls);
footer.append(footer.progress, footer.body);
main.append(playlist, cover);
win.ui.body.append(main, footer);


let player = document.createElement("audio");
win.ui.body.append(player);
player.ontimeupdate = function () {
	footer.progress.value = player.currentTime || 0;
	footer.progress.max = player.duration || 0;
	addControls.innerText = Math.trunc(footer.progress.value / 60) + ":" + (footer.progress.value % 60 < 10 ? "0" : "") + footer.progress.value % 60 + " / " + Math.trunc(footer.progress.max / 60) + ":" + (footer.progress.max % 60 < 10 ? "0" : "") + Math.round(footer.progress.max % 60);
	footer.progress.style.setProperty("--value", (footer.progress.value / footer.progress.max * 100) + "%");
};
player.onended = controls.next.onclick;
player.onplay = function () {
	controls.play.classList.remove("mdi-play");
};
player.onpause = function () {
	controls.play.classList.add("mdi-play");
};


function generate(file) {
	let track = document.createElement("button");
	track.className = 'dropdown-item text-truncate rounded-right-pill d-inline-block' + (win.options.darkMode ? " text-white" : "");
	track.id = file.id;
	track.location = file.url;
	track.artist = file.artist || "No artist";
	track.innerText = file.title || "Unknown title";
	track.onclick = () => {
		if (playlist.active) playlist.active.classList.remove("active");
		track.classList.add("active");
		playlist.active = track;
		loadFromPlaylist();
	};
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
		else if (fs.existsSync(path.join(file, "..", "cover.jpg"))) {
			let cvr = await fsp.readFile(path.join(file, "..", "cover.jpg"));
			cover.image.src = "data:image/jpeg;base64," + cvr.toString('base64');
		} else cover.image.src = "";
	}

	if (prevNotification !== undefined)
		prevNotification.dismiss();
	prevNotification = new Notification(current.audio.innerText, {
		body: current.artist.innerText + " " + "playing".toLocaleString(),
		sticky: true,
		actions: [{
			title: "Play/Pause",
			click() {
				if (player.paused) player.play();
				else player.pause();
			}
		}, {
			title: "Previous track",
			click() {
				controls.previous.click();
			}
		}, {
			title: "Next track",
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
		xml2js.parseString(data, function (err, list) {
			if (!err) {
				playlist.innerHTML = "";
				list.playlist.trackList[0].track.forEach(function (track) {
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
	} else
		renderID3(fs.createReadStream(file), function (_err, tags) {
			generate({
				url: file,
				artist: tags.artist[0],
				title: tags.title || path.basename(file)
			});
			if (player.paused) controls.next.click();
		});
}


if (!Shell.isDefaultApp("music") && Registry.get("boombox.firstRun") === undefined)
	Shell.setAsDefaultApp("music");
Registry.set("boombox.firstRun", true);

let styling = document.createElement("style");
styling.innerHTML = `
window[id='${win.id}'] progress[value]::-webkit-progress-value {
	background: var(--orange);
}
window[id='${win.id}'] .dropdown-item.active,
window[id='${win.id}'] .dropdown-item:active {
	background-color: var(--orange) !important;
}
window[id='${win.id}'] footer:hover .custom-range::-webkit-slider-thumb {
	opacity: 1;
}
window[id='${win.id}'] .custom-range {
	height: 5px;
	z-index:100;
}
window[id='${win.id}'] .custom-range::-webkit-slider-thumb {
	background: var(--orange);
	opacity: 0;
	width: 11px;
	height: 11px;
	transition: opacity .3s ease;
}
window[id='${win.id}'] .custom-range::-webkit-slider-runnable-track {
	height: 5px;
	background: linear-gradient(to right, var(--orange) 0%, var(--orange) var(--value), ${win.options.darkMode ? "#252525" : "#ddd"} var(--value), ${win.options.darkMode ? "#252525" : "#ddd"} 100%);
	border-radius: 0;
}
`;
win.ui.body.append(styling);
