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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EstuaryApi);
  }
}(this, function(expect, EstuaryApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EstuaryApi.DealsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DealsApi', function() {
    describe('dealsEstimatePost', function() {
      it('should call dealsEstimatePost successfully', function(done) {
        //uncomment below and update the code to test dealsEstimatePost
        //instance.dealsEstimatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dealsFailuresGet', function() {
      it('should call dealsFailuresGet successfully', function(done) {
        //uncomment below and update the code to test dealsFailuresGet
        //instance.dealsFailuresGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dealsInfoDealidGet', function() {
      it('should call dealsInfoDealidGet successfully', function(done) {
        //uncomment below and update the code to test dealsInfoDealidGet
        //instance.dealsInfoDealidGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dealsMakeMinerPost', function() {
      it('should call dealsMakeMinerPost successfully', function(done) {
        //uncomment below and update the code to test dealsMakeMinerPost
        //instance.dealsMakeMinerPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dealsProposalPropcidGet', function() {
      it('should call dealsProposalPropcidGet successfully', function(done) {
        //uncomment below and update the code to test dealsProposalPropcidGet
        //instance.dealsProposalPropcidGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dealsQueryMinerGet', function() {
      it('should call dealsQueryMinerGet successfully', function(done) {
        //uncomment below and update the code to test dealsQueryMinerGet
        //instance.dealsQueryMinerGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dealsStatusByProposalPropcidGet', function() {
      it('should call dealsStatusByProposalPropcidGet successfully', function(done) {
        //uncomment below and update the code to test dealsStatusByProposalPropcidGet
        //instance.dealsStatusByProposalPropcidGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dealsStatusDealGet', function() {
      it('should call dealsStatusDealGet successfully', function(done) {
        //uncomment below and update the code to test dealsStatusDealGet
        //instance.dealsStatusDealGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dealsStatusMinerPropcidGet', function() {
      it('should call dealsStatusMinerPropcidGet successfully', function(done) {
        //uncomment below and update the code to test dealsStatusMinerPropcidGet
        //instance.dealsStatusMinerPropcidGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dealsTransferInProgressGet', function() {
      it('should call dealsTransferInProgressGet successfully', function(done) {
        //uncomment below and update the code to test dealsTransferInProgressGet
        //instance.dealsTransferInProgressGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dealsTransferStatusPost', function() {
      it('should call dealsTransferStatusPost successfully', function(done) {
        //uncomment below and update the code to test dealsTransferStatusPost
        //instance.dealsTransferStatusPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));