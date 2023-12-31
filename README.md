# shoppers_community_api

ShoppersCommunityApi - JavaScript client for shoppers_community_api
Endpoints for the Shoppers community backend
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install shoppers_community_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ShoppersCommunityApi = require('shoppers_community_api');

var api = new ShoppersCommunityApi.SEARCHQUERIESApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.searchQueriesGet(callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://shopping-database32.onrender.com/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ShoppersCommunityApi.SEARCHQUERIESApi* | [**searchQueriesGet**](docs/SEARCHQUERIESApi.md#searchQueriesGet) | **GET** /search_queries | Get all the terms the users searched for in our database
*ShoppersCommunityApi.USERSApi* | [**usersIdGet**](docs/USERSApi.md#usersIdGet) | **GET** /users/{id} | Retrieve information about a user
*ShoppersCommunityApi.USERSApi* | [**usersIdReviewsGet**](docs/USERSApi.md#usersIdReviewsGet) | **GET** /users/{id}/reviews | Retrieve platform reviews authored by a specific user
*ShoppersCommunityApi.USERSApi* | [**usersIdReviewsPost**](docs/USERSApi.md#usersIdReviewsPost) | **POST** /users/{id}/reviews | Add a user review
*ShoppersCommunityApi.USERSApi* | [**usersIdSearchQueriesGet**](docs/USERSApi.md#usersIdSearchQueriesGet) | **GET** /users/{id}/search_queries | Get search queries by a specific user
*ShoppersCommunityApi.USERSAUTHENTICATIONApi* | [**addUser**](docs/USERSAUTHENTICATIONApi.md#addUser) | **POST** /signup | Adds a new user to the database
*ShoppersCommunityApi.USERSAUTHENTICATIONApi* | [**loginUser**](docs/USERSAUTHENTICATIONApi.md#loginUser) | **POST** /login | log in an existing user to the database

## Documentation for Models

 - [ShoppersCommunityApi.IdReviewsBody](docs/IdReviewsBody.md)
 - [ShoppersCommunityApi.LoginBody](docs/LoginBody.md)
 - [ShoppersCommunityApi.SignupBody](docs/SignupBody.md)

## Documentation for Authorization

 All endpoints do not require authorization.

