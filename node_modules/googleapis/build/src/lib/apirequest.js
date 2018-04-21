"use strict";
// Copyright 2014-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
var google_auth_library_1 = require("google-auth-library");
var qs = require("qs");
var stream = require("stream");
var parseString = require("string-template");
var uuid = require("uuid");
function isReadableStream(obj) {
    return obj instanceof stream.Readable && typeof obj._read === 'function';
}
function createCallback(callback) {
    return typeof callback === 'function' ? callback : function (err) {
        if (err) {
            console.error(err);
        }
    };
}
function getMissingParams(params, required) {
    var missing = new Array();
    required.forEach(function (param) {
        // Is the required param in the params object?
        if (params[param] === undefined) {
            missing.push(param);
        }
    });
    // If there are any required params missing, return their names in array,
    // otherwise return null
    return missing.length > 0 ? missing : null;
}
/**
 * Create and send request to Google API
 * @param parameters Parameters used to form request
 * @param callback   Callback when request finished or error found
 */
function createAPIRequest(parameters, callback) {
    var params = parameters.params;
    var options = Object.assign({}, parameters.options);
    // If the params are not present, and callback was passed instead,
    // use params as the callback and create empty params.
    if (typeof params === 'function') {
        callback = params;
        params = {};
    }
    // Create a new params object so it can no longer be modified from outside
    // code Also support global and per-client params, but allow them to be
    // overriden per-request
    params = Object.assign({}, // New base object
    parameters.context.google._options.params, // Global params
    parameters.context._options.params, // Per-client params
    params // API call params
    );
    var media = params.media || {};
    var resource = params.resource;
    var authClient = params.auth || parameters.context._options.auth ||
        parameters.context.google._options.auth;
    var defaultMime = typeof media.body === 'string' ?
        'text/plain' :
        'application/octet-stream';
    delete params.media;
    delete params.resource;
    delete params.auth;
    // Grab headers from user provided options
    var headers = params.headers || {};
    delete params.headers;
    // Un-alias parameters that were modified due to conflicts with reserved names
    Object.keys(params).forEach(function (key) {
        if (key.slice(-1) === '_') {
            var newKey = key.slice(0, -1);
            params[newKey] = params[key];
            delete params[key];
        }
    });
    // Normalize callback
    callback = createCallback(callback);
    // Check for missing required parameters in the API request
    var missingParams = getMissingParams(params, parameters.requiredParams);
    if (missingParams) {
        // Some params are missing - stop further operations and inform the
        // developer which required params are not included in the request
        return callback(new Error('Missing required parameters: ' + missingParams.join(', ')));
    }
    // Parse urls
    if (options.url) {
        options.url = parseString(options.url, params);
    }
    if (parameters.mediaUrl) {
        parameters.mediaUrl = parseString(parameters.mediaUrl, params);
    }
    // When forming the querystring, override the serializer so that array
    // values are serialized like this:
    // myParams: ['one', 'two'] ---> 'myParams=one&myParams=two'
    // This serializer also encodes spaces in the querystring as `%20`,
    // whereas the default serializer in axios encodes to a `+`.
    options.paramsSerializer = function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' });
    };
    // delete path parameters from the params object so they do not end up in
    // query
    parameters.pathParams.forEach(function (param) {
        delete params[param];
    });
    // if authClient is actually a string, use it as an API KEY
    if (typeof authClient === 'string') {
        params.key = params.key || authClient;
        authClient = null;
    }
    if (parameters.mediaUrl && media.body) {
        options.url = parameters.mediaUrl;
        if (resource) {
            // Axios doesn't support multipart/related uploads, so it has to
            // be implemented here.
            params.uploadType = 'multipart';
            var multipart = [
                { 'Content-Type': 'application/json', body: JSON.stringify(resource) }, {
                    'Content-Type': media.mimeType || (resource && resource.mimeType) || defaultMime,
                    body: media.body // can be a readable stream or raw string!
                }
            ];
            var boundary = uuid.v4();
            var finale_1 = "--" + boundary + "--";
            var rStream_1 = new stream.PassThrough();
            var isStream = isReadableStream(multipart[1].body);
            headers['Content-Type'] = "multipart/related; boundary=" + boundary;
            for (var _i = 0, multipart_1 = multipart; _i < multipart_1.length; _i++) {
                var part = multipart_1[_i];
                var preamble = "--" + boundary + "\r\nContent-Type: " + part['Content-Type'] + "\r\n\r\n";
                rStream_1.push(preamble);
                if (typeof part.body === 'string') {
                    rStream_1.push(part.body);
                    rStream_1.push('\r\n');
                }
                else {
                    part.body.pipe(rStream_1, { end: false });
                    part.body.on('end', function () {
                        rStream_1.push('\r\n');
                        rStream_1.push(finale_1);
                        rStream_1.push(null);
                    });
                }
            }
            if (!isStream) {
                rStream_1.push(finale_1);
                rStream_1.push(null);
            }
            options.data = rStream_1;
        }
        else {
            params.uploadType = 'media';
            Object.assign(headers, { 'Content-Type': media.mimeType || defaultMime });
            options.data = media.body;
        }
    }
    else {
        options.data = resource || undefined;
    }
    options.headers = headers;
    options.params = params;
    // Combine the AxiosRequestConfig options passed with this specific
    // API call witht the global options configured at the API Context
    // level, or at the global level.
    var mergedOptions = Object.assign({}, parameters.context.google._options, parameters.context._options, options);
    delete mergedOptions.auth; // is overridden by our auth code
    // Perform the HTTP request.  NOTE: this function used to return a
    // mikeal/request object. Since the transition to Axios, the method is
    // now void.  This may be a source of confusion for users upgrading from
    // version 24.0 -> 25.0 or up.
    if (authClient && typeof authClient === 'object') {
        authClient.request(mergedOptions, callback);
    }
    else {
        (new google_auth_library_1.DefaultTransporter()).request(mergedOptions, callback);
    }
}
exports.createAPIRequest = createAPIRequest;
//# sourceMappingURL=apirequest.js.map