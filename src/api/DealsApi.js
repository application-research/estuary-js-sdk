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
import MainEstimateDealBody from '../model/MainEstimateDealBody';

/**
* Deals service.
* @module api/DealsApi
* @version 1.0.0
*/
export default class DealsApi {

    /**
    * Constructs a new DealsApi. 
    * @alias module:api/DealsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the dealsEstimatePost operation.
     * @callback module:api/DealsApi~dealsEstimatePostCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Estimate the cost of a deal
     * This endpoint estimates the cost of a deal
     * @param {module:model/MainEstimateDealBody} body The size of the deal in bytes, the replication factor, and the duration of the deal in blocks
     * @param {module:api/DealsApi~dealsEstimatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    dealsEstimatePost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling dealsEstimatePost");
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
        '/deals/estimate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dealsFailuresGet operation.
     * @callback module:api/DealsApi~dealsFailuresGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get storage failures
     * This endpoint returns a list of storage failures
     * @param {module:api/DealsApi~dealsFailuresGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    dealsFailuresGet(callback) {
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
        '/deals/failures', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dealsInfoDealidGet operation.
     * @callback module:api/DealsApi~dealsInfoDealidGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Deal Info
     * This endpoint returns the deal info for a deal
     * @param {Number} dealid Deal ID
     * @param {module:api/DealsApi~dealsInfoDealidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    dealsInfoDealidGet(dealid, callback) {
      let postBody = null;
      // verify the required parameter 'dealid' is set
      if (dealid === undefined || dealid === null) {
        throw new Error("Missing the required parameter 'dealid' when calling dealsInfoDealidGet");
      }

      let pathParams = {
        'dealid': dealid
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
        '/deals/info/{dealid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dealsMakeMinerPost operation.
     * @callback module:api/DealsApi~dealsMakeMinerPostCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Make Deal
     * This endpoint makes a deal for a given content and miner
     * @param {String} miner Miner
     * @param {String} dealRequest Deal Request
     * @param {module:api/DealsApi~dealsMakeMinerPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    dealsMakeMinerPost(miner, dealRequest, callback) {
      let postBody = dealRequest;
      // verify the required parameter 'miner' is set
      if (miner === undefined || miner === null) {
        throw new Error("Missing the required parameter 'miner' when calling dealsMakeMinerPost");
      }
      // verify the required parameter 'dealRequest' is set
      if (dealRequest === undefined || dealRequest === null) {
        throw new Error("Missing the required parameter 'dealRequest' when calling dealsMakeMinerPost");
      }

      let pathParams = {
        'miner': miner
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
        '/deals/make/{miner}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dealsProposalPropcidGet operation.
     * @callback module:api/DealsApi~dealsProposalPropcidGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Proposal
     * This endpoint returns the proposal for a deal
     * @param {String} propcid Proposal CID
     * @param {module:api/DealsApi~dealsProposalPropcidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    dealsProposalPropcidGet(propcid, callback) {
      let postBody = null;
      // verify the required parameter 'propcid' is set
      if (propcid === undefined || propcid === null) {
        throw new Error("Missing the required parameter 'propcid' when calling dealsProposalPropcidGet");
      }

      let pathParams = {
        'propcid': propcid
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
        '/deals/proposal/{propcid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dealsQueryMinerGet operation.
     * @callback module:api/DealsApi~dealsQueryMinerGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query Ask
     * This endpoint returns the ask for a given CID
     * @param {String} miner CID
     * @param {module:api/DealsApi~dealsQueryMinerGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    dealsQueryMinerGet(miner, callback) {
      let postBody = null;
      // verify the required parameter 'miner' is set
      if (miner === undefined || miner === null) {
        throw new Error("Missing the required parameter 'miner' when calling dealsQueryMinerGet");
      }

      let pathParams = {
        'miner': miner
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
        '/deals/query/{miner}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dealsStatusByProposalPropcidGet operation.
     * @callback module:api/DealsApi~dealsStatusByProposalPropcidGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Deal Status by PropCid
     * Get Deal Status by PropCid
     * @param {String} propcid PropCid
     * @param {module:api/DealsApi~dealsStatusByProposalPropcidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    dealsStatusByProposalPropcidGet(propcid, callback) {
      let postBody = null;
      // verify the required parameter 'propcid' is set
      if (propcid === undefined || propcid === null) {
        throw new Error("Missing the required parameter 'propcid' when calling dealsStatusByProposalPropcidGet");
      }

      let pathParams = {
        'propcid': propcid
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
        '/deals/status-by-proposal/{propcid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dealsStatusDealGet operation.
     * @callback module:api/DealsApi~dealsStatusDealGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Deal Status
     * This endpoint returns the status of a deal
     * @param {Number} deal Deal ID
     * @param {module:api/DealsApi~dealsStatusDealGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    dealsStatusDealGet(deal, callback) {
      let postBody = null;
      // verify the required parameter 'deal' is set
      if (deal === undefined || deal === null) {
        throw new Error("Missing the required parameter 'deal' when calling dealsStatusDealGet");
      }

      let pathParams = {
        'deal': deal
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
        '/deals/status/{deal}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dealsStatusMinerPropcidGet operation.
     * @callback module:api/DealsApi~dealsStatusMinerPropcidGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deal Status
     * This endpoint returns the status of a deal
     * @param {String} miner Miner
     * @param {String} propcid Proposal CID
     * @param {module:api/DealsApi~dealsStatusMinerPropcidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    dealsStatusMinerPropcidGet(miner, propcid, callback) {
      let postBody = null;
      // verify the required parameter 'miner' is set
      if (miner === undefined || miner === null) {
        throw new Error("Missing the required parameter 'miner' when calling dealsStatusMinerPropcidGet");
      }
      // verify the required parameter 'propcid' is set
      if (propcid === undefined || propcid === null) {
        throw new Error("Missing the required parameter 'propcid' when calling dealsStatusMinerPropcidGet");
      }

      let pathParams = {
        'miner': miner,
        'propcid': propcid
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
        '/deals/status/{miner}/{propcid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dealsTransferInProgressGet operation.
     * @callback module:api/DealsApi~dealsTransferInProgressGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transfer In Progress
     * This endpoint returns the in-progress transfers
     * @param {module:api/DealsApi~dealsTransferInProgressGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    dealsTransferInProgressGet(callback) {
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
        '/deals/transfer/in-progress', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dealsTransferStatusPost operation.
     * @callback module:api/DealsApi~dealsTransferStatusPostCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transfer Status
     * This endpoint returns the status of a transfer
     * @param {module:api/DealsApi~dealsTransferStatusPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    dealsTransferStatusPost(callback) {
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
        '/deals/transfer/status', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}