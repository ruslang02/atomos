console.log(__filename);
const fs = require("fs");
const http = require("http");
const mime = require('mime-types');
const win = AppWindow.fromId(WINDOW_ID);
let fileButton = document.createElement("button");
fileButton.addEventListener('click', e => {
	Shell.selectFile(Shell.ACTION_OPEN, {
		defaultPath: process.env.HOME
	}).then(renderDocument);
});
fileButton.className = "btn btn-sm mdi d-flex shadow-sm align-items-center mdi-folder-outline mr-2 mdi-18px lh-18" + (win.options.darkMode ? " btn-dark" : " btn-light");
fileButton.title = "Open PDF (Ctrl+O)";
win.ui.header.prepend(fileButton);

function openAccelerator(e) {
	if (e.ctrlKey && e.code === "KeyO") fileButton.click();
}

window.addEventListener("keypress", openAccelerator);
new Tooltip(fileButton, {placement: "bottom"});

function renderDocument(url) {
	if (!url) return;
	root.innerHTML = "";
	let port = Math.floor(Math.random() * 16383) + 49152;
	let server = http.createServer((request, response) => {
		response.writeHead(200, {
			'Content-Length': fs.statSync(url).size,
			'Content-Type': mime.lookup(url)
		});
		fs.createReadStream(url).pipe(response);
	}).listen(port);
	let doc = document.createElement("webview");
	doc.src = `file://${osRoot}/node_modules/node-viewerjs/release/index.html#http://localhost:${port}/pdf.pdf`;
	doc.className = "flex-grow-1 position-absolute w-100 h-100 d-inline-flex";
	win.ui.body.append(doc);
}

root.className = "h-100 position-relative" + (win.options.darkMode ? " bg-dark" : " bg-light");
renderDocument(win.arguments.file);
win.show();
win.on('close', e => {
	window.removeEventListener("keypress", openAccelerator);
});