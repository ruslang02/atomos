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
 * Google Compute Engine Instance Groups API
 *
 * The Resource View API allows users to create and manage logical sets of
 * Google Compute Engine instances.
 *
 * @example
 * const google = require('googleapis');
 * const resourceviews = google.resourceviews('v1beta2');
 *
 * @namespace resourceviews
 * @type {Function}
 * @version v1beta2
 * @variation v1beta2
 * @param {object=} options Options for Resourceviews
 */
function Resourceviews(options) {
    var self = this;
    self._options = options || {};
    self.zoneOperations = {
        /**
         * resourceviews.zoneOperations.get
         * @desc Retrieves the specified zone-specific operation resource.
         * @alias resourceviews.zoneOperations.get
         * @memberOf! resourceviews(v1beta2)
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
                        '/resourceviews/v1beta2/projects/{project}/zones/{zone}/operations/{operation}')
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
                        '/resourceviews/v1beta2/projects/{project}/zones/{zone}/operations')
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
    self.zoneViews = {
        /**
         * resourceviews.zoneViews.addResources
         * @desc Add resources to the view.
         * @alias resourceviews.zoneViews.addResources
         * @memberOf! resourceviews(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The project name of the resource view.
         * @param {string} params.resourceView The name of the resource view.
         * @param {string} params.zone The zone name of the resource view.
         * @param {resourceviews(v1beta2).ZoneViewsAddResourcesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        addResources: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews/{resourceView}/addResources')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resourceView'],
                pathParams: ['project', 'resourceView', 'zone'],
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
                        '/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews/{resourceView}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resourceView'],
                pathParams: ['project', 'resourceView', 'zone'],
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
                        '/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews/{resourceView}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resourceView'],
                pathParams: ['project', 'resourceView', 'zone'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        getService: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews/{resourceView}/getService')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resourceView'],
                pathParams: ['project', 'resourceView', 'zone'],
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
                        '/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
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
                        '/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews')
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
        listResources: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews/{resourceView}/resources')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resourceView'],
                pathParams: ['project', 'resourceView', 'zone'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        removeResources: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews/{resourceView}/removeResources')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resourceView'],
                pathParams: ['project', 'resourceView', 'zone'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        setService: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews/{resourceView}/setService')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resourceView'],
                pathParams: ['project', 'resourceView', 'zone'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Resourceviews;
//# sourceMappingURL=v1beta2.js.map