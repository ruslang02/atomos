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
 * Firebase Rules API
 *
 * Creates and manages rules that determine when a Firebase Rules-enabled
 * service should permit a request.
 *
 * @example
 * const google = require('googleapis');
 * const firebaserules = google.firebaserules('v1');
 *
 * @namespace firebaserules
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Firebaserules
 */
function Firebaserules(options) {
    var self = this;
    self._options = options || {};
    self.projects = {
        /**
         * firebaserules.projects.test
         * @desc Test `Source` for syntactic and semantic correctness. Issues
         * present, if any, will be returned to the caller with a description,
         * severity, and source location.  The test method may be executed with
         * `Source` or a `Ruleset` name. Passing `Source` is useful for unit testing
         * new rules. Passing a `Ruleset` name is useful for regression testing an
         * existing rule.  The following is an example of `Source` that permits
         * users to upload images to a bucket bearing their user id and matching the
         * correct metadata:  _*Example*_      // Users are allowed to subscribe and
         * unsubscribe to the blog.     service firebase.storage {       match
         * /users/{userId}/images/{imageName} {           allow write: if userId ==
         * request.auth.uid               && (imageName.matches('*.png$')
         * || imageName.matches('*.jpg$'))               &&
         * resource.mimeType.matches('^image/')       }     }
         * @alias firebaserules.projects.test
         * @memberOf! firebaserules(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Tests may either provide `source` or a `Ruleset` resource name.  For tests against `source`, the resource name must refer to the project: Format: `projects/{project_id}`  For tests against a `Ruleset`, this must be the `Ruleset` resource name: Format: `projects/{project_id}/rulesets/{ruleset_id}`
         * @param {firebaserules(v1).TestRulesetRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        test: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{name}:test').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        releases: {
            /**
             * firebaserules.projects.releases.create
             * @desc Create a `Release`.  Release names should reflect the developer's
             * deployment practices. For example, the release name may include the
             * environment name, application name, application version, or any other
             * name meaningful to the developer. Once a `Release` refers to a
             * `Ruleset`, the rules can be enforced by Firebase Rules-enabled
             * services.  More than one `Release` may be 'live' concurrently. Consider
             * the following three `Release` names for `projects/foo` and the
             * `Ruleset` to which they refer.  Release Name                    |
             * Ruleset Name --------------------------------|-------------
             * projects/foo/releases/prod      | projects/foo/rulesets/uuid123
             * projects/foo/releases/prod/beta | projects/foo/rulesets/uuid123
             * projects/foo/releases/prod/v23  | projects/foo/rulesets/uuid456  The
             * table reflects the `Ruleset` rollout in progress. The `prod` and
             * `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23`
             * refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may
             * be updated using the UpdateRelease method.
             * @alias firebaserules.projects.releases.create
             * @memberOf! firebaserules(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Resource name for the project which owns this `Release`.  Format: `projects/{project_id}`
             * @param {firebaserules(v1).Release} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}/releases')
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
                var rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
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
                var rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
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
            getExecutable: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}:getExecutable')
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
            list: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}/releases')
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
                var rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        rulesets: {
            /**
             * firebaserules.projects.rulesets.create
             * @desc Create a `Ruleset` from `Source`.  The `Ruleset` is given a
             * unique generated name which is returned to the caller. `Source`
             * containing syntactic or semantics errors will result in an error
             * response indicating the first error encountered. For a detailed view of
             * `Source` issues, use TestRuleset.
             * @alias firebaserules.projects.rulesets.create
             * @memberOf! firebaserules(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Resource name for Project which owns this `Ruleset`.  Format: `projects/{project_id}`
             * @param {firebaserules(v1).Ruleset} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}/rulesets')
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
                var rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
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
                var rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
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
                var rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}/rulesets')
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
}
module.exports = Firebaserules;
//# sourceMappingURL=v1.js.map