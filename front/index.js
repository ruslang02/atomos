Object.assign(window, require('bootstrap.native/dist/bootstrap-native-v4'));
const moduleAlias = require('module-alias');
const path = require("path");
const osRoot = path.join(__dirname, "..");
moduleAlias.addAlias('@api', osRoot + '/front/api');
moduleAlias.addAlias('@apps', osRoot + '/apps');
moduleAlias();
window.Elements = {};
let _winoverlay = document.createElement("overlay");
_winoverlay.className = "position-fixed w-100 h-100 d-none";
_winoverlay.style.cssText = "top:0;left:0;z-index:1000;transition: background .2s ease;";
document.body.append(_winoverlay);
const AsyncFunction = Object.getPrototypeOf(async function () {
}).constructor;
require("./desktop");