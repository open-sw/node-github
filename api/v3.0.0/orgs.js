/** 
 *  mixin orgs
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
 * @module orgs
 */
var orgs = module.exports = {
    orgs: {}
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
     * @name module:orgs#getFromUser
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
     * @name module:orgs#get
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.org
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.get = this.processRequest;

    /** 
     * @name module:orgs#update
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.org
     * @param {String} [msg.billing_email] Billing email address. This address is not publicized.
     * @param {String} [msg.company]
     * @param {String} [msg.email] Publicly visible email address.
     * @param {String} [msg.location]
     * @param {String} [msg.name]
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.update = this.processRequest;

    /** 
     * @name module:orgs#getMembers
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.org
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getMembers = this.processRequest;

    /** 
     * @name module:orgs#getMember
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.org
     * @param {String} msg.user
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getMember = this.processRequest;

    /** 
     * @name module:orgs#removeMember
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.org
     * @param {String} msg.user
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.removeMember = this.processRequest;

    /** 
     * @name module:orgs#getPublicMembers
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.org
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getPublicMembers = this.processRequest;

    /** 
     * @name module:orgs#getPublicMember
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.org
     * @param {String} msg.user
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getPublicMember = this.processRequest;

    /** 
     * @name module:orgs#publicizeMembership
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.org
     * @param {String} msg.user
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.publicizeMembership = this.processRequest;

    /** 
     * @name module:orgs#concealMembership
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.org
     * @param {String} msg.user
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.concealMembership = this.processRequest;

    /** 
     * @name module:orgs#getTeams
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.org
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getTeams = this.processRequest;

    /** 
     * @name module:orgs#getTeam
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getTeam = this.processRequest;

    /** 
     * @name module:orgs#createTeam
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.org
     * @param {String} msg.name
     * @param {Array} [msg.repo_names] array of strings
     * @param {String} [msg.permission] `pull` - team members can pull, but not push or administer this repositories (Default), `push` - team members can pull and push, but not administer this repositores, `admin` - team members can pull, push and administer these repositories. Validation rule: ` ^(pull|push|admin)$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.createTeam = this.processRequest;

    /** 
     * @name module:orgs#updateTeam
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {String} msg.name
     * @param {String} [msg.permission] `pull` - team members can pull, but not push or administer this repositories (Default), `push` - team members can pull and push, but not administer this repositores, `admin` - team members can pull, push and administer these repositories. Validation rule: ` ^(pull|push|admin)$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.updateTeam = this.processRequest;

    /** 
     * @name module:orgs#deleteTeam
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.deleteTeam = this.processRequest;

    /** 
     * @name module:orgs#getTeamMembers
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getTeamMembers = this.processRequest;

    /** 
     * @name module:orgs#getTeamMember
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {String} msg.user
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getTeamMember = this.processRequest;

    /** 
     * @name module:orgs#addTeamMember
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {String} msg.user
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.addTeamMember = this.processRequest;

    /** 
     * @name module:orgs#deleteTeamMember
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {String} msg.user
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.deleteTeamMember = this.processRequest;

    /** 
     * @name module:orgs#getTeamRepos
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getTeamRepos = this.processRequest;

    /** 
     * @name module:orgs#getTeamRepo
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getTeamRepo = this.processRequest;

    /** 
     * @name module:orgs#addTeamRepo
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.addTeamRepo = this.processRequest;

    /** 
     * @name module:orgs#deleteTeamRepo
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.id
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.deleteTeamRepo = this.processRequest;

}).call(orgs.orgs);
