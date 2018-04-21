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
 * Cloud Source Repositories API
 *
 * Access source code repositories hosted by Google.
 *
 * @example
 * const google = require('googleapis');
 * const sourcerepo = google.sourcerepo('v1');
 *
 * @namespace sourcerepo
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Sourcerepo
 */
function Sourcerepo(options) {
    var self = this;
    self._options = options || {};
    self.projects = {
        repos: {
            /**
             * sourcerepo.projects.repos.create
             * @desc Creates a repo in the given project with the given name.  If the
             * named repository already exists, `CreateRepo` returns `ALREADY_EXISTS`.
             * @alias sourcerepo.projects.repos.create
             * @memberOf! sourcerepo(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent The project in which to create the repo. Values are of the form `projects/<project>`.
             * @param {sourcerepo(v1).Repo} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{parent}/repos')
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
                var rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                var rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
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
            getIamPolicy: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{resource}:getIamPolicy')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
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
                var rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}/repos')
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
            setIamPolicy: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{resource}:setIamPolicy')
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
                var rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{resource}:testIamPermissions')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['resource'],
                    pathParams: ['resource'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
}
module.exports = Sourcerepo;
//# sourceMappingURL=v1.js.map