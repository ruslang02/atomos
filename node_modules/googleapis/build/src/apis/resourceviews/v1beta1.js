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
 * Resource Views API
 *
 * The Resource View API allows users to create and manage logical sets of
 * Google Compute Engine instances.
 *
 * @example
 * const google = require('googleapis');
 * const resourceviews = google.resourceviews('v1beta1');
 *
 * @namespace resourceviews
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Resourceviews
 */
function Resourceviews(options) {
    var self = this;
    self._options = options || {};
    self.regionViews = {
        /**
         * resourceviews.regionViews.addresources
         * @desc Add resources to the view.
         * @alias resourceviews.regionViews.addresources
         * @memberOf! resourceviews(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectName The project name of the resource view.
         * @param {string} params.region The region name of the resource view.
         * @param {string} params.resourceViewName The name of the resource view.
         * @param {resourceviews(v1beta1).RegionViewsAddResourcesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        addresources: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews/{resourceViewName}/addResources')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectName', 'region', 'resourceViewName'],
                pathParams: ['projectName', 'region', 'resourceViewName'],
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
                        '/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews/{resourceViewName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['projectName', 'region', 'resourceViewName'],
                pathParams: ['projectName', 'region', 'resourceViewName'],
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
                        '/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews/{resourceViewName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectName', 'region', 'resourceViewName'],
                pathParams: ['projectName', 'region', 'resourceViewName'],
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
                        '/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectName', 'region'],
                pathParams: ['projectName', 'region'],
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
                        '/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectName', 'region'],
                pathParams: ['projectName', 'region'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        listresources: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews/{resourceViewName}/resources')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectName', 'region', 'resourceViewName'],
                pathParams: ['projectName', 'region', 'resourceViewName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        removeresources: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews/{resourceViewName}/removeResources')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectName', 'region', 'resourceViewName'],
                pathParams: ['projectName', 'region', 'resourceViewName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.zoneViews = {
        /**
         * resourceviews.zoneViews.addresources
         * @desc Add resources to the view.
         * @alias resourceviews.zoneViews.addresources
         * @memberOf! resourceviews(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectName The project name of the resource view.
         * @param {string} params.resourceViewName The name of the resource view.
         * @param {string} params.zone The zone name of the resource view.
         * @param {resourceviews(v1beta1).ZoneViewsAddResourcesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        addresources: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews/{resourceViewName}/addResources')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectName', 'zone', 'resourceViewName'],
                pathParams: ['projectName', 'resourceViewName', 'zone'],
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
                        '/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews/{resourceViewName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['projectName', 'zone', 'resourceViewName'],
                pathParams: ['projectName', 'resourceViewName', 'zone'],
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
                        '/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews/{resourceViewName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectName', 'zone', 'resourceViewName'],
                pathParams: ['projectName', 'resourceViewName', 'zone'],
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
                        '/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectName', 'zone'],
                pathParams: ['projectName', 'zone'],
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
                        '/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectName', 'zone'],
                pathParams: ['projectName', 'zone'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        listresources: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews/{resourceViewName}/resources')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectName', 'zone', 'resourceViewName'],
                pathParams: ['projectName', 'resourceViewName', 'zone'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        removeresources: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews/{resourceViewName}/removeResources')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectName', 'zone', 'resourceViewName'],
                pathParams: ['projectName', 'resourceViewName', 'zone'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Resourceviews;
//# sourceMappingURL=v1beta1.js.map