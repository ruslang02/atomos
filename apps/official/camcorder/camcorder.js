const win = AppWindow.fromId(WINDOW_ID);
const path = require("path");
const fs = require("fs").promises;
const {clipboard, remote} = require("electron");
const wc = remote.getCurrentWebContents();
const registry = new Registry("camcorder");
let nav = document.createElement("nav");
nav.className = "d-flex";
nav.copyClipboard = document.createElement("button");
nav.copyClipboard.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mdi-content-copy mr-2 mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.copyClipboard.onclick = () => clipboard.writeImage(imageRes);
nav.copyClipboard.disabled = true;
nav.copyClipboard.title = "Copy to Clipboard (Ctrl+C)";
nav.showInFiles = document.createElement("button");
nav.showInFiles.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mdi-folder-outline mr-2 mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.showInFiles.onclick = () => Shell.showItemInFolder(url);
nav.showInFiles.disabled = true;
nav.showInFiles.title = "Show in File Manager (Ctrl+N)";
nav.share = document.createElement("button");
nav.share.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mdi-share mr-2 mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
nav.share.onclick; // Shell.shareContent() TODO: API for sharing content
nav.share.disabled = true;
nav.share.title = "Share (Ctrl+S)";
nav.append(nav.copyClipboard, nav.showInFiles, nav.share);
new Tooltip(nav.copyClipboard, {
	placement: "bottom"
});
new Tooltip(nav.showInFiles, {
	placement: "bottom"
});
new Tooltip(nav.share, {
	placement: "bottom"
});
win.ui.header.prepend(nav);
win.ui.header.classList.add("border-0");
let image = document.createElement("div");
image.className = "flex-grow-1 mx-2 rounded shadow-sm" + (win.options.darkMode ? " bg-dark" : " bg-white");
image.style.backgroundRepeat = "no-repeat";
image.style.backgroundPosition = "center center";
image.style.backgroundSize = "contain";
let imageRes;
let url;
let captureButton = document.createElement("button");
captureButton.className = "btn btn-success btn-lg m-2 d-flex align-items-center justify-content-center";
captureButton.icon = document.createElement("icon");
captureButton.icon.className = "mdi mdi-24px mdi-camera-iris mr-2 lh-24 d-flex";
captureButton.header = document.createElement("div");
captureButton.header.innerText = "Capture Screen";
captureButton.addEventListener("click", e => {
	win.hide();
	let output = path.join(process.env.HOME, "Pictures", "screenshot_" + new Date().getTime() + ".png");
	url = output;
	setTimeout(() => {
		wc.capturePage(async function (result) {
			win.show();
			try {
				let png = result.toPNG();
				await fs.writeFile(output, png);
				image.style.backgroundImage = `url('${output}')`;
				let thumbnail = new Image();
				thumbnail.src = output;
				thumbnail.className = "mw-100";

				imageRes = result;
				nav.showInFiles.disabled = false;
				nav.copyClipboard.disabled = false;

				new Notification(win, {
					title: "Screenshot has been successfully taken",
					app: "Camcorder",
					icon: "camera-iris",
					message: thumbnail,
					image: true,
					actions: [{
						label: "Show in folder",
						click() {
							Shell.showItemInFolder(output);
						}
					}, {
						label: "Copy to Clipboard",
						click() {
							clipboard.writeImage(result);
						}
					}]
				});
			} catch (e) {
				console.error(e);
				new Notification(win, {
					title: "Screenshot not taken",
					app: "Camcorder",
					icon: "camera-iris",
					message: "See logs to find the issue.",
					actions: [{
						label: "Open Developer Tools",
						click() {
							wc.openDevTools();
						}
					}],
					color: "var(--danger)"
				});
			}
		});
	}, 1000);
});
captureButton.append(captureButton.icon, captureButton.header);
win.ui.body.append(image, captureButton);
win.show();
