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
 * Google Classroom API
 *
 * Manages classes, rosters, and invitations in Google Classroom.
 *
 * @example
 * const google = require('googleapis');
 * const classroom = google.classroom('v1');
 *
 * @namespace classroom
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Classroom
 */
function Classroom(options) {
    var self = this;
    self._options = options || {};
    self.courses =
        {
            /**
             * classroom.courses.create
             * @desc Creates a course.  The user specified in `ownerId` is the owner
             * of the created course and added as a teacher.  This method returns
             * the following error codes:  * `PERMISSION_DENIED` if the requesting
             * user is not permitted to create courses or for access errors. *
             * `NOT_FOUND` if the primary teacher is not a valid user. *
             * `FAILED_PRECONDITION` if the course owner's account is disabled or
             * for the following request errors:     *
             * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if an alias was
             * specified in the `id` and already exists.
             * @alias classroom.courses.create
             * @memberOf! classroom(v1)
             *
             * @param {object} params Parameters for request
             * @param {classroom(v1).Course} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/courses').replace(/([^:]\/)\/+/g, '$1'),
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
                var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/courses/{id}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['id'],
                    pathParams: ['id'],
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
                var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/courses/{id}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['id'],
                    pathParams: ['id'],
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
                var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/courses').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: [],
                    pathParams: [],
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
                var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/courses/{id}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['id'],
                    pathParams: ['id'],
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
                var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/courses/{id}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['id'],
                    pathParams: ['id'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            aliases: {
                /**
                 * classroom.courses.aliases.create
                 * @desc Creates an alias for a course.  This method returns the
                 * following error codes:  * `PERMISSION_DENIED` if the requesting
                 * user is not permitted to create the alias or for access errors. *
                 * `NOT_FOUND` if the course does not exist. * `ALREADY_EXISTS` if the
                 * alias already exists. * `FAILED_PRECONDITION` if the alias
                 * requested does not make sense for the   requesting user or course
                 * (for example, if a user not in a domain   attempts to access a
                 * domain-scoped alias).
                 * @alias classroom.courses.aliases.create
                 * @memberOf! classroom(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.courseId Identifier of the course to alias. This identifier can be either the Classroom-assigned identifier or an alias.
                 * @param {classroom(v1).CourseAlias} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/aliases')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['courseId'],
                        pathParams: ['courseId'],
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/aliases/{alias}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['courseId', 'alias'],
                        pathParams: ['alias', 'courseId'],
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/aliases')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['courseId'],
                        pathParams: ['courseId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            },
            announcements: {
                /**
                 * classroom.courses.announcements.create
                 * @desc Creates an announcement.  This method returns the following
                 * error codes:  * `PERMISSION_DENIED` if the requesting user is not
                 * permitted to access the requested course, create announcements in
                 * the requested course, share a Drive attachment, or for access
                 * errors. * `INVALID_ARGUMENT` if the request is malformed. *
                 * `NOT_FOUND` if the requested course does not exist. *
                 * `FAILED_PRECONDITION` for the following request error:     *
                 * AttachmentNotVisible
                 * @alias classroom.courses.announcements.create
                 * @memberOf! classroom(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
                 * @param {classroom(v1).Announcement} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/announcements')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['courseId'],
                        pathParams: ['courseId'],
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/announcements/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['courseId', 'id'],
                        pathParams: ['courseId', 'id'],
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/announcements/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['courseId', 'id'],
                        pathParams: ['courseId', 'id'],
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/announcements')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['courseId'],
                        pathParams: ['courseId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                modifyAssignees: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1/courses/{courseId}/announcements/{id}:modifyAssignees')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['courseId', 'id'],
                        pathParams: ['courseId', 'id'],
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/announcements/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['courseId', 'id'],
                        pathParams: ['courseId', 'id'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            },
            courseWork: {
                /**
                 * classroom.courses.courseWork.create
                 * @desc Creates course work.  The resulting course work (and
                 * corresponding student submissions) are associated with the
                 * Developer Console project of the [OAuth client
                 * ID](https://support.google.com/cloud/answer/6158849) used to make
                 * the request. Classroom API requests to modify course work and
                 * student submissions must be made with an OAuth client ID from the
                 * associated Developer Console project.  This method returns the
                 * following error codes:  * `PERMISSION_DENIED` if the requesting
                 * user is not permitted to access the requested course, create course
                 * work in the requested course, share a Drive attachment, or for
                 * access errors. * `INVALID_ARGUMENT` if the request is malformed. *
                 * `NOT_FOUND` if the requested course does not exist. *
                 * `FAILED_PRECONDITION` for the following request error:     *
                 * AttachmentNotVisible
                 * @alias classroom.courses.courseWork.create
                 * @memberOf! classroom(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
                 * @param {classroom(v1).CourseWork} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/courseWork')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['courseId'],
                        pathParams: ['courseId'],
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/courseWork/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['courseId', 'id'],
                        pathParams: ['courseId', 'id'],
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/courseWork/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['courseId', 'id'],
                        pathParams: ['courseId', 'id'],
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/courseWork')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['courseId'],
                        pathParams: ['courseId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                modifyAssignees: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v1/courses/{courseId}/courseWork/{id}:modifyAssignees')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['courseId', 'id'],
                        pathParams: ['courseId', 'id'],
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/courseWork/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['courseId', 'id'],
                        pathParams: ['courseId', 'id'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                studentSubmissions: {
                    /**
                     * classroom.courses.courseWork.studentSubmissions.get
                     * @desc Returns a student submission.  * `PERMISSION_DENIED` if
                     * the requesting user is not permitted to access the requested
                     * course, course work, or student submission or for access
                     * errors. * `INVALID_ARGUMENT` if the request is malformed. *
                     * `NOT_FOUND` if the requested course, course work, or student
                     * submission does not exist.
                     * @alias classroom.courses.courseWork.studentSubmissions.get
                     * @memberOf! classroom(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
                     * @param {string} params.courseWorkId Identifier of the course work.
                     * @param {string} params.id Identifier of the student submission.
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
                        var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['courseId', 'courseWorkId', 'id'],
                            pathParams: ['courseId', 'courseWorkId', 'id'],
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
                        var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['courseId', 'courseWorkId'],
                            pathParams: ['courseId', 'courseWorkId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    modifyAttachments: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:modifyAttachments')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['courseId', 'courseWorkId', 'id'],
                            pathParams: ['courseId', 'courseWorkId', 'id'],
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
                        var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PATCH'
                            }, options),
                            params: params,
                            requiredParams: ['courseId', 'courseWorkId', 'id'],
                            pathParams: ['courseId', 'courseWorkId', 'id'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    reclaim: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:reclaim')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['courseId', 'courseWorkId', 'id'],
                            pathParams: ['courseId', 'courseWorkId', 'id'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    return: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:return')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['courseId', 'courseWorkId', 'id'],
                            pathParams: ['courseId', 'courseWorkId', 'id'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    turnIn: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:turnIn')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['courseId', 'courseWorkId', 'id'],
                            pathParams: ['courseId', 'courseWorkId', 'id'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                }
            },
            students: {
                /**
                 * classroom.courses.students.create
                 * @desc Adds a user as a student of a course.  This method returns
                 * the following error codes:  * `PERMISSION_DENIED` if the requesting
                 * user is not permitted to create students in this course or for
                 * access errors. * `NOT_FOUND` if the requested course ID does not
                 * exist. * `FAILED_PRECONDITION` if the requested user's account is
                 * disabled, for the following request errors:     *
                 * CourseMemberLimitReached     * CourseNotModifiable     *
                 * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if the user is
                 * already a student or teacher in the course.
                 * @alias classroom.courses.students.create
                 * @memberOf! classroom(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.courseId Identifier of the course to create the student in. This identifier can be either the Classroom-assigned identifier or an alias.
                 * @param {string=} params.enrollmentCode Enrollment code of the course to create the student in. This code is required if userId corresponds to the requesting user; it may be omitted if the requesting user has administrative permissions to create students for any user.
                 * @param {classroom(v1).Student} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/students')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['courseId'],
                        pathParams: ['courseId'],
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/students/{userId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['courseId', 'userId'],
                        pathParams: ['courseId', 'userId'],
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/students/{userId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['courseId', 'userId'],
                        pathParams: ['courseId', 'userId'],
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/students')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['courseId'],
                        pathParams: ['courseId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            },
            teachers: {
                /**
                 * classroom.courses.teachers.create
                 * @desc Creates a teacher of a course.  This method returns the
                 * following error codes:  * `PERMISSION_DENIED` if the requesting
                 * user is not  permitted to create teachers in this course or for
                 * access errors. * `NOT_FOUND` if the requested course ID does not
                 * exist. * `FAILED_PRECONDITION` if the requested user's account is
                 * disabled, for the following request errors:     *
                 * CourseMemberLimitReached     * CourseNotModifiable     *
                 * CourseTeacherLimitReached     * UserGroupsMembershipLimitReached *
                 * `ALREADY_EXISTS` if the user is already a teacher or student in the
                 * course.
                 * @alias classroom.courses.teachers.create
                 * @memberOf! classroom(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
                 * @param {classroom(v1).Teacher} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/teachers')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['courseId'],
                        pathParams: ['courseId'],
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/teachers/{userId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['courseId', 'userId'],
                        pathParams: ['courseId', 'userId'],
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/teachers/{userId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['courseId', 'userId'],
                        pathParams: ['courseId', 'userId'],
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/teachers')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['courseId'],
                        pathParams: ['courseId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            },
            topics: {
                /**
                 * classroom.courses.topics.get
                 * @desc Returns a topic.  This method returns the following error
                 * codes:  * `PERMISSION_DENIED` if the requesting user is not
                 * permitted to access the requested course or topic, or for access
                 * errors. * `INVALID_ARGUMENT` if the request is malformed. *
                 * `NOT_FOUND` if the requested course or topic does not exist.
                 * @alias classroom.courses.topics.get
                 * @memberOf! classroom(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.courseId Identifier of the course.
                 * @param {string} params.id Identifier of the topic.
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/topics/{id}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['courseId', 'id'],
                        pathParams: ['courseId', 'id'],
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
                    var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/courses/{courseId}/topics')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['courseId'],
                        pathParams: ['courseId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            }
        };
    self.invitations = {
        /**
         * classroom.invitations.accept
         * @desc Accepts an invitation, removing it and adding the invited user to
         * the teachers or students (as appropriate) of the specified course. Only
         * the invited user may accept an invitation.  This method returns the
         * following error codes:  * `PERMISSION_DENIED` if the requesting user is
         * not permitted to accept the requested invitation or for access errors. *
         * `FAILED_PRECONDITION` for the following request errors:     *
         * CourseMemberLimitReached     * CourseNotModifiable     *
         * CourseTeacherLimitReached     * UserGroupsMembershipLimitReached *
         * `NOT_FOUND` if no invitation exists with the requested ID.
         * @alias classroom.invitations.accept
         * @memberOf! classroom(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Identifier of the invitation to accept.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        accept: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/invitations/{id}:accept')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['id'],
                pathParams: ['id'],
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
            var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/invitations').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/invitations/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['id'],
                pathParams: ['id'],
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
            var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/invitations/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['id'],
                pathParams: ['id'],
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
            var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/invitations').replace(/([^:]\/)\/+/g, '$1'),
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
    self.registrations = {
        /**
         * classroom.registrations.create
         * @desc Creates a `Registration`, causing Classroom to start sending
         * notifications from the provided `feed` to the provided `destination`.
         * Returns the created `Registration`. Currently, this will be the same as
         * the argument, but with server-assigned fields such as `expiry_time` and
         * `id` filled in.  Note that any value specified for the `expiry_time` or
         * `id` fields will be ignored.  While Classroom may validate the
         * `destination` and return errors on a best effort basis, it is the
         * caller's responsibility to ensure that it exists and that Classroom has
         * permission to publish to it.  This method may return the following error
         * codes:  * `PERMISSION_DENIED` if:     * the authenticated user does not
         * have permission to receive       notifications from the requested field;
         * or     * the credential provided does not include the appropriate scope
         * for the       requested feed.     * another access error is encountered.
         * * `INVALID_ARGUMENT` if:     * no `destination` is specified, or the
         * specified `destination` is not       valid; or     * no `feed` is
         * specified, or the specified `feed` is not valid. * `NOT_FOUND` if:     *
         * the specified `feed` cannot be located, or the requesting user does not
         * have permission to determine whether or not it exists; or     * the
         * specified `destination` cannot be located, or Classroom has not
         * been granted permission to publish to it.
         * @alias classroom.registrations.create
         * @memberOf! classroom(v1)
         *
         * @param {object} params Parameters for request
         * @param {classroom(v1).Registration} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/registrations').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/registrations/{registrationId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['registrationId'],
                pathParams: ['registrationId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.userProfiles = {
        /**
         * classroom.userProfiles.get
         * @desc Returns a user profile.  This method returns the following error
         * codes:  * `PERMISSION_DENIED` if the requesting user is not permitted to
         * access this user profile, if no profile exists with the requested ID, or
         * for access errors.
         * @alias classroom.userProfiles.get
         * @memberOf! classroom(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.userId Identifier of the profile to return. The identifier can be one of the following:  * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
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
            var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/userProfiles/{userId}')
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
        guardianInvitations: {
            /**
             * classroom.userProfiles.guardianInvitations.create
             * @desc Creates a guardian invitation, and sends an email to the guardian
             * asking them to confirm that they are the student's guardian.  Once the
             * guardian accepts the invitation, their `state` will change to
             * `COMPLETED` and they will start receiving guardian notifications. A
             * `Guardian` resource will also be created to represent the active
             * guardian.  The request object must have the `student_id` and
             * `invited_email_address` fields set. Failing to set these fields, or
             * setting any other fields in the request, will result in an error.  This
             * method returns the following error codes:  * `PERMISSION_DENIED` if the
             * current user does not have permission to   manage guardians, if the
             * guardian in question has already rejected   too many requests for that
             * student, if guardians are not enabled for the   domain in question, or
             * for other access errors. * `RESOURCE_EXHAUSTED` if the student or
             * guardian has exceeded the guardian   link limit. * `INVALID_ARGUMENT`
             * if the guardian email address is not valid (for   example, if it is too
             * long), or if the format of the student ID provided   cannot be
             * recognized (it is not an email address, nor a `user_id` from   this
             * API). This error will also be returned if read-only fields are set,
             * or if the `state` field is set to to a value other than `PENDING`. *
             * `NOT_FOUND` if the student ID provided is a valid student ID, but
             * Classroom has no record of that student. * `ALREADY_EXISTS` if there is
             * already a pending guardian invitation for   the student and
             * `invited_email_address` provided, or if the provided
             * `invited_email_address` matches the Google account of an existing
             * `Guardian` for this user.
             * @alias classroom.userProfiles.guardianInvitations.create
             * @memberOf! classroom(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.studentId ID of the student (in standard format)
             * @param {classroom(v1).GuardianInvitation} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v1/userProfiles/{studentId}/guardianInvitations')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['studentId'],
                    pathParams: ['studentId'],
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
                var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v1/userProfiles/{studentId}/guardianInvitations/{invitationId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['studentId', 'invitationId'],
                    pathParams: ['invitationId', 'studentId'],
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
                var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v1/userProfiles/{studentId}/guardianInvitations')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['studentId'],
                    pathParams: ['studentId'],
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
                var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v1/userProfiles/{studentId}/guardianInvitations/{invitationId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['studentId', 'invitationId'],
                    pathParams: ['invitationId', 'studentId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        guardians: {
            /**
             * classroom.userProfiles.guardians.delete
             * @desc Deletes a guardian.  The guardian will no longer receive guardian
             * notifications and the guardian will no longer be accessible via the
             * API.  This method returns the following error codes:  *
             * `PERMISSION_DENIED` if no user that matches the provided `student_id`
             * is visible to the requesting user, if the requesting user is not
             * permitted to manage guardians for the student identified by the
             * `student_id`, if guardians are not enabled for the domain in question,
             * or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is
             * specified, but its format cannot   be recognized (it is not an email
             * address, nor a `student_id` from the   API). * `NOT_FOUND` if the
             * requesting user is permitted to modify guardians for   the requested
             * `student_id`, but no `Guardian` record exists for that   student with
             * the provided `guardian_id`.
             * @alias classroom.userProfiles.guardians.delete
             * @memberOf! classroom(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.guardianId The `id` field from a `Guardian`.
             * @param {string} params.studentId The student whose guardian is to be deleted. One of the following:  * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
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
                var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v1/userProfiles/{studentId}/guardians/{guardianId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['studentId', 'guardianId'],
                    pathParams: ['guardianId', 'studentId'],
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
                var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v1/userProfiles/{studentId}/guardians/{guardianId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['studentId', 'guardianId'],
                    pathParams: ['guardianId', 'studentId'],
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
                var rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/userProfiles/{studentId}/guardians')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['studentId'],
                    pathParams: ['studentId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
}
module.exports = Classroom;
//# sourceMappingURL=v1.js.map