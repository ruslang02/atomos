/* Node-JS Google Play Music API
 *
 * Written by Jamon Terrell <git@jamonterrell.com>
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Based partially on the work of the Google Play Music resolver for Tomahawk (https://github.com/tomahawk-player/tomahawk-resolvers/blob/master/gmusic/content/contents/code/gmusic.js)
 * and the gmusicapi project by Simon Weber (https://github.com/simon-weber/Unofficial-Google-Music-API/blob/develop/gmusicapi/protocol/mobileclient.py).
 */
var https = require('https');
var querystring = require('querystring');
var url = require('url');
var CryptoJS = require("crypto-js");
var uuid = require('node-uuid');
var util = require('util');
var crypto = require('crypto');
var encryptLogin = require('./lib/encryptLogin');

var pmUtil = {};
pmUtil.parseKeyValues = function(body) {
    var obj = {};
    body.split("\n").forEach(function(line) {
        var pos = line.indexOf("=");
        if(pos > 0) obj[line.substr(0, pos)] = line.substr(pos+1);
    });
    return obj;
};
pmUtil.Base64 = {
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    stringify: CryptoJS.enc.Base64.stringify,
    parse: CryptoJS.enc.Base64.parse
};
pmUtil.salt = function(len) {
    return Array.apply(0, Array(len)).map(function() {
        return (function(charset){
            return charset.charAt(Math.floor(Math.random() * charset.length));
        }('abcdefghijklmnopqrstuvwxyz0123456789'));
    }).join('');
};


var PlayMusic = function() {};

PlayMusic.prototype._baseURL = 'https://www.googleapis.com/sj/v1.11/';
PlayMusic.prototype._webURL = 'https://play.google.com/music/';
PlayMusic.prototype._mobileURL = 'https://android.clients.google.com/music/';
PlayMusic.prototype._accountURL = 'https://www.google.com/accounts/';
PlayMusic.prototype._authURL = 'https://android.clients.google.com/auth';

PlayMusic.prototype.request = function(options, callback) {
    var opt = url.parse(options.url);
    opt.headers = {};
    opt.method = options.method || "GET";
    if(typeof options.options === "object") {
        Object.keys(options.options).forEach(function(k) {
            opt[k] = options.options[k];
        });
    }
    if(typeof this._token !== "undefined") opt.headers.Authorization = "GoogleLogin auth=" + this._token;
    opt.headers["Content-type"] = options.contentType || "application/x-www-form-urlencoded";
    var req = https.request(opt, function(res) {
        res.setEncoding('utf8');
        var body = "";
        res.on('data', function(chunk) {
            body += chunk;
        });
        res.on('end', function() {
            var err;
            if(res.statusCode >= 400) {
                err = new Error(res.statusCode + " error from server");
                err.statusCode = res.statusCode;
                err.response = res;
            }

            var contentType = (typeof res.headers["content-type"] !== "string") ? null : res.headers["content-type"].split(";", 1)[0].toLowerCase();
            var response = body;
            try {
                if(contentType === "application/json") {
                    response = JSON.parse(response);
                }
            } catch (e) {
                if(typeof callback === "function") callback(new Error("unable to parse json response: " + e), null, res);
            }
            if(typeof callback === "function") callback(err, response, res);
        });
        res.on('error', function(error) {
            var err = new Error("Error making https request");
            err.error = error;
            err.response = res;
            if(typeof callback === "function") callback(err, body, res);
        });
    });
    req.on('error',(err)=>{
        if(typeof callback === "function") callback(err);
    });
    if(typeof options.data !== "undefined") req.write(options.data);
    req.end();
};


