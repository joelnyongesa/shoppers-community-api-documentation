# ShoppersCommunityApi.SEARCHQUERIESApi

All URIs are relative to *https://shopping-database32.onrender.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchQueriesGet**](SEARCHQUERIESApi.md#searchQueriesGet) | **GET** /search_queries | Get all the terms the users searched for in our database

<a name="searchQueriesGet"></a>
# **searchQueriesGet**
> searchQueriesGet()

Get all the terms the users searched for in our database

### Example
```javascript
import {ShoppersCommunityApi} from 'shoppers_community_api';

let apiInstance = new ShoppersCommunityApi.SEARCHQUERIESApi();
apiInstance.searchQueriesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

