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
 * Google Cloud DNS API
 *
 * Configures and serves authoritative DNS records.
 *
 * @example
 * const google = require('googleapis');
 * const dns = google.dns('v2beta1');
 *
 * @namespace dns
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Dns
 */
function Dns(options) {
    var self = this;
    self._options = options || {};
    self.changes = {
        /**
         * dns.changes.create
         * @desc Atomically update the ResourceRecordSet collection.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: 'my-project',  // TODO: Update placeholder value.
         *
         *     // Identifies the managed zone addressed by this request. Can be the
         * managed zone name or id. managedZone: 'my-managed-zone',  // TODO: Update
         * placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   dns.changes.create(request, function(err, response) {
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
         * @alias dns.changes.create
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
         * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @param {string} params.project Identifies the project addressed by this request.
         * @param {dns(v2beta1).Change} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/dns/v2beta1/projects/{project}/managedZones/{managedZone}/changes')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
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
                        '/dns/v2beta1/projects/{project}/managedZones/{managedZone}/changes/{changeId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone', 'changeId'],
                pathParams: ['changeId', 'managedZone', 'project'],
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
                        '/dns/v2beta1/projects/{project}/managedZones/{managedZone}/changes')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.dnsKeys = {
        /**
         * dns.dnsKeys.get
         * @desc Fetch the representation of an existing DnsKey.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: 'my-project',  // TODO: Update placeholder value.
         *
         *     // Identifies the managed zone addressed by this request. Can be the
         * managed zone name or id. managedZone: 'my-managed-zone',  // TODO: Update
         * placeholder value.
         *
         *     // The identifier of the requested DnsKey.
         *     dnsKeyId: 'my-dns-key-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dns.dnsKeys.get(request, function(err, response) {
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
         * @alias dns.dnsKeys.get
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
         * @param {string=} params.digestType An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type will be computed and displayed.
         * @param {string} params.dnsKeyId The identifier of the requested DnsKey.
         * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @param {string} params.project Identifies the project addressed by this request.
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
                        '/dns/v2beta1/projects/{project}/managedZones/{managedZone}/dnsKeys/{dnsKeyId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone', 'dnsKeyId'],
                pathParams: ['dnsKeyId', 'managedZone', 'project'],
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
                        '/dns/v2beta1/projects/{project}/managedZones/{managedZone}/dnsKeys')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.managedZoneOperations = {
        /**
         * dns.managedZoneOperations.get
         * @desc Fetch the representation of an existing Operation.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: 'my-project',  // TODO: Update placeholder value.
         *
         *     // Identifies the managed zone addressed by this request.
         *     managedZone: 'my-managed-zone',  // TODO: Update placeholder value.
         *
         *     // Identifies the operation addressed by this request.
         *     operation: 'my-operation',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dns.managedZoneOperations.get(request, function(err, response) {
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
         * @alias dns.managedZoneOperations.get
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
         * @param {string} params.managedZone Identifies the managed zone addressed by this request.
         * @param {string} params.operation Identifies the operation addressed by this request.
         * @param {string} params.project Identifies the project addressed by this request.
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
                        '/dns/v2beta1/projects/{project}/managedZones/{managedZone}/operations/{operation}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone', 'operation'],
                pathParams: ['managedZone', 'operation', 'project'],
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
                        '/dns/v2beta1/projects/{project}/managedZones/{managedZone}/operations')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.managedZones = {
        /**
         * dns.managedZones.create
         * @desc Create a new ManagedZone.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: 'my-project',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   dns.managedZones.create(request, function(err, response) {
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
         * @alias dns.managedZones.create
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
         * @param {string} params.project Identifies the project addressed by this request.
         * @param {dns(v2beta1).ManagedZone} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/dns/v2beta1/projects/{project}/managedZones')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
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
                        '/dns/v2beta1/projects/{project}/managedZones/{managedZone}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
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
                        '/dns/v2beta1/projects/{project}/managedZones/{managedZone}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
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
                    url: (rootUrl + '/dns/v2beta1/projects/{project}/managedZones')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/dns/v2beta1/projects/{project}/managedZones/{managedZone}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/dns/v2beta1/projects/{project}/managedZones/{managedZone}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.projects = {
        /**
         * dns.projects.get
         * @desc Fetch the representation of an existing Project.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: 'my-project',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dns.projects.get(request, function(err, response) {
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
         * @alias dns.projects.get
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
         * @param {string} params.project Identifies the project addressed by this request.
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
                    url: (rootUrl + '/dns/v2beta1/projects/{project}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.resourceRecordSets = {
        /**
         * dns.resourceRecordSets.list
         * @desc Enumerate ResourceRecordSets that have been created but not yet
         * deleted.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: 'my-project',  // TODO: Update placeholder value.
         *
         *     // Identifies the managed zone addressed by this request. Can be the
         * managed zone name or id. managedZone: 'my-managed-zone',  // TODO: Update
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
         *     var rrsetsPage = response['rrsets'];
         *     if (!rrsetsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < rrsetsPage.length; i++) {
         *       // TODO: Change code below to process each resource in
         * `rrsetsPage`: console.log(JSON.stringify(rrsetsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dns.resourceRecordSets.list(request, handlePage);
         *     }
         *   };
         *
         *   dns.resourceRecordSets.list(request, handlePage);
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
         * @alias dns.resourceRecordSets.list
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @param {integer=} params.maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
         * @param {string=} params.name Restricts the list to return only records with this fully qualified domain name.
         * @param {string=} params.pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
         * @param {string} params.project Identifies the project addressed by this request.
         * @param {string=} params.type Restricts the list to return only records of this type. If present, the "name" parameter must also be present.
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/dns/v2beta1/projects/{project}/managedZones/{managedZone}/rrsets')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Dns;
//# sourceMappingURL=v2beta1.js.map