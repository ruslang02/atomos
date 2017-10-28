window.jQuery = window.$ = require("jquery");
require("atomos-framework");


setInterval(function() {
  $("[data-value=clock]").text(new Date().toTimeString().split(' ')[0].substring(0, 5))
  var month = new Date().getMonth();
  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }
  $("[data-value=date]").text(new Date().getDate() + " " + month + " " + new Date().getFullYear());
}, 100);

const {
  remote,
  ipcRenderer
} = require("electron")
const {
  BrowserWindow
} = remote;
remote.app.on('browser-window-created', function(event, win) {
  var dangerFlash;
  var warningFlash;
  var hangWin;
  var alreadyHung = false;
  var alreadyOpened = false;
  var $task;
  win.webContents.on('did-stop-loading', function() {
    if(alreadyOpened) exit;
    alreadyOpened = true;
    var icon = ipcRenderer.sendSync("icon-get", win.id);
    $("tasks").append("<button id='" + win.id + "' class='btn btn-light btn-sm'><img src='" + icon + "'></button>");
    $task = $("tasks #" + win.id);
    $task.on('mousedown', function(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      win.show();
    })
  })
  win.on('close', function(e) {
    $task.addClass("btn-light").removeClass("btn-danger").fadeOut("200", function() {$task.remove()});
    clearInterval(dangerFlash);
  });
  win.on('responsive', function() {
    $task.addClass("btn-light").removeClass("btn-danger");
    clearInterval(dangerFlash);
  })
  win.on('unresponsive', function() {
    if(!alreadyHung) {
      hangWin = window.new('aos-process-hang', {
        wid: win.id
      }, {modal: true, parent: win});
      dangerFlash = setInterval(function() {
        $task.toggleClass("btn-light").toggleClass("btn-danger");
      },500)
    } else alreadyHung = true;
  })
  win.on('page-title-updated', function(e, title) {
    $task.attr("title", title);
  })
  win.on('blur', function() {
    $task.removeClass("active");
  })
  win.on('focus', function() {
    $task.addClass("active");
  })
  win.on('show', function() {
    $task.css("opacity", "1");
  })
  win.on('hide', function() {
    $task.css("opacity", "0.8");
  })
})
