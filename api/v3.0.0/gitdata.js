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

    /** section: github
     *  gitdata#getBlob(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - sha (String): Required. 
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     **/
    this.getBlob = this.processRequest;

    /** section: github
     *  gitdata#createBlob(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - content (String): Required. 
     *  - encoding (String): Required. 
     **/
    this.createBlob = this.processRequest;

    /** section: github
     *  gitdata#getCommit(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - sha (String): Required. 
     **/
    this.getCommit = this.processRequest;

    /** section: github
     *  gitdata#createCommit(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - message (String): Required. String of the commit message 
     *  - tree (String): Required. String of the SHA of the tree object this commit points to 
     *  - parents (Array): Required. Array of the SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided, for a merge commit, an array of more than one should be provided. 
     *  - author (Json): Optional. 
     *  - committer (Json): Optional. 
     **/
    this.createCommit = this.processRequest;

    /** section: github
     *  gitdata#getReference(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - ref (String): Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. 
     **/
    this.getReference = this.processRequest;

    /** section: github
     *  gitdata#getAllReferences(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     **/
    this.getAllReferences = this.processRequest;

    /** section: github
     *  gitdata#createReference(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - ref (String): Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. 
     *  - sha (String): Required. 
     **/
    this.createReference = this.processRequest;

    /** section: github
     *  gitdata#updateReference(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - ref (String): Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. 
     *  - sha (String): Required. 
     *  - force (Boolean): Required. Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work. 
     **/
    this.updateReference = this.processRequest;

    /** section: github
     *  gitdata#deleteReference(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - ref (String): Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. 
     **/
    this.deleteReference = this.processRequest;

    /** section: github
     *  gitdata#getTag(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - sha (String): Required. 
     **/
    this.getTag = this.processRequest;

    /** section: github
     *  gitdata#createTag(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - tag (String): Required. String of the tag 
     *  - message (String): Required. String of the tag message 
     *  - object (String): Required. String of the SHA of the git object this is tagging 
     *  - type (String): Required. String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob. 
     *  - tagger (Json): Required. JSON object that contains the following keys: `name` - String of the name of the author of the tag, `email` - String of the email of the author of the tag, `date` - Timestamp of when this object was tagged 
     **/
    this.createTag = this.processRequest;

    /** section: github
     *  gitdata#getTree(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - sha (String): Required. 
     *  - recursive (Boolean): Optional. 
     **/
    this.getTree = this.processRequest;

    /** section: github
     *  gitdata#createTree(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - tree (Json): Required. Array of Hash objects (of path, mode, type and sha) specifying a tree structure 
     *  - base_tree (String): Optional. String of the SHA1 of the tree you want to update with new data 
     **/
    this.createTree = this.processRequest;

}).call(gitdata.gitdata);
