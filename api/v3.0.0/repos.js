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

    /** section: github
     *  repos#getAll(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - type (String): Optional. Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`. Validation rule: ` ^(all|owner|public|private|member)$ `.
     *  - sort (String): Optional. Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. Validation rule: ` ^(created|updated|pushed|full_name)$ `.
     *  - direction (String): Optional. Validation rule: ` ^(asc|desc)$ `.
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     **/
    this.getAll = this.processRequest;

    /** section: github
     *  repos#getFromUser(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - type (String): Optional. Possible values: `all`, `owner`, `member`. Default: `public`. Validation rule: ` ^(all|owner|member)$ `.
     *  - sort (String): Optional. Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. Validation rule: ` ^(created|updated|pushed|full_name)$ `.
     *  - direction (String): Optional. Validation rule: ` ^(asc|desc)$ `.
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     **/
    this.getFromUser = this.processRequest;

    /** section: github
     *  repos#getFromOrg(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - org (String): Required. 
     *  - type (String): Optional. Possible values: `all`, `public`, `member`. Default: `all`. Validation rule: ` ^(all|public|member)$ `.
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     **/
    this.getFromOrg = this.processRequest;

    /** section: github
     *  repos#create(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - name (String): Required. 
     *  - description (String): Optional. 
     *  - homepage (String): Optional. 
     *  - private (Boolean): Optional. Optional boolean - true to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false. 
     *  - has_issues (Boolean): Optional. Optional boolean - true to enable issues for this repository, false to disable them. Default is true. 
     *  - has_wiki (Boolean): Optional. Optional boolean - true to enable the wiki for this repository, false to disable it. Default is true. 
     *  - has_downloads (Boolean): Optional. Optional boolean - true to enable downloads for this repository, false to disable them. Default is true. 
     *  - auto_init (Boolean): Optional. Optional boolean - true to create an initial commit with empty README. Default is false 
     *  - gitignore_template (String): Optional. Optional string - Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided. 
     **/
    this.create = this.processRequest;

    /** section: github
     *  repos#createFromOrg(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - org (String): Required. 
     *  - name (String): Required. 
     *  - description (String): Optional. 
     *  - homepage (String): Optional. 
     *  - private (Boolean): Optional. Optional boolean - true to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false. 
     *  - has_issues (Boolean): Optional. Optional boolean - true to enable issues for this repository, false to disable them. Default is true. 
     *  - has_wiki (Boolean): Optional. Optional boolean - true to enable the wiki for this repository, false to disable it. Default is true. 
     *  - has_downloads (Boolean): Optional. Optional boolean - true to enable downloads for this repository, false to disable them. Default is true. 
     *  - auto_init (Boolean): Optional. Optional boolean - true to create an initial commit with empty README. Default is false 
     *  - gitignore_template (String): Optional. Optional string - Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided. 
     *  - team_id (Number): Optional. Optional number - The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization. Validation rule: ` ^[0-9]+$ `.
     **/
    this.createFromOrg = this.processRequest;

    /** section: github
     *  repos#get(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     **/
    this.get = this.processRequest;

    /** section: github
     *  repos#update(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - name (String): Required. 
     *  - description (String): Optional. 
     *  - homepage (String): Optional. 
     *  - private (Boolean): Optional. Optional boolean - true to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false. 
     *  - has_issues (Boolean): Optional. Optional boolean - true to enable issues for this repository, false to disable them. Default is true. 
     *  - has_wiki (Boolean): Optional. Optional boolean - true to enable the wiki for this repository, false to disable it. Default is true. 
     *  - has_downloads (Boolean): Optional. Optional boolean - true to enable downloads for this repository, false to disable them. Default is true. 
     **/
    this.update = this.processRequest;

    /** section: github
     *  repos#delete(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     **/
    this.delete = this.processRequest;

    /** section: github
     *  repos#merge(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - base (String): Required. Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo. 
     *  - head (String): Required. Required string - The branch (or git ref) where your changes are implemented. 
     *  - commit_message (String): Optional. Optional string - Commit message to use for the merge commit. If omitted, a default message will be used. 
     **/
    this.merge = this.processRequest;

    /** section: github
     *  repos#getContributors(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - anon (Boolean): Optional. Optional flag. Set to 1 or true to include anonymous contributors in results. 
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     **/
    this.getContributors = this.processRequest;

    /** section: github
     *  repos#getLanguages(msg, callback) -> null
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
    this.getLanguages = this.processRequest;

    /** section: github
     *  repos#getTeams(msg, callback) -> null
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
    this.getTeams = this.processRequest;

    /** section: github
     *  repos#getTags(msg, callback) -> null
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
    this.getTags = this.processRequest;

    /** section: github
     *  repos#getBranches(msg, callback) -> null
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
    this.getBranches = this.processRequest;

    /** section: github
     *  repos#getBranch(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - branch (String): Required. 
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     **/
    this.getBranch = this.processRequest;

    /** section: github
     *  repos#getCollaborators(msg, callback) -> null
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
    this.getCollaborators = this.processRequest;

    /** section: github
     *  repos#getCollaborator(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - collabuser (String): Required. 
     **/
    this.getCollaborator = this.processRequest;

    /** section: github
     *  repos#addCollaborator(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - collabuser (String): Required. 
     **/
    this.addCollaborator = this.processRequest;

    /** section: github
     *  repos#removeCollaborator(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - collabuser (String): Required. 
     **/
    this.removeCollaborator = this.processRequest;

    /** section: github
     *  repos#getCommits(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - sha (String): Optional. Optional string - Sha or branch to start listing commits from. 
     *  - path (String): Optional. Optional string - Only commits containing this file path will be returned. 
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  - since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ 
     **/
    this.getCommits = this.processRequest;

    /** section: github
     *  repos#getCommit(msg, callback) -> null
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
     *  repos#getAllCommitComments(msg, callback) -> null
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
    this.getAllCommitComments = this.processRequest;

    /** section: github
     *  repos#getCommitComments(msg, callback) -> null
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
    this.getCommitComments = this.processRequest;

    /** section: github
     *  repos#createCommitComment(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - sha (String): Required. 
     *  - body (String): Required. 
     *  - commit_id (String): Required. Required string - Sha of the commit to comment on. 
     *  - path (String): Optional. Optional string - Relative path of the file to comment on. 
     *  - position (Number): Optional. Optional number - Line index in the diff to comment on. 
     *  - line (Number): Optional. Optional number - Line number in the file to comment on. Defaults to 1. 
     **/
    this.createCommitComment = this.processRequest;

    /** section: github
     *  repos#getCommitComment(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     **/
    this.getCommitComment = this.processRequest;

    /** section: github
     *  repos#updateCommitComment(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     *  - body (String): Required. 
     **/
    this.updateCommitComment = this.processRequest;

    /** section: github
     *  repos#compareCommits(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - base (String): Required. Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo. 
     *  - head (String): Required. Required string - The branch (or git ref) where your changes are implemented. 
     **/
    this.compareCommits = this.processRequest;

    /** section: github
     *  repos#deleteCommitComment(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     **/
    this.deleteCommitComment = this.processRequest;

    /** section: github
     *  repos#getReadme(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - ref (String): Optional. The String name of the Commit/Branch/Tag. Defaults to master. 
     **/
    this.getReadme = this.processRequest;

    /** section: github
     *  repos#getContent(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - path (String): Optional. The content path. 
     *  - ref (String): Optional. The String name of the Commit/Branch/Tag. Defaults to master. 
     **/
    this.getContent = this.processRequest;

    /** section: github
     *  repos#getArchiveLink(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - archive_format (String): Required. Either tarball or zipball Validation rule: ` ^(tarball|zipball)$ `.
     **/
    this.getArchiveLink = this.processRequest;

    /** section: github
     *  repos#getDownloads(msg, callback) -> null
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
    this.getDownloads = this.processRequest;

    /** section: github
     *  repos#getDownload(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     **/
    this.getDownload = this.processRequest;

    /** section: github
     *  repos#deleteDownload(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     **/
    this.deleteDownload = this.processRequest;

    /** section: github
     *  repos#getForks(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - sort (String): Optional. Possible values: `newest`, `oldest`, `watchers`, default: `newest`. Validation rule: ` ^(newest|oldest|watchers)$ `.
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     **/
    this.getForks = this.processRequest;

    /** section: github
     *  repos#fork(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - org (String): Optional. Optional String - Organization login. The repository will be forked into this organization. 
     **/
    this.fork = this.processRequest;

    /** section: github
     *  repos#getKeys(msg, callback) -> null
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
    this.getKeys = this.processRequest;

    /** section: github
     *  repos#getKey(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     **/
    this.getKey = this.processRequest;

    /** section: github
     *  repos#createKey(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - title (String): Required. 
     *  - key (String): Required. 
     **/
    this.createKey = this.processRequest;

    /** section: github
     *  repos#updateKey(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     *  - title (String): Required. 
     *  - key (String): Required. 
     **/
    this.updateKey = this.processRequest;

    /** section: github
     *  repos#deleteKey(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     **/
    this.deleteKey = this.processRequest;

    /** section: github
     *  repos#getWatchers(msg, callback) -> null
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
    this.getWatchers = this.processRequest;

    /** section: github
     *  repos#getWatched(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     **/
    this.getWatched = this.processRequest;

    /** section: github
     *  repos#getWatchedFromUser(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     **/
    this.getWatchedFromUser = this.processRequest;

    /** section: github
     *  repos#getWatching(msg, callback) -> null
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
    this.getWatching = this.processRequest;

    /** section: github
     *  repos#watch(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     **/
    this.watch = this.processRequest;

    /** section: github
     *  repos#unWatch(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     **/
    this.unWatch = this.processRequest;

    /** section: github
     *  repos#getHooks(msg, callback) -> null
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
    this.getHooks = this.processRequest;

    /** section: github
     *  repos#getHook(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     **/
    this.getHook = this.processRequest;

    /** section: github
     *  repos#createHook(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - name (String): Required. 
     *  - config (Json): Required. Required hash - A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically. 
     *  - events (Array): Optional. Optional array - Determines what events the hook is triggered for. Default: `['push']`. 
     *  - active (Boolean): Optional. Optional boolean - Determines whether the hook is actually triggered on pushes. 
     **/
    this.createHook = this.processRequest;

    /** section: github
     *  repos#updateHook(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     *  - name (String): Required. 
     *  - config (Json): Required. Required hash - A Hash containing key/value pairs to provide settings for this hook. Modifying this will replace the entire config object. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically. 
     *  - events (Array): Optional. Optional array - Determines what events the hook is triggered for. This replaces the entire array of events. Default: `['push']`. 
     *  - add_events (Array): Optional. Optional array - Determines a list of events to be added to the list of events that the Hook triggers for. 
     *  - remove_events (Array): Optional. Optional array - Determines a list of events to be removed from the list of events that the Hook triggers for. 
     *  - active (Boolean): Optional. Optional boolean - Determines whether the hook is actually triggered on pushes. 
     **/
    this.updateHook = this.processRequest;

    /** section: github
     *  repos#testHook(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     **/
    this.testHook = this.processRequest;

    /** section: github
     *  repos#deleteHook(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     **/
    this.deleteHook = this.processRequest;

    /** section: github
     *  repos#getAllReleases(msg, callback) -> null
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
    this.getAllReleases = this.processRequest;

    /** section: github
     *  repos#getRelease(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     **/
    this.getRelease = this.processRequest;

    /** section: github
     *  repos#createRelease(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - tag_name (String): Required. 
     *  - target_commitish (String): Optional. 
     *  - name (String): Required. 
     *  - body (String): Required. 
     *  - draft (Boolean): Optional. 
     *  - prerelease (Boolean): Optional. 
     **/
    this.createRelease = this.processRequest;

    /** section: github
     *  repos#updateRelease(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     *  - tag_name (String): Optional. 
     *  - target_commitish (String): Optional. 
     *  - name (String): Optional. 
     *  - body (String): Optional. 
     *  - draft (Boolean): Optional. 
     *  - prerelease (Boolean): Optional. 
     **/
    this.updateRelease = this.processRequest;

    /** section: github
     *  repos#deleteRelease(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     **/
    this.deleteRelease = this.processRequest;

    /** section: github
     *  repos#listReleaseAssets(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     **/
    this.listReleaseAssets = this.processRequest;

    /** section: github
     *  repos#uploadReleaseAsset(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     *  - content-type (String): Required. 
     *  - name (String): Required. 
     *  - content (Binary): Required. 
     **/
    this.uploadReleaseAsset = this.processRequest;

    /** section: github
     *  repos#getReleaseAsset(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     **/
    this.getReleaseAsset = this.processRequest;

    /** section: github
     *  repos#editReleaseAsset(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     *  - name (String): Required. 
     *  - label (String): Optional. 
     **/
    this.editReleaseAsset = this.processRequest;

    /** section: github
     *  repos#deleteReleaseAsset(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - repo (String): Required. 
     *  - id (String): Required. 
     **/
    this.deleteReleaseAsset = this.processRequest;

}).call(repos.repos);
