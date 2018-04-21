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
 * Admin Reports API
 *
 * Fetches reports for the administrators of G Suite customers about the usage,
 * collaboration, security, and risk for their users.
 *
 * @example
 * const google = require('googleapis');
 * const admin = google.admin('reports_v1');
 *
 * @namespace admin
 * @type {Function}
 * @version reports_v1
 * @variation reports_v1
 * @param {object=} options Options for Admin
 */
function Admin(options) {
    var self = this;
    self._options = options || {};
    self.activities = {
        /**
         * reports.activities.list
         * @desc Retrieves a list of activities for a specific customer and
         * application.
         * @alias reports.activities.list
         * @memberOf! admin(reports_v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.actorIpAddress IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses.
         * @param {string} params.applicationName Application name for which the events are to be retrieved.
         * @param {string=} params.customerId Represents the customer for which the data is to be fetched.
         * @param {string=} params.endTime Return events which occurred at or before this time.
         * @param {string=} params.eventName Name of the event being queried.
         * @param {string=} params.filters Event parameters in the form [parameter1 name][operator][parameter1 value],[parameter2 name][operator][parameter2 value],...
         * @param {integer=} params.maxResults Number of activity records to be shown in each page.
         * @param {string=} params.pageToken Token to specify next page.
         * @param {string=} params.startTime Return events which occurred at or after this time.
         * @param {string} params.userKey Represents the profile id or the user email for which the data should be filtered. When 'all' is specified as the userKey, it returns usageReports for all users.
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
                        '/admin/reports/v1/activity/users/{userKey}/applications/{applicationName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userKey', 'applicationName'],
                pathParams: ['applicationName', 'userKey'],
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
                        '/admin/reports/v1/activity/users/{userKey}/applications/{applicationName}/watch')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['userKey', 'applicationName'],
                pathParams: ['applicationName', 'userKey'],
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
         * @memberOf! admin(reports_v1)
         *
         * @param {object} params Parameters for request
         * @param {admin(reports_v1).Channel} params.resource Request body data
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
                    url: (rootUrl + '/admin/reports/v1/admin/reports_v1/channels/stop')
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
    self.customerUsageReports = {
        /**
         * reports.customerUsageReports.get
         * @desc Retrieves a report which is a collection of properties / statistics
         * for a specific customer.
         * @alias reports.customerUsageReports.get
         * @memberOf! admin(reports_v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.customerId Represents the customer for which the data is to be fetched.
         * @param {string} params.date Represents the date in yyyy-mm-dd format for which the data is to be fetched.
         * @param {string=} params.pageToken Token to specify next page.
         * @param {string=} params.parameters Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
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
                    url: (rootUrl + '/admin/reports/v1/usage/dates/{date}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['date'],
                pathParams: ['date'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.entityUsageReports = {
        /**
         * reports.entityUsageReports.get
         * @desc Retrieves a report which is a collection of properties / statistics
         * for a set of objects.
         * @alias reports.entityUsageReports.get
         * @memberOf! admin(reports_v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.customerId Represents the customer for which the data is to be fetched.
         * @param {string} params.date Represents the date in yyyy-mm-dd format for which the data is to be fetched.
         * @param {string} params.entityKey Represents the key of object for which the data should be filtered.
         * @param {string} params.entityType Type of object. Should be one of - gplus_communities.
         * @param {string=} params.filters Represents the set of filters including parameter operator value.
         * @param {integer=} params.maxResults Maximum number of results to return. Maximum allowed is 1000
         * @param {string=} params.pageToken Token to specify next page.
         * @param {string=} params.parameters Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
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
                        '/admin/reports/v1/usage/{entityType}/{entityKey}/dates/{date}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['entityType', 'entityKey', 'date'],
                pathParams: ['date', 'entityKey', 'entityType'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.userUsageReport = {
        /**
         * reports.userUsageReport.get
         * @desc Retrieves a report which is a collection of properties / statistics
         * for a set of users.
         * @alias reports.userUsageReport.get
         * @memberOf! admin(reports_v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.customerId Represents the customer for which the data is to be fetched.
         * @param {string} params.date Represents the date in yyyy-mm-dd format for which the data is to be fetched.
         * @param {string=} params.filters Represents the set of filters including parameter operator value.
         * @param {integer=} params.maxResults Maximum number of results to return. Maximum allowed is 1000
         * @param {string=} params.pageToken Token to specify next page.
         * @param {string=} params.parameters Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
         * @param {string} params.userKey Represents the profile id or the user email for which the data should be filtered.
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
                        '/admin/reports/v1/usage/users/{userKey}/dates/{date}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userKey', 'date'],
                pathParams: ['date', 'userKey'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Admin;
//# sourceMappingURL=reports_v1.js.map