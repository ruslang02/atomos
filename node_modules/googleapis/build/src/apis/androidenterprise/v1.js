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
 * Google Play EMM API
 *
 * Manages the deployment of apps to Android for Work users.
 *
 * @example
 * const google = require('googleapis');
 * const androidenterprise = google.androidenterprise('v1');
 *
 * @namespace androidenterprise
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Androidenterprise
 */
function Androidenterprise(options) {
    var self = this;
    self._options = options || {};
    self.devices = {
        /**
         * androidenterprise.devices.get
         * @desc Retrieves the details of a device.
         * @alias androidenterprise.devices.get
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deviceId The ID of the device.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId'],
                pathParams: ['deviceId', 'enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        getState: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId'],
                pathParams: ['deviceId', 'enterpriseId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId'],
                pathParams: ['deviceId', 'enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        setState: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId'],
                pathParams: ['deviceId', 'enterpriseId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId'],
                pathParams: ['deviceId', 'enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.enterprises = {
        /**
         * androidenterprise.enterprises.acknowledgeNotificationSet
         * @desc Acknowledges notifications that were received from
         * Enterprises.PullNotificationSet to prevent subsequent calls from
         * returning the same notifications.
         * @alias androidenterprise.enterprises.acknowledgeNotificationSet
         * @memberOf! androidenterprise(v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.notificationSetId The notification set ID as returned by Enterprises.PullNotificationSet. This must be provided.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        acknowledgeNotificationSet: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/acknowledgeNotificationSet')
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
        completeSignup: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/androidenterprise/v1/enterprises/completeSignup')
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
        createWebToken: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/createWebToken')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
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
                    url: (rootUrl + '/androidenterprise/v1/enterprises/{enterpriseId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        enroll: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/androidenterprise/v1/enterprises/enroll')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['token'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        generateSignupUrl: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/androidenterprise/v1/enterprises/signupUrl')
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
        get: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/androidenterprise/v1/enterprises/{enterpriseId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        getAndroidDevicePolicyConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/androidDevicePolicyConfig')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        getServiceAccount: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccount')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        getStoreLayout: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
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
                    url: (rootUrl + '/androidenterprise/v1/enterprises')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['token'],
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
                    url: (rootUrl + '/androidenterprise/v1/enterprises')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['domain'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        pullNotificationSet: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/pullNotificationSet')
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
        sendTestPushNotification: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/sendTestPushNotification')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        setAccount: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/account')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        setAndroidDevicePolicyConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/androidDevicePolicyConfig')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        setStoreLayout: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        unenroll: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/unenroll')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.entitlements = {
        /**
         * androidenterprise.entitlements.delete
         * @desc Removes an entitlement to an app for a user.
         * @alias androidenterprise.entitlements.delete
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.entitlementId The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'entitlementId'],
                pathParams: ['enterpriseId', 'entitlementId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'entitlementId'],
                pathParams: ['enterpriseId', 'entitlementId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'entitlementId'],
                pathParams: ['enterpriseId', 'entitlementId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'entitlementId'],
                pathParams: ['enterpriseId', 'entitlementId', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.grouplicenses = {
        /**
         * androidenterprise.grouplicenses.get
         * @desc Retrieves details of an enterprise's group license for a product.
         * @alias androidenterprise.grouplicenses.get
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.groupLicenseId The ID of the product the group license is for, e.g. "app:com.google.android.gm".
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'groupLicenseId'],
                pathParams: ['enterpriseId', 'groupLicenseId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.grouplicenseusers = {
        /**
         * androidenterprise.grouplicenseusers.list
         * @desc Retrieves the IDs of the users who have been granted entitlements
         * under the license.
         * @alias androidenterprise.grouplicenseusers.list
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.groupLicenseId The ID of the product the group license is for, e.g. "app:com.google.android.gm".
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}/users')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'groupLicenseId'],
                pathParams: ['enterpriseId', 'groupLicenseId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.installs = {
        /**
         * androidenterprise.installs.delete
         * @desc Requests to remove an app from a device. A call to get or list will
         * still show the app as installed on the device until it is actually
         * removed.
         * @alias androidenterprise.installs.delete
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deviceId The Android ID of the device.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.installId The ID of the product represented by the install, e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId', 'installId'],
                pathParams: ['deviceId', 'enterpriseId', 'installId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId', 'installId'],
                pathParams: ['deviceId', 'enterpriseId', 'installId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId'],
                pathParams: ['deviceId', 'enterpriseId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId', 'installId'],
                pathParams: ['deviceId', 'enterpriseId', 'installId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId', 'installId'],
                pathParams: ['deviceId', 'enterpriseId', 'installId', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.managedconfigurationsfordevice = {
        /**
         * androidenterprise.managedconfigurationsfordevice.delete
         * @desc Removes a per-device managed configuration for an app for the
         * specified device.
         * @alias androidenterprise.managedconfigurationsfordevice.delete
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deviceId The Android ID of the device.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.managedConfigurationForDeviceId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: [
                    'enterpriseId', 'userId', 'deviceId',
                    'managedConfigurationForDeviceId'
                ],
                pathParams: [
                    'deviceId', 'enterpriseId', 'managedConfigurationForDeviceId',
                    'userId'
                ],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [
                    'enterpriseId', 'userId', 'deviceId',
                    'managedConfigurationForDeviceId'
                ],
                pathParams: [
                    'deviceId', 'enterpriseId', 'managedConfigurationForDeviceId',
                    'userId'
                ],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId'],
                pathParams: ['deviceId', 'enterpriseId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: [
                    'enterpriseId', 'userId', 'deviceId',
                    'managedConfigurationForDeviceId'
                ],
                pathParams: [
                    'deviceId', 'enterpriseId', 'managedConfigurationForDeviceId',
                    'userId'
                ],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: [
                    'enterpriseId', 'userId', 'deviceId',
                    'managedConfigurationForDeviceId'
                ],
                pathParams: [
                    'deviceId', 'enterpriseId', 'managedConfigurationForDeviceId',
                    'userId'
                ],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.managedconfigurationsforuser = {
        /**
         * androidenterprise.managedconfigurationsforuser.delete
         * @desc Removes a per-user managed configuration for an app for the
         * specified user.
         * @alias androidenterprise.managedconfigurationsforuser.delete
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.managedConfigurationForUserId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'managedConfigurationForUserId'],
                pathParams: ['enterpriseId', 'managedConfigurationForUserId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'managedConfigurationForUserId'],
                pathParams: ['enterpriseId', 'managedConfigurationForUserId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'managedConfigurationForUserId'],
                pathParams: ['enterpriseId', 'managedConfigurationForUserId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'managedConfigurationForUserId'],
                pathParams: ['enterpriseId', 'managedConfigurationForUserId', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.managedconfigurationssettings = {
        /**
         * androidenterprise.managedconfigurationssettings.list
         * @desc Lists all the managed configurations settings for the specified
         * app. Only the ID and the name is set.
         * @alias androidenterprise.managedconfigurationssettings.list
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.productId The ID of the product for which the managed configurations settings applies to.
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/managedConfigurationsSettings')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'productId'],
                pathParams: ['enterpriseId', 'productId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.permissions = {
        /**
         * androidenterprise.permissions.get
         * @desc Retrieves details of an Android app permission for display to an
         * enterprise admin.
         * @alias androidenterprise.permissions.get
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The BCP47 tag for the user's preferred language (e.g. "en-US", "de")
         * @param {string} params.permissionId The ID of the permission.
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
                    url: (rootUrl + '/androidenterprise/v1/permissions/{permissionId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['permissionId'],
                pathParams: ['permissionId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.products = {
        /**
         * androidenterprise.products.approve
         * @desc Approves the specified product and the relevant app permissions, if
         * any. The maximum number of products that you can approve per enterprise
         * customer is 1,000.  To learn how to use managed Google Play to design and
         * create a store layout to display approved products to your users, see
         * Store Layout Design.
         * @alias androidenterprise.products.approve
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.productId The ID of the product.
         * @param {androidenterprise(v1).ProductsApproveRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        approve: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/approve')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'productId'],
                pathParams: ['enterpriseId', 'productId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        generateApprovalUrl: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/generateApprovalUrl')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'productId'],
                pathParams: ['enterpriseId', 'productId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'productId'],
                pathParams: ['enterpriseId', 'productId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        getAppRestrictionsSchema: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/appRestrictionsSchema')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'productId'],
                pathParams: ['enterpriseId', 'productId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        getPermissions: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/permissions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'productId'],
                pathParams: ['enterpriseId', 'productId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/products')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        unapprove: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/unapprove')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'productId'],
                pathParams: ['enterpriseId', 'productId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.serviceaccountkeys = {
        /**
         * androidenterprise.serviceaccountkeys.delete
         * @desc Removes and invalidates the specified credentials for the service
         * account associated with this enterprise. The calling service account must
         * have been retrieved by calling Enterprises.GetServiceAccount and must
         * have been set as the enterprise service account by calling
         * Enterprises.SetAccount.
         * @alias androidenterprise.serviceaccountkeys.delete
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.keyId The ID of the key.
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys/{keyId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'keyId'],
                pathParams: ['enterpriseId', 'keyId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.storelayoutclusters = {
        /**
         * androidenterprise.storelayoutclusters.delete
         * @desc Deletes a cluster.
         * @alias androidenterprise.storelayoutclusters.delete
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The ID of the cluster.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.pageId The ID of the page.
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId', 'clusterId'],
                pathParams: ['clusterId', 'enterpriseId', 'pageId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId', 'clusterId'],
                pathParams: ['clusterId', 'enterpriseId', 'pageId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId'],
                pathParams: ['enterpriseId', 'pageId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId'],
                pathParams: ['enterpriseId', 'pageId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId', 'clusterId'],
                pathParams: ['clusterId', 'enterpriseId', 'pageId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId', 'clusterId'],
                pathParams: ['clusterId', 'enterpriseId', 'pageId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.storelayoutpages = {
        /**
         * androidenterprise.storelayoutpages.delete
         * @desc Deletes a store page.
         * @alias androidenterprise.storelayoutpages.delete
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.pageId The ID of the page.
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId'],
                pathParams: ['enterpriseId', 'pageId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId'],
                pathParams: ['enterpriseId', 'pageId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId'],
                pathParams: ['enterpriseId', 'pageId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId'],
                pathParams: ['enterpriseId', 'pageId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.users = {
        /**
         * androidenterprise.users.delete
         * @desc Deleted an EMM-managed user.
         * @alias androidenterprise.users.delete
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        generateAuthenticationToken: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/authenticationToken')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        generateToken: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/token')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        getAvailableProductSet: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'email'],
                pathParams: ['enterpriseId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        revokeDeviceAccess: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/deviceAccess')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        revokeToken: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/token')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        setAvailableProductSet: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
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
                        '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Androidenterprise;
//# sourceMappingURL=v1.js.map