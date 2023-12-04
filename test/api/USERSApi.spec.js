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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ShoppersCommunityApi);
  }
}(this, function(expect, ShoppersCommunityApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ShoppersCommunityApi.USERSApi();
  });

  describe('(package)', function() {
    describe('USERSApi', function() {
      describe('usersIdGet', function() {
        it('should call usersIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for usersIdGet call
          /*

          instance.usersIdGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersIdReviewsGet', function() {
        it('should call usersIdReviewsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for usersIdReviewsGet call
          /*

          instance.usersIdReviewsGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersIdReviewsPost', function() {
        it('should call usersIdReviewsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for usersIdReviewsPost call
          /*

          instance.usersIdReviewsPost(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersIdSearchQueriesGet', function() {
        it('should call usersIdSearchQueriesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for usersIdSearchQueriesGet call
          /*

          instance.usersIdSearchQueriesGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
