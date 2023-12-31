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
import {ApiClient} from '../ApiClient';

/**
 * The LoginBody model module.
 * @module model/LoginBody
 * @version 1.0.0
 */
export class LoginBody {
  /**
   * Constructs a new <code>LoginBody</code>.
   * @alias module:model/LoginBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>LoginBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginBody} obj Optional instance to populate.
   * @return {module:model/LoginBody} The populated <code>LoginBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LoginBody();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} email
 */
LoginBody.prototype.email = undefined;

/**
 * @member {String} password
 */
LoginBody.prototype.password = undefined;

