"use strict";

/**
 * @module github
 */

var error = require("./error");
var Util = require("./util");
var Url = require("url");

/**
 *
 *  Copyright 2014 Robert Nelson
 *
 *  Copyright 2012 Cloud9 IDE, Inc.
 *
 *  This product includes software developed by
 *  Cloud9 IDE, Inc (http://c9.io).
 *
 *  Author: Mike de Boer <mike@c9.io>
 *
 *  Client can load any version of the github client API, with the
 *  requirement that a valid routes.json definition file is present in the
 *  `api/[VERSION]` directory and that the routes found in this file are
 *  implemented as well.
 *
 *  Upon instantiation of the Client class, the routes.json file is loaded
 *  from the API version specified in the configuration and, parsed and from it
 *  the routes for HTTP requests are extracted. For each HTTP endpoint to the
 *  HTTP server, a method is generated which accepts a Javascript Object
 *  with parameters and an optional callback to be invoked when the API request
 *  returns from the server or when the parameters could not be validated.
 *
 *  When an HTTP endpoint is processed and a method is generated as described
 *  above, Client also sets up parameter validation with the rules as
 *  defined in the routes.json. A full example that illustrates how this works
 *  is shown below:
 *
 *  First, we look at a listing of a sample routes.json routes definition file:
 *
 *  ```js
 *      {
 *          "defines": {
 *              "constants": {
 *                  "name": "Github",
 *                  "description": "A Node.JS module, which provides an object oriented wrapper for the GitHub v3 API.",
 *                  "protocol": "https",
 *                  "host": "api.github.com",
 *                  "port": 443,
 *                  "dateFormat": "YYYY-MM-DDTHH:MM:SSZ",
 *                  "requestFormat": "json"
 *              },
 *              "response-headers": [
 *                  "X-RateLimit-Limit",
 *                  "X-RateLimit-Remaining",
 *                  "Link"
 *              ],
 *              "params": {
 *                  "files": {
 *                      "type": "Json",
 *                      "required": true,
 *                      "validation": "",
 *                      "invalidmsg": "",
 *                      "description": "Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'"
 *                  },
 *                  "user": {
 *                      "type": "String",
 *                      "required": true,
 *                      "validation": "",
 *                      "invalidmsg": "",
 *                      "description": ""
 *                  },
 *                  "description": {
 *                      "type": "String",
 *                      "required": false,
 *                      "validation": "",
 *                      "invalidmsg": "",
 *                      "description": ""
 *                  },
 *                  "page": {
 *                      "type": "Number",
 *                      "required": false,
 *                      "validation": "^[0-9]+$",
 *                      "invalidmsg": "",
 *                      "description": "Page number of the results to fetch."
 *                  },
 *                  "per_page": {
 *                      "type": "Number",
 *                      "required": false,
 *                      "validation": "^[0-9]+$",
 *                      "invalidmsg": "",
 *                      "description": "A custom page size up to 100. Default is 30."
 *                  }
 *              }
 *          },
 *
 *          "gists": {
 *              "get-from-user": {
 *                  "url": ":user/gists",
 *                  "method": "GET",
 *                  "params": {
 *                      "$user": null,
 *                      "$page": null,
 *                      "$per_page": null
 *                  }
 *              },
 *
 *              "create": {
 *                  "url": "/gists",
 *                  "method": "POST",
 *                  "params": {
 *                      "$description": null,
 *                      "public": {
 *                          "type": "Boolean",
 *                          "required": true,
 *                          "validation": "",
 *                          "invalidmsg": "",
 *                          "description": ""
 *                      },
 *                      "$files": null
 *                  }
 *              }
 *          }
 *       }
 *  ```
 *
 *  You probably noticed that the definition is quite verbose and the decision
 *  for its design was made to be verbose whilst still allowing for basic variable
 *  definitions and substitions for request parameters.
 *
 *  There are two sections; 'defines' and 'gists' in this example.
 *
 *  The `defines` section contains a list of `constants` that will be used by the
 *  {@link module:github.Client} to make requests to the right URL that hosts the API.
 *  The `gists` section defines the endpoints for calls to the API server, for
 *  gists specifically in this example, but the other API sections are defined in
 *  the exact same way.
 *  These definitions are parsed and methods are created that the client can call
 *  to make an HTTP request to the server.
 *  there is one endpoint defined: .
 *  In this example, the endpoint `gists/get-from-user` will be exposed as a member
 *  on the {@link module:github.Client} object and may be invoked with
 *
 *  ```js
 *      client.getFromUser({
 *          "user": "bob"
 *      }, function(err, ret) {
 *          // do something with the result here.
 *      });
 *
 *      // or to fetch a specfic page:
 *      client.getFromUser({
 *          "user": "bob",
 *          "page": 2,
 *          "per_page": 100
 *      }, function(err, ret) {
 *          // do something with the result here.
 *      });
 *  ```
 *
 *  All the parameters as specified in the Object that is passed to the function
 *  as first argument, will be validated according to the rules in the `params`
 *  block of the route definition.
 *  Thus, in the case of the `user` parameter, according to the definition in
 *  the `params` block, it's a variable that first needs to be looked up in the
 *  `params` block of the `defines` section (at the top of the JSON file). Params
 *  that start with a `$` sign will be substituted with the param with the same
 *  name from the `defines/params` section.
 *  There we see that it is a required parameter (needs to hold a value). In other
 *  words, if the validation requirements are not met, an HTTP error is passed as
 *  first argument of the callback.
 *
 *  Implementation Notes: the `method` is NOT case sensitive, whereas `url` is.
 *  The `url` parameter also supports denoting parameters inside it as follows:
 *
 *  ```js
 *      "get-from-user": {
 *          "url": ":user/gists",
 *          "method": "GET"
 *          ...
 *      }
 *  ```
 * @name module:github.Client
 * @constructor
 * @param {Object} config Configuration
 * @param {String} config.version Github API version (ex. "3.0.0")
 * @param {Boolean} [config.debug] Enable debugging support
 * @param {String} [config.url] Path prefix, prepended to API URL
 * @param {String} [config.protocol] Protocol overrides default in routes.json
 * @param {String} [config.host] Host overrides default in routes.json
 * @param {String} [config.port] Port overrides default in routes.json
 * @param {Object} [config.agent] HTTP(S) Agent to use instead of global agent
 * @param {String} [config.timeout] Response timeout in ms
 * @param {Boolean} [config.rejectUnauthorized] Don't allow servers with self signed certs
 * @param {Object} [config.headers] Additional headers to add to all requests
 **/
