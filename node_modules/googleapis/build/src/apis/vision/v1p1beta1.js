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
 * Google Cloud Vision API
 *
 * Integrates Google Vision features, including image labeling, face, logo, and
 * landmark detection, optical character recognition (OCR), and detection of
 * explicit content, into applications.
 *
 * @example
 * const google = require('googleapis');
 * const vision = google.vision('v1p1beta1');
 *
 * @namespace vision
 * @type {Function}
 * @version v1p1beta1
 * @variation v1p1beta1
 * @param {object=} options Options for Vision
 */
function Vision(options) {
    var self = this;
    self._options = options || {};
    self.images = {
        /**
         * vision.images.annotate
         * @desc Run image detection and annotation for a batch of images.
         * @alias vision.images.annotate
         * @memberOf! vision(v1p1beta1)
         *
         * @param {object} params Parameters for request
         * @param {vision(v1p1beta1).GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1p1beta1/images:annotate')
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
module.exports = Vision;
//# sourceMappingURL=v1p1beta1.js.map