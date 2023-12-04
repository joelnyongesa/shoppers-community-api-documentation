# ShoppersCommunityApi.USERSAUTHENTICATIONApi

All URIs are relative to *https://shopping-database32.onrender.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUser**](USERSAUTHENTICATIONApi.md#addUser) | **POST** /signup | Adds a new user to the database
[**loginUser**](USERSAUTHENTICATIONApi.md#loginUser) | **POST** /login | log in an existing user to the database

<a name="addUser"></a>
# **addUser**
> addUser(body)

Adds a new user to the database

### Example
```javascript
import {ShoppersCommunityApi} from 'shoppers_community_api';

let apiInstance = new ShoppersCommunityApi.USERSAUTHENTICATIONApi();
let body = new ShoppersCommunityApi.SignupBody(); // SignupBody | user object that needs to be added to the database

apiInstance.addUser(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SignupBody**](SignupBody.md)| user object that needs to be added to the database | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="loginUser"></a>
# **loginUser**
> loginUser(body)

log in an existing user to the database

### Example
```javascript
import {ShoppersCommunityApi} from 'shoppers_community_api';

let apiInstance = new ShoppersCommunityApi.USERSAUTHENTICATIONApi();
let body = new ShoppersCommunityApi.LoginBody(); // LoginBody | user credentials to sign in

apiInstance.loginUser(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoginBody**](LoginBody.md)| user credentials to sign in | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

