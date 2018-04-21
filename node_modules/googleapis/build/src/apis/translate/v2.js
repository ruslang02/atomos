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
 * Google Cloud Translation API
 *
 * The Google Cloud Translation API lets websites and programs integrate with
 * Google Translate programmatically.
 *
 * @example
 * const google = require('googleapis');
 * const translate = google.translate('v2');
 *
 * @namespace translate
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Translate
 */
function Translate(options) {
    var self = this;
    self._options = options || {};
    self.detections = {
        /**
         * language.detections.detect
         * @desc Detects the language of text within a request.
         * @alias language.detections.detect
         * @memberOf! translate(v2)
         *
         * @param {object} params Parameters for request
         * @param {translate(v2).DetectLanguageRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        detect: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/language/translate/v2/detect')
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
        list: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/language/translate/v2/detect')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['q'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.languages = {
        /**
         * language.languages.list
         * @desc Returns a list of supported languages for translation.
         * @alias language.languages.list
         * @memberOf! translate(v2)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.model The model type for which supported languages should be returned.
         * @param {string=} params.target The language to use to return localized, human readable names of supported languages.
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
            var rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/language/translate/v2/languages')
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
    self.translations = {
        /**
         * language.translations.list
         * @desc Translates input text, returning translated text.
         * @alias language.translations.list
         * @memberOf! translate(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.cid The customization id for translate
         * @param {string=} params.format The format of the source text, in either HTML (default) or plain-text. A value of "html" indicates HTML and a value of "text" indicates plain-text.
         * @param {string=} params.model The `model` type requested for this translation. Valid values are listed in public documentation.
         * @param {string} params.q The input text to translate. Repeat this parameter to perform translation operations on multiple text inputs.
         * @param {string=} params.source The language of the source text, set to one of the language codes listed in Language Support. If the source language is not specified, the API will attempt to identify the source language automatically and return it within the response.
         * @param {string} params.target The language to use for translation of the input text, set to one of the language codes listed in Language Support.
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
            var rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/language/translate/v2')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['q', 'target'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        translate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/language/translate/v2')
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
}
module.exports = Translate;
//# sourceMappingURL=v2.js.map