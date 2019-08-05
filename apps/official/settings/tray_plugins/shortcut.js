const {Button} = require("@api/Components");
const Shell = require("@api/Shell");
let Settings = new Button({
    tooltip: "Settings",
    color: "info",
    icon: "settings",
    addClasses: "p-2 rounded-circle",
    iconSize: 24,
});
Settings.onclick = () => Shell.openSettings();
module.exports = Settings;