PlayMusic.prototype.init = function(config, callback) {
    var that = this;

    this._email = config.email;
    this._password = config.password;
    this._masterToken = config.masterToken;

    // load signing key
    var s1 = CryptoJS.enc.Base64.parse('VzeC4H4h+T2f0VI180nVX8x+Mb5HiTtGnKgH52Otj8ZCGDz9jRWyHb6QXK0JskSiOgzQfwTY5xgLLSdUSreaLVMsVVWfxfa8Rw==');
    var s2 = CryptoJS.enc.Base64.parse('ZAPnhUkYwQ6y5DdQxWThbvhJHN8msQ1rqJw0ggKdufQjelrKuiGGJI30aswkgCWTDyHkTGK9ynlqTkJ5L4CiGGUabGeo8M6JTQ==');

    for(var idx = 0; idx < s1.words.length; idx++) {
        s1.words[idx] ^= s2.words[idx];
    }

    this._key = s1;

    this._oauth(function(err, data) {
        if(err) return callback(new Error("Unable to create oauth token" + err));
        that._token = data.Auth;
        that.getSettings(function(err, response) {
            if(err) return callback(new Error("Login Failed, unable to load settings:" + err));

            that._settings = response.settings;
            that._allAccess = response.settings.entitlementInfo.isSubscription;
            var devices = response.settings.uploadDevice.filter(function(d) {
                return d.deviceType === 2 || d.deviceType === 3;
            });

            if(devices.length > 0) {
                var id = devices[0].id;
                if (devices[0].deviceType === 2) {
                    id = id.slice(2);
                }
                that._deviceId = id;
                if(typeof callback === "function") callback();
            } else {
                if(typeof callback === "function") callback();
            }
        });

    });
};

PlayMusic.prototype._oauth =  function (callback) {
    var that = this;
    var data = {
        accountType: "HOSTED_OR_GOOGLE",
        has_permission: 1,
        service: "sj",
        source: "android",
        androidId: that._androidId,
        app: "com.google.android.music",
        device_country: "us",
        operatorCountry: "us",
        //client_sig: "61ed377e85d386a8dfee6b864bd85b0bfaa5af81",
        lang: "en",
        sdk_version: "17"
    };
    if(this._masterToken) {
        data.Token = this._masterToken;
    } else if(this._password) {
        data.EncryptedPasswd = encryptLogin(this._email, this._password),
        data.Email = this._email;

    } else {
        callback(new Error("You must provide either an email address and password, or a token"));
    }

    this.request({
        method: "POST",
        url: that._authURL,
        contentType: "application/x-www-form-urlencoded",
        data: querystring.stringify(data),
        headers: {
            //Authorization: "GoogleLogin auth=" + that._master_token
        }
    },  function(err, data) {
        callback(err, err ? null : pmUtil.parseKeyValues(data));
    });
};

PlayMusic.prototype.login =  function (opt, callback) {
	opt.email = opt.email.trim(); // Trim immediately
	
    var that = this;
    opt.androidId = opt.androidId || crypto.pseudoRandomBytes(8).toString("hex");
        
    var data = {
        accountType: "HOSTED_OR_GOOGLE",
        Email: opt.email,
        has_permission: "1",
        add_account: "1",
        EncryptedPasswd: encryptLogin(opt.email, opt.password),
        service: "ac2dm",
        source: "android",
        androidId: opt.androidId,
        device_country: "us",
        operatorCountry: "us",
        lang: "en",
        sdk_version: "17"
    };
    this.request({
        method: "POST",
        url: this._authURL,
        contentType: "application/x-www-form-urlencoded",
        data: querystring.stringify(data)
    },  function(err, data) {
        var response = pmUtil.parseKeyValues(data);
        callback(err, err ? null : {androidId: opt.androidId, masterToken: response.Token});
    });
};


/**
 * Returns settings / device ids authorized for account.
 *
 * @param callback function(err, settings) - success callback
 */
PlayMusic.prototype.getSettings = function(callback) {
    var that = this;

    this.request({
        method: "POST",
        url: this._webURL + "services/fetchsettings?" + querystring.stringify({u: 0}),
        contentType: "application/json",
        data: JSON.stringify({"sessionId": ""})
    }, function(err, body) {
        if(err) return callback(new Error("error loading settings: " + err), body);
        // loadsettings returns text/plain even though it's json, so we have to manually parse it.
        var response;
        try {
            response = JSON.parse(body);
        } catch (e) {
            callback(new Error("error parsing settings: " + e), body);
        }
        callback(null, response);
    });
};

