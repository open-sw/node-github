/** 
 *  mixin authorization
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
 * @module authorization
 */
var authorization = module.exports = {
    authorization: {}
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
     * @name module:authorization#getAll
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getAll = this.processRequest;

    /** 
     * @name module:authorization#get
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.get = this.processRequest;

    /** 
     * @name module:authorization#create
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {Array} [msg.scopes] A list of scopes that this authorization is in.
     * @param {String} [msg.note] A note to remind you what the OAuth token is for.
     * @param {String} [msg.note_url] A URL to remind you what app the OAuth token is for.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.create = this.processRequest;

    /** 
     * @name module:authorization#update
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {Array} [msg.scopes] A list of scopes that this authorization is in.
     * @param {Array} [msg.add_scopes] A list of scopes to add to this authorization.
     * @param {Array} [msg.remove_scopes] A list of scopes to remove from this authorization.
     * @param {String} [msg.note] A note to remind you what the OAuth token is for.
     * @param {String} [msg.note_url] A URL to remind you what app the OAuth token is for.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.update = this.processRequest;

    /** 
     * @name module:authorization#delete
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.delete = this.processRequest;

}).call(authorization.authorization);
