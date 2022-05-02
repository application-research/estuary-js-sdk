/**
 * Estuary API
 * This is the API for the Estuary application.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import MainImportDealBody from '../model/MainImportDealBody';
import UtilContentAddIpfsBody from '../model/UtilContentAddIpfsBody';

/**
* Content service.
* @module api/ContentApi
* @version 1.0.0
*/
export default class ContentApi {

    /**
    * Constructs a new ContentApi. 
    * @alias module:api/ContentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the contentAddCarPost operation.
     * @callback module:api/ContentApi~contentAddCarPostCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Car object
     * This endpoint is used to add a car object to the network. The object can be a file or a directory.
     * @param {String} body Car
     * @param {Object} opts Optional parameters
     * @param {String} opts.filename Filename
     * @param {String} opts.commp Commp
     * @param {String} opts.size Size
     * @param {module:api/ContentApi~contentAddCarPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    contentAddCarPost(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling contentAddCarPost");
      }

      let pathParams = {
      };
      let queryParams = {
        'filename': opts['filename'],
        'commp': opts['commp'],
        'size': opts['size']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/content/add-car', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contentAddIpfsPost operation.
     * @callback module:api/ContentApi~contentAddIpfsPostCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add IPFS object
     * This endpoint is used to add an IPFS object to the network. The object can be a file or a directory.
     * @param {module:model/UtilContentAddIpfsBody} body IPFS Body
     * @param {module:api/ContentApi~contentAddIpfsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    contentAddIpfsPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling contentAddIpfsPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/content/add-ipfs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contentAddPost operation.
     * @callback module:api/ContentApi~contentAddPostCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new content
     * This endpoint is used to upload new content.
     * @param {File} file File to upload
     * @param {Object} opts Optional parameters
     * @param {String} opts.collection Collection
     * @param {String} opts.collectionPath Collection Path
     * @param {module:api/ContentApi~contentAddPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    contentAddPost(file, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling contentAddPost");
      }

      let pathParams = {
      };
      let queryParams = {
        'collection': opts['collection'],
        'collectionPath': opts['collectionPath']
      };
      let headerParams = {
      };
      let formParams = {
        'file': file
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/content/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contentAggregatedContentGet operation.
     * @callback module:api/ContentApi~contentAggregatedContentGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get aggregated content stats
     * This endpoint returns aggregated content stats
     * @param {String} content Content ID
     * @param {module:api/ContentApi~contentAggregatedContentGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    contentAggregatedContentGet(content, callback) {
      let postBody = null;
      // verify the required parameter 'content' is set
      if (content === undefined || content === null) {
        throw new Error("Missing the required parameter 'content' when calling contentAggregatedContentGet");
      }

      let pathParams = {
        'content': content
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/content/aggregated/{content}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contentAllDealsGet operation.
     * @callback module:api/ContentApi~contentAllDealsGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all deals for a user
     * This endpoint is used to get all deals for a user
     * @param {String} begin Begin
     * @param {String} duration Duration
     * @param {String} all All
     * @param {module:api/ContentApi~contentAllDealsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    contentAllDealsGet(begin, duration, all, callback) {
      let postBody = null;
      // verify the required parameter 'begin' is set
      if (begin === undefined || begin === null) {
        throw new Error("Missing the required parameter 'begin' when calling contentAllDealsGet");
      }
      // verify the required parameter 'duration' is set
      if (duration === undefined || duration === null) {
        throw new Error("Missing the required parameter 'duration' when calling contentAllDealsGet");
      }
      // verify the required parameter 'all' is set
      if (all === undefined || all === null) {
        throw new Error("Missing the required parameter 'all' when calling contentAllDealsGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'begin': begin,
        'duration': duration,
        'all': all
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/content/all-deals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contentBwUsageContentGet operation.
     * @callback module:api/ContentApi~contentBwUsageContentGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get content bandwidth
     * This endpoint returns content bandwidth
     * @param {String} content Content ID
     * @param {module:api/ContentApi~contentBwUsageContentGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    contentBwUsageContentGet(content, callback) {
      let postBody = null;
      // verify the required parameter 'content' is set
      if (content === undefined || content === null) {
        throw new Error("Missing the required parameter 'content' when calling contentBwUsageContentGet");
      }

      let pathParams = {
        'content': content
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/content/bw-usage/{content}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contentCreatePost operation.
     * @callback module:api/ContentApi~contentCreatePostCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new content
     * This endpoint adds a new content
     * @param {String} body Content
     * @param {module:api/ContentApi~contentCreatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    contentCreatePost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling contentCreatePost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/content/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contentDealsGet operation.
     * @callback module:api/ContentApi~contentDealsGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Content with deals
     * This endpoint lists all content with deals
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit
     * @param {Number} opts.offset Offset
     * @param {module:api/ContentApi~contentDealsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    contentDealsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/content/deals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contentEnsureReplicationDatacidGet operation.
     * @callback module:api/ContentApi~contentEnsureReplicationDatacidGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ensure Replication
     * This endpoint ensures that the content is replicated to the specified number of providers
     * @param {String} datacid Data CID
     * @param {module:api/ContentApi~contentEnsureReplicationDatacidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    contentEnsureReplicationDatacidGet(datacid, callback) {
      let postBody = null;
      // verify the required parameter 'datacid' is set
      if (datacid === undefined || datacid === null) {
        throw new Error("Missing the required parameter 'datacid' when calling contentEnsureReplicationDatacidGet");
      }

      let pathParams = {
        'datacid': datacid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/content/ensure-replication/{datacid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contentFailuresContentGet operation.
     * @callback module:api/ContentApi~contentFailuresContentGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all failures for a content
     * This endpoint returns all failures for a content
     * @param {String} content Content ID
     * @param {module:api/ContentApi~contentFailuresContentGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    contentFailuresContentGet(content, callback) {
      let postBody = null;
      // verify the required parameter 'content' is set
      if (content === undefined || content === null) {
        throw new Error("Missing the required parameter 'content' when calling contentFailuresContentGet");
      }

      let pathParams = {
        'content': content
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/content/failures/{content}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contentImportdealPost operation.
     * @callback module:api/ContentApi~contentImportdealPostCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import a deal
     * This endpoint imports a deal into the shuttle.
     * @param {module:model/MainImportDealBody} body Import a deal
     * @param {module:api/ContentApi~contentImportdealPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    contentImportdealPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling contentImportdealPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/content/importdeal', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contentListGet operation.
     * @callback module:api/ContentApi~contentListGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all pinned content
     * This endpoint lists all content
     * @param {module:api/ContentApi~contentListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    contentListGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/content/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contentReadContGet operation.
     * @callback module:api/ContentApi~contentReadContGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read content
     * This endpoint reads content from the blockstore
     * @param {String} cont CID
     * @param {module:api/ContentApi~contentReadContGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    contentReadContGet(cont, callback) {
      let postBody = null;
      // verify the required parameter 'cont' is set
      if (cont === undefined || cont === null) {
        throw new Error("Missing the required parameter 'cont' when calling contentReadContGet");
      }

      let pathParams = {
        'cont': cont
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/content/read/{cont}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contentStagingZonesGet operation.
     * @callback module:api/ContentApi~contentStagingZonesGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get staging zone for user
     * This endpoint is used to get staging zone for user.
     * @param {module:api/ContentApi~contentStagingZonesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    contentStagingZonesGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/content/staging-zones', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contentStatsGet operation.
     * @callback module:api/ContentApi~contentStatsGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get content statistics
     * This endpoint is used to get content statistics. Every content stored in the network (estuary) is tracked by a unique ID which can be used to get information about the content. This endpoint will allow the consumer to get the collected stats of a conten
     * @param {String} limit limit
     * @param {module:api/ContentApi~contentStatsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    contentStatsGet(limit, callback) {
      let postBody = null;
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling contentStatsGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'limit': limit
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/content/stats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contentStatusIdGet operation.
     * @callback module:api/ContentApi~contentStatusIdGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Content Status
     * This endpoint returns the status of a content
     * @param {Number} id Content ID
     * @param {module:api/ContentApi~contentStatusIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    contentStatusIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling contentStatusIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/content/status/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
