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
 * Tag Manager API
 *
 * Accesses Tag Manager accounts and containers.
 *
 * @example
 * const google = require('googleapis');
 * const tagmanager = google.tagmanager('v1');
 *
 * @namespace tagmanager
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Tagmanager
 */
function Tagmanager(options) {
    var self = this;
    self._options = options || {};
    self.accounts =
        {
            /**
             * tagmanager.accounts.get
             * @desc Gets a GTM Account.
             * @alias tagmanager.accounts.get
             * @memberOf! tagmanager(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId The GTM Account ID.
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
                        url: (rootUrl + '/tagmanager/v1/accounts/{accountId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId'],
                    pathParams: ['accountId'],
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
                        url: (rootUrl + '/tagmanager/v1/accounts')
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
                        url: (rootUrl + '/tagmanager/v1/accounts/{accountId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['accountId'],
                    pathParams: ['accountId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            containers: {
                /**
                 * tagmanager.accounts.containers.create
                 * @desc Creates a Container.
                 * @alias tagmanager.accounts.containers.create
                 * @memberOf! tagmanager(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.accountId The GTM Account ID.
                 * @param {tagmanager(v1).Container} params.resource Request body data
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
                                '/tagmanager/v1/accounts/{accountId}/containers')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['accountId'],
                        pathParams: ['accountId'],
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
                                '/tagmanager/v1/accounts/{accountId}/containers/{containerId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'containerId'],
                        pathParams: ['accountId', 'containerId'],
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
                                '/tagmanager/v1/accounts/{accountId}/containers/{containerId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'containerId'],
                        pathParams: ['accountId', 'containerId'],
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
                                '/tagmanager/v1/accounts/{accountId}/containers')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId'],
                        pathParams: ['accountId'],
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
                                '/tagmanager/v1/accounts/{accountId}/containers/{containerId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'containerId'],
                        pathParams: ['accountId', 'containerId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                environments: {
                    /**
                     * tagmanager.accounts.containers.environments.create
                     * @desc Creates a GTM Environment.
                     * @alias tagmanager.accounts.containers.environments.create
                     * @memberOf! tagmanager(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.accountId The GTM Account ID.
                     * @param {string} params.containerId The GTM Container ID.
                     * @param {tagmanager(v1).Environment} params.resource Request body data
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId'],
                            pathParams: ['accountId', 'containerId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'environmentId'],
                            pathParams: ['accountId', 'containerId', 'environmentId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'environmentId'],
                            pathParams: ['accountId', 'containerId', 'environmentId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId'],
                            pathParams: ['accountId', 'containerId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PATCH'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'environmentId'],
                            pathParams: ['accountId', 'containerId', 'environmentId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'environmentId'],
                            pathParams: ['accountId', 'containerId', 'environmentId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                folders: {
                    /**
                     * tagmanager.accounts.containers.folders.create
                     * @desc Creates a GTM Folder.
                     * @alias tagmanager.accounts.containers.folders.create
                     * @memberOf! tagmanager(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.accountId The GTM Account ID.
                     * @param {string} params.containerId The GTM Container ID.
                     * @param {tagmanager(v1).Folder} params.resource Request body data
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId'],
                            pathParams: ['accountId', 'containerId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'folderId'],
                            pathParams: ['accountId', 'containerId', 'folderId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'folderId'],
                            pathParams: ['accountId', 'containerId', 'folderId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId'],
                            pathParams: ['accountId', 'containerId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'folderId'],
                            pathParams: ['accountId', 'containerId', 'folderId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    entities: {
                        /**
                         * tagmanager.accounts.containers.folders.entities.list
                         * @desc List all entities in a GTM Folder.
                         * @alias tagmanager.accounts.containers.folders.entities.list
                         * @memberOf! tagmanager(v1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.accountId The GTM Account ID.
                         * @param {string} params.containerId The GTM Container ID.
                         * @param {string} params.folderId The GTM Folder ID.
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
                                    url: (rootUrl +
                                        '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}/entities')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['accountId', 'containerId', 'folderId'],
                                pathParams: ['accountId', 'containerId', 'folderId'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    }
                },
                move_folders: {
                    /**
                     * tagmanager.accounts.containers.move_folders.update
                     * @desc Moves entities to a GTM Folder.
                     * @alias tagmanager.accounts.containers.move_folders.update
                     * @memberOf! tagmanager(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.accountId The GTM Account ID.
                     * @param {string} params.containerId The GTM Container ID.
                     * @param {string} params.folderId The GTM Folder ID.
                     * @param {string=} params.tagId The tags to be moved to the folder.
                     * @param {string=} params.triggerId The triggers to be moved to the folder.
                     * @param {string=} params.variableId The variables to be moved to the folder.
                     * @param {tagmanager(v1).Folder} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/move_folders/{folderId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'folderId'],
                            pathParams: ['accountId', 'containerId', 'folderId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                reauthorize_environments: {
                    /**
                     * tagmanager.accounts.containers.reauthorize_environments.update
                     * @desc Re-generates the authorization code for a GTM
                     * Environment.
                     * @alias
                     * tagmanager.accounts.containers.reauthorize_environments.update
                     * @memberOf! tagmanager(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.accountId The GTM Account ID.
                     * @param {string} params.containerId The GTM Container ID.
                     * @param {string} params.environmentId The GTM Environment ID.
                     * @param {tagmanager(v1).Environment} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/reauthorize_environments/{environmentId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'environmentId'],
                            pathParams: ['accountId', 'containerId', 'environmentId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                tags: {
                    /**
                     * tagmanager.accounts.containers.tags.create
                     * @desc Creates a GTM Tag.
                     * @alias tagmanager.accounts.containers.tags.create
                     * @memberOf! tagmanager(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.accountId The GTM Account ID.
                     * @param {string} params.containerId The GTM Container ID.
                     * @param {tagmanager(v1).Tag} params.resource Request body data
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId'],
                            pathParams: ['accountId', 'containerId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'tagId'],
                            pathParams: ['accountId', 'containerId', 'tagId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'tagId'],
                            pathParams: ['accountId', 'containerId', 'tagId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId'],
                            pathParams: ['accountId', 'containerId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'tagId'],
                            pathParams: ['accountId', 'containerId', 'tagId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                triggers: {
                    /**
                     * tagmanager.accounts.containers.triggers.create
                     * @desc Creates a GTM Trigger.
                     * @alias tagmanager.accounts.containers.triggers.create
                     * @memberOf! tagmanager(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.accountId The GTM Account ID.
                     * @param {string} params.containerId The GTM Container ID.
                     * @param {tagmanager(v1).Trigger} params.resource Request body data
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId'],
                            pathParams: ['accountId', 'containerId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'triggerId'],
                            pathParams: ['accountId', 'containerId', 'triggerId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'triggerId'],
                            pathParams: ['accountId', 'containerId', 'triggerId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId'],
                            pathParams: ['accountId', 'containerId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'triggerId'],
                            pathParams: ['accountId', 'containerId', 'triggerId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                variables: {
                    /**
                     * tagmanager.accounts.containers.variables.create
                     * @desc Creates a GTM Variable.
                     * @alias tagmanager.accounts.containers.variables.create
                     * @memberOf! tagmanager(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.accountId The GTM Account ID.
                     * @param {string} params.containerId The GTM Container ID.
                     * @param {tagmanager(v1).Variable} params.resource Request body data
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId'],
                            pathParams: ['accountId', 'containerId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'variableId'],
                            pathParams: ['accountId', 'containerId', 'variableId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'variableId'],
                            pathParams: ['accountId', 'containerId', 'variableId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId'],
                            pathParams: ['accountId', 'containerId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'variableId'],
                            pathParams: ['accountId', 'containerId', 'variableId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                versions: {
                    /**
                     * tagmanager.accounts.containers.versions.create
                     * @desc Creates a Container Version.
                     * @alias tagmanager.accounts.containers.versions.create
                     * @memberOf! tagmanager(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.accountId The GTM Account ID.
                     * @param {string} params.containerId The GTM Container ID.
                     * @param {tagmanager(v1).CreateContainerVersionRequestVersionOptions} params.resource Request body data
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId'],
                            pathParams: ['accountId', 'containerId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'containerVersionId'],
                            pathParams: ['accountId', 'containerId', 'containerVersionId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'containerVersionId'],
                            pathParams: ['accountId', 'containerId', 'containerVersionId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId'],
                            pathParams: ['accountId', 'containerId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/publish')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'containerVersionId'],
                            pathParams: ['accountId', 'containerId', 'containerVersionId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    restore: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/restore')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'containerVersionId'],
                            pathParams: ['accountId', 'containerId', 'containerVersionId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    undelete: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/undelete')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'containerVersionId'],
                            pathParams: ['accountId', 'containerId', 'containerVersionId'],
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
                                    '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'containerId', 'containerVersionId'],
                            pathParams: ['accountId', 'containerId', 'containerVersionId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                }
            },
            permissions: {
                /**
                 * tagmanager.accounts.permissions.create
                 * @desc Creates a user's Account & Container Permissions.
                 * @alias tagmanager.accounts.permissions.create
                 * @memberOf! tagmanager(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.accountId The GTM Account ID.
                 * @param {tagmanager(v1).UserAccess} params.resource Request body data
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
                                '/tagmanager/v1/accounts/{accountId}/permissions')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['accountId'],
                        pathParams: ['accountId'],
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
                                '/tagmanager/v1/accounts/{accountId}/permissions/{permissionId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'permissionId'],
                        pathParams: ['accountId', 'permissionId'],
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
                                '/tagmanager/v1/accounts/{accountId}/permissions/{permissionId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'permissionId'],
                        pathParams: ['accountId', 'permissionId'],
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
                                '/tagmanager/v1/accounts/{accountId}/permissions')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId'],
                        pathParams: ['accountId'],
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
                                '/tagmanager/v1/accounts/{accountId}/permissions/{permissionId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'permissionId'],
                        pathParams: ['accountId', 'permissionId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            }
        };
}
module.exports = Tagmanager;
//# sourceMappingURL=v1.js.map