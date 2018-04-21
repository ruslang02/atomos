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
 * Street View Publish API
 *
 * Publishes 360 photos to Google Maps, along with position, orientation, and
 * connectivity metadata. Apps can offer an interface for positioning,
 * connecting, and uploading user-generated Street View images.
 *
 * @example
 * const google = require('googleapis');
 * const streetviewpublish = google.streetviewpublish('v1');
 *
 * @namespace streetviewpublish
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Streetviewpublish
 */
function Streetviewpublish(options) {
    var self = this;
    self._options = options || {};
    self.photo = {
        /**
         * streetviewpublish.photo.create
         * @desc After the client finishes uploading the photo with the returned
         * UploadRef, CreatePhoto publishes the uploaded Photo to Street View on
         * Google Maps.  Currently, the only way to set heading, pitch, and roll in
         * CreatePhoto is through the [Photo Sphere XMP
         * metadata](https://developers.google.com/streetview/spherical-metadata) in
         * the photo bytes. The `pose.heading`, `pose.pitch`, `pose.roll`,
         * `pose.altitude`, and `pose.level` fields in Pose are ignored for
         * CreatePhoto.  This method returns the following error codes:  *
         * google.rpc.Code.INVALID_ARGUMENT if the request is malformed or if the
         * uploaded photo is not a 360 photo. * google.rpc.Code.NOT_FOUND if the
         * upload reference does not exist. * google.rpc.Code.RESOURCE_EXHAUSTED if
         * the account has reached the storage limit.
         * @alias streetviewpublish.photo.create
         * @memberOf! streetviewpublish(v1)
         *
         * @param {object} params Parameters for request
         * @param {streetviewpublish(v1).Photo} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photo').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
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
            var rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photo/{photoId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['photoId'],
                pathParams: ['photoId'],
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
            var rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photo/{photoId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['photoId'],
                pathParams: ['photoId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        startUpload: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photo:startUpload')
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
            var rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photo/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['id'],
                pathParams: ['id'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.photos = {
        /**
         * streetviewpublish.photos.batchDelete
         * @desc Deletes a list of Photos and their metadata.  Note that if
         * BatchDeletePhotos fails, either critical fields are missing or there was
         * an authentication error. Even if BatchDeletePhotos succeeds, there may
         * have been failures for single photos in the batch. These failures will be
         * specified in each PhotoResponse.status in
         * BatchDeletePhotosResponse.results. See DeletePhoto for specific failures
         * that can occur per photo.
         * @alias streetviewpublish.photos.batchDelete
         * @memberOf! streetviewpublish(v1)
         *
         * @param {object} params Parameters for request
         * @param {streetviewpublish(v1).BatchDeletePhotosRequest} params.resource Request body data
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
            var rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photos:batchDelete')
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
        batchGet: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photos:batchGet')
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
        batchUpdate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photos:batchUpdate')
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
            var rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photos').replace(/([^:]\/)\/+/g, '$1'),
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
module.exports = Streetviewpublish;
//# sourceMappingURL=v1.js.map