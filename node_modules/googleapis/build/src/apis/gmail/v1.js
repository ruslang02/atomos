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
 * Gmail API
 *
 * Access Gmail mailboxes including sending user email.
 *
 * @example
 * const google = require('googleapis');
 * const gmail = google.gmail('v1');
 *
 * @namespace gmail
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Gmail
 */
function Gmail(options) {
    var self = this;
    self._options = options || {};
    self.users =
        {
            /**
             * gmail.users.getProfile
             * @desc Gets the current user's Gmail profile.
             * @alias gmail.users.getProfile
             * @memberOf! gmail(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            getProfile: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/gmail/v1/users/{userId}/profile')
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
            stop: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/gmail/v1/users/{userId}/stop')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['userId'],
                    pathParams: ['userId'],
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
                        url: (rootUrl + '/gmail/v1/users/{userId}/watch')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['userId'],
                    pathParams: ['userId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            drafts: {
                /**
                 * gmail.users.drafts.create
                 * @desc Creates a new draft with the DRAFT label.
                 * @alias gmail.users.drafts.create
                 * @memberOf! gmail(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
                 * @param  {object} params.resource Media resource metadata
                 * @param {object} params.media Media object
                 * @param {string} params.media.mimeType Media mime-type
                 * @param {string|object} params.media.body Media body contents
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
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/gmail/v1/users/{userId}/drafts')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        mediaUrl: (rootUrl + '/upload/gmail/v1/users/{userId}/drafts')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        requiredParams: ['userId'],
                        pathParams: ['userId'],
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
                            url: (rootUrl + '/gmail/v1/users/{userId}/drafts/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['userId', 'id'],
                        pathParams: ['id', 'userId'],
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
                            url: (rootUrl + '/gmail/v1/users/{userId}/drafts/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['userId', 'id'],
                        pathParams: ['id', 'userId'],
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
                            url: (rootUrl + '/gmail/v1/users/{userId}/drafts')
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
                send: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/gmail/v1/users/{userId}/drafts/send')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        mediaUrl: (rootUrl + '/upload/gmail/v1/users/{userId}/drafts/send')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        requiredParams: ['userId'],
                        pathParams: ['userId'],
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
                            url: (rootUrl + '/gmail/v1/users/{userId}/drafts/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        mediaUrl: (rootUrl + '/upload/gmail/v1/users/{userId}/drafts/{id}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        requiredParams: ['userId', 'id'],
                        pathParams: ['id', 'userId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            },
            history: {
                /**
                 * gmail.users.history.list
                 * @desc Lists the history of all changes to the given mailbox.
                 * History results are returned in chronological order (increasing
                 * historyId).
                 * @alias gmail.users.history.list
                 * @memberOf! gmail(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.historyTypes History types to be returned by the function
                 * @param {string=} params.labelId Only return messages with a label matching the ID.
                 * @param {integer=} params.maxResults The maximum number of history records to return.
                 * @param {string=} params.pageToken Page token to retrieve a specific page of results in the list.
                 * @param {string=} params.startHistoryId Required. Returns history records after the specified startHistoryId. The supplied startHistoryId should be obtained from the historyId of a message, thread, or previous list response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date startHistoryId typically returns an HTTP 404 error code. A historyId is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an HTTP 404 error response, your application should perform a full sync. If you receive no nextPageToken in the response, there are no updates to retrieve and you can store the returned historyId for a future request.
                 * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
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
                            url: (rootUrl + '/gmail/v1/users/{userId}/history')
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
            },
            labels: {
                /**
                 * gmail.users.labels.create
                 * @desc Creates a new label.
                 * @alias gmail.users.labels.create
                 * @memberOf! gmail(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
                 * @param {gmail(v1).Label} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/gmail/v1/users/{userId}/labels')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['userId'],
                        pathParams: ['userId'],
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
                            url: (rootUrl + '/gmail/v1/users/{userId}/labels/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['userId', 'id'],
                        pathParams: ['id', 'userId'],
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
                            url: (rootUrl + '/gmail/v1/users/{userId}/labels/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['userId', 'id'],
                        pathParams: ['id', 'userId'],
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
                            url: (rootUrl + '/gmail/v1/users/{userId}/labels')
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
                patch: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/gmail/v1/users/{userId}/labels/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['userId', 'id'],
                        pathParams: ['id', 'userId'],
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
                            url: (rootUrl + '/gmail/v1/users/{userId}/labels/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['userId', 'id'],
                        pathParams: ['id', 'userId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            },
            messages: {
                /**
                 * gmail.users.messages.batchDelete
                 * @desc Deletes many messages by message ID. Provides no guarantees
                 * that messages were not already deleted or even existed at all.
                 * @alias gmail.users.messages.batchDelete
                 * @memberOf! gmail(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
                 * @param {gmail(v1).BatchDeleteMessagesRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                batchDelete: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/gmail/v1/users/{userId}/messages/batchDelete')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['userId'],
                        pathParams: ['userId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                batchModify: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/gmail/v1/users/{userId}/messages/batchModify')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['userId'],
                        pathParams: ['userId'],
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
                            url: (rootUrl + '/gmail/v1/users/{userId}/messages/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['userId', 'id'],
                        pathParams: ['id', 'userId'],
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
                            url: (rootUrl + '/gmail/v1/users/{userId}/messages/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['userId', 'id'],
                        pathParams: ['id', 'userId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                import: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/gmail/v1/users/{userId}/messages/import')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        mediaUrl: (rootUrl + '/upload/gmail/v1/users/{userId}/messages/import')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        requiredParams: ['userId'],
                        pathParams: ['userId'],
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
                            url: (rootUrl + '/gmail/v1/users/{userId}/messages')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        mediaUrl: (rootUrl + '/upload/gmail/v1/users/{userId}/messages')
                            .replace(/([^:]\/)\/+/g, '$1'),
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
                            url: (rootUrl + '/gmail/v1/users/{userId}/messages')
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
                modify: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/gmail/v1/users/{userId}/messages/{id}/modify')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['userId', 'id'],
                        pathParams: ['id', 'userId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                send: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/gmail/v1/users/{userId}/messages/send')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        mediaUrl: (rootUrl + '/upload/gmail/v1/users/{userId}/messages/send')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        requiredParams: ['userId'],
                        pathParams: ['userId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                trash: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/gmail/v1/users/{userId}/messages/{id}/trash')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['userId', 'id'],
                        pathParams: ['id', 'userId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                untrash: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/gmail/v1/users/{userId}/messages/{id}/untrash')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['userId', 'id'],
                        pathParams: ['id', 'userId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                attachments: {
                    /**
                     * gmail.users.messages.attachments.get
                     * @desc Gets the specified message attachment.
                     * @alias gmail.users.messages.attachments.get
                     * @memberOf! gmail(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.id The ID of the attachment.
                     * @param {string} params.messageId The ID of the message containing the attachment.
                     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
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
                                    '/gmail/v1/users/{userId}/messages/{messageId}/attachments/{id}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['userId', 'messageId', 'id'],
                            pathParams: ['id', 'messageId', 'userId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                }
            },
            settings: {
                /**
                 * gmail.users.settings.getAutoForwarding
                 * @desc Gets the auto-forwarding setting for the specified account.
                 * @alias gmail.users.settings.getAutoForwarding
                 * @memberOf! gmail(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                getAutoForwarding: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/gmail/v1/users/{userId}/settings/autoForwarding')
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
                getImap: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/gmail/v1/users/{userId}/settings/imap')
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
                getPop: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/gmail/v1/users/{userId}/settings/pop')
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
                getVacation: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/gmail/v1/users/{userId}/settings/vacation')
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
                updateAutoForwarding: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/gmail/v1/users/{userId}/settings/autoForwarding')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['userId'],
                        pathParams: ['userId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                updateImap: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/gmail/v1/users/{userId}/settings/imap')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['userId'],
                        pathParams: ['userId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                updatePop: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/gmail/v1/users/{userId}/settings/pop')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['userId'],
                        pathParams: ['userId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                updateVacation: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/gmail/v1/users/{userId}/settings/vacation')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['userId'],
                        pathParams: ['userId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                filters: {
                    /**
                     * gmail.users.settings.filters.create
                     * @desc Creates a filter.
                     * @alias gmail.users.settings.filters.create
                     * @memberOf! gmail(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
                     * @param {gmail(v1).Filter} params.resource Request body data
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
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/gmail/v1/users/{userId}/settings/filters')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['userId'],
                            pathParams: ['userId'],
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
                                    '/gmail/v1/users/{userId}/settings/filters/{id}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['userId', 'id'],
                            pathParams: ['id', 'userId'],
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
                                    '/gmail/v1/users/{userId}/settings/filters/{id}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['userId', 'id'],
                            pathParams: ['id', 'userId'],
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
                                    '/gmail/v1/users/{userId}/settings/filters')
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
                },
                forwardingAddresses: {
                    /**
                     * gmail.users.settings.forwardingAddresses.create
                     * @desc Creates a forwarding address. If ownership verification is
                     * required, a message will be sent to the recipient and the
                     * resource's verification status will be set to pending; otherwise,
                     * the resource will be created with verification status set to
                     * accepted.  This method is only available to service account
                     * clients that have been delegated domain-wide authority.
                     * @alias gmail.users.settings.forwardingAddresses.create
                     * @memberOf! gmail(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
                     * @param {gmail(v1).ForwardingAddress} params.resource Request body data
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
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/gmail/v1/users/{userId}/settings/forwardingAddresses')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['userId'],
                            pathParams: ['userId'],
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
                                    '/gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['userId', 'forwardingEmail'],
                            pathParams: ['forwardingEmail', 'userId'],
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
                                    '/gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['userId', 'forwardingEmail'],
                            pathParams: ['forwardingEmail', 'userId'],
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
                                    '/gmail/v1/users/{userId}/settings/forwardingAddresses')
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
                },
                sendAs: {
                    /**
                     * gmail.users.settings.sendAs.create
                     * @desc Creates a custom "from" send-as alias. If an SMTP MSA is
                     * specified, Gmail will attempt to connect to the SMTP service to
                     * validate the configuration before creating the alias. If
                     * ownership verification is required for the alias, a message will
                     * be sent to the email address and the resource's verification
                     * status will be set to pending; otherwise, the resource will be
                     * created with verification status set to accepted. If a signature
                     * is provided, Gmail will sanitize the HTML before saving it with
                     * the alias.  This method is only available to service account
                     * clients that have been delegated domain-wide authority.
                     * @alias gmail.users.settings.sendAs.create
                     * @memberOf! gmail(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
                     * @param {gmail(v1).SendAs} params.resource Request body data
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
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/gmail/v1/users/{userId}/settings/sendAs')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['userId'],
                            pathParams: ['userId'],
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
                                    '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['userId', 'sendAsEmail'],
                            pathParams: ['sendAsEmail', 'userId'],
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
                                    '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['userId', 'sendAsEmail'],
                            pathParams: ['sendAsEmail', 'userId'],
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
                                url: (rootUrl + '/gmail/v1/users/{userId}/settings/sendAs')
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
                                    '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PATCH'
                            }, options),
                            params: params,
                            requiredParams: ['userId', 'sendAsEmail'],
                            pathParams: ['sendAsEmail', 'userId'],
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
                                    '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['userId', 'sendAsEmail'],
                            pathParams: ['sendAsEmail', 'userId'],
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
                                url: (rootUrl +
                                    '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/verify')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['userId', 'sendAsEmail'],
                            pathParams: ['sendAsEmail', 'userId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    smimeInfo: {
                        /**
                         * gmail.users.settings.sendAs.smimeInfo.delete
                         * @desc Deletes the specified S/MIME config for the specified
                         * send-as alias.
                         * @alias gmail.users.settings.sendAs.smimeInfo.delete
                         * @memberOf! gmail(v1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.id The immutable ID for the SmimeInfo.
                         * @param {string} params.sendAsEmail The email address that appears in the "From:" header for mail sent using this alias.
                         * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
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
                                        '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'DELETE'
                                }, options),
                                params: params,
                                requiredParams: ['userId', 'sendAsEmail', 'id'],
                                pathParams: ['id', 'sendAsEmail', 'userId'],
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
                                        '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['userId', 'sendAsEmail', 'id'],
                                pathParams: ['id', 'sendAsEmail', 'userId'],
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
                                        '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['userId', 'sendAsEmail'],
                                pathParams: ['sendAsEmail', 'userId'],
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
                                        '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['userId', 'sendAsEmail'],
                                pathParams: ['sendAsEmail', 'userId'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        },
                        setDefault: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['userId', 'sendAsEmail', 'id'],
                                pathParams: ['id', 'sendAsEmail', 'userId'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    }
                }
            },
            threads: {
                /**
                 * gmail.users.threads.delete
                 * @desc Immediately and permanently deletes the specified thread.
                 * This operation cannot be undone. Prefer threads.trash instead.
                 * @alias gmail.users.threads.delete
                 * @memberOf! gmail(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.id ID of the Thread to delete.
                 * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
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
                            url: (rootUrl + '/gmail/v1/users/{userId}/threads/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['userId', 'id'],
                        pathParams: ['id', 'userId'],
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
                            url: (rootUrl + '/gmail/v1/users/{userId}/threads/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['userId', 'id'],
                        pathParams: ['id', 'userId'],
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
                            url: (rootUrl + '/gmail/v1/users/{userId}/threads')
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
                modify: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/gmail/v1/users/{userId}/threads/{id}/modify')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['userId', 'id'],
                        pathParams: ['id', 'userId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                trash: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/gmail/v1/users/{userId}/threads/{id}/trash')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['userId', 'id'],
                        pathParams: ['id', 'userId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                untrash: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/gmail/v1/users/{userId}/threads/{id}/untrash')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['userId', 'id'],
                        pathParams: ['id', 'userId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            }
        };
}
module.exports = Gmail;
//# sourceMappingURL=v1.js.map