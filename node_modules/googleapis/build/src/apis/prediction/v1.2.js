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
 * Prediction API
 *
 * Lets you access a cloud hosted machine learning service that makes it easy to
 * build smart apps
 *
 * @example
 * const google = require('googleapis');
 * const prediction = google.prediction('v1.2');
 *
 * @namespace prediction
 * @type {Function}
 * @version v1.2
 * @variation v1.2
 * @param {object=} options Options for Prediction
 */
function Prediction(options) {
    var self = this;
    self._options = options || {};
    /**
     * prediction.predict
     * @desc Submit data and request a prediction
     * @alias prediction.predict
     * @memberOf! prediction(v1.2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.data mybucket%2Fmydata resource in Google Storage
     * @param {prediction(v1.2).Input} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    this.predict = function (params, options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        options = options || {};
        var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        var parameters = {
            options: Object.assign({
                url: (rootUrl + '/prediction/v1.2/training/{data}/predict')
                    .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
            }, options),
            params: params,
            requiredParams: ['data'],
            pathParams: ['data'],
            context: self
        };
        return apirequest_1.createAPIRequest(parameters, callback);
    };
    self.hostedmodels = {
        /**
         * prediction.hostedmodels.predict
         * @desc Submit input and request an output against a hosted model
         * @alias prediction.hostedmodels.predict
         * @memberOf! prediction(v1.2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.hostedModelName The name of a hosted model
         * @param {prediction(v1.2).Input} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        predict: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/prediction/v1.2/hostedmodels/{hostedModelName}/predict')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['hostedModelName'],
                pathParams: ['hostedModelName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.training = {
        /**
         * prediction.training.delete
         * @desc Delete a trained model
         * @alias prediction.training.delete
         * @memberOf! prediction(v1.2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.data mybucket/mydata resource in Google Storage
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
                    url: (rootUrl + '/prediction/v1.2/training/{data}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['data'],
                pathParams: ['data'],
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
                    url: (rootUrl + '/prediction/v1.2/training/{data}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['data'],
                pathParams: ['data'],
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
                    url: (rootUrl + '/prediction/v1.2/training')
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
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/prediction/v1.2/training/{data}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['data'],
                pathParams: ['data'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Prediction;
//# sourceMappingURL=v1.2.js.map