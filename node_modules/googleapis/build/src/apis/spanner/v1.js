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
 * Cloud Spanner API
 *
 * Cloud Spanner is a managed, mission-critical, globally consistent and
 * scalable relational database service.
 *
 * @example
 * const google = require('googleapis');
 * const spanner = google.spanner('v1');
 *
 * @namespace spanner
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Spanner
 */
function Spanner(options) {
    var self = this;
    self._options = options || {};
    self.projects =
        {
            instanceConfigs: {
                /**
                 * spanner.projects.instanceConfigs.get
                 * @desc Gets information about a particular instance configuration.
                 * @alias spanner.projects.instanceConfigs.get
                 * @memberOf! spanner(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Required. The name of the requested instance configuration. Values are of the form `projects/<project>/instanceConfigs/<config>`.
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
                    var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                    var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{parent}/instanceConfigs')
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
            instances: {
                /**
                 * spanner.projects.instances.create
                 * @desc Creates an instance and begins preparing it to begin
                 * serving. The returned long-running operation can be used to
                 * track the progress of preparing the new instance. The instance
                 * name is assigned by the caller. If the named instance already
                 * exists, `CreateInstance` returns `ALREADY_EXISTS`.  Immediately
                 * upon completion of this request:    * The instance is readable
                 * via the API, with all requested attributes     but no allocated
                 * resources. Its state is `CREATING`.  Until completion of the
                 * returned operation:    * Cancelling the operation renders the
                 * instance immediately unreadable     via the API.   * The
                 * instance can be deleted.   * All other attempts to modify the
                 * instance are rejected.  Upon completion of the returned
                 * operation:    * Billing for all successfully-allocated
                 * resources begins (some types     may have lower than the
                 * requested levels).   * Databases can be created in the
                 * instance.   * The instance's allocated resource levels are
                 * readable via the API.   * The instance's state becomes `READY`.
                 * The returned long-running operation will have a name of the
                 * format `<instance_name>/operations/<operation_id>` and can be
                 * used to track creation of the instance.  The metadata field
                 * type is CreateInstanceMetadata. The response field type is
                 * Instance, if successful.
                 * @alias spanner.projects.instances.create
                 * @memberOf! spanner(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent Required. The name of the project in which to create the instance. Values are of the form `projects/<project>`.
                 * @param {spanner(v1).CreateInstanceRequest} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{parent}/instances')
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
                    var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{name}')
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
                    var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{name}')
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
                getIamPolicy: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{resource}:getIamPolicy')
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
                list: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{parent}/instances')
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
                    var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{name}')
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
                setIamPolicy: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{resource}:setIamPolicy')
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
                    var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{resource}:testIamPermissions')
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
                databases: {
                    /**
                     * spanner.projects.instances.databases.create
                     * @desc Creates a new Cloud Spanner database and starts to
                     * prepare it for serving. The returned long-running
                     * operation will have a name of the format
                     * `<database_name>/operations/<operation_id>` and can be
                     * used to track preparation of the database. The metadata
                     * field type is CreateDatabaseMetadata. The response field
                     * type is Database, if successful.
                     * @alias spanner.projects.instances.databases.create
                     * @memberOf! spanner(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent Required. The name of the instance that will serve the new database. Values are of the form `projects/<project>/instances/<instance>`.
                     * @param {spanner(v1).CreateDatabaseRequest} params.resource Request body data
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
                        var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{parent}/databases')
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
                    dropDatabase: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{database}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['database'],
                            pathParams: ['database'],
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
                        var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{name}')
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
                    getDdl: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{database}/ddl')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['database'],
                            pathParams: ['database'],
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
                        var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{resource}:getIamPolicy')
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
                    list: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{parent}/databases')
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
                    setIamPolicy: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{resource}:setIamPolicy')
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
                        var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v1/{resource}:testIamPermissions')
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
                    updateDdl: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{database}/ddl')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PATCH'
                            }, options),
                            params: params,
                            requiredParams: ['database'],
                            pathParams: ['database'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    operations: {
                        /**
                         * spanner.projects.instances.databases.operations.cancel
                         * @desc Starts asynchronous cancellation on a
                         * long-running operation.  The server makes a best effort
                         * to cancel the operation, but success is not guaranteed.
                         * If the server doesn't support this method, it returns
                         * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
                         * Operations.GetOperation or other methods to check
                         * whether the cancellation succeeded or whether the
                         * operation completed despite cancellation. On successful
                         * cancellation, the operation is not deleted; instead, it
                         * becomes an operation with an Operation.error value with
                         * a google.rpc.Status.code of 1, corresponding to
                         * `Code.CANCELLED`.
                         * @alias
                         * spanner.projects.instances.databases.operations.cancel
                         * @memberOf! spanner(v1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.name The name of the operation resource to be cancelled.
                         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                         * @param {callback} callback The callback that handles the response.
                         * @return {object} Request object
                         */
                        cancel: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl ||
                                'https://spanner.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1/{name}:cancel')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
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
                            var rootUrl = options.rootUrl ||
                                'https://spanner.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1/{name}')
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
                                'https://spanner.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1/{name}')
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
                                'https://spanner.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1/{name}')
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
                    },
                    sessions: {
                        /**
                         * spanner.projects.instances.databases.sessions.beginTransaction
                         * @desc Begins a new transaction. This step can often be
                         * skipped: Read, ExecuteSql and Commit can begin a new
                         * transaction as a side-effect.
                         * @alias
                         * spanner.projects.instances.databases.sessions.beginTransaction
                         * @memberOf! spanner(v1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.session Required. The session in which the transaction runs.
                         * @param {spanner(v1).BeginTransactionRequest} params.resource Request body data
                         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                         * @param {callback} callback The callback that handles the response.
                         * @return {object} Request object
                         */
                        beginTransaction: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl ||
                                'https://spanner.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1/{session}:beginTransaction')
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
                        commit: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl ||
                                'https://spanner.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1/{session}:commit')
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
                        create: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl ||
                                'https://spanner.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1/{database}/sessions')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['database'],
                                pathParams: ['database'],
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
                                'https://spanner.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1/{name}')
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
                        executeSql: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl ||
                                'https://spanner.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1/{session}:executeSql')
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
                        executeStreamingSql: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl ||
                                'https://spanner.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/v1/{session}:executeStreamingSql')
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
                        get: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl ||
                                'https://spanner.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1/{name}')
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
                                'https://spanner.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1/{database}/sessions')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['database'],
                                pathParams: ['database'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        },
                        read: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl ||
                                'https://spanner.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1/{session}:read')
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
                        rollback: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl ||
                                'https://spanner.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1/{session}:rollback')
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
                        streamingRead: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options = options || {};
                            var rootUrl = options.rootUrl ||
                                'https://spanner.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1/{session}:streamingRead')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['session'],
                                pathParams: ['session'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    }
                },
                operations: {
                    /**
                     * spanner.projects.instances.operations.cancel
                     * @desc Starts asynchronous cancellation on a long-running
                     * operation.  The server makes a best effort to cancel the
                     * operation, but success is not guaranteed.  If the server
                     * doesn't support this method, it returns
                     * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
                     * Operations.GetOperation or other methods to check whether the
                     * cancellation succeeded or whether the operation completed
                     * despite cancellation. On successful cancellation, the
                     * operation is not deleted; instead, it becomes an operation
                     * with an Operation.error value with a google.rpc.Status.code
                     * of 1, corresponding to `Code.CANCELLED`.
                     * @alias spanner.projects.instances.operations.cancel
                     * @memberOf! spanner(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name The name of the operation resource to be cancelled.
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    cancel: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{name}:cancel')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
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
                        var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{name}')
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
                        var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{name}')
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
                        var rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{name}')
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
            }
        };
}
module.exports = Spanner;
//# sourceMappingURL=v1.js.map