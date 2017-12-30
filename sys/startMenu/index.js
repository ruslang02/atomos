const fs = require('fs-extra');
const proc = require('child_process');
$("body").on("click", "a.btn", function() {
  require('electron').remote.getCurrentWindow().hide();
})
listApps();
function listApps(path = "/atomos/apps") {
  fs.readdir(path, function(err, dir) {
    dir.forEach(function(item) {
      if (item.toLowerCase() == "app.json") {
        fs.readJson(path + "/app.json", function(err, app) {
          if (!app.hidden)
            $("#applications").append('<a href="#" onclick="window.new(\'' +
              path.substring(path.lastIndexOf("/") + 1) + '\')" class="list-item btn btn-light"><img src="' +
              app.icon + '"><name>' + app.shortName + '</name><br><description>' + app.description + '</description></a>');
        })
        let list = $("#applications .list-item").get();
        list.sort(function(a, b) {
          return $(a).find("name").text().toUpperCase().localeCompare($(b).find("name").text().toUpperCase());
        })
        $.each(list, function(idx, itm) {
          $("#applications").append(itm);
        });
      } else if (fs.statSync(path + "/" + item).isDirectory()) {
        listApps(path + "/" + item);
      }
    })
  })

}
module.exports.shutdown = function() {
  proc.exec("poweroff")
}
module.exports.reboot = function() {
  proc.exec("reboot")
}
module.exports.stopx = function() {
  proc.exec("killall xinit electron node");
}
module.exports.suspend = function() {
  proc.exec("systemctl suspend");
}
module.exports.lock = function() {
  proc.exec("dm-tool lock");
}
