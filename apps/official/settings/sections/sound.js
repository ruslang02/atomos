//const fs = require("fs");
//const path = require("path");
const Registry = require(`@api/Registry`);
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
list.notifVolume = newSmallListItem({
	label: "Notification volume"
});
list.notifVolume.classList.remove("btn", "btn-white", "btn-dark", "align-items-center");
list.notifVolume.classList.add("flex-column");
list.notifRange = document.createElement("input");
list.notifRange.type = "range";
list.notifRange.className = "custom-range mt-2";
list.notifRange.min = 0;
list.notifRange.max = 1;
list.notifRange.step = 0.1;
list.notifRange.value = Registry.get("system.notificationsVolume") || 1;
list.notifRange.onchange = () => {
	Registry.set("system.notificationsVolume", list.notifRange.value);
};
list.notifVolume.append(list.notifRange);
list.append(list.muteSounds, list.notifVolume);
main.append(list);
