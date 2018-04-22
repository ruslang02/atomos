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
 * Google Search Console URL Testing Tools API
 *
 * Provides tools for running validation tests against single URLs
 *
 * @example
 * const google = require('googleapis');
 * const searchconsole = google.searchconsole('v1');
 *
 * @namespace searchconsole
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Searchconsole
 */
function Searchconsole(options) {
    var self = this;
    self._options = options || {};
    self.urlTestingTools = {
        mobileFriendlyTest: {
            /**
             * searchconsole.urlTestingTools.mobileFriendlyTest.run
             * @desc Runs Mobile-Friendly Test for a given URL.
             * @alias searchconsole.urlTestingTools.mobileFriendlyTest.run
             * @memberOf! searchconsole(v1)
             *
             * @param {object} params Parameters for request
             * @param {searchconsole(v1).RunMobileFriendlyTestRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            run: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://searchconsole.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/urlTestingTools/mobileFriendlyTest:run')
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
        }
    };
}
module.exports = Searchconsole;
//# sourceMappingURL=v1.js.map