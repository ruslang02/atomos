const fs = require("fs");
const fsp = fs.promises;
const {google} = require('googleapis');
const {OAuth2Client} = require('google-auth-library');
const win = AppWindow.fromId(WINDOW_ID);
let TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) + '/.credentials/';
let TOKEN_PATH = TOKEN_DIR + 'youtube-nodejs-quickstart.json';
let SCOPES = ['https://www.googleapis.com/auth/youtube.readonly'];
let loggedin = fs.existsSync(TOKEN_PATH);

let credentials = JSON.parse(await fsp.readFile(osRoot + '/client_secret.json'));
let oauth2Client = new OAuth2Client(credentials.web.client_id, credentials.web.client_secret, "http://atomos.org.uk/ytcallback");
fsp.readFile(TOKEN_PATH).catch(err => {
		let authUrl = oauth2Client.generateAuthUrl({
			access_type: 'offline',
			scope: SCOPES
		});
		let login = document.createElement("webview");
		login.nodeintegration = true;
		login.className = "position-relative flex-grow-1 scrollable-0 w-100 h-100";
		login.src = authUrl;
		login.addEventListener("ipc-message", e => {
			if (e.channel === "log-in") {
				oauth2Client.getToken(e.args[0], function (err, token) {
				if (err) {
					console.log('Error while trying to retrieve access token', err);
					return;
				}
				oauth2Client.credentials = token;
				storeToken(token);
				AppWindow.launch("")
				app.window.reload();
				modal.controller.hide();
			});
			}
		})
		modal.content.append(login);
		modal.controller.show();
		ipcRenderer.sendToHost("log-in", authUrl);
		$("body").addClass("p-3").css({
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center"
		}).append("<h1>Welcome to YouTube!</h1><p>To proceed watching videos, please log in to Google and permit \"AtomOS Youtube\" to use yourself as YouTube.</p><br /><button class='btn btn-danger' onclick='location.reload()'>Sign In</button>")
		ipcRenderer.on("log-in", function (e, code) {
			oauth2Client.getToken(code, function (err, token) {
				if (err) {
					console.log('Error while trying to retrieve access token', err);
					return;
				}
				oauth2Client.credentials = token;
				storeToken(token);
				app.window.reload();
			});
		})
}), function (err, token) {
			if (err) {
				;
			} else {
				$("body").append('<h5 class="m-3">Trending</h5>');
				oauth2Client.credentials = JSON.parse(token);
				callback(oauth2Client);
			}
		});
authorize(, getChannel);
let modal;
win.on('close', e => {
	modal.remove();
})
let fileButton = document.createElement("button");
fileButton.addEventListener('click', e => {
	shell.selectFile(shell.ACTION_OPEN, {
		defaultPath: app.getPath("documents")
	}).then(renderDocument);
});
fileButton.className = "btn btn-outline-danger border-0 p-1 mdi mdi-youtube mdi-18px lh-18 mr-2";
win.ui.header.prepend(fileButton);
win.ui.header.classList.remove("border-bottom")

let container = document.createElement("section");
container.className = "d-flex flex-grow-1";

let sidebar = document.createElement("aside");
sidebar.className = "nav nav-pills flex-column px-2";
function newBtn(title, icon, page) {
	let elem = document.createElement("button");
	elem.className = "nav-link border-0 text-left d-flex btn-outline-danger btn-white mt-2";
	elem.icon = document.createElement("icon");
	elem.icon.className = `mdi mdi-24px mr-2 mdi-${icon} lh-24 d-flex`;
	elem.header = document.createElement("div");
	elem.header.innerText = title;
	elem.append(elem.icon, elem.header);
	elem.onclick = e => {
		active.classList.replace("active", "btn-white");
		elem.classList.replace("btn-white", "active");
		active = elem;
		webview.src = `file:///${__dirname}/pages/${page}.html`;
	};
	sidebar.append(elem);
	return elem;
}
active = newBtn("Trending", "home-outline", "home");
newBtn("Subscriptions", "animation-play-outline", "subs");
newBtn("Search", "magnify", "search");

let webview = document.createElement("webview");
webview.nodeintegration = true;
webview.className = "position-relative flex-grow-1 scrollable-0 border-top border-left bg-white";
webview.addEventListener("ipc-message", function(e) {
	if (e.channel === "log-in") {
		let login = document.createElement("webview");
		login.nodeintegration = true;
		login.className = "position-relative flex-grow-1 scrollable-0 w-100 h-100";
		login.src = e.args[0];
		login.addEventListener("ipc-message", e => {
			if (e.channel === "log-in") {
				webview.getWebContents().send("log-in", e.args[0]);
				modal.controller.hide();
			}
		})
		modal.content.append(login);
		modal.controller.show();
	}
});
sidebar.firstChild.click();
container.append(sidebar, webview);
root.append(container);
win.show();
setImmediate(e => {
	modal = document.createElement("div");
	modal.className = "modal fade";
	modal.tabindex = -1;
	modal.dialog = document.createElement("div");
	modal.dialog.className = "modal-dialog modal-dialog-centered";
	modal.content = document.createElement("div");
	modal.content.className = "modal-content scrollable-0";
	modal.content.style.height = "500px";
	modal.dialog.append(modal.content);
	modal.append(modal.dialog);
	document.body.append(modal);
	modal.controller = new BSN.Modal(modal);
})
