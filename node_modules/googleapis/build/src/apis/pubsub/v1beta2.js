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
 * const pubsub = google.pubsub('v1beta2');
 *
 * @namespace pubsub
 * @type {Function}
 * @version v1beta2
 * @variation v1beta2
 * @param {object=} options Options for Pubsub
 */
function Pubsub(options) {
    var self = this;
    self._options = options || {};
    self.projects = {
        subscriptions: {
            /**
             * pubsub.projects.subscriptions.acknowledge
             * @desc Acknowledges the messages associated with the `ack_ids` in the
             * `AcknowledgeRequest`. The Pub/Sub system can remove the relevant
             * messages from the subscription.  Acknowledging a message whose ack
             * deadline has expired may succeed, but such a message may be redelivered
             * later. Acknowledging a message more than once will not result in an
             * error.
             * @alias pubsub.projects.subscriptions.acknowledge
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.subscription The subscription whose message is being acknowledged.
             * @param {pubsub(v1beta2).AcknowledgeRequest} params.resource Request body data
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
                        url: (rootUrl + '/v1beta2/{subscription}:acknowledge')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['subscription'],
                    pathParams: ['subscription'],
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
                        url: (rootUrl + '/v1beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
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
                        url: (rootUrl + '/v1beta2/{subscription}')
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
                        url: (rootUrl + '/v1beta2/{subscription}')
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
            getIamPolicy: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{resource}:getIamPolicy')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['resource'],
                    pathParams: ['resource'],
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
                        url: (rootUrl + '/v1beta2/{project}/subscriptions')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['project'],
                    pathParams: ['project'],
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
                        url: (rootUrl + '/v1beta2/{subscription}:modifyAckDeadline')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['subscription'],
                    pathParams: ['subscription'],
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
                        url: (rootUrl + '/v1beta2/{subscription}:modifyPushConfig')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['subscription'],
                    pathParams: ['subscription'],
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
                        url: (rootUrl + '/v1beta2/{subscription}:pull')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['subscription'],
                    pathParams: ['subscription'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            setIamPolicy: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{resource}:setIamPolicy')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['resource'],
                    pathParams: ['resource'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            testIamPermissions: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{resource}:testIamPermissions')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['resource'],
                    pathParams: ['resource'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        topics: {
            /**
             * pubsub.projects.topics.create
             * @desc Creates the given topic with the given name.
             * @alias pubsub.projects.topics.create
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
             * @param {pubsub(v1beta2).Topic} params.resource Request body data
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
                        url: (rootUrl + '/v1beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
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
                        url: (rootUrl + '/v1beta2/{topic}')
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
                        url: (rootUrl + '/v1beta2/{topic}')
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
            getIamPolicy: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{resource}:getIamPolicy')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['resource'],
                    pathParams: ['resource'],
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
                        url: (rootUrl + '/v1beta2/{project}/topics')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['project'],
                    pathParams: ['project'],
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
                        url: (rootUrl + '/v1beta2/{topic}:publish')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['topic'],
                    pathParams: ['topic'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            setIamPolicy: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{resource}:setIamPolicy')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['resource'],
                    pathParams: ['resource'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            testIamPermissions: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{resource}:testIamPermissions')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['resource'],
                    pathParams: ['resource'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            subscriptions: {
                /**
                 * pubsub.projects.topics.subscriptions.list
                 * @desc Lists the name of the subscriptions for this topic.
                 * @alias pubsub.projects.topics.subscriptions.list
                 * @memberOf! pubsub(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {integer=} params.pageSize Maximum number of subscription names to return.
                 * @param {string=} params.pageToken The value returned by the last `ListTopicSubscriptionsResponse`; indicates that this is a continuation of a prior `ListTopicSubscriptions` call, and that the system should return the next page of data.
                 * @param {string} params.topic The name of the topic that subscriptions are attached to.
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
                    var rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{topic}/subscriptions')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['topic'],
                        pathParams: ['topic'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            }
        }
    };
}
module.exports = Pubsub;
//# sourceMappingURL=v1beta2.js.map