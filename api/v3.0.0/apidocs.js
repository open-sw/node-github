/** section: github
 * class Client.gists
 **/
/** section: github
 *  Client.gists#getAll(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 *  - since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 **/
/** section: github
 *  Client.gists#getFromUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 *  - since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 **/
/** section: github
 *  Client.gists#create(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - description (String): Optional.
 *  - public (Boolean): Required.
 *  - files (Json): Required. Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
 **/
/** section: github
 *  Client.gists#edit(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - description (String): Optional.
 *  - files (Json): Required. Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
 **/
/** section: github
 *  Client.gists#public(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 **/
/** section: github
 *  Client.gists#starred(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 **/
/** section: github
 *  Client.gists#get(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.gists#star(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.gists#deleteStar(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.gists#checkStar(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.gists#fork(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.gists#delete(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 * class Client.gitdata
 **/
/** section: github
 *  Client.gitdata#getBlob(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.gitdata#createBlob(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - content (String): Required.
 *  - encoding (String): Required.
 **/
/** section: github
 *  Client.gitdata#getCommit(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 **/
/** section: github
 *  Client.gitdata#createCommit(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - message (String): Required. String of the commit message
 *  - tree (String): Required. String of the SHA of the tree object this commit points to
 *  - parents (Array): Required. Array of the SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided, for a merge commit, an array of more than one should be provided.
 *  - author (Json): Optional.
 *  - committer (Json): Optional.
 **/
/** section: github
 *  Client.gitdata#getReference(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - ref (String): Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 **/
/** section: github
 *  Client.gitdata#getAllReferences(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.gitdata#createReference(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - ref (String): Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 *  - sha (String): Required.
 **/
/** section: github
 *  Client.gitdata#updateReference(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - ref (String): Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 *  - sha (String): Required.
 *  - force (Boolean): Required. Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work.
 **/
/** section: github
 *  Client.gitdata#deleteReference(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - ref (String): Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 **/
/** section: github
 *  Client.gitdata#getTag(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 **/
/** section: github
 *  Client.gitdata#createTag(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - tag (String): Required. String of the tag
 *  - message (String): Required. String of the tag message
 *  - object (String): Required. String of the SHA of the git object this is tagging
 *  - type (String): Required. String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.
 *  - tagger (Json): Required. JSON object that contains the following keys: `name` - String of the name of the author of the tag, `email` - String of the email of the author of the tag, `date` - Timestamp of when this object was tagged
 **/
/** section: github
 *  Client.gitdata#getTree(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 *  - recursive (Boolean): Optional.
 **/
/** section: github
 *  Client.gitdata#createTree(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - tree (Json): Required. Array of Hash objects (of path, mode, type and sha) specifying a tree structure
 *  - base_tree (String): Optional. String of the SHA1 of the tree you want to update with new data
 **/
/** section: github
 * class Client.issues
 **/
/** section: github
 *  Client.issues#getAll(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - filter (String): Optional. Validation rule: ` ^(all|assigned|created|mentioned|subscribed)$ `.
 *  - state (String): Optional. Validation rule: ` ^(open|closed)$ `.
 *  - labels (String): Optional. String list of comma separated Label names. Example: bug,ui,@high
 *  - sort (String): Optional. Validation rule: ` ^(created|updated|comments)$ `.
 *  - direction (String): Optional. Validation rule: ` ^(asc|desc)$ `.
 *  - since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.issues#repoIssues(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - milestone (String): Optional. Validation rule: ` ^([0-9]+|none|\*)$ `.
 *  - state (String): Optional. open or closed Validation rule: ` ^(open|closed)$ `.
 *  - assignee (String): Optional. String User login, `none` for Issues with no assigned User. `*` for Issues with any assigned User.
 *  - mentioned (String): Optional. String User login.
 *  - labels (String): Optional. String list of comma separated Label names. Example: bug,ui,@high
 *  - sort (String): Optional. Validation rule: ` ^(created|updated|comments)$ `.
 *  - direction (String): Optional. Validation rule: ` ^(asc|desc)$ `.
 *  - since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.issues#getRepoIssue(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.issues#create(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - title (String): Required.
 *  - body (String): Optional.
 *  - assignee (String): Optional. Optional string - Login for the user that this issue should be assigned to.
 *  - milestone (Number): Optional. Optional number - Milestone to associate this issue with. Validation rule: ` ^[0-9]+$ `.
 *  - labels (Json): Required. Optional array of strings - Labels to associate with this issue.
 **/
