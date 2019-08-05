const {Button} = require("@api/Components");
const cp = require("child_process");
const Shell = require("@api/Shell");
const Registry = require("@api/Registry");
let wifi;
let WiFiButton = Elements.MenuBar.quickItems.items["@atomos/settings.wifi"];
let Radio = new Button({
    tooltip: "Airplane mode",
    color: "secondary",
    outline: true,
    icon: "airplane-off",
    addClasses: "p-2 rounded-circle",
    iconSize: 24,
});
Radio.onclick = () => {
    cp.exec("nmcli networking " + (Radio.classList.contains("btn-primary") ? "on" : "off"), Radio.updateNetwork);
};
Radio.oncontextmenu = e => {
    Shell.openSettings("network");
};

Radio.updateNetwork = function () {
    if (WiFiButton) {
        if (!wifi) {
            wifi = require("node-wifi");
            wifi.init({
                iface: Registry.get("system.networking.wlanInterface") || null
            });
        }
        cp.exec("nmcli device wifi", (_e, output) => {
            if (!output.trim().split("\n")[1]) {
                WiFiButton.visible = false;
                if (WiFiButton.tray) WiFiButton.tray.remove();
                WiFiButton.tray = undefined;
            } else {
                WiFiButton.visible = true;
                if (!WiFiButton.tray) WiFiButton.tray = new TrayItem("wifi-strength-outline");
                cp.exec("nmcli radio wifi", function (_e, output) {
                    output = output.toString().trim();
                    WiFiButton.color = output === "enabled" ? "primary" : "secondary";
                    WiFiButton.outline = output !== "enabled";
                });
                wifi.getCurrentConnections().then(network => {
                    WiFiButton.tray.elem.classList.remove("mdi-wifi-strength-outline", "mdi-wifi-strength-1", "mdi-wifi-strength-2", "mdi-wifi-strength-3", "mdi-wifi-strength-4");
                    if (network.length) {
                        network = network[0];
                        WiFiButton.tray.elem.classList.add("mdi-wifi-strength-" + Math.ceil(network.quality / 25));
                        WiFiButton.icon = "wifi-strength-" + Math.ceil(network.quality / 25);
                        WiFiButton.tooltip = network.ssid;
                    } else {
                        WiFiButton.icon = "wifi-strength-outline";
                        WiFiButton.tooltip = "Not connected";
                        WiFiButton.tray.elem.classList.add("mdi-wifi-strength-outline");
                    }
                });
            }
        });
    }
    cp.exec("nmcli networking", (_e, output) => {
        let enabled = output.trim() === "enabled";
        Radio.outline = enabled;
        Radio.color = enabled ? "secondary" : "primary";
        Radio.icon = enabled ? "airplane-off" : "airplane";
        if (!enabled) {
            if (!Radio.tray) Radio.tray = new TrayItem("airplane");
        } else if (Radio.tray) {
            Radio.tray.remove();
            Radio.tray = undefined;
        }
    })

};

setInterval(Radio.updateNetwork, 1000);

module.exports = Radio;