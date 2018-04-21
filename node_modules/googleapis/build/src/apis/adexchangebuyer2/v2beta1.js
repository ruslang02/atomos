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
 * Ad Exchange Buyer API II
 *
 * Accesses the latest features for managing Ad Exchange accounts, Real-Time
 * Bidding configurations and auction metrics, and Marketplace programmatic
 * deals.
 *
 * @example
 * const google = require('googleapis');
 * const adexchangebuyer2 = google.adexchangebuyer2('v2beta1');
 *
 * @namespace adexchangebuyer2
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Adexchangebuyer2
 */
function Adexchangebuyer2(options) {
    var self = this;
    self._options = options || {};
    self.accounts =
        {
            clients: {
                /**
                 * adexchangebuyer2.accounts.clients.create
                 * @desc Creates a new client buyer.
                 * @alias adexchangebuyer2.accounts.clients.create
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.accountId Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to create a client for. (required)
                 * @param {adexchangebuyer2(v2beta1).Client} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/accounts/{accountId}/clients')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['accountId'],
                        pathParams: ['accountId'],
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
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v2beta1/accounts/{accountId}/clients/{clientAccountId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'clientAccountId'],
                        pathParams: ['accountId', 'clientAccountId'],
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
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/accounts/{accountId}/clients')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId'],
                        pathParams: ['accountId'],
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
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v2beta1/accounts/{accountId}/clients/{clientAccountId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'clientAccountId'],
                        pathParams: ['accountId', 'clientAccountId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                invitations: {
                    /**
                     * adexchangebuyer2.accounts.clients.invitations.create
                     * @desc Creates and sends out an email invitation to access an Ad
                     * Exchange client buyer account.
                     * @alias adexchangebuyer2.accounts.clients.invitations.create
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
                     * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user should be associated with. (required)
                     * @param {adexchangebuyer2(v2beta1).ClientUserInvitation} params.resource Request body data
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
                        var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'clientAccountId'],
                            pathParams: ['accountId', 'clientAccountId'],
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
                        var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'clientAccountId', 'invitationId'],
                            pathParams: ['accountId', 'clientAccountId', 'invitationId'],
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
                        var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'clientAccountId'],
                            pathParams: ['accountId', 'clientAccountId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                users: {
                    /**
                     * adexchangebuyer2.accounts.clients.users.get
                     * @desc Retrieves an existing client user.
                     * @alias adexchangebuyer2.accounts.clients.users.get
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
                     * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
                     * @param {string} params.userId Numerical identifier of the user to retrieve. (required)
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
                        var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'clientAccountId', 'userId'],
                            pathParams: ['accountId', 'clientAccountId', 'userId'],
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
                        var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'clientAccountId'],
                            pathParams: ['accountId', 'clientAccountId'],
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
                        var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'clientAccountId', 'userId'],
                            pathParams: ['accountId', 'clientAccountId', 'userId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                }
            },
            creatives: {
                /**
                 * adexchangebuyer2.accounts.creatives.create
                 * @desc Creates a creative.
                 * @alias adexchangebuyer2.accounts.creatives.create
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.accountId The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
                 * @param {string=} params.accountId1 The account the creative belongs to.
                 * @param {string=} params.duplicateIdMode Indicates if multiple creatives can share an ID or not. Default is NO_DUPLICATES (one ID per creative).
                 * @param {adexchangebuyer2(v2beta1).Creative} params.resource Request body data
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
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['accountId'],
                        pathParams: ['accountId'],
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
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v2beta1/accounts/{accountId}/creatives/{creativeId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'creativeId'],
                        pathParams: ['accountId', 'creativeId'],
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
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId'],
                        pathParams: ['accountId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                stopWatching: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'creativeId'],
                        pathParams: ['accountId', 'creativeId'],
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
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v2beta1/accounts/{accountId}/creatives/{creativeId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'creativeId'],
                        pathParams: ['accountId', 'creativeId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                watch: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options = options || {};
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v2beta1/accounts/{accountId}/creatives/{creativeId}:watch')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'creativeId'],
                        pathParams: ['accountId', 'creativeId'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                dealAssociations: {
                    /**
                     * adexchangebuyer2.accounts.creatives.dealAssociations.add
                     * @desc Associate an existing deal with a creative.
                     * @alias adexchangebuyer2.accounts.creatives.dealAssociations.add
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.accountId The account the creative belongs to.
                     * @param {string} params.creativeId The ID of the creative associated with the deal.
                     * @param {adexchangebuyer2(v2beta1).AddDealAssociationRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    add: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'creativeId'],
                            pathParams: ['accountId', 'creativeId'],
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
                        var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'creativeId'],
                            pathParams: ['accountId', 'creativeId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    remove: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options = options || {};
                        var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['accountId', 'creativeId'],
                            pathParams: ['accountId', 'creativeId'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                }
            }
        };
    self.bidders = {
        accounts: {
            filterSets: {
                /**
                 * adexchangebuyer2.bidders.accounts.filterSets.create
                 * @desc Creates the specified filter set for the account with
                 * the given account ID.
                 * @alias adexchangebuyer2.bidders.accounts.filterSets.create
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {boolean=} params.isTransient Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
                 * @param {string} params.ownerName Name of the owner (bidder or account) of the filter set to be created. For example:  - For a bidder-level filter set for bidder 123: `bidders/123`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456`
                 * @param {adexchangebuyer2(v2beta1).FilterSet} params.resource Request body data
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
                    var rootUrl = options.rootUrl ||
                        'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{ownerName}/filterSets')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['ownerName'],
                        pathParams: ['ownerName'],
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
                    var rootUrl = options.rootUrl ||
                        'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{name}')
                                .replace(/([^:]\/)\/+/g, '$1'),
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
                    var rootUrl = options.rootUrl ||
                        'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{name}')
                                .replace(/([^:]\/)\/+/g, '$1'),
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
                    var rootUrl = options.rootUrl ||
                        'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{ownerName}/filterSets')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['ownerName'],
                        pathParams: ['ownerName'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                bidMetrics: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.bidMetrics.list
                     * @desc Lists all metrics that are measured in terms of
                     * number of bids.
                     * @alias
                     * adexchangebuyer2.bidders.accounts.filterSets.bidMetrics.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
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
                        var rootUrl = options.rootUrl ||
                            'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/{filterSetName}/bidMetrics')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName'],
                            pathParams: ['filterSetName'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                bidResponseErrors: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.bidResponseErrors.list
                     * @desc List all errors that occurred in bid responses, with
                     * the number of bid responses affected for each reason.
                     * @alias
                     * adexchangebuyer2.bidders.accounts.filterSets.bidResponseErrors.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
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
                        var rootUrl = options.rootUrl ||
                            'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/{filterSetName}/bidResponseErrors')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName'],
                            pathParams: ['filterSetName'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                bidResponsesWithoutBids: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.bidResponsesWithoutBids.list
                     * @desc List all reasons for which bid responses were
                     * considered to have no applicable bids, with the number of
                     * bid responses affected for each reason.
                     * @alias
                     * adexchangebuyer2.bidders.accounts.filterSets.bidResponsesWithoutBids.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
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
                        var rootUrl = options.rootUrl ||
                            'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/{filterSetName}/bidResponsesWithoutBids')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName'],
                            pathParams: ['filterSetName'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                filteredBidRequests: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.filteredBidRequests.list
                     * @desc List all reasons that caused a bid request not to be
                     * sent for an impression, with the number of bid requests not
                     * sent for each reason.
                     * @alias
                     * adexchangebuyer2.bidders.accounts.filterSets.filteredBidRequests.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
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
                        var rootUrl = options.rootUrl ||
                            'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/{filterSetName}/filteredBidRequests')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName'],
                            pathParams: ['filterSetName'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                filteredBids: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.list
                     * @desc List all reasons for which bids were filtered, with
                     * the number of bids filtered for each reason.
                     * @alias
                     * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
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
                        var rootUrl = options.rootUrl ||
                            'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/{filterSetName}/filteredBids')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName'],
                            pathParams: ['filterSetName'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    },
                    creatives: {
                        /**
                         * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.creatives.list
                         * @desc List all creatives associated with a specific
                         * reason for which bids were filtered, with the number of
                         * bids filtered for each creative.
                         * @alias
                         * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.creatives.list
                         * @memberOf! adexchangebuyer2(v2beta1)
                         *
                         * @param {object} params Parameters for request
                         * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes).
                         * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                         * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
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
                            var rootUrl = options.rootUrl ||
                                'https://adexchangebuyer.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/creatives')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['filterSetName', 'creativeStatusId'],
                                pathParams: ['creativeStatusId', 'filterSetName'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    },
                    details: {
                        /**
                         * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.details.list
                         * @desc List all details associated with a specific reason
                         * for which bids were filtered, with the number of bids
                         * filtered for each detail.
                         * @alias
                         * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.details.list
                         * @memberOf! adexchangebuyer2(v2beta1)
                         *
                         * @param {object} params Parameters for request
                         * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
                         * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                         * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
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
                            var rootUrl = options.rootUrl ||
                                'https://adexchangebuyer.googleapis.com/';
                            var parameters = {
                                options: Object.assign({
                                    url: (rootUrl +
                                        '/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/details')
                                        .replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['filterSetName', 'creativeStatusId'],
                                pathParams: ['creativeStatusId', 'filterSetName'],
                                context: self
                            };
                            return apirequest_1.createAPIRequest(parameters, callback);
                        }
                    }
                },
                impressionMetrics: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.impressionMetrics.list
                     * @desc Lists all metrics that are measured in terms of
                     * number of impressions.
                     * @alias
                     * adexchangebuyer2.bidders.accounts.filterSets.impressionMetrics.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
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
                        var rootUrl = options.rootUrl ||
                            'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/{filterSetName}/impressionMetrics')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName'],
                            pathParams: ['filterSetName'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                losingBids: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.losingBids.list
                     * @desc List all reasons for which bids lost in the auction,
                     * with the number of bids that lost for each reason.
                     * @alias
                     * adexchangebuyer2.bidders.accounts.filterSets.losingBids.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
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
                        var rootUrl = options.rootUrl ||
                            'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/{filterSetName}/losingBids')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName'],
                            pathParams: ['filterSetName'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                nonBillableWinningBids: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.nonBillableWinningBids.list
                     * @desc List all reasons for which winning bids were not
                     * billable, with the number of bids not billed for each
                     * reason.
                     * @alias
                     * adexchangebuyer2.bidders.accounts.filterSets.nonBillableWinningBids.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
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
                        var rootUrl = options.rootUrl ||
                            'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/{filterSetName}/nonBillableWinningBids')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName'],
                            pathParams: ['filterSetName'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                }
            }
        },
        filterSets: {
            /**
             * adexchangebuyer2.bidders.filterSets.create
             * @desc Creates the specified filter set for the account with the given
             * account ID.
             * @alias adexchangebuyer2.bidders.filterSets.create
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {boolean=} params.isTransient Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
             * @param {string} params.ownerName Name of the owner (bidder or account) of the filter set to be created. For example:  - For a bidder-level filter set for bidder 123: `bidders/123`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456`
             * @param {adexchangebuyer2(v2beta1).FilterSet} params.resource Request body data
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
                var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{ownerName}/filterSets')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['ownerName'],
                    pathParams: ['ownerName'],
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
                var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{ownerName}/filterSets')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['ownerName'],
                    pathParams: ['ownerName'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            bidMetrics: {
                /**
                 * adexchangebuyer2.bidders.filterSets.bidMetrics.list
                 * @desc Lists all metrics that are measured in terms of number of bids.
                 * @alias adexchangebuyer2.bidders.filterSets.bidMetrics.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
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
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{filterSetName}/bidMetrics')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['filterSetName'],
                        pathParams: ['filterSetName'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            },
            bidResponseErrors: {
                /**
                 * adexchangebuyer2.bidders.filterSets.bidResponseErrors.list
                 * @desc List all errors that occurred in bid responses, with the number
                 * of bid responses affected for each reason.
                 * @alias adexchangebuyer2.bidders.filterSets.bidResponseErrors.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
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
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{filterSetName}/bidResponseErrors')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['filterSetName'],
                        pathParams: ['filterSetName'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            },
            bidResponsesWithoutBids: {
                /**
                 * adexchangebuyer2.bidders.filterSets.bidResponsesWithoutBids.list
                 * @desc List all reasons for which bid responses were considered to
                 * have no applicable bids, with the number of bid responses affected
                 * for each reason.
                 * @alias
                 * adexchangebuyer2.bidders.filterSets.bidResponsesWithoutBids.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
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
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v2beta1/{filterSetName}/bidResponsesWithoutBids')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['filterSetName'],
                        pathParams: ['filterSetName'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            },
            filteredBidRequests: {
                /**
                 * adexchangebuyer2.bidders.filterSets.filteredBidRequests.list
                 * @desc List all reasons that caused a bid request not to be sent for
                 * an impression, with the number of bid requests not sent for each
                 * reason.
                 * @alias adexchangebuyer2.bidders.filterSets.filteredBidRequests.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
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
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{filterSetName}/filteredBidRequests')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['filterSetName'],
                        pathParams: ['filterSetName'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            },
            filteredBids: {
                /**
                 * adexchangebuyer2.bidders.filterSets.filteredBids.list
                 * @desc List all reasons for which bids were filtered, with the number
                 * of bids filtered for each reason.
                 * @alias adexchangebuyer2.bidders.filterSets.filteredBids.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
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
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{filterSetName}/filteredBids')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['filterSetName'],
                        pathParams: ['filterSetName'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                },
                creatives: {
                    /**
                     * adexchangebuyer2.bidders.filterSets.filteredBids.creatives.list
                     * @desc List all creatives associated with a specific reason for
                     * which bids were filtered, with the number of bids filtered for each
                     * creative.
                     * @alias
                     * adexchangebuyer2.bidders.filterSets.filteredBids.creatives.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes).
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
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
                        var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/creatives')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName', 'creativeStatusId'],
                            pathParams: ['creativeStatusId', 'filterSetName'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                },
                details: {
                    /**
                     * adexchangebuyer2.bidders.filterSets.filteredBids.details.list
                     * @desc List all details associated with a specific reason for which
                     * bids were filtered, with the number of bids filtered for each
                     * detail.
                     * @alias
                     * adexchangebuyer2.bidders.filterSets.filteredBids.details.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
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
                        var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        var parameters = {
                            options: Object.assign({
                                url: (rootUrl +
                                    '/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/details')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName', 'creativeStatusId'],
                            pathParams: ['creativeStatusId', 'filterSetName'],
                            context: self
                        };
                        return apirequest_1.createAPIRequest(parameters, callback);
                    }
                }
            },
            impressionMetrics: {
                /**
                 * adexchangebuyer2.bidders.filterSets.impressionMetrics.list
                 * @desc Lists all metrics that are measured in terms of number of
                 * impressions.
                 * @alias adexchangebuyer2.bidders.filterSets.impressionMetrics.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
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
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{filterSetName}/impressionMetrics')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['filterSetName'],
                        pathParams: ['filterSetName'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            },
            losingBids: {
                /**
                 * adexchangebuyer2.bidders.filterSets.losingBids.list
                 * @desc List all reasons for which bids lost in the auction, with the
                 * number of bids that lost for each reason.
                 * @alias adexchangebuyer2.bidders.filterSets.losingBids.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
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
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{filterSetName}/losingBids')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['filterSetName'],
                        pathParams: ['filterSetName'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            },
            nonBillableWinningBids: {
                /**
                 * adexchangebuyer2.bidders.filterSets.nonBillableWinningBids.list
                 * @desc List all reasons for which winning bids were not billable, with
                 * the number of bids not billed for each reason.
                 * @alias
                 * adexchangebuyer2.bidders.filterSets.nonBillableWinningBids.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
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
                    var rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    var parameters = {
                        options: Object.assign({
                            url: (rootUrl +
                                '/v2beta1/{filterSetName}/nonBillableWinningBids')
                                .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['filterSetName'],
                        pathParams: ['filterSetName'],
                        context: self
                    };
                    return apirequest_1.createAPIRequest(parameters, callback);
                }
            }
        }
    };
}
module.exports = Adexchangebuyer2;
//# sourceMappingURL=v2beta1.js.map