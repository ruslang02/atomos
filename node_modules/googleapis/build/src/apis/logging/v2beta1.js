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
 * Stackdriver Logging API
 *
 * Writes log entries and manages your Stackdriver Logging configuration.
 *
 * @example
 * const google = require('googleapis');
 * const logging = google.logging('v2beta1');
 *
 * @namespace logging
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Logging
 */
function Logging(options) {
    var self = this;
    self._options = options || {};
    self.billingAccounts = {
        logs: {
            /**
             * logging.billingAccounts.logs.delete
             * @desc Deletes all the log entries in a log. The log reappears if it
             * receives new entries. Log entries written shortly before the delete
             * operation might not be deleted.
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Stackdriver Logging API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/logging
             * // 2. This sample uses Application Default Credentials for
             * authentication.
             * //    If not already done, install the gcloud CLI from
             * //    https://cloud.google.com/sdk and run
             * //    `gcloud beta auth application-default login`.
             * //    For more information, see
             * //
             * https://developers.google.com/identity/protocols/application-default-credentials
             * // 3. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var logging = google.logging('v2beta1');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // Required. The resource name of the log to delete:
             *     // "projects/[PROJECT_ID]/logs/[LOG_ID]"
             *     // "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
             *     // "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
             *     // "folders/[FOLDER_ID]/logs/[LOG_ID]"
             *     // [LOG_ID] must be URL-encoded. For example,
             * "projects/my-project-id/logs/syslog",
             *     //
             * "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity".
             * For more
             *     // information about log names, see LogEntry.
             *     logName: 'billingAccounts/my-billing-account/logs/my-log',  //
             * TODO: Update placeholder value.
             *
             *     auth: authClient,
             *   };
             *
             *   logging.billingAccounts.logs.delete(request, function(err) {
             *     if (err) {
             *       console.error(err);
             *       return;
             *     }
             *   });
             * });
             *
             * function authorize(callback) {
             *   google.auth.getApplicationDefault(function(err, authClient) {
             *     if (err) {
             *       console.error('authentication failed: ', err);
             *       return;
             *     }
             *     if (authClient.createScopedRequired &&
             * authClient.createScopedRequired()) { var scopes =
             * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
             * authClient.createScoped(scopes);
             *     }
             *     callback(authClient);
             *   });
             * }
             * @alias logging.billingAccounts.logs.delete
             * @memberOf! logging(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.logName Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            delete: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{logName}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['logName'],
                    pathParams: ['logName'],
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
                var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{parent}/logs')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.entries = {
        /**
         * logging.entries.list
         * @desc Lists log entries. Use this method to retrieve log entries from
         * Stackdriver Logging. For ways to export log entries, see Exporting Logs.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Stackdriver Logging API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/logging
         * // 2. This sample uses Application Default Credentials for
         * authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //
         * https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var logging = google.logging('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var entriesPage = response['entries'];
         *     if (!entriesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < entriesPage.length; i++) {
         *       // TODO: Change code below to process each resource in
         * `entriesPage`: console.log(JSON.stringify(entriesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.resource.pageToken = response.nextPageToken;
         *       logging.entries.list(request, handlePage);
         *     }
         *   };
         *
         *   logging.entries.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired &&
         * authClient.createScopedRequired()) { var scopes =
         * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
         * authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         * @alias logging.entries.list
         * @memberOf! logging(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {logging(v2beta1).ListLogEntriesRequest} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/entries:list')
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
        write: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/entries:write')
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
    self.monitoredResourceDescriptors = {
        /**
         * logging.monitoredResourceDescriptors.list
         * @desc Lists the descriptors for monitored resource types used by
         * Stackdriver Logging.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Stackdriver Logging API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/logging
         * // 2. This sample uses Application Default Credentials for
         * authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //
         * https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var logging = google.logging('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     auth: authClient,
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var resourceDescriptorsPage = response['resourceDescriptors'];
         *     if (!resourceDescriptorsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < resourceDescriptorsPage.length; i++) {
         *       // TODO: Change code below to process each resource in
         * `resourceDescriptorsPage`:
         *       console.log(JSON.stringify(resourceDescriptorsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       logging.monitoredResourceDescriptors.list(request, handlePage);
         *     }
         *   };
         *
         *   logging.monitoredResourceDescriptors.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired &&
         * authClient.createScopedRequired()) { var scopes =
         * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
         * authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         * @alias logging.monitoredResourceDescriptors.list
         * @memberOf! logging(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
         * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
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
            var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/monitoredResourceDescriptors')
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
    self.organizations = {
        logs: {
            /**
             * logging.organizations.logs.delete
             * @desc Deletes all the log entries in a log. The log reappears if it
             * receives new entries. Log entries written shortly before the delete
             * operation might not be deleted.
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Stackdriver Logging API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/logging
             * // 2. This sample uses Application Default Credentials for
             * authentication.
             * //    If not already done, install the gcloud CLI from
             * //    https://cloud.google.com/sdk and run
             * //    `gcloud beta auth application-default login`.
             * //    For more information, see
             * //
             * https://developers.google.com/identity/protocols/application-default-credentials
             * // 3. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var logging = google.logging('v2beta1');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // Required. The resource name of the log to delete:
             *     // "projects/[PROJECT_ID]/logs/[LOG_ID]"
             *     // "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
             *     // "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
             *     // "folders/[FOLDER_ID]/logs/[LOG_ID]"
             *     // [LOG_ID] must be URL-encoded. For example,
             * "projects/my-project-id/logs/syslog",
             *     //
             * "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity".
             * For more
             *     // information about log names, see LogEntry.
             *     logName: 'organizations/my-organization/logs/my-log',  // TODO:
             * Update placeholder value.
             *
             *     auth: authClient,
             *   };
             *
             *   logging.organizations.logs.delete(request, function(err) {
             *     if (err) {
             *       console.error(err);
             *       return;
             *     }
             *   });
             * });
             *
             * function authorize(callback) {
             *   google.auth.getApplicationDefault(function(err, authClient) {
             *     if (err) {
             *       console.error('authentication failed: ', err);
             *       return;
             *     }
             *     if (authClient.createScopedRequired &&
             * authClient.createScopedRequired()) { var scopes =
             * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
             * authClient.createScoped(scopes);
             *     }
             *     callback(authClient);
             *   });
             * }
             * @alias logging.organizations.logs.delete
             * @memberOf! logging(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.logName Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            delete: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{logName}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['logName'],
                    pathParams: ['logName'],
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
                var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{parent}/logs')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.projects =
        {
            logs: {
                /**
                 * logging.projects.logs.delete
                 * @desc Deletes all the log entries in a log. The log reappears if it
                 * receives new entries. Log entries written shortly before the delete
                 * operation might not be deleted.
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Stackdriver Logging API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/logging
                 * // 2. This sample uses Application Default Credentials for
                 * authentication.
                 * //    If not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk and run
                 * //    `gcloud beta auth application-default login`.
                 * //    For more information, see
                 * //
                 * https://developers.google.com/identity/protocols/application-default-credentials
                 * // 3. Install the Node.js client library by running
                 * //    `npm install googleapis --save`
                 *
                 * var google = require('googleapis');
                 * var logging = google.logging('v2beta1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // Required. The resource name of the log to delete:
                 *     // "projects/[PROJECT_ID]/logs/[LOG_ID]"
                 *     // "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
                 *     // "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
                 *     // "folders/[FOLDER_ID]/logs/[LOG_ID]"
                 *     // [LOG_ID] must be URL-encoded. For example,
                 * "projects/my-project-id/logs/syslog",
                 *     //
                 * "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity".
                 * For more
                 *     // information about log names, see LogEntry.
                 *     logName: 'projects/my-project/logs/my-log',  // TODO: Update
                 * placeholder value.
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   logging.projects.logs.delete(request, function(err) {
                 *     if (err) {
                 *       console.error(err);
                 *       return;
                 *     }
                 *   });
                 * });
                 *
                 * function authorize(callback) {
                 *   google.auth.getApplicationDefault(function(err, authClient) {
                 *     if (err) {
                 *       console.error('authentication failed: ', err);
                 *       return;
                 *     }
                 *     if (authClient.createScopedRequired &&
                 * authClient.createScopedRequired()) { var scopes =
                 * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
                 * authClient.createScoped(scopes);
                 *     }
                 *     callback(authClient);
                 *   });
                 * }
                 * @alias logging.projects.logs.delete
                 * @memberOf! logging(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.logName Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                delete: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{logName}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['logName'],
                        pathParams: ['logName'],
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
                    var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{parent}/logs')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            },
            metrics: {
                /**
                 * logging.projects.metrics.create
                 * @desc Creates a logs-based metric.
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Stackdriver Logging API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/logging
                 * // 2. This sample uses Application Default Credentials for
                 * authentication.
                 * //    If not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk and run
                 * //    `gcloud beta auth application-default login`.
                 * //    For more information, see
                 * //
                 * https://developers.google.com/identity/protocols/application-default-credentials
                 * // 3. Install the Node.js client library by running
                 * //    `npm install googleapis --save`
                 *
                 * var google = require('googleapis');
                 * var logging = google.logging('v2beta1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The resource name of the project in which to create the
                 * metric:
                 *     // "projects/[PROJECT_ID]"
                 *     // The new metric must be provided in the request.
                 *     parent: 'projects/my-project',  // TODO: Update placeholder
                 * value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   logging.projects.metrics.create(request, function(err, response)
                 * { if (err) { console.error(err); return;
                 *     }
                 *
                 *     // TODO: Change code below to process the `response` object:
                 *     console.log(JSON.stringify(response, null, 2));
                 *   });
                 * });
                 *
                 * function authorize(callback) {
                 *   google.auth.getApplicationDefault(function(err, authClient) {
                 *     if (err) {
                 *       console.error('authentication failed: ', err);
                 *       return;
                 *     }
                 *     if (authClient.createScopedRequired &&
                 * authClient.createScopedRequired()) { var scopes =
                 * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
                 * authClient.createScoped(scopes);
                 *     }
                 *     callback(authClient);
                 *   });
                 * }
                 * @alias logging.projects.metrics.create
                 * @memberOf! logging(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent The resource name of the project in which to create the metric: "projects/[PROJECT_ID]" The new metric must be provided in the request.
                 * @param {logging(v2beta1).LogMetric} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{parent}/metrics')
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
                    var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{metricName}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['metricName'],
                        pathParams: ['metricName'],
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
                    var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{metricName}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['metricName'],
                        pathParams: ['metricName'],
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
                    var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{parent}/metrics')
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
                update: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{metricName}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['metricName'],
                        pathParams: ['metricName'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            },
            sinks: {
                /**
                 * logging.projects.sinks.create
                 * @desc Creates a sink that exports specified log entries to a
                 * destination. The export of newly-ingested log entries begins
                 * immediately, unless the sink's writer_identity is not permitted to
                 * write to the destination. A sink can export log entries only from
                 * the resource owning the sink.
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Stackdriver Logging API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/logging
                 * // 2. This sample uses Application Default Credentials for
                 * authentication.
                 * //    If not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk and run
                 * //    `gcloud beta auth application-default login`.
                 * //    For more information, see
                 * //
                 * https://developers.google.com/identity/protocols/application-default-credentials
                 * // 3. Install the Node.js client library by running
                 * //    `npm install googleapis --save`
                 *
                 * var google = require('googleapis');
                 * var logging = google.logging('v2beta1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // Required. The resource in which to create the sink:
                 *     // "projects/[PROJECT_ID]"
                 *     // "organizations/[ORGANIZATION_ID]"
                 *     // "billingAccounts/[BILLING_ACCOUNT_ID]"
                 *     // "folders/[FOLDER_ID]"
                 *     // Examples: "projects/my-logging-project",
                 * "organizations/123456789". parent: 'projects/my-project',  // TODO:
                 * Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   logging.projects.sinks.create(request, function(err, response) {
                 *     if (err) {
                 *       console.error(err);
                 *       return;
                 *     }
                 *
                 *     // TODO: Change code below to process the `response` object:
                 *     console.log(JSON.stringify(response, null, 2));
                 *   });
                 * });
                 *
                 * function authorize(callback) {
                 *   google.auth.getApplicationDefault(function(err, authClient) {
                 *     if (err) {
                 *       console.error('authentication failed: ', err);
                 *       return;
                 *     }
                 *     if (authClient.createScopedRequired &&
                 * authClient.createScopedRequired()) { var scopes =
                 * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
                 * authClient.createScoped(scopes);
                 *     }
                 *     callback(authClient);
                 *   });
                 * }
                 * @alias logging.projects.sinks.create
                 * @memberOf! logging(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
                 * @param {boolean=} params.uniqueWriterIdentity Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Stackdriver Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
                 * @param {logging(v2beta1).LogSink} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{parent}/sinks')
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
                    var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{sinkName}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['sinkName'],
                        pathParams: ['sinkName'],
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
                    var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{sinkName}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['sinkName'],
                        pathParams: ['sinkName'],
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
                    var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{parent}/sinks')
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
                update: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{sinkName}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['sinkName'],
                        pathParams: ['sinkName'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            }
        };
}
module.exports = Logging;
//# sourceMappingURL=v2beta1.js.map