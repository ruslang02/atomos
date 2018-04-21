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
 * Google Kubernetes Engine API
 *
 * The Google Kubernetes Engine API is used for building and managing container
 * based applications, powered by the open source Kubernetes technology.
 *
 * @example
 * const google = require('googleapis');
 * const container = google.container('v1beta1');
 *
 * @namespace container
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Container
 */
function Container(options) {
    var self = this;
    self._options = options || {};
    self.projects = {
        locations: {
            /**
             * container.projects.locations.getServerConfig
             * @desc Returns configuration info about the Kubernetes Engine service.
             * @alias container.projects.locations.getServerConfig
             * @memberOf! container(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name (project and location) of the server config to get Specified in the format 'projects/x/locations/x'.
             * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
             * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for. This field is deprecated, use name instead.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            getServerConfig: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta1/{name}/serverConfig')
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
            clusters: {
                /**
                 * container.projects.locations.clusters.completeIpRotation
                 * @desc Completes master IP rotation.
                 * @alias container.projects.locations.clusters.completeIpRotation
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name (project, location, cluster id) of the cluster to complete IP rotation. Specified in the format 'projects/x/locations/x/clusters/x'.
                 * @param {container(v1beta1).CompleteIPRotationRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                completeIpRotation: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}:completeIpRotation')
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
                create: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{parent}/clusters')
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
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}')
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
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}')
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
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{parent}/clusters')
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
                setAddons: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}:setAddons')
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
                setLegacyAbac: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}:setLegacyAbac')
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
                setLocations: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}:setLocations')
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
                setLogging: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}:setLogging')
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
                setMaintenancePolicy: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}:setMaintenancePolicy')
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
                setMasterAuth: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}:setMasterAuth')
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
                setMonitoring: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}:setMonitoring')
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
                setNetworkPolicy: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}:setNetworkPolicy')
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
                setResourceLabels: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}:setResourceLabels')
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
                startIpRotation: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}:startIpRotation')
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
                update: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                updateMaster: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}:updateMaster')
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
                nodePools: {
                    /**
                     * container.projects.locations.clusters.nodePools.create
                     * @desc Creates a node pool for a cluster.
                     * @alias container.projects.locations.clusters.nodePools.create
                     * @memberOf! container(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent The parent (project, location, cluster id) where the node pool will be created. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
                     * @param {container(v1beta1).CreateNodePoolRequest} params.resource Request body data
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
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1beta1/{parent}/nodePools')
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
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1beta1/{name}')
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
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1beta1/{name}')
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
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1beta1/{parent}/nodePools')
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
                    rollback: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1beta1/{name}:rollback')
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
                    setAutoscaling: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1beta1/{name}:setAutoscaling')
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
                    setManagement: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1beta1/{name}:setManagement')
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
                    setSize: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1beta1/{name}:setSize')
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
                    update: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1beta1/{name}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['name'],
                            pathParams: ['name'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                }
            },
            operations: {
                /**
                 * container.projects.locations.operations.cancel
                 * @desc Cancels the specified operation.
                 * @alias container.projects.locations.operations.cancel
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name (project, location, operation id) of the operation to cancel. Specified in the format 'projects/x/locations/x/operations/x'.
                 * @param {container(v1beta1).CancelOperationRequest} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}:cancel')
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
                get: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}')
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
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{parent}/operations')
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
        },
        zones: {
            /**
             * container.projects.zones.getServerconfig
             * @desc Returns configuration info about the Kubernetes Engine service.
             * @alias container.projects.zones.getServerconfig
             * @memberOf! container(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.name The name (project and location) of the server config to get Specified in the format 'projects/x/locations/x'.
             * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
             * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for. This field is deprecated, use name instead.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            getServerconfig: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v1beta1/projects/{projectId}/zones/{zone}/serverconfig')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'zone'],
                    pathParams: ['projectId', 'zone'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            clusters: {
                /**
                 * container.projects.zones.clusters.addons
                 * @desc Sets the addons of a specific cluster.
                 * @alias container.projects.zones.clusters.addons
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to upgrade. This field is deprecated, use name instead.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
                 * @param {container(v1beta1).SetAddonsConfigRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                addons: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/addons')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                completeIpRotation: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                create: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/clusters')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone'],
                        pathParams: ['projectId', 'zone'],
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
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
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
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                legacyAbac: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
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
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/clusters')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone'],
                        pathParams: ['projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                locations: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/locations')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                logging: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/logging')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                master: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/master')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                monitoring: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/monitoring')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                resourceLabels: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                setMaintenancePolicy: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                setMasterAuth: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                setNetworkPolicy: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                startIpRotation: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
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
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                nodePools: {
                    /**
                     * container.projects.zones.clusters.nodePools.autoscaling
                     * @desc Sets the autoscaling settings of a specific node pool.
                     * @alias container.projects.zones.clusters.nodePools.autoscaling
                     * @memberOf! container(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId The name of the cluster to upgrade. This field is deprecated, use name instead.
                     * @param {string} params.nodePoolId The name of the node pool to upgrade. This field is deprecated, use name instead.
                     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
                     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
                     * @param {container(v1beta1).SetNodePoolAutoscalingRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    autoscaling: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/autoscaling')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
                            pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    create: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId'],
                            pathParams: ['clusterId', 'projectId', 'zone'],
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
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
                            pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
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
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
                            pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
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
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId'],
                            pathParams: ['clusterId', 'projectId', 'zone'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    rollback: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
                            pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    setManagement: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
                            pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    setSize: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setSize')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
                            pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
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
                        var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/update')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
                            pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                }
            },
            operations: {
                /**
                 * container.projects.zones.operations.cancel
                 * @desc Cancels the specified operation.
                 * @alias container.projects.zones.operations.cancel
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.operationId The server-assigned `name` of the operation. This field is deprecated, use name instead.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the operation resides. This field is deprecated, use name instead.
                 * @param {container(v1beta1).CancelOperationRequest} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'operationId'],
                        pathParams: ['operationId', 'projectId', 'zone'],
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
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'operationId'],
                        pathParams: ['operationId', 'projectId', 'zone'],
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
                    var rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1beta1/projects/{projectId}/zones/{zone}/operations')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone'],
                        pathParams: ['projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            }
        }
    };
}
module.exports = Container;
//# sourceMappingURL=v1beta1.js.map