/** section: github
 *  Client.issues#edit(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - title (String): Optional.
 *  - body (String): Optional.
 *  - assignee (String): Optional. Optional string - Login for the user that this issue should be assigned to.
 *  - milestone (Number): Optional. Optional number - Milestone to associate this issue with. Validation rule: ` ^[0-9]+$ `.
 *  - labels (Json): Optional. Optional array of strings - Labels to associate with this issue.
 *  - state (String): Optional. open or closed Validation rule: ` ^(open|closed)$ `.
 **/
/** section: github
 *  Client.issues#repoComments(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sort (String): Optional. Validation rule: ` ^(created|updated)$ `.
 *  - direction (String): Optional. Validation rule: ` ^(asc|desc)$ `.
 *  - since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.issues#getComments(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.issues#getComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.issues#createComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - body (String): Required.
 **/
/** section: github
 *  Client.issues#editComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 *  - body (String): Required.
 **/
/** section: github
 *  Client.issues#deleteComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.issues#getEvents(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.issues#getRepoEvents(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.issues#getEvent(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.issues#getLabels(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  Client.issues#getLabel(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - name (String): Required.
 **/
/** section: github
 *  Client.issues#createLabel(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - name (String): Required.
 *  - color (String): Required. Required string - 6 character hex code, without a leading #.
 **/
/** section: github
 *  Client.issues#updateLabel(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - name (String): Required.
 *  - color (String): Required. Required string - 6 character hex code, without a leading #.
 **/
/** section: github
 *  Client.issues#deleteLabel(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - name (String): Required.
 **/
/** section: github
 *  Client.issues#getAllMilestones(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - state (String): Optional. Validation rule: ` ^(open|closed)$ `.
 *  - sort (String): Optional. due_date, completeness, default: due_date Validation rule: ` ^(due_date|completeness)$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.issues#getMilestone(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.issues#createMilestone(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - title (String): Required.
 *  - state (String): Optional. Validation rule: ` ^(open|closed)$ `.
 *  - description (String): Optional.
 *  - due_on (Date): Optional. Optional string - ISO 8601 time.
 **/
/** section: github
 *  Client.issues#updateMilestone(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - title (String): Required.
 *  - state (String): Optional. Validation rule: ` ^(open|closed)$ `.
 *  - description (String): Optional.
 *  - due_on (Date): Optional. Optional string - ISO 8601 time.
 **/
/** section: github
 *  Client.issues#deleteMilestone(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 * class Client.authorization
 **/
/** section: github
 *  Client.authorization#getAll(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.authorization#get(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.authorization#create(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - scopes (Array): Optional. Optional array - A list of scopes that this authorization is in.
 *  - note (String): Optional. Optional string - A note to remind you what the OAuth token is for.
 *  - note_url (String): Optional. Optional string - A URL to remind you what app the OAuth token is for.
 **/
/** section: github
 *  Client.authorization#update(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - scopes (Array): Optional. Optional array - A list of scopes that this authorization is in.
 *  - add_scopes (Array): Optional. Optional array - A list of scopes to add to this authorization.
 *  - remove_scopes (Array): Optional. Optional array - A list of scopes to remove from this authorization.
 *  - note (String): Optional. Optional string - A note to remind you what the OAuth token is for.
 *  - note_url (String): Optional. Optional string - A URL to remind you what app the OAuth token is for.
 **/
/** section: github
 *  Client.authorization#delete(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 * class Client.orgs
 **/
/** section: github
 *  Client.orgs#getFromUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.orgs#get(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.orgs#update(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - billing_email (String): Optional. Optional string - Billing email address. This address is not publicized.
 *  - company (String): Optional.
 *  - email (String): Optional. Optional string - Publicly visible email address.
 *  - location (String): Optional.
 *  - name (String): Optional.
 **/
/** section: github
 *  Client.orgs#getMembers(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.orgs#getMember(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - user (String): Required.
 **/
/** section: github
 *  Client.orgs#removeMember(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - user (String): Required.
 **/
