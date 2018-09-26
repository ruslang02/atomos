const fs = require("fs");
const http = require("http");
const win = AppWindow.fromId(WINDOW_ID);
let fileButton = document.createElement("button");
fileButton.addEventListener('click', e => {
	shell.selectFile(shell.ACTION_OPEN, {
		defaultPath: app.getPath("documents")
	}).then(renderDocument);
});
fileButton.className = "btn btn-outline-primary border-0 p-1 mdi mdi-folder-outline mdi-18px lh-18 mr-2";
win.ui.header.prepend(fileButton);
function renderDocument(url) {
	if(!url) return;
	root.innerHTML = "";
	let port = Math.floor(Math.random() * 16383) + 49152;
	let server = http.createServer((request, response) => {
		response.writeHead(200, {
			'Content-Length': fs.statSync(url).size,
			'Content-Type': require('mime-types').lookup(url)
		});
		fs.createReadStream(url).pipe(response);
	}).listen(port);
	let doc = document.createElement("webview");
	doc.src = `file://${osRoot}/node_modules/node-viewerjs/release/index.html#http://localhost:${port}/pdf.pdf`;
	doc.className = "flex-grow-1 position-absolute w-100 h-100 d-inline-flex";
	root.append(doc);
}
root.className = "h-100 position-relative"
renderDocument(win.arguments.file);
win.show();
