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
 * Poly API
 *
 * The Poly API provides read-only access to assets hosted on &lt;a
 * href=&quot;https://poly.google.com&quot;&gt;poly.google.com&lt;/a&gt;.
 *
 * @example
 * const google = require('googleapis');
 * const poly = google.poly('v1');
 *
 * @namespace poly
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Poly
 */
function Poly(options) {
    var self = this;
    self._options = options || {};
    self.assets = {
        /**
         * poly.assets.get
         * @desc Returns detailed information about an asset given its name. PRIVATE
         * assets are returned only if  the currently authenticated user (via OAuth
         * token) is the author of the asset.
         * @alias poly.assets.get
         * @memberOf! poly(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Required. An asset's name in the form `assets/{ASSET_ID}`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://poly.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['name'],
                pathParams: ['name'],
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
            var rootUrl = options.rootUrl || 'https://poly.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/assets').replace(/([^:]\/)\/+/g, '$1'),
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
    self.users = {
        assets: {
            /**
             * poly.users.assets.list
             * @desc Lists assets authored by the given user. Only the value 'me',
             * representing the currently-authenticated user, is supported. May
             * include assets with an access level of PRIVATE or UNLISTED and assets
             * which are All Rights Reserved for the currently-authenticated user.
             * @alias poly.users.assets.list
             * @memberOf! poly(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.format Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.
             * @param {string} params.name A valid user id. Currently, only the special value 'me', representing the currently-authenticated user is supported. To use 'me', you must pass an OAuth token with the request.
             * @param {string=} params.orderBy Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets based on a combination of popularity and other features.
             * @param {integer=} params.pageSize The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.
             * @param {string=} params.pageToken Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.
             * @param {string=} params.visibility The visibility of the assets to be returned. Defaults to VISIBILITY_UNSPECIFIED which returns all assets.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            list: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://poly.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}/assets')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        likedassets: {
            /**
             * poly.users.likedassets.list
             * @desc Lists assets that the user has liked. Only the value 'me',
             * representing the currently-authenticated user, is supported. May
             * include assets with an access level of UNLISTED.
             * @alias poly.users.likedassets.list
             * @memberOf! poly(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.format Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.
             * @param {string} params.name A valid user id. Currently, only the special value 'me', representing the currently-authenticated user is supported. To use 'me', you must pass an OAuth token with the request.
             * @param {string=} params.orderBy Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`, 'LIKED_TIME'. Defaults to `LIKED_TIME`, which ranks assets based on how recently they were liked.
             * @param {integer=} params.pageSize The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.
             * @param {string=} params.pageToken Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            list: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://poly.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}/likedassets')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
}
module.exports = Poly;
//# sourceMappingURL=v1.js.map