/** section: github
 *  Client.orgs#getPublicMembers(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 **/
/** section: github
 *  Client.orgs#getPublicMember(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - user (String): Required.
 **/
/** section: github
 *  Client.orgs#publicizeMembership(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - user (String): Required.
 **/
/** section: github
 *  Client.orgs#concealMembership(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - user (String): Required.
 **/
/** section: github
 *  Client.orgs#getTeams(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 **/
/** section: github
 *  Client.orgs#getTeam(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.orgs#createTeam(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - name (String): Required.
 *  - repo_names (Array): Optional. Optional array of strings
 *  - permission (String): Optional. `pull` - team members can pull, but not push or administer this repositories (Default), `push` - team members can pull and push, but not administer this repositores, `admin` - team members can pull, push and administer these repositories. Validation rule: ` ^(pull|push|admin)$ `.
 **/
/** section: github
 *  Client.orgs#updateTeam(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - name (String): Required.
 *  - permission (String): Optional. `pull` - team members can pull, but not push or administer this repositories (Default), `push` - team members can pull and push, but not administer this repositores, `admin` - team members can pull, push and administer these repositories. Validation rule: ` ^(pull|push|admin)$ `.
 **/
/** section: github
 *  Client.orgs#deleteTeam(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.orgs#getTeamMembers(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.orgs#getTeamMember(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - user (String): Required.
 **/
/** section: github
 *  Client.orgs#addTeamMember(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - user (String): Required.
 **/
/** section: github
 *  Client.orgs#deleteTeamMember(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - user (String): Required.
 **/
/** section: github
 *  Client.orgs#getTeamRepos(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.orgs#getTeamRepo(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  Client.orgs#addTeamRepo(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  Client.orgs#deleteTeamRepo(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 * class Client.statuses
 **/
/** section: github
 *  Client.statuses#get(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 **/
/** section: github
 *  Client.statuses#create(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 *  - state (String): Required. State of the status - can be one of pending, success, error, or failure. Validation rule: ` ^(pending|success|error|failure)$ `.
 *  - target_url (String): Optional. Target url to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the ‘source’ of the Status.
 *  - description (String): Optional. Short description of the status.
 **/
/** section: github
 * class Client.pullRequests
 **/
/** section: github
 *  Client.pullRequests#getAll(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - state (String): Optional. Validation rule: ` ^(open|closed)$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.pullRequests#get(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.pullRequests#create(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - title (String): Required.
 *  - body (String): Optional.
 *  - base (String): Required. Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 *  - head (String): Required. Required string - The branch (or git ref) where your changes are implemented.
 **/
/** section: github
 *  Client.pullRequests#createFromIssue(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - issue (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - base (String): Required. Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 *  - head (String): Required. Required string - The branch (or git ref) where your changes are implemented.
 **/
/** section: github
 *  Client.pullRequests#update(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - state (String): Optional. Validation rule: ` ^(open|closed)$ `.
 *  - title (String): Required.
 *  - body (String): Optional.
 **/
/** section: github
 *  Client.pullRequests#getCommits(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.pullRequests#getFiles(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.pullRequests#getMerged(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.pullRequests#merge(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - commit_message (String): Optional. Optional string - The message that will be used for the merge commit
 **/
/** section: github
 *  Client.pullRequests#getComments(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.pullRequests#getComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.pullRequests#createComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - body (String): Required.
 *  - commit_id (String): Required. Required string - Sha of the commit to comment on.
 *  - path (String): Required. Required string - Relative path of the file to comment on.
 *  - position (Number): Required. Required number - Column index in the diff to comment on.
 **/
/** section: github
 *  Client.pullRequests#createCommentReply(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - body (String): Required.
 *  - in_reply_to (Number): Required.
 **/
/** section: github
 *  Client.pullRequests#updateComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - body (String): Required.
 **/
/** section: github
 *  Client.pullRequests#deleteComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 * class Client.repos
 **/
