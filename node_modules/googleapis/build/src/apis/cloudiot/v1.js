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
 * Google Cloud IoT API
 *
 * Registers and manages IoT (Internet of Things) devices that connect to the
 * Google Cloud Platform.
 *
 * @example
 * const google = require('googleapis');
 * const cloudiot = google.cloudiot('v1');
 *
 * @namespace cloudiot
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Cloudiot
 */
function Cloudiot(options) {
    var self = this;
    self._options = options || {};
    self.projects = {
        locations: {
            registries: {
                /**
                 * cloudiot.projects.locations.registries.create
                 * @desc Creates a device registry that contains devices.
                 * @alias cloudiot.projects.locations.registries.create
                 * @memberOf! cloudiot(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent The project and cloud region where this device registry must be created. For example, `projects/example-project/locations/us-central1`.
                 * @param {cloudiot(v1).DeviceRegistry} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{parent}/registries')
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
                    var rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{name}')
                                .replace(/([^:]\/)\/+/g, '$1'),
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
                    var rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{name}')
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
                getIamPolicy: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
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
                    var rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{parent}/registries')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
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
                    var rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{name}')
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
                setIamPolicy: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
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
                    var rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
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
                devices: {
                    /**
                     * cloudiot.projects.locations.registries.devices.create
                     * @desc Creates a device in a device registry.
                     * @alias
                     * cloudiot.projects.locations.registries.devices.create
                     * @memberOf! cloudiot(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent The name of the device registry where this device should be created. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
                     * @param {cloudiot(v1).Device} params.resource Request body data
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
                        var rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{parent}/devices')
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
                        var rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{name}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
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
                        var rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{name}')
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
                        var rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{parent}/devices')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    modifyCloudToDeviceConfig: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/{name}:modifyCloudToDeviceConfig')
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
                    patch: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{name}')
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
                    configVersions: {
                        /**
                         * cloudiot.projects.locations.registries.devices.configVersions.list
                         * @desc Lists the last few versions of the device
                         * configuration in descending order (i.e.: newest first).
                         * @alias
                         * cloudiot.projects.locations.registries.devices.configVersions.list
                         * @memberOf! cloudiot(v1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
                         * @param {integer=} params.numVersions The number of versions to list. Versions are listed in decreasing order of the version number. The maximum number of versions retained is 10. If this value is zero, it will return all the versions available.
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
                            var rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1/{name}/configVersions')
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
                    },
                    states: {
                        /**
                         * cloudiot.projects.locations.registries.devices.states.list
                         * @desc Lists the last few versions of the device state in
                         * descending order (i.e.: newest first).
                         * @alias
                         * cloudiot.projects.locations.registries.devices.states.list
                         * @memberOf! cloudiot(v1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
                         * @param {integer=} params.numStates The number of states to list. States are listed in descending order of update time. The maximum number of states retained is 10. If this value is zero, it will return all the states available.
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
                            var rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1/{name}/states')
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
                }
            }
        }
    };
}
module.exports = Cloudiot;
//# sourceMappingURL=v1.js.map