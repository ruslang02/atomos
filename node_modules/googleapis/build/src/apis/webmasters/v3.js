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
 * Search Console API
 *
 * View Google Search Console data for your verified sites.
 *
 * @example
 * const google = require('googleapis');
 * const webmasters = google.webmasters('v3');
 *
 * @namespace webmasters
 * @type {Function}
 * @version v3
 * @variation v3
 * @param {object=} options Options for Webmasters
 */
function Webmasters(options) {
    var self = this;
    self._options = options || {};
    self.searchanalytics = {
        /**
         * webmasters.searchanalytics.query
         * @desc Query your data with filters and parameters that you define.
         * Returns zero or more rows grouped by the row keys that you define. You
         * must define a date range of one or more days.  When date is one of the
         * group by values, any days without data are omitted from the result list.
         * If you need to know which days have data, issue a broad date range query
         * grouped by date for any metric, and see which day rows are returned.
         * @alias webmasters.searchanalytics.query
         * @memberOf! webmasters(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.siteUrl The site's URL, including protocol. For example: http://www.example.com/
         * @param {webmasters(v3).SearchAnalyticsQueryRequest} params.resource Request body data
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
                        '/webmasters/v3/sites/{siteUrl}/searchAnalytics/query')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['siteUrl'],
                pathParams: ['siteUrl'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.sitemaps = {
        /**
         * webmasters.sitemaps.delete
         * @desc Deletes a sitemap from this site.
         * @alias webmasters.sitemaps.delete
         * @memberOf! webmasters(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.feedpath The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
         * @param {string} params.siteUrl The site's URL, including protocol. For example: http://www.example.com/
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
                        '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['siteUrl', 'feedpath'],
                pathParams: ['feedpath', 'siteUrl'],
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
                        '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['siteUrl', 'feedpath'],
                pathParams: ['feedpath', 'siteUrl'],
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
                    url: (rootUrl + '/webmasters/v3/sites/{siteUrl}/sitemaps')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['siteUrl'],
                pathParams: ['siteUrl'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        submit: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['siteUrl', 'feedpath'],
                pathParams: ['feedpath', 'siteUrl'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.sites = {
        /**
         * webmasters.sites.add
         * @desc Adds a site to the set of the user's sites in Search Console.
         * @alias webmasters.sites.add
         * @memberOf! webmasters(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.siteUrl The URL of the site to add.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        add: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/webmasters/v3/sites/{siteUrl}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['siteUrl'],
                pathParams: ['siteUrl'],
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
                    url: (rootUrl + '/webmasters/v3/sites/{siteUrl}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['siteUrl'],
                pathParams: ['siteUrl'],
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
                    url: (rootUrl + '/webmasters/v3/sites/{siteUrl}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['siteUrl'],
                pathParams: ['siteUrl'],
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
                    url: (rootUrl + '/webmasters/v3/sites')
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
    self.urlcrawlerrorscounts = {
        /**
         * webmasters.urlcrawlerrorscounts.query
         * @desc Retrieves a time series of the number of URL crawl errors per error
         * category and platform.
         * @alias webmasters.urlcrawlerrorscounts.query
         * @memberOf! webmasters(v3)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.category The crawl error category. For example: serverError. If not specified, returns results for all categories.
         * @param {boolean=} params.latestCountsOnly If true, returns only the latest crawl error counts.
         * @param {string=} params.platform The user agent type (platform) that made the request. For example: web. If not specified, returns results for all platforms.
         * @param {string} params.siteUrl The site's URL, including protocol. For example: http://www.example.com/
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
                        '/webmasters/v3/sites/{siteUrl}/urlCrawlErrorsCounts/query')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['siteUrl'],
                pathParams: ['siteUrl'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.urlcrawlerrorssamples = {
        /**
         * webmasters.urlcrawlerrorssamples.get
         * @desc Retrieves details about crawl errors for a site's sample URL.
         * @alias webmasters.urlcrawlerrorssamples.get
         * @memberOf! webmasters(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.category The crawl error category. For example: authPermissions
         * @param {string} params.platform The user agent type (platform) that made the request. For example: web
         * @param {string} params.siteUrl The site's URL, including protocol. For example: http://www.example.com/
         * @param {string} params.url The relative path (without the site) of the sample URL. It must be one of the URLs returned by list(). For example, for the URL https://www.example.com/pagename on the site https://www.example.com/, the url value is pagename
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
                        '/webmasters/v3/sites/{siteUrl}/urlCrawlErrorsSamples/{url}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['siteUrl', 'url', 'category', 'platform'],
                pathParams: ['siteUrl', 'url'],
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
                        '/webmasters/v3/sites/{siteUrl}/urlCrawlErrorsSamples')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['siteUrl', 'category', 'platform'],
                pathParams: ['siteUrl'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        markAsFixed: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/webmasters/v3/sites/{siteUrl}/urlCrawlErrorsSamples/{url}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['siteUrl', 'url', 'category', 'platform'],
                pathParams: ['siteUrl', 'url'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Webmasters;
//# sourceMappingURL=v3.js.map