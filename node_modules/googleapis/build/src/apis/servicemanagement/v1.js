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
 * Google Service Management API
 *
 * Google Service Management allows service producers to publish their services
 * on Google Cloud Platform so that they can be discovered and used by service
 * consumers.
 *
 * @example
 * const google = require('googleapis');
 * const servicemanagement = google.servicemanagement('v1');
 *
 * @namespace servicemanagement
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Servicemanagement
 */
function Servicemanagement(options) {
    var self = this;
    self._options = options || {};
    self.operations = {
        /**
         * servicemanagement.operations.get
         * @desc Gets the latest state of a long-running operation.  Clients can use
         * this method to poll the operation result at intervals as recommended by
         * the API service.
         * @alias servicemanagement.operations.get
         * @memberOf! servicemanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource.
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
            var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
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
            var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/operations').replace(/([^:]\/)\/+/g, '$1'),
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
    self.services = {
        /**
         * servicemanagement.services.create
         * @desc Creates a new managed service. Please note one producer project can
         * own no more than 20 services.  Operation<response: ManagedService>
         * @alias servicemanagement.services.create
         * @memberOf! servicemanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {servicemanagement(v1).ManagedService} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        disable: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}:disable')
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
        enable: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}:enable')
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
        generateConfigReport: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services:generateConfigReport')
                        .replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        getConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}/config')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
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
            var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{resource}:getIamPolicy')
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
            var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
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
        setIamPolicy: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
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
            var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
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
        },
        undelete: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}:undelete')
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
        configs: {
            /**
             * servicemanagement.services.configs.create
             * @desc Creates a new service configuration (version) for a managed
             * service. This method only stores the service configuration. To roll out
             * the service configuration to backend systems please call
             * CreateServiceRollout.
             * @alias servicemanagement.services.configs.create
             * @memberOf! servicemanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
             * @param {servicemanagement(v1).Service} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/services/{serviceName}/configs')
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
            get: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/services/{serviceName}/configs/{configId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['serviceName', 'configId'],
                    pathParams: ['configId', 'serviceName'],
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
                var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/services/{serviceName}/configs')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['serviceName'],
                    pathParams: ['serviceName'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            submit: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/services/{serviceName}/configs:submit')
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
        },
        consumers: {
            /**
             * servicemanagement.services.consumers.getIamPolicy
             * @desc Gets the access control policy for a resource. Returns an empty
             * policy if the resource exists and does not have a policy set.
             * @alias servicemanagement.services.consumers.getIamPolicy
             * @memberOf! servicemanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
             * @param {servicemanagement(v1).GetIamPolicyRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            getIamPolicy: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{resource}:getIamPolicy')
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
            setIamPolicy: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
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
                var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
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
        },
        rollouts: {
            /**
             * servicemanagement.services.rollouts.create
             * @desc Creates a new service configuration rollout. Based on rollout,
             * the Google Service Management will roll out the service configurations
             * to different backend services. For example, the logging configuration
             * will be pushed to Google Cloud Logging.  Please note that any previous
             * pending and running Rollouts and associated Operations will be
             * automatically cancelled so that the latest Rollout will not be blocked
             * by previous Rollouts.  Operation<response: Rollout>
             * @alias servicemanagement.services.rollouts.create
             * @memberOf! servicemanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
             * @param {servicemanagement(v1).Rollout} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/services/{serviceName}/rollouts')
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
            get: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v1/services/{serviceName}/rollouts/{rolloutId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['serviceName', 'rolloutId'],
                    pathParams: ['rolloutId', 'serviceName'],
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
                var rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/services/{serviceName}/rollouts')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['serviceName'],
                    pathParams: ['serviceName'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
}
module.exports = Servicemanagement;
//# sourceMappingURL=v1.js.map