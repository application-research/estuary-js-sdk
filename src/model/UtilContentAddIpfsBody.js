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
 * The UtilContentAddIpfsBody model module.
 * @module model/UtilContentAddIpfsBody
 * @version 1.0.0
 */
class UtilContentAddIpfsBody {
    /**
     * Constructs a new <code>UtilContentAddIpfsBody</code>.
     * @alias module:model/UtilContentAddIpfsBody
     */
    constructor() { 
        
        UtilContentAddIpfsBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UtilContentAddIpfsBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UtilContentAddIpfsBody} obj Optional instance to populate.
     * @return {module:model/UtilContentAddIpfsBody} The populated <code>UtilContentAddIpfsBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UtilContentAddIpfsBody();

            if (data.hasOwnProperty('collection')) {
                obj['collection'] = ApiClient.convertToType(data['collection'], 'String');
            }
            if (data.hasOwnProperty('collectionPath')) {
                obj['collectionPath'] = ApiClient.convertToType(data['collectionPath'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('peers')) {
                obj['peers'] = ApiClient.convertToType(data['peers'], ['String']);
            }
            if (data.hasOwnProperty('root')) {
                obj['root'] = ApiClient.convertToType(data['root'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} collection
 */
UtilContentAddIpfsBody.prototype['collection'] = undefined;

/**
 * @member {String} collectionPath
 */
UtilContentAddIpfsBody.prototype['collectionPath'] = undefined;

/**
 * @member {String} name
 */
UtilContentAddIpfsBody.prototype['name'] = undefined;

/**
 * @member {Array.<String>} peers
 */
UtilContentAddIpfsBody.prototype['peers'] = undefined;

/**
 * @member {String} root
 */
UtilContentAddIpfsBody.prototype['root'] = undefined;






export default UtilContentAddIpfsBody;
