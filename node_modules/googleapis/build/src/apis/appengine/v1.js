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
 * const appengine = google.appengine('v1');
 *
 * @namespace appengine
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Appengine
 */
function Appengine(options) {
    var self = this;
    self._options = options || {};
    self.apps =
        {
            /**
             * appengine.apps.create
             * @desc Creates an App Engine application for a Google Cloud Platform
             * project. Required fields: id - The ID of the target Cloud Platform
             * project. location - The region
             * (https://cloud.google.com/appengine/docs/locations) where you want
             * the App Engine application located.For more information about App
             * Engine applications, see Managing Projects, Applications, and Billing
             * (https://cloud.google.com/appengine/docs/python/console/).
             * @alias appengine.apps.create
             * @memberOf! appengine(v1)
             *
             * @param {object} params Parameters for request
             * @param {appengine(v1).Application} params.resource Request body data
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
                        url: (rootUrl + '/v1/apps').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: [],
                    pathParams: [],
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
                        url: (rootUrl + '/v1/apps/{appsId}')
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
                        url: (rootUrl + '/v1/apps/{appsId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['appsId'],
                    pathParams: ['appsId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            repair: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/apps/{appsId}:repair')
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
            authorizedCertificates: {
                /**
                 * appengine.apps.authorizedCertificates.create
                 * @desc Uploads the specified SSL certificate.
                 * @alias appengine.apps.authorizedCertificates.create
                 * @memberOf! appengine(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
                 * @param {appengine(v1).AuthorizedCertificate} params.resource Request body data
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
                            url: (rootUrl + '/v1/apps/{appsId}/authorizedCertificates')
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
                                '/v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}')
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
                                '/v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}')
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
                            url: (rootUrl + '/v1/apps/{appsId}/authorizedCertificates')
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
                                '/v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}')
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
                 * @memberOf! appengine(v1)
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
                            url: (rootUrl + '/v1/apps/{appsId}/authorizedDomains')
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
                 * administer a domain in order to map it to an application. For a
                 * list of available authorized domains, see
                 * AuthorizedDomains.ListAuthorizedDomains.
                 * @alias appengine.apps.domainMappings.create
                 * @memberOf! appengine(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
                 * @param {string=} params.overrideStrategy Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
                 * @param {appengine(v1).DomainMapping} params.resource Request body data
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
                            url: (rootUrl + '/v1/apps/{appsId}/domainMappings')
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
                                '/v1/apps/{appsId}/domainMappings/{domainMappingsId}')
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
                                '/v1/apps/{appsId}/domainMappings/{domainMappingsId}')
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
                            url: (rootUrl + '/v1/apps/{appsId}/domainMappings')
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
                                '/v1/apps/{appsId}/domainMappings/{domainMappingsId}')
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
            firewall: {
                ingressRules: {
                    /**
                     * appengine.apps.firewall.ingressRules.batchUpdate
                     * @desc Replaces the entire firewall ruleset in one bulk operation.
                     * This overrides and replaces the rules of an existing firewall
                     * with the new rules.If the final rule does not match traffic with
                     * the '*' wildcard IP range, then an "allow all" rule is explicitly
                     * added to the end of the list.
                     * @alias appengine.apps.firewall.ingressRules.batchUpdate
                     * @memberOf! appengine(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.appsId Part of `name`. Name of the Firewall collection to set. Example: apps/myapp/firewall/ingressRules.
                     * @param {appengine(v1).BatchUpdateIngressRulesRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    batchUpdate: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/apps/{appsId}/firewall/ingressRules:batchUpdate')
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
                    create: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/apps/{appsId}/firewall/ingressRules')
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
                                    '/v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['appsId', 'ingressRulesId'],
                            pathParams: ['appsId', 'ingressRulesId'],
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
                                    '/v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['appsId', 'ingressRulesId'],
                            pathParams: ['appsId', 'ingressRulesId'],
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
                                url: (rootUrl + '/v1/apps/{appsId}/firewall/ingressRules')
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
                                    '/v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PATCH'
                            }, options),
                            params: params,
                            requiredParams: ['appsId', 'ingressRulesId'],
                            pathParams: ['appsId', 'ingressRulesId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                }
            },
            locations: {
                /**
                 * appengine.apps.locations.get
                 * @desc Get information about a location.
                 * @alias appengine.apps.locations.get
                 * @memberOf! appengine(v1)
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
                            url: (rootUrl + '/v1/apps/{appsId}/locations/{locationsId}')
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
                            url: (rootUrl + '/v1/apps/{appsId}/locations')
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
                 * @desc Gets the latest state of a long-running operation. Clients
                 * can use this method to poll the operation result at intervals as
                 * recommended by the API service.
                 * @alias appengine.apps.operations.get
                 * @memberOf! appengine(v1)
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
                                '/v1/apps/{appsId}/operations/{operationsId}')
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
                            url: (rootUrl + '/v1/apps/{appsId}/operations')
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
            services: {
                /**
                 * appengine.apps.services.delete
                 * @desc Deletes the specified service and all enclosed versions.
                 * @alias appengine.apps.services.delete
                 * @memberOf! appengine(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
                 * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
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
                    var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/apps/{appsId}/services/{servicesId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['appsId', 'servicesId'],
                        pathParams: ['appsId', 'servicesId'],
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
                            url: (rootUrl + '/v1/apps/{appsId}/services/{servicesId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['appsId', 'servicesId'],
                        pathParams: ['appsId', 'servicesId'],
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
                            url: (rootUrl + '/v1/apps/{appsId}/services')
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
                            url: (rootUrl + '/v1/apps/{appsId}/services/{servicesId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['appsId', 'servicesId'],
                        pathParams: ['appsId', 'servicesId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                versions: {
                    /**
                     * appengine.apps.services.versions.create
                     * @desc Deploys code and resource files to a new version.
                     * @alias appengine.apps.services.versions.create
                     * @memberOf! appengine(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.appsId Part of `parent`. Name of the parent resource to create this version under. Example: apps/myapp/services/default.
                     * @param {string} params.servicesId Part of `parent`. See documentation of `appsId`.
                     * @param {appengine(v1).Version} params.resource Request body data
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
                                url: (rootUrl +
                                    '/v1/apps/{appsId}/services/{servicesId}/versions')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['appsId', 'servicesId'],
                            pathParams: ['appsId', 'servicesId'],
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
                                    '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['appsId', 'servicesId', 'versionsId'],
                            pathParams: ['appsId', 'servicesId', 'versionsId'],
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
                                    '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['appsId', 'servicesId', 'versionsId'],
                            pathParams: ['appsId', 'servicesId', 'versionsId'],
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
                                url: (rootUrl +
                                    '/v1/apps/{appsId}/services/{servicesId}/versions')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['appsId', 'servicesId'],
                            pathParams: ['appsId', 'servicesId'],
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
                                    '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PATCH'
                            }, options),
                            params: params,
                            requiredParams: ['appsId', 'servicesId', 'versionsId'],
                            pathParams: ['appsId', 'servicesId', 'versionsId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    instances: {
                        /**
                         * appengine.apps.services.versions.instances.debug
                         * @desc Enables debugging on a VM instance. This allows you to
                         * use the SSH command to connect to the virtual machine where the
                         * instance lives. While in "debug mode", the instance continues
                         * to serve live traffic. You should delete the instance when you
                         * are done debugging and then allow the system to take over and
                         * determine if another instance should be started.Only applicable
                         * for instances in App Engine flexible environment.
                         * @alias appengine.apps.services.versions.instances.debug
                         * @memberOf! appengine(v1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
                         * @param {string} params.instancesId Part of `name`. See documentation of `appsId`.
                         * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
                         * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
                         * @param {appengine(v1).DebugInstanceRequest} params.resource Request body data
                         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                         * @param {callback} callback The callback that handles the response.
                         * @return {object} Request object
                         */
                        debug: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}:debug')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['appsId', 'servicesId', 'versionsId', 'instancesId'],
                                pathParams: ['appsId', 'instancesId', 'servicesId', 'versionsId'],
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
                                        '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'DELETE'
                                }, options),
                                params: params,
                                requiredParams: ['appsId', 'servicesId', 'versionsId', 'instancesId'],
                                pathParams: ['appsId', 'instancesId', 'servicesId', 'versionsId'],
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
                                        '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['appsId', 'servicesId', 'versionsId', 'instancesId'],
                                pathParams: ['appsId', 'instancesId', 'servicesId', 'versionsId'],
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
                                    url: (rootUrl +
                                        '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['appsId', 'servicesId', 'versionsId'],
                                pathParams: ['appsId', 'servicesId', 'versionsId'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    }
                }
            }
        };
}
module.exports = Appengine;
//# sourceMappingURL=v1.js.map