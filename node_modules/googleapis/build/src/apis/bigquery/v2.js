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
 * BigQuery API
 *
 * A data platform for customers to create, manage, share and query data.
 *
 * @example
 * const google = require('googleapis');
 * const bigquery = google.bigquery('v2');
 *
 * @namespace bigquery
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Bigquery
 */
function Bigquery(options) {
    var self = this;
    self._options = options || {};
    self.datasets = {
        /**
         * bigquery.datasets.delete
         * @desc Deletes the dataset specified by the datasetId value. Before you
         * can delete a dataset, you must delete all its tables, either manually or
         * by specifying deleteContents. Immediately after deletion, you can create
         * another dataset with the same name.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
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
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the dataset being deleted
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // Dataset ID of dataset being deleted
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.datasets.delete(request, function(err) {
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
         * @alias bigquery.datasets.delete
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId Dataset ID of dataset being deleted
         * @param {boolean=} params.deleteContents If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False
         * @param {string} params.projectId Project ID of the dataset being deleted
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/bigquery/v2/projects/{projectId}/datasets/{datasetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId'],
                pathParams: ['datasetId', 'projectId'],
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
                        '/bigquery/v2/projects/{projectId}/datasets/{datasetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId'],
                pathParams: ['datasetId', 'projectId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        insert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/datasets')
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
        list: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/datasets')
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
                        '/bigquery/v2/projects/{projectId}/datasets/{datasetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId'],
                pathParams: ['datasetId', 'projectId'],
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/bigquery/v2/projects/{projectId}/datasets/{datasetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId'],
                pathParams: ['datasetId', 'projectId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.jobs = {
        /**
         * bigquery.jobs.cancel
         * @desc Requests that a job be cancelled. This call will return
         * immediately, and the client will need to poll for the job status to see
         * if the cancel completed successfully. Cancelled jobs may still incur
         * costs.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
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
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // [Required] Project ID of the job to cancel
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // [Required] Job ID of the job to cancel
         *     jobId: 'my-job-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.jobs.cancel(request, function(err, response) {
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
         * @alias bigquery.jobs.cancel
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.jobId [Required] Job ID of the job to cancel
         * @param {string} params.projectId [Required] Project ID of the job to cancel
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/bigquery/v2/projects/{projectId}/jobs/{jobId}/cancel')
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
        get: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/jobs/{jobId}')
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
        getQueryResults: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/bigquery/v2/projects/{projectId}/queries/{jobId}')
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
        insert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/jobs')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                mediaUrl: (rootUrl + '/upload/bigquery/v2/projects/{projectId}/jobs')
                    .replace(/([^:]\/)\/+/g, '$1'),
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
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
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/jobs')
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
        query: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/queries')
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
    };
    self.projects = {
        /**
         * bigquery.projects.getServiceAccount
         * @desc Returns the email address of the service account for your project
         * used for interactions with Google Cloud KMS.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
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
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for which the service account is requested.
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.projects.getServiceAccount(request, function(err, response) {
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
         * @alias bigquery.projects.getServiceAccount
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId Project ID for which the service account is requested.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getServiceAccount: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/serviceAccount')
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
        list: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/bigquery/v2/projects')
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
    self.tabledata = {
        /**
         * bigquery.tabledata.insertAll
         * @desc Streams data into BigQuery one record at a time without needing to
         * run a load job. Requires the WRITER dataset role.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
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
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the destination table.
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // Dataset ID of the destination table.
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     // Table ID of the destination table.
         *     tableId: 'my-table-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.tabledata.insertAll(request, function(err, response) {
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
         * @alias bigquery.tabledata.insertAll
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId Dataset ID of the destination table.
         * @param {string} params.projectId Project ID of the destination table.
         * @param {string} params.tableId Table ID of the destination table.
         * @param {bigquery(v2).TableDataInsertAllRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insertAll: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/insertAll')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId', 'tableId'],
                pathParams: ['datasetId', 'projectId', 'tableId'],
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
                        '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/data')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId', 'tableId'],
                pathParams: ['datasetId', 'projectId', 'tableId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.tables = {
        /**
         * bigquery.tables.delete
         * @desc Deletes the table specified by tableId from the dataset. If the
         * table contains data, all the data will be deleted.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
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
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the table to delete
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // Dataset ID of the table to delete
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     // Table ID of the table to delete
         *     tableId: 'my-table-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.tables.delete(request, function(err) {
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
         * @alias bigquery.tables.delete
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId Dataset ID of the table to delete
         * @param {string} params.projectId Project ID of the table to delete
         * @param {string} params.tableId Table ID of the table to delete
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId', 'tableId'],
                pathParams: ['datasetId', 'projectId', 'tableId'],
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
                        '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId', 'tableId'],
                pathParams: ['datasetId', 'projectId', 'tableId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        insert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId'],
                pathParams: ['datasetId', 'projectId'],
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
                        '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId'],
                pathParams: ['datasetId', 'projectId'],
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
                        '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId', 'tableId'],
                pathParams: ['datasetId', 'projectId', 'tableId'],
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId', 'tableId'],
                pathParams: ['datasetId', 'projectId', 'tableId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Bigquery;
//# sourceMappingURL=v2.js.map