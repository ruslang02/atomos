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
 * Google Apps Script API
 *
 * An API for managing and executing Google Apps Script projects.
 *
 * @example
 * const google = require('googleapis');
 * const script = google.script('v1');
 *
 * @namespace script
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Script
 */
function Script(options) {
    var self = this;
    self._options = options || {};
    self.processes = {
        /**
         * script.processes.list
         * @desc List information about processes made by or on behalf of a user,
         * such as process type and current status.
         * @alias script.processes.list
         * @memberOf! script(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of returned processes per page of results. Defaults to 50.
         * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
         * @param {string=} params.userProcessFilter.deploymentId Optional field used to limit returned processes to those originating from projects with a specific deployment ID.
         * @param {string=} params.userProcessFilter.endTime Optional field used to limit returned processes to those that completed on or before the given timestamp.
         * @param {string=} params.userProcessFilter.functionName Optional field used to limit returned processes to those originating from a script function with the given function name.
         * @param {string=} params.userProcessFilter.projectName Optional field used to limit returned processes to those originating from projects with a specific project name.
         * @param {string=} params.userProcessFilter.scriptId Optional field used to limit returned processes to those originating from projects with a specific script ID.
         * @param {string=} params.userProcessFilter.startTime Optional field used to limit returned processes to those that were started on or after the given timestamp.
         * @param {string=} params.userProcessFilter.statuses Optional field used to limit returned processes to those having one of the specified process statuses.
         * @param {string=} params.userProcessFilter.types Optional field used to limit returned processes to those having one of the specified process types.
         * @param {string=} params.userProcessFilter.userAccessLevels Optional field used to limit returned processes to those having one of the specified user access levels.
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
            var rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/processes').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        listScriptProcesses: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/processes:listScriptProcesses')
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
    self.projects = {
        /**
         * script.projects.create
         * @desc Creates a new, empty script project with no script files and a base
         * manifest file.
         * @alias script.projects.create
         * @memberOf! script(v1)
         *
         * @param {object} params Parameters for request
         * @param {script(v1).CreateProjectRequest} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/projects').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
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
            var rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/projects/{scriptId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['scriptId'],
                pathParams: ['scriptId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        getContent: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/projects/{scriptId}/content')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['scriptId'],
                pathParams: ['scriptId'],
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
            var rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/projects/{scriptId}/metrics')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['scriptId'],
                pathParams: ['scriptId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        updateContent: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/projects/{scriptId}/content')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['scriptId'],
                pathParams: ['scriptId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        deployments: {
            /**
             * script.projects.deployments.create
             * @desc Creates a deployment of an Apps Script project.
             * @alias script.projects.deployments.create
             * @memberOf! script(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.scriptId The script project's Drive ID.
             * @param {script(v1).DeploymentConfig} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://script.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{scriptId}/deployments')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['scriptId'],
                    pathParams: ['scriptId'],
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
                var rootUrl = options.rootUrl || 'https://script.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v1/projects/{scriptId}/deployments/{deploymentId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['scriptId', 'deploymentId'],
                    pathParams: ['deploymentId', 'scriptId'],
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
                var rootUrl = options.rootUrl || 'https://script.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v1/projects/{scriptId}/deployments/{deploymentId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['scriptId', 'deploymentId'],
                    pathParams: ['deploymentId', 'scriptId'],
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
                var rootUrl = options.rootUrl || 'https://script.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{scriptId}/deployments')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['scriptId'],
                    pathParams: ['scriptId'],
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
                var rootUrl = options.rootUrl || 'https://script.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v1/projects/{scriptId}/deployments/{deploymentId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['scriptId', 'deploymentId'],
                    pathParams: ['deploymentId', 'scriptId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        versions: {
            /**
             * script.projects.versions.create
             * @desc Creates a new immutable version using the current code, with a
             * unique version number.
             * @alias script.projects.versions.create
             * @memberOf! script(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.scriptId The script project's Drive ID.
             * @param {script(v1).Version} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://script.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{scriptId}/versions')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['scriptId'],
                    pathParams: ['scriptId'],
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
                var rootUrl = options.rootUrl || 'https://script.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v1/projects/{scriptId}/versions/{versionNumber}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['scriptId', 'versionNumber'],
                    pathParams: ['scriptId', 'versionNumber'],
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
                var rootUrl = options.rootUrl || 'https://script.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{scriptId}/versions')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['scriptId'],
                    pathParams: ['scriptId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.scripts = {
        /**
         * script.scripts.run
         * @desc Runs a function in an Apps Script project. The project must be
         * deployed for use with the Apps Script API.  This method requires
         * authorization with an OAuth 2.0 token that includes at least one of the
         * scopes listed in the [Authorization](#authorization) section; script
         * projects that do not require authorization cannot be executed through
         * this API. To find the correct scopes to include in the authentication
         * token, open the project in the script editor, then select **File >
         * Project properties** and click the **Scopes** tab.
         * @alias script.scripts.run
         * @memberOf! script(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.scriptId The script ID of the script to be executed. To find the script ID, open the project in the script editor and select **File > Project properties**.
         * @param {script(v1).ExecutionRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        run: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/scripts/{scriptId}:run')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['scriptId'],
                pathParams: ['scriptId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Script;
//# sourceMappingURL=v1.js.map