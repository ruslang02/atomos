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
 * const blogger = google.blogger('v3');
 *
 * @namespace blogger
 * @type {Function}
 * @version v3
 * @variation v3
 * @param {object=} options Options for Blogger
 */
function Blogger(options) {
    var self = this;
    self._options = options || {};
    self.blogs = {
        /**
         * blogger.blogs.get
         * @desc Gets one blog by ID.
         * @alias blogger.blogs.get
         * @memberOf! blogger(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.blogId The ID of the blog to get.
         * @param {integer=} params.maxPosts Maximum number of posts to pull back with the blog.
         * @param {string=} params.view Access level with which to view the blog. Note that some fields require elevated access.
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
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['blogId'],
                pathParams: ['blogId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        getByUrl: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/blogger/v3/blogs/byurl')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['url'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        listByUser: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/blogger/v3/users/{userId}/blogs')
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
    };
    self.blogUserInfos = {
        /**
         * blogger.blogUserInfos.get
         * @desc Gets one blog and user info pair by blogId and userId.
         * @alias blogger.blogUserInfos.get
         * @memberOf! blogger(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.blogId The ID of the blog to get.
         * @param {integer=} params.maxPosts Maximum number of posts to pull back with the blog.
         * @param {string} params.userId ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
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
                    url: (rootUrl + '/blogger/v3/users/{userId}/blogs/{blogId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userId', 'blogId'],
                pathParams: ['blogId', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.comments = {
        /**
         * blogger.comments.approve
         * @desc Marks a comment as not spam.
         * @alias blogger.comments.approve
         * @memberOf! blogger(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.blogId The ID of the Blog.
         * @param {string} params.commentId The ID of the comment to mark as not spam.
         * @param {string} params.postId The ID of the Post.
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
                        '/blogger/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/approve')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['blogId', 'postId', 'commentId'],
                pathParams: ['blogId', 'commentId', 'postId'],
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
                    url: (rootUrl +
                        '/blogger/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['blogId', 'postId', 'commentId'],
                pathParams: ['blogId', 'commentId', 'postId'],
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
                        '/blogger/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}')
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
                        '/blogger/v3/blogs/{blogId}/posts/{postId}/comments')
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
        listByBlog: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/comments')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['blogId'],
                pathParams: ['blogId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        markAsSpam: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/blogger/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/spam')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['blogId', 'postId', 'commentId'],
                pathParams: ['blogId', 'commentId', 'postId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        removeContent: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/blogger/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/removecontent')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['blogId', 'postId', 'commentId'],
                pathParams: ['blogId', 'commentId', 'postId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.pages = {
        /**
         * blogger.pages.delete
         * @desc Delete a page by ID.
         * @alias blogger.pages.delete
         * @memberOf! blogger(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.blogId The ID of the Blog.
         * @param {string} params.pageId The ID of the Page.
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
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/pages/{pageId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['blogId', 'pageId'],
                pathParams: ['blogId', 'pageId'],
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
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/pages/{pageId}')
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
        insert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/pages')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['blogId'],
                pathParams: ['blogId'],
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
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/pages')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['blogId'],
                pathParams: ['blogId'],
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
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/pages/{pageId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['blogId', 'pageId'],
                pathParams: ['blogId', 'pageId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        publish: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/blogger/v3/blogs/{blogId}/pages/{pageId}/publish')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['blogId', 'pageId'],
                pathParams: ['blogId', 'pageId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        revert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/pages/{pageId}/revert')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['blogId', 'pageId'],
                pathParams: ['blogId', 'pageId'],
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
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/pages/{pageId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['blogId', 'pageId'],
                pathParams: ['blogId', 'pageId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.pageViews = {
        /**
         * blogger.pageViews.get
         * @desc Retrieve pageview stats for a Blog.
         * @alias blogger.pageViews.get
         * @memberOf! blogger(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.blogId The ID of the blog to get.
         * @param {string=} params.range
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
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/pageviews')
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
         * blogger.posts.delete
         * @desc Delete a post by ID.
         * @alias blogger.posts.delete
         * @memberOf! blogger(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.blogId The ID of the Blog.
         * @param {string} params.postId The ID of the Post.
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
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['blogId', 'postId'],
                pathParams: ['blogId', 'postId'],
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
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}')
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
        getByPath: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts/bypath')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['blogId', 'path'],
                pathParams: ['blogId'],
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
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['blogId'],
                pathParams: ['blogId'],
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
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['blogId'],
                pathParams: ['blogId'],
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
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['blogId', 'postId'],
                pathParams: ['blogId', 'postId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        publish: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/blogger/v3/blogs/{blogId}/posts/{postId}/publish')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['blogId', 'postId'],
                pathParams: ['blogId', 'postId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        revert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}/revert')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['blogId', 'postId'],
                pathParams: ['blogId', 'postId'],
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
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts/search')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['blogId', 'q'],
                pathParams: ['blogId'],
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
                    url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['blogId', 'postId'],
                pathParams: ['blogId', 'postId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.postUserInfos = {
        /**
         * blogger.postUserInfos.get
         * @desc Gets one post and user info pair, by post ID and user ID. The post
         * user info contains per-user information about the post, such as access
         * rights, specific to the user.
         * @alias blogger.postUserInfos.get
         * @memberOf! blogger(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.blogId The ID of the blog.
         * @param {integer=} params.maxComments Maximum number of comments to pull back on a post.
         * @param {string} params.postId The ID of the post to get.
         * @param {string} params.userId ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
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
                        '/blogger/v3/users/{userId}/blogs/{blogId}/posts/{postId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userId', 'blogId', 'postId'],
                pathParams: ['blogId', 'postId', 'userId'],
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
                    url: (rootUrl + '/blogger/v3/users/{userId}/blogs/{blogId}/posts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userId', 'blogId'],
                pathParams: ['blogId', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.users = {
        /**
         * blogger.users.get
         * @desc Gets one user by ID.
         * @alias blogger.users.get
         * @memberOf! blogger(v3)
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
                    url: (rootUrl + '/blogger/v3/users/{userId}')
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
    };
}
module.exports = Blogger;
//# sourceMappingURL=v3.js.map