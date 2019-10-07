window.ipcRenderer = require("electron").ipcRenderer;
window.oldNotification = window.Notification;
let Notification = function () {
    ipcRenderer.sendToHost("notification", arguments);
};
Notification.requestPermission = window.oldNotification.requestPermission;
Notification.permission = window.oldNotification.permission;
window.Notification = Notification;
