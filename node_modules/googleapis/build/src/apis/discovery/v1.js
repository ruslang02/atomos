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
 * APIs Discovery Service
 *
 * Provides information about other Google APIs, such as what APIs are
 * available, the resource, and method details for each API.
 *
 * @example
 * const google = require('googleapis');
 * const discovery = google.discovery('v1');
 *
 * @namespace discovery
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Discovery
 */
function Discovery(options) {
    var self = this;
    self._options = options || {};
    self.apis = {
        /**
         * discovery.apis.getRest
         * @desc Retrieve the description of a particular version of an api.
         * @alias discovery.apis.getRest
         * @memberOf! discovery(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.api The name of the API.
         * @param {string} params.version The version of the API.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getRest: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/discovery/v1/apis/{api}/{version}/rest')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['api', 'version'],
                pathParams: ['api', 'version'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        list: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/discovery/v1/apis')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Discovery;
//# sourceMappingURL=v1.js.map