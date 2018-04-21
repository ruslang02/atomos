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
 * Accelerated Mobile Pages (AMP) URL API
 *
 * Retrieves the list of AMP URLs (and equivalent AMP Cache URLs) for a given
 * list of public URL(s).
 *
 * @example
 * const google = require('googleapis');
 * const acceleratedmobilepageurl = google.acceleratedmobilepageurl('v1');
 *
 * @namespace acceleratedmobilepageurl
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Acceleratedmobilepageurl
 */
function Acceleratedmobilepageurl(options) {
    var self = this;
    self._options = options || {};
    self.ampUrls = {
        /**
         * acceleratedmobilepageurl.ampUrls.batchGet
         * @desc Returns AMP URL(s) and equivalent [AMP Cache
         * URL(s)](/amp/cache/overview#amp-cache-url-format).
         * @alias acceleratedmobilepageurl.ampUrls.batchGet
         * @memberOf! acceleratedmobilepageurl(v1)
         *
         * @param {object} params Parameters for request
         * @param {acceleratedmobilepageurl(v1).BatchGetAmpUrlsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchGet: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://acceleratedmobilepageurl.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/ampUrls:batchGet')
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
module.exports = Acceleratedmobilepageurl;
//# sourceMappingURL=v1.js.map