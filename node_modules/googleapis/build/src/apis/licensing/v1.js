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
 * Enterprise License Manager API
 *
 * Views and manages licenses for your domain.
 *
 * @example
 * const google = require('googleapis');
 * const licensing = google.licensing('v1');
 *
 * @namespace licensing
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Licensing
 */
function Licensing(options) {
    var self = this;
    self._options = options || {};
    self.licenseAssignments = {
        /**
         * licensing.licenseAssignments.delete
         * @desc Revoke License.
         * @alias licensing.licenseAssignments.delete
         * @memberOf! licensing(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.productId Name for product
         * @param {string} params.skuId Name for sku
         * @param {string} params.userId email id or unique Id of the user
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
                        '/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['productId', 'skuId', 'userId'],
                pathParams: ['productId', 'skuId', 'userId'],
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
                        '/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['productId', 'skuId', 'userId'],
                pathParams: ['productId', 'skuId', 'userId'],
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
                        '/apps/licensing/v1/product/{productId}/sku/{skuId}/user')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['productId', 'skuId'],
                pathParams: ['productId', 'skuId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        listForProduct: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/apps/licensing/v1/product/{productId}/users')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['productId', 'customerId'],
                pathParams: ['productId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        listForProductAndSku: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/apps/licensing/v1/product/{productId}/sku/{skuId}/users')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['productId', 'skuId', 'customerId'],
                pathParams: ['productId', 'skuId'],
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
                        '/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['productId', 'skuId', 'userId'],
                pathParams: ['productId', 'skuId', 'userId'],
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
                        '/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['productId', 'skuId', 'userId'],
                pathParams: ['productId', 'skuId', 'userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Licensing;
//# sourceMappingURL=v1.js.map