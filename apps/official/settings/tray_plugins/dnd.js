const {Button} = require("@api/Components");
let DND = new Button({
    tooltip: "Do Not Disturb",
    color: "secondary",
    outline: true,
    icon: "do-not-disturb",
    addClasses: "p-2 rounded-circle",
    iconSize: 24,
});
DND.onclick = () => {
    window.NOTIFICATIONS_MUTED = !window.NOTIFICATIONS_MUTED;
    DND.color = window.NOTIFICATIONS_MUTED ? "danger" : "secondary";
    DND.outline = !window.NOTIFICATIONS_MUTED;
    Elements.BarItems["official/tray"].Container.menu.getMenuItemById("DND").checked = window.NOTIFICATIONS_MUTED;
    if (window.NOTIFICATIONS_MUTED) DND.tray = new TrayItem("minus-circle-outline"); else if (DND.tray) DND.tray.remove();
};

module.exports = DND;