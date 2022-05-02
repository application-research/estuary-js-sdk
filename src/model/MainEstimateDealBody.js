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

import ApiClient from '../ApiClient';

/**
 * The MainEstimateDealBody model module.
 * @module model/MainEstimateDealBody
 * @version 1.0.0
 */
class MainEstimateDealBody {
    /**
     * Constructs a new <code>MainEstimateDealBody</code>.
     * @alias module:model/MainEstimateDealBody
     */
    constructor() { 
        
        MainEstimateDealBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MainEstimateDealBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MainEstimateDealBody} obj Optional instance to populate.
     * @return {module:model/MainEstimateDealBody} The populated <code>MainEstimateDealBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MainEstimateDealBody();

            if (data.hasOwnProperty('durationBlks')) {
                obj['durationBlks'] = ApiClient.convertToType(data['durationBlks'], 'Number');
            }
            if (data.hasOwnProperty('replication')) {
                obj['replication'] = ApiClient.convertToType(data['replication'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('verified')) {
                obj['verified'] = ApiClient.convertToType(data['verified'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} durationBlks
 */
MainEstimateDealBody.prototype['durationBlks'] = undefined;

/**
 * @member {Number} replication
 */
MainEstimateDealBody.prototype['replication'] = undefined;

/**
 * @member {Number} size
 */
MainEstimateDealBody.prototype['size'] = undefined;

/**
 * @member {Boolean} verified
 */
MainEstimateDealBody.prototype['verified'] = undefined;






export default MainEstimateDealBody;

