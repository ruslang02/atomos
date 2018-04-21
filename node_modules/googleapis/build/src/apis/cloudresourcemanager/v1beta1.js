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
 * Google Cloud Resource Manager API
 *
 * The Google Cloud Resource Manager API provides methods for creating, reading,
 * and updating project metadata.
 *
 * @example
 * const google = require('googleapis');
 * const cloudresourcemanager = google.cloudresourcemanager('v1beta1');
 *
 * @namespace cloudresourcemanager
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Cloudresourcemanager
 */
function Cloudresourcemanager(options) {
    var self = this;
    self._options = options || {};
    self.organizations = {
        /**
         * cloudresourcemanager.organizations.get
         * @desc Fetches an Organization resource identified by the specified
         * resource name.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
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
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The resource name of the Organization to fetch, e.g.
         * "organizations/1234". name: 'organizations/my-organization',  // TODO:
         * Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   cloudResourceManager.organizations.get(request, function(err, response)
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
         * @alias cloudresourcemanager.organizations.get
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name of the Organization to fetch, e.g. "organizations/1234".
         * @param {string=} params.organizationId The id of the Organization resource to fetch. This field is deprecated and will be removed in v1. Use name instead.
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
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        getIamPolicy: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{resource}:getIamPolicy')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['resource'],
                pathParams: ['resource'],
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
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/organizations')
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
        setIamPolicy: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{resource}:setIamPolicy')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['resource'],
                pathParams: ['resource'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        testIamPermissions: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{resource}:testIamPermissions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['resource'],
                pathParams: ['resource'],
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
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
    self.projects = {
        /**
         * cloudresourcemanager.projects.create
         * @desc Creates a Project resource.  Initially, the Project resource is
         * owned by its creator exclusively. The creator can later grant permission
         * to others to read or update the Project.  Several APIs are activated
         * automatically for the Project, including Google Cloud Storage.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
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
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
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
         *   cloudResourceManager.projects.create(request, function(err, response) {
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
         * @alias cloudresourcemanager.projects.create
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.useLegacyStack A safety hatch to opt out of the new reliable project creation process.
         * @param {cloudresourcemanager(v1beta1).Project} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/projects').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/projects/{projectId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
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
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/projects/{projectId}')
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
        getAncestry: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/projects/{projectId}:getAncestry')
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
        getIamPolicy: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/projects/{resource}:getIamPolicy')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['resource'],
                pathParams: ['resource'],
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
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/projects').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        setIamPolicy: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/projects/{resource}:setIamPolicy')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['resource'],
                pathParams: ['resource'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        testIamPermissions: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/projects/{resource}:testIamPermissions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['resource'],
                pathParams: ['resource'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        undelete: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/projects/{projectId}:undelete')
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
        update: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/projects/{projectId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Cloudresourcemanager;
//# sourceMappingURL=v1beta1.js.map