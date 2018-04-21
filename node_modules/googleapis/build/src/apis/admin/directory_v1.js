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
 * Admin Directory API
 *
 * The Admin SDK Directory API lets you view and manage enterprise resources
 * such as users and groups, administrative notifications, security features,
 * and more.
 *
 * @example
 * const google = require('googleapis');
 * const admin = google.admin('directory_v1');
 *
 * @namespace admin
 * @type {Function}
 * @version directory_v1
 * @variation directory_v1
 * @param {object=} options Options for Admin
 */
function Admin(options) {
    var self = this;
    self._options = options || {};
    self.asps = {
        /**
         * directory.asps.delete
         * @desc Delete an ASP issued by a user.
         * @alias directory.asps.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.codeId The unique ID of the ASP to be deleted.
         * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/admin/directory/v1/users/{userKey}/asps/{codeId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['userKey', 'codeId'],
                pathParams: ['codeId', 'userKey'],
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
                        '/admin/directory/v1/users/{userKey}/asps/{codeId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userKey', 'codeId'],
                pathParams: ['codeId', 'userKey'],
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
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}/asps')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.channels = {
        /**
         * admin.channels.stop
         * @desc Stop watching resources through this channel
         * @alias admin.channels.stop
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {admin(directory_v1).Channel} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        stop: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/admin/directory/v1/admin/directory_v1/channels/stop')
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
    self.chromeosdevices = {
        /**
         * directory.chromeosdevices.action
         * @desc Take action on Chrome OS Device
         * @alias directory.chromeosdevices.action
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.resourceId Immutable ID of Chrome OS Device
         * @param {admin(directory_v1).ChromeOsDeviceAction} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        action: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customerId', 'resourceId'],
                pathParams: ['customerId', 'resourceId'],
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
                        '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId', 'deviceId'],
                pathParams: ['customerId', 'deviceId'],
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
                        '/admin/directory/v1/customer/{customerId}/devices/chromeos')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId'],
                pathParams: ['customerId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        moveDevicesToOu: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customerId', 'orgUnitPath'],
                pathParams: ['customerId'],
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
                        '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['customerId', 'deviceId'],
                pathParams: ['customerId', 'deviceId'],
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
                        '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['customerId', 'deviceId'],
                pathParams: ['customerId', 'deviceId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.customers = {
        /**
         * directory.customers.get
         * @desc Retrieves a customer.
         * @alias directory.customers.get
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerKey Id of the customer to be retrieved
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
                    url: (rootUrl + '/admin/directory/v1/customers/{customerKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerKey'],
                pathParams: ['customerKey'],
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
                    url: (rootUrl + '/admin/directory/v1/customers/{customerKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['customerKey'],
                pathParams: ['customerKey'],
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
                    url: (rootUrl + '/admin/directory/v1/customers/{customerKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['customerKey'],
                pathParams: ['customerKey'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.domainAliases = {
        /**
         * directory.domainAliases.delete
         * @desc Deletes a Domain Alias of the customer.
         * @alias directory.domainAliases.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.domainAliasName Name of domain alias to be retrieved.
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['customer', 'domainAliasName'],
                pathParams: ['customer', 'domainAliasName'],
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
                        '/admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer', 'domainAliasName'],
                pathParams: ['customer', 'domainAliasName'],
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
                        '/admin/directory/v1/customer/{customer}/domainaliases')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
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
                        '/admin/directory/v1/customer/{customer}/domainaliases')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.domains = {
        /**
         * directory.domains.delete
         * @desc Deletes a domain of the customer.
         * @alias directory.domains.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.domainName Name of domain to be deleted
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/admin/directory/v1/customer/{customer}/domains/{domainName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['customer', 'domainName'],
                pathParams: ['customer', 'domainName'],
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
                        '/admin/directory/v1/customer/{customer}/domains/{domainName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer', 'domainName'],
                pathParams: ['customer', 'domainName'],
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/domains')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/domains')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.groups = {
        /**
         * directory.groups.delete
         * @desc Delete Group
         * @alias directory.groups.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable ID of the group
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/groups/{groupKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['groupKey'],
                pathParams: ['groupKey'],
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
                    url: (rootUrl + '/admin/directory/v1/groups/{groupKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['groupKey'],
                pathParams: ['groupKey'],
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
                    url: (rootUrl + '/admin/directory/v1/groups')
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
        list: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/groups')
                        .replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/groups/{groupKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['groupKey'],
                pathParams: ['groupKey'],
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
                    url: (rootUrl + '/admin/directory/v1/groups/{groupKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['groupKey'],
                pathParams: ['groupKey'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        aliases: {
            /**
             * directory.groups.aliases.delete
             * @desc Remove a alias for the group
             * @alias directory.groups.aliases.delete
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.alias The alias to be removed
             * @param {string} params.groupKey Email or immutable ID of the group
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
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/admin/directory/v1/groups/{groupKey}/aliases/{alias}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['groupKey', 'alias'],
                    pathParams: ['alias', 'groupKey'],
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
                        url: (rootUrl + '/admin/directory/v1/groups/{groupKey}/aliases')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['groupKey'],
                    pathParams: ['groupKey'],
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
                        url: (rootUrl + '/admin/directory/v1/groups/{groupKey}/aliases')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['groupKey'],
                    pathParams: ['groupKey'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.members = {
        /**
         * directory.members.delete
         * @desc Remove membership.
         * @alias directory.members.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable ID of the group
         * @param {string} params.memberKey Email or immutable ID of the member
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/admin/directory/v1/groups/{groupKey}/members/{memberKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['groupKey', 'memberKey'],
                pathParams: ['groupKey', 'memberKey'],
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
                        '/admin/directory/v1/groups/{groupKey}/members/{memberKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['groupKey', 'memberKey'],
                pathParams: ['groupKey', 'memberKey'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        hasMember: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/admin/directory/v1/groups/{groupKey}/hasMember/{memberKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['groupKey', 'memberKey'],
                pathParams: ['groupKey', 'memberKey'],
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
                    url: (rootUrl + '/admin/directory/v1/groups/{groupKey}/members')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['groupKey'],
                pathParams: ['groupKey'],
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
                    url: (rootUrl + '/admin/directory/v1/groups/{groupKey}/members')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['groupKey'],
                pathParams: ['groupKey'],
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
                        '/admin/directory/v1/groups/{groupKey}/members/{memberKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['groupKey', 'memberKey'],
                pathParams: ['groupKey', 'memberKey'],
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
                        '/admin/directory/v1/groups/{groupKey}/members/{memberKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['groupKey', 'memberKey'],
                pathParams: ['groupKey', 'memberKey'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.mobiledevices = {
        /**
         * directory.mobiledevices.action
         * @desc Take action on Mobile Device
         * @alias directory.mobiledevices.action
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.resourceId Immutable ID of Mobile Device
         * @param {admin(directory_v1).MobileDeviceAction} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        action: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customerId', 'resourceId'],
                pathParams: ['customerId', 'resourceId'],
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
                        '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['customerId', 'resourceId'],
                pathParams: ['customerId', 'resourceId'],
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
                        '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId', 'resourceId'],
                pathParams: ['customerId', 'resourceId'],
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
                        '/admin/directory/v1/customer/{customerId}/devices/mobile')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId'],
                pathParams: ['customerId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.notifications = {
        /**
         * directory.notifications.delete
         * @desc Deletes a notification
         * @alias directory.notifications.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account. The customerId is also returned as part of the Users resource.
         * @param {string} params.notificationId The unique ID of the notification.
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/admin/directory/v1/customer/{customer}/notifications/{notificationId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['customer', 'notificationId'],
                pathParams: ['customer', 'notificationId'],
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
                        '/admin/directory/v1/customer/{customer}/notifications/{notificationId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer', 'notificationId'],
                pathParams: ['customer', 'notificationId'],
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
                        '/admin/directory/v1/customer/{customer}/notifications')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
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
                        '/admin/directory/v1/customer/{customer}/notifications/{notificationId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['customer', 'notificationId'],
                pathParams: ['customer', 'notificationId'],
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
                        '/admin/directory/v1/customer/{customer}/notifications/{notificationId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['customer', 'notificationId'],
                pathParams: ['customer', 'notificationId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.orgunits = {
        /**
         * directory.orgunits.delete
         * @desc Remove organizational unit
         * @alias directory.orgunits.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.orgUnitPath Full path of the organizational unit or its ID
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['customerId', 'orgUnitPath'],
                pathParams: ['customerId', 'orgUnitPath'],
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
                        '/admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId', 'orgUnitPath'],
                pathParams: ['customerId', 'orgUnitPath'],
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
                        '/admin/directory/v1/customer/{customerId}/orgunits')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customerId'],
                pathParams: ['customerId'],
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
                        '/admin/directory/v1/customer/{customerId}/orgunits')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId'],
                pathParams: ['customerId'],
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
                        '/admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['customerId', 'orgUnitPath'],
                pathParams: ['customerId', 'orgUnitPath'],
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
                        '/admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['customerId', 'orgUnitPath'],
                pathParams: ['customerId', 'orgUnitPath'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.privileges = {
        /**
         * directory.privileges.list
         * @desc Retrieves a paginated list of all privileges for a customer.
         * @alias directory.privileges.list
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
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
                        '/admin/directory/v1/customer/{customer}/roles/ALL/privileges')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.resolvedAppAccessSettings = {
        /**
         * directory.resolvedAppAccessSettings.GetSettings
         * @desc Retrieves resolved app access settings of the logged in user.
         * @alias directory.resolvedAppAccessSettings.GetSettings
         * @memberOf! admin(directory_v1)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        GetSettings: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/resolvedappaccesssettings')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        ListTrustedApps: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/trustedapps')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.resources =
        {
            buildings: {
                /**
                 * directory.resources.buildings.delete
                 * @desc Deletes a building.
                 * @alias directory.resources.buildings.delete
                 * @memberOf! admin(directory_v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.buildingId The ID of the building to delete.
                 * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['customer', 'buildingId'],
                        pathParams: ['buildingId', 'customer'],
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
                                '/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['customer', 'buildingId'],
                        pathParams: ['buildingId', 'customer'],
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
                                '/admin/directory/v1/customer/{customer}/resources/buildings')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['customer'],
                        pathParams: ['customer'],
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
                                '/admin/directory/v1/customer/{customer}/resources/buildings')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['customer'],
                        pathParams: ['customer'],
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
                                '/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['customer', 'buildingId'],
                        pathParams: ['buildingId', 'customer'],
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
                                '/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['customer', 'buildingId'],
                        pathParams: ['buildingId', 'customer'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            },
            calendars: {
                /**
                 * directory.resources.calendars.delete
                 * @desc Deletes a calendar resource.
                 * @alias directory.resources.calendars.delete
                 * @memberOf! admin(directory_v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.calendarResourceId The unique ID of the calendar resource to delete.
                 * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['customer', 'calendarResourceId'],
                        pathParams: ['calendarResourceId', 'customer'],
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
                                '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['customer', 'calendarResourceId'],
                        pathParams: ['calendarResourceId', 'customer'],
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
                                '/admin/directory/v1/customer/{customer}/resources/calendars')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['customer'],
                        pathParams: ['customer'],
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
                                '/admin/directory/v1/customer/{customer}/resources/calendars')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['customer'],
                        pathParams: ['customer'],
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
                                '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['customer', 'calendarResourceId'],
                        pathParams: ['calendarResourceId', 'customer'],
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
                                '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['customer', 'calendarResourceId'],
                        pathParams: ['calendarResourceId', 'customer'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            },
            features: {
                /**
                 * directory.resources.features.delete
                 * @desc Deletes a feature.
                 * @alias directory.resources.features.delete
                 * @memberOf! admin(directory_v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
                 * @param {string} params.featureKey The unique ID of the feature to delete.
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
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/admin/directory/v1/customer/{customer}/resources/features/{featureKey}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['customer', 'featureKey'],
                        pathParams: ['customer', 'featureKey'],
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
                                '/admin/directory/v1/customer/{customer}/resources/features/{featureKey}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['customer', 'featureKey'],
                        pathParams: ['customer', 'featureKey'],
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
                                '/admin/directory/v1/customer/{customer}/resources/features')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['customer'],
                        pathParams: ['customer'],
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
                                '/admin/directory/v1/customer/{customer}/resources/features')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['customer'],
                        pathParams: ['customer'],
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
                                '/admin/directory/v1/customer/{customer}/resources/features/{featureKey}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['customer', 'featureKey'],
                        pathParams: ['customer', 'featureKey'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                rename: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['customer', 'oldName'],
                        pathParams: ['customer', 'oldName'],
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
                                '/admin/directory/v1/customer/{customer}/resources/features/{featureKey}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['customer', 'featureKey'],
                        pathParams: ['customer', 'featureKey'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            }
        };
    self.roleAssignments = {
        /**
         * directory.roleAssignments.delete
         * @desc Deletes a role assignment.
         * @alias directory.roleAssignments.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.roleAssignmentId Immutable ID of the role assignment.
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['customer', 'roleAssignmentId'],
                pathParams: ['customer', 'roleAssignmentId'],
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
                        '/admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer', 'roleAssignmentId'],
                pathParams: ['customer', 'roleAssignmentId'],
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
                        '/admin/directory/v1/customer/{customer}/roleassignments')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
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
                        '/admin/directory/v1/customer/{customer}/roleassignments')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.roles = {
        /**
         * directory.roles.delete
         * @desc Deletes a role.
         * @alias directory.roles.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.roleId Immutable ID of the role.
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/admin/directory/v1/customer/{customer}/roles/{roleId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['customer', 'roleId'],
                pathParams: ['customer', 'roleId'],
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
                        '/admin/directory/v1/customer/{customer}/roles/{roleId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer', 'roleId'],
                pathParams: ['customer', 'roleId'],
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/roles')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/roles')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
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
                        '/admin/directory/v1/customer/{customer}/roles/{roleId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['customer', 'roleId'],
                pathParams: ['customer', 'roleId'],
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
                        '/admin/directory/v1/customer/{customer}/roles/{roleId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['customer', 'roleId'],
                pathParams: ['customer', 'roleId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.schemas = {
        /**
         * directory.schemas.delete
         * @desc Delete schema
         * @alias directory.schemas.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.schemaKey Name or immutable ID of the schema
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['customerId', 'schemaKey'],
                pathParams: ['customerId', 'schemaKey'],
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
                        '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId', 'schemaKey'],
                pathParams: ['customerId', 'schemaKey'],
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
                        '/admin/directory/v1/customer/{customerId}/schemas')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customerId'],
                pathParams: ['customerId'],
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
                        '/admin/directory/v1/customer/{customerId}/schemas')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId'],
                pathParams: ['customerId'],
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
                        '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['customerId', 'schemaKey'],
                pathParams: ['customerId', 'schemaKey'],
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
                        '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['customerId', 'schemaKey'],
                pathParams: ['customerId', 'schemaKey'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.tokens = {
        /**
         * directory.tokens.delete
         * @desc Delete all access tokens issued by a user for an application.
         * @alias directory.tokens.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clientId The Client ID of the application the token is issued to.
         * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/admin/directory/v1/users/{userKey}/tokens/{clientId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['userKey', 'clientId'],
                pathParams: ['clientId', 'userKey'],
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
                        '/admin/directory/v1/users/{userKey}/tokens/{clientId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userKey', 'clientId'],
                pathParams: ['clientId', 'userKey'],
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
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}/tokens')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.users = {
        /**
         * directory.users.delete
         * @desc Delete user
         * @alias directory.users.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable ID of the user
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
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
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
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
                    url: (rootUrl + '/admin/directory/v1/users')
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
        list: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/users')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        makeAdmin: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}/makeAdmin')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
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
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}/undelete')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
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
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        watch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/users/watch')
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
        aliases: {
            /**
             * directory.users.aliases.delete
             * @desc Remove a alias for the user
             * @alias directory.users.aliases.delete
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.alias The alias to be removed
             * @param {string} params.userKey Email or immutable ID of the user
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
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/admin/directory/v1/users/{userKey}/aliases/{alias}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['userKey', 'alias'],
                    pathParams: ['alias', 'userKey'],
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
                        url: (rootUrl + '/admin/directory/v1/users/{userKey}/aliases')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['userKey'],
                    pathParams: ['userKey'],
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
                        url: (rootUrl + '/admin/directory/v1/users/{userKey}/aliases')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['userKey'],
                    pathParams: ['userKey'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            watch: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/admin/directory/v1/users/{userKey}/aliases/watch')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['userKey'],
                    pathParams: ['userKey'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        photos: {
            /**
             * directory.users.photos.delete
             * @desc Remove photos for the user
             * @alias directory.users.photos.delete
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.userKey Email or immutable ID of the user
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
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/admin/directory/v1/users/{userKey}/photos/thumbnail')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['userKey'],
                    pathParams: ['userKey'],
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
                            '/admin/directory/v1/users/{userKey}/photos/thumbnail')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['userKey'],
                    pathParams: ['userKey'],
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
                            '/admin/directory/v1/users/{userKey}/photos/thumbnail')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['userKey'],
                    pathParams: ['userKey'],
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
                            '/admin/directory/v1/users/{userKey}/photos/thumbnail')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['userKey'],
                    pathParams: ['userKey'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.verificationCodes = {
        /**
         * directory.verificationCodes.generate
         * @desc Generate new backup verification codes for the user.
         * @alias directory.verificationCodes.generate
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable ID of the user
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/admin/directory/v1/users/{userKey}/verificationCodes/generate')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        invalidate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/admin/directory/v1/users/{userKey}/verificationCodes/invalidate')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
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
                        '/admin/directory/v1/users/{userKey}/verificationCodes')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Admin;
//# sourceMappingURL=directory_v1.js.map