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
 * Google Cloud Runtime Configuration API
 *
 * The Runtime Configurator allows you to dynamically configure and expose
 * variables through Google Cloud Platform. In addition, you can also set
 * Watchers and Waiters that will watch for changes to your data and return
 * based on certain conditions.
 *
 * @example
 * const google = require('googleapis');
 * const runtimeconfig = google.runtimeconfig('v1');
 *
 * @namespace runtimeconfig
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Runtimeconfig
 */
function Runtimeconfig(options) {
    var self = this;
    self._options = options || {};
    self.operations = {
        /**
         * runtimeconfig.operations.cancel
         * @desc Starts asynchronous cancellation on a long-running operation.  The
         * server makes a best effort to cancel the operation, but success is not
         * guaranteed.  If the server doesn't support this method, it returns
         * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation
         * or other methods to check whether the cancellation succeeded or whether
         * the operation completed despite cancellation. On successful cancellation,
         * the operation is not deleted; instead, it becomes an operation with an
         * Operation.error value with a google.rpc.Status.code of 1, corresponding
         * to `Code.CANCELLED`.
         * @alias runtimeconfig.operations.cancel
         * @memberOf! runtimeconfig(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be cancelled.
         * @param {runtimeconfig(v1).CancelOperationRequest} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
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
        delete: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
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
        list: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
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
}
module.exports = Runtimeconfig;
//# sourceMappingURL=v1.js.map