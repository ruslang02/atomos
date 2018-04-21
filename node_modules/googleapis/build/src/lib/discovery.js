"use strict";
// Copyright 2014-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var google_auth_library_1 = require("google-auth-library");
var pify = require("pify");
var url = require("url");
var util = require("util");
var apirequest_1 = require("./apirequest");
var endpoint_1 = require("./endpoint");
var fsp = pify(fs);
var Discovery = /** @class */ (function () {
    /**
     * Discovery for discovering API endpoints
     *
     * @param options Options for discovery
     */
    function Discovery(options) {
        this.transporter = new google_auth_library_1.DefaultTransporter();
        this.options = options || {};
    }
    /**
     * Generate and Endpoint from an endpoint schema object.
     *
     * @param schema The schema from which to generate the Endpoint.
     * @return A function that creates an endpoint.
     */
    Discovery.prototype.makeEndpoint = function (schema) {
        return function (options) {
            var ep = new endpoint_1.Endpoint(options);
            ep.applySchema(ep, schema, schema, ep);
            return ep;
        };
    };
    /**
     * Log output of generator. Works just like console.log
     */
    Discovery.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.options && this.options.debug) {
            console.log.apply(this, arguments);
        }
    };
    /**
     * Generate all APIs and return as in-memory object.
     * @param discoveryUrl
     */
    Discovery.prototype.discoverAllAPIs = function (discoveryUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var headers, res, items, apis, versionIndex, apisIndex, _loop_1, _i, apis_1, set;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = this.options.includePrivate ? {} : { 'X-User-Ip': '0.0.0.0' };
                        return [4 /*yield*/, this.transporter.request({ url: discoveryUrl, headers: headers })];
                    case 1:
                        res = _a.sent();
                        items = res.data.items;
                        return [4 /*yield*/, Promise.all(items.map(function (api) { return __awaiter(_this, void 0, void 0, function () {
                                var endpointCreator;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.discoverAPI(api.discoveryRestUrl)];
                                        case 1:
                                            endpointCreator = _a.sent();
                                            return [2 /*return*/, { api: api, endpointCreator: endpointCreator }];
                                    }
                                });
                            }); }))];
                    case 2:
                        apis = _a.sent();
                        versionIndex = {};
                        apisIndex = {};
                        _loop_1 = function (set) {
                            if (!apisIndex[set.api.name]) {
                                versionIndex[set.api.name] = {};
                                apisIndex[set.api.name] = function (options) {
                                    var type = typeof options;
                                    var version;
                                    if (type === 'string') {
                                        version = options;
                                        options = {};
                                    }
                                    else if (type === 'object') {
                                        version = options.version;
                                        delete options.version;
                                    }
                                    else {
                                        throw new Error('Argument error: Accepts only string or object');
                                    }
                                    try {
                                        var endpointCreator = versionIndex[set.api.name][version];
                                        var ep = set.endpointCreator(options);
                                        // tslint:disable-next-line: no-any
                                        ep.google = _this; // for drive.google.transporter
                                        return Object.freeze(ep); // create new & freeze
                                    }
                                    catch (e) {
                                        throw new Error(util.format('Unable to load endpoint %s("%s"): %s', set.api.name, version, e.message));
                                    }
                                };
                            }
                            versionIndex[set.api.name][set.api.version] = set.endpointCreator;
                        };
                        for (_i = 0, apis_1 = apis; _i < apis_1.length; _i++) {
                            set = apis_1[_i];
                            _loop_1(set);
                        }
                        return [2 /*return*/, apisIndex];
                }
            });
        });
    };
    /**
     * Generate API file given discovery URL
     *
     * @param apiDiscoveryUrl URL or filename of discovery doc for API
     * @returns A promise that resolves with a function that creates the endpoint
     */
    Discovery.prototype.discoverAPI = function (apiDiscoveryUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var parts, file, res, options, url_1, parameters, pcr, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof apiDiscoveryUrl === 'string')) return [3 /*break*/, 5];
                        parts = url.parse(apiDiscoveryUrl);
                        if (!(apiDiscoveryUrl && !parts.protocol)) return [3 /*break*/, 2];
                        this.log('Reading from file ' + apiDiscoveryUrl);
                        return [4 /*yield*/, fsp.readFile(apiDiscoveryUrl, { encoding: 'utf8' })];
                    case 1:
                        file = _a.sent();
                        return [2 /*return*/, this.makeEndpoint(JSON.parse(file))];
                    case 2:
                        this.log('Requesting ' + apiDiscoveryUrl);
                        return [4 /*yield*/, this.transporter.request({ url: apiDiscoveryUrl })];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, this.makeEndpoint(res.data)];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        options = apiDiscoveryUrl;
                        this.log('Requesting ' + options.url);
                        url_1 = options.url;
                        delete options.url;
                        parameters = {
                            options: { url: url_1, method: 'GET' },
                            requiredParams: [],
                            pathParams: [],
                            params: options,
                            context: { google: { _options: {} }, _options: {} }
                        };
                        pcr = pify(apirequest_1.createAPIRequest);
                        return [4 /*yield*/, pcr(parameters)];
                    case 6:
                        res = _a.sent();
                        return [2 /*return*/, this.makeEndpoint(res.data)];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return Discovery;
}());
exports.Discovery = Discovery;
//# sourceMappingURL=discovery.js.map