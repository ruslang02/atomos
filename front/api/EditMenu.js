const wc = require("electron").remote.getCurrentWebContents();
let previousMenu;
wc.on("context-menu", (e, params) => {
	let generate = true;
	if (previousMenu) if (document.querySelector("body>menu.dropdown-menu:not(#" + previousMenu.id + ")")) generate = false;
	if (!params.isEditable) generate = false;
	if (e.sender.dataset && e.sender.dataset.editMenu === "false") generate = false;
	if (generate) {
		console.log(params);
		previousMenu = new Menu([{
			label: "Undo",
			icon: "undo",
			enabled: params.editFlags.canUndo,
			click(item, win, elem) {
				elem.focus();
				document.execCommand("undo");
			}
		}, {
			label: "Redo",
			icon: "redo",
			enabled: params.editFlags.canRedo,
			click(item, win, elem) {
				elem.focus();
				document.execCommand("redo");
			}
		}, {type: "separator"}, {
			label: "Cut",
			icon: "content-cut",
			enabled: params.editFlags.canCut,
			click(item, win, elem) {
				elem.focus();
				document.execCommand('cut', false)
			}
		}, {
			label: "Copy",
			icon: "content-copy",
			enabled: params.editFlags.canCopy,
			click(item, win, elem) {
				elem.focus();
				document.execCommand('copy', false)
			}
		}, {
			label: "Paste",
			icon: "content-paste",
			enabled: params.editFlags.canPaste,
			click(item, win, elem) {
				elem.focus();
				document.execCommand('paste', false)
			}
		}, {
			type: "separator"
		}, {
			label: "Select All",
			icon: "select-all",
			enabled: params.editFlags.canSelectAll,
			click(item, win, elem) {
				elem.focus();
				document.execCommand('selectAll', false)
			}
		}]);
		previousMenu.popup();
		previousMenu.menu.addEventListener("click", e => e.stopPropagation())
	}

});