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
 * AdSense Host API
 *
 * Generates performance reports, generates ad codes, and provides publisher
 * management capabilities for AdSense Hosts.
 *
 * @example
 * const google = require('googleapis');
 * const adsensehost = google.adsensehost('v4.1');
 *
 * @namespace adsensehost
 * @type {Function}
 * @version v4.1
 * @variation v4.1
 * @param {object=} options Options for Adsensehost
 */
function Adsensehost(options) {
    var self = this;
    self._options = options || {};
    self.accounts = {
        /**
         * adsensehost.accounts.get
         * @desc Get information about the selected associated AdSense account.
         * @alias adsensehost.accounts.get
         * @memberOf! adsensehost(v4.1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account to get information about.
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
                    url: (rootUrl + '/adsensehost/v4.1/accounts/{accountId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['accountId'],
                pathParams: ['accountId'],
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
                    url: (rootUrl + '/adsensehost/v4.1/accounts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['filterAdClientId'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        adclients: {
            /**
             * adsensehost.accounts.adclients.get
             * @desc Get information about one of the ad clients in the specified
             * publisher's AdSense account.
             * @alias adsensehost.accounts.adclients.get
             * @memberOf! adsensehost(v4.1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId Account which contains the ad client.
             * @param {string} params.adClientId Ad client to get.
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
                            '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'adClientId'],
                    pathParams: ['accountId', 'adClientId'],
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
                            '/adsensehost/v4.1/accounts/{accountId}/adclients')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId'],
                    pathParams: ['accountId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        adunits: {
            /**
             * adsensehost.accounts.adunits.delete
             * @desc Delete the specified ad unit from the specified publisher AdSense
             * account.
             * @alias adsensehost.accounts.adunits.delete
             * @memberOf! adsensehost(v4.1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId Account which contains the ad unit.
             * @param {string} params.adClientId Ad client for which to get ad unit.
             * @param {string} params.adUnitId Ad unit to delete.
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
                            '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'adClientId', 'adUnitId'],
                    pathParams: ['accountId', 'adClientId', 'adUnitId'],
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
                            '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'adClientId', 'adUnitId'],
                    pathParams: ['accountId', 'adClientId', 'adUnitId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            getAdCode: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/adcode')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'adClientId', 'adUnitId'],
                    pathParams: ['accountId', 'adClientId', 'adUnitId'],
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
                            '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'adClientId'],
                    pathParams: ['accountId', 'adClientId'],
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
                            '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'adClientId'],
                    pathParams: ['accountId', 'adClientId'],
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
                            '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'adClientId', 'adUnitId'],
                    pathParams: ['accountId', 'adClientId'],
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
                            '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'adClientId'],
                    pathParams: ['accountId', 'adClientId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        reports: {
            /**
             * adsensehost.accounts.reports.generate
             * @desc Generate an AdSense report based on the report request sent in
             * the query parameters. Returns the result as JSON; to retrieve output in
             * CSV format specify "alt=csv" as a query parameter.
             * @alias adsensehost.accounts.reports.generate
             * @memberOf! adsensehost(v4.1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId Hosted account upon which to report.
             * @param {string=} params.dimension Dimensions to base the report on.
             * @param {string} params.endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
             * @param {string=} params.filter Filters to be run on the report.
             * @param {string=} params.locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
             * @param {integer=} params.maxResults The maximum number of rows of report data to return.
             * @param {string=} params.metric Numeric columns to include in the report.
             * @param {string=} params.sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
             * @param {string} params.startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
             * @param {integer=} params.startIndex Index of the first row of report data to return.
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
                        url: (rootUrl + '/adsensehost/v4.1/accounts/{accountId}/reports')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'startDate', 'endDate'],
                    pathParams: ['accountId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.adclients = {
        /**
         * adsensehost.adclients.get
         * @desc Get information about one of the ad clients in the Host AdSense
         * account.
         * @alias adsensehost.adclients.get
         * @memberOf! adsensehost(v4.1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client to get.
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
                    url: (rootUrl + '/adsensehost/v4.1/adclients/{adClientId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['adClientId'],
                pathParams: ['adClientId'],
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
                    url: (rootUrl + '/adsensehost/v4.1/adclients')
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
    self.associationsessions = {
        /**
         * adsensehost.associationsessions.start
         * @desc Create an association session for initiating an association with an
         * AdSense user.
         * @alias adsensehost.associationsessions.start
         * @memberOf! adsensehost(v4.1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.productCode Products to associate with the user.
         * @param {string=} params.userLocale The preferred locale of the user.
         * @param {string=} params.websiteLocale The locale of the user's hosted website.
         * @param {string} params.websiteUrl The URL of the user's hosted website.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        start: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/adsensehost/v4.1/associationsessions/start')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['productCode', 'websiteUrl'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        verify: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/adsensehost/v4.1/associationsessions/verify')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['token'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.customchannels = {
        /**
         * adsensehost.customchannels.delete
         * @desc Delete a specific custom channel from the host AdSense account.
         * @alias adsensehost.customchannels.delete
         * @memberOf! adsensehost(v4.1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client from which to delete the custom channel.
         * @param {string} params.customChannelId Custom channel to delete.
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
                        '/adsensehost/v4.1/adclients/{adClientId}/customchannels/{customChannelId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['adClientId', 'customChannelId'],
                pathParams: ['adClientId', 'customChannelId'],
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
                        '/adsensehost/v4.1/adclients/{adClientId}/customchannels/{customChannelId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['adClientId', 'customChannelId'],
                pathParams: ['adClientId', 'customChannelId'],
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
                        '/adsensehost/v4.1/adclients/{adClientId}/customchannels')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['adClientId'],
                pathParams: ['adClientId'],
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
                        '/adsensehost/v4.1/adclients/{adClientId}/customchannels')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['adClientId'],
                pathParams: ['adClientId'],
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
                        '/adsensehost/v4.1/adclients/{adClientId}/customchannels')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['adClientId', 'customChannelId'],
                pathParams: ['adClientId'],
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
                        '/adsensehost/v4.1/adclients/{adClientId}/customchannels')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['adClientId'],
                pathParams: ['adClientId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.reports = {
        /**
         * adsensehost.reports.generate
         * @desc Generate an AdSense report based on the report request sent in the
         * query parameters. Returns the result as JSON; to retrieve output in CSV
         * format specify "alt=csv" as a query parameter.
         * @alias adsensehost.reports.generate
         * @memberOf! adsensehost(v4.1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.dimension Dimensions to base the report on.
         * @param {string} params.endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
         * @param {string=} params.filter Filters to be run on the report.
         * @param {string=} params.locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
         * @param {integer=} params.maxResults The maximum number of rows of report data to return.
         * @param {string=} params.metric Numeric columns to include in the report.
         * @param {string=} params.sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
         * @param {string} params.startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
         * @param {integer=} params.startIndex Index of the first row of report data to return.
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
                    url: (rootUrl + '/adsensehost/v4.1/reports')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['startDate', 'endDate'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.urlchannels = {
        /**
         * adsensehost.urlchannels.delete
         * @desc Delete a URL channel from the host AdSense account.
         * @alias adsensehost.urlchannels.delete
         * @memberOf! adsensehost(v4.1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client from which to delete the URL channel.
         * @param {string} params.urlChannelId URL channel to delete.
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
                        '/adsensehost/v4.1/adclients/{adClientId}/urlchannels/{urlChannelId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['adClientId', 'urlChannelId'],
                pathParams: ['adClientId', 'urlChannelId'],
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
                        '/adsensehost/v4.1/adclients/{adClientId}/urlchannels')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['adClientId'],
                pathParams: ['adClientId'],
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
                        '/adsensehost/v4.1/adclients/{adClientId}/urlchannels')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['adClientId'],
                pathParams: ['adClientId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Adsensehost;
//# sourceMappingURL=v4.1.js.map