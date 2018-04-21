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
 * Google Sheets API
 *
 * Reads and writes Google Sheets.
 *
 * @example
 * const google = require('googleapis');
 * const sheets = google.sheets('v4');
 *
 * @namespace sheets
 * @type {Function}
 * @version v4
 * @variation v4
 * @param {object=} options Options for Sheets
 */
function Sheets(options) {
    var self = this;
    self._options = options || {};
    self.spreadsheets = {
        /**
         * sheets.spreadsheets.batchUpdate
         * @desc Applies one or more updates to the spreadsheet.  Each request is
         * validated before being applied. If any request is not valid then the
         * entire request will fail and nothing will be applied.  Some requests have
         * replies to give you some information about how they are applied. The
         * replies will mirror the requests.  For example, if you applied 4 updates
         * and the 3rd one had a reply, then the response will have 2 empty replies,
         * the actual reply, and another empty reply, in that order.  Due to the
         * collaborative nature of spreadsheets, it is not guaranteed that the
         * spreadsheet will reflect exactly your changes after this completes,
         * however it is guaranteed that the updates in the request will be applied
         * together atomically. Your changes may be altered with respect to
         * collaborator changes. If there are no collaborators, the spreadsheet
         * should reflect your changes.
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Sheets API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/sheets
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var sheets = google.sheets('v4');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The spreadsheet to apply the updates to.
         *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
         * value.
         *
         *     resource: {
         *       // A list of updates to apply to the spreadsheet.
         *       // Requests will be applied in the order they are specified.
         *       // If any request is not valid, no requests will be applied.
         *       requests: [],  // TODO: Update placeholder value.
         *
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   sheets.spreadsheets.batchUpdate(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication
         * credentials. See
         *   //
         * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
         *   //
         *   // Authorize using one of the following scopes:
         *   //   'https://www.googleapis.com/auth/drive'
         *   //   'https://www.googleapis.com/auth/drive.file'
         *   //   'https://www.googleapis.com/auth/spreadsheets'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         * @alias sheets.spreadsheets.batchUpdate
         * @memberOf! sheets(v4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.spreadsheetId The spreadsheet to apply the updates to.
         * @param {sheets(v4).BatchUpdateSpreadsheetRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchUpdate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v4/spreadsheets/{spreadsheetId}:batchUpdate')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['spreadsheetId'],
                pathParams: ['spreadsheetId'],
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
            var rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v4/spreadsheets').replace(/([^:]\/)\/+/g, '$1'),
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
            var rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v4/spreadsheets/{spreadsheetId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['spreadsheetId'],
                pathParams: ['spreadsheetId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        getByDataFilter: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v4/spreadsheets/{spreadsheetId}:getByDataFilter')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['spreadsheetId'],
                pathParams: ['spreadsheetId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        developerMetadata: {
            /**
             * sheets.spreadsheets.developerMetadata.get
             * @desc Returns the developer metadata with the specified ID. The caller
             * must specify the spreadsheet ID and the developer metadata's unique
             * metadataId.
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Google Sheets API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/sheets
             * // 2. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var sheets = google.sheets('v4');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The ID of the spreadsheet to retrieve metadata from.
             *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
             * value.
             *
             *     // The ID of the developer metadata to retrieve.
             *     metadataId: 0,  // TODO: Update placeholder value.
             *
             *     auth: authClient,
             *   };
             *
             *   sheets.spreadsheets.developerMetadata.get(request, function(err,
             * response) { if (err) { console.error(err); return;
             *     }
             *
             *     // TODO: Change code below to process the `response` object:
             *     console.log(JSON.stringify(response, null, 2));
             *   });
             * });
             *
             * function authorize(callback) {
             *   // TODO: Change placeholder below to generate authentication
             * credentials. See
             *   //
             * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
             *   //
             *   // Authorize using one of the following scopes:
             *   //   'https://www.googleapis.com/auth/drive'
             *   //   'https://www.googleapis.com/auth/drive.file'
             *   //   'https://www.googleapis.com/auth/spreadsheets'
             *   var authClient = null;
             *
             *   if (authClient == null) {
             *     console.log('authentication failed');
             *     return;
             *   }
             *   callback(authClient);
             * }
             * @alias sheets.spreadsheets.developerMetadata.get
             * @memberOf! sheets(v4)
             *
             * @param {object} params Parameters for request
             * @param {integer} params.metadataId The ID of the developer metadata to retrieve.
             * @param {string} params.spreadsheetId The ID of the spreadsheet to retrieve metadata from.
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
                var rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId', 'metadataId'],
                    pathParams: ['metadataId', 'spreadsheetId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            search: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v4/spreadsheets/{spreadsheetId}/developerMetadata:search')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId'],
                    pathParams: ['spreadsheetId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        sheets: {
            /**
             * sheets.spreadsheets.sheets.copyTo
             * @desc Copies a single sheet from a spreadsheet to another spreadsheet.
             * Returns the properties of the newly created sheet.
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Google Sheets API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/sheets
             * // 2. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var sheets = google.sheets('v4');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The ID of the spreadsheet containing the sheet to copy.
             *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
             * value.
             *
             *     // The ID of the sheet to copy.
             *     sheetId: 0,  // TODO: Update placeholder value.
             *
             *     resource: {
             *       // The ID of the spreadsheet to copy the sheet to.
             *       destinationSpreadsheetId: '',  // TODO: Update placeholder value.
             *
             *       // TODO: Add desired properties to the request body.
             *     },
             *
             *     auth: authClient,
             *   };
             *
             *   sheets.spreadsheets.sheets.copyTo(request, function(err, response) {
             *     if (err) {
             *       console.error(err);
             *       return;
             *     }
             *
             *     // TODO: Change code below to process the `response` object:
             *     console.log(JSON.stringify(response, null, 2));
             *   });
             * });
             *
             * function authorize(callback) {
             *   // TODO: Change placeholder below to generate authentication
             * credentials. See
             *   //
             * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
             *   //
             *   // Authorize using one of the following scopes:
             *   //   'https://www.googleapis.com/auth/drive'
             *   //   'https://www.googleapis.com/auth/drive.file'
             *   //   'https://www.googleapis.com/auth/spreadsheets'
             *   var authClient = null;
             *
             *   if (authClient == null) {
             *     console.log('authentication failed');
             *     return;
             *   }
             *   callback(authClient);
             * }
             * @alias sheets.spreadsheets.sheets.copyTo
             * @memberOf! sheets(v4)
             *
             * @param {object} params Parameters for request
             * @param {integer} params.sheetId The ID of the sheet to copy.
             * @param {string} params.spreadsheetId The ID of the spreadsheet containing the sheet to copy.
             * @param {sheets(v4).CopySheetToAnotherSpreadsheetRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            copyTo: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId', 'sheetId'],
                    pathParams: ['sheetId', 'spreadsheetId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        values: {
            /**
             * sheets.spreadsheets.values.append
             * @desc Appends values to a spreadsheet. The input range is used to
             * search for existing data and find a "table" within that range. Values
             * will be appended to the next row of the table, starting with the first
             * column of the table. See the
             * [guide](/sheets/api/guides/values#appending_values) and [sample
             * code](/sheets/api/samples/writing#append_values) for specific details
             * of how tables are detected and data is appended.  The caller must
             * specify the spreadsheet ID, range, and a valueInputOption.  The
             * `valueInputOption` only controls how the input data will be added to
             * the sheet (column-wise or row-wise), it does not influence what cell
             * the data starts being written to.
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Google Sheets API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/sheets
             * // 2. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var sheets = google.sheets('v4');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The ID of the spreadsheet to update.
             *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
             * value.
             *
             *     // The A1 notation of a range to search for a logical table of
             * data.
             *     // Values will be appended after the last row of the table.
             *     range: 'my-range',  // TODO: Update placeholder value.
             *
             *     // How the input data should be interpreted.
             *     valueInputOption: '',  // TODO: Update placeholder value.
             *
             *     // How the input data should be inserted.
             *     insertDataOption: '',  // TODO: Update placeholder value.
             *
             *     resource: {
             *       // TODO: Add desired properties to the request body.
             *     },
             *
             *     auth: authClient,
             *   };
             *
             *   sheets.spreadsheets.values.append(request, function(err, response) {
             *     if (err) {
             *       console.error(err);
             *       return;
             *     }
             *
             *     // TODO: Change code below to process the `response` object:
             *     console.log(JSON.stringify(response, null, 2));
             *   });
             * });
             *
             * function authorize(callback) {
             *   // TODO: Change placeholder below to generate authentication
             * credentials. See
             *   //
             * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
             *   //
             *   // Authorize using one of the following scopes:
             *   //   'https://www.googleapis.com/auth/drive'
             *   //   'https://www.googleapis.com/auth/drive.file'
             *   //   'https://www.googleapis.com/auth/spreadsheets'
             *   var authClient = null;
             *
             *   if (authClient == null) {
             *     console.log('authentication failed');
             *     return;
             *   }
             *   callback(authClient);
             * }
             * @alias sheets.spreadsheets.values.append
             * @memberOf! sheets(v4)
             *
             * @param {object} params Parameters for request
             * @param {boolean=} params.includeValuesInResponse Determines if the update response should include the values of the cells that were appended. By default, responses do not include the updated values.
             * @param {string=} params.insertDataOption How the input data should be inserted.
             * @param {string} params.range The A1 notation of a range to search for a logical table of data. Values will be appended after the last row of the table.
             * @param {string=} params.responseDateTimeRenderOption Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
             * @param {string=} params.responseValueRenderOption Determines how values in the response should be rendered. The default render option is ValueRenderOption.FORMATTED_VALUE.
             * @param {string} params.spreadsheetId The ID of the spreadsheet to update.
             * @param {string=} params.valueInputOption How the input data should be interpreted.
             * @param {sheets(v4).ValueRange} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            append: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v4/spreadsheets/{spreadsheetId}/values/{range}:append')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId', 'range'],
                    pathParams: ['range', 'spreadsheetId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            batchClear: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v4/spreadsheets/{spreadsheetId}/values:batchClear')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId'],
                    pathParams: ['spreadsheetId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            batchClearByDataFilter: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId'],
                    pathParams: ['spreadsheetId'],
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
                var rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v4/spreadsheets/{spreadsheetId}/values:batchGet')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId'],
                    pathParams: ['spreadsheetId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            batchGetByDataFilter: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId'],
                    pathParams: ['spreadsheetId'],
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
                var rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v4/spreadsheets/{spreadsheetId}/values:batchUpdate')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId'],
                    pathParams: ['spreadsheetId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            batchUpdateByDataFilter: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId'],
                    pathParams: ['spreadsheetId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            clear: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v4/spreadsheets/{spreadsheetId}/values/{range}:clear')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId', 'range'],
                    pathParams: ['range', 'spreadsheetId'],
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
                var rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v4/spreadsheets/{spreadsheetId}/values/{range}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId', 'range'],
                    pathParams: ['range', 'spreadsheetId'],
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
                var rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/v4/spreadsheets/{spreadsheetId}/values/{range}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId', 'range'],
                    pathParams: ['range', 'spreadsheetId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
}
module.exports = Sheets;
//# sourceMappingURL=v4.js.map