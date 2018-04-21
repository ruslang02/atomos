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
 * Google Cloud Resource Manager API
 *
 * The Google Cloud Resource Manager API provides methods for creating, reading,
 * and updating project metadata.
 *
 * @example
 * const google = require('googleapis');
 * const cloudresourcemanager = google.cloudresourcemanager('v2beta1');
 *
 * @namespace cloudresourcemanager
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Cloudresourcemanager
 */
function Cloudresourcemanager(options) {
    var self = this;
    self._options = options || {};
    self.folders = {
        /**
         * cloudresourcemanager.folders.create
         * @desc Creates a Folder in the resource hierarchy. Returns an Operation
         * which can be used to track the progress of the folder creation workflow.
         * Upon success the Operation.response field will be populated with the
         * created Folder.  In order to succeed, the addition of this new Folder
         * must not violate the Folder naming, height or fanout constraints.  + The
         * Folder's display_name must be distinct from all other Folder's that share
         * its parent. + The addition of the Folder must not cause the active Folder
         * hierarchy to exceed a height of 4. Note, the full active + deleted Folder
         * hierarchy is allowed to reach a height of 8; this provides additional
         * headroom when moving folders that contain deleted folders. + The addition
         * of the Folder must not cause the total number of Folders under its parent
         * to exceed 100.  If the operation fails due to a folder constraint
         * violation, a PreconditionFailure explaining the violation will be
         * returned. If the failure occurs synchronously then the
         * PreconditionFailure will be returned via the Status.details field and if
         * it occurs asynchronously then the PreconditionFailure will be returned
         * via the the Operation.error field.  The caller must have
         * `resourcemanager.folders.create` permission on the identified parent.
         * @alias cloudresourcemanager.folders.create
         * @memberOf! cloudresourcemanager(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.parent The resource name of the new Folder's parent. Must be of the form `folders/{folder_id}` or `organizations/{org_id}`.
         * @param {cloudresourcemanager(v2beta1).Folder} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/folders').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{resource}:getIamPolicy')
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
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/folders').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        move: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{name}:move')
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
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        search: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/folders:search')
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
        setIamPolicy: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{resource}:setIamPolicy')
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
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{resource}:testIamPermissions')
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
            var rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{name}:undelete')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
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
module.exports = Cloudresourcemanager;
//# sourceMappingURL=v2beta1.js.map