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
 * Blogger API
 *
 * API for access to the data within Blogger.
 *
 * @example
 * const google = require('googleapis');
 * const blogger = google.blogger('v2');
 *
 * @namespace blogger
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Blogger
 */
function Blogger(options) {
    var self = this;
    self._options = options || {};
    self.blogs = {
        /**
         * blogger.blogs.get
         * @desc Gets one blog by id.
         * @alias blogger.blogs.get
         * @memberOf! blogger(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.blogId The ID of the blog to get.
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
                    url: (rootUrl + '/blogger/v2/blogs/{blogId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['blogId'],
                pathParams: ['blogId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.comments = {
        /**
         * blogger.comments.get
         * @desc Gets one comment by id.
         * @alias blogger.comments.get
         * @memberOf! blogger(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.blogId ID of the blog to containing the comment.
         * @param {string} params.commentId The ID of the comment to get.
         * @param {string} params.postId ID of the post to fetch posts from.
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
                        '/blogger/v2/blogs/{blogId}/posts/{postId}/comments/{commentId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['blogId', 'postId', 'commentId'],
                pathParams: ['blogId', 'commentId', 'postId'],
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
                        '/blogger/v2/blogs/{blogId}/posts/{postId}/comments')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['blogId', 'postId'],
                pathParams: ['blogId', 'postId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.pages = {
        /**
         * blogger.pages.get
         * @desc Gets one blog page by id.
         * @alias blogger.pages.get
         * @memberOf! blogger(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.blogId ID of the blog containing the page.
         * @param {string} params.pageId The ID of the page to get.
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
                    url: (rootUrl + '/blogger/v2/blogs/{blogId}/pages/{pageId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['blogId', 'pageId'],
                pathParams: ['blogId', 'pageId'],
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
                    url: (rootUrl + '/blogger/v2/blogs/{blogId}/pages')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['blogId'],
                pathParams: ['blogId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.posts = {
        /**
         * blogger.posts.get
         * @desc Get a post by id.
         * @alias blogger.posts.get
         * @memberOf! blogger(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.blogId ID of the blog to fetch the post from.
         * @param {string} params.postId The ID of the post
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
                    url: (rootUrl + '/blogger/v2/blogs/{blogId}/posts/{postId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['blogId', 'postId'],
                pathParams: ['blogId', 'postId'],
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
                    url: (rootUrl + '/blogger/v2/blogs/{blogId}/posts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['blogId'],
                pathParams: ['blogId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.users = {
        /**
         * blogger.users.get
         * @desc Gets one user by id.
         * @alias blogger.users.get
         * @memberOf! blogger(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.userId The ID of the user to get.
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
                    url: (rootUrl + '/blogger/v2/users/{userId}')
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
        blogs: {
            /**
             * blogger.users.blogs.list
             * @desc Retrieves a list of blogs, possibly filtered.
             * @alias blogger.users.blogs.list
             * @memberOf! blogger(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.userId ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
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
                        url: (rootUrl + '/blogger/v2/users/{userId}/blogs')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['userId'],
                    pathParams: ['userId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
}
module.exports = Blogger;
//# sourceMappingURL=v2.js.map