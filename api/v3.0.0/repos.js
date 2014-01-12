/** 
 *  mixin repos
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
 * @module repos
 */
var repos = module.exports = {
    repos: {}
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
     * @name module:repos#getAll
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} [msg.type] Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`. Validation rule: ` ^(all|owner|public|private|member)$ `.
     * @param {String} [msg.sort] Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. Validation rule: ` ^(created|updated|pushed|full_name)$ `.
     * @param {String} [msg.direction] Validation rule: ` ^(asc|desc)$ `.
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getAll = this.processRequest;

    /** 
     * @name module:repos#getFromUser
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} [msg.type] Possible values: `all`, `owner`, `member`. Default: `public`. Validation rule: ` ^(all|owner|member)$ `.
     * @param {String} [msg.sort] Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. Validation rule: ` ^(created|updated|pushed|full_name)$ `.
     * @param {String} [msg.direction] Validation rule: ` ^(asc|desc)$ `.
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getFromUser = this.processRequest;

    /** 
     * @name module:repos#getFromOrg
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.org
     * @param {String} [msg.type] Possible values: `all`, `public`, `member`. Default: `all`. Validation rule: ` ^(all|public|member)$ `.
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getFromOrg = this.processRequest;

    /** 
     * @name module:repos#create
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.name
     * @param {String} [msg.description]
     * @param {String} [msg.homepage]
     * @param {Boolean} [msg.private] true to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
     * @param {Boolean} [msg.has_issues] true to enable issues for this repository, false to disable them. Default is true.
     * @param {Boolean} [msg.has_wiki] true to enable the wiki for this repository, false to disable it. Default is true.
     * @param {Boolean} [msg.has_downloads] true to enable downloads for this repository, false to disable them. Default is true.
     * @param {Boolean} [msg.auto_init] true to create an initial commit with empty README. Default is false
     * @param {String} [msg.gitignore_template] Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.create = this.processRequest;

    /** 
     * @name module:repos#createFromOrg
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.org
     * @param {String} msg.name
     * @param {String} [msg.description]
     * @param {String} [msg.homepage]
     * @param {Boolean} [msg.private] true to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
     * @param {Boolean} [msg.has_issues] true to enable issues for this repository, false to disable them. Default is true.
     * @param {Boolean} [msg.has_wiki] true to enable the wiki for this repository, false to disable it. Default is true.
     * @param {Boolean} [msg.has_downloads] true to enable downloads for this repository, false to disable them. Default is true.
     * @param {Boolean} [msg.auto_init] true to create an initial commit with empty README. Default is false
     * @param {String} [msg.gitignore_template] Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
     * @param {Number} [msg.team_id] The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.createFromOrg = this.processRequest;

    /** 
     * @name module:repos#get
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.get = this.processRequest;

    /** 
     * @name module:repos#update
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.name
     * @param {String} [msg.description]
     * @param {String} [msg.homepage]
     * @param {Boolean} [msg.private] true to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
     * @param {Boolean} [msg.has_issues] true to enable issues for this repository, false to disable them. Default is true.
     * @param {Boolean} [msg.has_wiki] true to enable the wiki for this repository, false to disable it. Default is true.
     * @param {Boolean} [msg.has_downloads] true to enable downloads for this repository, false to disable them. Default is true.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.update = this.processRequest;

    /** 
     * @name module:repos#delete
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.delete = this.processRequest;

    /** 
     * @name module:repos#merge
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.base The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
     * @param {String} msg.head The branch (or git ref) where your changes are implemented.
     * @param {String} [msg.commit_message] Commit message to use for the merge commit. If omitted, a default message will be used.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.merge = this.processRequest;

    /** 
     * @name module:repos#getContributors
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Boolean} [msg.anon] Set to 1 or true to include anonymous contributors in results.
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getContributors = this.processRequest;

    /** 
     * @name module:repos#getLanguages
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getLanguages = this.processRequest;

    /** 
     * @name module:repos#getTeams
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getTeams = this.processRequest;

    /** 
     * @name module:repos#getTags
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getTags = this.processRequest;

    /** 
     * @name module:repos#getBranches
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getBranches = this.processRequest;

    /** 
     * @name module:repos#getBranch
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.branch
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getBranch = this.processRequest;

    /** 
     * @name module:repos#getCollaborators
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getCollaborators = this.processRequest;

    /** 
     * @name module:repos#getCollaborator
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.collabuser
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getCollaborator = this.processRequest;

    /** 
     * @name module:repos#addCollaborator
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.collabuser
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.addCollaborator = this.processRequest;

    /** 
     * @name module:repos#removeCollaborator
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.collabuser
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.removeCollaborator = this.processRequest;

    /** 
     * @name module:repos#getCommits
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} [msg.sha] Sha or branch to start listing commits from.
     * @param {String} [msg.path] Only commits containing this file path will be returned.
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Date} [msg.since] string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getCommits = this.processRequest;

    /** 
     * @name module:repos#getCommit
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
     * @name module:repos#getAllCommitComments
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getAllCommitComments = this.processRequest;

    /** 
     * @name module:repos#getCommitComments
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
    this.getCommitComments = this.processRequest;

    /** 
     * @name module:repos#createCommitComment
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.sha
     * @param {String} msg.body
     * @param {String} msg.commit_id Sha of the commit to comment on.
     * @param {String} [msg.path] Relative path of the file to comment on.
     * @param {Number} [msg.position] Line index in the diff to comment on.
     * @param {Number} [msg.line] Line number in the file to comment on. Defaults to 1.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.createCommitComment = this.processRequest;

    /** 
     * @name module:repos#getCommitComment
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getCommitComment = this.processRequest;

    /** 
     * @name module:repos#updateCommitComment
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {String} msg.body
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.updateCommitComment = this.processRequest;

    /** 
     * @name module:repos#compareCommits
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.base The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
     * @param {String} msg.head The branch (or git ref) where your changes are implemented.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.compareCommits = this.processRequest;

    /** 
     * @name module:repos#deleteCommitComment
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.deleteCommitComment = this.processRequest;

    /** 
     * @name module:repos#getReadme
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} [msg.ref] The String name of the Commit/Branch/Tag. Defaults to master.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getReadme = this.processRequest;

    /** 
     * @name module:repos#getContent
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} [msg.path] The content path.
     * @param {String} [msg.ref] The String name of the Commit/Branch/Tag. Defaults to master.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getContent = this.processRequest;

    /** 
     * @name module:repos#getArchiveLink
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.archive_format Either tarball or zipball Validation rule: ` ^(tarball|zipball)$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getArchiveLink = this.processRequest;

    /** 
     * @name module:repos#getDownloads
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getDownloads = this.processRequest;

    /** 
     * @name module:repos#getDownload
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getDownload = this.processRequest;

    /** 
     * @name module:repos#deleteDownload
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.deleteDownload = this.processRequest;

    /** 
     * @name module:repos#getForks
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} [msg.sort] Possible values: `newest`, `oldest`, `watchers`, default: `newest`. Validation rule: ` ^(newest|oldest|watchers)$ `.
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getForks = this.processRequest;

    /** 
     * @name module:repos#fork
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} [msg.org] Organization login. The repository will be forked into this organization.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.fork = this.processRequest;

    /** 
     * @name module:repos#getKeys
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getKeys = this.processRequest;

    /** 
     * @name module:repos#getKey
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getKey = this.processRequest;

    /** 
     * @name module:repos#createKey
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.title
     * @param {String} msg.key
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.createKey = this.processRequest;

    /** 
     * @name module:repos#updateKey
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {String} msg.title
     * @param {String} msg.key
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.updateKey = this.processRequest;

    /** 
     * @name module:repos#deleteKey
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.deleteKey = this.processRequest;

    /** 
     * @name module:repos#getWatchers
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getWatchers = this.processRequest;

    /** 
     * @name module:repos#getWatched
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getWatched = this.processRequest;

    /** 
     * @name module:repos#getWatchedFromUser
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getWatchedFromUser = this.processRequest;

    /** 
     * @name module:repos#getWatching
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getWatching = this.processRequest;

    /** 
     * @name module:repos#watch
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.watch = this.processRequest;

    /** 
     * @name module:repos#unWatch
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.unWatch = this.processRequest;

    /** 
     * @name module:repos#getHooks
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getHooks = this.processRequest;

    /** 
     * @name module:repos#getHook
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getHook = this.processRequest;

    /** 
     * @name module:repos#createHook
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.name
     * @param {Json} msg.config Required hash - A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
     * @param {Array} [msg.events] Determines what events the hook is triggered for. Default: `['push']`.
     * @param {Boolean} [msg.active] Determines whether the hook is actually triggered on pushes.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.createHook = this.processRequest;

    /** 
     * @name module:repos#updateHook
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {String} msg.name
     * @param {Json} msg.config A Hash containing key/value pairs to provide settings for this hook. Modifying this will replace the entire config object. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
     * @param {Array} [msg.events] Determines what events the hook is triggered for. This replaces the entire array of events. Default: `['push']`.
     * @param {Array} [msg.add_events] Determines a list of events to be added to the list of events that the Hook triggers for.
     * @param {Array} [msg.remove_events] Determines a list of events to be removed from the list of events that the Hook triggers for.
     * @param {Boolean} [msg.active] Determines whether the hook is actually triggered on pushes.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.updateHook = this.processRequest;

    /** 
     * @name module:repos#testHook
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.testHook = this.processRequest;

    /** 
     * @name module:repos#deleteHook
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.deleteHook = this.processRequest;

    /** 
     * @name module:repos#getAllReleases
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getAllReleases = this.processRequest;

    /** 
     * @name module:repos#getRelease
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getRelease = this.processRequest;

    /** 
     * @name module:repos#createRelease
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.tag_name
     * @param {String} [msg.target_commitish]
     * @param {String} msg.name
     * @param {String} msg.body
     * @param {Boolean} [msg.draft]
     * @param {Boolean} [msg.prerelease]
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.createRelease = this.processRequest;

    /** 
     * @name module:repos#updateRelease
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {String} [msg.tag_name]
     * @param {String} [msg.target_commitish]
     * @param {String} [msg.name]
     * @param {String} [msg.body]
     * @param {Boolean} [msg.draft]
     * @param {Boolean} [msg.prerelease]
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.updateRelease = this.processRequest;

    /** 
     * @name module:repos#deleteRelease
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.deleteRelease = this.processRequest;

    /** 
     * @name module:repos#listReleaseAssets
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     * @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.listReleaseAssets = this.processRequest;

    /** 
     * @name module:repos#uploadReleaseAsset
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {String} msg.content-type
     * @param {String} msg.name
     * @param {Binary} msg.content
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.uploadReleaseAsset = this.processRequest;

    /** 
     * @name module:repos#getReleaseAsset
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.getReleaseAsset = this.processRequest;

    /** 
     * @name module:repos#editReleaseAsset
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {String} msg.name
     * @param {String} [msg.label]
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.editReleaseAsset = this.processRequest;

    /** 
     * @name module:repos#deleteReleaseAsset
     * @function
     * @returns null
     * @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     * @param {String} msg.user
     * @param {String} msg.repo
     * @param {String} msg.id
     * @param {Function} callback Function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    this.deleteReleaseAsset = this.processRequest;

}).call(repos.repos);
