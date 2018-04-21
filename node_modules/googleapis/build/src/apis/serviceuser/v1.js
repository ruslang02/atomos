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
 * Google Service User API
 *
 * Enables services that service consumers want to use on Google Cloud Platform,
 * lists the available or enabled services, or disables services that service
 * consumers no longer use.
 *
 * @example
 * const google = require('googleapis');
 * const serviceuser = google.serviceuser('v1');
 *
 * @namespace serviceuser
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Serviceuser
 */
function Serviceuser(options) {
    var self = this;
    self._options = options || {};
    self.projects = {
        services: {
            /**
             * serviceuser.projects.services.disable
             * @desc Disable a service so it can no longer be used with a project.
             * This prevents unintended usage that may cause unexpected billing
             * charges or security leaks.  Operation<response: google.protobuf.Empty>
             * @alias serviceuser.projects.services.disable
             * @memberOf! serviceuser(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Name of the consumer and the service to disable for that consumer.  The Service User implementation accepts the following forms for consumer: - "project:<project_id>"  A valid path would be: - /v1/projects/my-project/services/servicemanagement.googleapis.com:disable
             * @param {serviceuser(v1).DisableServiceRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            disable: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://serviceuser.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}:disable')
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
            enable: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://serviceuser.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}:enable')
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
                var rootUrl = options.rootUrl || 'https://serviceuser.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{parent}/services')
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
    self.services = {
        /**
         * serviceuser.services.search
         * @desc Search available services.  When no filter is specified, returns
         * all accessible services. For authenticated users, also returns all
         * services the calling user has "servicemanagement.services.bind"
         * permission for.
         * @alias serviceuser.services.search
         * @memberOf! serviceuser(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize Requested size of the next page of data.
         * @param {string=} params.pageToken Token identifying which result to start with; returned by a previous list call.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://serviceuser.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services:search')
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
module.exports = Serviceuser;
//# sourceMappingURL=v1.js.map