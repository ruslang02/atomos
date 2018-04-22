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
 * Google Cloud Billing API
 *
 * Allows developers to manage billing for their Google Cloud Platform projects
 * programmatically.
 *
 * @example
 * const google = require('googleapis');
 * const cloudbilling = google.cloudbilling('v1');
 *
 * @namespace cloudbilling
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Cloudbilling
 */
function Cloudbilling(options) {
    var self = this;
    self._options = options || {};
    self.billingAccounts = {
        /**
         * cloudbilling.billingAccounts.get
         * @desc Gets information about a billing account. The current authenticated
         * user must be an [owner of the billing
         * account](https://support.google.com/cloud/answer/4430947).
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Billing API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudbilling
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
         * var cloudbilling = google.cloudbilling('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The resource name of the billing account to retrieve. For example,
         *     // `billingAccounts/012345-567890-ABCDEF`.
         *     name: 'billingAccounts/my-billing-account',  // TODO: Update
         * placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   cloudbilling.billingAccounts.get(request, function(err, response) {
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
         * @alias cloudbilling.billingAccounts.get
         * @memberOf! cloudbilling(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name of the billing account to retrieve. For example, `billingAccounts/012345-567890-ABCDEF`.
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
            var rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/billingAccounts')
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
        projects: {
            /**
             * cloudbilling.billingAccounts.projects.list
             * @desc Lists the projects associated with a billing account. The current
             * authenticated user must have the "billing.resourceAssociations.list"
             * IAM permission, which is often given to billing account
             * [viewers](https://support.google.com/cloud/answer/4430947).
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Google Cloud Billing API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/cloudbilling
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
             * var cloudbilling = google.cloudbilling('v1');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The resource name of the billing account associated with the
             * projects that
             *     // you want to list. For example,
             * `billingAccounts/012345-567890-ABCDEF`. name:
             * 'billingAccounts/my-billing-account',  // TODO: Update placeholder
             * value.
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
             *     var projectBillingInfoPage = response['projectBillingInfo'];
             *     if (!projectBillingInfoPage) {
             *       return;
             *     }
             *     for (var i = 0; i < projectBillingInfoPage.length; i++) {
             *       // TODO: Change code below to process each resource in
             * `projectBillingInfoPage`:
             *       console.log(JSON.stringify(projectBillingInfoPage[i], null, 2));
             *     }
             *
             *     if (response.nextPageToken) {
             *       request.pageToken = response.nextPageToken;
             *       cloudbilling.billingAccounts.projects.list(request, handlePage);
             *     }
             *   };
             *
             *   cloudbilling.billingAccounts.projects.list(request, handlePage);
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
             * @alias cloudbilling.billingAccounts.projects.list
             * @memberOf! cloudbilling(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The resource name of the billing account associated with the projects that you want to list. For example, `billingAccounts/012345-567890-ABCDEF`.
             * @param {integer=} params.pageSize Requested page size. The maximum page size is 100; this is also the default.
             * @param {string=} params.pageToken A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous `ListProjectBillingInfo` call. If unspecified, the first page of results is returned.
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
                var rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}/projects')
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
    };
    self.projects = {
        /**
         * cloudbilling.projects.getBillingInfo
         * @desc Gets the billing information for a project. The current
         * authenticated user must have [permission to view the
         * project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
         * ).
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Billing API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudbilling
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
         * var cloudbilling = google.cloudbilling('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The resource name of the project for which billing information is
         *     // retrieved. For example, `projects/tokyo-rain-123`.
         *     name: 'projects/my-project',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   cloudbilling.projects.getBillingInfo(request, function(err, response) {
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
         * @alias cloudbilling.projects.getBillingInfo
         * @memberOf! cloudbilling(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name of the project for which billing information is retrieved. For example, `projects/tokyo-rain-123`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getBillingInfo: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{name}/billingInfo')
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
        updateBillingInfo: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{name}/billingInfo')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.services = {
        /**
         * cloudbilling.services.list
         * @desc Lists all public cloud services.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Billing API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudbilling
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
         * var cloudbilling = google.cloudbilling('v1');
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
         *     var servicesPage = response['services'];
         *     if (!servicesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < servicesPage.length; i++) {
         *       // TODO: Change code below to process each resource in
         * `servicesPage`: console.log(JSON.stringify(servicesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       cloudbilling.services.list(request, handlePage);
         *     }
         *   };
         *
         *   cloudbilling.services.list(request, handlePage);
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
         * @alias cloudbilling.services.list
         * @memberOf! cloudbilling(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize Requested page size. Defaults to 5000.
         * @param {string=} params.pageToken A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListServices` call. If unspecified, the first page of results is returned.
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
            var rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        skus: {
            /**
             * cloudbilling.services.skus.list
             * @desc Lists all publicly available SKUs for a given cloud service.
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Google Cloud Billing API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/cloudbilling
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
             * var cloudbilling = google.cloudbilling('v1');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The name of the service.
             *     // Example: "services/DA34-426B-A397"
             *     parent: 'services/my-service',  // TODO: Update placeholder value.
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
             *     var skusPage = response['skus'];
             *     if (!skusPage) {
             *       return;
             *     }
             *     for (var i = 0; i < skusPage.length; i++) {
             *       // TODO: Change code below to process each resource in
             * `skusPage`: console.log(JSON.stringify(skusPage[i], null, 2));
             *     }
             *
             *     if (response.nextPageToken) {
             *       request.pageToken = response.nextPageToken;
             *       cloudbilling.services.skus.list(request, handlePage);
             *     }
             *   };
             *
             *   cloudbilling.services.skus.list(request, handlePage);
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
             * @alias cloudbilling.services.skus.list
             * @memberOf! cloudbilling(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.currencyCode The ISO 4217 currency code for the pricing info in the response proto. Will use the conversion rate as of start_time. Optional. If not specified USD will be used.
             * @param {string=} params.endTime Optional exclusive end time of the time range for which the pricing versions will be returned. Timestamps in the future are not allowed. The time range has to be within a single calendar month in America/Los_Angeles timezone. Time range as a whole is optional. If not specified, the latest pricing will be returned (up to 12 hours old at most).
             * @param {integer=} params.pageSize Requested page size. Defaults to 5000.
             * @param {string=} params.pageToken A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListSkus` call. If unspecified, the first page of results is returned.
             * @param {string} params.parent The name of the service. Example: "services/DA34-426B-A397"
             * @param {string=} params.startTime Optional inclusive start time of the time range for which the pricing versions will be returned. Timestamps in the future are not allowed. The time range has to be within a single calendar month in America/Los_Angeles timezone. Time range as a whole is optional. If not specified, the latest pricing will be returned (up to 12 hours old at most).
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
                var rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{parent}/skus')
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
}
module.exports = Cloudbilling;
//# sourceMappingURL=v1.js.map