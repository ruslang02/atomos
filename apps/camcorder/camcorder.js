const win = AppWindow.fromId(WINDOW_ID);
const path = require("path");
const fs = require("fs").promises;
const {clipboard, remote} = require("electron");
const wc = remote.getCurrentWebContents();
const registry = new Registry("camcorder");
let appButton = document.createElement("button");
appButton.className = "btn d-flex p-1 mr-2 btn-sm mdi mdi-18px lh-18 mdi-camcorder border-0 rounded" + (win.options.darkMode ? " btn-outline-light" : " btn-outline-primary");
appButton.addEventListener("click", e => {
	e.stopPropagation();
	const pos = win.getPosition();
	appButton.menu.popup({
		x: appButton.offsetLeft + pos[0],
		y: appButton.offsetTop + appButton.offsetHeight + pos[1]
	});
});
appButton.menu = new Menu(win, [{
	type: "header",
	label: "Screenshot"
}, {
	label: "Copy to Clipboard",
	icon: "content-copy",
	enabled: false,
	id: "copyClipboard",
	click() {
		clipboard.writeImage(imageRes);
	}
}, {
	label: "Show in File Manager",
	enabled: false,
	icon: "folder-outline",
	id: "showInFiles",
	click() {
		shell.showItemInFolder(url);
	}
}, {
	label: "Share...",
	icon: "share",
	enabled: false,
	click() {
		// shell.shareContent() TODO: API for sharing content
	}
}, {
	type: "header",
	label: "Preferences"
}, {
	label: "Capture on launch",
	type: "checkbox",
	checked: registry.get().autoCapture,
	click(item) {
		registry.set({autoCapture: item.checked});
	}
}]);
win.ui.header.prepend(appButton);
let image = document.createElement("div");
image.className = "flex-grow-1" + (win.options.darkMode ? " bg-dark" : " bg-white");
image.style.backgroundRepeat = "no-repeat";
image.style.backgroundPosition = "center center";
image.style.backgroundSize = "contain";
image.addEventListener("contextmenu", e => {
	e.stopPropagation();
	appButton.menu.popup();
});
let imageRes;
let url;
let footer = document.createElement("footer");
footer.className = "p-2 border-top " + (win.options.darkMode ? " bg-dark border-secondary" : " bg-light");
let captureButton = document.createElement("button");
captureButton.className = "btn btn-success btn-block btn-lg py-1 d-flex align-items-center justify-content-center";
captureButton.icon = document.createElement("icon");
captureButton.icon.className = "mdi mdi-24px mdi-camera-iris mr-2 lh-24 d-flex";
captureButton.header = document.createElement("div");
captureButton.header.innerText = "Capture Screen";
captureButton.addEventListener("click", e => {
	win.hide();
	let output = path.join(app.getPath("pictures"), "screenshot_" + new Date().getTime() + ".png");
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
				appButton.menu.getMenuItemById("showInFiles").enabled = true;
				appButton.menu.getMenuItemById("copyClipboard").enabled = true;

				new Notification(win, {
					title: "Screenshot has been successfully taken",
					app: "Camcorder",
					icon: "camera-iris",
					message: thumbnail,
					image: true,
					actions: [{
						label: "Show in folder",
						click() {
							shell.showItemInFolder(output);
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
})
captureButton.append(captureButton.icon, captureButton.header);
footer.append(captureButton);
root.append(image, footer);

if (registry.get().autoCapture || win.arguments.capture)
	captureButton.click();
else win.show();
