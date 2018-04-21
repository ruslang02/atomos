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
 * const container = google.container('v1');
 *
 * @namespace container
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Container
 */
function Container(options) {
    var self = this;
    self._options = options || {};
    self.projects = {
        zones: {
            /**
             * container.projects.zones.getServerconfig
             * @desc Returns configuration info about the Kubernetes Engine
             * service.
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Google Container Engine API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/container
             * // 2. This sample uses Application Default Credentials for
             * authentication.
             * //    If not already done, install the gcloud CLI from
             * //    https://cloud.google.com/sdk and run
             * //    `gcloud beta auth application-default login`.
             * //    For more information, see
             * //
             * https://developers.google.com/identity/protocols/application-default-credentials
             * // 3. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var container = google.container('v1');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The Google Developers Console [project ID or project
             *     // number](https://support.google.com/cloud/answer/6158840).
             *     projectId: 'my-project-id',  // TODO: Update placeholder value.
             *
             *     // The name of the Google Compute Engine
             * [zone](/compute/docs/zones#available)
             *     // to return operations for.
             *     zone: 'my-zone',  // TODO: Update placeholder value.
             *
             *     auth: authClient,
             *   };
             *
             *   container.projects.zones.getServerconfig(request, function(err,
             * response) { if (err) { console.error(err); return;
             *     }
             *
             *     // TODO: Change code below to process the `response` object:
             *     console.log(JSON.stringify(response, null, 2));
             *   });
             * });
             *
             * function authorize(callback) {
             *   google.auth.getApplicationDefault(function(err, authClient) {
             *     if (err) {
             *       console.error('authentication failed: ', err);
             *       return;
             *     }
             *     if (authClient.createScopedRequired &&
             * authClient.createScopedRequired()) { var scopes =
             * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
             * authClient.createScoped(scopes);
             *     }
             *     callback(authClient);
             *   });
             * }
             * @alias container.projects.zones.getServerconfig
             * @memberOf! container(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
             * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for.
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
                            '/v1/projects/{projectId}/zones/{zone}/serverconfig')
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
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine
                 * API
                 * //    and check the quota for your project at
                 * // https://console.developers.google.com/apis/api/container
                 * // 2. This sample uses Application Default Credentials for
                 * authentication.
                 * //    If not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk and run
                 * //    `gcloud beta auth application-default login`.
                 * //    For more information, see
                 * //
                 * https://developers.google.com/identity/protocols/application-default-credentials
                 * // 3. Install the Node.js client library by running
                 * //    `npm install googleapis --save`
                 *
                 * var google = require('googleapis');
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     //
                 * number](https://support.google.com/cloud/answer/6158840).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder
                 * value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the
                 * cluster
                 *     // resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     // The name of the cluster to upgrade.
                 *     clusterId: 'my-cluster-id',  // TODO: Update placeholder
                 * value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.clusters.addons(request,
                 * function(err, response) { if (err) { console.error(err);
                 *       return;
                 *     }
                 *
                 *     // TODO: Change code below to process the `response`
                 * object: console.log(JSON.stringify(response, null, 2));
                 *   });
                 * });
                 *
                 * function authorize(callback) {
                 *   google.auth.getApplicationDefault(function(err, authClient)
                 * { if (err) { console.error('authentication failed: ', err);
                 *       return;
                 *     }
                 *     if (authClient.createScopedRequired &&
                 * authClient.createScopedRequired()) { var scopes =
                 * ['https://www.googleapis.com/auth/cloud-platform'];
                 *       authClient = authClient.createScoped(scopes);
                 *     }
                 *     callback(authClient);
                 *   });
                 * }
                 * @alias container.projects.zones.clusters.addons
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to upgrade.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                 * @param {container(v1).SetAddonsConfigRequest} params.resource Request body data
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
                                '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/addons')
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
                                '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation')
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
                                '/v1/projects/{projectId}/zones/{zone}/clusters')
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
                                '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}')
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
                                '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}')
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
                                '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac')
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
                                '/v1/projects/{projectId}/zones/{zone}/clusters')
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
                                '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/locations')
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
                                '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/logging')
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
                                '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/master')
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
                                '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/monitoring')
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
                                '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels')
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
                                '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy')
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
                                '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth')
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
                                '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy')
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
                                '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation')
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
                                '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}')
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
                     * @desc Sets the autoscaling settings of a specific node
                     * pool.
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Google Container
                     * Engine API
                     * //    and check the quota for your project at
                     * //
                     * https://console.developers.google.com/apis/api/container
                     * // 2. This sample uses Application Default Credentials
                     * for authentication.
                     * //    If not already done, install the gcloud CLI from
                     * //    https://cloud.google.com/sdk and run
                     * //    `gcloud beta auth application-default login`.
                     * //    For more information, see
                     * //
                     * https://developers.google.com/identity/protocols/application-default-credentials
                     * // 3. Install the Node.js client library by running
                     * //    `npm install googleapis --save`
                     *
                     * var google = require('googleapis');
                     * var container = google.container('v1');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // The Google Developers Console [project ID or
                     * project
                     *     //
                     * number](https://support.google.com/cloud/answer/6158840).
                     *     projectId: 'my-project-id',  // TODO: Update
                     * placeholder value.
                     *
                     *     // The name of the Google Compute Engine
                     *     // [zone](/compute/docs/zones#available) in which
                     * the cluster
                     *     // resides.
                     *     zone: 'my-zone',  // TODO: Update placeholder
                     * value.
                     *
                     *     // The name of the cluster to upgrade.
                     *     clusterId: 'my-cluster-id',  // TODO: Update
                     * placeholder value.
                     *
                     *     // The name of the node pool to upgrade.
                     *     nodePoolId: 'my-node-pool-id',  // TODO: Update
                     * placeholder value.
                     *
                     *     resource: {
                     *       // TODO: Add desired properties to the request
                     * body.
                     *     },
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   container.projects.zones.clusters.nodePools.autoscaling(request,
                     * function(err, response) { if (err) {
                     *       console.error(err);
                     *       return;
                     *     }
                     *
                     *     // TODO: Change code below to process the
                     * `response` object: console.log(JSON.stringify(response,
                     * null, 2));
                     *   });
                     * });
                     *
                     * function authorize(callback) {
                     *   google.auth.getApplicationDefault(function(err,
                     * authClient) { if (err) { console.error('authentication
                     * failed: ', err); return;
                     *     }
                     *     if (authClient.createScopedRequired &&
                     * authClient.createScopedRequired()) { var scopes =
                     * ['https://www.googleapis.com/auth/cloud-platform'];
                     *       authClient = authClient.createScoped(scopes);
                     *     }
                     *     callback(authClient);
                     *   });
                     * }
                     * @alias
                     * container.projects.zones.clusters.nodePools.autoscaling
                     * @memberOf! container(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId The name of the cluster to upgrade.
                     * @param {string} params.nodePoolId The name of the node pool to upgrade.
                     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                     * @param {container(v1).SetNodePoolAutoscalingRequest} params.resource Request body data
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
                        var rootUrl = options.rootUrl ||
                            'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/autoscaling')
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
                        var rootUrl = options.rootUrl ||
                            'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools')
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
                        var rootUrl = options.rootUrl ||
                            'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}')
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
                        var rootUrl = options.rootUrl ||
                            'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}')
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
                        var rootUrl = options.rootUrl ||
                            'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools')
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
                        var rootUrl = options.rootUrl ||
                            'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback')
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
                        var rootUrl = options.rootUrl ||
                            'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement')
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
                        var rootUrl = options.rootUrl ||
                            'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setSize')
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
                        var rootUrl = options.rootUrl ||
                            'https://container.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/update')
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
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
                 * // 2. This sample uses Application Default Credentials for
                 * authentication.
                 * //    If not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk and run
                 * //    `gcloud beta auth application-default login`.
                 * //    For more information, see
                 * //
                 * https://developers.google.com/identity/protocols/application-default-credentials
                 * // 3. Install the Node.js client library by running
                 * //    `npm install googleapis --save`
                 *
                 * var google = require('googleapis');
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://support.google.com/cloud/answer/6158840).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder
                 * value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the
                 * operation resides. zone: 'my-zone',  // TODO: Update placeholder
                 * value.
                 *
                 *     // The server-assigned `name` of the operation.
                 *     operationId: 'my-operation-id',  // TODO: Update placeholder
                 * value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.operations.cancel(request,
                 * function(err) { if (err) { console.error(err); return;
                 *     }
                 *   });
                 * });
                 *
                 * function authorize(callback) {
                 *   google.auth.getApplicationDefault(function(err, authClient) {
                 *     if (err) {
                 *       console.error('authentication failed: ', err);
                 *       return;
                 *     }
                 *     if (authClient.createScopedRequired &&
                 * authClient.createScopedRequired()) { var scopes =
                 * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
                 * authClient.createScoped(scopes);
                 *     }
                 *     callback(authClient);
                 *   });
                 * }
                 * @alias container.projects.zones.operations.cancel
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.operationId The server-assigned `name` of the operation.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the operation resides.
                 * @param {container(v1).CancelOperationRequest} params.resource Request body data
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
                                '/v1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel')
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
                                '/v1/projects/{projectId}/zones/{zone}/operations/{operationId}')
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
                                '/v1/projects/{projectId}/zones/{zone}/operations')
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
//# sourceMappingURL=v1.js.map