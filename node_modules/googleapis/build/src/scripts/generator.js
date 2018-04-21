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
var minimist = require("minimist");
var mkdirp = require("mkdirp");
var nunjucks = require("nunjucks");
var Q = require("p-queue");
var path = require("path");
var pify = require("pify");
var url = require("url");
var util = require("util");
var generator_utils_1 = require("./generator_utils");
var argv = minimist(process.argv.slice(2));
var cliArgs = argv._;
var fsp = pify(fs);
var DISCOVERY_URL = argv['discovery-url'] ?
    argv['discovery-url'] :
    (cliArgs.length ? cliArgs[0] :
        'https://www.googleapis.com/discovery/v1/apis/');
var FRAGMENT_URL = 'https://storage.googleapis.com/apisnippets-staging/public/';
var srcPath = path.join(__dirname, '../../../src');
var TEMPLATES_DIR = path.join(srcPath, 'templates');
var API_TEMPLATE = path.join(TEMPLATES_DIR, 'api-endpoint.njk');
var INDEX_TEMPLATE = path.join(TEMPLATES_DIR, 'index.njk');
var RESERVED_PARAMS = ['resource', 'media', 'auth'];
var Generator = /** @class */ (function () {
    /**
     * Generator for generating API endpoints
     * @param options Options for generation
     */
    function Generator(options) {
        if (options === void 0) { options = {}; }
        this.transporter = new google_auth_library_1.DefaultTransporter();
        this.requestQueue = new Q({ concurrency: 50 });
        this.state = new Map();
        this.options = options;
        this.env = new nunjucks.Environment(new nunjucks.FileSystemLoader(TEMPLATES_DIR), { trimBlocks: true });
        this.env.addFilter('buildurl', generator_utils_1.buildurl);
        this.env.addFilter('oneLine', this.oneLine);
        this.env.addFilter('cleanComments', this.cleanComments);
        this.env.addFilter('getPathParams', this.getPathParams);
        this.env.addFilter('getSafeParamName', this.getSafeParamName);
        this.env.addFilter('cleanPaths', function (str) {
            return str ? str.replace(/\/\*\//gi, '/x/')
                .replace(/\/\*`/gi, '/x')
                .replace(/\*\//gi, 'x/')
                .replace(/\\n/gi, 'x/') :
                '';
        });
    }
    /**
     * A multi-line string is turned into one line.
     * @param str String to process
     * @return Single line string processed
     */
    Generator.prototype.oneLine = function (str) {
        return str ? str.replace(/\n/g, ' ') : '';
    };
    /**
     * Clean a string of comment tags.
     * @param str String to process
     * @return Single line string processed
     */
    Generator.prototype.cleanComments = function (str) {
        // Convert /* into /x and */ into x/
        return str ? str.replace(/\*\//g, 'x/').replace(/\/\*/g, '/x') : '';
    };
    Generator.prototype.getPathParams = function (params) {
        var pathParams = new Array();
        if (typeof params !== 'object') {
            params = {};
        }
        Object.keys(params).forEach(function (key) {
            if (params[key].location === 'path') {
                pathParams.push(key);
            }
        });
        return pathParams;
    };
    Generator.prototype.getSafeParamName = function (param) {
        if (RESERVED_PARAMS.indexOf(param) !== -1) {
            return param + '_';
        }
        return param;
    };
    /**
     * Add a requests to the rate limited queue.
     * @param opts Options to pass to the default transporter
     */
    Generator.prototype.request = function (opts) {
        var _this = this;
        return this.requestQueue.add(function () {
            return _this.transporter.request(opts);
        });
    };
    /**
     * Log output of generator. Works just like console.log.
     */
    Generator.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.options && this.options.debug) {
            console.log.apply(this, arguments);
        }
    };
    /**
     * Write to the state log, which is used for debugging.
     * @param id DiscoveryRestUrl of the endpoint to log
     * @param message
     */
    Generator.prototype.logResult = function (id, message) {
        if (!this.state.has(id)) {
            this.state.set(id, new Array());
        }
        this.state.get(id).push(message);
    };
    /**
     * Generate all APIs and write to files.
     */
    Generator.prototype.generateAllAPIs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var headers, res, apis, queue, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = this.options.includePrivate ? {} : { 'X-User-Ip': '0.0.0.0' };
                        return [4 /*yield*/, this.request({ url: DISCOVERY_URL, headers: headers })];
                    case 1:
                        res = _a.sent();
                        apis = res.data.items;
                        queue = new Q({ concurrency: 10 });
                        console.log("Generating " + apis.length + " APIs...");
                        queue.addAll(apis.map(function (api) {
                            return function () { return __awaiter(_this, void 0, void 0, function () {
                                var results, e_2;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            this.log('Generating API for %s...', api.id);
                                            this.logResult(api.discoveryRestUrl, 'Attempting first generateAPI call...');
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 3, , 4]);
                                            return [4 /*yield*/, this.generateAPI(api.discoveryRestUrl)];
                                        case 2:
                                            results = _a.sent();
                                            this.logResult(api.discoveryRestUrl, "GenerateAPI call success!");
                                            return [3 /*break*/, 4];
                                        case 3:
                                            e_2 = _a.sent();
                                            this.logResult(api.discoveryRestUrl, "GenerateAPI call failed with error: " + e_2 + ", moving on.");
                                            console.error("Failed to generate API: " + api.id);
                                            console.log(api.id + '\n-----------\n' +
                                                util.inspect(this.state.get(api.discoveryRestUrl), { maxArrayLength: null }) +
                                                '\n');
                                            return [3 /*break*/, 4];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); };
                        }));
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, queue.onIdle()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.generateIndex()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.log(util.inspect(this.state, { maxArrayLength: null }));
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Generator.prototype.generateIndex = function () {
        return __awaiter(this, void 0, void 0, function () {
            var apis, apisPath, indexPath, files, _i, files_1, file, filePath, files_2, _a, files_3, version, parts, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        apis = {};
                        apisPath = path.join(srcPath, 'apis');
                        indexPath = path.join(apisPath, 'index.ts');
                        return [4 /*yield*/, fsp.readdir(apisPath)];
                    case 1:
                        files = _b.sent();
                        _i = 0, files_1 = files;
                        _b.label = 2;
                    case 2:
                        if (!(_i < files_1.length)) return [3 /*break*/, 6];
                        file = files_1[_i];
                        filePath = path.join(apisPath, file);
                        return [4 /*yield*/, fsp.stat(filePath)];
                    case 3:
                        if (!(_b.sent()).isDirectory()) {
                            return [3 /*break*/, 5];
                        }
                        apis[file] = {};
                        return [4 /*yield*/, fsp.readdir(path.join(apisPath, file))];
                    case 4:
                        files_2 = _b.sent();
                        for (_a = 0, files_3 = files_2; _a < files_3.length; _a++) {
                            version = files_3[_a];
                            parts = path.parse(version);
                            if (!version.endsWith('.d.ts') && parts.ext === '.ts') {
                                apis[file][version] = parts.name;
                            }
                        }
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6:
                        result = this.env.render('index.njk', { apis: apis });
                        return [4 /*yield*/, fsp.writeFile(indexPath, result, { encoding: 'utf8' })];
                    case 7:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Given a discovery doc, parse it and recursively iterate over the various
     * embedded links.
     */
    Generator.prototype.getFragmentsForSchema = function (apiDiscoveryUrl, schema, apiPath, tasks) {
        var _this = this;
        if (schema.methods) {
            var _loop_1 = function (methodName) {
                if (schema.methods.hasOwnProperty(methodName)) {
                    var methodSchema_1 = schema.methods[methodName];
                    methodSchema_1.sampleUrl = apiPath + '.' + methodName + '.frag.json';
                    tasks.push(function () { return __awaiter(_this, void 0, void 0, function () {
                        var res, fragment, lines_1, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.logResult(apiDiscoveryUrl, "Making fragment request...");
                                    this.logResult(apiDiscoveryUrl, methodSchema_1.sampleUrl);
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, this.request({ url: methodSchema_1.sampleUrl })];
                                case 2:
                                    res = _a.sent();
                                    this.logResult(apiDiscoveryUrl, "Fragment request complete.");
                                    if (res.data && res.data.codeFragment &&
                                        res.data.codeFragment['Node.js']) {
                                        fragment = res.data.codeFragment['Node.js'].fragment;
                                        fragment = fragment.replace(/\/\*/gi, '/<');
                                        fragment = fragment.replace(/\*\//gi, '>/');
                                        fragment = fragment.replace(/`\*/gi, '`<');
                                        fragment = fragment.replace(/\*`/gi, '>`');
                                        lines_1 = fragment.split('\n');
                                        lines_1.forEach(function (line, i) {
                                            lines_1[i] = '*' + (line ? ' ' + lines_1[i] : '');
                                        });
                                        fragment = lines_1.join('\n');
                                        methodSchema_1.fragment = fragment;
                                    }
                                    return [3 /*break*/, 4];
                                case 3:
                                    err_1 = _a.sent();
                                    this.logResult(apiDiscoveryUrl, "Fragment request err: " + err_1);
                                    if (!err_1.message || err_1.message.indexOf('AccessDenied') === -1) {
                                        throw err_1;
                                    }
                                    this.logResult(apiDiscoveryUrl, 'Ignoring error.');
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); });
                }
            };
            for (var methodName in schema.methods) {
                _loop_1(methodName);
            }
        }
        if (schema.resources) {
            for (var resourceName in schema.resources) {
                if (schema.resources.hasOwnProperty(resourceName)) {
                    this.getFragmentsForSchema(apiDiscoveryUrl, schema.resources[resourceName], apiPath + '.' + resourceName, tasks);
                }
            }
        }
    };
    /**
     * Generate API file given discovery URL
     * @param apiDiscoveryUri URL or filename of discovery doc for API
     */
    Generator.prototype.generateAPI = function (apiDiscoveryUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var parts, file, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parts = url.parse(apiDiscoveryUrl);
                        if (!(apiDiscoveryUrl && !parts.protocol)) return [3 /*break*/, 3];
                        this.log('Reading from file ' + apiDiscoveryUrl);
                        return [4 /*yield*/, fsp.readFile(apiDiscoveryUrl, { encoding: 'utf-8' })];
                    case 1:
                        file = _a.sent();
                        return [4 /*yield*/, this.generate(apiDiscoveryUrl, JSON.parse(file))];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3:
                        this.logResult(apiDiscoveryUrl, "Starting discovery doc request...");
                        this.logResult(apiDiscoveryUrl, apiDiscoveryUrl);
                        return [4 /*yield*/, this.request({ url: apiDiscoveryUrl })];
                    case 4:
                        res = _a.sent();
                        return [4 /*yield*/, this.generate(apiDiscoveryUrl, res.data)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Generator.prototype.generate = function (apiDiscoveryUrl, schema) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, exportFilename, contents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logResult(apiDiscoveryUrl, "Discovery doc request complete.");
                        tasks = new Array();
                        this.getFragmentsForSchema(apiDiscoveryUrl, schema, "" + FRAGMENT_URL + schema.name + "/" + schema.version + "/0/" + schema.name, tasks);
                        exportFilename = path.join(srcPath, 'apis', schema.name, schema.version + '.ts');
                        this.logResult(apiDiscoveryUrl, "Generating templates...");
                        this.logResult(apiDiscoveryUrl, "Step 1...");
                        return [4 /*yield*/, Promise.all(tasks.map(function (t) { return t(); }))];
                    case 1:
                        _a.sent();
                        this.logResult(apiDiscoveryUrl, "Step 2...");
                        contents = this.env.render(API_TEMPLATE, { api: schema });
                        return [4 /*yield*/, pify(mkdirp)(path.dirname(exportFilename))];
                    case 2:
                        _a.sent();
                        this.logResult(apiDiscoveryUrl, "Step 3...");
                        return [4 /*yield*/, fsp.writeFile(exportFilename, contents, { encoding: 'utf8' })];
                    case 3:
                        _a.sent();
                        this.logResult(apiDiscoveryUrl, "Template generation complete.");
                        return [2 /*return*/, exportFilename];
                }
            });
        });
    };
    return Generator;
}());
exports.Generator = Generator;
//# sourceMappingURL=generator.js.map