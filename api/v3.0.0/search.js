/** 
 *  mixin search
 * 
 *  Copyright 2012 Cloud9 IDE, Inc.
 *
 *  This product includes software developed by
 *  Cloud9 IDE, Inc (http://c9.io).
 *
 *  Author: Mike de Boer <mike@c9.io>
 **/

"use strict";

var error = require("./../../error");
var Util = require("./../../util");

/**
 * @module search
 */
var search = module.exports = {
    search: {}
};

(function() {
    this.processRequest = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

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
            ["x-ratelimit-limit", "x-ratelimit-remaining", "x-oauth-scopes", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /** 
     * @name module:search#issues
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.state open or closed Validation rule: ` ^(open|closed)$ `.
     * @param {String} msg.keyword Search term
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.issues = this.processRequest;

    /** 
     * @name module:search#repos
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.keyword Search term
     * @param {String} [msg.language] Filter results by language, see https://github.com/languages
     * @param {Number} [msg.start_page] Page number to fetch Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.repos = this.processRequest;

    /** 
     * @name module:search#users
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.keyword Keyword search parameters
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.users = this.processRequest;

    /** 
     * @name module:search#email
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.email Email address
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.email = this.processRequest;

}).call(search.search);
