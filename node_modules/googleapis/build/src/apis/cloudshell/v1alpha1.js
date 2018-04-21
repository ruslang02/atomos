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
 * Cloud Shell API
 *
 * Allows users to start, configure, and connect to interactive shell sessions
 * running in the cloud.
 *
 * @example
 * const google = require('googleapis');
 * const cloudshell = google.cloudshell('v1alpha1');
 *
 * @namespace cloudshell
 * @type {Function}
 * @version v1alpha1
 * @variation v1alpha1
 * @param {object=} options Options for Cloudshell
 */
function Cloudshell(options) {
    var self = this;
    self._options = options || {};
    self.users = {
        environments: {
            /**
             * cloudshell.users.environments.get
             * @desc Gets an environment. Returns NOT_FOUND if the environment does
             * not exist.
             * @alias cloudshell.users.environments.get
             * @memberOf! cloudshell(v1alpha1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Name of the requested resource, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.
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
                var rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha1/{name}')
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
            patch: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha1/{name}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            start: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha1/{name}:start')
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
            publicKeys: {
                /**
                 * cloudshell.users.environments.publicKeys.create
                 * @desc Adds a public SSH key to an environment, allowing clients with
                 * the corresponding private key to connect to that environment via SSH.
                 * If a key with the same format and content already exists, this will
                 * return the existing key.
                 * @alias cloudshell.users.environments.publicKeys.create
                 * @memberOf! cloudshell(v1alpha1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent Parent resource name, e.g. `users/me/environments/default`.
                 * @param {cloudshell(v1alpha1).CreatePublicKeyRequest} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1alpha1/{parent}/publicKeys')
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
                    var rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1alpha1/{name}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
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
}
module.exports = Cloudshell;
//# sourceMappingURL=v1alpha1.js.map