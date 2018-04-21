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
 * Genomics API
 *
 * Upload, process, query, and search Genomics data in the cloud.
 *
 * @example
 * const google = require('googleapis');
 * const genomics = google.genomics('v1');
 *
 * @namespace genomics
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Genomics
 */
function Genomics(options) {
    var self = this;
    self._options = options || {};
    self.annotations = {
        /**
         * genomics.annotations.batchCreate
         * @desc Creates one or more new annotations atomically. All annotations
         * must belong to the same annotation set. Caller must have WRITE permission
         * for this annotation set. For optimal performance, batch positionally
         * adjacent annotations together.  If the request has a systemic issue, such
         * as an attempt to write to an inaccessible annotation set, the entire RPC
         * will fail accordingly. For lesser data issues, when possible an error
         * will be isolated to the corresponding batch entry in the response; the
         * remaining well formed annotations will be created normally.  For details
         * on the requirements for each individual annotation resource, see
         * CreateAnnotation.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.annotations.batchCreate(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
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
         * @alias genomics.annotations.batchCreate
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).BatchCreateAnnotationsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchCreate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotations:batchCreate')
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
        create: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotations').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotations/{annotationId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['annotationId'],
                pathParams: ['annotationId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotations/{annotationId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['annotationId'],
                pathParams: ['annotationId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotations/search')
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
        update: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotations/{annotationId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['annotationId'],
                pathParams: ['annotationId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.annotationsets = {
        /**
         * genomics.annotationsets.create
         * @desc Creates a new annotation set. Caller must have WRITE permission for
         * the associated dataset.  The following fields are required:    *
         * datasetId   * referenceSetId  All other fields may be optionally
         * specified, unless documented as being server-generated (for example, the
         * `id` field).
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.annotationsets.create(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
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
         * @alias genomics.annotationsets.create
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).AnnotationSet} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotationsets')
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
        delete: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotationsets/{annotationSetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['annotationSetId'],
                pathParams: ['annotationSetId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotationsets/{annotationSetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['annotationSetId'],
                pathParams: ['annotationSetId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotationsets/search')
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
        update: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotationsets/{annotationSetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['annotationSetId'],
                pathParams: ['annotationSetId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.callsets = {
        /**
         * genomics.callsets.create
         * @desc Creates a new call set.  For the definitions of call sets and other
         * genomics resources, see [Fundamentals of Google
         * Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.callsets.create(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
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
         * @alias genomics.callsets.create
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).CallSet} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/callsets').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/callsets/{callSetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['callSetId'],
                pathParams: ['callSetId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/callsets/{callSetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['callSetId'],
                pathParams: ['callSetId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/callsets/{callSetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['callSetId'],
                pathParams: ['callSetId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/callsets/search')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.datasets = {
        /**
         * genomics.datasets.create
         * @desc Creates a new dataset.  For the definitions of datasets and other
         * genomics resources, see [Fundamentals of Google
         * Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.datasets.create(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
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
         * @alias genomics.datasets.create
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).Dataset} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/datasets').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/datasets/{datasetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['datasetId'],
                pathParams: ['datasetId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/datasets/{datasetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['datasetId'],
                pathParams: ['datasetId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/datasets').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/datasets/{datasetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['datasetId'],
                pathParams: ['datasetId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/datasets/{datasetId}:undelete')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['datasetId'],
                pathParams: ['datasetId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.operations = {
        /**
         * genomics.operations.cancel
         * @desc Starts asynchronous cancellation on a long-running operation. The
         * server makes a best effort to cancel the operation, but success is not
         * guaranteed. Clients may use Operations.GetOperation or
         * Operations.ListOperations to check whether the cancellation succeeded or
         * the operation completed despite cancellation.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The name of the operation resource to be cancelled.
         *     name: 'operations/my-operation',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.operations.cancel(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
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
         * @alias genomics.operations.cancel
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be cancelled.
         * @param {genomics(v1).CancelOperationRequest} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
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
        }
    };
    self.readgroupsets = {
        /**
         * genomics.readgroupsets.delete
         * @desc Deletes a read group set.  For the definitions of read group sets
         * and other genomics resources, see [Fundamentals of Google
         * Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the read group set to be deleted. The caller must have
         * WRITE
         *     // permissions to the dataset associated with this read group set.
         *     readGroupSetId: 'my-read-group-set-id',  // TODO: Update placeholder
         * value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.readgroupsets.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
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
         * @alias genomics.readgroupsets.delete
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.readGroupSetId The ID of the read group set to be deleted. The caller must have WRITE permissions to the dataset associated with this read group set.
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['readGroupSetId'],
                pathParams: ['readGroupSetId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        export: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}:export')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['readGroupSetId'],
                pathParams: ['readGroupSetId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['readGroupSetId'],
                pathParams: ['readGroupSetId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/readgroupsets:import')
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
        patch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['readGroupSetId'],
                pathParams: ['readGroupSetId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/readgroupsets/search')
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
        coveragebuckets: {
            /**
             * genomics.readgroupsets.coveragebuckets.list
             * @desc Lists fixed width coverage buckets for a read group set, each of
             * which correspond to a range of a reference sequence. Each bucket
             * summarizes coverage information across its corresponding genomic range.
             * For the definitions of read group sets and other genomics resources,
             * see [Fundamentals of Google
             * Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
             * Coverage is defined as the number of reads which are aligned to a given
             * base in the reference sequence. Coverage buckets are available at
             * several precomputed bucket widths, enabling retrieval of various
             * coverage 'zoom levels'. The caller must have READ permissions for the
             * target read group set.
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Genomics API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/genomics
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
             * var genomics = google.genomics('v1');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // Required. The ID of the read group set over which coverage is
             * requested. readGroupSetId: 'my-read-group-set-id',  // TODO: Update
             * placeholder value.
             *
             *     auth: authClient,
             *   };
             *
             *   var handlePage = function(err, response) {
             *     if (err) {
             *       console.error(err);
             *       return;
             *     }
             *
             *     var coverageBucketsPage = response['coverageBuckets'];
             *     if (!coverageBucketsPage) {
             *       return;
             *     }
             *     for (var i = 0; i < coverageBucketsPage.length; i++) {
             *       // TODO: Change code below to process each resource in
             * `coverageBucketsPage`:
             *       console.log(JSON.stringify(coverageBucketsPage[i], null, 2));
             *     }
             *
             *     if (response.nextPageToken) {
             *       request.pageToken = response.nextPageToken;
             *       genomics.readgroupsets.coveragebuckets.list(request, handlePage);
             *     }
             *   };
             *
             *   genomics.readgroupsets.coveragebuckets.list(request, handlePage);
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
             * @alias genomics.readgroupsets.coveragebuckets.list
             * @memberOf! genomics(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.end The end position of the range on the reference, 0-based exclusive. If specified, `referenceName` must also be specified. If unset or 0, defaults to the length of the reference.
             * @param {integer=} params.pageSize The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 2048.
             * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
             * @param {string} params.readGroupSetId Required. The ID of the read group set over which coverage is requested.
             * @param {string=} params.referenceName The name of the reference to query, within the reference set associated with this query. Optional.
             * @param {string=} params.start The start position of the range on the reference, 0-based inclusive. If specified, `referenceName` must also be specified. Defaults to 0.
             * @param {string=} params.targetBucketWidth The desired width of each reported coverage bucket in base pairs. This will be rounded down to the nearest precomputed bucket width; the value of which is returned as `bucketWidth` in the response. Defaults to infinity (each bucket spans an entire reference sequence) or the length of the target range, if specified. The smallest precomputed `bucketWidth` is currently 2048 base pairs; this is subject to change.
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
                var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v1/readgroupsets/{readGroupSetId}/coveragebuckets')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['readGroupSetId'],
                    pathParams: ['readGroupSetId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.reads = {
        /**
         * genomics.reads.search
         * @desc Gets a list of reads for one or more read group sets.  For the
         * definitions of read group sets and other genomics resources, see
         * [Fundamentals of Google
         * Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         * Reads search operates over a genomic coordinate space of reference
         * sequence & position defined over the reference sequences to which the
         * requested read group sets are aligned.  If a target positional range is
         * specified, search returns all reads whose alignment to the reference
         * genome overlap the range. A query which specifies only read group set IDs
         * yields all reads in those read group sets, including unmapped reads.  All
         * reads returned (including reads on subsequent pages) are ordered by
         * genomic coordinate (by reference sequence, then position). Reads with
         * equivalent genomic coordinates are returned in an unspecified order. This
         * order is consistent, such that two queries for the same content
         * (regardless of page size) yield reads in the same order across their
         * respective streams of paginated responses.  Implements
         * [GlobalAllianceApi.searchReads](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L85).
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var alignmentsPage = response['alignments'];
         *     if (!alignmentsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < alignmentsPage.length; i++) {
         *       // TODO: Change code below to process each resource in
         * `alignmentsPage`: console.log(JSON.stringify(alignmentsPage[i], null,
         * 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.resource.pageToken = response.nextPageToken;
         *       genomics.reads.search(request, handlePage);
         *     }
         *   };
         *
         *   genomics.reads.search(request, handlePage);
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
         * @alias genomics.reads.search
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).SearchReadsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/reads/search').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.references = {
        /**
         * genomics.references.get
         * @desc Gets a reference.  For the definitions of references and other
         * genomics resources, see [Fundamentals of Google
         * Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         * Implements
         * [GlobalAllianceApi.getReference](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L158).
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the reference.
         *     referenceId: 'my-reference-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.references.get(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
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
         * @alias genomics.references.get
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.referenceId The ID of the reference.
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/references/{referenceId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['referenceId'],
                pathParams: ['referenceId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/references/search')
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
        bases: {
            /**
             * genomics.references.bases.list
             * @desc Lists the bases in a reference, optionally restricted to a range.
             * For the definitions of references and other genomics resources, see
             * [Fundamentals of Google
             * Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
             * Implements
             * [GlobalAllianceApi.getReferenceBases](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L221).
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Genomics API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/genomics
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
             * var genomics = google.genomics('v1');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The ID of the reference.
             *     referenceId: 'my-reference-id',  // TODO: Update placeholder value.
             *
             *     auth: authClient,
             *   };
             *
             *   var handlePage = function(err, response) {
             *     if (err) {
             *       console.error(err);
             *       return;
             *     }
             *
             *     var nextPageTokenPage = response['nextPageToken'];
             *     if (!nextPageTokenPage) {
             *       return;
             *     }
             *     // TODO: Change code below to process each `nextPageTokenPage`
             * resource: console.log(nextPageTokenPage);
             *
             *     if (response.nextPageToken) {
             *       request.pageToken = response.nextPageToken;
             *       genomics.references.bases.list(request, handlePage);
             *     }
             *   };
             *
             *   genomics.references.bases.list(request, handlePage);
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
             * @alias genomics.references.bases.list
             * @memberOf! genomics(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.end The end position (0-based, exclusive) of this query. Defaults to the length of this reference.
             * @param {integer=} params.pageSize The maximum number of bases to return in a single page. If unspecified, defaults to 200Kbp (kilo base pairs). The maximum value is 10Mbp (mega base pairs).
             * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
             * @param {string} params.referenceId The ID of the reference.
             * @param {string=} params.start The start position (0-based) of this query. Defaults to 0.
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
                var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/references/{referenceId}/bases')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['referenceId'],
                    pathParams: ['referenceId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.referencesets = {
        /**
         * genomics.referencesets.get
         * @desc Gets a reference set.  For the definitions of references and other
         * genomics resources, see [Fundamentals of Google
         * Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         * Implements
         * [GlobalAllianceApi.getReferenceSet](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L83).
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the reference set.
         *     referenceSetId: 'my-reference-set-id',  // TODO: Update placeholder
         * value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.referencesets.get(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
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
         * @alias genomics.referencesets.get
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.referenceSetId The ID of the reference set.
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/referencesets/{referenceSetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['referenceSetId'],
                pathParams: ['referenceSetId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/referencesets/search')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.variants = {
        /**
         * genomics.variants.create
         * @desc Creates a new variant.  For the definitions of variants and other
         * genomics resources, see [Fundamentals of Google
         * Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.variants.create(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
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
         * @alias genomics.variants.create
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).Variant} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variants').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variants/{variantId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['variantId'],
                pathParams: ['variantId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variants/{variantId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['variantId'],
                pathParams: ['variantId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variants:import')
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
        merge: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variants:merge')
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
        patch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variants/{variantId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['variantId'],
                pathParams: ['variantId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variants/search')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.variantsets = {
        /**
         * genomics.variantsets.create
         * @desc Creates a new variant set.  For the definitions of variant sets and
         * other genomics resources, see [Fundamentals of Google
         * Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         * The provided variant set must have a valid `datasetId` set - all other
         * fields are optional. Note that the `id` field will be ignored, as this is
         * assigned by the server.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.variantsets.create(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
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
         * @alias genomics.variantsets.create
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).VariantSet} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variantsets').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variantsets/{variantSetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['variantSetId'],
                pathParams: ['variantSetId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        export: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variantsets/{variantSetId}:export')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['variantSetId'],
                pathParams: ['variantSetId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variantsets/{variantSetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['variantSetId'],
                pathParams: ['variantSetId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variantsets/{variantSetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['variantSetId'],
                pathParams: ['variantSetId'],
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
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variantsets/search')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Genomics;
//# sourceMappingURL=v1.js.map