const {
  remote,
  ipcRenderer
} = require('electron');
const fs = require('fs');
window.arguments = ipcRenderer.sendSync("getArguments", remote.getCurrentWindow().id);
document.addEventListener("DOMContentLoaded", () => {
  window.$ = window.jQuery = require("jquery")
  console.log('yes');
  $("body").prepend('<link rel="stylesheet" href="/atomos/lib/atomos.css" />');
  window.Popper = require("popper.js");
  require("bootstrap");
  $(window).keyup(function(e) {
    if (e.shiftKey && e.ctrlKey && e.keyCode == 73) require("electron").remote.getCurrentWindow().toggleDevTools();
    if (e.ctrlKey && e.keyCode == 82) location.reload();
  })

});
require('atomos');
