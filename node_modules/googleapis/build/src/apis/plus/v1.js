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
 * Google+ API
 *
 * Builds on top of the Google+ platform.
 *
 * @example
 * const google = require('googleapis');
 * const plus = google.plus('v1');
 *
 * @namespace plus
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Plus
 */
function Plus(options) {
    var self = this;
    self._options = options || {};
    self.activities = {
        /**
         * plus.activities.get
         * @desc Get an activity.
         * @alias plus.activities.get
         * @memberOf! plus(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.activityId The ID of the activity to get.
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
                    url: (rootUrl + '/plus/v1/activities/{activityId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['activityId'],
                pathParams: ['activityId'],
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
                    url: (rootUrl + '/plus/v1/people/{userId}/activities/{collection}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userId', 'collection'],
                pathParams: ['collection', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        search: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/plus/v1/activities')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['query'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.comments = {
        /**
         * plus.comments.get
         * @desc Get a comment.
         * @alias plus.comments.get
         * @memberOf! plus(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment to get.
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
                    url: (rootUrl + '/plus/v1/comments/{commentId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['commentId'],
                pathParams: ['commentId'],
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
                    url: (rootUrl + '/plus/v1/activities/{activityId}/comments')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['activityId'],
                pathParams: ['activityId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.people = {
        /**
         * plus.people.get
         * @desc Get a person's profile. If your app uses scope
         * https://www.googleapis.com/auth/plus.login, this method is guaranteed to
         * return ageRange and language.
         * @alias plus.people.get
         * @memberOf! plus(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.userId The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.
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
                    url: (rootUrl + '/plus/v1/people/{userId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userId'],
                pathParams: ['userId'],
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
                    url: (rootUrl + '/plus/v1/people/{userId}/people/{collection}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userId', 'collection'],
                pathParams: ['collection', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        listByActivity: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/plus/v1/activities/{activityId}/people/{collection}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['activityId', 'collection'],
                pathParams: ['activityId', 'collection'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        search: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/plus/v1/people').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['query'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Plus;
//# sourceMappingURL=v1.js.map