/** section: github
 *  Client.repos#getAll(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - type (String): Optional. Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`. Validation rule: ` ^(all|owner|public|private|member)$ `.
 *  - sort (String): Optional. Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. Validation rule: ` ^(created|updated|pushed|full_name)$ `.
 *  - direction (String): Optional. Validation rule: ` ^(asc|desc)$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getFromUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - type (String): Optional. Possible values: `all`, `owner`, `member`. Default: `public`. Validation rule: ` ^(all|owner|member)$ `.
 *  - sort (String): Optional. Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. Validation rule: ` ^(created|updated|pushed|full_name)$ `.
 *  - direction (String): Optional. Validation rule: ` ^(asc|desc)$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getFromOrg(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - type (String): Optional. Possible values: `all`, `public`, `member`. Default: `all`. Validation rule: ` ^(all|public|member)$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#create(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
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
/** section: github
 *  Client.repos#createFromOrg(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
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
/** section: github
 *  Client.repos#get(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  Client.repos#update(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
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
/** section: github
 *  Client.repos#delete(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  Client.repos#merge(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - base (String): Required. Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 *  - head (String): Required. Required string - The branch (or git ref) where your changes are implemented.
 *  - commit_message (String): Optional. Optional string - Commit message to use for the merge commit. If omitted, a default message will be used.
 **/
/** section: github
 *  Client.repos#getContributors(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - anon (Boolean): Optional. Optional flag. Set to 1 or true to include anonymous contributors in results.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getLanguages(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getTeams(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getTags(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getBranches(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getBranch(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - branch (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getCollaborators(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getCollaborator(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - collabuser (String): Required.
 **/
/** section: github
 *  Client.repos#addCollaborator(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - collabuser (String): Required.
 **/
/** section: github
 *  Client.repos#removeCollaborator(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - collabuser (String): Required.
 **/
/** section: github
 *  Client.repos#getCommits(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Optional. Optional string - Sha or branch to start listing commits from.
 *  - path (String): Optional. Optional string - Only commits containing this file path will be returned.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 *  - since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 **/
/** section: github
 *  Client.repos#getCommit(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 **/
/** section: github
 *  Client.repos#getAllCommitComments(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getCommitComments(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#createCommitComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 *  - body (String): Required.
 *  - commit_id (String): Required. Required string - Sha of the commit to comment on.
 *  - path (String): Optional. Optional string - Relative path of the file to comment on.
 *  - position (Number): Optional. Optional number - Line index in the diff to comment on.
 *  - line (Number): Optional. Optional number - Line number in the file to comment on. Defaults to 1.
 **/
/** section: github
 *  Client.repos#getCommitComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.repos#updateCommitComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 *  - body (String): Required.
 **/
/** section: github
 *  Client.repos#compareCommits(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - base (String): Required. Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 *  - head (String): Required. Required string - The branch (or git ref) where your changes are implemented.
 **/
/** section: github
 *  Client.repos#deleteCommitComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.repos#getReadme(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - ref (String): Optional. The String name of the Commit/Branch/Tag. Defaults to master.
 **/
/** section: github
 *  Client.repos#getContent(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - path (String): Optional. The content path.
 *  - ref (String): Optional. The String name of the Commit/Branch/Tag. Defaults to master.
 **/
/** section: github
 *  Client.repos#getArchiveLink(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - ref (String): Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 *  - archive_format (String): Required. Either tarball or zipball Validation rule: ` ^(tarball|zipball)$ `.
 **/
/** section: github
 *  Client.repos#getDownloads(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getDownload(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.repos#deleteDownload(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.repos#getForks(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sort (String): Optional. Possible values: `newest`, `oldest`, `watchers`, default: `newest`. Validation rule: ` ^(newest|oldest|watchers)$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#fork(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - org (String): Optional. Optional String - Organization login. The repository will be forked into this organization.
 **/
/** section: github
 *  Client.repos#getKeys(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getKey(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.repos#createKey(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - title (String): Required.
 *  - key (String): Required.
 **/
/** section: github
 *  Client.repos#updateKey(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 *  - title (String): Required.
 *  - key (String): Required.
 **/
/** section: github
 *  Client.repos#deleteKey(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.repos#getStargazers(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getStarred(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getStarredFromUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getStarring(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#star(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  Client.repos#unStar(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  Client.repos#getWatchers(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getWatched(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getWatchedFromUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getWatching(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#watch(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  Client.repos#unWatch(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  Client.repos#getHooks(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getHook(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.repos#createHook(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - name (String): Required.
 *  - config (Json): Required. Required hash - A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
 *  - events (Array): Optional. Optional array - Determines what events the hook is triggered for. Default: `['push']`.
 *  - active (Boolean): Optional. Optional boolean - Determines whether the hook is actually triggered on pushes.
 **/
