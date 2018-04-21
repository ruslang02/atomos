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
 * Google App Engine Admin API
 *
 * The App Engine Admin API enables developers to provision and manage their App
 * Engine applications.
 *
 * @example
 * const google = require('googleapis');
 * const appengine = google.appengine('v1beta4');
 *
 * @namespace appengine
 * @type {Function}
 * @version v1beta4
 * @variation v1beta4
 * @param {object=} options Options for Appengine
 */
function Appengine(options) {
    var self = this;
    self._options = options || {};
    self.apps = {
        /**
         * appengine.apps.create
         * @desc Creates an App Engine application for a Google Cloud Platform
         * project. Required fields: id - The ID of the target Cloud Platform
         * project. location - The region
         * (https://cloud.google.com/appengine/docs/locations) where you want the
         * App Engine application located.For more information about App Engine
         * applications, see Managing Projects, Applications, and Billing
         * (https://cloud.google.com/appengine/docs/python/console/).
         * @alias appengine.apps.create
         * @memberOf! appengine(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {appengine(v1beta4).Application} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta4/apps').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta4/apps/{appsId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['appsId'],
                pathParams: ['appsId'],
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
            var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta4/apps/{appsId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['appsId'],
                pathParams: ['appsId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        locations: {
            /**
             * appengine.apps.locations.get
             * @desc Get information about a location.
             * @alias appengine.apps.locations.get
             * @memberOf! appengine(v1beta4)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. Resource name for the location.
             * @param {string} params.locationsId Part of `name`. See documentation of `appsId`.
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
                var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta4/apps/{appsId}/locations/{locationsId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'locationsId'],
                    pathParams: ['appsId', 'locationsId'],
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
                var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta4/apps/{appsId}/locations')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId'],
                    pathParams: ['appsId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        modules: {
            /**
             * appengine.apps.modules.delete
             * @desc Deletes the specified module and all enclosed versions.
             * @alias appengine.apps.modules.delete
             * @memberOf! appengine(v1beta4)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/modules/default.
             * @param {string} params.modulesId Part of `name`. See documentation of `appsId`.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            delete: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta4/apps/{appsId}/modules/{modulesId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'modulesId'],
                    pathParams: ['appsId', 'modulesId'],
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
                var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta4/apps/{appsId}/modules/{modulesId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'modulesId'],
                    pathParams: ['appsId', 'modulesId'],
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
                var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta4/apps/{appsId}/modules')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId'],
                    pathParams: ['appsId'],
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
                var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta4/apps/{appsId}/modules/{modulesId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'modulesId'],
                    pathParams: ['appsId', 'modulesId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            versions: {
                /**
                 * appengine.apps.modules.versions.create
                 * @desc Deploys code and resource files to a new version.
                 * @alias appengine.apps.modules.versions.create
                 * @memberOf! appengine(v1beta4)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.appsId Part of `name`. Name of the resource to update. Example: apps/myapp/modules/default.
                 * @param {string} params.modulesId Part of `name`. See documentation of `appsId`.
                 * @param {appengine(v1beta4).Version} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta4/apps/{appsId}/modules/{modulesId}/versions')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['appsId', 'modulesId'],
                        pathParams: ['appsId', 'modulesId'],
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
                    var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta4/apps/{appsId}/modules/{modulesId}/versions/{versionsId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['appsId', 'modulesId', 'versionsId'],
                        pathParams: ['appsId', 'modulesId', 'versionsId'],
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
                    var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta4/apps/{appsId}/modules/{modulesId}/versions/{versionsId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['appsId', 'modulesId', 'versionsId'],
                        pathParams: ['appsId', 'modulesId', 'versionsId'],
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
                    var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta4/apps/{appsId}/modules/{modulesId}/versions')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['appsId', 'modulesId'],
                        pathParams: ['appsId', 'modulesId'],
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
                    var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta4/apps/{appsId}/modules/{modulesId}/versions/{versionsId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['appsId', 'modulesId', 'versionsId'],
                        pathParams: ['appsId', 'modulesId', 'versionsId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                instances: {
                    /**
                     * appengine.apps.modules.versions.instances.debug
                     * @desc Enables debugging on a VM instance. This allows you to use
                     * the SSH command to connect to the virtual machine where the
                     * instance lives. While in "debug mode", the instance continues to
                     * serve live traffic. You should delete the instance when you are
                     * done debugging and then allow the system to take over and determine
                     * if another instance should be started.Only applicable for instances
                     * in App Engine flexible environment.
                     * @alias appengine.apps.modules.versions.instances.debug
                     * @memberOf! appengine(v1beta4)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/modules/default/versions/v1/instances/instance-1.
                     * @param {string} params.instancesId Part of `name`. See documentation of `appsId`.
                     * @param {string} params.modulesId Part of `name`. See documentation of `appsId`.
                     * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
                     * @param {appengine(v1beta4).DebugInstanceRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    debug: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1beta4/apps/{appsId}/modules/{modulesId}/versions/{versionsId}/instances/{instancesId}:debug')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['appsId', 'modulesId', 'versionsId', 'instancesId'],
                            pathParams: ['appsId', 'instancesId', 'modulesId', 'versionsId'],
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
                        var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1beta4/apps/{appsId}/modules/{modulesId}/versions/{versionsId}/instances/{instancesId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['appsId', 'modulesId', 'versionsId', 'instancesId'],
                            pathParams: ['appsId', 'instancesId', 'modulesId', 'versionsId'],
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
                        var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1beta4/apps/{appsId}/modules/{modulesId}/versions/{versionsId}/instances/{instancesId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['appsId', 'modulesId', 'versionsId', 'instancesId'],
                            pathParams: ['appsId', 'instancesId', 'modulesId', 'versionsId'],
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
                        var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1beta4/apps/{appsId}/modules/{modulesId}/versions/{versionsId}/instances')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['appsId', 'modulesId', 'versionsId'],
                            pathParams: ['appsId', 'modulesId', 'versionsId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                }
            }
        },
        operations: {
            /**
             * appengine.apps.operations.get
             * @desc Gets the latest state of a long-running operation. Clients can
             * use this method to poll the operation result at intervals as
             * recommended by the API service.
             * @alias appengine.apps.operations.get
             * @memberOf! appengine(v1beta4)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. The name of the operation resource.
             * @param {string} params.operationsId Part of `name`. See documentation of `appsId`.
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
                var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v1beta4/apps/{appsId}/operations/{operationsId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'operationsId'],
                    pathParams: ['appsId', 'operationsId'],
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
                var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta4/apps/{appsId}/operations')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId'],
                    pathParams: ['appsId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
}
module.exports = Appengine;
//# sourceMappingURL=v1beta4.js.map