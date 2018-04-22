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
 * Google Play Developer API
 *
 * Lets Android application developers access their Google Play accounts.
 *
 * @example
 * const google = require('googleapis');
 * const androidpublisher = google.androidpublisher('v2');
 *
 * @namespace androidpublisher
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Androidpublisher
 */
function Androidpublisher(options) {
    var self = this;
    self._options = options || {};
    self.edits = {
        /**
         * androidpublisher.edits.commit
         * @desc Commits/applies the changes made in this edit back to the app.
         * @alias androidpublisher.edits.commit
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.editId Unique identifier for this edit.
         * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        commit: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v2/applications/{packageName}/edits/{editId}:commit')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
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
                        '/androidpublisher/v2/applications/{packageName}/edits/{editId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
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
                        '/androidpublisher/v2/applications/{packageName}/edits/{editId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
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
                        '/androidpublisher/v2/applications/{packageName}/edits')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['packageName'],
                pathParams: ['packageName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        validate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v2/applications/{packageName}/edits/{editId}:validate')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        apklistings: {
            /**
             * androidpublisher.edits.apklistings.delete
             * @desc Deletes the APK-specific localized listing for a specified APK
             * and language code.
             * @alias androidpublisher.edits.apklistings.delete
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {integer} params.apkVersionCode The APK version code whose APK-specific listings should be read or modified.
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.language The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'apkVersionCode', 'language'],
                    pathParams: ['apkVersionCode', 'editId', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            deleteall: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'apkVersionCode'],
                    pathParams: ['apkVersionCode', 'editId', 'packageName'],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'apkVersionCode', 'language'],
                    pathParams: ['apkVersionCode', 'editId', 'language', 'packageName'],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'apkVersionCode'],
                    pathParams: ['apkVersionCode', 'editId', 'packageName'],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'apkVersionCode', 'language'],
                    pathParams: ['apkVersionCode', 'editId', 'language', 'packageName'],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'apkVersionCode', 'language'],
                    pathParams: ['apkVersionCode', 'editId', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        apks: {
            /**
             * androidpublisher.edits.apks.addexternallyhosted
             * @desc Creates a new APK without uploading the APK itself to Google
             * Play, instead hosting the APK at a specified URL. This function is only
             * available to enterprises using Google Play for Work whose application
             * is configured to restrict distribution to the enterprise domain.
             * @alias androidpublisher.edits.apks.addexternallyhosted
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {androidpublisher(v2).ApksAddExternallyHostedRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            addexternallyhosted: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/externallyHosted')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            upload: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    mediaUrl: (rootUrl +
                        '/upload/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        deobfuscationfiles: {
            /**
             * androidpublisher.edits.deobfuscationfiles.upload
             * @desc Uploads the deobfuscation file of the specified APK. If a
             * deobfuscation file already exists, it will be replaced.
             * @alias androidpublisher.edits.deobfuscationfiles.upload
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {integer} params.apkVersionCode The version code of the APK whose deobfuscation file is being uploaded.
             * @param {string} params.deobfuscationFileType
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier of the Android app for which the deobfuscatiuon files are being uploaded; for example, "com.spiffygame".
             * @param {object} params.media Media object
             * @param {string} params.media.mimeType Media mime-type
             * @param {string|object} params.media.body Media body contents
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            upload: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    mediaUrl: (rootUrl +
                        '/upload/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    requiredParams: [
                        'packageName', 'editId', 'apkVersionCode', 'deobfuscationFileType'
                    ],
                    pathParams: [
                        'apkVersionCode', 'deobfuscationFileType', 'editId', 'packageName'
                    ],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        details: {
            /**
             * androidpublisher.edits.details.get
             * @desc Fetches app details for this edit. This includes the default
             * language and developer support contact information.
             * @alias androidpublisher.edits.details.get
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/details')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/details')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/details')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        expansionfiles: {
            /**
             * androidpublisher.edits.expansionfiles.get
             * @desc Fetches the Expansion File configuration for the APK
             * specified.
             * @alias androidpublisher.edits.expansionfiles.get
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {integer} params.apkVersionCode The version code of the APK whose Expansion File configuration is being read or modified.
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.expansionFileType
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: [
                        'packageName', 'editId', 'apkVersionCode', 'expansionFileType'
                    ],
                    pathParams: [
                        'apkVersionCode', 'editId', 'expansionFileType', 'packageName'
                    ],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: [
                        'packageName', 'editId', 'apkVersionCode', 'expansionFileType'
                    ],
                    pathParams: [
                        'apkVersionCode', 'editId', 'expansionFileType', 'packageName'
                    ],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: [
                        'packageName', 'editId', 'apkVersionCode', 'expansionFileType'
                    ],
                    pathParams: [
                        'apkVersionCode', 'editId', 'expansionFileType', 'packageName'
                    ],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            upload: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    mediaUrl: (rootUrl +
                        '/upload/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    requiredParams: [
                        'packageName', 'editId', 'apkVersionCode', 'expansionFileType'
                    ],
                    pathParams: [
                        'apkVersionCode', 'editId', 'expansionFileType', 'packageName'
                    ],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        images: {
            /**
             * androidpublisher.edits.images.delete
             * @desc Deletes the image (specified by id) from the edit.
             * @alias androidpublisher.edits.images.delete
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.imageId Unique identifier an image within the set of images attached to this edit.
             * @param {string} params.imageType
             * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'language', 'imageType', 'imageId'],
                    pathParams: ['editId', 'imageId', 'imageType', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            deleteall: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'language', 'imageType'],
                    pathParams: ['editId', 'imageType', 'language', 'packageName'],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'language', 'imageType'],
                    pathParams: ['editId', 'imageType', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            upload: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    mediaUrl: (rootUrl +
                        '/upload/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    requiredParams: ['packageName', 'editId', 'language', 'imageType'],
                    pathParams: ['editId', 'imageType', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        listings: {
            /**
             * androidpublisher.edits.listings.delete
             * @desc Deletes the specified localized store listing from an edit.
             * @alias androidpublisher.edits.listings.delete
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'language'],
                    pathParams: ['editId', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            deleteall: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'language'],
                    pathParams: ['editId', 'language', 'packageName'],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'language'],
                    pathParams: ['editId', 'language', 'packageName'],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'language'],
                    pathParams: ['editId', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        testers: {
            /**
             * androidpublisher.edits.testers.get
             * @alias androidpublisher.edits.testers.get
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {string} params.track The track to read or modify. Acceptable values are: "alpha", "beta", "production" or "rollout".
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/testers/{track}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'track'],
                    pathParams: ['editId', 'packageName', 'track'],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/testers/{track}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'track'],
                    pathParams: ['editId', 'packageName', 'track'],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/testers/{track}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'track'],
                    pathParams: ['editId', 'packageName', 'track'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        tracks: {
            /**
             * androidpublisher.edits.tracks.get
             * @desc Fetches the track configuration for the specified track type.
             * Includes the APK version codes that are in this track.
             * @alias androidpublisher.edits.tracks.get
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {string} params.track The track to read or modify. Acceptable values are: "alpha", "beta", "production" or "rollout".
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/tracks/{track}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'track'],
                    pathParams: ['editId', 'packageName', 'track'],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/tracks')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/tracks/{track}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'track'],
                    pathParams: ['editId', 'packageName', 'track'],
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
                            '/androidpublisher/v2/applications/{packageName}/edits/{editId}/tracks/{track}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'track'],
                    pathParams: ['editId', 'packageName', 'track'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.entitlements = {
        /**
         * androidpublisher.entitlements.list
         * @desc Lists the user's current inapp item or subscription entitlements
         * @alias androidpublisher.entitlements.list
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults
         * @param {string} params.packageName The package name of the application the inapp product was sold in (for example, 'com.some.thing').
         * @param {string=} params.productId The product id of the inapp product (for example, 'sku1'). This can be used to restrict the result set.
         * @param {integer=} params.startIndex
         * @param {string=} params.token
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
                    url: (rootUrl +
                        '/androidpublisher/v2/applications/{packageName}/entitlements')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['packageName'],
                pathParams: ['packageName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.inappproducts = {
        /**
         * androidpublisher.inappproducts.delete
         * @desc Delete an in-app product for an app.
         * @alias androidpublisher.inappproducts.delete
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.packageName Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
         * @param {string} params.sku Unique identifier for the in-app product.
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
                        '/androidpublisher/v2/applications/{packageName}/inappproducts/{sku}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['packageName', 'sku'],
                pathParams: ['packageName', 'sku'],
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
                        '/androidpublisher/v2/applications/{packageName}/inappproducts/{sku}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['packageName', 'sku'],
                pathParams: ['packageName', 'sku'],
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
                        '/androidpublisher/v2/applications/{packageName}/inappproducts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['packageName'],
                pathParams: ['packageName'],
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
                        '/androidpublisher/v2/applications/{packageName}/inappproducts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['packageName'],
                pathParams: ['packageName'],
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
                        '/androidpublisher/v2/applications/{packageName}/inappproducts/{sku}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['packageName', 'sku'],
                pathParams: ['packageName', 'sku'],
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
                        '/androidpublisher/v2/applications/{packageName}/inappproducts/{sku}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['packageName', 'sku'],
                pathParams: ['packageName', 'sku'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.purchases = {
        products: {
            /**
             * androidpublisher.purchases.products.get
             * @desc Checks the purchase and consumption status of an inapp item.
             * @alias androidpublisher.purchases.products.get
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.packageName The package name of the application the inapp product was sold in (for example, 'com.some.thing').
             * @param {string} params.productId The inapp product SKU (for example, 'com.some.thing.inapp1').
             * @param {string} params.token The token provided to the user's device when the inapp product was purchased.
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
                            '/androidpublisher/v2/applications/{packageName}/purchases/products/{productId}/tokens/{token}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'productId', 'token'],
                    pathParams: ['packageName', 'productId', 'token'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        subscriptions: {
            /**
             * androidpublisher.purchases.subscriptions.cancel
             * @desc Cancels a user's subscription purchase. The subscription remains
             * valid until its expiration time.
             * @alias androidpublisher.purchases.subscriptions.cancel
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
             * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
             * @param {string} params.token The token provided to the user's device when the subscription was purchased.
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
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'subscriptionId', 'token'],
                    pathParams: ['packageName', 'subscriptionId', 'token'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            defer: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'subscriptionId', 'token'],
                    pathParams: ['packageName', 'subscriptionId', 'token'],
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
                            '/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'subscriptionId', 'token'],
                    pathParams: ['packageName', 'subscriptionId', 'token'],
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
                            '/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'subscriptionId', 'token'],
                    pathParams: ['packageName', 'subscriptionId', 'token'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            revoke: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'subscriptionId', 'token'],
                    pathParams: ['packageName', 'subscriptionId', 'token'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        voidedpurchases: {
            /**
             * androidpublisher.purchases.voidedpurchases.list
             * @desc Lists the purchases that were cancelled, refunded or
             * charged-back.
             * @alias androidpublisher.purchases.voidedpurchases.list
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.endTime The time, in milliseconds since the Epoch, of the newest voided in-app product purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
             * @param {integer=} params.maxResults
             * @param {string} params.packageName The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').
             * @param {integer=} params.startIndex
             * @param {string=} params.startTime The time, in milliseconds since the Epoch, of the oldest voided in-app product purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
             * @param {string=} params.token
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
                        url: (rootUrl +
                            '/androidpublisher/v2/applications/{packageName}/purchases/voidedpurchases')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName'],
                    pathParams: ['packageName'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.reviews = {
        /**
         * androidpublisher.reviews.get
         * @desc Returns a single review.
         * @alias androidpublisher.reviews.get
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.packageName Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
         * @param {string} params.reviewId
         * @param {string=} params.translationLanguage
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
                        '/androidpublisher/v2/applications/{packageName}/reviews/{reviewId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['packageName', 'reviewId'],
                pathParams: ['packageName', 'reviewId'],
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
                        '/androidpublisher/v2/applications/{packageName}/reviews')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['packageName'],
                pathParams: ['packageName'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        reply: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v2/applications/{packageName}/reviews/{reviewId}:reply')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['packageName', 'reviewId'],
                pathParams: ['packageName', 'reviewId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Androidpublisher;
//# sourceMappingURL=v2.js.map