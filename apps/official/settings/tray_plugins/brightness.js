const {Button} = require("@api/Components");
let Screen = new Button({
    tooltip: "Brightness",
    color: "primary",
    icon: "brightness-6",
    addClasses: "p-2 rounded-circle",
    iconSize: 24,
    visible: false
});
Screen.oncontextmenu = e => {
    e.stopPropagation();
    Elements.MenuBar.brightnessSettings.classList.toggle("d-none");
    Elements.MenuBar.brightnessSettings.classList.toggle("d-flex");
};
try {
    Elements.MenuBar.brightnessSettings = document.createElement("section");
    Elements.MenuBar.brightnessSettings.className = "px-3 very-rounded d-none py-2 mt-2 shadow card " + (Shell.ui.darkMode ? "bg-dark" : "");
    let master = document.createElement('div');
    master.className = "d-flex align-items-center";
    master.icon = document.createElement("icon");
    master.icon.className = `btn p-1 mdi mdi-24px mdi-brightness-6 lh-24 d-flex rounded-circle mr-3 my-1 ` + (Shell.ui.darkMode ? "text-white btn-dark" : "btn-white text-dark");
    master.range = document.createElement("input");
    master.range.max = parseInt((fs.readFileSync("/sys/class/backlight/intel_backlight/brightness")).toString());
    master.range.min = 0;
    master.range.step = 1;
    master.range.className = "custom-range";
    master.range.type = "range";
    master.range.onchange = function () {
        fs.writeFile("/sys/class/backlight/intel_backlight/brightness", master.range.value).then(() => {
            Elements.MenuBar.brightnessSettings.updateControls(true);
        });
    };
    Elements.MenuBar.brightnessSettings.updateControls = async function (norange) {
        let brightness = (await fs.readFile("/sys/class/backlight/intel_backlight/brightness")).toString();
        if (!norange)
            master.range.value = parseInt(brightness);
    };
    Elements.MenuBar.brightnessSettings.updateControls();
    master.append(master.icon, master.range);
    Elements.MenuBar.brightnessSettings.append(master);
    Elements.MenuBar.insertBefore(Elements.MenuBar.brightnessSettings, Elements.MenuBar.footerBar);
} catch (e) {
}
module.exports = Screen;