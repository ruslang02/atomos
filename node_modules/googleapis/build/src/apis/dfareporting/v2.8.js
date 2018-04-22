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
 * const dfareporting = google.dfareporting('v2.8');
 *
 * @namespace dfareporting
 * @type {Function}
 * @version v2.8
 * @variation v2.8
 * @param {object=} options Options for Dfareporting
 */
function Dfareporting(options) {
    var self = this;
    self._options = options || {};
    self.accountActiveAdSummaries = {
        /**
         * dfareporting.accountActiveAdSummaries.get
         * @desc Gets the account's active ad summary by account ID.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Account ID.
         *     summaryAccountId: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.accountActiveAdSummaries.get(request, function(err,
         * response) { if (err) { console.error(err); return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.accountActiveAdSummaries.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/accountActiveAdSummaries/{summaryAccountId}')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Account permission group ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.accountPermissionGroups.get(request, function(err,
         * response) { if (err) { console.error(err); return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.accountPermissionGroups.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/accountPermissionGroups/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/accountPermissionGroups')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Account permission ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.accountPermissions.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.accountPermissions.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/accountPermissions/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/accountPermissions')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Account ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.accounts.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.accounts.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/accounts/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/accounts')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/accounts')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/accounts')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // User profile ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.accountUserProfiles.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.accountUserProfiles.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/accountUserProfiles/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/accountUserProfiles')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/accountUserProfiles')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/accountUserProfiles')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/accountUserProfiles')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Ad ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.ads.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.ads.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/ads/{id}')
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
                    url: (rootUrl + '/dfareporting/v2.8/userprofiles/{profileId}/ads')
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
                    url: (rootUrl + '/dfareporting/v2.8/userprofiles/{profileId}/ads')
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
                    url: (rootUrl + '/dfareporting/v2.8/userprofiles/{profileId}/ads')
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
                    url: (rootUrl + '/dfareporting/v2.8/userprofiles/{profileId}/ads')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Advertiser group ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.advertiserGroups.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.advertiserGroups.delete
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/advertiserGroups/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/advertiserGroups/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/advertiserGroups')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/advertiserGroups')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/advertiserGroups')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/advertiserGroups')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Advertiser ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.advertisers.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.advertisers.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/advertisers/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/advertisers')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/advertisers')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/advertisers')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/advertisers')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.browsers.list(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.browsers.list
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/browsers')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Campaign ID in this association.
         *     campaignId: '0',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.campaignCreativeAssociations.insert(request, function(err,
         * response) { if (err) { console.error(err); return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.campaignCreativeAssociations.insert
         * @memberOf! dfareporting(v2.8)
         *
         * @param {object} params Parameters for request
         * @param {string} params.campaignId Campaign ID in this association.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.8).CampaignCreativeAssociation} params.resource Request body data
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Campaign ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.campaigns.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.campaigns.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/campaigns/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/campaigns')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId', 'defaultLandingPageName', 'defaultLandingPageUrl'],
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/campaigns')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/campaigns')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/campaigns')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Change log ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.changeLogs.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.changeLogs.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/changeLogs/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/changeLogs')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.cities.list(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.cities.list
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/cities')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Connection type ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.connectionTypes.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.connectionTypes.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/connectionTypes/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/connectionTypes')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Content category ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.contentCategories.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.contentCategories.delete
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/contentCategories/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/contentCategories/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/contentCategories')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/contentCategories')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/contentCategories')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/contentCategories')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.conversions.batchinsert(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/ddmconversions'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.conversions.batchinsert
         * @memberOf! dfareporting(v2.8)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.8).ConversionsBatchInsertRequest} params.resource Request body data
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/conversions/batchinsert')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/conversions/batchupdate')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Country DART ID.
         *     dartId: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.countries.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.countries.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/countries/{dartId}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/countries')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Advertiser ID of this creative. This is a required field.
         *     advertiserId: '0',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     media: {
         *       // TODO: Add desired media content for upload. See
         *       // https://github.com/google/google-api-nodejs-client#media-uploads
         *       mimeType: '',  // See
         * https://www.w3.org/Protocols/rfc1341/4_Content-Type.html body: '',
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.creativeAssets.insert(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.creativeAssets.insert
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeAssets/{advertiserId}/creativeAssets')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                mediaUrl: (rootUrl +
                    '/upload/dfareporting/v2.8/userprofiles/{profileId}/creativeAssets/{advertiserId}/creativeAssets')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Creative Field ID
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.creativeFields.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.creativeFields.delete
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeFields/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeFields/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeFields')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeFields')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeFields')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeFields')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Creative field ID for this creative field value.
         *     creativeFieldId: '0',  // TODO: Update placeholder value.
         *
         *     // Creative Field Value ID
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.creativeFieldValues.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.creativeFieldValues.delete
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Creative group ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.creativeGroups.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.creativeGroups.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeGroups/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeGroups')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeGroups')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeGroups')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creativeGroups')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Creative ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.creatives.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.creatives.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creatives/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creatives')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creatives')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creatives')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/creatives')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The DFA user profile ID.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
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
         *     var itemsPage = response['items'];
         *     if (!itemsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < itemsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `itemsPage`:
         *       console.log(JSON.stringify(itemsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.dimensionValues.query(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.dimensionValues.query(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfareporting'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.dimensionValues.query
         * @memberOf! dfareporting(v2.8)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken The value of the nextToken from the previous result page.
         * @param {string} params.profileId The DFA user profile ID.
         * @param {dfareporting(v2.8).DimensionValueRequest} params.resource Request body data
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/dimensionvalues/query')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Directory site contact ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.directorySiteContacts.get(request, function(err, response)
         * { if (err) { console.error(err); return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.directorySiteContacts.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/directorySiteContacts/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/directorySiteContacts')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Directory site ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.directorySites.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.directorySites.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/directorySites/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/directorySites')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/directorySites')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // ID of the object of this dynamic targeting key. This is a required
         * field. objectId: '0',  // TODO: Update placeholder value.
         *
         *     // Name of this dynamic targeting key. This is a required field. Must
         * be less than 256 characters long
         *     // and cannot contain commas. All characters are converted to
         * lowercase. name: '',  // TODO: Update placeholder value.
         *
         *     // Type of the object of this dynamic targeting key. This is a
         * required field. objectType: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.dynamicTargetingKeys.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.dynamicTargetingKeys.delete
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/dynamicTargetingKeys/{objectId}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/dynamicTargetingKeys')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/dynamicTargetingKeys')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Event tag ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.eventTags.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.eventTags.delete
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/eventTags/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/eventTags/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/eventTags')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/eventTags')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/eventTags')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/eventTags')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the report.
         *     reportId: '0',  // TODO: Update placeholder value.
         *
         *     // The ID of the report file.
         *     fileId: '0',  // TODO: Update placeholder value.
         *
         *     // TODO: To download media content, use:
         *     //
         *     // alt: 'media',
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.files.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfareporting'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.files.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/reports/{reportId}/files/{fileId}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/files')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Floodlight activity ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.floodlightActivities.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.floodlightActivities.delete
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/floodlightActivities/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/floodlightActivities/generatetag')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/floodlightActivities/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/floodlightActivities')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/floodlightActivities')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/floodlightActivities')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/floodlightActivities')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Floodlight activity Group ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.floodlightActivityGroups.get(request, function(err,
         * response) { if (err) { console.error(err); return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.floodlightActivityGroups.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/floodlightActivityGroups/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/floodlightActivityGroups')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/floodlightActivityGroups')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/floodlightActivityGroups')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/floodlightActivityGroups')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Floodlight configuration ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.floodlightConfigurations.get(request, function(err,
         * response) { if (err) { console.error(err); return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.floodlightConfigurations.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/floodlightConfigurations/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/floodlightConfigurations')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/floodlightConfigurations')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/floodlightConfigurations')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Project ID for order documents.
         *     projectId: '0',  // TODO: Update placeholder value.
         *
         *     // Inventory item ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.inventoryItems.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.inventoryItems.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/projects/{projectId}/inventoryItems/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/projects/{projectId}/inventoryItems')
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
    self.landingPages = {
        /**
         * dfareporting.landingPages.delete
         * @desc Deletes an existing campaign landing page.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Landing page campaign ID.
         *     campaignId: '0',  // TODO: Update placeholder value.
         *
         *     // Landing page ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.landingPages.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.landingPages.delete
         * @memberOf! dfareporting(v2.8)
         *
         * @param {object} params Parameters for request
         * @param {string} params.campaignId Landing page campaign ID.
         * @param {string} params.id Landing page ID.
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/campaigns/{campaignId}/landingPages/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'campaignId', 'id'],
                pathParams: ['campaignId', 'id', 'profileId'],
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/campaigns/{campaignId}/landingPages/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'campaignId', 'id'],
                pathParams: ['campaignId', 'id', 'profileId'],
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/campaigns/{campaignId}/landingPages')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/campaigns/{campaignId}/landingPages')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'campaignId'],
                pathParams: ['campaignId', 'profileId'],
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/campaigns/{campaignId}/landingPages')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'campaignId', 'id'],
                pathParams: ['campaignId', 'profileId'],
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/campaigns/{campaignId}/landingPages')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId', 'campaignId'],
                pathParams: ['campaignId', 'profileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.languages = {
        /**
         * dfareporting.languages.list
         * @desc Retrieves a list of languages.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.languages.list(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.languages.list
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/languages')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.metros.list(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.metros.list
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/metros')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Mobile carrier ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.mobileCarriers.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.mobileCarriers.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/mobileCarriers/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/mobileCarriers')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Operating system DART ID.
         *     dartId: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.operatingSystems.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.operatingSystems.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/operatingSystems/{dartId}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/operatingSystems')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Operating system version ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.operatingSystemVersions.get(request, function(err,
         * response) { if (err) { console.error(err); return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.operatingSystemVersions.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/operatingSystemVersions/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/operatingSystemVersions')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Project ID for order documents.
         *     projectId: '0',  // TODO: Update placeholder value.
         *
         *     // Order document ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.orderDocuments.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.orderDocuments.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/projects/{projectId}/orderDocuments/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/projects/{projectId}/orderDocuments')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Project ID for orders.
         *     projectId: '0',  // TODO: Update placeholder value.
         *
         *     // Order ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.orders.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.orders.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/projects/{projectId}/orders/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/projects/{projectId}/orders')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Placement group ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.placementGroups.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.placementGroups.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/placementGroups/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/placementGroups')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/placementGroups')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/placementGroups')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/placementGroups')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.placements.generatetags(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.placements.generatetags
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/placements/generatetags')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/placements/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/placements')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/placements')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/placements')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/placements')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Placement strategy ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.placementStrategies.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.placementStrategies.delete
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/placementStrategies/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/placementStrategies/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/placementStrategies')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/placementStrategies')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/placementStrategies')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/placementStrategies')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Platform type ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.platformTypes.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.platformTypes.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/platformTypes/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/platformTypes')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Postal code ID.
         *     code: 'my-code',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.postalCodes.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.postalCodes.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/postalCodes/{code}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/postalCodes')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Project ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.projects.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.projects.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/projects/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/projects')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.regions.list(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.regions.list
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/regions')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Remarketing list ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.remarketingLists.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.remarketingLists.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/remarketingLists/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/remarketingLists')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/remarketingLists')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/remarketingLists')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/remarketingLists')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Remarketing list ID.
         *     remarketingListId: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.remarketingListShares.get(request, function(err, response)
         * { if (err) { console.error(err); return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.remarketingListShares.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/remarketingListShares/{remarketingListId}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/remarketingListShares')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/remarketingListShares')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The DFA user profile ID.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // The ID of the report.
         *     reportId: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.reports.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfareporting'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.reports.delete
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/reports/{reportId}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/reports/{reportId}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/reports')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/reports')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/reports/{reportId}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/reports/{reportId}/run')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/reports/{reportId}')
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
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
             * API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/dfareporting
             * // 2. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var dfareporting = google.dfareporting('v2.8');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The DFA user profile ID.
             *     profileId: '0',  // TODO: Update placeholder value.
             *
             *     resource: {
             *       // TODO: Add desired properties to the request body.
             *     },
             *
             *     auth: authClient,
             *   };
             *
             *   dfareporting.reports.compatibleFields.query(request, function(err,
             * response) { if (err) { console.error(err); return;
             *     }
             *
             *     // TODO: Change code below to process the `response` object:
             *     console.log(JSON.stringify(response, null, 2));
             *   });
             * });
             *
             * function authorize(callback) {
             *   // TODO: Change placeholder below to generate authentication
             * credentials. See
             *   //
             * https://developers.google.com/doubleclick-advertisers/authorizing#examples
             *   //
             *   // Authorize using the following scope:
             *   //   'https://www.googleapis.com/auth/dfareporting'
             *   var authClient = null;
             *
             *   if (authClient == null) {
             *     console.log('authentication failed');
             *     return;
             *   }
             *   callback(authClient);
             * }
             * @alias dfareporting.reports.compatibleFields.query
             * @memberOf! dfareporting(v2.8)
             *
             * @param {object} params Parameters for request
             * @param {string} params.profileId The DFA user profile ID.
             * @param {dfareporting(v2.8).Report} params.resource Request body data
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
                            '/dfareporting/v2.8/userprofiles/{profileId}/reports/compatiblefields/query')
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
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
             * API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/dfareporting
             * // 2. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var dfareporting = google.dfareporting('v2.8');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The DFA profile ID.
             *     profileId: '0',  // TODO: Update placeholder value.
             *
             *     // The ID of the report.
             *     reportId: '0',  // TODO: Update placeholder value.
             *
             *     // The ID of the report file.
             *     fileId: '0',  // TODO: Update placeholder value.
             *
             *     // TODO: To download media content, use:
             *     //
             *     // alt: 'media',
             *
             *     auth: authClient,
             *   };
             *
             *   dfareporting.reports.files.get(request, function(err, response) {
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
             *   // TODO: Change placeholder below to generate authentication
             * credentials. See
             *   //
             * https://developers.google.com/doubleclick-advertisers/authorizing#examples
             *   //
             *   // Authorize using the following scope:
             *   //   'https://www.googleapis.com/auth/dfareporting'
             *   var authClient = null;
             *
             *   if (authClient == null) {
             *     console.log('authentication failed');
             *     return;
             *   }
             *   callback(authClient);
             * }
             * @alias dfareporting.reports.files.get
             * @memberOf! dfareporting(v2.8)
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
                            '/dfareporting/v2.8/userprofiles/{profileId}/reports/{reportId}/files/{fileId}')
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
                            '/dfareporting/v2.8/userprofiles/{profileId}/reports/{reportId}/files')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Site ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.sites.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.sites.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/sites/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/sites')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/sites')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/sites')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/sites')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Size ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.sizes.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.sizes.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/sizes/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/sizes')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/sizes')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Subaccount ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.subaccounts.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.subaccounts.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/subaccounts/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/subaccounts')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/subaccounts')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/subaccounts')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/subaccounts')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Remarketing list ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.targetableRemarketingLists.get(request, function(err,
         * response) { if (err) { console.error(err); return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.targetableRemarketingLists.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/targetableRemarketingLists/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/targetableRemarketingLists')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Targeting template ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.targetingTemplates.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.targetingTemplates.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/targetingTemplates/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/targetingTemplates')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/targetingTemplates')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/targetingTemplates')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/targetingTemplates')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The user profile ID.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.userProfiles.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using one of the following scopes:
         *   //   'https://www.googleapis.com/auth/dfareporting'
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.userProfiles.get
         * @memberOf! dfareporting(v2.8)
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
                    url: (rootUrl + '/dfareporting/v2.8/userprofiles/{profileId}')
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
                    url: (rootUrl + '/dfareporting/v2.8/userprofiles')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // User role permission group ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.userRolePermissionGroups.get(request, function(err,
         * response) { if (err) { console.error(err); return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.userRolePermissionGroups.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/userRolePermissionGroups/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/userRolePermissionGroups')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // User role permission ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.userRolePermissions.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.userRolePermissions.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/userRolePermissions/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/userRolePermissions')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // User role ID.
         *     id: '0',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.userRoles.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.userRoles.delete
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/userRoles/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/userRoles/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/userRoles')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/userRoles')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/userRoles')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/userRoles')
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
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking
         * API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.8');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '0',  // TODO: Update placeholder value.
         *
         *     // Video format ID.
         *     id: 0,  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   dfareporting.videoFormats.get(request, function(err, response) {
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
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/doubleclick-advertisers/authorizing#examples
         *   //
         *   // Authorize using the following scope:
         *   //   'https://www.googleapis.com/auth/dfatrafficking'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias dfareporting.videoFormats.get
         * @memberOf! dfareporting(v2.8)
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/videoFormats/{id}')
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
                        '/dfareporting/v2.8/userprofiles/{profileId}/videoFormats')
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
//# sourceMappingURL=v2.8.js.map