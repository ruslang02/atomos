"use strict";
// Copyright 2018, Google, LLC.
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
Object.defineProperty(exports, "__esModule", { value: true });
var generator_utils_1 = require("../scripts/generator_utils");
var apirequest_1 = require("./apirequest");
var Endpoint = /** @class */ (function () {
    function Endpoint(options) {
        this._options = options || {};
    }
    /**
     * Given a schema, add methods and resources to a target.
     *
     * @param {object} target The target to which to apply the schema.
     * @param {object} rootSchema The top-level schema, so we don't lose track of it
     * during recursion.
     * @param {object} schema The current schema from which to extract methods and
     * resources.
     * @param {object} context The context to add to each method.
     */
    Endpoint.prototype.applySchema = function (target, rootSchema, schema, context) {
        this.applyMethodsFromSchema(target, rootSchema, schema, context);
        if (schema.resources) {
            for (var resourceName in schema.resources) {
                if (schema.resources.hasOwnProperty(resourceName)) {
                    var resource = schema.resources[resourceName];
                    if (!target[resourceName]) {
                        target[resourceName] = {};
                    }
                    this.applySchema(target[resourceName], rootSchema, resource, context);
                }
            }
        }
    };
    /**
     * Given a schema, add methods to a target.
     *
     * @param {object} target The target to which to apply the methods.
     * @param {object} rootSchema The top-level schema, so we don't lose track of it
     * during recursion.
     * @param {object} schema The current schema from which to extract methods.
     * @param {object} context The context to add to each method.
     */
    Endpoint.prototype.applyMethodsFromSchema = function (target, rootSchema, schema, context) {
        if (schema.methods) {
            for (var name in schema.methods) {
                if (schema.methods.hasOwnProperty(name)) {
                    var method = schema.methods[name];
                    target[name] = this.makeMethod(rootSchema, method, context);
                }
            }
        }
    };
    /**
     * Given a method schema, add a method to a target.
     *
     * @param target The target to which to add the method.
     * @param schema The top-level schema that contains the rootUrl, etc.
     * @param method The method schema from which to generate the method.
     * @param context The context to add to the method.
     */
    Endpoint.prototype.makeMethod = function (schema, method, context) {
        var _this = this;
        return function (params, callback) {
            var schemaUrl = generator_utils_1.buildurl(schema.rootUrl + schema.servicePath + method.path);
            var parameters = {
                options: {
                    url: schemaUrl.substring(1, schemaUrl.length - 1),
                    method: method.httpMethod
                },
                params: params,
                requiredParams: method.parameterOrder || [],
                pathParams: _this.getPathParams(method.parameters),
                context: context
            };
            if (method.mediaUpload && method.mediaUpload.protocols &&
                method.mediaUpload.protocols.simple &&
                method.mediaUpload.protocols.simple.path) {
                var mediaUrl = generator_utils_1.buildurl(schema.rootUrl + method.mediaUpload.protocols.simple.path);
                parameters.mediaUrl = mediaUrl.substring(1, mediaUrl.length - 1);
            }
            return apirequest_1.createAPIRequest(parameters, callback);
        };
    };
    Endpoint.prototype.getPathParams = function (params) {
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
    return Endpoint;
}());
exports.Endpoint = Endpoint;
//# sourceMappingURL=endpoint.js.map