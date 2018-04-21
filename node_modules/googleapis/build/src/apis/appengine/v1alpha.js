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
 * const appengine = google.appengine('v1alpha');
 *
 * @namespace appengine
 * @type {Function}
 * @version v1alpha
 * @variation v1alpha
 * @param {object=} options Options for Appengine
 */
function Appengine(options) {
    var self = this;
    self._options = options || {};
    self.apps = {
        authorizedCertificates: {
            /**
             * appengine.apps.authorizedCertificates.create
             * @desc Uploads the specified SSL certificate.
             * @alias appengine.apps.authorizedCertificates.create
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
             * @param {appengine(v1alpha).AuthorizedCertificate} params.resource Request body data
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
                        url: (rootUrl + '/v1alpha/apps/{appsId}/authorizedCertificates')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['appsId'],
                    pathParams: ['appsId'],
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
                            '/v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'authorizedCertificatesId'],
                    pathParams: ['appsId', 'authorizedCertificatesId'],
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
                            '/v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'authorizedCertificatesId'],
                    pathParams: ['appsId', 'authorizedCertificatesId'],
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
                        url: (rootUrl + '/v1alpha/apps/{appsId}/authorizedCertificates')
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
                        url: (rootUrl +
                            '/v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'authorizedCertificatesId'],
                    pathParams: ['appsId', 'authorizedCertificatesId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        authorizedDomains: {
            /**
             * appengine.apps.authorizedDomains.list
             * @desc Lists all domains the user is authorized to administer.
             * @alias appengine.apps.authorizedDomains.list
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
             * @param {integer=} params.pageSize Maximum results to return per page.
             * @param {string=} params.pageToken Continuation token for fetching the next page of results.
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
                var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha/apps/{appsId}/authorizedDomains')
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
        domainMappings: {
            /**
             * appengine.apps.domainMappings.create
             * @desc Maps a domain to an application. A user must be authorized to
             * administer a domain in order to map it to an application. For a list of
             * available authorized domains, see
             * AuthorizedDomains.ListAuthorizedDomains.
             * @alias appengine.apps.domainMappings.create
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
             * @param {boolean=} params.noManagedCertificate Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manaually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated.
             * @param {string=} params.overrideStrategy Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
             * @param {appengine(v1alpha).DomainMapping} params.resource Request body data
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
                        url: (rootUrl + '/v1alpha/apps/{appsId}/domainMappings')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['appsId'],
                    pathParams: ['appsId'],
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
                            '/v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'domainMappingsId'],
                    pathParams: ['appsId', 'domainMappingsId'],
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
                            '/v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'domainMappingsId'],
                    pathParams: ['appsId', 'domainMappingsId'],
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
                        url: (rootUrl + '/v1alpha/apps/{appsId}/domainMappings')
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
                        url: (rootUrl +
                            '/v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'domainMappingsId'],
                    pathParams: ['appsId', 'domainMappingsId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        locations: {
            /**
             * appengine.apps.locations.get
             * @desc Get information about a location.
             * @alias appengine.apps.locations.get
             * @memberOf! appengine(v1alpha)
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
                        url: (rootUrl + '/v1alpha/apps/{appsId}/locations/{locationsId}')
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
                        url: (rootUrl + '/v1alpha/apps/{appsId}/locations')
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
        operations: {
            /**
             * appengine.apps.operations.get
             * @desc Gets the latest state of a long-running operation. Clients can
             * use this method to poll the operation result at intervals as
             * recommended by the API service.
             * @alias appengine.apps.operations.get
             * @memberOf! appengine(v1alpha)
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
                            '/v1alpha/apps/{appsId}/operations/{operationsId}')
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
                        url: (rootUrl + '/v1alpha/apps/{appsId}/operations')
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
//# sourceMappingURL=v1alpha.js.map