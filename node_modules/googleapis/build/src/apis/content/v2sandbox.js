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
 * Content API for Shopping
 *
 * Manages product items, inventory, and Merchant Center accounts for Google
 * Shopping.
 *
 * @example
 * const google = require('googleapis');
 * const content = google.content('v2sandbox');
 *
 * @namespace content
 * @type {Function}
 * @version v2sandbox
 * @variation v2sandbox
 * @param {object=} options Options for Content
 */
function Content(options) {
    var self = this;
    self._options = options || {};
    self.orders = {
        /**
         * content.orders.acknowledge
         * @desc Marks an order as acknowledged.
         * @alias content.orders.acknowledge
         * @memberOf! content(v2sandbox)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order.
         * @param {content(v2sandbox).OrdersAcknowledgeRequest} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/content/v2sandbox/{merchantId}/orders/{orderId}/acknowledge')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        advancetestorder: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/content/v2sandbox/{merchantId}/testorders/{orderId}/advance')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        cancel: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/content/v2sandbox/{merchantId}/orders/{orderId}/cancel')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        cancellineitem: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/content/v2sandbox/{merchantId}/orders/{orderId}/cancelLineItem')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        createtestorder: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/content/v2sandbox/{merchantId}/testorders')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        custombatch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/content/v2sandbox/orders/batch')
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
        get: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/content/v2sandbox/{merchantId}/orders/{orderId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        getbymerchantorderid: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/content/v2sandbox/{merchantId}/ordersbymerchantid/{merchantOrderId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'merchantOrderId'],
                pathParams: ['merchantId', 'merchantOrderId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        gettestordertemplate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/content/v2sandbox/{merchantId}/testordertemplates/{templateName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'templateName'],
                pathParams: ['merchantId', 'templateName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        instorerefundlineitem: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/content/v2sandbox/{merchantId}/orders/{orderId}/inStoreRefundLineItem')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
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
                    url: (rootUrl + '/content/v2sandbox/{merchantId}/orders')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        refund: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/content/v2sandbox/{merchantId}/orders/{orderId}/refund')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        rejectreturnlineitem: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/content/v2sandbox/{merchantId}/orders/{orderId}/rejectReturnLineItem')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        returnlineitem: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/content/v2sandbox/{merchantId}/orders/{orderId}/returnLineItem')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        returnrefundlineitem: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/content/v2sandbox/{merchantId}/orders/{orderId}/returnRefundLineItem')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        setlineitemmetadata: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/content/v2sandbox/{merchantId}/orders/{orderId}/setLineItemMetadata')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        shiplineitems: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/content/v2sandbox/{merchantId}/orders/{orderId}/shipLineItems')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        updatelineitemshippingdetails: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/content/v2sandbox/{merchantId}/orders/{orderId}/updateLineItemShippingDetails')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        updatemerchantorderid: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/content/v2sandbox/{merchantId}/orders/{orderId}/updateMerchantOrderId')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        updateshipment: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/content/v2sandbox/{merchantId}/orders/{orderId}/updateShipment')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Content;
//# sourceMappingURL=v2sandbox.js.map