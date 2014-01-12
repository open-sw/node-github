/** 
 *  mixin user
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
 * @module user
 */
var user = module.exports = {
    user: {}
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
     * @name module:user#getFrom
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getFrom = this.processRequest;

    /** 
     * @name module:user#get
     * @function
     * @returns null
     * @param {Object} msg No params, simply pass an empty Object literal `{}`
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.get = this.processRequest;

    /** 
     * @name module:user#update
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} [msg.name]
     * @param {String} [msg.email]
     * @param {String} [msg.blog]
     * @param {String} [msg.company]
     * @param {String} [msg.location]
     * @param {Boolean} [msg.hireable]
     * @param {String} [msg.bio]
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.update = this.processRequest;

    /** 
     * @name module:user#getOrgs
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getOrgs = this.processRequest;

    /** 
     * @name module:user#getEmails
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getEmails = this.processRequest;

    /** 
     * @name module:user#addEmails
     * @function
     * @returns null
     * @param {Object} msg No params, simply pass an empty Object literal `{}`
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.addEmails = this.processRequest;

    /** 
     * @name module:user#deleteEmails
     * @function
     * @returns null
     * @param {Object} msg No params, simply pass an empty Object literal `{}`
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.deleteEmails = this.processRequest;

    /** 
     * @name module:user#getFollowers
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getFollowers = this.processRequest;

    /** 
     * @name module:user#getFollowingFromUser
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getFollowingFromUser = this.processRequest;

    /** 
     * @name module:user#getFollowing
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getFollowing = this.processRequest;

    /** 
     * @name module:user#getFollowUser
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getFollowUser = this.processRequest;

    /** 
     * @name module:user#followUser
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.followUser = this.processRequest;

    /** 
     * @name module:user#unFollowUser
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.unFollowUser = this.processRequest;

    /** 
     * @name module:user#getKeys
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getKeys = this.processRequest;

    /** 
     * @name module:user#getKey
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getKey = this.processRequest;

    /** 
     * @name module:user#createKey
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.title
     * @param {String} msg.key
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.createKey = this.processRequest;

    /** 
     * @name module:user#updateKey
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {String} msg.title
     * @param {String} msg.key
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.updateKey = this.processRequest;

    /** 
     * @name module:user#deleteKey
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.deleteKey = this.processRequest;

}).call(user.user);
