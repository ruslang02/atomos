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
 * Cloud Tasks API
 *
 * Manages the execution of large numbers of distributed requests. Cloud Tasks
 * is in Alpha.
 *
 * @example
 * const google = require('googleapis');
 * const cloudtasks = google.cloudtasks('v2beta2');
 *
 * @namespace cloudtasks
 * @type {Function}
 * @version v2beta2
 * @variation v2beta2
 * @param {object=} options Options for Cloudtasks
 */
function Cloudtasks(options) {
    var self = this;
    self._options = options || {};
    self.projects = {
        locations: {
            /**
             * cloudtasks.projects.locations.get
             * @desc Get information about a location.
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Cloud Tasks API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/cloudtasks
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
             * var cloudTasks = google.cloudtasks('v2beta2');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // Resource name for the location.
             *     name: 'projects/my-project/locations/my-location',  // TODO: Update
             * placeholder value.
             *
             *     auth: authClient,
             *   };
             *
             *   cloudTasks.projects.locations.get(request, function(err, response) {
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
             * @alias cloudtasks.projects.locations.get
             * @memberOf! cloudtasks(v2beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Resource name for the location.
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
                var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{name}/locations')
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
            queues: {
                /**
                 * cloudtasks.projects.locations.queues.create
                 * @desc Creates a queue.  Queues created with this method allow tasks
                 * to live for a maximum of 31 days. After a task is 31 days old, the
                 * task will be deleted regardless of whether it was dispatched or not.
                 * WARNING: Using this method may have unintended side effects if you
                 * are using an App Engine `queue.yaml` or `queue.xml` file to manage
                 * your queues. Read [Overview of Queue Management and
                 * queue.yaml](/cloud-tasks/docs/queue-yaml) before using this method.
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Cloud Tasks API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/cloudtasks
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
                 * var cloudTasks = google.cloudtasks('v2beta2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // Required.
                 *     // The location name in which the queue will be created.
                 *     // For example: `projects/PROJECT_ID/locations/LOCATION_ID`
                 *     // The list of allowed locations can be obtained by calling Cloud
                 *     // Tasks' implementation of
                 *     // google.cloud.location.Locations.ListLocations.
                 *     parent: 'projects/my-project/locations/my-location',  // TODO:
                 * Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   cloudTasks.projects.locations.queues.create(request, function(err,
                 * response) { if (err) { console.error(err); return;
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
                 * @alias cloudtasks.projects.locations.queues.create
                 * @memberOf! cloudtasks(v2beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent Required.  The location name in which the queue will be created. For example: `projects/PROJECT_ID/locations/LOCATION_ID`  The list of allowed locations can be obtained by calling Cloud Tasks' implementation of ListLocations.
                 * @param {cloudtasks(v2beta2).Queue} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{parent}/queues')
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
                    var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{name}')
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
                    var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{name}')
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
                    var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{resource}:getIamPolicy')
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
                    var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{parent}/queues')
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
                    var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{name}')
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
                pause: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{name}:pause')
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
                purge: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{name}:purge')
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
                resume: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{name}:resume')
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
                setIamPolicy: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{resource}:setIamPolicy')
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
                    var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{resource}:testIamPermissions')
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
                tasks: {
                    /**
                     * cloudtasks.projects.locations.queues.tasks.acknowledge
                     * @desc Acknowledges a pull task.  The worker, that is, the entity
                     * that leased this task must call this method to indicate that the
                     * work associated with the task has finished.  The worker must
                     * acknowledge a task within the lease_duration or the lease will
                     * expire and the task will become available to be leased again. After
                     * the task is acknowledged, it will not be returned by a later
                     * LeaseTasks, GetTask, or ListTasks.  To acknowledge multiple tasks
                     * at the same time, use [HTTP
                     * batching](/storage/docs/json_api/v1/how-tos/batch) or the batching
                     * documentation for your client library, for example
                     * https://developers.google.com/api-client-library/python/guide/batch.
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Cloud Tasks API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/cloudtasks
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
                     * var cloudTasks = google.cloudtasks('v2beta2');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // Required.
                     *     // The task name. For example:
                     *     //
                     * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
                     *     name:
                     * 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',
                     * // TODO: Update placeholder value.
                     *
                     *     resource: {
                     *       // TODO: Add desired properties to the request body.
                     *     },
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   cloudTasks.projects.locations.queues.tasks.acknowledge(request,
                     * function(err) { if (err) { console.error(err); return;
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
                     * @alias cloudtasks.projects.locations.queues.tasks.acknowledge
                     * @memberOf! cloudtasks(v2beta2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
                     * @param {cloudtasks(v2beta2).AcknowledgeTaskRequest} params.resource Request body data
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
                        var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{name}:acknowledge')
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
                    cancelLease: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{name}:cancelLease')
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
                    create: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{parent}/tasks')
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
                        var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{name}')
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
                        var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{name}')
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
                    lease: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{parent}/tasks:lease')
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
                    list: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{parent}/tasks')
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
                    renewLease: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{name}:renewLease')
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
                    run: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{name}:run')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
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
        }
    };
}
module.exports = Cloudtasks;
//# sourceMappingURL=v2beta2.js.map