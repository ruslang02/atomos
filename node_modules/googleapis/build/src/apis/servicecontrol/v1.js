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
 * Google Service Control API
 *
 * Google Service Control provides control plane functionality to managed
 * services, such as logging, monitoring, and status checks.
 *
 * @example
 * const google = require('googleapis');
 * const servicecontrol = google.servicecontrol('v1');
 *
 * @namespace servicecontrol
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Servicecontrol
 */
function Servicecontrol(options) {
    var self = this;
    self._options = options || {};
    self.services = {
        /**
         * servicecontrol.services.allocateQuota
         * @desc Attempts to allocate quota for the specified consumer. It should be
         * called before the operation is executed.  This method requires the
         * `servicemanagement.services.quota` permission on the specified service.
         * For more information, see [Cloud IAM](https://cloud.google.com/iam).
         * **NOTE:** The client **must** fail-open on server errors `INTERNAL`,
         * `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system
         * reliability, the server may inject these errors to prohibit any hard
         * dependency on the quota functionality.
         * @alias servicecontrol.services.allocateQuota
         * @memberOf! servicecontrol(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.serviceName Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
         * @param {servicecontrol(v1).AllocateQuotaRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        allocateQuota: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}:allocateQuota')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        check: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}:check')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        endReconciliation: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}:endReconciliation')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        releaseQuota: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}:releaseQuota')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        report: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}:report')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        startReconciliation: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}:startReconciliation')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Servicecontrol;
//# sourceMappingURL=v1.js.map