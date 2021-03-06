/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Billing Plan with a version
 *
 */
class VersionedBillingPlan {
  /**
   * Create a VersionedBillingPlan.
   * @member {object} [document]
   * @member {string} [document.id] The Billing Plan ID
   * @member {string} [document.version] Version of the Billing Plan schema
   * @member {number} [document.priceBucket] Price bucket of the billing plan.
   * Free plans start with 0, paid plans have higher price buckets
   * @member {string} [document.service] Name of the service that the plan
   * applies to. Possible values include: 'Build', 'Push', 'Test'
   * @member {object} [document.limits]
   * @member {object} [document.attributes]
   * @member {string} [etag] The version of the object
   */
  constructor() {
  }

  /**
   * Defines the metadata of VersionedBillingPlan
   *
   * @returns {object} metadata of VersionedBillingPlan
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VersionedBillingPlan',
      type: {
        name: 'Composite',
        className: 'VersionedBillingPlan',
        modelProperties: {
          document: {
            required: false,
            serializedName: 'document',
            type: {
              name: 'Composite',
              className: 'BillingPlan'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VersionedBillingPlan;
