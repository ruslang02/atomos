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
 * Stackdriver Monitoring API
 *
 * Manages your Stackdriver Monitoring data and configurations. Most projects
 * must be associated with a Stackdriver account, with a few exceptions as noted
 * on the individual method pages.
 *
 * @example
 * const google = require('googleapis');
 * const monitoring = google.monitoring('v3');
 *
 * @namespace monitoring
 * @type {Function}
 * @version v3
 * @variation v3
 * @param {object=} options Options for Monitoring
 */
function Monitoring(options) {
    var self = this;
    self._options = options || {};
    self.projects =
        {
            collectdTimeSeries: {
                /**
                 * monitoring.projects.collectdTimeSeries.create
                 * @desc Stackdriver Monitoring Agent only: Creates a new time
                 * series.<aside class="caution">This method is only for use by the
                 * Stackdriver Monitoring Agent. Use projects.timeSeries.create
                 * instead.</aside>
                 * @example
                 * // PRE-REQUISITES:
                 * // ---------------
                 * // 1. If not already done, enable the Google Monitoring API and
                 * check the quota for your project at
                 * //
                 * https://console.developers.google.com/apis/api/monitoring_component/quotas
                 * // 2. This sample uses Application Default Credentials for Auth. If
                 * not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
                 * application-default login'
                 * // 3. To install the client library and Application Default
                 * Credentials library, run:
                 * //    'npm install googleapis --save'
                 * var google = require('googleapis');
                 * var monitoring = google.monitoring('v3');
                 *
                 * google.auth.getApplicationDefault(function(err, authClient) {
                 *   if (err) {
                 *     console.log('Authentication failed because of ', err);
                 *     return;
                 *   }
                 *   if (authClient.createScopedRequired &&
                 * authClient.createScopedRequired()) { var scopes =
                 * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
                 * authClient.createScoped(scopes);
                 *   }
                 *
                 *   var request = {
                 *     // TODO: Change placeholders below to appropriate parameter
                 * values for the 'create' method:
                 *
                 *     // The project in which to create the time series. The format
                 * is `"projects/PROJECT_ID_OR_NUMBER"`. name:
                 * "projects/{MY-PROJECT}", resource: {},
                 *     // Auth client
                 *     auth: authClient
                 *   };
                 *
                 *   monitoring.projects.collectdTimeSeries.create(request,
                 * function(err, result) { if (err) { console.log(err); } else {
                 *       console.log(result);
                 *     }
                 *   });
                 * });
                 * @alias monitoring.projects.collectdTimeSeries.create
                 * @memberOf! monitoring(v3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The project in which to create the time series. The format is "projects/PROJECT_ID_OR_NUMBER".
                 * @param {monitoring(v3).CreateCollectdTimeSeriesRequest} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{name}/collectdTimeSeries')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            },
            groups: {
                /**
                 * monitoring.projects.groups.create
                 * @desc Creates a new group.
                 * @example
                 * // PRE-REQUISITES:
                 * // ---------------
                 * // 1. If not already done, enable the Google Monitoring API and
                 * check the quota for your project at
                 * //
                 * https://console.developers.google.com/apis/api/monitoring_component/quotas
                 * // 2. This sample uses Application Default Credentials for Auth. If
                 * not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
                 * application-default login'
                 * // 3. To install the client library and Application Default
                 * Credentials library, run:
                 * //    'npm install googleapis --save'
                 * var google = require('googleapis');
                 * var monitoring = google.monitoring('v3');
                 *
                 * google.auth.getApplicationDefault(function(err, authClient) {
                 *   if (err) {
                 *     console.log('Authentication failed because of ', err);
                 *     return;
                 *   }
                 *   if (authClient.createScopedRequired &&
                 * authClient.createScopedRequired()) { var scopes =
                 * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
                 * authClient.createScoped(scopes);
                 *   }
                 *
                 *   var request = {
                 *     // TODO: Change placeholders below to appropriate parameter
                 * values for the 'create' method:
                 *
                 *     // The project in which to create the group. The format is
                 * `"projects/{project_id_or_number}"`. name: "projects/{MY-PROJECT}",
                 *     resource: {},
                 *     // Auth client
                 *     auth: authClient
                 *   };
                 *
                 *   monitoring.projects.groups.create(request, function(err, result)
                 * { if (err) { console.log(err); } else { console.log(result);
                 *     }
                 *   });
                 * });
                 * @alias monitoring.projects.groups.create
                 * @memberOf! monitoring(v3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The project in which to create the group. The format is "projects/{project_id_or_number}".
                 * @param {boolean=} params.validateOnly If true, validate this request but do not create the group.
                 * @param {monitoring(v3).Group} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{name}/groups')
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{name}/groups')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                members: {
                    /**
                     * monitoring.projects.groups.members.list
                     * @desc Lists the monitored resources that are members of a group.
                     * @example
                     * // PRE-REQUISITES:
                     * // ---------------
                     * // 1. If not already done, enable the Google Monitoring API and
                     * check the quota for your project at
                     * //
                     * https://console.developers.google.com/apis/api/monitoring_component/quotas
                     * // 2. This sample uses Application Default Credentials for Auth.
                     * If not already done, install the gcloud CLI from
                     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
                     * application-default login'
                     * // 3. To install the client library and Application Default
                     * Credentials library, run:
                     * //    'npm install googleapis --save'
                     * var google = require('googleapis');
                     * var monitoring = google.monitoring('v3');
                     *
                     * google.auth.getApplicationDefault(function(err, authClient) {
                     *   if (err) {
                     *     console.log('Authentication failed because of ', err);
                     *     return;
                     *   }
                     *   if (authClient.createScopedRequired &&
                     * authClient.createScopedRequired()) { var scopes =
                     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
                     * authClient.createScoped(scopes);
                     *   }
                     *
                     *   var request = {
                     *     // TODO: Change placeholders below to appropriate parameter
                     * values for the 'list' method:
                     *
                     *     // The group whose members are listed. The format is
                     *     // `"projects/{project_id_or_number}/groups/{group_id}"`.
                     *     name: "projects/{MY-PROJECT}/groups/{MY-GROUP}",
                     *     // Auth client
                     *     auth: authClient
                     *   };
                     *
                     *
                     *   var recur = function(err, result) {
                     *     if (err) {
                     *       console.log(err);
                     *     } else {
                     *       console.log(result);
                     *       if (result.nextPageToken) {
                     *         request.pageToken = result.nextPageToken;
                     *         monitoring.projects.groups.members.list(request, recur);
                     *       }
                     *     }
                     *   };
                     *
                     *   monitoring.projects.groups.members.list(request, recur);
                     * });
                     * @alias monitoring.projects.groups.members.list
                     * @memberOf! monitoring(v3)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.filter An optional list filter describing the members to be returned. The filter may reference the type, labels, and metadata of monitored resources that comprise the group. For example, to return only resources representing Compute Engine VM instances, use this filter: resource.type = "gce_instance"
                     * @param {string=} params.interval.endTime Required. The end of the time interval.
                     * @param {string=} params.interval.startTime Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
                     * @param {string} params.name The group whose members are listed. The format is "projects/{project_id_or_number}/groups/{group_id}".
                     * @param {integer=} params.pageSize A positive number that is the maximum number of results to return.
                     * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
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
                        var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v3/{name}/members')
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
            },
            metricDescriptors: {
                /**
                 * monitoring.projects.metricDescriptors.create
                 * @desc Creates a new metric descriptor. User-created metric
                 * descriptors define custom metrics.
                 * @example
                 * // PRE-REQUISITES:
                 * // ---------------
                 * // 1. If not already done, enable the Google Monitoring API and
                 * check the quota for your project at
                 * //
                 * https://console.developers.google.com/apis/api/monitoring_component/quotas
                 * // 2. This sample uses Application Default Credentials for Auth. If
                 * not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
                 * application-default login'
                 * // 3. To install the client library and Application Default
                 * Credentials library, run:
                 * //    'npm install googleapis --save'
                 * var google = require('googleapis');
                 * var monitoring = google.monitoring('v3');
                 *
                 * google.auth.getApplicationDefault(function(err, authClient) {
                 *   if (err) {
                 *     console.log('Authentication failed because of ', err);
                 *     return;
                 *   }
                 *   if (authClient.createScopedRequired &&
                 * authClient.createScopedRequired()) { var scopes =
                 * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
                 * authClient.createScoped(scopes);
                 *   }
                 *
                 *   var request = {
                 *     // TODO: Change placeholders below to appropriate parameter
                 * values for the 'create' method:
                 *
                 *     // The project on which to execute the request. The format is
                 * `"projects/{project_id_or_number}"`. name: "projects/{MY-PROJECT}",
                 *     resource: {},
                 *     // Auth client
                 *     auth: authClient
                 *   };
                 *
                 *   monitoring.projects.metricDescriptors.create(request,
                 * function(err, result) { if (err) { console.log(err); } else {
                 *       console.log(result);
                 *     }
                 *   });
                 * });
                 * @alias monitoring.projects.metricDescriptors.create
                 * @memberOf! monitoring(v3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The project on which to execute the request. The format is "projects/{project_id_or_number}".
                 * @param {monitoring(v3).MetricDescriptor} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{name}/metricDescriptors')
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{name}/metricDescriptors')
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
            },
            monitoredResourceDescriptors: {
                /**
                 * monitoring.projects.monitoredResourceDescriptors.get
                 * @desc Gets a single monitored resource descriptor. This method does
                 * not require a Stackdriver account.
                 * @example
                 * // PRE-REQUISITES:
                 * // ---------------
                 * // 1. If not already done, enable the Google Monitoring API and
                 * check the quota for your project at
                 * //
                 * https://console.developers.google.com/apis/api/monitoring_component/quotas
                 * // 2. This sample uses Application Default Credentials for Auth. If
                 * not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
                 * application-default login'
                 * // 3. To install the client library and Application Default
                 * Credentials library, run:
                 * //    'npm install googleapis --save'
                 * var google = require('googleapis');
                 * var monitoring = google.monitoring('v3');
                 *
                 * google.auth.getApplicationDefault(function(err, authClient) {
                 *   if (err) {
                 *     console.log('Authentication failed because of ', err);
                 *     return;
                 *   }
                 *   if (authClient.createScopedRequired &&
                 * authClient.createScopedRequired()) { var scopes =
                 * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
                 * authClient.createScoped(scopes);
                 *   }
                 *
                 *   var request = {
                 *     // TODO: Change placeholders below to appropriate parameter
                 * values for the 'get' method:
                 *
                 *     // The monitored resource descriptor to get. The format is
                 *     //
                 * `"projects/{project_id_or_number}/monitoredResourceDescriptors/{resource_type}"`.
                 * The
                 *     // `{resource_type}` is a predefined type, such as
                 * `cloudsql_database`. name:
                 * "projects/{MY-PROJECT}/monitoredResourceDescriptors/{MY-MONITOREDRESOURCEDESCRIPTOR}",
                 *     // Auth client
                 *     auth: authClient
                 *   };
                 *
                 *   monitoring.projects.monitoredResourceDescriptors.get(request,
                 * function(err, result) { if (err) { console.log(err); } else {
                 *       console.log(result);
                 *     }
                 *   });
                 * });
                 * @alias monitoring.projects.monitoredResourceDescriptors.get
                 * @memberOf! monitoring(v3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The monitored resource descriptor to get. The format is "projects/{project_id_or_number}/monitoredResourceDescriptors/{resource_type}". The {resource_type} is a predefined type, such as cloudsql_database.
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{name}/monitoredResourceDescriptors')
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
            },
            timeSeries: {
                /**
                 * monitoring.projects.timeSeries.create
                 * @desc Creates or adds data to one or more time series. The response
                 * is empty if all time series in the request were written. If any
                 * time series could not be written, a corresponding failure message
                 * is included in the error response.
                 * @example
                 * // PRE-REQUISITES:
                 * // ---------------
                 * // 1. If not already done, enable the Google Monitoring API and
                 * check the quota for your project at
                 * //
                 * https://console.developers.google.com/apis/api/monitoring_component/quotas
                 * // 2. This sample uses Application Default Credentials for Auth. If
                 * not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
                 * application-default login'
                 * // 3. To install the client library and Application Default
                 * Credentials library, run:
                 * //    'npm install googleapis --save'
                 * var google = require('googleapis');
                 * var monitoring = google.monitoring('v3');
                 *
                 * google.auth.getApplicationDefault(function(err, authClient) {
                 *   if (err) {
                 *     console.log('Authentication failed because of ', err);
                 *     return;
                 *   }
                 *   if (authClient.createScopedRequired &&
                 * authClient.createScopedRequired()) { var scopes =
                 * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
                 * authClient.createScoped(scopes);
                 *   }
                 *
                 *   var request = {
                 *     // TODO: Change placeholders below to appropriate parameter
                 * values for the 'create' method:
                 *
                 *     // The project on which to execute the request. The format is
                 * `"projects/{project_id_or_number}"`. name: "projects/{MY-PROJECT}",
                 *     resource: {},
                 *     // Auth client
                 *     auth: authClient
                 *   };
                 *
                 *   monitoring.projects.timeSeries.create(request, function(err,
                 * result) { if (err) { console.log(err); } else {
                 *       console.log(result);
                 *     }
                 *   });
                 * });
                 * @alias monitoring.projects.timeSeries.create
                 * @memberOf! monitoring(v3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The project on which to execute the request. The format is "projects/{project_id_or_number}".
                 * @param {monitoring(v3).CreateTimeSeriesRequest} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{name}/timeSeries')
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
                list: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{name}/timeSeries')
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
            },
            uptimeCheckConfigs: {
                /**
                 * monitoring.projects.uptimeCheckConfigs.create
                 * @desc Creates a new uptime check configuration.
                 * @alias monitoring.projects.uptimeCheckConfigs.create
                 * @memberOf! monitoring(v3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent The project in which to create the uptime check. The formatis projects/[PROJECT_ID].
                 * @param {monitoring(v3).UptimeCheckConfig} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{parent}/uptimeCheckConfigs')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{parent}/uptimeCheckConfigs')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
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
                    var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PATCH'
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
    self.uptimeCheckIps = {
        /**
         * monitoring.uptimeCheckIps.list
         * @desc Returns the list of IPs that checkers run from
         * @alias monitoring.uptimeCheckIps.list
         * @memberOf! monitoring(v3)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page_size is <=0, the server will decide the number of results to be returned. NOTE: this field is not yet implemented
         * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call. NOTE: this field is not yet implemented
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
            var rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v3/uptimeCheckIps')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
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
module.exports = Monitoring;
//# sourceMappingURL=v3.js.map