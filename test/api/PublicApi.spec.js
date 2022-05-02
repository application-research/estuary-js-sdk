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
    instance = new EstuaryApi.PublicApi();
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

  describe('PublicApi', function() {
    describe('contentByCidCidGet', function() {
      it('should call contentByCidCidGet successfully', function(done) {
        //uncomment below and update the code to test contentByCidCidGet
        //instance.contentByCidCidGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('publicByCidCidGet', function() {
      it('should call publicByCidCidGet successfully', function(done) {
        //uncomment below and update the code to test publicByCidCidGet
        //instance.publicByCidCidGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('publicInfoGet', function() {
      it('should call publicInfoGet successfully', function(done) {
        //uncomment below and update the code to test publicInfoGet
        //instance.publicInfoGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('publicMetricsDealsOnChainGet', function() {
      it('should call publicMetricsDealsOnChainGet successfully', function(done) {
        //uncomment below and update the code to test publicMetricsDealsOnChainGet
        //instance.publicMetricsDealsOnChainGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('publicMinersDealsMinerGet', function() {
      it('should call publicMinersDealsMinerGet successfully', function(done) {
        //uncomment below and update the code to test publicMinersDealsMinerGet
        //instance.publicMinersDealsMinerGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('publicMinersFailuresMinerGet', function() {
      it('should call publicMinersFailuresMinerGet successfully', function(done) {
        //uncomment below and update the code to test publicMinersFailuresMinerGet
        //instance.publicMinersFailuresMinerGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('publicMinersGet', function() {
      it('should call publicMinersGet successfully', function(done) {
        //uncomment below and update the code to test publicMinersGet
        //instance.publicMinersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('publicMinersStatsMinerGet', function() {
      it('should call publicMinersStatsMinerGet successfully', function(done) {
        //uncomment below and update the code to test publicMinersStatsMinerGet
        //instance.publicMinersStatsMinerGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('publicMinersStorageQueryMinerGet', function() {
      it('should call publicMinersStorageQueryMinerGet successfully', function(done) {
        //uncomment below and update the code to test publicMinersStorageQueryMinerGet
        //instance.publicMinersStorageQueryMinerGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('publicNetAddrsGet', function() {
      it('should call publicNetAddrsGet successfully', function(done) {
        //uncomment below and update the code to test publicNetAddrsGet
        //instance.publicNetAddrsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('publicNetPeersGet', function() {
      it('should call publicNetPeersGet successfully', function(done) {
        //uncomment below and update the code to test publicNetPeersGet
        //instance.publicNetPeersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('publicStatsGet', function() {
      it('should call publicStatsGet successfully', function(done) {
        //uncomment below and update the code to test publicStatsGet
        //instance.publicStatsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
