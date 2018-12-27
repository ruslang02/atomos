const fs = require("fs");
const path = require("path");
const registry = new Registry("system");
if(!registry.get().autostart)
	registry.set(Object.assign({
		autostart: []
	}, registry.get()));
setTitle("Auto-start management");
let description = document.createElement("p");
description.innerText = `Apps and scripts in this menu will start every time you boot AtomOS. Be careful when allowing scripts to run after startup, as they can reduce your performance greatly.`;
description.className = "smaller px-3 pt-2 text-muted"
root.append(description);
let newButton = document.createElement("button");
newButton.className = "m-2 lh-24 p-1 mdi mdi-24px mdi-plus btn btn-white rounded-circle d-flex";
newButton.onclick = e => {
	let message = document.createElement("div");
	message.header = document.createElement("input");
	message.script = document.createElement("input");
	message.header.placeholder = "Name";
	message.script.placeholder = "Script source"; // input file
	message.header.className = "form-control my-2";
	message.script.className = "form-control";
	message.append(message.header, message.script);
	shell.showMessageBox({
		title: "Create new auto-start item",
		icon: "plus",
		message: message,
		cancelId: 0,
		buttons: ["Cancel", "Create"],
		defaultId: 1,
			iconBG: "var(--success)"
	}).then(button => {
		console.log(button)
		if(button === "Create") {
			let oldReg = registry.get();
			const fields = document.querySelectorAll("message-box input");
			console.log(fields)
			if(!fs.existsSync(fields[1].value)) shell.showMessageBox({
				type: "error",
				message: "Script does not exist."
			}).then(e => newButton.click()); else {
				oldReg.autostart.push({
					name: fields[0].value,
					src: fields[1].value
				});
				registry.set(oldReg);
				update();
			}
		}
	})
};
setActionButton(newButton);
let asList = document.createElement("section");
asList.className = "list-group scrollable-x-0";
function update() {
	asList.innerHTML = "";
	let astart = registry.get().autostart;
    if (!astart.length) asList.innerHTML = "<div class='text-center text-muted py-2 border-top border-secondary'>No items to show.</div>";
	for(const i of astart.keys()) {
		let item = astart[i];
        let elem = newSmallListItem({
            label: item.name
        });
		let deleteButton = document.createElement("button");
        deleteButton.className = "text-danger bg-transparent border-0 p-0 mdi btn mdi-delete-outline mdi-18px lh-18 mr-3 fade flex-shrink-0";
        deleteButton.style.position = "absolute";
        deleteButton.style.right = 0;
		deleteButton.onclick = e => {
			let oldReg = registry.get();
			oldReg.autostart.splice(i, 1);
			registry.set(oldReg);
			update();
		};
        elem.append(deleteButton);
		elem.onmouseenter = e => deleteButton.classList.add("show");
		elem.onmouseleave = e => deleteButton.classList.remove("show");
		asList.append(elem);
	}
}
root.append(asList)
update();
