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
 * Stackdriver Trace API
 *
 * Sends application trace data to Stackdriver Trace for viewing. Trace data is
 * collected for all App Engine applications by default. Trace data from other
 * applications can be provided using this API.
 *
 * @example
 * const google = require('googleapis');
 * const cloudtrace = google.cloudtrace('v2');
 *
 * @namespace cloudtrace
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Cloudtrace
 */
function Cloudtrace(options) {
    var self = this;
    self._options = options || {};
    self.projects = {
        traces: {
            /**
             * cloudtrace.projects.traces.batchWrite
             * @desc Sends new spans to new or existing traces. You cannot update
             * existing spans.
             * @alias cloudtrace.projects.traces.batchWrite
             * @memberOf! cloudtrace(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Required. The name of the project where the spans belong. The format is `projects/[PROJECT_ID]`.
             * @param {cloudtrace(v2).BatchWriteSpansRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            batchWrite: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://cloudtrace.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2/{name}/traces:batchWrite')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            spans: {
                /**
                 * cloudtrace.projects.traces.spans.createSpan
                 * @desc Creates a new span.
                 * @alias cloudtrace.projects.traces.spans.createSpan
                 * @memberOf! cloudtrace(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The resource name of the span in the following format:      projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array.  [SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array.
                 * @param {cloudtrace(v2).Span} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                createSpan: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://cloudtrace.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            }
        }
    };
}
module.exports = Cloudtrace;
//# sourceMappingURL=v2.js.map