/**
 * Returns list of all tracks
 *
 * @param callback function(err, trackList) - success callback
 */
PlayMusic.prototype.getLibrary = PlayMusic.prototype.getAllTracks = function(opts, callback) {
    var that = this;

    // If first parameter is a callback, shift it over to the second param
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    }
    // Set options defaults
    opts.limit = opts.limit || 1000;

    // Request body data
    var data = { "max-results": opts.limit };
    // Add 'start-token' if a continuation token was provided
    if (!!opts.nextPageToken) {
        data["start-token"] = opts.nextPageToken;
    }

    this.request({
        method: "POST",
        url: this._baseURL + "trackfeed",
        contentType: "application/json",
        data: JSON.stringify(data)
    }, function(err, body) {
        if(err) return callback(new Error("error getting library: " + err), body);
        callback(null, body);
    });
};

/**
 * Returns stream URL for a track.
 *
 * @param id string - track id, hyphenated is preferred, but "nid" will work for all access tracks (not uploaded ones)
 * @param callback function(err, streamUrl) - success callback
 */
PlayMusic.prototype.getStreamUrl = function (id, callback) {
    if(!this._deviceId) {
      callback(new Error("Unable to find a usable device on your account, access from a mobile device and try again"));
      return;
    }

    var that = this;
    var salt = pmUtil.salt(13);
    var sig = CryptoJS.HmacSHA1(id + salt, this._key).toString(pmUtil.Base64);
    var qp = {
        u: "0",
        net: "wifi",
        pt: "e",
        targetkbps: "8310",
        slt: salt,
        sig: sig
    };
    if(id.charAt(0) === "T") {
        qp.mjck = id;
    } else {
        qp.songid = id;
    }

    var qstring = querystring.stringify(qp);
    this.request({
        method: "GET",
        url: this._mobileURL + 'mplay?' + qstring,
        options: { headers: { "X-Device-ID": that._deviceId } }
    }, function(err, data, res) {
        if(res.statusCode === 302 && typeof res.headers.location === "string") {
            callback(null, res.headers.location);
        } else {
            callback(new Error("Unable to get stream url" + err), res.headers.location);
        }
    });
};

/**
 * Opens and returns a stream object
 *
 * @param id string - track id, hyphenated is preferred, but "nid" will work for all access tracks (not uploaded ones)
 * @param callback function(stream) - success callback
 */
PlayMusic.prototype.getStream = function(id, callback) {
    this.getStreamUrl(id, function(err, url) {
        if(err) return callback(err);
        https.get(url, function(stream) {
            callback(null, stream);
        })
    })
}

/**
 * Searches for All Access tracks.
 *
 * @param text string - search text
 * @param maxResults int - max number of results to return
 * @param callback function(err, searchResults) - success callback
 */
PlayMusic.prototype.search = function (text, maxResults, callback) {
    var that = this;
    var qp = {
        q: text,
        ct: '1,2,3,4,5,6,7,8,9',
        "max-results": maxResults
    };
    var qstring = querystring.stringify(qp);
    this.request({
        method: "GET",
        url: this._baseURL + 'query?' + qstring
    }, function(err, data) {
        callback(err ? new Error("error getting search results: " + err) : null, data);
    });
};

/**
 * Returns list of all playlists.
 *
 * @param callback function(err, playlists) - success callback
 */
PlayMusic.prototype.getPlayLists = function (callback) {
    var that = this;
    this.request({
        method: "POST",
        url: this._baseURL + 'playlistfeed'
    }, function(err, body) {
        callback(err ? new Error("error getting playlist results: " + err) : null, body);
    });
};

