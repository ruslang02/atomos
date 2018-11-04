//const fs = require("fs");
const path = require("path");
setTitle("Sound");
let main = document.createElement("main");
const wc = require("electron").remote.getCurrentWebContents();
root.append(main);

let list = document.createElement("section");
list.className = "list-group flex-shrink-0 rounded-0";
list.muteSounds = newSmallListItem({
	label: "Mute all sounds",
	type: "checkbox",
	checked: wc.isAudioMuted(),
	click(checked) {
		wc.setAudioMuted(checked);
	}
});
list.append(list.muteSounds);
main.append(list);
