const {Notification, Snackbar, Menu, AppWindow, Shell, Components: {Button}} = require("@api");
const win = AppWindow.getCurrentWindow();
const path = require("path");
let saveState, cropper, file;
let toBuffer = require('blob-to-buffer');
let guides = true;
let background = true;
let css = document.createElement("link");
css.href = path.join(osRoot, "/node_modules/cropperjs/dist/cropper.min.css");
css.rel = "stylesheet";
let script = document.createElement("script");
script.src = path.join(osRoot, "/node_modules/cropperjs/dist/cropper.min.js");
script.onload = e => {
	if (win.arguments.file) loadFile(win.arguments.file);
};
let styles = document.createElement("style");
styles.innerHTML = `
window[id='${win.id}'] .cropper-container {
  flex-grow: 2 !important;
  height: auto !important;
  width: 100% !important;
}
`;
win.ui.body.append(script, css, styles);

let appButton = document.createElement("button");
appButton.className = "btn btn-sm mdi " + (win.options.darkMode ? "btn-dark" : "btn-light") + " d-flex shadow-sm align-items-center mdi-brush mr-2 mdi-18px lh-18";
appButton.addEventListener("click", e => {
	e.stopPropagation();
	const pos = win.getPosition();
	appButton.menu.popup({
		x: appButton.offsetLeft + pos[0],
		y: appButton.offsetTop + appButton.offsetHeight + pos[1]
	});
});
appButton.menu = new Menu([{
	label: "New Window",
	icon: "new-box",
	accelerator: "Ctrl+N",
	click() {
		AppWindow.launch("official/brush");
	}
}, {
	type: "separator"
}, {
	label: "Open".toLocaleString() + "...",
	icon: "folder-outline",
	accelerator: "Ctrl+O",
	click() {
		Shell.selectFile(Shell.ACTION_OPEN).then(file => {
			loadFile(file);
		})
	}
}, {
	type: "separator"
}, {
	label: "Save",
	icon: "content-save",
	accelerator: "Ctrl+S",
	id: "save",
	click() {
		if (!file) appButton.menu.getMenuItemById("saveAs").click();
		else cropper.getCroppedCanvas().toBlob(function (blob) {
			toBuffer(blob, function (err, buffer) {
				if (err) console.log("toBuffer failed" + err);
				else
					fs.writeFile(file, buffer, () => {
						new Snackbar("Image was saved")
					})
			})
		})
	}
}, {
	label: "Save As".toLocaleString() + "...",
	icon: "content-save-settings",
	accelerator: "Ctrl+Shift+S",
	id: "saveAs",
	click() {
		Shell.selectFile(Shell.ACTION_SAVE).then(newFile => {
			file = newFile;
			appButton.menu.getMenuItemById("save").click();
		})
	}
}]);
win.ui.header.prepend(appButton);
win.ui.header.classList.remove("border-bottom");
let badge = document.createElement("div");
badge.className = "badge badge-primary mr-2";
badge.innerText = "beta";
win.ui.header.append(badge);

let nav = document.createElement("nav");
nav.className = "p-2 d-flex shadow";
nav.style.zIndex = 1;
nav.dataset.draggable = "true";
win.ui.body.append(nav);
nav.crop = new Button({
	size: "sm",
	icon: "crop",
	shadow: true,
	color: win.options.theme,
	iconSize: 18,
	addClasses: "mr-2"
});
nav.crop.addEventListener("click", e => {
	nav.move.classList.replace("btn-primary", "btn-secondary");
	nav.crop.classList.replace("btn-secondary", "btn-primary");
	cropper.crop();
	applyButtons.classList.remove("d-none");
});
nav.move = new Button({
	size: "sm",
	icon: "",
	shadow: true,
	color: win.options.theme,
	iconSize: 18,
	addClasses: "mr-2"
});
nav.move.onclick = e => {
	nav.crop.classList.replace("btn-primary", "btn-secondary");
	nav.move.classList.replace("btn-secondary", "btn-primary");
	cropper.clear();
};
nav.rotateLeft = new Button({
	size: "sm",
	icon: "rotate-left",
	shadow: true,
	color: win.options.theme,
	iconSize: 18,
	addClasses: "mr-2"
});
nav.rotateLeft.onclick = () => {
	cropper.rotate(-90);
	applyButtons.classList.remove("d-none");
};
nav.rotateRight = new Button({
	size: "sm",
	icon: "rotate-right",
	shadow: true,
	color: win.options.theme,
	iconSize: 18
});
nav.rotateRight.onclick = e => {
	cropper.rotate(90);
	applyButtons.classList.remove("d-none");
};
applyButtons = document.createElement("div");
applyButtons.className = "btn-group btn-group-sm ml-auto d-none";
applyButtons.cancel = document.createElement("button");
applyButtons.cancel.onclick = e => {
	cropper.destroy();
	image.src = saveState;
	initCropper();
	applyButtons.classList.add("d-none");
};
applyButtons.cancel.className = "btn btn-danger mdi mdi-close mdi-18px lh-18 d-flex";
applyButtons.apply = document.createElement("button");
applyButtons.apply.className = "btn btn-success align-items-center mdi mdi-check mdi-18px lh-18 d-flex";
applyButtons.apply.innerText = " " + "Apply".toLocaleString();
applyButtons.apply.onclick = e => {
	saveState = cropper.getCroppedCanvas().toDataURL();
	image.src = saveState;
	cropper.destroy();
	initCropper();
	applyButtons.classList.add("d-none");
};
applyButtons.append(applyButtons.cancel, applyButtons.apply);
nav.append(nav.crop, nav.move, nav.rotateLeft, nav.rotateRight, applyButtons);
let cropperElem = document.createElement("main");
let image = new Image();
cropperElem.className = "flex-grow-1 d-flex text-truncate rounded-bottom bg-secondary";
image.className = "mw-100";
cropperElem.append(image);
win.ui.body.append(cropperElem);

function loadFile(path) {
	saveState = "";
	file = path;
	win.setTitle(require("path").basename(file) + " - Brush");
	if (cropper) cropper.destroy();
	image.src = path;
	initCropper();
}

function initCropper() {
	cropper = new Cropper(image, {
		autoCrop: false,
		dragMode: "move",
		background: true,
		guides: true,
		cropstart: function (e) {
			if (e.detail.action === "move") {
				nav.crop.classList.replace("btn-primary", "btn-secondary");
				nav.move.classList.replace("btn-secondary", "btn-primary");
				applyButtons.classList.add("d-none");
			} else {
				nav.move.classList.replace("btn-primary", "btn-secondary");
				nav.crop.classList.replace("btn-secondary", "btn-primary");
				applyButtons.classList.remove("d-none");
			}
		},
		ready: function () {
			saveState = cropper.getCroppedCanvas().toDataURL();
			image.src = saveState;
		}
	});
}


