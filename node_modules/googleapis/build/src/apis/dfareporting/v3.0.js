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
 * DCM/DFA Reporting And Trafficking API
 *
 * Manages your DoubleClick Campaign Manager ad campaigns and reports.
 *
 * @example
 * const google = require('googleapis');
 * const dfareporting = google.dfareporting('v3.0');
 *
 * @namespace dfareporting
 * @type {Function}
 * @version v3.0
 * @variation v3.0
 * @param {object=} options Options for Dfareporting
 */
function Dfareporting(options) {
    var self = this;
    self._options = options || {};
    self.accountActiveAdSummaries = {
        /**
         * dfareporting.accountActiveAdSummaries.get
         * @desc Gets the account's active ad summary by account ID.
         * @alias dfareporting.accountActiveAdSummaries.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string} params.summaryAccountId Account ID.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/accountActiveAdSummaries/{summaryAccountId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'summaryAccountId'],
                pathParams: ['profileId', 'summaryAccountId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.accountPermissionGroups = {
        /**
         * dfareporting.accountPermissionGroups.get
         * @desc Gets one account permission group by ID.
         * @alias dfareporting.accountPermissionGroups.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Account permission group ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/accountPermissionGroups/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/accountPermissionGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.accountPermissions = {
        /**
         * dfareporting.accountPermissions.get
         * @desc Gets one account permission by ID.
         * @alias dfareporting.accountPermissions.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Account permission ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/accountPermissions/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/accountPermissions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.accounts = {
        /**
         * dfareporting.accounts.get
         * @desc Gets one account by ID.
         * @alias dfareporting.accounts.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Account ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/accounts/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/accounts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/accounts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/accounts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.accountUserProfiles = {
        /**
         * dfareporting.accountUserProfiles.get
         * @desc Gets one account user profile by ID.
         * @alias dfareporting.accountUserProfiles.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id User profile ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/accountUserProfiles/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/accountUserProfiles')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/accountUserProfiles')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/accountUserProfiles')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/accountUserProfiles')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.ads = {
        /**
         * dfareporting.ads.get
         * @desc Gets one ad by ID.
         * @alias dfareporting.ads.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Ad ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/ads/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                    url: (rootUrl + '/dfareporting/v3.0/userprofiles/{profileId}/ads')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                    url: (rootUrl + '/dfareporting/v3.0/userprofiles/{profileId}/ads')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                    url: (rootUrl + '/dfareporting/v3.0/userprofiles/{profileId}/ads')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                    url: (rootUrl + '/dfareporting/v3.0/userprofiles/{profileId}/ads')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.advertiserGroups = {
        /**
         * dfareporting.advertiserGroups.delete
         * @desc Deletes an existing advertiser group.
         * @alias dfareporting.advertiserGroups.delete
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Advertiser group ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/advertiserGroups/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/advertiserGroups/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/advertiserGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/advertiserGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/advertiserGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/advertiserGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.advertiserLandingPages = {
        /**
         * dfareporting.advertiserLandingPages.get
         * @desc Gets one landing page by ID.
         * @alias dfareporting.advertiserLandingPages.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Landing page ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/advertiserLandingPages/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/advertiserLandingPages')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/advertiserLandingPages')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/advertiserLandingPages')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/advertiserLandingPages')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.advertisers = {
        /**
         * dfareporting.advertisers.get
         * @desc Gets one advertiser by ID.
         * @alias dfareporting.advertisers.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Advertiser ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/advertisers/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/advertisers')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/advertisers')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/advertisers')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/advertisers')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.browsers = {
        /**
         * dfareporting.browsers.list
         * @desc Retrieves a list of browsers.
         * @alias dfareporting.browsers.list
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/browsers')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.campaignCreativeAssociations = {
        /**
         * dfareporting.campaignCreativeAssociations.insert
         * @desc Associates a creative with the specified campaign. This method
         * creates a default ad with dimensions matching the creative in the
         * campaign if such a default ad does not exist already.
         * @alias dfareporting.campaignCreativeAssociations.insert
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.campaignId Campaign ID in this association.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v3.0).CampaignCreativeAssociation} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId', 'campaignId'],
                pathParams: ['campaignId', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'campaignId'],
                pathParams: ['campaignId', 'profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.campaigns = {
        /**
         * dfareporting.campaigns.get
         * @desc Gets one campaign by ID.
         * @alias dfareporting.campaigns.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Campaign ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/campaigns/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/campaigns')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/campaigns')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/campaigns')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/campaigns')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.changeLogs = {
        /**
         * dfareporting.changeLogs.get
         * @desc Gets one change log by ID.
         * @alias dfareporting.changeLogs.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Change log ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/changeLogs/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/changeLogs')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.cities = {
        /**
         * dfareporting.cities.list
         * @desc Retrieves a list of cities, possibly filtered.
         * @alias dfareporting.cities.list
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.countryDartIds Select only cities from these countries.
         * @param {string=} params.dartIds Select only cities with these DART IDs.
         * @param {string=} params.namePrefix Select only cities with names starting with this prefix.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.regionDartIds Select only cities from these regions.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/cities')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.connectionTypes = {
        /**
         * dfareporting.connectionTypes.get
         * @desc Gets one connection type by ID.
         * @alias dfareporting.connectionTypes.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Connection type ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/connectionTypes/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/connectionTypes')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.contentCategories = {
        /**
         * dfareporting.contentCategories.delete
         * @desc Deletes an existing content category.
         * @alias dfareporting.contentCategories.delete
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Content category ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/contentCategories/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/contentCategories/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/contentCategories')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/contentCategories')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/contentCategories')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/contentCategories')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.conversions = {
        /**
         * dfareporting.conversions.batchinsert
         * @desc Inserts conversions.
         * @alias dfareporting.conversions.batchinsert
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v3.0).ConversionsBatchInsertRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchinsert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/dfareporting/v3.0/userprofiles/{profileId}/conversions/batchinsert')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        batchupdate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/dfareporting/v3.0/userprofiles/{profileId}/conversions/batchupdate')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.countries = {
        /**
         * dfareporting.countries.get
         * @desc Gets one country by ID.
         * @alias dfareporting.countries.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.dartId Country DART ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/countries/{dartId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'dartId'],
                pathParams: ['dartId', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/countries')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.creativeAssets = {
        /**
         * dfareporting.creativeAssets.insert
         * @desc Inserts a new creative asset.
         * @alias dfareporting.creativeAssets.insert
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.advertiserId Advertiser ID of this creative. This is a required field.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param  {object} params.resource Media resource metadata
         * @param {object} params.media Media object
         * @param {string} params.media.mimeType Media mime-type
         * @param {string|object} params.media.body Media body contents
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeAssets/{advertiserId}/creativeAssets')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                mediaUrl: (rootUrl +
                    '/upload/dfareporting/v3.0/userprofiles/{profileId}/creativeAssets/{advertiserId}/creativeAssets')
                    .replace(/([^:]\/)\/+/g, '$1'),
                requiredParams: ['profileId', 'advertiserId'],
                pathParams: ['advertiserId', 'profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.creativeFields = {
        /**
         * dfareporting.creativeFields.delete
         * @desc Deletes an existing creative field.
         * @alias dfareporting.creativeFields.delete
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Creative Field ID
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeFields/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeFields/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeFields')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeFields')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeFields')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeFields')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.creativeFieldValues = {
        /**
         * dfareporting.creativeFieldValues.delete
         * @desc Deletes an existing creative field value.
         * @alias dfareporting.creativeFieldValues.delete
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.creativeFieldId Creative field ID for this creative field value.
         * @param {string} params.id Creative Field Value ID
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'creativeFieldId', 'id'],
                pathParams: ['creativeFieldId', 'id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'creativeFieldId', 'id'],
                pathParams: ['creativeFieldId', 'id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId', 'creativeFieldId'],
                pathParams: ['creativeFieldId', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'creativeFieldId'],
                pathParams: ['creativeFieldId', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'creativeFieldId', 'id'],
                pathParams: ['creativeFieldId', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId', 'creativeFieldId'],
                pathParams: ['creativeFieldId', 'profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.creativeGroups = {
        /**
         * dfareporting.creativeGroups.get
         * @desc Gets one creative group by ID.
         * @alias dfareporting.creativeGroups.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Creative group ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeGroups/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creativeGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.creatives = {
        /**
         * dfareporting.creatives.get
         * @desc Gets one creative by ID.
         * @alias dfareporting.creatives.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Creative ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creatives/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creatives')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creatives')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creatives')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/creatives')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.dimensionValues = {
        /**
         * dfareporting.dimensionValues.query
         * @desc Retrieves list of report dimension values for a list of filters.
         * @alias dfareporting.dimensionValues.query
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken The value of the nextToken from the previous result page.
         * @param {string} params.profileId The DFA user profile ID.
         * @param {dfareporting(v3.0).DimensionValueRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        query: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/dfareporting/v3.0/userprofiles/{profileId}/dimensionvalues/query')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.directorySiteContacts = {
        /**
         * dfareporting.directorySiteContacts.get
         * @desc Gets one directory site contact by ID.
         * @alias dfareporting.directorySiteContacts.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Directory site contact ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/directorySiteContacts/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/directorySiteContacts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.directorySites = {
        /**
         * dfareporting.directorySites.get
         * @desc Gets one directory site by ID.
         * @alias dfareporting.directorySites.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Directory site ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/directorySites/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/directorySites')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/directorySites')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.dynamicTargetingKeys = {
        /**
         * dfareporting.dynamicTargetingKeys.delete
         * @desc Deletes an existing dynamic targeting key.
         * @alias dfareporting.dynamicTargetingKeys.delete
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase.
         * @param {string} params.objectId ID of the object of this dynamic targeting key. This is a required field.
         * @param {string} params.objectType Type of the object of this dynamic targeting key. This is a required field.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/dynamicTargetingKeys/{objectId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'objectId', 'name', 'objectType'],
                pathParams: ['objectId', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/dynamicTargetingKeys')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/dynamicTargetingKeys')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.eventTags = {
        /**
         * dfareporting.eventTags.delete
         * @desc Deletes an existing event tag.
         * @alias dfareporting.eventTags.delete
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Event tag ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/eventTags/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/eventTags/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/eventTags')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/eventTags')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/eventTags')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/eventTags')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.files = {
        /**
         * dfareporting.files.get
         * @desc Retrieves a report file by its report ID and file ID. This method
         * supports media download.
         * @alias dfareporting.files.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the report file.
         * @param {string} params.reportId The ID of the report.
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
                        '/dfareporting/v3.0/reports/{reportId}/files/{fileId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['reportId', 'fileId'],
                pathParams: ['fileId', 'reportId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/files')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.floodlightActivities = {
        /**
         * dfareporting.floodlightActivities.delete
         * @desc Deletes an existing floodlight activity.
         * @alias dfareporting.floodlightActivities.delete
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Floodlight activity ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/floodlightActivities/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        generatetag: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/dfareporting/v3.0/userprofiles/{profileId}/floodlightActivities/generatetag')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/floodlightActivities/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/floodlightActivities')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/floodlightActivities')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/floodlightActivities')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/floodlightActivities')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.floodlightActivityGroups = {
        /**
         * dfareporting.floodlightActivityGroups.get
         * @desc Gets one floodlight activity group by ID.
         * @alias dfareporting.floodlightActivityGroups.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Floodlight activity Group ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/floodlightActivityGroups/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/floodlightActivityGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/floodlightActivityGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/floodlightActivityGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/floodlightActivityGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.floodlightConfigurations = {
        /**
         * dfareporting.floodlightConfigurations.get
         * @desc Gets one floodlight configuration by ID.
         * @alias dfareporting.floodlightConfigurations.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Floodlight configuration ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/floodlightConfigurations/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/floodlightConfigurations')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/floodlightConfigurations')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/floodlightConfigurations')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.inventoryItems = {
        /**
         * dfareporting.inventoryItems.get
         * @desc Gets one inventory item by ID.
         * @alias dfareporting.inventoryItems.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Inventory item ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string} params.projectId Project ID for order documents.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/projects/{projectId}/inventoryItems/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'projectId', 'id'],
                pathParams: ['id', 'profileId', 'projectId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/projects/{projectId}/inventoryItems')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'projectId'],
                pathParams: ['profileId', 'projectId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.languages = {
        /**
         * dfareporting.languages.list
         * @desc Retrieves a list of languages.
         * @alias dfareporting.languages.list
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/languages')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.metros = {
        /**
         * dfareporting.metros.list
         * @desc Retrieves a list of metros.
         * @alias dfareporting.metros.list
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/metros')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.mobileCarriers = {
        /**
         * dfareporting.mobileCarriers.get
         * @desc Gets one mobile carrier by ID.
         * @alias dfareporting.mobileCarriers.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Mobile carrier ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/mobileCarriers/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/mobileCarriers')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.operatingSystems = {
        /**
         * dfareporting.operatingSystems.get
         * @desc Gets one operating system by DART ID.
         * @alias dfareporting.operatingSystems.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.dartId Operating system DART ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/operatingSystems/{dartId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'dartId'],
                pathParams: ['dartId', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/operatingSystems')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.operatingSystemVersions = {
        /**
         * dfareporting.operatingSystemVersions.get
         * @desc Gets one operating system version by ID.
         * @alias dfareporting.operatingSystemVersions.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Operating system version ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/operatingSystemVersions/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/operatingSystemVersions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.orderDocuments = {
        /**
         * dfareporting.orderDocuments.get
         * @desc Gets one order document by ID.
         * @alias dfareporting.orderDocuments.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Order document ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string} params.projectId Project ID for order documents.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/projects/{projectId}/orderDocuments/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'projectId', 'id'],
                pathParams: ['id', 'profileId', 'projectId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/projects/{projectId}/orderDocuments')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'projectId'],
                pathParams: ['profileId', 'projectId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.orders = {
        /**
         * dfareporting.orders.get
         * @desc Gets one order by ID.
         * @alias dfareporting.orders.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Order ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string} params.projectId Project ID for orders.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/projects/{projectId}/orders/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'projectId', 'id'],
                pathParams: ['id', 'profileId', 'projectId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/projects/{projectId}/orders')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'projectId'],
                pathParams: ['profileId', 'projectId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.placementGroups = {
        /**
         * dfareporting.placementGroups.get
         * @desc Gets one placement group by ID.
         * @alias dfareporting.placementGroups.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Placement group ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/placementGroups/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/placementGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/placementGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/placementGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/placementGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.placements = {
        /**
         * dfareporting.placements.generatetags
         * @desc Generates tags for a placement.
         * @alias dfareporting.placements.generatetags
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.campaignId Generate placements belonging to this campaign. This is a required field.
         * @param {string=} params.placementIds Generate tags for these placements.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.tagFormats Tag formats to generate for these placements.  Note: PLACEMENT_TAG_STANDARD can only be generated for 1x1 placements.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generatetags: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/dfareporting/v3.0/userprofiles/{profileId}/placements/generatetags')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/placements/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/placements')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/placements')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/placements')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/placements')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.placementStrategies = {
        /**
         * dfareporting.placementStrategies.delete
         * @desc Deletes an existing placement strategy.
         * @alias dfareporting.placementStrategies.delete
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Placement strategy ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/placementStrategies/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/placementStrategies/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/placementStrategies')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/placementStrategies')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/placementStrategies')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/placementStrategies')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.platformTypes = {
        /**
         * dfareporting.platformTypes.get
         * @desc Gets one platform type by ID.
         * @alias dfareporting.platformTypes.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Platform type ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/platformTypes/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/platformTypes')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.postalCodes = {
        /**
         * dfareporting.postalCodes.get
         * @desc Gets one postal code by ID.
         * @alias dfareporting.postalCodes.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.code Postal code ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/postalCodes/{code}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'code'],
                pathParams: ['code', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/postalCodes')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.projects = {
        /**
         * dfareporting.projects.get
         * @desc Gets one project by ID.
         * @alias dfareporting.projects.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Project ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/projects/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/projects')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.regions = {
        /**
         * dfareporting.regions.list
         * @desc Retrieves a list of regions.
         * @alias dfareporting.regions.list
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/regions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.remarketingLists = {
        /**
         * dfareporting.remarketingLists.get
         * @desc Gets one remarketing list by ID.
         * @alias dfareporting.remarketingLists.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Remarketing list ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/remarketingLists/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/remarketingLists')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/remarketingLists')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'advertiserId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/remarketingLists')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/remarketingLists')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.remarketingListShares = {
        /**
         * dfareporting.remarketingListShares.get
         * @desc Gets one remarketing list share by remarketing list ID.
         * @alias dfareporting.remarketingListShares.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string} params.remarketingListId Remarketing list ID.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/remarketingListShares/{remarketingListId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'remarketingListId'],
                pathParams: ['profileId', 'remarketingListId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/remarketingListShares')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'remarketingListId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/remarketingListShares')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.reports = {
        /**
         * dfareporting.reports.delete
         * @desc Deletes a report by its ID.
         * @alias dfareporting.reports.delete
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId The DFA user profile ID.
         * @param {string} params.reportId The ID of the report.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/reports/{reportId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'reportId'],
                pathParams: ['profileId', 'reportId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/reports/{reportId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'reportId'],
                pathParams: ['profileId', 'reportId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/reports')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/reports')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/reports/{reportId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'reportId'],
                pathParams: ['profileId', 'reportId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        run: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/dfareporting/v3.0/userprofiles/{profileId}/reports/{reportId}/run')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId', 'reportId'],
                pathParams: ['profileId', 'reportId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/reports/{reportId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId', 'reportId'],
                pathParams: ['profileId', 'reportId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        compatibleFields: {
            /**
             * dfareporting.reports.compatibleFields.query
             * @desc Returns the fields that are compatible to be selected in the
             * respective sections of a report criteria, given the fields already
             * selected in the input report and user permissions.
             * @alias dfareporting.reports.compatibleFields.query
             * @memberOf! dfareporting(v3.0)
             *
             * @param {object} params Parameters for request
             * @param {string} params.profileId The DFA user profile ID.
             * @param {dfareporting(v3.0).Report} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            query: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/dfareporting/v3.0/userprofiles/{profileId}/reports/compatiblefields/query')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['profileId'],
                    pathParams: ['profileId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        files: {
            /**
             * dfareporting.reports.files.get
             * @desc Retrieves a report file. This method supports media download.
             * @alias dfareporting.reports.files.get
             * @memberOf! dfareporting(v3.0)
             *
             * @param {object} params Parameters for request
             * @param {string} params.fileId The ID of the report file.
             * @param {string} params.profileId The DFA profile ID.
             * @param {string} params.reportId The ID of the report.
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
                            '/dfareporting/v3.0/userprofiles/{profileId}/reports/{reportId}/files/{fileId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['profileId', 'reportId', 'fileId'],
                    pathParams: ['fileId', 'profileId', 'reportId'],
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
                            '/dfareporting/v3.0/userprofiles/{profileId}/reports/{reportId}/files')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['profileId', 'reportId'],
                    pathParams: ['profileId', 'reportId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.sites = {
        /**
         * dfareporting.sites.get
         * @desc Gets one site by ID.
         * @alias dfareporting.sites.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Site ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/sites/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/sites')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/sites')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/sites')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/sites')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.sizes = {
        /**
         * dfareporting.sizes.get
         * @desc Gets one size by ID.
         * @alias dfareporting.sizes.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Size ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/sizes/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/sizes')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/sizes')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.subaccounts = {
        /**
         * dfareporting.subaccounts.get
         * @desc Gets one subaccount by ID.
         * @alias dfareporting.subaccounts.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Subaccount ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/subaccounts/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/subaccounts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/subaccounts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/subaccounts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/subaccounts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.targetableRemarketingLists = {
        /**
         * dfareporting.targetableRemarketingLists.get
         * @desc Gets one remarketing list by ID.
         * @alias dfareporting.targetableRemarketingLists.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Remarketing list ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/targetableRemarketingLists/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/targetableRemarketingLists')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'advertiserId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.targetingTemplates = {
        /**
         * dfareporting.targetingTemplates.get
         * @desc Gets one targeting template by ID.
         * @alias dfareporting.targetingTemplates.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Targeting template ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/targetingTemplates/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/targetingTemplates')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/targetingTemplates')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/targetingTemplates')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/targetingTemplates')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.userProfiles = {
        /**
         * dfareporting.userProfiles.get
         * @desc Gets one user profile by ID.
         * @alias dfareporting.userProfiles.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId The user profile ID.
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
                    url: (rootUrl + '/dfareporting/v3.0/userprofiles/{profileId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                    url: (rootUrl + '/dfareporting/v3.0/userprofiles')
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
    self.userRolePermissionGroups = {
        /**
         * dfareporting.userRolePermissionGroups.get
         * @desc Gets one user role permission group by ID.
         * @alias dfareporting.userRolePermissionGroups.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id User role permission group ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/userRolePermissionGroups/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/userRolePermissionGroups')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.userRolePermissions = {
        /**
         * dfareporting.userRolePermissions.get
         * @desc Gets one user role permission by ID.
         * @alias dfareporting.userRolePermissions.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id User role permission ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/userRolePermissions/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/userRolePermissions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.userRoles = {
        /**
         * dfareporting.userRoles.delete
         * @desc Deletes an existing user role.
         * @alias dfareporting.userRoles.delete
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id User role ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/userRoles/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/userRoles/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/userRoles')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/userRoles')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/userRoles')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/userRoles')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.videoFormats = {
        /**
         * dfareporting.videoFormats.get
         * @desc Gets one video format by ID.
         * @alias dfareporting.videoFormats.get
         * @memberOf! dfareporting(v3.0)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.id Video format ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/videoFormats/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
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
                        '/dfareporting/v3.0/userprofiles/{profileId}/videoFormats')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Dfareporting;
//# sourceMappingURL=v3.0.js.map