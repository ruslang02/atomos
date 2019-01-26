const win = AppWindow.fromId(WINDOW_ID);
const path = require("path");
let saveState, cropper, file;
let toBuffer = require('blob-to-buffer');
let guides = true;
let background = true;
let css = document.createElement("link");
css.href = path.join(osRoot, "/node_modules/cropperjs/dist/cropper.min.css");
css.rel = "stylesheet"
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
`
root.append(script, css, styles);

let appButton = document.createElement("button");
appButton.className = "btn btn-outline-primary d-flex p-1 mr-2 btn-sm mdi mdi-18px lh-18 mdi-brush border-0 rounded";
appButton.addEventListener("click", e => {
	e.stopPropagation();
	const pos = win.getPosition();
	appButton.menu.popup({
		x: appButton.offsetLeft + pos[0],
		y: appButton.offsetTop + appButton.offsetHeight + pos[1]
	});
});
appButton.menu = new Menu(win,
	[{
		label: "New Window",
		icon: "new-box",
		accelerator: "Ctrl+N",
		click() {
			AppWindow.launch("brush");
		}
	}, {
		type: "separator"
	}, {
		label: "Open...",
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
						fs.writeFile(file, buffer, console.log)
				})
			})
		}
	}, {
		label: "Save as...",
		icon: "content-save-settings",
		accelerator: "Ctrl+Shift+S",
		id: "saveAs",
		click() {
			Shell.selectFile(Shell.ACTION_SAVE).then(newFile => {
				file = newFile
				appButton.menu.getMenuItemById("save").click();
			})
		}
	}]);
win.ui.header.prepend(appButton);
win.ui.header.classList.remove("border-bottom");
let badge = document.createElement("div");
badge.className = "badge badge-primary mr-2";
badge.innerText = "beta";
win.ui.buttons.prepend(badge);

function gen(icon) {
	let btn = document.createElement("button");
	btn.className = "btn btn-secondary mdi mdi-" + icon + " mdi-18px lh-18 d-flex";
	return btn;
}

let nav = document.createElement("nav");
nav.className = "p-2 border-bottom d-flex";
nav.dataset.draggable = "true";
root.append(nav);
let group1 = document.createElement("div");
group1.className = "btn-group btn-group-sm mr-2";
nav.crop = gen("crop");
nav.crop.addEventListener("click", e => {
	nav.move.classList.replace("btn-primary", "btn-secondary");
	nav.crop.classList.replace("btn-secondary", "btn-primary");
	cropper.crop();
	applyButtons.classList.remove("d-none");
});
nav.move = gen("image-outline");
nav.move.onclick = e => {
	nav.crop.classList.replace("btn-primary", "btn-secondary");
	nav.move.classList.replace("btn-secondary", "btn-primary");
	cropper.clear();
};
group1.append(nav.crop, nav.move);
let group2 = document.createElement("div");
group2.className = "btn-group btn-group-sm mr-2";
nav.rotateLeft = gen("rotate-left");
nav.rotateLeft.onclick = e => {
	cropper.rotate(-90);
	applyButtons.classList.remove("d-none");
}
nav.rotateRight = gen("rotate-right");
nav.rotateRight.onclick = e => {
	cropper.rotate(90);
	applyButtons.classList.remove("d-none");
};
group2.append(nav.rotateLeft, nav.rotateRight);
let group3 = document.createElement("div");
group3.className = "btn-group btn-group-sm mr-2";
nav.cropLandscape = gen("crop-landscape");
nav.cropLandscape.onclick = e => {
	group3.children.forEach(e => e.classList.replace("btn-primary", "btn-secondary"));
	nav.cropLandscape.classList.replace("btn-secondary", "btn-primary")
	cropper.setAspectRatio(16 / 9);
}
nav.cropSquare = gen("crop-square");
nav.cropSquare.onclick = e => {
	group3.children.forEach(e => e.classList.replace("btn-primary", "btn-secondary"));
	nav.cropSquare.classList.replace("btn-secondary", "btn-primary")
	cropper.setAspectRatio(1);
};
nav.cropFree = gen("crop-free");
nav.cropFree.onclick = e => {
	group3.children.forEach(e => e.classList.replace("btn-primary", "btn-secondary"));
	nav.cropFree.classList.replace("btn-secondary", "btn-primary")
	cropper.setAspectRatio(0);
};
group3.append(nav.cropLandscape, nav.cropSquare, nav.cropFree);
let group4 = document.createElement("div");
group4.className = "btn-group btn-group-sm";
nav.grid = gen("grid");
nav.grid.onclick = e => {
	guides = !guides;
	this.classList.toggle("btn-primary");
	this.classList.toggle("btn-secondary");
	cropper.destroy();
	initCropper();
}
nav.texture = gen("texture");
nav.texture.onclick = e => {
	this.classList.toggle("btn-primary");
	this.classList.toggle("btn-secondary");
	background = !background;
	cropper.destroy();
	initCropper();
};
group4.append(nav.grid, nav.texture);
applyButtons = document.createElement("div");
applyButtons.className = "btn-group btn-group-sm ml-auto d-none";
applyButtons.cancel = document.createElement("button");
applyButtons.cancel.onclick = e => {
	cropper.destroy();
	image.src = saveState;
	initCropper();
}
applyButtons.cancel.className = "btn btn-danger mdi mdi-close mdi-18px lh-18 d-flex";
applyButtons.apply = document.createElement("button");
applyButtons.apply.className = "btn btn-success align-items-center mdi mdi-check mdi-18px lh-18 d-flex";
applyButtons.apply.innerText = " Apply";
applyButtons.apply.onclick = e => {
	saveState = cropper.getCroppedCanvas().toDataURL();
	image.src = saveState;
	cropper.destroy();
	initCropper();
	applyButtons.classList.add("d-none");
}
applyButtons.append(applyButtons.cancel, applyButtons.apply);
nav.append(group1, group2, group3, group4, applyButtons);
let cropperElem = document.createElement("main");
let image = new Image();
cropperElem.className = "flex-grow-1 d-flex text-truncate rounded-bottom bg-white";
image.className = "mw-100";
cropperElem.append(image);
root.append(cropperElem)

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
		aspectRatio: 16 / 9,
		background: background,
		guides: guides,
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

win.show();
