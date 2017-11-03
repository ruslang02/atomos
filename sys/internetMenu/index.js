window.$ = window.jQuery = require("jquery");
window.Popper = require("popper.js");
require("bootstrap");
const network = require("network");
const ifconfig = require("wireless-tools/ifconfig");

var netTimer = setInterval(updateNetwork, 1000);
var $wifi = $("#wifi");
var $wbutton = $("[href='#wifi'].nav-link");
var $wnetworks = $("#wifi networks");
var $woverlay = $("wifi-overlay");
var $wconnect = $("wifi-connect");
var win = require('electron').remote.getCurrentWindow();
var scr = require('electron').screen.getPrimaryDisplay().workAreaSize;
var wifiAdapter;
var iwlist = require('wireless-tools/iwlist');
var iwconfig = require('wireless-tools/iwconfig');
var wpa_cli = require('wireless-tools/wpa_cli');
var wpa_supplicant = require('wireless-tools/wpa_supplicant');
var wifiConnected = false;
var toPing = false;
win.on('blur', function(){
  win.hide();
})
$("body").on("click", "#wifi a[href].list-item", function() {
  connectToWiFi($(this).find("name").text())
})

$("#ethernet .btn-success").click(function() {
  $(this).hide();
  $("#ethernet .btn-danger").show();
  toPing = true;
})
$("#ethernet .btn-danger").click(function() {
  toPing = false;
  $(this).hide();
  $("#ethernet .btn-success").show();
})

$wconnect.find(".btn-primary").click(function() {
  $(".panel").show();
  $(".nav").show();
  $wconnect.hide();
  win.setBounds({
    height: 350,
    width: 350,
    x: scr.width - 350 - 10,
    y: scr.height - 47 - 350 - 10
  })
  connectToWiFi($("wifi-name").text(), $wconnect.find("input").val());
})

$wconnect.find(".btn-secondary").click(function() {
  $(".panel, .nav").show();
  $wconnect.hide();
  win.setBounds({
    height: 350,
    width: 350,
    x: scr.width - 350 - 10,
    y: scr.height - 47 - 350 - 10
  })
})

function updateNetwork() {
  var wifiavailable = false;
  ifconfig.status(function(err, ifaces) {
    if (err) {
      console.log(err);
      clearInterval(netTimer);
      exit();
    }

    ifaces.forEach(function(iface) {
      if (iface.interface.startsWith("enp")) {
        if (iface.running) {
          $("#ethernet img")[0].src = "/atomos/icons/Ethernet Connected.png";
          $("#ethernet description").text("Cable plugged in")
        } else {
          $("#ethernet img")[0].src = "/atomos/icons/Ethernet Disconnected.png";
          $("#ethernet description").text("Cable not plugged in")
        }
      } else
      if (iface.interface.startsWith("wl") && iface.up) {
        updateWifiNetworks(iface.interface);
        wifiavailable = true
      }
    })
    if (!wifiavailable) {
      $wifi.find("description").text("No wireless adapter was found.");
      $wifi.find("img")[0].src = "/atomos/icons/Wi-Fi Off.png";
    }


  })
  if (toPing) {
    var pingTime = new Date().getTime();
    $.get("http://ya.ru", function() {
      $("[name=ping-time]").text((new Date().getTime() - pingTime) + "ms");
    })

  }
}

function updateWifiNetworks(iface) {
  iwconfig.status(function(err, status) {
    wifiAdapter = status[0];
  })
  iwlist.scan(iface, function(error, networks) {
    if (error) exit();
    $wnetworks.html("");
    $wbutton.show();
    if (networks.length === 0) {
      if (!wifiConnected) $wifi.find("description").text("No networks are available.");
      if (!wifiConnected) $wifi.find("img")[0].src = "/atomos/icons/Wi-Fi Error.png";
    } else {
      if (!wifiConnected) $wifi.find("description").text("Select a network down below");
      if (!wifiConnected) $wifi.find("img")[0].src = "/atomos/icons/Wi-Fi.png";
      networks.forEach(function(network) {
        var strength = network.quality;
        var strengthLabel = "Good";
        if (strength < 75) strengthLabel = "Fair";
        if (strength < 50) strengthLabel = "Low";
        if (strength < 20) strengthLabel = "No";
        $wnetworks.append("<a href='#connect' class='list-item' bssid='" + network.address + "'><img src='/atomos/icons/" + strengthLabel + " Connection.png'><name>" + network.ssid + "</name></a>");
      });
    }
  });
  wpa_cli.status(wifiAdapter.interface, function(err, data) {
    console.log(data);
  });

}

function disconnectWiFi() {

}

function connectToWiFi(ssid, password = null, driver = "wext") {
  $woverlay.show();
  var options = {
    interface: wifiAdapter.interface,
    ssid: ssid,
    passphrase: password,
    driver: driver
  }
  wpa_supplicant.enable(options, function(err) {
    $woverlay.hide();
    wpa_cli.status(wifiAdapter.interface, function(err, data) {
      console.log(data);
    });
    if (err) {
      console.error(err);
      $(".panel").hide();
      $(".nav").hide();
      win.setBounds({
        height: 147,
        width: 350,
        x: scr.width - 350 - 10,
        y: scr.height - 47 - 147 - 10
      })
      $wconnect.show();
      $wconnect.find("wifi-name").text(ssid);
      $wconnect.find("description").text("Please type a password below");
    } else {
      $(".panel").show();
      $(".nav").show();
      $wconnect.hide();
      $wifi.find("a:not([href]) name").text(ssid);
      $wifi.find("a:not([href]) description").text("Current status: connected");
      wifiConnected = true;
    }
  })
}
