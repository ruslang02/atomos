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
 * DoubleClick Search API
 *
 * Reports and modifies your advertising data in DoubleClick Search (for
 * example, campaigns, ad groups, keywords, and conversions).
 *
 * @example
 * const google = require('googleapis');
 * const doubleclicksearch = google.doubleclicksearch('v2');
 *
 * @namespace doubleclicksearch
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Doubleclicksearch
 */
function Doubleclicksearch(options) {
    var self = this;
    self._options = options || {};
    self.conversion = {
        /**
         * doubleclicksearch.conversion.get
         * @desc Retrieves a list of conversions from a DoubleClick Search engine
         * account.
         * @alias doubleclicksearch.conversion.get
         * @memberOf! doubleclicksearch(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.adGroupId Numeric ID of the ad group.
         * @param {string=} params.adId Numeric ID of the ad.
         * @param {string} params.advertiserId Numeric ID of the advertiser.
         * @param {string} params.agencyId Numeric ID of the agency.
         * @param {string=} params.campaignId Numeric ID of the campaign.
         * @param {string=} params.criterionId Numeric ID of the criterion.
         * @param {integer} params.endDate Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
         * @param {string} params.engineAccountId Numeric ID of the engine account.
         * @param {integer} params.rowCount The number of conversions to return per call.
         * @param {integer} params.startDate First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
         * @param {integer} params.startRow The 0-based starting index for retrieving conversions results.
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
                        '/doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/engine/{engineAccountId}/conversion')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [
                    'agencyId', 'advertiserId', 'engineAccountId', 'endDate', 'rowCount',
                    'startDate', 'startRow'
                ],
                pathParams: ['advertiserId', 'agencyId', 'engineAccountId'],
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
                    url: (rootUrl + '/doubleclicksearch/v2/conversion')
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclicksearch/v2/conversion')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: [
                    'advertiserId', 'agencyId', 'endDate', 'engineAccountId', 'rowCount',
                    'startDate', 'startRow'
                ],
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclicksearch/v2/conversion')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        updateAvailability: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/doubleclicksearch/v2/conversion/updateAvailability')
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
    self.reports = {
        /**
         * doubleclicksearch.reports.generate
         * @desc Generates and returns a report immediately.
         * @alias doubleclicksearch.reports.generate
         * @memberOf! doubleclicksearch(v2)
         *
         * @param {object} params Parameters for request
         * @param {doubleclicksearch(v2).ReportRequest} params.resource Request body data
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
                    url: (rootUrl + '/doubleclicksearch/v2/reports/generate')
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
                    url: (rootUrl + '/doubleclicksearch/v2/reports/{reportId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['reportId'],
                pathParams: ['reportId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        getFile: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/doubleclicksearch/v2/reports/{reportId}/files/{reportFragment}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['reportId', 'reportFragment'],
                pathParams: ['reportFragment', 'reportId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        request: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclicksearch/v2/reports')
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
    self.savedColumns = {
        /**
         * doubleclicksearch.savedColumns.list
         * @desc Retrieve the list of saved columns for a specified advertiser.
         * @alias doubleclicksearch.savedColumns.list
         * @memberOf! doubleclicksearch(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.advertiserId DS ID of the advertiser.
         * @param {string} params.agencyId DS ID of the agency.
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
                        '/doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/savedcolumns')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['agencyId', 'advertiserId'],
                pathParams: ['advertiserId', 'agencyId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Doubleclicksearch;
//# sourceMappingURL=v2.js.map