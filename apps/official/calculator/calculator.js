const AppWindow = require("@api/WindowManager");
const win = AppWindow.getCurrentWindow();
let header = document.createElement("div");
header.className = "input-group mb-2 shadow-sm";
let clear = document.createElement("button");
clear.className = "btn btn-danger btn-lg very-rounded-left py-0";
clear.onclick = () => output.value = "";
clear.innerText = "C";
let output = document.createElement("input");
output.type = "text";
output.className = "form-control flex-shrink-0 text-right form-control-lg very-rounded-right";
header.append(clear, output);
let grid = document.createElement("main");
grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(4, calc(25% - .4rem))";
grid.style.gap = CSS.rem(0.5);

function genBtn(text, color) {
	let elem = document.createElement("button");
	elem.className = "btn btn-lg p-0 shadow-sm position-relative btn-" + (color || (win.options.darkMode ? "dark" : "light"));
	elem.text = document.createElement("div");
	elem.text.className = "position-absolute d-flex align-items-center w-100 h-100 justify-content-center";
	elem.text.innerHTML = text;
	elem.onclick = () => {
		if (text === "=")
			output.value = eval(output.value.replace("÷", "/").replace("×", "*"));
		else
			output.value += elem.text.innerHTML;
	};
	elem.append(elem.text);
	return elem;
}

grid.append(
	genBtn(7), genBtn(8), genBtn(9), genBtn("×", "secondary"),
	genBtn(4), genBtn(5), genBtn(6), genBtn("÷", "secondary"),
	genBtn(1), genBtn(2), genBtn(3), genBtn("−", "secondary"),
	genBtn(0), genBtn(","), genBtn("=", "primary"), genBtn("+", "secondary"));
win.ui.body.classList.add("p-2");
//
let css = document.createElement("style");
css.innerHTML = `
window[id='${win.id}'] main .btn:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
window[id='${win.id}'] window-ui > div:not([style*='cursor: ew-resize']) {display: none}
`;
win.on('resize', function () {
	win.ui.root.style.height = "auto";
});
win.ui.body.append(header, grid, css);
