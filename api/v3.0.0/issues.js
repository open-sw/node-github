/** 
 *  mixin issues
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
 * @module issues
 */
var issues = module.exports = {
    issues: {}
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
     * @name module:issues#getAll
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} [msg.filter] Validation rule: ` ^(assigned|created|mentioned|subscribed)$ `.
     * @param {String} [msg.state] Validation rule: ` ^(open|closed)$ `.
     * @param {String} [msg.labels] String list of comma separated Label names. Example: bug,ui,@high
     * @param {String} [msg.sort] Validation rule: ` ^(created|updated|comments)$ `.
     * @param {String} [msg.direction] Validation rule: ` ^(asc|desc)$ `.
     * @param {Date} [msg.since] string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getAll = this.processRequest;

    /** 
     * @name module:issues#repoIssues
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} [msg.milestone] Validation rule: ` ^([0-9]+|none|\*)$ `.
     * @param {String} [msg.state] open or closed Validation rule: ` ^(open|closed)$ `.
     * @param {String} [msg.assignee] String User login, `none` for Issues with no assigned User. `*` for Issues with any assigned User.
     * @param {String} [msg.mentioned] String User login.
     * @param {String} [msg.labels] String list of comma separated Label names. Example: bug,ui,@high
     * @param {String} [msg.sort] Validation rule: ` ^(created|updated|comments)$ `.
     * @param {String} [msg.direction] Validation rule: ` ^(asc|desc)$ `.
     * @param {Date} [msg.since] string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.repoIssues = this.processRequest;

    /** 
     * @name module:issues#getRepoIssue
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} msg.number Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getRepoIssue = this.processRequest;

    /** 
     * @name module:issues#create
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.title
     * @param {String} [msg.body]
     * @param {String} [msg.assignee] Login for the user that this issue should be assigned to.
     * @param {Number} [msg.milestone] Milestone to associate this issue with. Validation rule: ` ^[0-9]+$ `.
     * @param {Json} msg.labels Labels to associate with this issue.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.create = this.processRequest;

    /** 
     * @name module:issues#edit
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} msg.number Validation rule: ` ^[0-9]+$ `.
     * @param {String} msg.title
     * @param {String} [msg.body]
     * @param {String} [msg.assignee] Login for the user that this issue should be assigned to.
     * @param {Number} [msg.milestone] Milestone to associate this issue with. Validation rule: ` ^[0-9]+$ `.
     * @param {Json} msg.labels array of strings - Labels to associate with this issue.
     * @param {String} [msg.state] open or closed Validation rule: ` ^(open|closed)$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.edit = this.processRequest;

    /** 
     * @name module:issues#getComments
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} msg.number Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getComments = this.processRequest;

    /** 
     * @name module:issues#getComment
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getComment = this.processRequest;

    /** 
     * @name module:issues#createComment
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} msg.number Validation rule: ` ^[0-9]+$ `.
     * @param {String} msg.body
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.createComment = this.processRequest;

    /** 
     * @name module:issues#editComment
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {String} msg.body
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.editComment = this.processRequest;

    /** 
     * @name module:issues#deleteComment
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.deleteComment = this.processRequest;

    /** 
     * @name module:issues#getEvents
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} msg.number Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getEvents = this.processRequest;

    /** 
     * @name module:issues#getRepoEvents
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getRepoEvents = this.processRequest;

    /** 
     * @name module:issues#getEvent
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getEvent = this.processRequest;

    /** 
     * @name module:issues#getLabels
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getLabels = this.processRequest;

    /** 
     * @name module:issues#getLabel
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.name
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getLabel = this.processRequest;

    /** 
     * @name module:issues#createLabel
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.name
     * @param {String} msg.color 6 character hex code, without a leading #.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.createLabel = this.processRequest;

    /** 
     * @name module:issues#updateLabel
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.name
     * @param {String} msg.color 6 character hex code, without a leading #.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.updateLabel = this.processRequest;

    /** 
     * @name module:issues#deleteLabel
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.name
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.deleteLabel = this.processRequest;

    /** 
     * @name module:issues#getAllMilestones
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} [msg.state] Validation rule: ` ^(open|closed)$ `.
     * @param {String} [msg.sort] due_date, completeness, default: due_date Validation rule: ` ^(due_date|completeness)$ `.
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getAllMilestones = this.processRequest;

    /** 
     * @name module:issues#getMilestone
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} msg.number Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getMilestone = this.processRequest;

    /** 
     * @name module:issues#createMilestone
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.title
     * @param {String} [msg.state] Validation rule: ` ^(open|closed)$ `.
     * @param {String} [msg.description]
     * @param {Date} [msg.due_on] ISO 8601 time.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.createMilestone = this.processRequest;

    /** 
     * @name module:issues#updateMilestone
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} msg.number Validation rule: ` ^[0-9]+$ `.
     * @param {String} msg.title
     * @param {String} [msg.state] Validation rule: ` ^(open|closed)$ `.
     * @param {String} [msg.description]
     * @param {Date} [msg.due_on] ISO 8601 time.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.updateMilestone = this.processRequest;

    /** 
     * @name module:issues#deleteMilestone
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} msg.number Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.deleteMilestone = this.processRequest;

}).call(issues.issues);
