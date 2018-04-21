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
 * Google Compute Engine Instance Group Manager API
 *
 * [Deprecated. Please use Instance Group Manager in Compute API] Provides
 * groups of homogenous Compute Engine instances.
 *
 * @example
 * const google = require('googleapis');
 * const replicapool = google.replicapool('v1beta2');
 *
 * @namespace replicapool
 * @type {Function}
 * @version v1beta2
 * @variation v1beta2
 * @param {object=} options Options for Replicapool
 */
function Replicapool(options) {
    var self = this;
    self._options = options || {};
    self.instanceGroupManagers = {
        /**
         * replicapool.instanceGroupManagers.abandonInstances
         * @desc Removes the specified instances from the managed instance group,
         * and from any target pools of which they were members, without deleting
         * the instances.
         * @alias replicapool.instanceGroupManagers.abandonInstances
         * @memberOf! replicapool(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager The name of the instance group manager.
         * @param {string} params.project The Google Developers Console project name.
         * @param {string} params.zone The name of the zone in which the instance group manager resides.
         * @param {replicapool(v1beta2).InstanceGroupManagersAbandonInstancesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        abandonInstances: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/abandonInstances')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        deleteInstances: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/deleteInstances')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        insert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'size'],
                pathParams: ['project', 'zone'],
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        recreateInstances: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/recreateInstances')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        resize: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resize')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager', 'size'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        setInstanceTemplate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setInstanceTemplate')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        setTargetPools: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setTargetPools')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.zoneOperations = {
        /**
         * replicapool.zoneOperations.get
         * @desc Retrieves the specified zone-specific operation resource.
         * @alias replicapool.zoneOperations.get
         * @memberOf! replicapool(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.operation Name of the operation resource to return.
         * @param {string} params.project Name of the project scoping this request.
         * @param {string} params.zone Name of the zone scoping this request.
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/replicapool/v1beta2/projects/{project}/zones/{zone}/operations/{operation}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'operation'],
                pathParams: ['operation', 'project', 'zone'],
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/replicapool/v1beta2/projects/{project}/zones/{zone}/operations')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Replicapool;
//# sourceMappingURL=v1beta2.js.map