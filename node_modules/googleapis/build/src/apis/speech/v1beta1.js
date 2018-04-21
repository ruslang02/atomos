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
 * Google Cloud Speech API
 *
 * Converts audio to text by applying powerful neural network models.
 *
 * @example
 * const google = require('googleapis');
 * const speech = google.speech('v1beta1');
 *
 * @namespace speech
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Speech
 */
function Speech(options) {
    var self = this;
    self._options = options || {};
    self.operations = {
        /**
         * speech.operations.get
         * @desc Gets the latest state of a long-running operation.  Clients can use
         * this method to poll the operation result at intervals as recommended by
         * the API service.
         * @alias speech.operations.get
         * @memberOf! speech(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource.
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
            var rootUrl = options.rootUrl || 'https://speech.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/operations/{name}')
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
    };
    self.speech = {
        /**
         * speech.speech.asyncrecognize
         * @desc Performs asynchronous speech recognition: receive results via the
         * [google.longrunning.Operations]
         * (/speech/reference/rest/v1beta1/operations#Operation) interface. Returns
         * either an `Operation.error` or an `Operation.response` which contains an
         * `AsyncRecognizeResponse` message.
         * @alias speech.speech.asyncrecognize
         * @memberOf! speech(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {speech(v1beta1).AsyncRecognizeRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        asyncrecognize: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://speech.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/speech:asyncrecognize')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        syncrecognize: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://speech.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/speech:syncrecognize')
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
module.exports = Speech;
//# sourceMappingURL=v1beta1.js.map