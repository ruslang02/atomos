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
 * Google Cloud Container Builder API
 *
 * Builds container images in the cloud.
 *
 * @example
 * const google = require('googleapis');
 * const cloudbuild = google.cloudbuild('v1');
 *
 * @namespace cloudbuild
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Cloudbuild
 */
function Cloudbuild(options) {
    var self = this;
    self._options = options || {};
    self.operations = {
        /**
         * cloudbuild.operations.cancel
         * @desc Starts asynchronous cancellation on a long-running operation.  The
         * server makes a best effort to cancel the operation, but success is not
         * guaranteed.  If the server doesn't support this method, it returns
         * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation
         * or other methods to check whether the cancellation succeeded or whether
         * the operation completed despite cancellation. On successful cancellation,
         * the operation is not deleted; instead, it becomes an operation with an
         * Operation.error value with a google.rpc.Status.code of 1, corresponding
         * to `Code.CANCELLED`.
         * @alias cloudbuild.operations.cancel
         * @memberOf! cloudbuild(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be cancelled.
         * @param {cloudbuild(v1).CancelOperationRequest} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
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
            var rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
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
            var rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
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
        }
    };
    self.projects = {
        builds: {
            /**
             * cloudbuild.projects.builds.cancel
             * @desc Cancels a requested build in progress.
             * @alias cloudbuild.projects.builds.cancel
             * @memberOf! cloudbuild(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.id ID of the build.
             * @param {string} params.projectId ID of the project.
             * @param {cloudbuild(v1).CancelBuildRequest} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/builds/{id}:cancel')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'id'],
                    pathParams: ['id', 'projectId'],
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
                var rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/builds')
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
                var rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/builds/{id}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'id'],
                    pathParams: ['id', 'projectId'],
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
                var rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/builds')
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
            retry: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/builds/{id}:retry')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'id'],
                    pathParams: ['id', 'projectId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        triggers: {
            /**
             * cloudbuild.projects.triggers.create
             * @desc Creates a new BuildTrigger.  This API is experimental.
             * @alias cloudbuild.projects.triggers.create
             * @memberOf! cloudbuild(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId ID of the project for which to configure automatic builds.
             * @param {cloudbuild(v1).BuildTrigger} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/triggers')
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
            delete: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/triggers/{triggerId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'triggerId'],
                    pathParams: ['projectId', 'triggerId'],
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
                var rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/triggers/{triggerId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'triggerId'],
                    pathParams: ['projectId', 'triggerId'],
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
                var rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/triggers')
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
                var rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/triggers/{triggerId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'triggerId'],
                    pathParams: ['projectId', 'triggerId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            run: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v1/projects/{projectId}/triggers/{triggerId}:run')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'triggerId'],
                    pathParams: ['projectId', 'triggerId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
}
module.exports = Cloudbuild;
//# sourceMappingURL=v1.js.map