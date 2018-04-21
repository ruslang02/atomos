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
 * Cloud Video Intelligence API
 *
 * Cloud Video Intelligence API.
 *
 * @example
 * const google = require('googleapis');
 * const videointelligence = google.videointelligence('v1beta1');
 *
 * @namespace videointelligence
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Videointelligence
 */
function Videointelligence(options) {
    var self = this;
    self._options = options || {};
    self.videos = {
        /**
         * videointelligence.videos.annotate
         * @desc Performs asynchronous video annotation. Progress and results can be
         * retrieved through the `google.longrunning.Operations` interface.
         * `Operation.metadata` contains `AnnotateVideoProgress` (progress).
         * `Operation.response` contains `AnnotateVideoResponse` (results).
         * @alias videointelligence.videos.annotate
         * @memberOf! videointelligence(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta1_AnnotateVideoRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        annotate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://videointelligence.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/videos:annotate')
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
module.exports = Videointelligence;
//# sourceMappingURL=v1beta1.js.map