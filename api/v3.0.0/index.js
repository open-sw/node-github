/**
 *  class Github
 * 
 *  A Node.JS module, which provides an object oriented wrapper for the GitHub v3 API.
 * 
 *  Copyright 2012 Ajax.org Services B.V.
 *
 *  This product includes software developed by
 *  Ajax.org Services B.V. (http://www.ajax.org/).
 *
 *  Author: Mike de Boer <mike@ajax.org>
 **/

"use strict";

var Fs = require("fs");
var Util = require("./../../util");
var error = require("./../../error");

var GithubHandler = module.exports = function(client) {
    this.client = client;
    this.routes = JSON.parse(Fs.readFileSync(__dirname + "/routes.json", "utf8"));
};

var proto = {
    sendError: function(err, msg, block, callback) {
        Util.log(err, block, msg.user, "error");
        if (typeof err == "string")
            err = new error.InternalServerError(err);
        if (callback)
            callback(err);
    },
    handler: function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, msg, null, callback);

            var ret;
            try {
                ret = res.data && JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }

            ret.headers = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "x-oauth-scopes", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.headers[header] = res.headers[header];
            });

            if (callback)
                callback(null, ret);
        });
    }
};

["gists", "gitdata", "issues", "authorization", "orgs", "statuses", "pullRequests", "repos", "user", "events", "search", "markdown"].forEach(function(section) {
    proto[section] = {};
});

GithubHandler.prototype = proto;
