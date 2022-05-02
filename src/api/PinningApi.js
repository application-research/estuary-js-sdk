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
import UtilHttpError from '../model/UtilHttpError';

/**
* Pinning service.
* @module api/PinningApi
* @version 1.0.0
*/
export default class PinningApi {

    /**
    * Constructs a new PinningApi. 
    * @alias module:api/PinningApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the pinningPinsGet operation.
     * @callback module:api/PinningApi~pinningPinsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all pinned objects
     * This endpoint lists all pinned objects
     * @param {module:api/PinningApi~pinningPinsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    pinningPinsGet(callback) {
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
      let returnType = null;
      return this.apiClient.callApi(
        '/pinning/pins', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the pinningPinsPost operation.
     * @callback module:api/PinningApi~pinningPinsPostCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add and pin object
     * This endpoint adds a pin to the IPFS daemon.
     * @param {String} cid cid
     * @param {String} name name
     * @param {module:api/PinningApi~pinningPinsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    pinningPinsPost(cid, name, callback) {
      let postBody = null;
      // verify the required parameter 'cid' is set
      if (cid === undefined || cid === null) {
        throw new Error("Missing the required parameter 'cid' when calling pinningPinsPost");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling pinningPinsPost");
      }

      let pathParams = {
      };
      let queryParams = {
        'cid': cid,
        'name': name
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
        '/pinning/pins', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the pinningPinsRequestidDelete operation.
     * @callback module:api/PinningApi~pinningPinsRequestidDeleteCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a pinned object
     * This endpoint deletes a pinned object.
     * @param {String} requestid requestid
     * @param {module:api/PinningApi~pinningPinsRequestidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    pinningPinsRequestidDelete(requestid, callback) {
      let postBody = null;
      // verify the required parameter 'requestid' is set
      if (requestid === undefined || requestid === null) {
        throw new Error("Missing the required parameter 'requestid' when calling pinningPinsRequestidDelete");
      }

      let pathParams = {
        'requestid': requestid
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
        '/pinning/pins/{requestid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the pinningPinsRequestidGet operation.
     * @callback module:api/PinningApi~pinningPinsRequestidGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a pinned objects
     * This endpoint returns a pinned object.
     * @param {String} requestid cid
     * @param {module:api/PinningApi~pinningPinsRequestidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    pinningPinsRequestidGet(requestid, callback) {
      let postBody = null;
      // verify the required parameter 'requestid' is set
      if (requestid === undefined || requestid === null) {
        throw new Error("Missing the required parameter 'requestid' when calling pinningPinsRequestidGet");
      }

      let pathParams = {
        'requestid': requestid
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
        '/pinning/pins/{requestid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the pinningPinsRequestidPost operation.
     * @callback module:api/PinningApi~pinningPinsRequestidPostCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace a pinned object
     * This endpoint replaces a pinned object.
     * @param {String} requestid id
     * @param {module:api/PinningApi~pinningPinsRequestidPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    pinningPinsRequestidPost(requestid, callback) {
      let postBody = null;
      // verify the required parameter 'requestid' is set
      if (requestid === undefined || requestid === null) {
        throw new Error("Missing the required parameter 'requestid' when calling pinningPinsRequestidPost");
      }

      let pathParams = {
        'requestid': requestid
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
        '/pinning/pins/{requestid}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
