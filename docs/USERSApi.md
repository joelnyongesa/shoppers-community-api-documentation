# ShoppersCommunityApi.USERSApi

All URIs are relative to *https://shopping-database32.onrender.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersIdGet**](USERSApi.md#usersIdGet) | **GET** /users/{id} | Retrieve information about a user
[**usersIdReviewsGet**](USERSApi.md#usersIdReviewsGet) | **GET** /users/{id}/reviews | Retrieve platform reviews authored by a specific user
[**usersIdReviewsPost**](USERSApi.md#usersIdReviewsPost) | **POST** /users/{id}/reviews | Add a user review
[**usersIdSearchQueriesGet**](USERSApi.md#usersIdSearchQueriesGet) | **GET** /users/{id}/search_queries | Get search queries by a specific user

<a name="usersIdGet"></a>
# **usersIdGet**
> usersIdGet(id)

Retrieve information about a user

### Example
```javascript
import {ShoppersCommunityApi} from 'shoppers_community_api';

let apiInstance = new ShoppersCommunityApi.USERSApi();
let id = 789; // Number | ID to get the specific user

apiInstance.usersIdGet(id, (error, data, response) => {
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
 **id** | **Number**| ID to get the specific user | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersIdReviewsGet"></a>
# **usersIdReviewsGet**
> usersIdReviewsGet(id)

Retrieve platform reviews authored by a specific user

### Example
```javascript
import {ShoppersCommunityApi} from 'shoppers_community_api';

let apiInstance = new ShoppersCommunityApi.USERSApi();
let id = 789; // Number | A specific users' id

apiInstance.usersIdReviewsGet(id, (error, data, response) => {
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
 **id** | **Number**| A specific users&#x27; id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersIdReviewsPost"></a>
# **usersIdReviewsPost**
> usersIdReviewsPost(body, id)

Add a user review

### Example
```javascript
import {ShoppersCommunityApi} from 'shoppers_community_api';

let apiInstance = new ShoppersCommunityApi.USERSApi();
let body = new ShoppersCommunityApi.IdReviewsBody(); // IdReviewsBody | a review object that needs to be added to the database
let id = 789; // Number | A specific user id

apiInstance.usersIdReviewsPost(body, id, (error, data, response) => {
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
 **body** | [**IdReviewsBody**](IdReviewsBody.md)| a review object that needs to be added to the database | 
 **id** | **Number**| A specific user id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="usersIdSearchQueriesGet"></a>
# **usersIdSearchQueriesGet**
> usersIdSearchQueriesGet(id)

Get search queries by a specific user

### Example
```javascript
import {ShoppersCommunityApi} from 'shoppers_community_api';

let apiInstance = new ShoppersCommunityApi.USERSApi();
let id = 789; // Number | User id

apiInstance.usersIdSearchQueriesGet(id, (error, data, response) => {
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
 **id** | **Number**| User id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

