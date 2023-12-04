/*
 * SHOPPERS COMMUNITY API
 * Endpoints for the Shoppers community backend
 *
 * OpenAPI spec version: 1.0.0
 * Contact: joelnyongesa148@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.51
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";

/**
* SEARCHQUERIES service.
* @module api/SEARCHQUERIESApi
* @version 1.0.0
*/
export class SEARCHQUERIESApi {

    /**
    * Constructs a new SEARCHQUERIESApi. 
    * @alias module:api/SEARCHQUERIESApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the searchQueriesGet operation.
     * @callback moduleapi/SEARCHQUERIESApi~searchQueriesGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the terms the users searched for in our database
     * @param {module:api/SEARCHQUERIESApi~searchQueriesGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    searchQueriesGet(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/search_queries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}