/** section: github
 *  Client.repos#updateHook(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
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
/** section: github
 *  Client.repos#testHook(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.repos#deleteHook(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.repos#getAllReleases(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#getRelease(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.repos#createRelease(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - tag_name (String): Required.
 *  - target_commitish (String): Optional.
 *  - name (String): Required.
 *  - body (String): Required.
 *  - draft (Boolean): Optional.
 *  - prerelease (Boolean): Optional.
 **/
/** section: github
 *  Client.repos#editRelease(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
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
/** section: github
 *  Client.repos#deleteRelease(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.repos#listReleaseAssets(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.repos#uploadReleaseAsset(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 *  - content_type (String): Required.
 *  - name (String): Required.
 *  - content (Buffer): Required.
 **/
/** section: github
 *  Client.repos#getReleaseAsset(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.repos#editReleaseAsset(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 *  - name (String): Required.
 *  - label (String): Optional.
 **/
/** section: github
 *  Client.repos#deleteReleaseAsset(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 * class Client.user
 **/
/** section: github
 *  Client.user#getFrom(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 **/
/** section: github
 *  Client.user#getKeysFrom(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 **/
/** section: github
 *  Client.user#get(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  No other params, simply pass an empty Object literal `{}`
 **/
/** section: github
 *  Client.user#update(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - name (String): Optional.
 *  - email (String): Optional.
 *  - blog (String): Optional.
 *  - company (String): Optional.
 *  - location (String): Optional.
 *  - hireable (Boolean): Optional.
 *  - bio (String): Optional.
 **/
/** section: github
 *  Client.user#getOrgs(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.user#getEmails(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.user#addEmails(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  No other params, simply pass an empty Object literal `{}`
 **/
/** section: github
 *  Client.user#deleteEmails(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  No other params, simply pass an empty Object literal `{}`
 **/
/** section: github
 *  Client.user#getFollowers(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.user#getFollowingFromUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.user#getFollowing(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.user#getFollowUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.user#followUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 **/
/** section: github
 *  Client.user#unFollowUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 **/
/** section: github
 *  Client.user#getKeys(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.user#getKey(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  Client.user#createKey(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - title (String): Required.
 *  - key (String): Required.
 **/
/** section: github
 *  Client.user#updateKey(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - title (String): Required.
 *  - key (String): Required.
 **/
/** section: github
 *  Client.user#deleteKey(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 * class Client.events
 **/
/** section: github
 *  Client.events#get(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.events#getFromRepo(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.events#getFromRepoIssues(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.events#getFromRepoNetwork(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.events#getFromOrg(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.events#getReceived(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.events#getReceivedPublic(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.events#getFromUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.events#getFromUserPublic(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.events#getFromUserOrg(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - org (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 * class Client.search
 **/
/** section: github
 *  Client.search#issues(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - state (String): Required. open or closed Validation rule: ` ^(open|closed)$ `.
 *  - keyword (String): Required. Search term
 **/
/** section: github
 *  Client.search#repos(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - keyword (String): Required. Search term
 *  - language (String): Optional. Filter results by language, see https://github.com/languages
 *  - start_page (Number): Optional. Page number to fetch Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.search#users(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - keyword (String): Required. Keyword search parameters
 *  - start_page (Number): Optional. Page number to fetch Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  Client.search#email(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - email (String): Required. Email address
 **/
/** section: github
 * class Client.markdown
 **/
/** section: github
 *  Client.markdown#render(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - text (String): Required. The Markdown text to render
 *  - mode (String): Optional. The rendering mode, `markdown` to render a document as plain Markdown, just like README files are rendered. `gfm` to render a document as user-content, e.g. like user comments or issues are rendered. In GFM mode, hard line breaks are always taken into account, and issue and user mentions are linked accordingly. Validation rule: ` ^(markdown|gfm)$ `.
 *  - context (String): Optional. The repository context, only taken into account when rendering as `gfm`
 **/
