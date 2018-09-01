const fs = require('fs-extra');
const path = require('path');
let sectionHistory = [];
root.footer = document.createElement("footer");
root.footer.className = "shadow-lg d-flex border-top flex-shrink-0";
root.footer.backButton = document.createElement("button");
root.footer.backButton.className = "m-2 lh-24 p-1 mdi mdi-24px mdi-arrow-left btn btn-white rounded-circle d-flex";
root.footer.backButton.onclick = e => {
	sectionHistory.pop()
	openSection(sectionHistory[sectionHistory.length - 1], false);
};
root.footer.header = document.createElement("div");
root.footer.header.className = "h5 m-0 flex-grow-1 d-flex align-items-center";
root.footer.header.innerText = "Settings";
root.footer.append(root.footer.backButton, root.footer.header);
root.body = document.createElement("main");
root.body.className = "flex-grow-1 d-flex flex-column py-2 flex-nowrap scrollable-y";
root.append(root.body, root.footer);

function newSmallListItem(options) {
	let elem = document.createElement("button");
	elem.className = "list-group-item rounded-0 list-group-item-action border-left-0 border-right-0 d-flex align-items-center px-3 py-2";
	elem.onclick = options.onclick;
	elem.icon = document.createElement('icon');
	elem.header = document.createElement('div');
	elem.icon.className = "rounded p-1 mdi mdi-18px text-white mdi-" + options.icon + " mr-2 lh-18 d-flex";
	elem.icon.style.backgroundColor = options.color;
	elem.header.innerText = options.title
	elem.append(elem.icon, elem.header);
	return elem;
}
async function openSection(id, log = true) {
	console.log(id)
	if(id === undefined) {
		Elements.MenuBar.quickItems.classList.remove("d-none");
		root.remove();
	}
	function setTitle(title) {
		root.footer.header.innerText = title;
	}

	let sectionPath = path.join(osRoot, "apps", "settings", "sections", id + ".js");
	root.body.innerHTML = "";
	new Function('root', 'setTitle', 'openSection', 'newSmallListItem', await fs.readFile(sectionPath))(root.body, setTitle, openSection, newSmallListItem);
	if(log) sectionHistory.push(id);
		console.log(sectionHistory)
}

openSection("menu");