/**
* Creates a new playlist
*
* @param playlistName string - the playlist name
* @param callback function(err, mutationStatus) - success callback
*/
PlayMusic.prototype.addPlayList = function (playlistName, callback) {
    var that = this;
    var mutations = [
    {
        "create": {
            "creationTimestamp": -1,
            "deleted": false,
            "lastModifiedTimestamp": 0,
            "name": playlistName,
            "type": "USER_GENERATED"
        }
    }
    ];
    this.request({
        method: "POST",
        contentType: "application/json",
        url: this._baseURL + 'playlistbatch?' + querystring.stringify({alt: "json"}),
        data: JSON.stringify({"mutations": mutations})
    }, function(err, body) {
        callback(err ? new Error("error creating playlist " + err) : null, body);
    });
};

/**
* Deletes a playlist
*
* @param playlistId string - the playlist id
* @param callback function(err, mutationStatus) - success callback
*/
PlayMusic.prototype.deletePlayList = function (playlistId, callback) {
    var that = this;
    var mutations = [
    {
        "delete": playlistId
    }
    ];
    this.request({
        method: "POST",
        contentType: "application/json",
        url: this._baseURL + 'playlistbatch?' + querystring.stringify({alt: "json"}),
        data: JSON.stringify({"mutations": mutations})
    }, function(err, body) {
        callback(err ? new Error("error creating playlist " + err) : null, body);
    });
};

/**
* Updates a playlist's metadata
*
* @param playlistId string - the playlist id
* @param updates object - data to update the playlist with
* @param callback function(err, mutationStatus) - success callback
*/
PlayMusic.prototype.updatePlayListMeta = function (playlistId, updates, callback) {
    var that = this;
    var mutations = [
    {
        "update": {
            "id": playlistId,
            "name": updates.name || null,
            "description": updates.description || null,
            "shareState": updates.shareState || null
        }
    }
    ];
    this.request({
        method: "POST",
        contentType: "application/json",
        url: this._baseURL + 'playlistbatch?' + querystring.stringify({alt: "json"}),
        data: JSON.stringify({"mutations": mutations})
    }, function(err, body) {
        callback(err ? new Error("error updating playlist metadata " + err) : null, body);
    });
};

/**
* Adds a track to a playlist. By default the track is added to the end.
* Optionally pass entryBeforeClientId and addAfterClientId to specify a specific position.
*
* @param songId string - the song id. Or an array of song ids
* @param playlistId int - the playlist id
* @param callback function(err, mutationStatus) - success callback
* @param entryBeforeClientId - optional clientId of playlist entry where to add song after
* @param entryAfterClientId - optional clientId of playlist entry where to add song before
*/
PlayMusic.prototype.addTrackToPlayList = function (songIds, playlistId, callback, entryBeforeClientId, entryAfterClientId) {
    var that = this;
    var songIdsArray = Array.isArray(songIds) ? songIds : [songIds];
    var mutations = [];
    var prevId, currId, nextId;
    prevId = entryBeforeClientId || null;
    currId = uuid.v1();
    nextId = uuid.v1();
    songIdsArray.forEach(function(songId, index) {
        var mutation = {
            "clientId": currId,
            "creationTimestamp": "-1",
            "deleted": "false",
            "lastModifiedTimestamp": "0",
            "playlistId": playlistId,
            "source": (songId.indexOf("T") === 0 ? "2" : "1"),
            "trackId": songId
        }
        if (prevId) {
            mutation.precedingEntryId = prevId;
        }
        if (index < songIdsArray.length - 1) {
            mutation.followingEntryId = nextId;
        } else if (entryAfterClientId){
            mutation.followingEntryId = entryAfterClientId;
        }
        mutations.push(
            {
                "create": mutation
            }
        );
        prevId = currId;
        currId = nextId;
        nextId = uuid.v1();
    });
    this.request({
        method: "POST",
        contentType: "application/json",
        url: this._baseURL + 'plentriesbatch?' + querystring.stringify({alt: "json"}),
        data: JSON.stringify({"mutations": mutations})
    }, function(err, body) {
        callback(err ? new Error("error adding tracks to playlist: " + err) : null, body);
    });
};

