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
 * Google Proximity Beacon API
 *
 * Registers, manages, indexes, and searches beacons.
 *
 * @example
 * const google = require('googleapis');
 * const proximitybeacon = google.proximitybeacon('v1beta1');
 *
 * @namespace proximitybeacon
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Proximitybeacon
 */
function Proximitybeacon(options) {
    var self = this;
    self._options = options || {};
    self.beaconinfo = {
        /**
         * proximitybeacon.beaconinfo.getforobserved
         * @desc Given one or more beacon observations, returns any beacon
         * information and attachments accessible to your application. Authorize by
         * using the [API
         * key](https://developers.google.com/beacons/proximity/get-started#request_a_browser_api_key)
         * for the application.
         * @alias proximitybeacon.beaconinfo.getforobserved
         * @memberOf! proximitybeacon(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {proximitybeacon(v1beta1).GetInfoForObservedBeaconsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getforobserved: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://proximitybeacon.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/beaconinfo:getforobserved')
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
    self.beacons = {
        /**
         * proximitybeacon.beacons.activate
         * @desc Activates a beacon. A beacon that is active will return information
         * and attachment data when queried via `beaconinfo.getforobserved`. Calling
         * this method on an already active beacon will do nothing (but will return
         * a successful response code).  Authenticate using an [OAuth access
         * token](https://developers.google.com/identity/protocols/OAuth2) from a
         * signed-in user with **Is owner** or **Can edit** permissions in the
         * Google Developers Console project.
         * @alias proximitybeacon.beacons.activate
         * @memberOf! proximitybeacon(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.beaconName Beacon that should be activated. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
         * @param {string=} params.projectId The project id of the beacon to activate. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        activate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://proximitybeacon.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{beaconName}:activate')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['beaconName'],
                pathParams: ['beaconName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        deactivate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://proximitybeacon.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{beaconName}:deactivate')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['beaconName'],
                pathParams: ['beaconName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        decommission: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://proximitybeacon.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{beaconName}:decommission')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['beaconName'],
                pathParams: ['beaconName'],
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
            var rootUrl = options.rootUrl || 'https://proximitybeacon.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{beaconName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['beaconName'],
                pathParams: ['beaconName'],
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
            var rootUrl = options.rootUrl || 'https://proximitybeacon.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{beaconName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['beaconName'],
                pathParams: ['beaconName'],
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
            var rootUrl = options.rootUrl || 'https://proximitybeacon.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/beacons').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        register: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://proximitybeacon.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/beacons:register')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
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
            var rootUrl = options.rootUrl || 'https://proximitybeacon.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{beaconName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['beaconName'],
                pathParams: ['beaconName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        attachments: {
            /**
             * proximitybeacon.beacons.attachments.batchDelete
             * @desc Deletes multiple attachments on a given beacon. This operation is
             * permanent and cannot be undone.  You can optionally specify
             * `namespacedType` to choose which attachments should be deleted. If you
             * do not specify `namespacedType`,  all your attachments on the given
             * beacon will be deleted. You also may explicitly specify `x/x` to delete
             * all.  Authenticate using an [OAuth access
             * token](https://developers.google.com/identity/protocols/OAuth2) from a
             * signed-in user with **Is owner** or **Can edit** permissions in the
             * Google Developers Console project.
             * @alias proximitybeacon.beacons.attachments.batchDelete
             * @memberOf! proximitybeacon(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.beaconName The beacon whose attachments should be deleted. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
             * @param {string=} params.namespacedType Specifies the namespace and type of attachments to delete in `namespace/type` format. Accepts `x/x` to specify "all types in all namespaces". Optional.
             * @param {string=} params.projectId The project id to delete beacon attachments under. This field can be used when "*" is specified to mean all attachment namespaces. Projects may have multiple attachments with multiple namespaces. If "*" is specified and the projectId string is empty, then the project making the request is used. Optional.
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
                var rootUrl = options.rootUrl || 'https://proximitybeacon.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta1/{beaconName}/attachments:batchDelete')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['beaconName'],
                    pathParams: ['beaconName'],
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
                var rootUrl = options.rootUrl || 'https://proximitybeacon.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta1/{beaconName}/attachments')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['beaconName'],
                    pathParams: ['beaconName'],
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
                var rootUrl = options.rootUrl || 'https://proximitybeacon.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta1/{attachmentName}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['attachmentName'],
                    pathParams: ['attachmentName'],
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
                var rootUrl = options.rootUrl || 'https://proximitybeacon.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta1/{beaconName}/attachments')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['beaconName'],
                    pathParams: ['beaconName'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        diagnostics: {
            /**
             * proximitybeacon.beacons.diagnostics.list
             * @desc List the diagnostics for a single beacon. You can also list
             * diagnostics for all the beacons owned by your Google Developers Console
             * project by using the beacon name `beacons/-`.  Authenticate using an
             * [OAuth access
             * token](https://developers.google.com/identity/protocols/OAuth2) from a
             * signed-in user with **viewer**, **Is owner** or **Can edit**
             * permissions in the Google Developers Console project.
             * @alias proximitybeacon.beacons.diagnostics.list
             * @memberOf! proximitybeacon(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.alertFilter Requests only beacons that have the given alert. For example, to find beacons that have low batteries use `alert_filter=LOW_BATTERY`.
             * @param {string} params.beaconName Beacon that the diagnostics are for.
             * @param {integer=} params.pageSize Specifies the maximum number of results to return. Defaults to 10. Maximum 1000. Optional.
             * @param {string=} params.pageToken Requests results that occur after the `page_token`, obtained from the response to a previous request. Optional.
             * @param {string=} params.projectId Requests only diagnostic records for the given project id. If not set, then the project making the request will be used for looking up diagnostic records. Optional.
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
                var rootUrl = options.rootUrl || 'https://proximitybeacon.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta1/{beaconName}/diagnostics')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['beaconName'],
                    pathParams: ['beaconName'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.namespaces = {
        /**
         * proximitybeacon.namespaces.list
         * @desc Lists all attachment namespaces owned by your Google Developers
         * Console project. Attachment data associated with a beacon must include a
         * namespaced type, and the namespace must be owned by your project.
         * Authenticate using an [OAuth access
         * token](https://developers.google.com/identity/protocols/OAuth2) from a
         * signed-in user with **viewer**, **Is owner** or **Can edit** permissions
         * in the Google Developers Console project.
         * @alias proximitybeacon.namespaces.list
         * @memberOf! proximitybeacon(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.projectId The project id to list namespaces under. Optional.
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
            var rootUrl = options.rootUrl || 'https://proximitybeacon.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/namespaces')
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
            var rootUrl = options.rootUrl || 'https://proximitybeacon.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{namespaceName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['namespaceName'],
                pathParams: ['namespaceName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.v1beta1 = {
        /**
         * proximitybeacon.getEidparams
         * @desc Gets the Proximity Beacon API's current public key and associated
         * parameters used to initiate the Diffie-Hellman key exchange required to
         * register a beacon that broadcasts the Eddystone-EID format. This key
         * changes periodically; clients may cache it and re-use the same public key
         * to provision and register multiple beacons. However, clients should be
         * prepared to refresh this key when they encounter an error registering an
         * Eddystone-EID beacon.
         * @alias proximitybeacon.getEidparams
         * @memberOf! proximitybeacon(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getEidparams: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://proximitybeacon.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/eidparams')
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
}
module.exports = Proximitybeacon;
//# sourceMappingURL=v1beta1.js.map