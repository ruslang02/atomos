const Shell = require("@api/Shell");
if (Shell.isDebug)
	window.relocate = function relocate() {
		window.zoomFactor = 1.0;
		document.body.style.setProperty("--taskbar-y", CSS.px(window.innerHeight));
		Elements.Bar.style.left = CSS.px(0);
		Elements.Bar.style.width = CSS.px(window.innerWidth);
	};
else {
	const { remote: { screen, getCurrentWindow, getCurrentWebContents } } = require("electron");
	const wc = getCurrentWebContents();
	const win = getCurrentWindow();
	window.relocate = function relocate() {
		const zoom = wc.getZoomFactor();
		window.zoomFactor = zoom;
		let maxWidth = 0, maxHeight = 0, minX = 0, minY = 0;
		for (const scr of screen.getAllDisplays()) {
			if (scr.bounds.x + scr.bounds.width > maxWidth) maxWidth = scr.bounds.x + scr.bounds.width;
			if (scr.bounds.y + scr.bounds.height > maxHeight) maxHeight = scr.bounds.y + scr.bounds.height;
			if (scr.bounds.x < minX) minX = scr.bounds.x;
			if (scr.bounds.y < minY) minY = scr.bounds.y;
		}
		win.setBounds({ x: minX, y: minY, width: maxWidth, height: maxHeight });
		const mainDisp = screen.getPrimaryDisplay().bounds;
		document.body.style.setProperty("--taskbar-y", CSS.px((mainDisp.y + mainDisp.height) / zoomFactor));
		Elements.Bar.style.left = CSS.px(mainDisp.x / zoomFactor);
		Elements.Bar.style.width = CSS.px(mainDisp.width / zoomFactor);
	};
	screen.on("display-added", relocate);
	screen.on("display-remove", relocate);
	screen.on("display-metrics-changed", relocate);
}
window.addEventListener("resize", relocate);
setTimeout(relocate, 3000);
relocate();