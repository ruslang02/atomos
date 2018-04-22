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
 * Google Cloud Testing API
 *
 * Allows developers to run automated tests for their mobile applications on
 * Google infrastructure.
 *
 * @example
 * const google = require('googleapis');
 * const testing = google.testing('v1');
 *
 * @namespace testing
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Testing
 */
function Testing(options) {
    var self = this;
    self._options = options || {};
    self.projects = {
        testMatrices: {
            /**
             * testing.projects.testMatrices.cancel
             * @desc Cancels unfinished test executions in a test matrix. This call
             * returns immediately and cancellation proceeds asychronously. If the
             * matrix is already final, this operation will have no effect.  May
             * return any of the following canonical error codes:  - PERMISSION_DENIED
             * - if the user is not authorized to read project - INVALID_ARGUMENT - if
             * the request is malformed - NOT_FOUND - if the Test Matrix does not
             * exist
             * @alias testing.projects.testMatrices.cancel
             * @memberOf! testing(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId Cloud project that owns the test.
             * @param {string} params.testMatrixId Test matrix that will be canceled.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            cancel: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v1/projects/{projectId}/testMatrices/{testMatrixId}:cancel')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'testMatrixId'],
                    pathParams: ['projectId', 'testMatrixId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            create: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/testMatrices')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['projectId'],
                    pathParams: ['projectId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            get: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v1/projects/{projectId}/testMatrices/{testMatrixId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'testMatrixId'],
                    pathParams: ['projectId', 'testMatrixId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.testEnvironmentCatalog = {
        /**
         * testing.testEnvironmentCatalog.get
         * @desc Get the catalog of supported test environments.  May return any of
         * the following canonical error codes:  - INVALID_ARGUMENT - if the request
         * is malformed - NOT_FOUND - if the environment type does not exist -
         * INTERNAL - if an internal error occurred
         * @alias testing.testEnvironmentCatalog.get
         * @memberOf! testing(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.environmentType The type of environment that should be listed. Required
         * @param {string=} params.projectId For authorization, the cloud project requesting the TestEnvironmentCatalog. Optional
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
            var rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/testEnvironmentCatalog/{environmentType}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['environmentType'],
                pathParams: ['environmentType'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Testing;
//# sourceMappingURL=v1.js.map