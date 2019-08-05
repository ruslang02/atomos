const {Button} = require("@api/Components");
const cp = require("child_process");
const Registry = require("@api/Registry");
const Shell = require("@api/Shell");
let Sound = new Button({
    tooltip: "Volume",
    color: "primary",
    icon: "volume-high",
    addClasses: "p-2 rounded-circle",
    iconSize: 24,
});
Sound.onclick = () => {
    cp.execSync("amixer -q -D pulse sset Master toggle");
    Elements.MenuBar.soundSettings.updateControls();
};
Sound.oncontextmenu = e => {
    e.stopPropagation();
    Elements.MenuBar.soundSettings.classList.toggle("d-none");
    Elements.MenuBar.soundSettings.classList.toggle("d-flex");
};
Elements.MenuBar.soundSettings = document.createElement("section");
Elements.MenuBar.soundSettings.className = "px-3 toast d-none fade show py-2 mt-2 shadow card " + (Shell.ui.darkMode ? "bg-dark" : "bg-white");
let master = document.createElement('div');
master.className = "d-flex align-items-center";
master.icon = document.createElement("icon");
master.icon.onclick = () => {
    cp.execSync("amixer -q -D pulse sset Master toggle");
    Elements.MenuBar.soundSettings.updateControls();
};
master.icon.className = `btn p-1 mdi mdi-24px lh-24 d-flex rounded-circle mr-3 my-1 ${Shell.ui.darkMode ? "text-white btn-dark" : "btn-white text-dark"}`;
master.range = document.createElement("input");
master.range.max = 100;
master.range.min = 0;
master.range.step = 1;
master.range.className = "custom-range";
master.range.type = "range";
master.range.onchange = function () {
    cp.execSync("amixer -q -D pulse sset Master " + master.range.value + "%");
    Elements.MenuBar.soundSettings.updateControls(true);
};
Elements.MenuBar.soundSettings.updateControls = function (norange) {
    let sound = getCurrentVolume();
    if (!norange)
        master.range.value = sound.volume;
    master.icon.classList.remove("mdi-volume-high", "mdi-volume-off");
    master.icon.classList.add("mdi-volume-" + (sound.muted ? "off" : "high"));
    Sound.color = sound.muted ? "secondary" : "primary";
    Sound.outline = sound.muted;
    if (sound.muted) Elements.MenuBar.soundSettings.tray = new TrayItem("volume-off");
    else if (Elements.MenuBar.soundSettings.tray) {
        Elements.MenuBar.soundSettings.tray.remove();
        Elements.MenuBar.soundSettings.tray = undefined
    }
};
Elements.MenuBar.soundSettings.updateControls();
master.append(master.icon, master.range);

let notifVolume = document.createElement('div');
notifVolume.className = "d-flex align-items-center mt-2";
notifVolume.icon = document.createElement("icon");
notifVolume.icon.className = `btn p-1 mdi mdi-24px lh-24 d-flex mdi-bell-outline rounded-circle mr-3 my-1 disabled ` + (Shell.ui.darkMode ? "text-white btn-dark" : "btn-white text-dark");
notifVolume.range = document.createElement("input");
notifVolume.range.max = 1;
notifVolume.range.min = 0;
notifVolume.range.step = 0.01;
notifVolume.range.value = Registry.get("system.notificationsVolume") || 1;
notifVolume.range.className = "custom-range";
notifVolume.range.type = "range";
notifVolume.range.onchange = function () {
    notifVolume.icon.classList.remove("mdi-bell-outline", "mdi-bell-off-outline");
    notifVolume.icon.classList.add(notifVolume.range.value === 0 ? "mdi-bell-off-outline" : "mdi-bell-outline");
    Registry.set("system.notificationsVolume", parseFloat(notifVolume.range.value));
};
notifVolume.range.onchange(null);
notifVolume.append(notifVolume.icon, notifVolume.range);
Elements.MenuBar.soundSettings.append(master, notifVolume);
try {
    Elements.MenuBar.insertBefore(Elements.MenuBar.soundSettings, Elements.MenuBar.footerBar);
} catch (e) {
}

function getCurrentVolume() {
    try {
        let mono = cp.execSync("amixer -D pulse sget 'Master'").toString();
        let volume = mono.substring(mono.indexOf("[") + 1, mono.indexOf("]") - 1);
        let muted = mono.substring(mono.lastIndexOf("[") + 1, mono.lastIndexOf("]")) !== "on";
        return {
            volume: volume,
            muted: muted
        };
    } catch (e) {
        Sound.oncontextmenu = function () {
        };
        return {
            volume: 50,
            muted: false
        }
    }
}

module.exports = Sound;