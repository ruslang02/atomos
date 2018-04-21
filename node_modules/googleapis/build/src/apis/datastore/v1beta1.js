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
 * Google Cloud Datastore API
 *
 * Accesses the schemaless NoSQL database to provide fully managed, robust,
 * scalable storage for your application.
 *
 * @example
 * const google = require('googleapis');
 * const datastore = google.datastore('v1beta1');
 *
 * @namespace datastore
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Datastore
 */
function Datastore(options) {
    var self = this;
    self._options = options || {};
    self.projects = {
        /**
         * datastore.projects.export
         * @desc Exports a copy of all or a subset of entities from Google Cloud
         * Datastore to another storage system, such as Google Cloud Storage. Recent
         * updates to entities may not be reflected in the export. The export occurs
         * in the background and its progress can be monitored and managed via the
         * Operation resource that is created. The output of an export may only be
         * used once the associated operation is done. If an export operation is
         * cancelled before completion it may leave partial data behind in Google
         * Cloud Storage.
         * @alias datastore.projects.export
         * @memberOf! datastore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId Project ID against which to make the request.
         * @param {datastore(v1beta1).GoogleDatastoreAdminV1beta1ExportEntitiesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        export: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/projects/{projectId}:export')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        import: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/projects/{projectId}:import')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Datastore;
//# sourceMappingURL=v1beta1.js.map