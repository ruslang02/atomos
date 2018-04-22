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
 * Dialogflow API
 *
 * An end-to-end development suite for conversational interfaces (e.g.,
 * chatbots, voice-powered apps and devices).
 *
 * @example
 * const google = require('googleapis');
 * const dialogflow = google.dialogflow('v2beta1');
 *
 * @namespace dialogflow
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Dialogflow
 */
function Dialogflow(options) {
    var self = this;
    self._options = options || {};
    self.projects =
        {
            /**
             * dialogflow.projects.getAgent
             * @desc Retrieves the specified agent.
             * @alias dialogflow.projects.getAgent
             * @memberOf! dialogflow(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent Required. The project that the agent to fetch is associated with. Format: `projects/<Project ID>`.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            getAgent: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{parent}/agent')
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
            agent: {
                /**
                 * dialogflow.projects.agent.export
                 * @desc Exports the specified agent to a ZIP file.   Operation
                 * <response: ExportAgentResponse,            metadata:
                 * google.protobuf.Struct>
                 * @alias dialogflow.projects.agent.export
                 * @memberOf! dialogflow(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent Required. The project that the agent to export is associated with. Format: `projects/<Project ID>`.
                 * @param {dialogflow(v2beta1).GoogleCloudDialogflowV2beta1ExportAgentRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                export: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{parent}/agent:export')
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
                import: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{parent}/agent:import')
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
                restore: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{parent}/agent:restore')
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
                search: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{parent}/agent:search')
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
                train: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{parent}/agent:train')
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
                entityTypes: {
                    /**
                     * dialogflow.projects.agent.entityTypes.batchDelete
                     * @desc Deletes entity types in the specified agent.
                     * Operation <response: google.protobuf.Empty,
                     * metadata: google.protobuf.Struct>
                     * @alias dialogflow.projects.agent.entityTypes.batchDelete
                     * @memberOf! dialogflow(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent Required. The name of the agent to delete all entities types for. Format: `projects/<Project ID>/agent`.
                     * @param {dialogflow(v2beta1).GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest} params.resource Request body data
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
                        var rootUrl = options.rootUrl ||
                            'https://dialogflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/{parent}/entityTypes:batchDelete')
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
                    batchUpdate: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl ||
                            'https://dialogflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/{parent}/entityTypes:batchUpdate')
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
                    create: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl ||
                            'https://dialogflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{parent}/entityTypes')
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
                        var rootUrl = options.rootUrl ||
                            'https://dialogflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{name}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['name'],
                            pathParams: ['name'],
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
                        var rootUrl = options.rootUrl ||
                            'https://dialogflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{name}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['name'],
                            pathParams: ['name'],
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
                        var rootUrl = options.rootUrl ||
                            'https://dialogflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{parent}/entityTypes')
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
                        var rootUrl = options.rootUrl ||
                            'https://dialogflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{name}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PATCH'
                            }, options),
                            params: params,
                            requiredParams: ['name'],
                            pathParams: ['name'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    entities: {
                        /**
                         * dialogflow.projects.agent.entityTypes.entities.batchCreate
                         * @desc Creates multiple new entities in the
                         * specified entity type (extends the existing
                         * collection of entries).  Operation <response:
                         * google.protobuf.Empty>
                         * @alias
                         * dialogflow.projects.agent.entityTypes.entities.batchCreate
                         * @memberOf! dialogflow(v2beta1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.parent Required. The name of the entity type to create entities in. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
                         * @param {dialogflow(v2beta1).GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest} params.resource Request body data
                         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                         * @param {callback} callback The callback that handles the response.
                         * @return {object} Request object
                         */
                        batchCreate: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl ||
                                'https://dialogflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/v2beta1/{parent}/entities:batchCreate')
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
                        batchDelete: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl ||
                                'https://dialogflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/v2beta1/{parent}/entities:batchDelete')
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
                        batchUpdate: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl ||
                                'https://dialogflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/v2beta1/{parent}/entities:batchUpdate')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['parent'],
                                pathParams: ['parent'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    }
                },
                intents: {
                    /**
                     * dialogflow.projects.agent.intents.batchDelete
                     * @desc Deletes intents in the specified agent.  Operation
                     * <response: google.protobuf.Empty>
                     * @alias dialogflow.projects.agent.intents.batchDelete
                     * @memberOf! dialogflow(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent Required. The name of the agent to delete all entities types for. Format: `projects/<Project ID>/agent`.
                     * @param {dialogflow(v2beta1).GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequest} params.resource Request body data
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
                        var rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/{parent}/intents:batchDelete')
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
                    batchUpdate: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/{parent}/intents:batchUpdate')
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
                    create: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{parent}/intents')
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
                        var rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{name}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['name'],
                            pathParams: ['name'],
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
                        var rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{name}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['name'],
                            pathParams: ['name'],
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
                        var rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{parent}/intents')
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
                        var rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{name}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PATCH'
                            }, options),
                            params: params,
                            requiredParams: ['name'],
                            pathParams: ['name'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                sessions: {
                    /**
                     * dialogflow.projects.agent.sessions.deleteContexts
                     * @desc Deletes all active contexts in the specified
                     * session.
                     * @alias dialogflow.projects.agent.sessions.deleteContexts
                     * @memberOf! dialogflow(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent Required. The name of the session to delete all contexts from. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    deleteContexts: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl ||
                            'https://dialogflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{parent}/contexts')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    detectIntent: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl ||
                            'https://dialogflow.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{session}:detectIntent')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['session'],
                            pathParams: ['session'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    contexts: {
                        /**
                         * dialogflow.projects.agent.sessions.contexts.create
                         * @desc Creates a context.
                         * @alias
                         * dialogflow.projects.agent.sessions.contexts.create
                         * @memberOf! dialogflow(v2beta1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.parent Required. The session to create a context for. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
                         * @param {dialogflow(v2beta1).GoogleCloudDialogflowV2beta1Context} params.resource Request body data
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
                            var rootUrl = options.rootUrl ||
                                'https://dialogflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v2beta1/{parent}/contexts')
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
                            var rootUrl = options.rootUrl ||
                                'https://dialogflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v2beta1/{name}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'DELETE'
                                }, options),
                                params: params,
                                requiredParams: ['name'],
                                pathParams: ['name'],
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
                            var rootUrl = options.rootUrl ||
                                'https://dialogflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v2beta1/{name}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['name'],
                                pathParams: ['name'],
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
                            var rootUrl = options.rootUrl ||
                                'https://dialogflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v2beta1/{parent}/contexts')
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
                            var rootUrl = options.rootUrl ||
                                'https://dialogflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v2beta1/{name}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'PATCH'
                                }, options),
                                params: params,
                                requiredParams: ['name'],
                                pathParams: ['name'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    },
                    entityTypes: {
                        /**
                         * dialogflow.projects.agent.sessions.entityTypes.create
                         * @desc Creates a session entity type.
                         * @alias
                         * dialogflow.projects.agent.sessions.entityTypes.create
                         * @memberOf! dialogflow(v2beta1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.parent Required. The session to create a session entity type for. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
                         * @param {dialogflow(v2beta1).GoogleCloudDialogflowV2beta1SessionEntityType} params.resource Request body data
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
                            var rootUrl = options.rootUrl ||
                                'https://dialogflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v2beta1/{parent}/entityTypes')
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
                            var rootUrl = options.rootUrl ||
                                'https://dialogflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v2beta1/{name}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'DELETE'
                                }, options),
                                params: params,
                                requiredParams: ['name'],
                                pathParams: ['name'],
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
                            var rootUrl = options.rootUrl ||
                                'https://dialogflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v2beta1/{name}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['name'],
                                pathParams: ['name'],
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
                            var rootUrl = options.rootUrl ||
                                'https://dialogflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v2beta1/{parent}/entityTypes')
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
                            var rootUrl = options.rootUrl ||
                                'https://dialogflow.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v2beta1/{name}')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'PATCH'
                                }, options),
                                params: params,
                                requiredParams: ['name'],
                                pathParams: ['name'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    }
                }
            },
            operations: {
                /**
                 * dialogflow.projects.operations.get
                 * @desc Gets the latest state of a long-running operation.  Clients
                 * can use this method to poll the operation result at intervals as
                 * recommended by the API service.
                 * @alias dialogflow.projects.operations.get
                 * @memberOf! dialogflow(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the operation resource.
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
                    var rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{name}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            }
        };
}
module.exports = Dialogflow;
//# sourceMappingURL=v2beta1.js.map