var Client = module.exports = function Client(config) {
    this.config = config;
    this.debug = Util.isTrue(config.debug);
    this.version = config.version;

    this[this.version] = new (require("./api/v" + this.version))(this);

    this.setupRoutes();
};

(function() {
    /**
     *  Configures the routes as defined in a routes.json file of an API version
     *
     *  setupRoutes is invoked by the constructor, takes the
     *  contents of the JSON document that contains the definitions of all the
     *  available API routes and iterates over them.
     *
     *  It first recurses through each definition block until it reaches an API
     *  endpoint. It knows that an endpoint is found when the `url` and `param`
     *  definitions are found as a direct member of a definition block.
     *  Then the availability of an implementation by the API is checked; if it's
     *  not present, this means that a portion of the API as defined in the routes.json
     *  file is not implemented properly, thus an exception is thrown.
     *  After this check, a method is attached to the Client instance
     *  and becomes available for use. Inside this method, the parameter validation
     *  and typecasting is done, according to the definition of the parameters in
     *  the `params` block, upon invocation.
     *
     *  This mechanism ensures that the handlers ALWAYS receive normalized data
     *  that is of the correct format and type. JSON parameters are parsed, Strings
     *  are trimmed, Numbers and Floats are casted and checked for NaN after that.
     *
     *  Note: Query escaping for usage with SQL products is something that can be
     *  implemented additionally by adding an additional parameter type.
     *
     *  @name module:github.Client#setupRoutes
     *  @method
     *  @returns null
     **/
    this.setupRoutes = function() {
        var self = this;
        var api = this[this.version];
        var routes = api.routes;
        var defines = routes.defines;
        this.constants = defines.constants;
        delete routes.defines;

        var headers = this.constants["responseHeaders"];
        // cast header names to lowercase.
        if (headers && headers.length)
            this.constants["responseHeaders"] = headers.map(function(header) { return header.toLowerCase(); });

        function trim(s) {
            if (typeof s != "string")
                return s;
            return s.replace(/^[\s\t\r\n]+/, "").replace(/[\s\t\r\n]+$/, "");
        }

        function parseParams(msg, paramsStruct) {
            var params = Object.keys(paramsStruct);
            var paramName, def, value, type;
            for (var i = 0, l = params.length; i < l; ++i) {
                paramName = params[i];
                if (paramName.charAt(0) == "$") {
                    paramName = paramName.substr(1);
                    if (!defines.params[paramName]) {
                        throw new error.BadRequest("Invalid variable parameter name substitution; param '" +
                            paramName + "' not found in defines block", "fatal");
                    }
                    else
                        def = defines.params[paramName];
                }
                else
                    def = paramsStruct[paramName];

                value = (def.type && def.type.toLowerCase() == "binary") ? msg[paramName] : trim(msg[paramName]);

                if (typeof value != "boolean" && !value) {
                    // we don't need to validation for undefined parameter values
                    // that are not required.
                    if (!def.required)
                        continue;
                    throw new error.BadRequest("Empty value for parameter '" +
                        paramName + "': " + value);
                }

                // validate the value and type of parameter:
                if (def.validation) {
                    if (!new RegExp(def.validation).test(value)) {
                        throw new error.BadRequest("Invalid value for parameter '" +
                            paramName + "': " + value);
                    }
                }

                if (def.type) {
                    type = def.type.toLowerCase();
                    if (type == "number") {
                        value = parseInt(value, 10);
                        if (isNaN(value)) {
                            throw new error.BadRequest("Invalid value for parameter '" +
                                paramName + "': " + msg[paramName] + " is NaN");
                        }
                    }
                    else if (type == "float") {
                        value = parseFloat(value);
                        if (isNaN(value)) {
                            throw new error.BadRequest("Invalid value for parameter '" +
                                paramName + "': " + msg[paramName] + " is NaN");
                        }
                    }
                    else if (type == "json") {
                        if (typeof value == "string") {
                            try {
                                value = JSON.parse(value);
                            }
                            catch(ex) {
                                throw new error.BadRequest("JSON parse error of value for parameter '" +
                                    paramName + "': " + value);
                            }
                        }
                    }
                    else if (type == "date") {
                        value = new Date(value);
                    }
                }
                msg[paramName] = value;
            }
        }

        function prepareApi(struct, baseType) {
            if (!baseType)
                baseType = "";
            Object.keys(struct).forEach(function(routePart) {
                var block = struct[routePart];
                if (!block)
                    return;
                var messageType = baseType + "/" + routePart;
                if (block.url && block.params) {
                    // we ended up at an API definition part!
                    var endPoint = messageType.replace(/^[\/]+/g, "");
                    var parts = messageType.split("/");
                    var section = Util.toCamelCase(parts[1]);
                    parts.splice(0, 2);
                    var funcName = Util.toCamelCase(parts.join("-"));

                    if (!self[section]) {
                        self[section] = {};
                        // add a utility function 'getFooApi()', which returns the
                        // section to which functions are attached.
                        self[Util.toCamelCase("get-" + section + "-api")] = function() {
                            return self[section];
                        };
                    }

                    self[section][funcName] = function(msg, callback) {
                        try {
                            parseParams(msg, block.params);
                        }
                        catch (ex) {
                            // when the message was sent to the client, we can
                            // reply with the error directly.
                            api.sendError(ex, msg, block, callback);
                            if (self.debug)
                                Util.log(ex.message, "fatal");
                            // on error, there's no need to continue.
                            return;
                        }
                        api.handler(msg, block, callback);
                    };
                }
                else {
                    // recurse into this block next:
                    prepareApi(block, messageType);
                }
            });
        }

        prepareApi(routes);
    };

    /**
     *  Set an authentication method to have access to protected resources.
     *
     *  @example
     *
     *      // basic
     *      github.authenticate({
     *          type: "basic",
     *          username: "mikedeboertest",
     *          password: "test1324"
     *      });
     *
     *      // oauth
     *      github.authenticate({
     *          type: "oauth",
     *          token: "e5a4a27487c26e571892846366de023349321a73"
     *      });
     *
     *      // or client
     *      github.authenticate({
     *          type: "client",
     *          username: "client_id",
     *          password: "client_secret"
     *      });
     *
     *  @name module:github.Client#authenticate
     *  @method
     *  @returns null
     *  @param {Object} options Object containing the authentication type and credentials
     *  @param {String} options.type One of the following: `basic`, `oauth` or `client`
     *  @param {String} options.username Github username or client id
     *  @param {String} options.password Password to your account or client secret
     *  @param {String} options.token OAuth2 token
     **/
    this.authenticate = function(options) {
        if (!options) {
            this.auth = false;
            return;
        }
        if (!options.type || "basic|oauth|client".indexOf(options.type) === -1)
            throw new Error("Invalid authentication type, must be 'basic' or 'oauth'");
        if (options.type == "basic") {
            if (!options.username || !options.password)
                throw new Error("Basic authentication requires both a username and password to be set");
        } else if (options.type == "oauth") {
            if (!options.token)
                throw new Error("OAuth2 authentication requires a token to be set");
        } else if (options.type == "client") {
            if (!options.username || !options.password)
                throw new Error("Basic authentication requires both a username and password to be set");
        }

        this.auth = options;
    };

    function getPageLinks(link) {
        if (typeof link == "object" && (link.link || link.meta.link))
            link = link.link || link.meta.link;

        var links = {};
        if (typeof link != "string")
            return links;

        // link format:
        // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
        link.replace(/<([^>]*)>;\s*rel="([\w]*)\"/g, function(m, uri, type) {
            links[type] = uri;
        });
        return links;
    }

    /**
     *  Check if a request result contains a link to the next page
     *
     *  @name module:github.Client#hasNextPage
     *  @method
     *  @returns null
     *  @param {*} link response of a request or the contents of the Link header
     **/
    this.hasNextPage = function(link) {
        return getPageLinks(link).next;
    };

    /**
     *  Check if a request result contains a link to the previous page
     *
     *  @name module:github.Client#hasPreviousPage
     *  @method
     *  @returns null
     *  @param {*} link response of a request or the contents of the Link header
     **/
    this.hasPreviousPage = function(link) {
        return getPageLinks(link).prev;
    };

    /**
     *  Check if a request result contains a link to the last page
     *
     *  @name module:github.Client#hasLastPage
     *  @method
     *  @returns null
     *  @param {*} link response of a request or the contents of the Link header
     **/
    this.hasLastPage = function(link) {
        return getPageLinks(link).last;
    };

    /**
     *  Check if a request result contains a link to the first page
     *
     *  @name module:github.Client#hasFirstPage
     *  @method
     *  @returns null
     *  @param {*} link response of a request or the contents of the Link header
     **/
    this.hasFirstPage = function(link) {
        return getPageLinks(link).first;
    };

    function getPage(link, which, callback) {
        var url = getPageLinks(link)[which];
        if (!url)
            return callback(new error.NotFound("No " + which + " page found"));

        var api = this[this.version];
        var parsedUrl = Url.parse(url, true);
        var block = {
            url: parsedUrl.pathname,
            method: "GET",
            params: parsedUrl.query
        };
        this.httpSend(parsedUrl.query, block, function(err, res) {
            if (err)
                return api.sendError(err, parsedUrl.query, null, callback);

            var ret;
            try {
                ret = res.data && JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }

            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });

            if (callback)
                callback(null, ret);
        });
    }

    /**
     *  Get the next page, based on the contents of the `Link` header
     *
     *  @name module:github.Client#getNextPage
     *  @method
     *  @returns null
     *  @param {*} link response of a request or the contents of the Link header
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getNextPage = function(link, callback) {
        getPage.call(this, link, "next", callback);
    };

    /**
     *  Get the previous page, based on the contents of the `Link` header
     *
     *  @name module:github.Client#getPreviousPage
     *  @method
     *  @returns null
     *  @param {*} link response of a request or the contents of the Link header
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getPreviousPage = function(link, callback) {
        getPage.call(this, link, "prev", callback);
    };

    /**
     *  Get the last page, based on the contents of the `Link` header
     *
     *  @name module:github.Client#getLastPage
     *  @method
     *  @returns null
     *  @param {*} link response of a request or the contents of the Link header
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getLastPage = function(link, callback) {
        getPage.call(this, link, "last", callback);
    };

    /**
     *  Get the first page, based on the contents of the `Link` header
     *
     *  @name module:github.Client#getFirstPage
     *  @method
     *  @returns null
     *  @param {*} link response of a request or the contents of the Link header
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getFirstPage = function(link, callback) {
        getPage.call(this, link, "first", callback);
    };

    function getQueryAndUrl(msg, def, format) {
        var ret = {
            url: def.url,
            query: format == "json" ? {} : []
        };
        if (!def || !def.params)
            return ret;
        var url = def.url;
        Object.keys(def.params).forEach(function(paramName) {
            paramName = paramName.replace(/^[$]+/, "");
            if (!(paramName in msg))
                return;

            var isUrlParam = url.indexOf(":" + paramName) !== -1;
            var val;

            if (format == "json" || (format == "binary" && (paramName == "content" || paramName == "content_type"))) {
                val = msg[paramName];
            } else {
                if (typeof msg[paramName] == "object") {
                    try {
                        msg[paramName] = JSON.stringify(msg[paramName]);
                    }
                    catch (ex) {
                        return Util.log("httpSend: Error while converting object to JSON: "
                            + (ex.message || ex), "error");
                    }
                }

                val = encodeURIComponent(msg[paramName]);
            }

            if (isUrlParam) {
                url = url.replace(":" + paramName, val);
            }
            else {
                if (format == "json")
                    ret.query[paramName] = val;
                else if (format == "binary") {
                    if (paramName == "content_type")
                        ret.query.content_type = val;
                    else if (paramName == "content")
                        ret.query.content = val;
                    else
                        ret.query.push(paramName + "=" + val);
                }
                else
                    ret.query.push(paramName + "=" + val);
            }
        });
        ret.url = url;
        return ret;
    }

    /**
     *  Send an HTTP request to the server and pass the result to a callback.
     *
     *  @name module:github.Client#httpSend
     *  @method
     *  @returns null
     *  @param {Object} msg parameters to send as the request body
     *  @param {Object} block parameter definition from the `routes.json` file that
     *          contains validation rules
     *  @param {Function} callback function to be called when the request returns.
     *          If the the request returns with an error, the error is passed to
     *          the callback as its first argument (NodeJS-style).
     **/
    this.httpSend = function(msg, block, callback) {
        var method = block.method.toLowerCase();
        var hasBody = ("head|get|delete".indexOf(method) === -1);
        var format = block.format || (hasBody && this.constants.requestFormat
            ? this.constants.requestFormat
            : "query");
        var obj = getQueryAndUrl(msg, block, format);
        var query = obj.query;
        var url = this.config.url ? this.config.url + obj.url : obj.url;

        var path = ((format == "binary" || !hasBody) && query.length)
            ? url + "?" + query.join("&")
            : url;
        var protocol = this.config.protocol || this.constants.protocol || "http";
        var host = block.host || this.config.host || this.constants.host;

        var port = this.config.port || this.constants.port || (protocol == "https" ? 443 : 80);

        var headers = {
            "host": host,
            "user-agent": "NodeJS HTTP Client",
            "content-length": "0"
        };

        for (var header in this.config.headers) {
            headers[header] = this.config.headers[header];
        }

        if (hasBody) {
            var contentLength = 0;
            var contentType = 0;
            if (format == "json") {
                query = JSON.stringify(query);
                contentLength = query.length;
                contentType = "application/json";
            } else if (format == "binary") {
                contentLength = query.content.length;
                contentType = query.content_type;
            } else {
                query = query.join("&");
                contentLength = query.length;
                contentType = "application/x-www-form-urlencoded"
            }
            headers["content-length"] = contentLength;
            headers["content-type"] = contentType;
        }
        if (this.auth) {
            var basic;
            switch (this.auth.type) {
                case "basic":
                    basic = new Buffer(this.auth.username + ":" + this.auth.password, "ascii").toString("base64");
                    headers.authorization = "Basic " + basic;
                    break;
                case "oauth":
                    path += (path.indexOf("?") === -1 ? "?" : "&") +
                        "access_token=" + encodeURIComponent(this.auth.token);
                    break;
                case "client":
                    path += (path.indexOf("?") === -1 ? "?" : "&") +
                        "client_id=" + encodeURIComponent(this.auth.username) +
                        "&client_secret=" + encodeURIComponent(this.auth.password);
                    break;
                default:
                    break;
            }
        }

        var options = {
            host: host,
            port: port,
            path: path,
            method: method,
            headers: headers,
            rejectUnauthorized: this.config.rejectUnauthorized,
            agent: this.config.agent || undefined
        };

        if (this.debug)
            console.log("REQUEST: ", options);

        var callbackInvoked = false;

        var self = this;
        var req = require(protocol).request(options, function(res) {
            if (self.debug) {
                console.log("STATUS: " + res.statusCode);
                console.log("HEADERS: " + JSON.stringify(res.headers));
            }
            res.setEncoding("utf8");
            var data = "";
            res.on("data", function(chunk) {
                data += chunk;
            });
            res.on("end", function() {
                if (!callbackInvoked) {
                    callbackInvoked = true;
                    if (res.statusCode >= 400 && res.statusCode < 600 || res.statusCode < 10) {
                        callback(new error.HttpError(data, res.statusCode));
                    }
                    else {
                        res.data = data;
                        callback(null, res);
                    }
                }
            });
        });

        if (this.config.timeout) {
            req.setTimeout(this.config.timeout);
        }

        req.on("error", function(e) {
            if (self.debug)
                console.log("problem with request: " + e.message);
            if (!callbackInvoked) {
                callbackInvoked = true;
                callback(e.message);
            }
        });

        // write data to request body
        if (format == "binary") {
            if (query.content.length) {
                req.write(query.content);
            }
        } else if (hasBody && query.length) {
            if (self.debug)
                console.log("REQUEST BODY: " + query + "\n");
            req.write(query + "\n");
        }
        req.end();
    };
}).call(Client.prototype);
