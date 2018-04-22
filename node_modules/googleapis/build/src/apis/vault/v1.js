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
 * Google Vault API
 *
 * Archiving and eDiscovery for G Suite.
 *
 * @example
 * const google = require('googleapis');
 * const vault = google.vault('v1');
 *
 * @namespace vault
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Vault
 */
function Vault(options) {
    var self = this;
    self._options = options || {};
    self.matters = {
        /**
         * vault.matters.addPermissions
         * @desc Adds an account as a matter collaborator.
         * @alias vault.matters.addPermissions
         * @memberOf! vault(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.matterId The matter ID.
         * @param {vault(v1).AddMatterPermissionsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        addPermissions: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}:addPermissions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        close: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}:close')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
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
            var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
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
            var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
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
            var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        removePermissions: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}:removePermissions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        reopen: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}:reopen')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
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
            var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}:undelete')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
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
            var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        holds: {
            /**
             * vault.matters.holds.create
             * @desc Creates a hold in the given matter.
             * @alias vault.matters.holds.create
             * @memberOf! vault(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.matterId The matter ID.
             * @param {vault(v1).Hold} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/matters/{matterId}/holds')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['matterId'],
                    pathParams: ['matterId'],
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
                var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['matterId', 'holdId'],
                    pathParams: ['holdId', 'matterId'],
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
                var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['matterId', 'holdId'],
                    pathParams: ['holdId', 'matterId'],
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
                var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/matters/{matterId}/holds')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['matterId'],
                    pathParams: ['matterId'],
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
                var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['matterId', 'holdId'],
                    pathParams: ['holdId', 'matterId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            accounts: {
                /**
                 * vault.matters.holds.accounts.create
                 * @desc Adds a HeldAccount to a hold. Accounts can only be added to a
                 * hold that has no held_org_unit set. Attempting to add an account to
                 * an OU-based hold will result in an error.
                 * @alias vault.matters.holds.accounts.create
                 * @memberOf! vault(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.holdId The hold ID.
                 * @param {string} params.matterId The matter ID.
                 * @param {vault(v1).HeldAccount} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1/matters/{matterId}/holds/{holdId}/accounts')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['matterId', 'holdId'],
                        pathParams: ['holdId', 'matterId'],
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
                    var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1/matters/{matterId}/holds/{holdId}/accounts/{accountId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['matterId', 'holdId', 'accountId'],
                        pathParams: ['accountId', 'holdId', 'matterId'],
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
                    var rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1/matters/{matterId}/holds/{holdId}/accounts')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['matterId', 'holdId'],
                        pathParams: ['holdId', 'matterId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            }
        }
    };
}
module.exports = Vault;
//# sourceMappingURL=v1.js.map