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
 * Cloud Tool Results API
 *
 * Reads and publishes results from Firebase Test Lab.
 *
 * @example
 * const google = require('googleapis');
 * const toolresults = google.toolresults('v1beta3');
 *
 * @namespace toolresults
 * @type {Function}
 * @version v1beta3
 * @variation v1beta3
 * @param {object=} options Options for Toolresults
 */
function Toolresults(options) {
    var self = this;
    self._options = options || {};
    self.projects = {
        /**
         * toolresults.projects.getSettings
         * @desc Gets the Tool Results settings for a project.  May return any of
         * the following canonical error codes:  - PERMISSION_DENIED - if the user
         * is not authorized to read from project
         * @alias toolresults.projects.getSettings
         * @memberOf! toolresults(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId A Project id.  Required.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getSettings: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/toolresults/v1beta3/projects/{projectId}/settings')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        initializeSettings: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/toolresults/v1beta3/projects/{projectId}:initializeSettings')
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
        histories: {
            /**
             * toolresults.projects.histories.create
             * @desc Creates a History.  The returned History will have the id set.
             * May return any of the following canonical error codes:  -
             * PERMISSION_DENIED - if the user is not authorized to write to project -
             * INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the
             * containing project does not exist
             * @alias toolresults.projects.histories.create
             * @memberOf! toolresults(v1beta3)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId A Project id.  Required.
             * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
             * @param {toolresults(v1beta3).History} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/toolresults/v1beta3/projects/{projectId}/histories')
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
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'historyId'],
                    pathParams: ['historyId', 'projectId'],
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
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/toolresults/v1beta3/projects/{projectId}/histories')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['projectId'],
                    pathParams: ['projectId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            executions: {
                /**
                 * toolresults.projects.histories.executions.create
                 * @desc Creates an Execution.  The returned Execution will have the id
                 * set.  May return any of the following canonical error codes:  -
                 * PERMISSION_DENIED - if the user is not authorized to write to project
                 * - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the
                 * containing History does not exist
                 * @alias toolresults.projects.histories.executions.create
                 * @memberOf! toolresults(v1beta3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.historyId A History id.  Required.
                 * @param {string} params.projectId A Project id.  Required.
                 * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
                 * @param {toolresults(v1beta3).Execution} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'historyId'],
                        pathParams: ['historyId', 'projectId'],
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
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'historyId', 'executionId'],
                        pathParams: ['executionId', 'historyId', 'projectId'],
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
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'historyId'],
                        pathParams: ['historyId', 'projectId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                patch: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'historyId', 'executionId'],
                        pathParams: ['executionId', 'historyId', 'projectId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                clusters: {
                    /**
                     * toolresults.projects.histories.executions.clusters.get
                     * @desc Retrieves a single screenshot cluster by its ID
                     * @alias toolresults.projects.histories.executions.clusters.get
                     * @memberOf! toolresults(v1beta3)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId A Cluster id  Required.
                     * @param {string} params.executionId An Execution id.  Required.
                     * @param {string} params.historyId A History id.  Required.
                     * @param {string} params.projectId A Project id.  Required.
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
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters/{clusterId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'historyId', 'executionId', 'clusterId'],
                            pathParams: ['clusterId', 'executionId', 'historyId', 'projectId'],
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
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'historyId', 'executionId'],
                            pathParams: ['executionId', 'historyId', 'projectId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                steps: {
                    /**
                     * toolresults.projects.histories.executions.steps.create
                     * @desc Creates a Step.  The returned Step will have the id set.  May
                     * return any of the following canonical error codes:  -
                     * PERMISSION_DENIED - if the user is not authorized to write to
                     * project - INVALID_ARGUMENT - if the request is malformed -
                     * FAILED_PRECONDITION - if the step is too large (more than 10Mib) -
                     * NOT_FOUND - if the containing Execution does not exist
                     * @alias toolresults.projects.histories.executions.steps.create
                     * @memberOf! toolresults(v1beta3)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.executionId A Execution id.  Required.
                     * @param {string} params.historyId A History id.  Required.
                     * @param {string} params.projectId A Project id.  Required.
                     * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
                     * @param {toolresults(v1beta3).Step} params.resource Request body data
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
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'historyId', 'executionId'],
                            pathParams: ['executionId', 'historyId', 'projectId'],
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
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                            pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    getPerfMetricsSummary: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                            pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
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
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'historyId', 'executionId'],
                            pathParams: ['executionId', 'historyId', 'projectId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    patch: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PATCH'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                            pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    publishXunitXmlFiles: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}:publishXunitXmlFiles')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                            pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    perfMetricsSummary: {
                        /**
                         * toolresults.projects.histories.executions.steps.perfMetricsSummary.create
                         * @desc Creates a PerfMetricsSummary resource. Returns the existing
                         * one if it has already been created.  May return any of the
                         * following error code(s): - NOT_FOUND - The containing Step does
                         * not exist
                         * @alias
                         * toolresults.projects.histories.executions.steps.perfMetricsSummary.create
                         * @memberOf! toolresults(v1beta3)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.executionId A tool results execution ID.
                         * @param {string} params.historyId A tool results history ID.
                         * @param {string} params.projectId The cloud project
                         * @param {string} params.stepId A tool results step ID.
                         * @param {toolresults(v1beta3).PerfMetricsSummary} params.resource Request body data
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
                            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                                pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    },
                    perfSampleSeries: {
                        /**
                         * toolresults.projects.histories.executions.steps.perfSampleSeries.create
                         * @desc Creates a PerfSampleSeries.  May return any of the
                         * following error code(s): - ALREADY_EXISTS - PerfMetricSummary
                         * already exists for the given Step - NOT_FOUND - The containing
                         * Step does not exist
                         * @alias
                         * toolresults.projects.histories.executions.steps.perfSampleSeries.create
                         * @memberOf! toolresults(v1beta3)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.executionId A tool results execution ID.
                         * @param {string} params.historyId A tool results history ID.
                         * @param {string} params.projectId The cloud project
                         * @param {string} params.stepId A tool results step ID.
                         * @param {toolresults(v1beta3).PerfSampleSeries} params.resource Request body data
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
                            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                                pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
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
                            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: [
                                    'projectId', 'historyId', 'executionId', 'stepId',
                                    'sampleSeriesId'
                                ],
                                pathParams: [
                                    'executionId', 'historyId', 'projectId', 'sampleSeriesId',
                                    'stepId'
                                ],
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
                            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                                pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        },
                        samples: {
                            /**
                             * toolresults.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate
                             * @desc Creates a batch of PerfSamples - a client can submit
                             * multiple batches of Perf Samples through repeated calls to
                             * this method in order to split up a large request payload -
                             * duplicates and existing timestamp entries will be ignored.
                             * - the batch operation may partially succeed - the set of
                             * elements successfully inserted is returned in the response
                             * (omits items which already existed in the database).  May
                             * return any of the following canonical error codes: -
                             * NOT_FOUND - The containing PerfSampleSeries does not exist
                             * @alias
                             * toolresults.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate
                             * @memberOf! toolresults(v1beta3)
                             *
                             * @param {object} params Parameters for request
                             * @param {string} params.executionId A tool results execution ID.
                             * @param {string} params.historyId A tool results history ID.
                             * @param {string} params.projectId The cloud project
                             * @param {string} params.sampleSeriesId A sample series id
                             * @param {string} params.stepId A tool results step ID.
                             * @param {toolresults(v1beta3).BatchCreatePerfSamplesRequest} params.resource Request body data
                             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                             * @param {callback} callback The callback that handles the response.
                             * @return {object} Request object
                             */
                            batchCreate: function (params, options, callback) {
                                if (typeof options === 'function') {
                                    callback = options;
                                    options = {};
                                }
                                options = options || {};
                                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                                var parameters = {
                                    options: Object.assign({
                                        url: (rootUrl +
                                            '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples:batchCreate')
                                            .replace(/([^:]\/)\/+/g, '$1'),
                                        method: 'POST'
                                    }, options),
                                    params: params,
                                    requiredParams: [
                                        'projectId', 'historyId', 'executionId', 'stepId',
                                        'sampleSeriesId'
                                    ],
                                    pathParams: [
                                        'executionId', 'historyId', 'projectId',
                                        'sampleSeriesId', 'stepId'
                                    ],
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
                                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                                var parameters = {
                                    options: Object.assign({
                                        url: (rootUrl +
                                            '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples')
                                            .replace(/([^:]\/)\/+/g, '$1'),
                                        method: 'GET'
                                    }, options),
                                    params: params,
                                    requiredParams: [
                                        'projectId', 'historyId', 'executionId', 'stepId',
                                        'sampleSeriesId'
                                    ],
                                    pathParams: [
                                        'executionId', 'historyId', 'projectId',
                                        'sampleSeriesId', 'stepId'
                                    ],
                                    context: self
                                };
                                return apirequest_1.createAPIRequest(parameters, callback);
                            }
                        }
                    },
                    thumbnails: {
                        /**
                         * toolresults.projects.histories.executions.steps.thumbnails.list
                         * @desc Lists thumbnails of images attached to a step.  May return
                         * any of the following canonical error codes: - PERMISSION_DENIED -
                         * if the user is not authorized to read from the project, or from
                         * any of the images - INVALID_ARGUMENT - if the request is
                         * malformed - NOT_FOUND - if the step does not exist, or if any of
                         * the images do not exist
                         * @alias
                         * toolresults.projects.histories.executions.steps.thumbnails.list
                         * @memberOf! toolresults(v1beta3)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.executionId An Execution id.  Required.
                         * @param {string} params.historyId A History id.  Required.
                         * @param {integer=} params.pageSize The maximum number of thumbnails to fetch.  Default value: 50. The server will use this default if the field is not set or has a value of 0.  Optional.
                         * @param {string=} params.pageToken A continuation token to resume the query at the next item.  Optional.
                         * @param {string} params.projectId A Project id.  Required.
                         * @param {string} params.stepId A Step id.  Required.
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
                            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/thumbnails')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                                pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    }
                }
            }
        }
    };
}
module.exports = Toolresults;
//# sourceMappingURL=v1beta3.js.map