/**
 * Move the specified entry inbetween two specified entries (identified by their clientIds)
 *
 * @param callback function(err, playlistEntries) - success callback
 */
PlayMusic.prototype.movePlayListEntry = function(entryToMove, entryBeforeClientId, entryAfterClientId, callback) {
    var that = this;
  
    entryToMove = JSON.parse(JSON.stringify(entryToMove)); // clone fo-real
  
    var keysToKeep = ['clientId', 'creationTimestamp', 'deleted', 'id', 'lastModifiedTimestamp', 'playlistId', 'source', 'trackId'];
  
    for(var entry in entryToMove) {
      if (keysToKeep.indexOf(entry) == -1)
        delete entryToMove[entry];
    }
  
    if (entryBeforeClientId){
        entryToMove['precedingEntryId'] = entryBeforeClientId;
    };
    if (entryAfterClientId){
        entryToMove['followingEntryId'] = entryAfterClientId;
    }
  
    this.request({
      method: "POST",
      contentType: "application/json",
      url: this._baseURL + 'plentriesbatch?' + querystring.stringify({alt: "json"}),
      data: JSON.stringify({"mutations" : [{ "update": entryToMove}]})
    }, function(err, body) {
      callback(err ? new Error("error getting moving playlist entry: " + err) : null, body);
    });
  };
  
/**
* Increments track's playcount
*
* @param songId int - the song id. See http://bit.ly/1L4U6oK for id requirements.
* @param callback function(err, mutationStatus) - success callback
*/
PlayMusic.prototype.incrementTrackPlaycount = function (songId, callback) {
    var that = this;
    var stats = [
        {
            "id": songId,
            "incremental_plays": "1",
            "last_play_time_millis": Date.now().toString(),
            "type": (songId.indexOf("T") === 0 ? "2" : "1"),
            "track_events": []
        }
    ];
    this.request({
        method: "POST",
        contentType: "application/json",
        url: this._baseURL + 'trackstats?' + querystring.stringify({alt: "json"}),
        data: JSON.stringify({"track_stats": stats})
    }, function(err, body) {
        callback(err ? new Error("error incrementing track playcount: " + err) : null, body);
    });
};

/* Change metadata of a track a library
* Currently only support changing rating
* You need to change a song object with a different rating value:
* 5 = thumb up, 1 = thumb down, 0 = no thumb
* @param song object - the track dictionnary. You can get from getAllAccessTrack or from getLibrary
* @param callback function(err, success) - success callback
*/
PlayMusic.prototype.changeTrackMetadata = function (song, callback) {

    var that = this;
    var mutations = [ { "update": song } ];

    this.request({
        method: "POST",
        contentType: "application/json",
        url: this._baseURL + 'trackbatch?' + querystring.stringify({alt: "json"}),
        data: JSON.stringify({"mutations": mutations})
    }, function(err, body) {
        callback(err ? new Error("error changing rating track: " + err) : null, body);
    });
}

/**
* Removes given entry ids from playlist entries
*
* @param entryId string - the entry id. Or an array of entry ids. You can get this from getPlayListEntries
* @param callback function(err, mutationStatus) - success callback
*/
PlayMusic.prototype.removePlayListEntry = function (entryIds, callback) {
    var that = this;
    var entryIdsArray = Array.isArray(entryIds) ? entryIds : [entryIds];
    var mutations = [];
    entryIdsArray.forEach(function(entryId) {
        mutations.push({ "delete": entryId });
    });

    this.request({
        method: "POST",
        contentType: "application/json",
        url: this._baseURL + 'plentriesbatch?' + querystring.stringify({alt: "json"}),
        data: JSON.stringify({"mutations": mutations})
    }, function(err, body) {
        callback(err ? new Error("error removing playlist entries: " + err) : null, body);
    });
};

