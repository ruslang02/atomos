const {Button} = require("@api/Components");
const cp = require("child_process");
const Shell = require("@api/Shell");
let WiFi = new Button({
    tooltip: "Not connected",
    color: "primary",
    icon: "wifi-strength-outline",
    addClasses: "p-2 rounded-circle",
    iconSize: 24,
    visible: false
});
WiFi.oncontextmenu = e => {
    e.stopPropagation();
    Shell.openSettings("network-wlan");
};
WiFi.onclick = () => {
    cp.exec("nmcli radio wifi " + (WiFi.classList.contains("btn-primary") ? "off" : "on"), Elements.MenuBar.quickItems.items["@atomos/settings.radio"].updateNetwork);
};

module.exports = WiFi;