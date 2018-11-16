const {
  remote
} = require("electron");
const {
  getGlobal,
  app
} = remote;
getGlobal("shutdown").confirmed = true;
app.quit();
require("child-process").exec("systemctl reboot");
