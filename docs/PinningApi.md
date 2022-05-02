# EstuaryApi.PinningApi

All URIs are relative to *http://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pinningPinsGet**](PinningApi.md#pinningPinsGet) | **GET** /pinning/pins | List all pinned objects
[**pinningPinsPost**](PinningApi.md#pinningPinsPost) | **POST** /pinning/pins | Add and pin object
[**pinningPinsRequestidDelete**](PinningApi.md#pinningPinsRequestidDelete) | **DELETE** /pinning/pins/{requestid} | Delete a pinned object
[**pinningPinsRequestidGet**](PinningApi.md#pinningPinsRequestidGet) | **GET** /pinning/pins/{requestid} | Get a pinned objects
[**pinningPinsRequestidPost**](PinningApi.md#pinningPinsRequestidPost) | **POST** /pinning/pins/{requestid} | Replace a pinned object



## pinningPinsGet

> pinningPinsGet()

List all pinned objects

This endpoint lists all pinned objects

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.PinningApi();
apiInstance.pinningPinsGet((error, data, response) => {
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pinningPinsPost

> String pinningPinsPost(cid, name)

Add and pin object

This endpoint adds a pin to the IPFS daemon.

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.PinningApi();
let cid = "cid_example"; // String | cid
let name = "name_example"; // String | name
apiInstance.pinningPinsPost(cid, name, (error, data, response) => {
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
 **cid** | **String**| cid | 
 **name** | **String**| name | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pinningPinsRequestidDelete

> String pinningPinsRequestidDelete(requestid)

Delete a pinned object

This endpoint deletes a pinned object.

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.PinningApi();
let requestid = "requestid_example"; // String | requestid
apiInstance.pinningPinsRequestidDelete(requestid, (error, data, response) => {
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
 **requestid** | **String**| requestid | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pinningPinsRequestidGet

> String pinningPinsRequestidGet(requestid)

Get a pinned objects

This endpoint returns a pinned object.

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.PinningApi();
let requestid = "requestid_example"; // String | cid
apiInstance.pinningPinsRequestidGet(requestid, (error, data, response) => {
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
 **requestid** | **String**| cid | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pinningPinsRequestidPost

> String pinningPinsRequestidPost(requestid)

Replace a pinned object

This endpoint replaces a pinned object.

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.PinningApi();
let requestid = "requestid_example"; // String | id
apiInstance.pinningPinsRequestidPost(requestid, (error, data, response) => {
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
 **requestid** | **String**| id | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

