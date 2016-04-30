// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.AccessToken
 * @header lbServices.AccessToken
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AccessToken` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "AccessToken",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/AccessTokens/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#create
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/AccessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#createMany
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/AccessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#upsert
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/AccessTokens",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#exists
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/AccessTokens/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#findById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/AccessTokens/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#find
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/AccessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#findOne
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/AccessTokens/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#updateAll
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/AccessTokens/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#deleteById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/AccessTokens/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#count
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/AccessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#prototype$updateAttributes
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/AccessTokens/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#createChangeStream
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/AccessTokens/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Admin.accessTokens.findById() instead.
        "::findById::Admin::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Admins/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use Admin.accessTokens.destroyById() instead.
        "::destroyById::Admin::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Admins/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Admin.accessTokens.updateById() instead.
        "::updateById::Admin::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Admins/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Admin.accessTokens() instead.
        "::get::Admin::accessTokens": {
          isArray: true,
          url: urlBase + "/Admins/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use Admin.accessTokens.create() instead.
        "::create::Admin::accessTokens": {
          url: urlBase + "/Admins/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use Admin.accessTokens.createMany() instead.
        "::createMany::Admin::accessTokens": {
          isArray: true,
          url: urlBase + "/Admins/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use Admin.accessTokens.destroyAll() instead.
        "::delete::Admin::accessTokens": {
          url: urlBase + "/Admins/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use Admin.accessTokens.count() instead.
        "::count::Admin::accessTokens": {
          url: urlBase + "/Admins/:id/accessTokens/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.AccessToken#updateOrCreate
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#update
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#destroyById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#removeById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.AccessToken#modelName
    * @propertyOf lbServices.AccessToken
    * @description
    * The name of the model represented by this $resource,
    * i.e. `AccessToken`.
    */
    R.modelName = "AccessToken";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Admin
 * @header lbServices.Admin
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Admin` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Admin",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Admins/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Admin.accessTokens.findById() instead.
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Admins/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use Admin.accessTokens.destroyById() instead.
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Admins/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Admin.accessTokens.updateById() instead.
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Admins/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Admin.questions.findById() instead.
        "prototype$__findById__questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Admins/:id/questions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Admin.questions.destroyById() instead.
        "prototype$__destroyById__questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Admins/:id/questions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Admin.questions.updateById() instead.
        "prototype$__updateById__questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Admins/:id/questions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Admin.accessTokens() instead.
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Admins/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use Admin.accessTokens.create() instead.
        "prototype$__create__accessTokens": {
          url: urlBase + "/Admins/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use Admin.accessTokens.destroyAll() instead.
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Admins/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use Admin.accessTokens.count() instead.
        "prototype$__count__accessTokens": {
          url: urlBase + "/Admins/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Admin.questions() instead.
        "prototype$__get__questions": {
          isArray: true,
          url: urlBase + "/Admins/:id/questions",
          method: "GET"
        },

        // INTERNAL. Use Admin.questions.create() instead.
        "prototype$__create__questions": {
          url: urlBase + "/Admins/:id/questions",
          method: "POST"
        },

        // INTERNAL. Use Admin.questions.destroyAll() instead.
        "prototype$__delete__questions": {
          url: urlBase + "/Admins/:id/questions",
          method: "DELETE"
        },

        // INTERNAL. Use Admin.questions.count() instead.
        "prototype$__count__questions": {
          url: urlBase + "/Admins/:id/questions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#create
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Admins",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#createMany
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Admins",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#upsert
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Admins",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#exists
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Admins/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#findById
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Admins/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#find
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Admins",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#findOne
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Admins/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#updateAll
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Admins/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#deleteById
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Admins/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#count
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Admins/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#prototype$updateAttributes
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Admins/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#createChangeStream
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Admins/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#login
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Admins/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#logout
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Admins/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#confirm
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Admins/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#resetPassword
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Admins/reset",
          method: "POST"
        },

        // INTERNAL. Use Question.creator() instead.
        "::get::Question::creator": {
          url: urlBase + "/Questions/:id/creator",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#getCurrent
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Admins" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Admin#updateOrCreate
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Admin#update
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Admin#destroyById
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Admin#removeById
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Admin#getCachedCurrent
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Admin#login} or
         * {@link lbServices.Admin#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Admin instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin#isAuthenticated
         * @methodOf lbServices.Admin
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin#getCurrentId
         * @methodOf lbServices.Admin
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Admin#modelName
    * @propertyOf lbServices.Admin
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Admin`.
    */
    R.modelName = "Admin";

    /**
     * @ngdoc object
     * @name lbServices.Admin.accessTokens
     * @header lbServices.Admin.accessTokens
     * @object
     * @description
     *
     * The object `Admin.accessTokens` groups methods
     * manipulating `AccessToken` instances related to `Admin`.
     *
     * Call {@link lbServices.Admin#accessTokens Admin.accessTokens()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Admin#accessTokens
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Queries accessTokens of Admin.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::get::Admin::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.accessTokens#count
         * @methodOf lbServices.Admin.accessTokens
         *
         * @description
         *
         * Counts accessTokens of Admin.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.accessTokens.count = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::count::Admin::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.accessTokens#create
         * @methodOf lbServices.Admin.accessTokens
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.create = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::create::Admin::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.accessTokens#createMany
         * @methodOf lbServices.Admin.accessTokens
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.createMany = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::createMany::Admin::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.accessTokens#destroyAll
         * @methodOf lbServices.Admin.accessTokens
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyAll = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::delete::Admin::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.accessTokens#destroyById
         * @methodOf lbServices.Admin.accessTokens
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::destroyById::Admin::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.accessTokens#findById
         * @methodOf lbServices.Admin.accessTokens
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.findById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::findById::Admin::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.accessTokens#updateById
         * @methodOf lbServices.Admin.accessTokens
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.updateById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::updateById::Admin::accessTokens"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Admin.questions
     * @header lbServices.Admin.questions
     * @object
     * @description
     *
     * The object `Admin.questions` groups methods
     * manipulating `Question` instances related to `Admin`.
     *
     * Call {@link lbServices.Admin#questions Admin.questions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Admin#questions
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Queries questions of Admin.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::Admin::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.questions#count
         * @methodOf lbServices.Admin.questions
         *
         * @description
         *
         * Counts questions of Admin.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.questions.count = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::count::Admin::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.questions#create
         * @methodOf lbServices.Admin.questions
         *
         * @description
         *
         * Creates a new instance in questions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions.create = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::create::Admin::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.questions#createMany
         * @methodOf lbServices.Admin.questions
         *
         * @description
         *
         * Creates a new instance in questions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions.createMany = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::createMany::Admin::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.questions#destroyAll
         * @methodOf lbServices.Admin.questions
         *
         * @description
         *
         * Deletes all questions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.questions.destroyAll = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::delete::Admin::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.questions#destroyById
         * @methodOf lbServices.Admin.questions
         *
         * @description
         *
         * Delete a related item by id for questions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for questions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.questions.destroyById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::destroyById::Admin::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.questions#findById
         * @methodOf lbServices.Admin.questions
         *
         * @description
         *
         * Find a related item by id for questions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for questions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions.findById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::findById::Admin::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin.questions#updateById
         * @methodOf lbServices.Admin.questions
         *
         * @description
         *
         * Update a related item by id for questions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for questions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions.updateById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::updateById::Admin::questions"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Question
 * @header lbServices.Question
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Question` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Question",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Questions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Question.creator() instead.
        "prototype$__get__creator": {
          url: urlBase + "/Questions/:id/creator",
          method: "GET"
        },

        // INTERNAL. Use Question.choices.findById() instead.
        "prototype$__findById__choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/choices/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.choices.destroyById() instead.
        "prototype$__destroyById__choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/choices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.choices.updateById() instead.
        "prototype$__updateById__choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/choices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.responses.findById() instead.
        "prototype$__findById__responses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/responses/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.responses.destroyById() instead.
        "prototype$__destroyById__responses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/responses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.responses.updateById() instead.
        "prototype$__updateById__responses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/responses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.choices() instead.
        "prototype$__get__choices": {
          isArray: true,
          url: urlBase + "/Questions/:id/choices",
          method: "GET"
        },

        // INTERNAL. Use Question.choices.create() instead.
        "prototype$__create__choices": {
          url: urlBase + "/Questions/:id/choices",
          method: "POST"
        },

        // INTERNAL. Use Question.choices.destroyAll() instead.
        "prototype$__delete__choices": {
          url: urlBase + "/Questions/:id/choices",
          method: "DELETE"
        },

        // INTERNAL. Use Question.choices.count() instead.
        "prototype$__count__choices": {
          url: urlBase + "/Questions/:id/choices/count",
          method: "GET"
        },

        // INTERNAL. Use Question.responses() instead.
        "prototype$__get__responses": {
          isArray: true,
          url: urlBase + "/Questions/:id/responses",
          method: "GET"
        },

        // INTERNAL. Use Question.responses.create() instead.
        "prototype$__create__responses": {
          url: urlBase + "/Questions/:id/responses",
          method: "POST"
        },

        // INTERNAL. Use Question.responses.destroyAll() instead.
        "prototype$__delete__responses": {
          url: urlBase + "/Questions/:id/responses",
          method: "DELETE"
        },

        // INTERNAL. Use Question.responses.count() instead.
        "prototype$__count__responses": {
          url: urlBase + "/Questions/:id/responses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#create
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Questions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#createMany
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Questions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#upsert
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Questions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#exists
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Questions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#findById
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Questions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#find
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Questions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#findOne
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Questions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#updateAll
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Questions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#deleteById
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Questions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#count
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Questions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#prototype$updateAttributes
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Questions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#createChangeStream
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Questions/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Admin.questions.findById() instead.
        "::findById::Admin::questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Admins/:id/questions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Admin.questions.destroyById() instead.
        "::destroyById::Admin::questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Admins/:id/questions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Admin.questions.updateById() instead.
        "::updateById::Admin::questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Admins/:id/questions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Admin.questions() instead.
        "::get::Admin::questions": {
          isArray: true,
          url: urlBase + "/Admins/:id/questions",
          method: "GET"
        },

        // INTERNAL. Use Admin.questions.create() instead.
        "::create::Admin::questions": {
          url: urlBase + "/Admins/:id/questions",
          method: "POST"
        },

        // INTERNAL. Use Admin.questions.createMany() instead.
        "::createMany::Admin::questions": {
          isArray: true,
          url: urlBase + "/Admins/:id/questions",
          method: "POST"
        },

        // INTERNAL. Use Admin.questions.destroyAll() instead.
        "::delete::Admin::questions": {
          url: urlBase + "/Admins/:id/questions",
          method: "DELETE"
        },

        // INTERNAL. Use Admin.questions.count() instead.
        "::count::Admin::questions": {
          url: urlBase + "/Admins/:id/questions/count",
          method: "GET"
        },

        // INTERNAL. Use Choice.question() instead.
        "::get::Choice::question": {
          url: urlBase + "/Choices/:id/question",
          method: "GET"
        },

        // INTERNAL. Use Response.question() instead.
        "::get::Response::question": {
          url: urlBase + "/Responses/:id/question",
          method: "GET"
        },

        // INTERNAL. Use Guest.questions.findById() instead.
        "::findById::Guest::questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/questions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Guest.questions.destroyById() instead.
        "::destroyById::Guest::questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/questions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Guest.questions.updateById() instead.
        "::updateById::Guest::questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/questions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Guest.questions.link() instead.
        "::link::Guest::questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/questions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Guest.questions.unlink() instead.
        "::unlink::Guest::questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/questions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Guest.questions.exists() instead.
        "::exists::Guest::questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/questions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Guest.questions() instead.
        "::get::Guest::questions": {
          isArray: true,
          url: urlBase + "/Guests/:id/questions",
          method: "GET"
        },

        // INTERNAL. Use Guest.questions.create() instead.
        "::create::Guest::questions": {
          url: urlBase + "/Guests/:id/questions",
          method: "POST"
        },

        // INTERNAL. Use Guest.questions.createMany() instead.
        "::createMany::Guest::questions": {
          isArray: true,
          url: urlBase + "/Guests/:id/questions",
          method: "POST"
        },

        // INTERNAL. Use Guest.questions.destroyAll() instead.
        "::delete::Guest::questions": {
          url: urlBase + "/Guests/:id/questions",
          method: "DELETE"
        },

        // INTERNAL. Use Guest.questions.count() instead.
        "::count::Guest::questions": {
          url: urlBase + "/Guests/:id/questions/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Question#updateOrCreate
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Question#update
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Question#destroyById
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Question#removeById
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Question#modelName
    * @propertyOf lbServices.Question
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Question`.
    */
    R.modelName = "Question";


        /**
         * @ngdoc method
         * @name lbServices.Question#creator
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Fetches belongsTo relation creator.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        R.creator = function() {
          var TargetResource = $injector.get("Admin");
          var action = TargetResource["::get::Question::creator"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Question.choices
     * @header lbServices.Question.choices
     * @object
     * @description
     *
     * The object `Question.choices` groups methods
     * manipulating `Choice` instances related to `Question`.
     *
     * Call {@link lbServices.Question#choices Question.choices()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Question#choices
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Queries choices of Question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        R.choices = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::get::Question::choices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.choices#count
         * @methodOf lbServices.Question.choices
         *
         * @description
         *
         * Counts choices of Question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.choices.count = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::count::Question::choices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.choices#create
         * @methodOf lbServices.Question.choices
         *
         * @description
         *
         * Creates a new instance in choices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        R.choices.create = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::create::Question::choices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.choices#createMany
         * @methodOf lbServices.Question.choices
         *
         * @description
         *
         * Creates a new instance in choices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        R.choices.createMany = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::createMany::Question::choices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.choices#destroyAll
         * @methodOf lbServices.Question.choices
         *
         * @description
         *
         * Deletes all choices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.choices.destroyAll = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::delete::Question::choices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.choices#destroyById
         * @methodOf lbServices.Question.choices
         *
         * @description
         *
         * Delete a related item by id for choices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for choices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.choices.destroyById = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::destroyById::Question::choices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.choices#findById
         * @methodOf lbServices.Question.choices
         *
         * @description
         *
         * Find a related item by id for choices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for choices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        R.choices.findById = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::findById::Question::choices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.choices#updateById
         * @methodOf lbServices.Question.choices
         *
         * @description
         *
         * Update a related item by id for choices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for choices
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        R.choices.updateById = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::updateById::Question::choices"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Question.responses
     * @header lbServices.Question.responses
     * @object
     * @description
     *
     * The object `Question.responses` groups methods
     * manipulating `Response` instances related to `Question`.
     *
     * Call {@link lbServices.Question#responses Question.responses()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Question#responses
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Queries responses of Question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        R.responses = function() {
          var TargetResource = $injector.get("Response");
          var action = TargetResource["::get::Question::responses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.responses#count
         * @methodOf lbServices.Question.responses
         *
         * @description
         *
         * Counts responses of Question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.responses.count = function() {
          var TargetResource = $injector.get("Response");
          var action = TargetResource["::count::Question::responses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.responses#create
         * @methodOf lbServices.Question.responses
         *
         * @description
         *
         * Creates a new instance in responses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        R.responses.create = function() {
          var TargetResource = $injector.get("Response");
          var action = TargetResource["::create::Question::responses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.responses#createMany
         * @methodOf lbServices.Question.responses
         *
         * @description
         *
         * Creates a new instance in responses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        R.responses.createMany = function() {
          var TargetResource = $injector.get("Response");
          var action = TargetResource["::createMany::Question::responses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.responses#destroyAll
         * @methodOf lbServices.Question.responses
         *
         * @description
         *
         * Deletes all responses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.responses.destroyAll = function() {
          var TargetResource = $injector.get("Response");
          var action = TargetResource["::delete::Question::responses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.responses#destroyById
         * @methodOf lbServices.Question.responses
         *
         * @description
         *
         * Delete a related item by id for responses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for responses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.responses.destroyById = function() {
          var TargetResource = $injector.get("Response");
          var action = TargetResource["::destroyById::Question::responses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.responses#findById
         * @methodOf lbServices.Question.responses
         *
         * @description
         *
         * Find a related item by id for responses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for responses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        R.responses.findById = function() {
          var TargetResource = $injector.get("Response");
          var action = TargetResource["::findById::Question::responses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.responses#updateById
         * @methodOf lbServices.Question.responses
         *
         * @description
         *
         * Update a related item by id for responses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for responses
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        R.responses.updateById = function() {
          var TargetResource = $injector.get("Response");
          var action = TargetResource["::updateById::Question::responses"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Choice
 * @header lbServices.Choice
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Choice` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Choice",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Choices/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Choice.question() instead.
        "prototype$__get__question": {
          url: urlBase + "/Choices/:id/question",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Choice#create
         * @methodOf lbServices.Choice
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Choices",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Choice#createMany
         * @methodOf lbServices.Choice
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Choices",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Choice#upsert
         * @methodOf lbServices.Choice
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Choices",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Choice#exists
         * @methodOf lbServices.Choice
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Choices/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Choice#findById
         * @methodOf lbServices.Choice
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Choices/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Choice#find
         * @methodOf lbServices.Choice
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Choices",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Choice#findOne
         * @methodOf lbServices.Choice
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Choices/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Choice#updateAll
         * @methodOf lbServices.Choice
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Choices/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Choice#deleteById
         * @methodOf lbServices.Choice
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Choices/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Choice#count
         * @methodOf lbServices.Choice
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Choices/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Choice#prototype$updateAttributes
         * @methodOf lbServices.Choice
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Choices/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Choice#createChangeStream
         * @methodOf lbServices.Choice
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Choices/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Question.choices.findById() instead.
        "::findById::Question::choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/choices/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.choices.destroyById() instead.
        "::destroyById::Question::choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/choices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.choices.updateById() instead.
        "::updateById::Question::choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/choices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.choices() instead.
        "::get::Question::choices": {
          isArray: true,
          url: urlBase + "/Questions/:id/choices",
          method: "GET"
        },

        // INTERNAL. Use Question.choices.create() instead.
        "::create::Question::choices": {
          url: urlBase + "/Questions/:id/choices",
          method: "POST"
        },

        // INTERNAL. Use Question.choices.createMany() instead.
        "::createMany::Question::choices": {
          isArray: true,
          url: urlBase + "/Questions/:id/choices",
          method: "POST"
        },

        // INTERNAL. Use Question.choices.destroyAll() instead.
        "::delete::Question::choices": {
          url: urlBase + "/Questions/:id/choices",
          method: "DELETE"
        },

        // INTERNAL. Use Question.choices.count() instead.
        "::count::Question::choices": {
          url: urlBase + "/Questions/:id/choices/count",
          method: "GET"
        },

        // INTERNAL. Use Response.choice() instead.
        "::get::Response::choice": {
          url: urlBase + "/Responses/:id/choice",
          method: "GET"
        },

        // INTERNAL. Use Guest.choices.findById() instead.
        "::findById::Guest::choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/choices/:fk",
          method: "GET"
        },

        // INTERNAL. Use Guest.choices.destroyById() instead.
        "::destroyById::Guest::choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/choices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Guest.choices.updateById() instead.
        "::updateById::Guest::choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/choices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Guest.choices.link() instead.
        "::link::Guest::choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/choices/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Guest.choices.unlink() instead.
        "::unlink::Guest::choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/choices/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Guest.choices.exists() instead.
        "::exists::Guest::choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/choices/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Guest.choices() instead.
        "::get::Guest::choices": {
          isArray: true,
          url: urlBase + "/Guests/:id/choices",
          method: "GET"
        },

        // INTERNAL. Use Guest.choices.create() instead.
        "::create::Guest::choices": {
          url: urlBase + "/Guests/:id/choices",
          method: "POST"
        },

        // INTERNAL. Use Guest.choices.createMany() instead.
        "::createMany::Guest::choices": {
          isArray: true,
          url: urlBase + "/Guests/:id/choices",
          method: "POST"
        },

        // INTERNAL. Use Guest.choices.destroyAll() instead.
        "::delete::Guest::choices": {
          url: urlBase + "/Guests/:id/choices",
          method: "DELETE"
        },

        // INTERNAL. Use Guest.choices.count() instead.
        "::count::Guest::choices": {
          url: urlBase + "/Guests/:id/choices/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Choice#updateOrCreate
         * @methodOf lbServices.Choice
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Choice#update
         * @methodOf lbServices.Choice
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Choice#destroyById
         * @methodOf lbServices.Choice
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Choice#removeById
         * @methodOf lbServices.Choice
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Choice#modelName
    * @propertyOf lbServices.Choice
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Choice`.
    */
    R.modelName = "Choice";


        /**
         * @ngdoc method
         * @name lbServices.Choice#question
         * @methodOf lbServices.Choice
         *
         * @description
         *
         * Fetches belongsTo relation question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::Choice::question"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Response
 * @header lbServices.Response
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Response` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Response",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Responses/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Response.question() instead.
        "prototype$__get__question": {
          url: urlBase + "/Responses/:id/question",
          method: "GET"
        },

        // INTERNAL. Use Response.choice() instead.
        "prototype$__get__choice": {
          url: urlBase + "/Responses/:id/choice",
          method: "GET"
        },

        // INTERNAL. Use Response.guest() instead.
        "prototype$__get__guest": {
          url: urlBase + "/Responses/:id/guest",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Response#create
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Responses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Response#createMany
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Responses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Response#upsert
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Responses",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Response#exists
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Responses/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Response#findById
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Responses/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Response#find
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Responses",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Response#findOne
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Responses/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Response#updateAll
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Responses/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Response#deleteById
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Responses/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Response#count
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Responses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Response#prototype$updateAttributes
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Responses/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Response#createChangeStream
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Responses/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Question.responses.findById() instead.
        "::findById::Question::responses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/responses/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.responses.destroyById() instead.
        "::destroyById::Question::responses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/responses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.responses.updateById() instead.
        "::updateById::Question::responses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/responses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.responses() instead.
        "::get::Question::responses": {
          isArray: true,
          url: urlBase + "/Questions/:id/responses",
          method: "GET"
        },

        // INTERNAL. Use Question.responses.create() instead.
        "::create::Question::responses": {
          url: urlBase + "/Questions/:id/responses",
          method: "POST"
        },

        // INTERNAL. Use Question.responses.createMany() instead.
        "::createMany::Question::responses": {
          isArray: true,
          url: urlBase + "/Questions/:id/responses",
          method: "POST"
        },

        // INTERNAL. Use Question.responses.destroyAll() instead.
        "::delete::Question::responses": {
          url: urlBase + "/Questions/:id/responses",
          method: "DELETE"
        },

        // INTERNAL. Use Question.responses.count() instead.
        "::count::Question::responses": {
          url: urlBase + "/Questions/:id/responses/count",
          method: "GET"
        },

        // INTERNAL. Use Guest.responses.findById() instead.
        "::findById::Guest::responses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/responses/:fk",
          method: "GET"
        },

        // INTERNAL. Use Guest.responses.destroyById() instead.
        "::destroyById::Guest::responses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/responses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Guest.responses.updateById() instead.
        "::updateById::Guest::responses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/responses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Guest.responses() instead.
        "::get::Guest::responses": {
          isArray: true,
          url: urlBase + "/Guests/:id/responses",
          method: "GET"
        },

        // INTERNAL. Use Guest.responses.create() instead.
        "::create::Guest::responses": {
          url: urlBase + "/Guests/:id/responses",
          method: "POST"
        },

        // INTERNAL. Use Guest.responses.createMany() instead.
        "::createMany::Guest::responses": {
          isArray: true,
          url: urlBase + "/Guests/:id/responses",
          method: "POST"
        },

        // INTERNAL. Use Guest.responses.destroyAll() instead.
        "::delete::Guest::responses": {
          url: urlBase + "/Guests/:id/responses",
          method: "DELETE"
        },

        // INTERNAL. Use Guest.responses.count() instead.
        "::count::Guest::responses": {
          url: urlBase + "/Guests/:id/responses/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Response#updateOrCreate
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Response#update
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Response#destroyById
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Response#removeById
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Response#modelName
    * @propertyOf lbServices.Response
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Response`.
    */
    R.modelName = "Response";


        /**
         * @ngdoc method
         * @name lbServices.Response#question
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Fetches belongsTo relation question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::Response::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Response#choice
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Fetches belongsTo relation choice.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        R.choice = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::get::Response::choice"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Response#guest
         * @methodOf lbServices.Response
         *
         * @description
         *
         * Fetches belongsTo relation guest.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Guest` object.)
         * </em>
         */
        R.guest = function() {
          var TargetResource = $injector.get("Guest");
          var action = TargetResource["::get::Response::guest"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Guest
 * @header lbServices.Guest
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Guest` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Guest",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Guests/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Guest.responses.findById() instead.
        "prototype$__findById__responses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/responses/:fk",
          method: "GET"
        },

        // INTERNAL. Use Guest.responses.destroyById() instead.
        "prototype$__destroyById__responses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/responses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Guest.responses.updateById() instead.
        "prototype$__updateById__responses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/responses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Guest.questions.findById() instead.
        "prototype$__findById__questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/questions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Guest.questions.destroyById() instead.
        "prototype$__destroyById__questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/questions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Guest.questions.updateById() instead.
        "prototype$__updateById__questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/questions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Guest.questions.link() instead.
        "prototype$__link__questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/questions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Guest.questions.unlink() instead.
        "prototype$__unlink__questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/questions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Guest.questions.exists() instead.
        "prototype$__exists__questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/questions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Guest.choices.findById() instead.
        "prototype$__findById__choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/choices/:fk",
          method: "GET"
        },

        // INTERNAL. Use Guest.choices.destroyById() instead.
        "prototype$__destroyById__choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/choices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Guest.choices.updateById() instead.
        "prototype$__updateById__choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/choices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Guest.choices.link() instead.
        "prototype$__link__choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/choices/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Guest.choices.unlink() instead.
        "prototype$__unlink__choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/choices/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Guest.choices.exists() instead.
        "prototype$__exists__choices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Guests/:id/choices/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Guest.responses() instead.
        "prototype$__get__responses": {
          isArray: true,
          url: urlBase + "/Guests/:id/responses",
          method: "GET"
        },

        // INTERNAL. Use Guest.responses.create() instead.
        "prototype$__create__responses": {
          url: urlBase + "/Guests/:id/responses",
          method: "POST"
        },

        // INTERNAL. Use Guest.responses.destroyAll() instead.
        "prototype$__delete__responses": {
          url: urlBase + "/Guests/:id/responses",
          method: "DELETE"
        },

        // INTERNAL. Use Guest.responses.count() instead.
        "prototype$__count__responses": {
          url: urlBase + "/Guests/:id/responses/count",
          method: "GET"
        },

        // INTERNAL. Use Guest.questions() instead.
        "prototype$__get__questions": {
          isArray: true,
          url: urlBase + "/Guests/:id/questions",
          method: "GET"
        },

        // INTERNAL. Use Guest.questions.create() instead.
        "prototype$__create__questions": {
          url: urlBase + "/Guests/:id/questions",
          method: "POST"
        },

        // INTERNAL. Use Guest.questions.destroyAll() instead.
        "prototype$__delete__questions": {
          url: urlBase + "/Guests/:id/questions",
          method: "DELETE"
        },

        // INTERNAL. Use Guest.questions.count() instead.
        "prototype$__count__questions": {
          url: urlBase + "/Guests/:id/questions/count",
          method: "GET"
        },

        // INTERNAL. Use Guest.choices() instead.
        "prototype$__get__choices": {
          isArray: true,
          url: urlBase + "/Guests/:id/choices",
          method: "GET"
        },

        // INTERNAL. Use Guest.choices.create() instead.
        "prototype$__create__choices": {
          url: urlBase + "/Guests/:id/choices",
          method: "POST"
        },

        // INTERNAL. Use Guest.choices.destroyAll() instead.
        "prototype$__delete__choices": {
          url: urlBase + "/Guests/:id/choices",
          method: "DELETE"
        },

        // INTERNAL. Use Guest.choices.count() instead.
        "prototype$__count__choices": {
          url: urlBase + "/Guests/:id/choices/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Guest#create
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Guest` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Guests",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Guest#createMany
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Guest` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Guests",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Guest#upsert
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Guest` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Guests",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Guest#exists
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Guests/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Guest#findById
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Guest` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Guests/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Guest#find
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Guest` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Guests",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Guest#findOne
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Guest` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Guests/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Guest#updateAll
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Guests/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Guest#deleteById
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Guest` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Guests/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Guest#count
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Guests/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Guest#prototype$updateAttributes
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Guest` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Guests/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Guest#createChangeStream
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Guests/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Response.guest() instead.
        "::get::Response::guest": {
          url: urlBase + "/Responses/:id/guest",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Guest#updateOrCreate
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Guest` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Guest#update
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Guest#destroyById
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Guest` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Guest#removeById
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Guest` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Guest#modelName
    * @propertyOf lbServices.Guest
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Guest`.
    */
    R.modelName = "Guest";

    /**
     * @ngdoc object
     * @name lbServices.Guest.responses
     * @header lbServices.Guest.responses
     * @object
     * @description
     *
     * The object `Guest.responses` groups methods
     * manipulating `Response` instances related to `Guest`.
     *
     * Call {@link lbServices.Guest#responses Guest.responses()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Guest#responses
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Queries responses of Guest.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        R.responses = function() {
          var TargetResource = $injector.get("Response");
          var action = TargetResource["::get::Guest::responses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.responses#count
         * @methodOf lbServices.Guest.responses
         *
         * @description
         *
         * Counts responses of Guest.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.responses.count = function() {
          var TargetResource = $injector.get("Response");
          var action = TargetResource["::count::Guest::responses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.responses#create
         * @methodOf lbServices.Guest.responses
         *
         * @description
         *
         * Creates a new instance in responses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        R.responses.create = function() {
          var TargetResource = $injector.get("Response");
          var action = TargetResource["::create::Guest::responses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.responses#createMany
         * @methodOf lbServices.Guest.responses
         *
         * @description
         *
         * Creates a new instance in responses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        R.responses.createMany = function() {
          var TargetResource = $injector.get("Response");
          var action = TargetResource["::createMany::Guest::responses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.responses#destroyAll
         * @methodOf lbServices.Guest.responses
         *
         * @description
         *
         * Deletes all responses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.responses.destroyAll = function() {
          var TargetResource = $injector.get("Response");
          var action = TargetResource["::delete::Guest::responses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.responses#destroyById
         * @methodOf lbServices.Guest.responses
         *
         * @description
         *
         * Delete a related item by id for responses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for responses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.responses.destroyById = function() {
          var TargetResource = $injector.get("Response");
          var action = TargetResource["::destroyById::Guest::responses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.responses#findById
         * @methodOf lbServices.Guest.responses
         *
         * @description
         *
         * Find a related item by id for responses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for responses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        R.responses.findById = function() {
          var TargetResource = $injector.get("Response");
          var action = TargetResource["::findById::Guest::responses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.responses#updateById
         * @methodOf lbServices.Guest.responses
         *
         * @description
         *
         * Update a related item by id for responses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for responses
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Response` object.)
         * </em>
         */
        R.responses.updateById = function() {
          var TargetResource = $injector.get("Response");
          var action = TargetResource["::updateById::Guest::responses"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Guest.questions
     * @header lbServices.Guest.questions
     * @object
     * @description
     *
     * The object `Guest.questions` groups methods
     * manipulating `Question` instances related to `Guest`.
     *
     * Call {@link lbServices.Guest#questions Guest.questions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Guest#questions
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Queries questions of Guest.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::Guest::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.questions#count
         * @methodOf lbServices.Guest.questions
         *
         * @description
         *
         * Counts questions of Guest.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.questions.count = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::count::Guest::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.questions#create
         * @methodOf lbServices.Guest.questions
         *
         * @description
         *
         * Creates a new instance in questions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions.create = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::create::Guest::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.questions#createMany
         * @methodOf lbServices.Guest.questions
         *
         * @description
         *
         * Creates a new instance in questions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions.createMany = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::createMany::Guest::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.questions#destroyAll
         * @methodOf lbServices.Guest.questions
         *
         * @description
         *
         * Deletes all questions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.questions.destroyAll = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::delete::Guest::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.questions#destroyById
         * @methodOf lbServices.Guest.questions
         *
         * @description
         *
         * Delete a related item by id for questions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for questions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.questions.destroyById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::destroyById::Guest::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.questions#exists
         * @methodOf lbServices.Guest.questions
         *
         * @description
         *
         * Check the existence of questions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for questions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions.exists = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::exists::Guest::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.questions#findById
         * @methodOf lbServices.Guest.questions
         *
         * @description
         *
         * Find a related item by id for questions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for questions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions.findById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::findById::Guest::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.questions#link
         * @methodOf lbServices.Guest.questions
         *
         * @description
         *
         * Add a related item by id for questions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for questions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions.link = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::link::Guest::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.questions#unlink
         * @methodOf lbServices.Guest.questions
         *
         * @description
         *
         * Remove the questions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for questions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.questions.unlink = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::unlink::Guest::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.questions#updateById
         * @methodOf lbServices.Guest.questions
         *
         * @description
         *
         * Update a related item by id for questions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for questions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions.updateById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::updateById::Guest::questions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Guest.choices
     * @header lbServices.Guest.choices
     * @object
     * @description
     *
     * The object `Guest.choices` groups methods
     * manipulating `Choice` instances related to `Guest`.
     *
     * Call {@link lbServices.Guest#choices Guest.choices()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Guest#choices
         * @methodOf lbServices.Guest
         *
         * @description
         *
         * Queries choices of Guest.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        R.choices = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::get::Guest::choices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.choices#count
         * @methodOf lbServices.Guest.choices
         *
         * @description
         *
         * Counts choices of Guest.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.choices.count = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::count::Guest::choices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.choices#create
         * @methodOf lbServices.Guest.choices
         *
         * @description
         *
         * Creates a new instance in choices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        R.choices.create = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::create::Guest::choices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.choices#createMany
         * @methodOf lbServices.Guest.choices
         *
         * @description
         *
         * Creates a new instance in choices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        R.choices.createMany = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::createMany::Guest::choices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.choices#destroyAll
         * @methodOf lbServices.Guest.choices
         *
         * @description
         *
         * Deletes all choices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.choices.destroyAll = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::delete::Guest::choices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.choices#destroyById
         * @methodOf lbServices.Guest.choices
         *
         * @description
         *
         * Delete a related item by id for choices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for choices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.choices.destroyById = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::destroyById::Guest::choices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.choices#exists
         * @methodOf lbServices.Guest.choices
         *
         * @description
         *
         * Check the existence of choices relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for choices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        R.choices.exists = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::exists::Guest::choices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.choices#findById
         * @methodOf lbServices.Guest.choices
         *
         * @description
         *
         * Find a related item by id for choices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for choices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        R.choices.findById = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::findById::Guest::choices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.choices#link
         * @methodOf lbServices.Guest.choices
         *
         * @description
         *
         * Add a related item by id for choices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for choices
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        R.choices.link = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::link::Guest::choices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.choices#unlink
         * @methodOf lbServices.Guest.choices
         *
         * @description
         *
         * Remove the choices relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for choices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.choices.unlink = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::unlink::Guest::choices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Guest.choices#updateById
         * @methodOf lbServices.Guest.choices
         *
         * @description
         *
         * Update a related item by id for choices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for choices
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Choice` object.)
         * </em>
         */
        R.choices.updateById = function() {
          var TargetResource = $injector.get("Choice");
          var action = TargetResource["::updateById::Guest::choices"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch(err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
