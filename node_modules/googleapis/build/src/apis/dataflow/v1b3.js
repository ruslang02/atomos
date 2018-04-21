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
 * Google Dataflow API
 *
 * Manages Google Cloud Dataflow projects on Google Cloud Platform.
 *
 * @example
 * const google = require('googleapis');
 * const dataflow = google.dataflow('v1b3');
 *
 * @namespace dataflow
 * @type {Function}
 * @version v1b3
 * @variation v1b3
 * @param {object=} options Options for Dataflow
 */
function Dataflow(options) {
    var self = this;
    self._options = options || {};
    self.projects =
        {
            /**
             * dataflow.projects.workerMessages
             * @desc Send a worker_message to the service.
             * @alias dataflow.projects.workerMessages
             * @memberOf! dataflow(v1b3)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId The project to send the WorkerMessages to.
             * @param {dataflow(v1b3).SendWorkerMessagesRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            workerMessages: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1b3/projects/{projectId}/WorkerMessages')
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
            jobs: {
                /**
                 * dataflow.projects.jobs.aggregated
                 * @desc List the jobs of a project across all regions.
                 * @alias dataflow.projects.jobs.aggregated
                 * @memberOf! dataflow(v1b3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.filter The kind of filter to use.
                 * @param {string=} params.location The location that contains this job.
                 * @param {integer=} params.pageSize If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
                 * @param {string=} params.pageToken Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
                 * @param {string} params.projectId The project which owns the jobs.
                 * @param {string=} params.view Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                aggregated: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/jobs:aggregated')
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
                create: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/jobs')
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
                    var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/jobs/{jobId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'jobId'],
                        pathParams: ['jobId', 'projectId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                getMetrics: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1b3/projects/{projectId}/jobs/{jobId}/metrics')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'jobId'],
                        pathParams: ['jobId', 'projectId'],
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
                    var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/jobs')
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
                update: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/jobs/{jobId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'jobId'],
                        pathParams: ['jobId', 'projectId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                debug: {
                    /**
                     * dataflow.projects.jobs.debug.getConfig
                     * @desc Get encoded debug configuration for component. Not
                     * cacheable.
                     * @alias dataflow.projects.jobs.debug.getConfig
                     * @memberOf! dataflow(v1b3)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.jobId The job id.
                     * @param {string} params.projectId The project id.
                     * @param {dataflow(v1b3).GetDebugConfigRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    getConfig: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1b3/projects/{projectId}/jobs/{jobId}/debug/getConfig')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'jobId'],
                            pathParams: ['jobId', 'projectId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    sendCapture: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1b3/projects/{projectId}/jobs/{jobId}/debug/sendCapture')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'jobId'],
                            pathParams: ['jobId', 'projectId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                messages: {
                    /**
                     * dataflow.projects.jobs.messages.list
                     * @desc Request the job status.
                     * @alias dataflow.projects.jobs.messages.list
                     * @memberOf! dataflow(v1b3)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.endTime Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
                     * @param {string} params.jobId The job to get messages about.
                     * @param {string=} params.location The location which contains the job specified by job_id.
                     * @param {string=} params.minimumImportance Filter to only get messages with importance >= level
                     * @param {integer=} params.pageSize If specified, determines the maximum number of messages to return.  If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
                     * @param {string=} params.pageToken If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
                     * @param {string} params.projectId A project id.
                     * @param {string=} params.startTime If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
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
                        var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1b3/projects/{projectId}/jobs/{jobId}/messages')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'jobId'],
                            pathParams: ['jobId', 'projectId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                workItems: {
                    /**
                     * dataflow.projects.jobs.workItems.lease
                     * @desc Leases a dataflow WorkItem to run.
                     * @alias dataflow.projects.jobs.workItems.lease
                     * @memberOf! dataflow(v1b3)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.jobId Identifies the workflow job this worker belongs to.
                     * @param {string} params.projectId Identifies the project this worker belongs to.
                     * @param {dataflow(v1b3).LeaseWorkItemRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    lease: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1b3/projects/{projectId}/jobs/{jobId}/workItems:lease')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'jobId'],
                            pathParams: ['jobId', 'projectId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    reportStatus: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1b3/projects/{projectId}/jobs/{jobId}/workItems:reportStatus')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'jobId'],
                            pathParams: ['jobId', 'projectId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                }
            },
            locations: {
                /**
                 * dataflow.projects.locations.workerMessages
                 * @desc Send a worker_message to the service.
                 * @alias dataflow.projects.locations.workerMessages
                 * @memberOf! dataflow(v1b3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.location The location which contains the job
                 * @param {string} params.projectId The project to send the WorkerMessages to.
                 * @param {dataflow(v1b3).SendWorkerMessagesRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                workerMessages: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1b3/projects/{projectId}/locations/{location}/WorkerMessages')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'location'],
                        pathParams: ['location', 'projectId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                jobs: {
                    /**
                     * dataflow.projects.locations.jobs.create
                     * @desc Creates a Cloud Dataflow job.
                     * @alias dataflow.projects.locations.jobs.create
                     * @memberOf! dataflow(v1b3)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.location The location that contains this job.
                     * @param {string} params.projectId The ID of the Cloud Platform project that the job belongs to.
                     * @param {string=} params.replaceJobId Deprecated. This field is now in the Job message.
                     * @param {string=} params.view The level of information requested in response.
                     * @param {dataflow(v1b3).Job} params.resource Request body data
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
                        var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1b3/projects/{projectId}/locations/{location}/jobs')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'location'],
                            pathParams: ['location', 'projectId'],
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
                        var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'location', 'jobId'],
                            pathParams: ['jobId', 'location', 'projectId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    getMetrics: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/metrics')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'location', 'jobId'],
                            pathParams: ['jobId', 'location', 'projectId'],
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
                        var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1b3/projects/{projectId}/locations/{location}/jobs')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'location'],
                            pathParams: ['location', 'projectId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    update: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'location', 'jobId'],
                            pathParams: ['jobId', 'location', 'projectId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    debug: {
                        /**
                         * dataflow.projects.locations.jobs.debug.getConfig
                         * @desc Get encoded debug configuration for component.
                         * Not cacheable.
                         * @alias dataflow.projects.locations.jobs.debug.getConfig
                         * @memberOf! dataflow(v1b3)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.jobId The job id.
                         * @param {string} params.location The location which contains the job specified by job_id.
                         * @param {string} params.projectId The project id.
                         * @param {dataflow(v1b3).GetDebugConfigRequest} params.resource Request body data
                         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                         * @param {callback} callback The callback that handles the response.
                         * @return {object} Request object
                         */
                        getConfig: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl ||
                                'https://dataflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getConfig')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['projectId', 'location', 'jobId'],
                                pathParams: ['jobId', 'location', 'projectId'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        },
                        sendCapture: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl ||
                                'https://dataflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/sendCapture')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['projectId', 'location', 'jobId'],
                                pathParams: ['jobId', 'location', 'projectId'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    },
                    messages: {
                        /**
                         * dataflow.projects.locations.jobs.messages.list
                         * @desc Request the job status.
                         * @alias dataflow.projects.locations.jobs.messages.list
                         * @memberOf! dataflow(v1b3)
                         *
                         * @param {object} params Parameters for request
                         * @param {string=} params.endTime Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
                         * @param {string} params.jobId The job to get messages about.
                         * @param {string} params.location The location which contains the job specified by job_id.
                         * @param {string=} params.minimumImportance Filter to only get messages with importance >= level
                         * @param {integer=} params.pageSize If specified, determines the maximum number of messages to return.  If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
                         * @param {string=} params.pageToken If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
                         * @param {string} params.projectId A project id.
                         * @param {string=} params.startTime If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
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
                            var rootUrl = options.rootUrl ||
                                'https://dataflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/messages')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['projectId', 'location', 'jobId'],
                                pathParams: ['jobId', 'location', 'projectId'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    },
                    workItems: {
                        /**
                         * dataflow.projects.locations.jobs.workItems.lease
                         * @desc Leases a dataflow WorkItem to run.
                         * @alias dataflow.projects.locations.jobs.workItems.lease
                         * @memberOf! dataflow(v1b3)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.jobId Identifies the workflow job this worker belongs to.
                         * @param {string} params.location The location which contains the WorkItem's job.
                         * @param {string} params.projectId Identifies the project this worker belongs to.
                         * @param {dataflow(v1b3).LeaseWorkItemRequest} params.resource Request body data
                         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                         * @param {callback} callback The callback that handles the response.
                         * @return {object} Request object
                         */
                        lease: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl ||
                                'https://dataflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:lease')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['projectId', 'location', 'jobId'],
                                pathParams: ['jobId', 'location', 'projectId'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        },
                        reportStatus: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl ||
                                'https://dataflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:reportStatus')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['projectId', 'location', 'jobId'],
                                pathParams: ['jobId', 'location', 'projectId'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    }
                },
                templates: {
                    /**
                     * dataflow.projects.locations.templates.create
                     * @desc Creates a Cloud Dataflow job from a template.
                     * @alias dataflow.projects.locations.templates.create
                     * @memberOf! dataflow(v1b3)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.location The location to which to direct the request.
                     * @param {string} params.projectId Required. The ID of the Cloud Platform project that the job belongs to.
                     * @param {dataflow(v1b3).CreateJobFromTemplateRequest} params.resource Request body data
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
                        var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1b3/projects/{projectId}/locations/{location}/templates')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'location'],
                            pathParams: ['location', 'projectId'],
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
                        var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1b3/projects/{projectId}/locations/{location}/templates:get')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'location'],
                            pathParams: ['location', 'projectId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    launch: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1b3/projects/{projectId}/locations/{location}/templates:launch')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'location'],
                            pathParams: ['location', 'projectId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                }
            },
            templates: {
                /**
                 * dataflow.projects.templates.create
                 * @desc Creates a Cloud Dataflow job from a template.
                 * @alias dataflow.projects.templates.create
                 * @memberOf! dataflow(v1b3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.projectId Required. The ID of the Cloud Platform project that the job belongs to.
                 * @param {dataflow(v1b3).CreateJobFromTemplateRequest} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/templates')
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
                    var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/templates:get')
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
                launch: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1b3/projects/{projectId}/templates:launch')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId'],
                        pathParams: ['projectId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            }
        };
}
module.exports = Dataflow;
//# sourceMappingURL=v1b3.js.map