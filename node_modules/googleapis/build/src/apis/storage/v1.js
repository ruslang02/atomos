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
 * Cloud Storage JSON API
 *
 * Stores and retrieves potentially large, immutable data objects.
 *
 * @example
 * const google = require('googleapis');
 * const storage = google.storage('v1');
 *
 * @namespace storage
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Storage
 */
function Storage(options) {
    var self = this;
    self._options = options || {};
    self.bucketAccessControls = {
        /**
         * storage.bucketAccessControls.delete
         * @desc Permanently deletes the ACL entry for the specified entity on the
         * specified bucket.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
         * // 2. This sample uses Application Default Credentials for
         * authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //
         * https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: 'my-bucket',  // TODO: Update placeholder value.
         *
         *     // The entity holding the permission. Can be user-userId,
         * user-emailAddress, group-groupId,
         *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
         *     entity: 'my-entity',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   storage.bucketAccessControls.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired &&
         * authClient.createScopedRequired()) { var scopes =
         * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
         * authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         * @alias storage.bucketAccessControls.delete
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/acl/{entity}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['bucket', 'entity'],
                pathParams: ['bucket', 'entity'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/acl/{entity}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket', 'entity'],
                pathParams: ['bucket', 'entity'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/acl')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/acl')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/acl/{entity}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['bucket', 'entity'],
                pathParams: ['bucket', 'entity'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/acl/{entity}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['bucket', 'entity'],
                pathParams: ['bucket', 'entity'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.buckets = {
        /**
         * storage.buckets.delete
         * @desc Permanently deletes an empty bucket.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
         * // 2. This sample uses Application Default Credentials for
         * authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //
         * https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: 'my-bucket',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   storage.buckets.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired &&
         * authClient.createScopedRequired()) { var scopes =
         * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
         * authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         * @alias storage.buckets.delete
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string=} params.ifMetagenerationMatch If set, only deletes the bucket if its metageneration matches this value.
         * @param {string=} params.ifMetagenerationNotMatch If set, only deletes the bucket if its metageneration does not match this value.
         * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
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
                    url: (rootUrl + '/storage/v1/b/{bucket}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/storage/v1/b/{bucket}/iam')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
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
                    url: (rootUrl + '/storage/v1/b').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: [],
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
                    url: (rootUrl + '/storage/v1/b').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        lockRetentionPolicy: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/storage/v1/b/{bucket}/lockRetentionPolicy')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['bucket', 'ifMetagenerationMatch'],
                pathParams: ['bucket'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/storage/v1/b/{bucket}/iam')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/storage/v1/b/{bucket}/iam/testPermissions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket', 'permissions'],
                pathParams: ['bucket'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.channels = {
        /**
         * storage.channels.stop
         * @desc Stop watching resources through this channel
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
         * // 2. This sample uses Application Default Credentials for
         * authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //
         * https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   storage.channels.stop(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired &&
         * authClient.createScopedRequired()) { var scopes =
         * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
         * authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         * @alias storage.channels.stop
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {storage(v1).Channel} params.resource Request body data
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
                    url: (rootUrl + '/storage/v1/channels/stop')
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
    self.defaultObjectAccessControls = {
        /**
         * storage.defaultObjectAccessControls.delete
         * @desc Permanently deletes the default object ACL entry for the specified
         * entity on the specified bucket.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
         * // 2. This sample uses Application Default Credentials for
         * authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //
         * https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: 'my-bucket',  // TODO: Update placeholder value.
         *
         *     // The entity holding the permission. Can be user-userId,
         * user-emailAddress, group-groupId,
         *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
         *     entity: 'my-entity',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   storage.defaultObjectAccessControls.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired &&
         * authClient.createScopedRequired()) { var scopes =
         * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
         * authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         * @alias storage.defaultObjectAccessControls.delete
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl/{entity}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['bucket', 'entity'],
                pathParams: ['bucket', 'entity'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl/{entity}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket', 'entity'],
                pathParams: ['bucket', 'entity'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl/{entity}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['bucket', 'entity'],
                pathParams: ['bucket', 'entity'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl/{entity}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['bucket', 'entity'],
                pathParams: ['bucket', 'entity'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.notifications = {
        /**
         * storage.notifications.delete
         * @desc Permanently deletes a notification subscription.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
         * // 2. This sample uses Application Default Credentials for
         * authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //
         * https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The parent bucket of the notification.
         *     bucket: 'my-bucket',  // TODO: Update placeholder value.
         *
         *     // ID of the notification to delete.
         *     notification: 'my-notification',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   storage.notifications.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired &&
         * authClient.createScopedRequired()) { var scopes =
         * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
         * authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         * @alias storage.notifications.delete
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket The parent bucket of the notification.
         * @param {string} params.notification ID of the notification to delete.
         * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
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
                        '/storage/v1/b/{bucket}/notificationConfigs/{notification}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['bucket', 'notification'],
                pathParams: ['bucket', 'notification'],
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
                        '/storage/v1/b/{bucket}/notificationConfigs/{notification}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket', 'notification'],
                pathParams: ['bucket', 'notification'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/notificationConfigs')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/notificationConfigs')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.objectAccessControls = {
        /**
         * storage.objectAccessControls.delete
         * @desc Permanently deletes the ACL entry for the specified entity on the
         * specified object.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
         * // 2. This sample uses Application Default Credentials for
         * authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //
         * https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: 'my-bucket',  // TODO: Update placeholder value.
         *
         *     // Name of the object. For information about how to URL encode object
         * names to be path safe, see
         *     // Encoding URI Path Parts.
         *     object: 'my-object',  // TODO: Update placeholder value.
         *
         *     // The entity holding the permission. Can be user-userId,
         * user-emailAddress, group-groupId,
         *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
         *     entity: 'my-entity',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   storage.objectAccessControls.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired &&
         * authClient.createScopedRequired()) { var scopes =
         * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
         * authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         * @alias storage.objectAccessControls.delete
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
         * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
         * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl/{entity}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object', 'entity'],
                pathParams: ['bucket', 'entity', 'object'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl/{entity}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object', 'entity'],
                pathParams: ['bucket', 'entity', 'object'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object'],
                pathParams: ['bucket', 'object'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object'],
                pathParams: ['bucket', 'object'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl/{entity}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object', 'entity'],
                pathParams: ['bucket', 'entity', 'object'],
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
                    url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl/{entity}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object', 'entity'],
                pathParams: ['bucket', 'entity', 'object'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.objects =
        {
            /**
             * storage.objects.compose
             * @desc Concatenates a list of existing objects into a new object in
             * the same bucket.
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Cloud Storage JSON API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/storage
             * // 2. This sample uses Application Default Credentials for
             * authentication.
             * //    If not already done, install the gcloud CLI from
             * //    https://cloud.google.com/sdk and run
             * //    `gcloud beta auth application-default login`.
             * //    For more information, see
             * //
             * https://developers.google.com/identity/protocols/application-default-credentials
             * // 3. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var storage = google.storage('v1');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // Name of the bucket in which to store the new object.
             *     destinationBucket: 'my-destination-bucket',  // TODO: Update
             * placeholder value.
             *
             *     // Name of the new object. For information about how to URL
             * encode object names to be path safe, see
             *     // Encoding URI Path Parts.
             *     destinationObject: 'my-destination-object',  // TODO: Update
             * placeholder value.
             *
             *     resource: {
             *       // TODO: Add desired properties to the request body.
             *     },
             *
             *     auth: authClient,
             *   };
             *
             *   storage.objects.compose(request, function(err, response) {
             *     if (err) {
             *       console.error(err);
             *       return;
             *     }
             *
             *     // TODO: Change code below to process the `response` object:
             *     console.log(JSON.stringify(response, null, 2));
             *   });
             * });
             *
             * function authorize(callback) {
             *   google.auth.getApplicationDefault(function(err, authClient) {
             *     if (err) {
             *       console.error('authentication failed: ', err);
             *       return;
             *     }
             *     if (authClient.createScopedRequired &&
             * authClient.createScopedRequired()) { var scopes =
             * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
             * authClient.createScoped(scopes);
             *     }
             *     callback(authClient);
             *   });
             * }
             * @alias storage.objects.compose
             * @memberOf! storage(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.destinationBucket Name of the bucket in which to store the new object.
             * @param {string} params.destinationObject Name of the new object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
             * @param {string=} params.destinationPredefinedAcl Apply a predefined set of access controls to the destination object.
             * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
             * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
             * @param {string=} params.kmsKeyName Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
             * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
             * @param {storage(v1).ComposeRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            compose: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/storage/v1/b/{destinationBucket}/o/{destinationObject}/compose')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['destinationBucket', 'destinationObject'],
                    pathParams: ['destinationBucket', 'destinationObject'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            copy: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/storage/v1/b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: [
                        'sourceBucket', 'sourceObject', 'destinationBucket',
                        'destinationObject'
                    ],
                    pathParams: [
                        'destinationBucket', 'destinationObject', 'sourceBucket',
                        'sourceObject'
                    ],
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
                        url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['bucket', 'object'],
                    pathParams: ['bucket', 'object'],
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
                        url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['bucket', 'object'],
                    pathParams: ['bucket', 'object'],
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
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/iam')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['bucket', 'object'],
                    pathParams: ['bucket', 'object'],
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
                        url: (rootUrl + '/storage/v1/b/{bucket}/o')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    mediaUrl: (rootUrl + '/upload/storage/v1/b/{bucket}/o')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    requiredParams: ['bucket'],
                    pathParams: ['bucket'],
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
                        url: (rootUrl + '/storage/v1/b/{bucket}/o')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['bucket'],
                    pathParams: ['bucket'],
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
                        url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['bucket', 'object'],
                    pathParams: ['bucket', 'object'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            rewrite: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/storage/v1/b/{sourceBucket}/o/{sourceObject}/rewriteTo/b/{destinationBucket}/o/{destinationObject}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: [
                        'sourceBucket', 'sourceObject', 'destinationBucket',
                        'destinationObject'
                    ],
                    pathParams: [
                        'destinationBucket', 'destinationObject', 'sourceBucket',
                        'sourceObject'
                    ],
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
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/iam')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['bucket', 'object'],
                    pathParams: ['bucket', 'object'],
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
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/storage/v1/b/{bucket}/o/{object}/iam/testPermissions')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['bucket', 'object', 'permissions'],
                    pathParams: ['bucket', 'object'],
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
                        url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['bucket', 'object'],
                    pathParams: ['bucket', 'object'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            watchAll: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/storage/v1/b/{bucket}/o/watch')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['bucket'],
                    pathParams: ['bucket'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        };
    self.projects = {
        serviceAccount: {
            /**
             * storage.projects.serviceAccount.get
             * @desc Get the email address of this project's Google Cloud Storage
             * service account.
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Cloud Storage JSON API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/storage
             * // 2. This sample uses Application Default Credentials for
             * authentication.
             * //    If not already done, install the gcloud CLI from
             * //    https://cloud.google.com/sdk and run
             * //    `gcloud beta auth application-default login`.
             * //    For more information, see
             * //
             * https://developers.google.com/identity/protocols/application-default-credentials
             * // 3. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var storage = google.storage('v1');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // Project ID
             *     projectId: 'my-project-id',  // TODO: Update placeholder value.
             *
             *     auth: authClient,
             *   };
             *
             *   storage.projects.serviceAccount.get(request, function(err, response)
             * { if (err) { console.error(err); return;
             *     }
             *
             *     // TODO: Change code below to process the `response` object:
             *     console.log(JSON.stringify(response, null, 2));
             *   });
             * });
             *
             * function authorize(callback) {
             *   google.auth.getApplicationDefault(function(err, authClient) {
             *     if (err) {
             *       console.error('authentication failed: ', err);
             *       return;
             *     }
             *     if (authClient.createScopedRequired &&
             * authClient.createScopedRequired()) { var scopes =
             * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
             * authClient.createScoped(scopes);
             *     }
             *     callback(authClient);
             *   });
             * }
             * @alias storage.projects.serviceAccount.get
             * @memberOf! storage(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId Project ID
             * @param {string=} params.userProject The project to be billed for this request.
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
                            '/storage/v1/projects/{projectId}/serviceAccount')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['projectId'],
                    pathParams: ['projectId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
}
module.exports = Storage;
//# sourceMappingURL=v1.js.map