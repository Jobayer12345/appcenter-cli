/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a UserNameUpdateRequest.
 */
class UserNameUpdateRequest {
  /**
   * Create a UserNameUpdateRequest.
   * @member {string} [name] The new, unique name that is used to identify.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UserNameUpdateRequest
   *
   * @returns {object} metadata of UserNameUpdateRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UserNameUpdateRequest',
      type: {
        name: 'Composite',
        className: 'UserNameUpdateRequest',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UserNameUpdateRequest;
