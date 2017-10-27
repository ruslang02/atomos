const fs = require('fs');
fs.readdir("/atomos/etc/apps", function (err, data) {
  if(err) console.log("readdir error.");
  else data.forEach(function (item) {
    fs.readFile("/atomos/etc/apps/" + item, "utf8", function(err, app) {
      if(err) console.log("readFile error.");
      else {
        app = $.parseJSON(app);
        console.log(app, item);
        if (!app.hidden)
          $("#applications").append('<a href="#" onclick="window.new(\'' + item.substring(0, item.lastIndexOf(".")) + '\')" class="list-item btn btn-light"><img src="' + app.icon + '"><name>' + app.shortName + '</name><br><description>' + app.description + '</description></a>')
      }
    })
  })
  $("body").on("click", "a.btn", function() {
    require('electron').remote.getCurrentWindow().hide();
  })
})
