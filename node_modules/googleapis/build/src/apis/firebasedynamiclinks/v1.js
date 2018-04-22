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
 * Firebase Dynamic Links API
 *
 * Programmatically creates and manages Firebase Dynamic Links.
 *
 * @example
 * const google = require('googleapis');
 * const firebasedynamiclinks = google.firebasedynamiclinks('v1');
 *
 * @namespace firebasedynamiclinks
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Firebasedynamiclinks
 */
function Firebasedynamiclinks(options) {
    var self = this;
    self._options = options || {};
    self.shortLinks = {
        /**
         * firebasedynamiclinks.shortLinks.create
         * @desc Creates a short Dynamic Link given either a valid long Dynamic Link
         * or details such as Dynamic Link domain, Android and iOS app information.
         * The created short Dynamic Link will not expire.  Repeated calls with the
         * same long Dynamic Link or Dynamic Link information will produce the same
         * short Dynamic Link.  The Dynamic Link domain in the request must be owned
         * by requester's Firebase project.
         * @alias firebasedynamiclinks.shortLinks.create
         * @memberOf! firebasedynamiclinks(v1)
         *
         * @param {object} params Parameters for request
         * @param {firebasedynamiclinks(v1).CreateShortDynamicLinkRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl ||
                'https://firebasedynamiclinks-ipv6.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/shortLinks').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.v1 = {
        /**
         * firebasedynamiclinks.getLinkStats
         * @desc Fetches analytics stats of a short Dynamic Link for a given
         * duration. Metrics include number of clicks, redirects, installs, app
         * first opens, and app reopens.
         * @alias firebasedynamiclinks.getLinkStats
         * @memberOf! firebasedynamiclinks(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.durationDays The span of time requested in days.
         * @param {string} params.dynamicLink Dynamic Link URL. e.g. https://abcd.app.goo.gl/wxyz
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getLinkStats: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl ||
                'https://firebasedynamiclinks-ipv6.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{dynamicLink}/linkStats')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['dynamicLink'],
                pathParams: ['dynamicLink'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        installAttribution: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl ||
                'https://firebasedynamiclinks-ipv6.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/installAttribution')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
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
module.exports = Firebasedynamiclinks;
//# sourceMappingURL=v1.js.map