/**
 * Returns tracks on all playlists.
 *
 * @param opts Object - parameters
 * @param callback function(err, playlistEntries) - success callback
 */
PlayMusic.prototype.getPlayListEntries = function (opts, callback) {
    var that = this;

    // If first parameter is a callback, shift it over to the second param
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    }
    // Set options defaults
    opts.limit = opts.limit || 1000;

    // Request body data
    var data = {"max-results": opts.limit};
    // Add 'start-token' if a continuation token was provided
    if (!!opts.nextPageToken) {
        data["start-token"] = opts.nextPageToken;
    }

    this.request({
        method: "POST",
        url: this._baseURL + 'plentryfeed',
        contentType: "application/json",
        data: JSON.stringify(data)
    }, function (err, body) {
        callback(err ? new Error("error getting playlist results: " + err) : null, body);
    });
};


/**
 * Returns tracks on shared playlist.
 *
 * @param opts Object - parameters
 * @param callback function(err, playlistEntries) - success callback
 */
PlayMusic.prototype.getSharedPlayListEntries = function (opts, callback) {
    var that = this;

    // If first parameter is a callback, shift it over to the second param
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    }
    // Set options defaults
    opts.limit = opts.limit || 1000;

    // Request body data
    var data = {"max-results": opts.limit};
    // Add 'start-token' if a continuation token was provided
    if (!!opts.nextPageToken) {
        data["start-token"] = opts.nextPageToken;
    }

    data['shareToken'] = opts.shareToken;

    this.request({
        method: "POST",
        url: this._baseURL + 'plentries/shared',
        contentType: "application/json",
        data: JSON.stringify({
            'entries': [data]
        })
    }, function (err, body) {
        callback(err ? new Error("error getting playlist results: " + err) : null, body);
    });
};

/**
 * Returns info about an All Access album.  Does not work for uploaded songs.
 *
 * @param albumId string All Access album "nid" -- WILL NOT ACCEPT album "id" (requires "T" id, not hyphenated id)
 * @param includeTracks boolean -- include track list
 * @param callback function(err, albumList) - success callback
 */
PlayMusic.prototype.getAlbum = function (albumId, includeTracks, callback) {
    var that = this;
    this.request({
        method: "GET",
        url: this._baseURL + "fetchalbum?" + querystring.stringify({nid: albumId, "include-tracks": includeTracks, alt: "json"})
    }, function(err, body) {
        callback(err ? new Error("error getting album tracks: " + err) : null, body);
    });
};

/**
 * Returns info about an All Access track.  Does not work for uploaded songs.
 *
 * @param trackId string All Access track "nid" -- WILL NOT ACCEPT track "id" (requires "T" id, not hyphenated id)
 * @param callback function(err, trackInfo) - success callback
 */
PlayMusic.prototype.getAllAccessTrack = function (trackId, callback) {
    var that = this;
    this.request({
        method: "GET",
        url: this._baseURL + "fetchtrack?" + querystring.stringify({nid: trackId, alt: "json"})
    }, function(err, body) {
        callback(err ? new Error("error getting all access track: " + err) : null, body);
    });
};

/**
 * Returns Artist Info, top tracks, albums, related artists
 *
 * @param artistId string - not sure which id this is
 * @param includeAlbums boolean - should album list be included in result
 * @param topTrackCount int - number of top tracks to return
 * @param relatedArtistCount int - number of related artists to return
 * @param callback function(err, artistInfo) - success callback
 */
PlayMusic.prototype.getArtist = function (artistId, includeAlbums, topTrackCount, relatedArtistCount, callback) {
    var that = this;
    this.request({
        method: "GET",
        url: this._baseURL + "fetchartist?" + querystring.stringify({
            nid: artistId,
            "include-albums": includeAlbums,
            "num-top-tracks": topTrackCount,
            "num-related-artists": relatedArtistCount,
            alt: "json"
        })
    }, function(err, body) {
        callback(err ? new Error("error getting artist info: " + err) : null, body);
    });
};

