/* Example usage script.
 *
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/
 */

var fs = require('fs');
var PlayMusic = require('../');
var util = require('util');

var pm = new PlayMusic();
var config = JSON.parse(fs.readFileSync("config.json"));

pm.login({email: config.email, password: config.password}, function(err, resp) {
    console.log(err, resp);
});

pm.init(config, function(err) {
    if(err) return console.log("error", err);
    // pm.getLibrary(function(err, library) {
    //     if(err) console.error(err);
    //     var song = library.data.items.pop();
    //     console.log(song);
    //     pm.getStreamUrl(song.id, function(err, streamUrl) {
    //         if(err) console.error(err);
    //         console.log(streamUrl);
    //     });
    // });

    pm.search("bastille lost fire", 5, function(err, data) {
        if(err) return console.error(err);

        var song = data.entries.sort(function(a, b) {
            return a.score < b.score;
        }).shift();
        console.log(util.inspect(song, {depth: 10}));
        pm.getStreamUrl(song.track.nid, function(err, streamUrl) {
            if(err) console.error(err);
            console.log(streamUrl);
        });
    });

    //
    // pm.getPlayLists(function(err, data) {
    //     console.log(data.data.items);
    // });
    //
    // pm.getPlayListEntries(function(err, data) {
    //     console.log(data.data.items);
    // });
    // pm.getAlbum("Bw2kk345y5ivx4m35tflhzsvg6a", true, function(err, data) {
    //    console.log(util.inspect(data, {color: true, depth: 10}));
    // });
    // pm.getStreamUrl("Thvfmp2be3c7kbp6ny4arxckz54", function(err, resp) {
    //     console.log(err, resp);
    // });
    //pm.getStations(function(err, data) {
    //    if(err) console.error(util.inspect(err, {color: true, depth: 10}));
    //    console.log(util.inspect(data, {color: true, depth: 10}));
    //});
    // pm.createStation("test123123123", "Tslarazlflb7nou3ljjtyxutbji", "track", function(err, data) {
        // if(err) console.error(util.inspect(err, {color: true, depth: 10}));
        // console.log(util.inspect(data, {color: true, depth: 10}));
        //        pm.getStationTracks("95d01d83-05b6-3053-a83e-7f7280f529bc", 10, function(err, data) {
        //            if(err) console.error(util.inspect(err, {color: true, depth: 10}));
        //            console.log(util.inspect(data, {color: true, depth: 10}));
        //        });
    // });
});
