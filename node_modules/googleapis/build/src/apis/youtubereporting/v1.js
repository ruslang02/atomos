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
 * YouTube Reporting API
 *
 * Schedules reporting jobs containing your YouTube Analytics data and downloads
 * the resulting bulk data reports in the form of CSV files.
 *
 * @example
 * const google = require('googleapis');
 * const youtubereporting = google.youtubereporting('v1');
 *
 * @namespace youtubereporting
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Youtubereporting
 */
function Youtubereporting(options) {
    var self = this;
    self._options = options || {};
    self.jobs = {
        /**
         * youtubereporting.jobs.create
         * @desc Creates a job and returns it.
         * @alias youtubereporting.jobs.create
         * @memberOf! youtubereporting(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
         * @param {youtubereporting(v1).Job} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://youtubereporting.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/jobs').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://youtubereporting.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['jobId'],
                pathParams: ['jobId'],
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
            var rootUrl = options.rootUrl || 'https://youtubereporting.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['jobId'],
                pathParams: ['jobId'],
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
            var rootUrl = options.rootUrl || 'https://youtubereporting.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/jobs').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        reports: {
            /**
             * youtubereporting.jobs.reports.get
             * @desc Gets the metadata of a specific report.
             * @alias youtubereporting.jobs.reports.get
             * @memberOf! youtubereporting(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.jobId The ID of the job.
             * @param {string=} params.onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
             * @param {string} params.reportId The ID of the report to retrieve.
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
                var rootUrl = options.rootUrl || 'https://youtubereporting.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/jobs/{jobId}/reports/{reportId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['jobId', 'reportId'],
                    pathParams: ['jobId', 'reportId'],
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
                var rootUrl = options.rootUrl || 'https://youtubereporting.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/jobs/{jobId}/reports')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['jobId'],
                    pathParams: ['jobId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.media = {
        /**
         * youtubereporting.media.download
         * @desc Method for media download. Download is supported on the URI
         * `/v1/media/{+name}?alt=media`.
         * @alias youtubereporting.media.download
         * @memberOf! youtubereporting(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resourceName Name of the media that is being downloaded.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        download: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://youtubereporting.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/media/{resourceName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['resourceName'],
                pathParams: ['resourceName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.reportTypes = {
        /**
         * youtubereporting.reportTypes.list
         * @desc Lists report types.
         * @alias youtubereporting.reportTypes.list
         * @memberOf! youtubereporting(v1)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.includeSystemManaged If set to true, also system-managed report types will be returned; otherwise only the report types that can be used to create new reporting jobs will be returned.
         * @param {string=} params.onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
         * @param {integer=} params.pageSize Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListReportTypes` method.
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
            var rootUrl = options.rootUrl || 'https://youtubereporting.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/reportTypes').replace(/([^:]\/)\/+/g, '$1'),
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
}
module.exports = Youtubereporting;
//# sourceMappingURL=v1.js.map