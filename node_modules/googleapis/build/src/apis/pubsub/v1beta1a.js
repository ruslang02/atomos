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
 * Google Cloud Pub/Sub API
 *
 * Provides reliable, many-to-many, asynchronous messaging between applications.
 *
 * @example
 * const google = require('googleapis');
 * const pubsub = google.pubsub('v1beta1a');
 *
 * @namespace pubsub
 * @type {Function}
 * @version v1beta1a
 * @variation v1beta1a
 * @param {object=} options Options for Pubsub
 */
function Pubsub(options) {
    var self = this;
    self._options = options || {};
    self.subscriptions = {
        /**
         * pubsub.subscriptions.acknowledge
         * @desc Acknowledges a particular received message: the Pub/Sub system can
         * remove the given message from the subscription. Acknowledging a message
         * whose Ack deadline has expired may succeed, but the message could have
         * been already redelivered. Acknowledging a message more than once will not
         * result in an error. This is only used for messages received via pull.
         * @alias pubsub.subscriptions.acknowledge
         * @memberOf! pubsub(v1beta1a)
         *
         * @param {object} params Parameters for request
         * @param {pubsub(v1beta1a).AcknowledgeRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        acknowledge: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1a/subscriptions/acknowledge')
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
        create: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1a/subscriptions')
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
        delete: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1a/subscriptions/{subscription}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['subscription'],
                pathParams: ['subscription'],
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
            var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1a/subscriptions/{subscription}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['subscription'],
                pathParams: ['subscription'],
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
            var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1a/subscriptions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        modifyAckDeadline: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1a/subscriptions/modifyAckDeadline')
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
        modifyPushConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1a/subscriptions/modifyPushConfig')
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
        pull: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1a/subscriptions/pull')
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
        pullBatch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1a/subscriptions/pullBatch')
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
    self.topics = {
        /**
         * pubsub.topics.create
         * @desc Creates the given topic with the given name.
         * @alias pubsub.topics.create
         * @memberOf! pubsub(v1beta1a)
         *
         * @param {object} params Parameters for request
         * @param {pubsub(v1beta1a).Topic} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1a/topics').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1a/topics/{topic}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['topic'],
                pathParams: ['topic'],
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
            var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1a/topics/{topic}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['topic'],
                pathParams: ['topic'],
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
            var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1a/topics').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
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
            var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1a/topics/publish')
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
        publishBatch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1a/topics/publishBatch')
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
}
module.exports = Pubsub;
//# sourceMappingURL=v1beta1a.js.map