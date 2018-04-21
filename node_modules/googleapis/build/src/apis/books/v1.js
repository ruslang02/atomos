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
 * Books API
 *
 * Searches for books and manages your Google Books library.
 *
 * @example
 * const google = require('googleapis');
 * const books = google.books('v1');
 *
 * @namespace books
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Books
 */
function Books(options) {
    var self = this;
    self._options = options || {};
    self.bookshelves = {
        /**
         * books.bookshelves.get
         * @desc Retrieves metadata for a specific bookshelf for the specified user.
         * @alias books.bookshelves.get
         * @memberOf! books(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.shelf ID of bookshelf to retrieve.
         * @param {string=} params.source String to identify the originator of this request.
         * @param {string} params.userId ID of user for whom to retrieve bookshelves.
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
                    url: (rootUrl + '/books/v1/users/{userId}/bookshelves/{shelf}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userId', 'shelf'],
                pathParams: ['shelf', 'userId'],
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
                    url: (rootUrl + '/books/v1/users/{userId}/bookshelves')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userId'],
                pathParams: ['userId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        volumes: {
            /**
             * books.bookshelves.volumes.list
             * @desc Retrieves volumes in a specific bookshelf for the specified user.
             * @alias books.bookshelves.volumes.list
             * @memberOf! books(v1)
             *
             * @param {object} params Parameters for request
             * @param {integer=} params.maxResults Maximum number of results to return
             * @param {string} params.shelf ID of bookshelf to retrieve volumes.
             * @param {boolean=} params.showPreorders Set to true to show pre-ordered books. Defaults to false.
             * @param {string=} params.source String to identify the originator of this request.
             * @param {integer=} params.startIndex Index of the first element to return (starts at 0)
             * @param {string} params.userId ID of user for whom to retrieve bookshelf volumes.
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
                            '/books/v1/users/{userId}/bookshelves/{shelf}/volumes')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['userId', 'shelf'],
                    pathParams: ['shelf', 'userId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.cloudloading = {
        /**
         * books.cloudloading.addBook
         * @alias books.cloudloading.addBook
         * @memberOf! books(v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.drive_document_id A drive document id. The upload_client_token must not be set.
         * @param {string=} params.mime_type The document MIME type. It can be set only if the drive_document_id is set.
         * @param {string=} params.name The document name. It can be set only if the drive_document_id is set.
         * @param {string=} params.upload_client_token
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        addBook: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/books/v1/cloudloading/addBook')
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
        deleteBook: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/books/v1/cloudloading/deleteBook')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['volumeId'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        updateBook: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/books/v1/cloudloading/updateBook')
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
    self.dictionary = {
        /**
         * books.dictionary.listOfflineMetadata
         * @desc Returns a list of offline dictionary metadata available
         * @alias books.dictionary.listOfflineMetadata
         * @memberOf! books(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.cpksver The device/version ID from which to request the data.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listOfflineMetadata: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/books/v1/dictionary/listOfflineMetadata')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['cpksver'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.familysharing = {
        /**
         * books.familysharing.getFamilyInfo
         * @desc Gets information regarding the family that the user is part of.
         * @alias books.familysharing.getFamilyInfo
         * @memberOf! books(v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.source String to identify the originator of this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getFamilyInfo: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/books/v1/familysharing/getFamilyInfo')
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
        share: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/books/v1/familysharing/share')
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
        unshare: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/books/v1/familysharing/unshare')
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
    self.layers = {
        /**
         * books.layers.get
         * @desc Gets the layer summary for a volume.
         * @alias books.layers.get
         * @memberOf! books(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.contentVersion The content version for the requested volume.
         * @param {string=} params.source String to identify the originator of this request.
         * @param {string} params.summaryId The ID for the layer to get the summary for.
         * @param {string} params.volumeId The volume to retrieve layers for.
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
                        '/books/v1/volumes/{volumeId}/layersummary/{summaryId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['volumeId', 'summaryId'],
                pathParams: ['summaryId', 'volumeId'],
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
                    url: (rootUrl + '/books/v1/volumes/{volumeId}/layersummary')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['volumeId'],
                pathParams: ['volumeId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        annotationData: {
            /**
             * books.layers.annotationData.get
             * @desc Gets the annotation data.
             * @alias books.layers.annotationData.get
             * @memberOf! books(v1)
             *
             * @param {object} params Parameters for request
             * @param {boolean=} params.allowWebDefinitions For the dictionary layer. Whether or not to allow web definitions.
             * @param {string} params.annotationDataId The ID of the annotation data to retrieve.
             * @param {string} params.contentVersion The content version for the volume you are trying to retrieve.
             * @param {integer=} params.h The requested pixel height for any images. If height is provided width must also be provided.
             * @param {string} params.layerId The ID for the layer to get the annotations.
             * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
             * @param {integer=} params.scale The requested scale for the image.
             * @param {string=} params.source String to identify the originator of this request.
             * @param {string} params.volumeId The volume to retrieve annotations for.
             * @param {integer=} params.w The requested pixel width for any images. If width is provided height must also be provided.
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
                            '/books/v1/volumes/{volumeId}/layers/{layerId}/data/{annotationDataId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['volumeId', 'layerId', 'annotationDataId', 'contentVersion'],
                    pathParams: ['annotationDataId', 'layerId', 'volumeId'],
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
                            '/books/v1/volumes/{volumeId}/layers/{layerId}/data')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['volumeId', 'layerId', 'contentVersion'],
                    pathParams: ['layerId', 'volumeId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        volumeAnnotations: {
            /**
             * books.layers.volumeAnnotations.get
             * @desc Gets the volume annotation.
             * @alias books.layers.volumeAnnotations.get
             * @memberOf! books(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.annotationId The ID of the volume annotation to retrieve.
             * @param {string} params.layerId The ID for the layer to get the annotations.
             * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
             * @param {string=} params.source String to identify the originator of this request.
             * @param {string} params.volumeId The volume to retrieve annotations for.
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
                            '/books/v1/volumes/{volumeId}/layers/{layerId}/annotations/{annotationId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['volumeId', 'layerId', 'annotationId'],
                    pathParams: ['annotationId', 'layerId', 'volumeId'],
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
                        url: (rootUrl + '/books/v1/volumes/{volumeId}/layers/{layerId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['volumeId', 'layerId', 'contentVersion'],
                    pathParams: ['layerId', 'volumeId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.myconfig = {
        /**
         * books.myconfig.getUserSettings
         * @desc Gets the current settings for the user.
         * @alias books.myconfig.getUserSettings
         * @memberOf! books(v1)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getUserSettings: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/books/v1/myconfig/getUserSettings')
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
        releaseDownloadAccess: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/books/v1/myconfig/releaseDownloadAccess')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['volumeIds', 'cpksver'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        requestAccess: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/books/v1/myconfig/requestAccess')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['source', 'volumeId', 'nonce', 'cpksver'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        syncVolumeLicenses: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/books/v1/myconfig/syncVolumeLicenses')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['source', 'nonce', 'cpksver'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        updateUserSettings: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/books/v1/myconfig/updateUserSettings')
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
    self.mylibrary = {
        annotations: {
            /**
             * books.mylibrary.annotations.delete
             * @desc Deletes an annotation.
             * @alias books.mylibrary.annotations.delete
             * @memberOf! books(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.annotationId The ID for the annotation to delete.
             * @param {string=} params.source String to identify the originator of this request.
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
                        url: (rootUrl + '/books/v1/mylibrary/annotations/{annotationId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['annotationId'],
                    pathParams: ['annotationId'],
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
                        url: (rootUrl + '/books/v1/mylibrary/annotations')
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
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/books/v1/mylibrary/annotations')
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
            summary: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/books/v1/mylibrary/annotations/summary')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['layerIds', 'volumeId'],
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
                        url: (rootUrl + '/books/v1/mylibrary/annotations/{annotationId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['annotationId'],
                    pathParams: ['annotationId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        bookshelves: {
            /**
             * books.mylibrary.bookshelves.addVolume
             * @desc Adds a volume to a bookshelf.
             * @alias books.mylibrary.bookshelves.addVolume
             * @memberOf! books(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.reason The reason for which the book is added to the library.
             * @param {string} params.shelf ID of bookshelf to which to add a volume.
             * @param {string=} params.source String to identify the originator of this request.
             * @param {string} params.volumeId ID of volume to add.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            addVolume: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/books/v1/mylibrary/bookshelves/{shelf}/addVolume')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['shelf', 'volumeId'],
                    pathParams: ['shelf'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            clearVolumes: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/books/v1/mylibrary/bookshelves/{shelf}/clearVolumes')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['shelf'],
                    pathParams: ['shelf'],
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
                        url: (rootUrl + '/books/v1/mylibrary/bookshelves/{shelf}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['shelf'],
                    pathParams: ['shelf'],
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
                        url: (rootUrl + '/books/v1/mylibrary/bookshelves')
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
            moveVolume: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/books/v1/mylibrary/bookshelves/{shelf}/moveVolume')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['shelf', 'volumeId', 'volumePosition'],
                    pathParams: ['shelf'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            removeVolume: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/books/v1/mylibrary/bookshelves/{shelf}/removeVolume')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['shelf', 'volumeId'],
                    pathParams: ['shelf'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            volumes: {
                /**
                 * books.mylibrary.bookshelves.volumes.list
                 * @desc Gets volume information for volumes on a bookshelf.
                 * @alias books.mylibrary.bookshelves.volumes.list
                 * @memberOf! books(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
                 * @param {integer=} params.maxResults Maximum number of results to return
                 * @param {string=} params.projection Restrict information returned to a set of selected fields.
                 * @param {string=} params.q Full-text search query string in this bookshelf.
                 * @param {string} params.shelf The bookshelf ID or name retrieve volumes for.
                 * @param {boolean=} params.showPreorders Set to true to show pre-ordered books. Defaults to false.
                 * @param {string=} params.source String to identify the originator of this request.
                 * @param {integer=} params.startIndex Index of the first element to return (starts at 0)
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
                                '/books/v1/mylibrary/bookshelves/{shelf}/volumes')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['shelf'],
                        pathParams: ['shelf'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            }
        },
        readingpositions: {
            /**
             * books.mylibrary.readingpositions.get
             * @desc Retrieves my reading position information for a volume.
             * @alias books.mylibrary.readingpositions.get
             * @memberOf! books(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.contentVersion Volume content version for which this reading position is requested.
             * @param {string=} params.source String to identify the originator of this request.
             * @param {string} params.volumeId ID of volume for which to retrieve a reading position.
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
                            '/books/v1/mylibrary/readingpositions/{volumeId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['volumeId'],
                    pathParams: ['volumeId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            setPosition: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/books/v1/mylibrary/readingpositions/{volumeId}/setPosition')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['volumeId', 'timestamp', 'position'],
                    pathParams: ['volumeId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.notification = {
        /**
         * books.notification.get
         * @desc Returns notification details for a given notification id.
         * @alias books.notification.get
         * @memberOf! books(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body.
         * @param {string} params.notification_id String to identify the notification.
         * @param {string=} params.source String to identify the originator of this request.
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
                    url: (rootUrl + '/books/v1/notification/get')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['notification_id'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.onboarding = {
        /**
         * books.onboarding.listCategories
         * @desc List categories for onboarding experience.
         * @alias books.onboarding.listCategories
         * @memberOf! books(v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listCategories: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/books/v1/onboarding/listCategories')
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
        listCategoryVolumes: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/books/v1/onboarding/listCategoryVolumes')
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
    self.personalizedstream = {
        /**
         * books.personalizedstream.get
         * @desc Returns a stream of personalized book clusters
         * @alias books.personalizedstream.get
         * @memberOf! books(v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
         * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
         * @param {string=} params.source String to identify the originator of this request.
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
                    url: (rootUrl + '/books/v1/personalizedstream/get')
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
    self.promooffer = {
        /**
         * books.promooffer.accept
         * @alias books.promooffer.accept
         * @memberOf! books(v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.androidId device android_id
         * @param {string=} params.device device device
         * @param {string=} params.manufacturer device manufacturer
         * @param {string=} params.model device model
         * @param {string=} params.offerId
         * @param {string=} params.product device product
         * @param {string=} params.serial device serial
         * @param {string=} params.volumeId Volume id to exercise the offer
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        accept: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/books/v1/promooffer/accept')
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
        dismiss: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/books/v1/promooffer/dismiss')
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
                    url: (rootUrl + '/books/v1/promooffer/get')
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
    self.series = {
        /**
         * books.series.get
         * @desc Returns Series metadata for the given series ids.
         * @alias books.series.get
         * @memberOf! books(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.series_id String that identifies the series
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
                    url: (rootUrl + '/books/v1/series/get')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['series_id'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        membership: {
            /**
             * books.series.membership.get
             * @desc Returns Series membership data given the series id.
             * @alias books.series.membership.get
             * @memberOf! books(v1)
             *
             * @param {object} params Parameters for request
             * @param {integer=} params.page_size Number of maximum results per page to be included in the response.
             * @param {string=} params.page_token The value of the nextToken from the previous page.
             * @param {string} params.series_id String that identifies the series
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
                        url: (rootUrl + '/books/v1/series/membership/get')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['series_id'],
                    pathParams: [],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.volumes = {
        /**
         * books.volumes.get
         * @desc Gets volume information for a single volume.
         * @alias books.volumes.get
         * @memberOf! books(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
         * @param {boolean=} params.includeNonComicsSeries Set to true to include non-comics series. Defaults to false.
         * @param {string=} params.partner Brand results for partner ID.
         * @param {string=} params.projection Restrict information returned to a set of selected fields.
         * @param {string=} params.source String to identify the originator of this request.
         * @param {boolean=} params.user_library_consistent_read
         * @param {string} params.volumeId ID of volume to retrieve.
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
                    url: (rootUrl + '/books/v1/volumes/{volumeId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['volumeId'],
                pathParams: ['volumeId'],
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
                    url: (rootUrl + '/books/v1/volumes').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['q'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        associated: {
            /**
             * books.volumes.associated.list
             * @desc Return a list of associated books.
             * @alias books.volumes.associated.list
             * @memberOf! books(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.association Association type.
             * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
             * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
             * @param {string=} params.source String to identify the originator of this request.
             * @param {string} params.volumeId ID of the source volume.
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
                        url: (rootUrl + '/books/v1/volumes/{volumeId}/associated')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['volumeId'],
                    pathParams: ['volumeId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        mybooks: {
            /**
             * books.volumes.mybooks.list
             * @desc Return a list of books in My Library.
             * @alias books.volumes.mybooks.list
             * @memberOf! books(v1)
             *
             * @param {object=} params Parameters for request
             * @param {string=} params.acquireMethod How the book was acquired
             * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
             * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
             * @param {integer=} params.maxResults Maximum number of results to return.
             * @param {string=} params.processingState The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
             * @param {string=} params.source String to identify the originator of this request.
             * @param {integer=} params.startIndex Index of the first result to return (starts at 0)
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
                        url: (rootUrl + '/books/v1/volumes/mybooks')
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
        },
        recommended: {
            /**
             * books.volumes.recommended.list
             * @desc Return a list of recommended books for the current user.
             * @alias books.volumes.recommended.list
             * @memberOf! books(v1)
             *
             * @param {object=} params Parameters for request
             * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
             * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
             * @param {string=} params.source String to identify the originator of this request.
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
                        url: (rootUrl + '/books/v1/volumes/recommended')
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
            rate: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/books/v1/volumes/recommended/rate')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['rating', 'volumeId'],
                    pathParams: [],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        useruploaded: {
            /**
             * books.volumes.useruploaded.list
             * @desc Return a list of books uploaded by the current user.
             * @alias books.volumes.useruploaded.list
             * @memberOf! books(v1)
             *
             * @param {object=} params Parameters for request
             * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
             * @param {integer=} params.maxResults Maximum number of results to return.
             * @param {string=} params.processingState The processing state of the user uploaded volumes to be returned.
             * @param {string=} params.source String to identify the originator of this request.
             * @param {integer=} params.startIndex Index of the first result to return (starts at 0)
             * @param {string=} params.volumeId The ids of the volumes to be returned. If not specified all that match the processingState are returned.
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
                        url: (rootUrl + '/books/v1/volumes/useruploaded')
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
        }
    };
}
module.exports = Books;
//# sourceMappingURL=v1.js.map