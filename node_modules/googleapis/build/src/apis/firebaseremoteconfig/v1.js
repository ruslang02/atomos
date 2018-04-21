"use strict";
/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var apirequest_1 = require("../../lib/apirequest");
/**
 * Firebase Remote Config API
 *
 * Firebase Remote Config API allows the 3P clients to manage Remote Config
 * conditions and parameters for Firebase applications.
 *
 * @example
 * const google = require('googleapis');
 * const firebaseremoteconfig = google.firebaseremoteconfig('v1');
 *
 * @namespace firebaseremoteconfig
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Firebaseremoteconfig
 */
function Firebaseremoteconfig(options) {
    var self = this;
    self._options = options || {};
    self.projects = {
        /**
         * firebaseremoteconfig.projects.getRemoteConfig
         * @desc Get the latest version Remote Configuration for a project. Returns
         * the RemoteConfig as the payload, and also the eTag as a response header.
         * @alias firebaseremoteconfig.projects.getRemoteConfig
         * @memberOf! firebaseremoteconfig(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The GMP project identifier. Required. See note at the beginning of this file regarding project ids.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getRemoteConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://firebaseremoteconfig.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{project}/remoteConfig')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        updateRemoteConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://firebaseremoteconfig.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{project}/remoteConfig')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Firebaseremoteconfig;
//# sourceMappingURL=v1.js.map