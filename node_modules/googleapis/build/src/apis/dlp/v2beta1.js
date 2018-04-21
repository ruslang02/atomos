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
 * DLP API
 *
 * The Google Data Loss Prevention API provides methods for detection of
 * privacy-sensitive fragments in text, images, and Google Cloud Platform
 * storage repositories.
 *
 * @example
 * const google = require('googleapis');
 * const dlp = google.dlp('v2beta1');
 *
 * @namespace dlp
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Dlp
 */
function Dlp(options) {
    var self = this;
    self._options = options || {};
    self.content = {
        /**
         * dlp.content.deidentify
         * @desc De-identifies potentially sensitive info from a list of strings.
         * This method has limits on input size and output size.
         * @alias dlp.content.deidentify
         * @memberOf! dlp(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {dlp(v2beta1).GooglePrivacyDlpV2beta1DeidentifyContentRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        deidentify: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/content:deidentify')
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
        inspect: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/content:inspect')
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
        redact: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/content:redact')
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
    self.dataSource = {
        /**
         * dlp.dataSource.analyze
         * @desc Schedules a job to compute risk analysis metrics over content in a
         * Google Cloud Platform repository.
         * @alias dlp.dataSource.analyze
         * @memberOf! dlp(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {dlp(v2beta1).GooglePrivacyDlpV2beta1AnalyzeDataSourceRiskRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        analyze: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/dataSource:analyze')
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
    self.inspect = {
        operations: {
            /**
             * dlp.inspect.operations.cancel
             * @desc Cancels an operation. Use the `inspect.operations.get` to check
             * whether the cancellation succeeded or the operation completed despite
             * cancellation.
             * @alias dlp.inspect.operations.cancel
             * @memberOf! dlp(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the operation resource to be cancelled.
             * @param {dlp(v2beta1).GoogleLongrunningCancelOperationRequest} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{name}:cancel')
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
            create: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/inspect/operations')
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
            delete: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
        results: {
            findings: {
                /**
                 * dlp.inspect.results.findings.list
                 * @desc Returns list of results for given inspect operation result set
                 * id.
                 * @alias dlp.inspect.results.findings.list
                 * @memberOf! dlp(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.filter Restricts findings to items that match. Supports info_type and likelihood.  Examples:  - info_type=EMAIL_ADDRESS - info_type=PHONE_NUMBER,EMAIL_ADDRESS - likelihood=VERY_LIKELY - likelihood=VERY_LIKELY,LIKELY - info_type=EMAIL_ADDRESS,likelihood=VERY_LIKELY,LIKELY
                 * @param {string} params.name Identifier of the results set returned as metadata of the longrunning operation created by a call to InspectDataSource. Should be in the format of `inspect/results/{id}`.
                 * @param {integer=} params.pageSize Maximum number of results to return. If 0, the implementation selects a reasonable value.
                 * @param {string=} params.pageToken The value returned by the last `ListInspectFindingsResponse`; indicates that this is a continuation of a prior `ListInspectFindings` call, and that the system should return the next page of data.
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
                    var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{name}/findings')
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
        }
    };
    self.riskAnalysis = {
        operations: {
            /**
             * dlp.riskAnalysis.operations.cancel
             * @desc Cancels an operation. Use the `inspect.operations.get` to check
             * whether the cancellation succeeded or the operation completed despite
             * cancellation.
             * @alias dlp.riskAnalysis.operations.cancel
             * @memberOf! dlp(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the operation resource to be cancelled.
             * @param {dlp(v2beta1).GoogleLongrunningCancelOperationRequest} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{name}:cancel')
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
            delete: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
    self.rootCategories = {
        /**
         * dlp.rootCategories.list
         * @desc Returns the list of root categories of sensitive information.
         * @alias dlp.rootCategories.list
         * @memberOf! dlp(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.languageCode Optional language code for localized friendly category names. If omitted or if localized strings are not available, en-US strings will be returned.
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
            var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/rootCategories')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        infoTypes: {
            /**
             * dlp.rootCategories.infoTypes.list
             * @desc Returns sensitive information types for given category.
             * @alias dlp.rootCategories.infoTypes.list
             * @memberOf! dlp(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.category Category name as returned by ListRootCategories.
             * @param {string=} params.languageCode Optional BCP-47 language code for localized info type friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/rootCategories/{category}/infoTypes')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['category'],
                    pathParams: ['category'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
}
module.exports = Dlp;
//# sourceMappingURL=v2beta1.js.map