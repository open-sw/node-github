/** 
 *  mixin gitdata
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
 * @module gitdata
 */
var gitdata = module.exports = {
    gitdata: {}
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
     * @name module:gitdata#getBlob
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.sha
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getBlob = this.processRequest;

    /** 
     * @name module:gitdata#createBlob
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.content
     * @param {String} msg.encoding
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.createBlob = this.processRequest;

    /** 
     * @name module:gitdata#getCommit
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.sha
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getCommit = this.processRequest;

    /** 
     * @name module:gitdata#createCommit
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.message String of the commit message
     * @param {String} msg.tree String of the SHA of the tree object this commit points to
     * @param {Array} msg.parents Array of the SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided, for a merge commit, an array of more than one should be provided.
     * @param {Json} [msg.author]
     * @param {Json} [msg.committer]
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.createCommit = this.processRequest;

    /** 
     * @name module:gitdata#getReference
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.ref String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getReference = this.processRequest;

    /** 
     * @name module:gitdata#getAllReferences
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getAllReferences = this.processRequest;

    /** 
     * @name module:gitdata#createReference
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.ref String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
     * @param {String} msg.sha
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.createReference = this.processRequest;

    /** 
     * @name module:gitdata#updateReference
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.ref String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
     * @param {String} msg.sha
     * @param {Boolean} msg.force Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.updateReference = this.processRequest;

    /** 
     * @name module:gitdata#deleteReference
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.ref String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.deleteReference = this.processRequest;

    /** 
     * @name module:gitdata#getTag
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.sha
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getTag = this.processRequest;

    /** 
     * @name module:gitdata#createTag
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.tag String of the tag
     * @param {String} msg.message String of the tag message
     * @param {String} msg.object String of the SHA of the git object this is tagging
     * @param {String} msg.type String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.
     * @param {Json} msg.tagger JSON object that contains the following keys: `name` - String of the name of the author of the tag, `email` - String of the email of the author of the tag, `date` - Timestamp of when this object was tagged
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.createTag = this.processRequest;

    /** 
     * @name module:gitdata#getTree
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.sha
     * @param {Boolean} [msg.recursive]
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getTree = this.processRequest;

    /** 
     * @name module:gitdata#createTree
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Json} msg.tree Array of Hash objects (of path, mode, type and sha) specifying a tree structure
     * @param {String} [msg.base_tree] String of the SHA1 of the tree you want to update with new data
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.createTree = this.processRequest;

}).call(gitdata.gitdata);
