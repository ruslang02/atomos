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
 * TaskQueue API
 *
 * Accesses a Google App Engine Pull Task Queue over REST.
 *
 * @example
 * const google = require('googleapis');
 * const taskqueue = google.taskqueue('v1beta2');
 *
 * @namespace taskqueue
 * @type {Function}
 * @version v1beta2
 * @variation v1beta2
 * @param {object=} options Options for Taskqueue
 */
function Taskqueue(options) {
    var self = this;
    self._options = options || {};
    self.taskqueues = {
        /**
         * taskqueue.taskqueues.get
         * @desc Get detailed information about a TaskQueue.
         * @alias taskqueue.taskqueues.get
         * @memberOf! taskqueue(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.getStats Whether to get stats. Optional.
         * @param {string} params.project The project under which the queue lies.
         * @param {string} params.taskqueue The id of the taskqueue to get the properties of.
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
                        '/taskqueue/v1beta2/projects/{project}/taskqueues/{taskqueue}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'taskqueue'],
                pathParams: ['project', 'taskqueue'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.tasks = {
        /**
         * taskqueue.tasks.delete
         * @desc Delete a task from a TaskQueue.
         * @alias taskqueue.tasks.delete
         * @memberOf! taskqueue(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The project under which the queue lies.
         * @param {string} params.task The id of the task to delete.
         * @param {string} params.taskqueue The taskqueue to delete a task from.
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
                        '/taskqueue/v1beta2/projects/{project}/taskqueues/{taskqueue}/tasks/{task}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'taskqueue', 'task'],
                pathParams: ['project', 'task', 'taskqueue'],
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
                        '/taskqueue/v1beta2/projects/{project}/taskqueues/{taskqueue}/tasks/{task}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'taskqueue', 'task'],
                pathParams: ['project', 'task', 'taskqueue'],
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
                        '/taskqueue/v1beta2/projects/{project}/taskqueues/{taskqueue}/tasks')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'taskqueue'],
                pathParams: ['project', 'taskqueue'],
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/taskqueue/v1beta2/projects/{project}/taskqueues/{taskqueue}/tasks/lease')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'taskqueue', 'numTasks', 'leaseSecs'],
                pathParams: ['project', 'taskqueue'],
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
                        '/taskqueue/v1beta2/projects/{project}/taskqueues/{taskqueue}/tasks')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'taskqueue'],
                pathParams: ['project', 'taskqueue'],
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
                        '/taskqueue/v1beta2/projects/{project}/taskqueues/{taskqueue}/tasks/{task}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'taskqueue', 'task', 'newLeaseSeconds'],
                pathParams: ['project', 'task', 'taskqueue'],
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
                        '/taskqueue/v1beta2/projects/{project}/taskqueues/{taskqueue}/tasks/{task}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'taskqueue', 'task', 'newLeaseSeconds'],
                pathParams: ['project', 'task', 'taskqueue'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Taskqueue;
//# sourceMappingURL=v1beta2.js.map