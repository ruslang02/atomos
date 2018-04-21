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
 * Cloud SQL Administration API
 *
 * Creates and configures Cloud SQL instances, which provide fully-managed MySQL
 * databases.
 *
 * @example
 * const google = require('googleapis');
 * const sqladmin = google.sqladmin('v1beta3');
 *
 * @namespace sqladmin
 * @type {Function}
 * @version v1beta3
 * @variation v1beta3
 * @param {object=} options Options for Sqladmin
 */
function Sqladmin(options) {
    var self = this;
    self._options = options || {};
    self.backupRuns = {
        /**
         * sql.backupRuns.get
         * @desc Retrieves information about a specified backup run for a Cloud SQL
         * instance.
         * @alias sql.backupRuns.get
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backupConfiguration Identifier for the backup configuration. This gets generated automatically when a backup configuration is created.
         * @param {string} params.dueTime The start time of the four-hour backup window. The backup can occur any time in the window. The time is in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
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
                        '/sql/v1beta3/projects/{project}/instances/{instance}/backupRuns/{backupConfiguration}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'backupConfiguration', 'dueTime'],
                pathParams: ['backupConfiguration', 'instance', 'project'],
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
                        '/sql/v1beta3/projects/{project}/instances/{instance}/backupRuns')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'backupConfiguration'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.flags = {
        /**
         * sql.flags.list
         * @desc Lists all database flags that can be set for Google Cloud SQL
         * instances.
         * @alias sql.flags.list
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object=} params Parameters for request
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
                    url: (rootUrl + '/sql/v1beta3/flags')
                        .replace(/([^:]\/)\/+/g, '$1'),
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
    self.instances = {
        /**
         * sql.instances.clone
         * @desc Creates a Cloud SQL instance as a clone of a source instance.
         * @alias sql.instances.clone
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID of the source as well as the clone Cloud SQL instance.
         * @param {sqladmin(v1beta3).InstancesCloneRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        clone: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta3/projects/{project}/instances/clone')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
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
                        '/sql/v1beta3/projects/{project}/instances/{instance}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
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
                    url: (rootUrl +
                        '/sql/v1beta3/projects/{project}/instances/{instance}/export')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
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
                        '/sql/v1beta3/projects/{project}/instances/{instance}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
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
                    url: (rootUrl +
                        '/sql/v1beta3/projects/{project}/instances/{instance}/import')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
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
                    url: (rootUrl + '/sql/v1beta3/projects/{project}/instances')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
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
                    url: (rootUrl + '/sql/v1beta3/projects/{project}/instances')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
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
                        '/sql/v1beta3/projects/{project}/instances/{instance}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        promoteReplica: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/sql/v1beta3/projects/{project}/instances/{instance}/promoteReplica')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        resetSslConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/sql/v1beta3/projects/{project}/instances/{instance}/resetSslConfig')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        restart: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/sql/v1beta3/projects/{project}/instances/{instance}/restart')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        restoreBackup: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/sql/v1beta3/projects/{project}/instances/{instance}/restoreBackup')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'backupConfiguration', 'dueTime'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        setRootPassword: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/sql/v1beta3/projects/{project}/instances/{instance}/setRootPassword')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
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
                        '/sql/v1beta3/projects/{project}/instances/{instance}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.operations = {
        /**
         * sql.operations.get
         * @desc Retrieves information about a specific operation that was performed
         * on a Cloud SQL instance.
         * @alias sql.operations.get
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.operation Instance operation ID.
         * @param {string} params.project Project ID of the project that contains the instance.
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
                        '/sql/v1beta3/projects/{project}/instances/{instance}/operations/{operation}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'operation'],
                pathParams: ['instance', 'operation', 'project'],
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
                        '/sql/v1beta3/projects/{project}/instances/{instance}/operations')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.sslCerts = {
        /**
         * sql.sslCerts.delete
         * @desc Deletes an SSL certificate from a Cloud SQL instance.
         * @alias sql.sslCerts.delete
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance to be deleted.
         * @param {string} params.sha1Fingerprint Sha1 FingerPrint.
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
                        '/sql/v1beta3/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'sha1Fingerprint'],
                pathParams: ['instance', 'project', 'sha1Fingerprint'],
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
                        '/sql/v1beta3/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'sha1Fingerprint'],
                pathParams: ['instance', 'project', 'sha1Fingerprint'],
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
                        '/sql/v1beta3/projects/{project}/instances/{instance}/sslCerts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
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
                        '/sql/v1beta3/projects/{project}/instances/{instance}/sslCerts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.tiers = {
        /**
         * sql.tiers.list
         * @desc Lists service tiers that can be used to create Google Cloud SQL
         * instances.
         * @alias sql.tiers.list
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID of the project for which to list tiers.
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
                    url: (rootUrl + '/sql/v1beta3/projects/{project}/tiers')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Sqladmin;
//# sourceMappingURL=v1beta3.js.map