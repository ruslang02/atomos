window.jQuery = window.$ = require("jquery");
require("atomos-framework");


setInterval(function() {
  $("[name=clock]").text(new Date().toLocaleTimeString({}, {hour: '2-digit', minute: '2-digit'}))
}, 1000);
const {
  remote,
  ipcRenderer
} = require("electron")
const {
  BrowserWindow,
  Menu
} = remote;
BrowserWindow.fromId(4).on('show', function() {
  $("tray [name=network]").addClass('active')
}).on('hide', function() {
  $("tray [name=network]").removeClass('active')
})
BrowserWindow.fromId(3).on('show', function() {
  $("tray [name=clock]").addClass('active')
}).on('hide', function() {
  $("tray [name=clock]").removeClass('active')
})
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
    ipcRenderer.send("close-any-menu")
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
    ipcRenderer.send("close-any-menu")
  })
  win.on('focus', function() {
    $task.addClass("active");
    ipcRenderer.send("close-any-menu")
  })
  win.on('show', function() {
    $task.css("opacity", "1");
  })
  win.on('hide', function() {
    $task.css("opacity", "0.8");
  })
})
