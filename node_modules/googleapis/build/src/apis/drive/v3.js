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
 * Drive API
 *
 * Manages files in Drive including uploading, downloading, searching, detecting
 * changes, and updating sharing permissions.
 *
 * @example
 * const google = require('googleapis');
 * const drive = google.drive('v3');
 *
 * @namespace drive
 * @type {Function}
 * @version v3
 * @variation v3
 * @param {object=} options Options for Drive
 */
function Drive(options) {
    var self = this;
    self._options = options || {};
    self.about = {
        /**
         * drive.about.get
         * @desc Gets information about the user, the user's Drive, and system
         * capabilities.
         * @alias drive.about.get
         * @memberOf! drive(v3)
         *
         * @param {object=} params Parameters for request
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
                    url: (rootUrl + '/drive/v3/about').replace(/([^:]\/)\/+/g, '$1'),
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
    self.changes = {
        /**
         * drive.changes.getStartPageToken
         * @desc Gets the starting pageToken for listing future changes.
         * @alias drive.changes.getStartPageToken
         * @memberOf! drive(v3)
         *
         * @param {object=} params Parameters for request
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {string=} params.teamDriveId The ID of the Team Drive for which the starting pageToken for listing future changes from that Team Drive will be returned.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getStartPageToken: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/drive/v3/changes/startPageToken')
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
        list: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/drive/v3/changes').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['pageToken'],
                pathParams: [],
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
                    url: (rootUrl + '/drive/v3/changes/watch')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['pageToken'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.channels = {
        /**
         * drive.channels.stop
         * @desc Stop watching resources through this channel
         * @alias drive.channels.stop
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {drive(v3).Channel} params.resource Request body data
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
                    url: (rootUrl + '/drive/v3/channels/stop')
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
    self.comments = {
        /**
         * drive.comments.create
         * @desc Creates a new comment on a file.
         * @alias drive.comments.create
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {drive(v3).Comment} params.resource Request body data
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
                    url: (rootUrl + '/drive/v3/files/{fileId}/comments')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
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
                    url: (rootUrl + '/drive/v3/files/{fileId}/comments/{commentId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId'],
                pathParams: ['commentId', 'fileId'],
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
                    url: (rootUrl + '/drive/v3/files/{fileId}/comments/{commentId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId'],
                pathParams: ['commentId', 'fileId'],
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
                    url: (rootUrl + '/drive/v3/files/{fileId}/comments')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
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
                    url: (rootUrl + '/drive/v3/files/{fileId}/comments/{commentId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId'],
                pathParams: ['commentId', 'fileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.files = {
        /**
         * drive.files.copy
         * @desc Creates a copy of a file and applies any requested updates with
         * patch semantics.
         * @alias drive.files.copy
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.ignoreDefaultVisibility Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
         * @param {boolean=} params.keepRevisionForever Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
         * @param {string=} params.ocrLanguage A language hint for OCR processing during image import (ISO 639-1 code).
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {drive(v3).File} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        copy: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/drive/v3/files/{fileId}/copy')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/drive/v3/files').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                mediaUrl: (rootUrl + '/upload/drive/v3/files').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/drive/v3/files/{fileId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        emptyTrash: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/drive/v3/files/trash')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        export: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/drive/v3/files/{fileId}/export')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId', 'mimeType'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        generateIds: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/drive/v3/files/generateIds')
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
        get: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/drive/v3/files/{fileId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
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
                    url: (rootUrl + '/drive/v3/files').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
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
                    url: (rootUrl + '/drive/v3/files/{fileId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                mediaUrl: (rootUrl + '/upload/drive/v3/files/{fileId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
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
                    url: (rootUrl + '/drive/v3/files/{fileId}/watch')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.permissions = {
        /**
         * drive.permissions.create
         * @desc Creates a permission for a file or Team Drive.
         * @alias drive.permissions.create
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.emailMessage A plain text custom message to include in the notification email.
         * @param {string} params.fileId The ID of the file or Team Drive.
         * @param {boolean=} params.sendNotificationEmail Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {boolean=} params.transferOwnership Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
         * @param {boolean=} params.useDomainAdminAccess Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the item belongs.
         * @param {drive(v3).Permission} params.resource Request body data
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
                    url: (rootUrl + '/drive/v3/files/{fileId}/permissions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
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
                        '/drive/v3/files/{fileId}/permissions/{permissionId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['fileId', 'permissionId'],
                pathParams: ['fileId', 'permissionId'],
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
                        '/drive/v3/files/{fileId}/permissions/{permissionId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId', 'permissionId'],
                pathParams: ['fileId', 'permissionId'],
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
                    url: (rootUrl + '/drive/v3/files/{fileId}/permissions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
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
                        '/drive/v3/files/{fileId}/permissions/{permissionId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['fileId', 'permissionId'],
                pathParams: ['fileId', 'permissionId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.replies = {
        /**
         * drive.replies.create
         * @desc Creates a new reply to a comment.
         * @alias drive.replies.create
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {drive(v3).Reply} params.resource Request body data
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
                        '/drive/v3/files/{fileId}/comments/{commentId}/replies')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId'],
                pathParams: ['commentId', 'fileId'],
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
                        '/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId', 'replyId'],
                pathParams: ['commentId', 'fileId', 'replyId'],
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
                        '/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId', 'replyId'],
                pathParams: ['commentId', 'fileId', 'replyId'],
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
                        '/drive/v3/files/{fileId}/comments/{commentId}/replies')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId'],
                pathParams: ['commentId', 'fileId'],
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
                        '/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId', 'replyId'],
                pathParams: ['commentId', 'fileId', 'replyId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.revisions = {
        /**
         * drive.revisions.delete
         * @desc Permanently deletes a revision. This method is only applicable to
         * files with binary content in Drive.
         * @alias drive.revisions.delete
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.revisionId The ID of the revision.
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
                    url: (rootUrl + '/drive/v3/files/{fileId}/revisions/{revisionId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['fileId', 'revisionId'],
                pathParams: ['fileId', 'revisionId'],
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
                    url: (rootUrl + '/drive/v3/files/{fileId}/revisions/{revisionId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId', 'revisionId'],
                pathParams: ['fileId', 'revisionId'],
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
                    url: (rootUrl + '/drive/v3/files/{fileId}/revisions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
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
                    url: (rootUrl + '/drive/v3/files/{fileId}/revisions/{revisionId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['fileId', 'revisionId'],
                pathParams: ['fileId', 'revisionId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.teamdrives = {
        /**
         * drive.teamdrives.create
         * @desc Creates a new Team Drive.
         * @alias drive.teamdrives.create
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.requestId An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
         * @param {drive(v3).TeamDrive} params.resource Request body data
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
                    url: (rootUrl + '/drive/v3/teamdrives')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['requestId'],
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/drive/v3/teamdrives/{teamDriveId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['teamDriveId'],
                pathParams: ['teamDriveId'],
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
                    url: (rootUrl + '/drive/v3/teamdrives/{teamDriveId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['teamDriveId'],
                pathParams: ['teamDriveId'],
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
                    url: (rootUrl + '/drive/v3/teamdrives')
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
        update: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/drive/v3/teamdrives/{teamDriveId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['teamDriveId'],
                pathParams: ['teamDriveId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Drive;
//# sourceMappingURL=v3.js.map