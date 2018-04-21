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
 * DLP API
 *
 * The Google Data Loss Prevention API provides methods for detection of
 * privacy-sensitive fragments in text, images, and Google Cloud Platform
 * storage repositories.
 *
 * @example
 * const google = require('googleapis');
 * const dlp = google.dlp('v2beta2');
 *
 * @namespace dlp
 * @type {Function}
 * @version v2beta2
 * @variation v2beta2
 * @param {object=} options Options for Dlp
 */
function Dlp(options) {
    var self = this;
    self._options = options || {};
    self.infoTypes = {
        /**
         * dlp.infoTypes.list
         * @desc Returns sensitive information types DLP supports.
         * @alias dlp.infoTypes.list
         * @memberOf! dlp(v2beta2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Optional filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT.
         * @param {string=} params.languageCode Optional BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
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
            var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta2/infoTypes')
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
    self.organizations = {
        deidentifyTemplates: {
            /**
             * dlp.organizations.deidentifyTemplates.create
             * @desc Creates an Deidentify template for re-using frequently used
             * configuration for Deidentifying content, images, and storage.
             * @alias dlp.organizations.deidentifyTemplates.create
             * @memberOf! dlp(v2beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
             * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2CreateDeidentifyTemplateRequest} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{parent}/deidentifyTemplates')
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{parent}/deidentifyTemplates')
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
        inspectTemplates: {
            /**
             * dlp.organizations.inspectTemplates.create
             * @desc Creates an inspect template for re-using frequently used
             * configuration for inspecting content, images, and storage.
             * @alias dlp.organizations.inspectTemplates.create
             * @memberOf! dlp(v2beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
             * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2CreateInspectTemplateRequest} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{parent}/inspectTemplates')
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{parent}/inspectTemplates')
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
    };
    self.projects = {
        content: {
            /**
             * dlp.projects.content.deidentify
             * @desc De-identifies potentially sensitive info from a ContentItem. This
             * method has limits on input size and output size. [How-to
             * guide](/dlp/docs/deidentify-sensitive-data)
             * @alias dlp.projects.content.deidentify
             * @memberOf! dlp(v2beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent The parent resource name, for example projects/my-project-id.
             * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2DeidentifyContentRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            deidentify: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{parent}/content:deidentify')
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
            inspect: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{parent}/content:inspect')
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
            reidentify: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{parent}/content:reidentify')
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
        },
        dataSource: {
            /**
             * dlp.projects.dataSource.analyze
             * @desc Schedules a job to compute risk analysis metrics over content in
             * a Google Cloud Platform repository. [How-to
             * guide](/dlp/docs/compute-risk-analysis)
             * @alias dlp.projects.dataSource.analyze
             * @memberOf! dlp(v2beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent The parent resource name, for example projects/my-project-id.
             * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2AnalyzeDataSourceRiskRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            analyze: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{parent}/dataSource:analyze')
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
            inspect: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{parent}/dataSource:inspect')
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
        },
        deidentifyTemplates: {
            /**
             * dlp.projects.deidentifyTemplates.create
             * @desc Creates an Deidentify template for re-using frequently used
             * configuration for Deidentifying content, images, and storage.
             * @alias dlp.projects.deidentifyTemplates.create
             * @memberOf! dlp(v2beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
             * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2CreateDeidentifyTemplateRequest} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{parent}/deidentifyTemplates')
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{parent}/deidentifyTemplates')
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
        dlpJobs: {
            /**
             * dlp.projects.dlpJobs.cancel
             * @desc Starts asynchronous cancellation on a long-running DlpJob.  The
             * server makes a best effort to cancel the DlpJob, but success is not
             * guaranteed.
             * @alias dlp.projects.dlpJobs.cancel
             * @memberOf! dlp(v2beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the DlpJob resource to be cancelled.
             * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2CancelDlpJobRequest} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{name}:cancel')
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{parent}/dlpJobs')
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
        image: {
            /**
             * dlp.projects.image.redact
             * @desc Redacts potentially sensitive info from an image. This method has
             * limits on input size, processing time, and output size. [How-to
             * guide](/dlp/docs/redacting-sensitive-data-images)
             * @alias dlp.projects.image.redact
             * @memberOf! dlp(v2beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent The parent resource name, for example projects/my-project-id.
             * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2RedactImageRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            redact: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{parent}/image:redact')
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
        },
        inspectTemplates: {
            /**
             * dlp.projects.inspectTemplates.create
             * @desc Creates an inspect template for re-using frequently used
             * configuration for inspecting content, images, and storage.
             * @alias dlp.projects.inspectTemplates.create
             * @memberOf! dlp(v2beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
             * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2CreateInspectTemplateRequest} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{parent}/inspectTemplates')
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{parent}/inspectTemplates')
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
                var rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
    };
}
module.exports = Dlp;
//# sourceMappingURL=v2beta2.js.map