/**
 * Builds a seed object for use with createStation
 *
 * @param seedId string - a track, artist, album, or genre id
 * @param type string - one of ["track", "artist", "album", "genre"]
 * @return object - seed object for use with createStation
 */
PlayMusic.prototype._getSeed = function(seedId, type) {
    var seed;
    if(type === "track" && seedId.charAt(0) === "T") {
        seed = {trackId: seedId, seedType: 2};
    } else if(type === "track") {
        seed = {trackId: seedId, seedType: 1};
    } else if(type === "artist") {
        seed = {artistId: seedId, seedType: 3};
    } else if(type === "album") {
        seed = {albumId: seedId, seedType: 4};
    } else if(type === "genre") {
        seed = {genreId: seedId, seedType: 5};
    } else if(type === "station") {
        seed = {curatedStationId: seedId, seedType: 9};
    }
    return seed;
};

/**
 * Returns list of existing stations
 *
 * @param callback function(err, stationInfo) - success callback
 */
PlayMusic.prototype.getStations = function(callback) {
    var that = this;

    this.request({
        method: "POST",
        contentType: "application/json",
        url: this._baseURL + 'radio/station'
        //data: JSON.stringify(obj)
    }, function(err, body) {
        callback(err ? new Error("error listing stations: " + err) : null, body);
    });
};


/**
 * Creates a new station
 *
 * @param name string - name of new station
 * @param seedId string - a track, artist, album, or genre id
 * @param type string - one of ["track", "artist", "album", "genre"]
 * @param callback function(err, mutationStatus) - success callback
 */
PlayMusic.prototype.createStation = function(name, seedId, type, callback) {
    var that = this;
    var seed = this._getSeed(seedId, type);
    if(!seed) return callback(new Error("Invalid Seed type"));
    var mutations = [
        {
            "createOrGet": {
                "clientId": uuid.v1(),
                "deleted": false,
                "imageType": 1,
                "lastModifiedTimestamp": "-1", // + (new Date()).valueOf()*1000,
                "name": name,
                "recentTimeStamp": "" + (new Date()).valueOf()*1000,
                "seed": seed,
                "tracks": []
            },
            "includeFeed": false,
            "numEntries": 0,
            "params": { "contentFilter": 1 }
        }
    ];

    this.request({
        method: "POST",
        contentType: "application/json",
        url: this._baseURL + 'radio/editstation?' + querystring.stringify({alt: "json"}),
        data: JSON.stringify({"mutations": mutations})
    }, function(err, body) {
        callback(err ? new Error("error creating station: " + err) : null, body);
    });
};

/**
 * Gets a list of tracks for a given station id
 *
 * @param stationId string - id of station
 * @param tracks int - number of tracks to return
 * @param callback function(err, stationInfo) - success callback
 */
PlayMusic.prototype.getStationTracks = function(stationId, tracks, callback) {
    var that = this;
    var obj = {
        "contentFilter": 1,
        "stations": [{
            "radioId": stationId,
            "numEntries": tracks,
            "recentlyPlayed": []
        }]
    };

    this.request({
        method: "POST",
        contentType: "application/json",
        url: this._baseURL + 'radio/stationfeed?' + querystring.stringify({alt: "json", "include-tracks": "true"}),
        data: JSON.stringify(obj)
    }, function(err, body) {
        callback(err ? new Error("error getting station tracks: " + err) : null, body);
    });
};

PlayMusic.prototype.getFavorites = function(callback) {
    this.request({
        method: "POST",
        contentType: "application/json",
        url: this._webURL + 'services/getephemthumbsup'
    }, function(err, body) {
        if (err) {
            return callback(err);
        }
        try {
            body = JSON.parse(body);
        } catch (err) {
            return callback(err);
        };
        callback(null, body);
    });
};

// So we don't break things using "getFavotites"
PlayMusic.prototype.getFavotites = PlayMusic.prototype.getFavorites;

module.exports = exports = PlayMusic;
