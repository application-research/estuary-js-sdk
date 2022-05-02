# EstuaryApi.CollectionsApi

All URIs are relative to *http://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collectionsAddContentPost**](CollectionsApi.md#collectionsAddContentPost) | **POST** /collections/add-content | Add contents to a collection
[**collectionsContentColuuidGet**](CollectionsApi.md#collectionsContentColuuidGet) | **GET** /collections/content/{coluuid} | Get contents in a collection
[**collectionsCreatePost**](CollectionsApi.md#collectionsCreatePost) | **POST** /collections/create | Create a new collection
[**collectionsFsAddPost**](CollectionsApi.md#collectionsFsAddPost) | **POST** /collections/fs/add | Add a file to a collection
[**collectionsFsListGet**](CollectionsApi.md#collectionsFsListGet) | **GET** /collections/fs/list | Create a new collection
[**collectionsListGet**](CollectionsApi.md#collectionsListGet) | **GET** /collections/list | List all collections



## collectionsAddContentPost

> {String: String} collectionsAddContentPost(body)

Add contents to a collection

When a collection is created, users with valid API keys can add contents to the collection. This endpoint can be used to add contents to a collection.

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.CollectionsApi();
let body = new EstuaryApi.MainAddContentToCollectionParams(); // MainAddContentToCollectionParams | Contents to add to collection
apiInstance.collectionsAddContentPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MainAddContentToCollectionParams**](MainAddContentToCollectionParams.md)| Contents to add to collection | 

### Return type

**{String: String}**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## collectionsContentColuuidGet

> String collectionsContentColuuidGet(coluuid)

Get contents in a collection

This endpoint is used to get contents in a collection. When a collection is created, this collection object is retrievable along with its content via this endpoint.

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.CollectionsApi();
let coluuid = "coluuid_example"; // String | coluuid
apiInstance.collectionsContentColuuidGet(coluuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **String**| coluuid | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCreatePost

> MainCollection collectionsCreatePost(body)

Create a new collection

This endpoint is used to create a new collection. A collection is a representaion of a group of objects added on the estuary. This endpoint can be used to create a new collection.

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.CollectionsApi();
let body = new EstuaryApi.MainCreateCollectionBody(); // MainCreateCollectionBody | Collection name and description
apiInstance.collectionsCreatePost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MainCreateCollectionBody**](MainCreateCollectionBody.md)| Collection name and description | 

### Return type

[**MainCollection**](MainCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsFsAddPost

> String collectionsFsAddPost(col, collection, content, path)

Add a file to a collection

This endpoint adds a file to a collection

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.CollectionsApi();
let col = "col_example"; // String | Collection ID
let collection = "collection_example"; // String | Collection ID Long
let content = "content_example"; // String | Content
let path = "path_example"; // String | Path to file
apiInstance.collectionsFsAddPost(col, collection, content, path, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **col** | **String**| Collection ID | 
 **collection** | **String**| Collection ID Long | 
 **content** | **String**| Content | 
 **path** | **String**| Path to file | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsFsListGet

> String collectionsFsListGet(col, dir)

Create a new collection

This endpoint creates a new collection

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.CollectionsApi();
let col = "col_example"; // String | Collection
let dir = "dir_example"; // String | Directory
apiInstance.collectionsFsListGet(col, dir, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **col** | **String**| Collection | 
 **dir** | **String**| Directory | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsListGet

> [MainCollection] collectionsListGet()

List all collections

This endpoint is used to list all collections. Whenever a user logs on estuary, it will list all collections that the user has access to. This endpoint provides a way to list all collections to the user.

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.CollectionsApi();
apiInstance.collectionsListGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[MainCollection]**](MainCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

