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
 * const tagmanager = google.tagmanager('v2');
 *
 * @namespace tagmanager
 * @type {Function}
 * @version v2
 * @variation v2
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
             * @memberOf! tagmanager(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.path GTM Accounts's API relative path. Example: accounts/{account_id}
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
                        url: (rootUrl + '/tagmanager/v2/{path}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['path'],
                    pathParams: ['path'],
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
                        url: (rootUrl + '/tagmanager/v2/accounts')
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
                        url: (rootUrl + '/tagmanager/v2/{path}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['path'],
                    pathParams: ['path'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            containers: {
                /**
                 * tagmanager.accounts.containers.create
                 * @desc Creates a Container.
                 * @alias tagmanager.accounts.containers.create
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent GTM Account's API relative path. Example: accounts/{account_id}.
                 * @param {tagmanager(v2).Container} params.resource Request body data
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
                            url: (rootUrl + '/tagmanager/v2/{parent}/containers')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
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
                            url: (rootUrl + '/tagmanager/v2/{path}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
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
                            url: (rootUrl + '/tagmanager/v2/{path}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
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
                            url: (rootUrl + '/tagmanager/v2/{parent}/containers')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
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
                            url: (rootUrl + '/tagmanager/v2/{path}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                environments: {
                    /**
                     * tagmanager.accounts.containers.environments.create
                     * @desc Creates a GTM Environment.
                     * @alias tagmanager.accounts.containers.environments.create
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
                     * @param {tagmanager(v2).Environment} params.resource Request body data
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
                                url: (rootUrl + '/tagmanager/v2/{parent}/environments')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
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
                                url: (rootUrl + '/tagmanager/v2/{path}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
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
                                url: (rootUrl + '/tagmanager/v2/{path}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
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
                                url: (rootUrl + '/tagmanager/v2/{parent}/environments')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
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
                                url: (rootUrl + '/tagmanager/v2/{path}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PATCH'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    reauthorize: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}:reauthorize')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
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
                                url: (rootUrl + '/tagmanager/v2/{path}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                versions: {
                    /**
                     * tagmanager.accounts.containers.versions.delete
                     * @desc Deletes a Container Version.
                     * @alias tagmanager.accounts.containers.versions.delete
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
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
                                url: (rootUrl + '/tagmanager/v2/{path}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
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
                                url: (rootUrl + '/tagmanager/v2/{path}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    live: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{parent}/versions:live')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
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
                                url: (rootUrl + '/tagmanager/v2/{path}:publish')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    set_latest: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}:set_latest')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
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
                                url: (rootUrl + '/tagmanager/v2/{path}:undelete')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
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
                                url: (rootUrl + '/tagmanager/v2/{path}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                version_headers: {
                    /**
                     * tagmanager.accounts.containers.version_headers.latest
                     * @desc Gets the latest container version header
                     * @alias tagmanager.accounts.containers.version_headers.latest
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    latest: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/tagmanager/v2/{parent}/version_headers:latest')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
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
                                url: (rootUrl + '/tagmanager/v2/{parent}/version_headers')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                workspaces: {
                    /**
                     * tagmanager.accounts.containers.workspaces.create
                     * @desc Creates a Workspace.
                     * @alias tagmanager.accounts.containers.workspaces.create
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
                     * @param {tagmanager(v2).Workspace} params.resource Request body data
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
                                url: (rootUrl + '/tagmanager/v2/{parent}/workspaces')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    create_version: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}:create_version')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
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
                                url: (rootUrl + '/tagmanager/v2/{path}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
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
                                url: (rootUrl + '/tagmanager/v2/{path}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    getProposal: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    getStatus: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}/status')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
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
                                url: (rootUrl + '/tagmanager/v2/{parent}/workspaces')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    quick_preview: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}:quick_preview')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    resolve_conflict: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/tagmanager/v2/{path}:resolve_conflict')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    sync: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}:sync')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
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
                                url: (rootUrl + '/tagmanager/v2/{path}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    updateProposal: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    built_in_variables: {
                        /**
                         * tagmanager.accounts.containers.workspaces.built_in_variables.create
                         * @desc Creates one or more GTM Built-In Variables.
                         * @alias
                         * tagmanager.accounts.containers.workspaces.built_in_variables.create
                         * @memberOf! tagmanager(v2)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
                         * @param {string=} params.type The types of built-in variables to enable.
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
                                        '/tagmanager/v2/{parent}/built_in_variables')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['parent'],
                                pathParams: ['parent'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'DELETE'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
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
                                        '/tagmanager/v2/{parent}/built_in_variables')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['parent'],
                                pathParams: ['parent'],
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
                                    url: (rootUrl +
                                        '/tagmanager/v2/{path}/built_in_variables:revert')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    },
                    folders: {
                        /**
                         * tagmanager.accounts.containers.workspaces.folders.create
                         * @desc Creates a GTM Folder.
                         * @alias
                         * tagmanager.accounts.containers.workspaces.folders.create
                         * @memberOf! tagmanager(v2)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
                         * @param {tagmanager(v2).Folder} params.resource Request body data
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
                                    url: (rootUrl + '/tagmanager/v2/{parent}/folders')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['parent'],
                                pathParams: ['parent'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'DELETE'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        },
                        entities: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/tagmanager/v2/{path}:entities')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
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
                                    url: (rootUrl + '/tagmanager/v2/{parent}/folders')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['parent'],
                                pathParams: ['parent'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        },
                        move_entities_to_folder: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/tagmanager/v2/{path}:move_entities_to_folder')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}:revert')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'PUT'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    },
                    proposal: {
                        /**
                         * tagmanager.accounts.containers.workspaces.proposal.create
                         * @desc Creates a GTM Workspace Proposal.
                         * @alias
                         * tagmanager.accounts.containers.workspaces.proposal.create
                         * @memberOf! tagmanager(v2)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{aid}/containers/{cid}/workspace/{wid}
                         * @param {tagmanager(v2).CreateWorkspaceProposalRequest} params.resource Request body data
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
                                    url: (rootUrl + '/tagmanager/v2/{parent}/proposal')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['parent'],
                                pathParams: ['parent'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'DELETE'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    },
                    tags: {
                        /**
                         * tagmanager.accounts.containers.workspaces.tags.create
                         * @desc Creates a GTM Tag.
                         * @alias
                         * tagmanager.accounts.containers.workspaces.tags.create
                         * @memberOf! tagmanager(v2)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
                         * @param {tagmanager(v2).Tag} params.resource Request body data
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
                                    url: (rootUrl + '/tagmanager/v2/{parent}/tags')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['parent'],
                                pathParams: ['parent'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'DELETE'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
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
                                    url: (rootUrl + '/tagmanager/v2/{parent}/tags')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['parent'],
                                pathParams: ['parent'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}:revert')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'PUT'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    },
                    triggers: {
                        /**
                         * tagmanager.accounts.containers.workspaces.triggers.create
                         * @desc Creates a GTM Trigger.
                         * @alias
                         * tagmanager.accounts.containers.workspaces.triggers.create
                         * @memberOf! tagmanager(v2)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.parent GTM Workspaces's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
                         * @param {tagmanager(v2).Trigger} params.resource Request body data
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
                                    url: (rootUrl + '/tagmanager/v2/{parent}/triggers')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['parent'],
                                pathParams: ['parent'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'DELETE'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
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
                                    url: (rootUrl + '/tagmanager/v2/{parent}/triggers')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['parent'],
                                pathParams: ['parent'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}:revert')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'PUT'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    },
                    variables: {
                        /**
                         * tagmanager.accounts.containers.workspaces.variables.create
                         * @desc Creates a GTM Variable.
                         * @alias
                         * tagmanager.accounts.containers.workspaces.variables.create
                         * @memberOf! tagmanager(v2)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
                         * @param {tagmanager(v2).Variable} params.resource Request body data
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
                                    url: (rootUrl + '/tagmanager/v2/{parent}/variables')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['parent'],
                                pathParams: ['parent'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'DELETE'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
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
                                    url: (rootUrl + '/tagmanager/v2/{parent}/variables')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['parent'],
                                pathParams: ['parent'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}:revert')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
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
                                    url: (rootUrl + '/tagmanager/v2/{path}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'PUT'
                                }, options),
                                params: params,
                                requiredParams: ['path'],
                                pathParams: ['path'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    }
                }
            },
            user_permissions: {
                /**
                 * tagmanager.accounts.user_permissions.create
                 * @desc Creates a user's Account & Container access.
                 * @alias tagmanager.accounts.user_permissions.create
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent GTM Account's API relative path. Example: accounts/{account_id}
                 * @param {tagmanager(v2).UserPermission} params.resource Request body data
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
                            url: (rootUrl + '/tagmanager/v2/{parent}/user_permissions')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
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
                            url: (rootUrl + '/tagmanager/v2/{path}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
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
                            url: (rootUrl + '/tagmanager/v2/{path}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
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
                            url: (rootUrl + '/tagmanager/v2/{parent}/user_permissions')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
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
                            url: (rootUrl + '/tagmanager/v2/{path}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            }
        };
}
module.exports = Tagmanager;
//# sourceMappingURL=v2.js.map