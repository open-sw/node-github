/** 
 *  mixin gists
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
 * @module gists
 */
var gists = module.exports = {
    gists: {}
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
     * @name module:gists#getAll
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getAll = this.processRequest;

    /** 
     * @name module:gists#getFromUser
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getFromUser = this.processRequest;

    /** 
     * @name module:gists#create
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} [msg.description]
     * @param {Boolean} msg.public
     * @param {Json} msg.files Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.create = this.processRequest;

    /** 
     * @name module:gists#edit
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {String} [msg.description]
     * @param {Json} msg.files Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.edit = this.processRequest;

    /** 
     * @name module:gists#public
     * @function
     * @returns null
     * @param {Object} msg No params, simply pass an empty Object literal `{}`
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.public = this.processRequest;

    /** 
     * @name module:gists#starred
     * @function
     * @returns null
     * @param {Object} msg No params, simply pass an empty Object literal `{}`
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.starred = this.processRequest;

    /** 
     * @name module:gists#get
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.get = this.processRequest;

    /** 
     * @name module:gists#star
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.star = this.processRequest;

    /** 
     * @name module:gists#deleteStar
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.deleteStar = this.processRequest;

    /** 
     * @name module:gists#checkStar
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.checkStar = this.processRequest;

    /** 
     * @name module:gists#fork
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.fork = this.processRequest;

    /** 
     * @name module:gists#delete
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.delete = this.processRequest;

}).call(gists.gists);
