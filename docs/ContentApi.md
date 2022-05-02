# EstuaryApi.ContentApi

All URIs are relative to *http://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contentAddCarPost**](ContentApi.md#contentAddCarPost) | **POST** /content/add-car | Add Car object
[**contentAddIpfsPost**](ContentApi.md#contentAddIpfsPost) | **POST** /content/add-ipfs | Add IPFS object
[**contentAddPost**](ContentApi.md#contentAddPost) | **POST** /content/add | Add new content
[**contentAggregatedContentGet**](ContentApi.md#contentAggregatedContentGet) | **GET** /content/aggregated/{content} | Get aggregated content stats
[**contentAllDealsGet**](ContentApi.md#contentAllDealsGet) | **GET** /content/all-deals | Get all deals for a user
[**contentBwUsageContentGet**](ContentApi.md#contentBwUsageContentGet) | **GET** /content/bw-usage/{content} | Get content bandwidth
[**contentCreatePost**](ContentApi.md#contentCreatePost) | **POST** /content/create | Add a new content
[**contentDealsGet**](ContentApi.md#contentDealsGet) | **GET** /content/deals | Content with deals
[**contentEnsureReplicationDatacidGet**](ContentApi.md#contentEnsureReplicationDatacidGet) | **GET** /content/ensure-replication/{datacid} | Ensure Replication
[**contentFailuresContentGet**](ContentApi.md#contentFailuresContentGet) | **GET** /content/failures/{content} | List all failures for a content
[**contentImportdealPost**](ContentApi.md#contentImportdealPost) | **POST** /content/importdeal | Import a deal
[**contentListGet**](ContentApi.md#contentListGet) | **GET** /content/list | List all pinned content
[**contentReadContGet**](ContentApi.md#contentReadContGet) | **GET** /content/read/{cont} | Read content
[**contentStagingZonesGet**](ContentApi.md#contentStagingZonesGet) | **GET** /content/staging-zones | Get staging zone for user
[**contentStatsGet**](ContentApi.md#contentStatsGet) | **GET** /content/stats | Get content statistics
[**contentStatusIdGet**](ContentApi.md#contentStatusIdGet) | **GET** /content/status/{id} | Content Status



## contentAddCarPost

> String contentAddCarPost(body, opts)

Add Car object

This endpoint is used to add a car object to the network. The object can be a file or a directory.

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.ContentApi();
let body = "body_example"; // String | Car
let opts = {
  'filename': "filename_example", // String | Filename
  'commp': "commp_example", // String | Commp
  'size': "size_example" // String | Size
};
apiInstance.contentAddCarPost(body, opts, (error, data, response) => {
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
 **body** | **String**| Car | 
 **filename** | **String**| Filename | [optional] 
 **commp** | **String**| Commp | [optional] 
 **size** | **String**| Size | [optional] 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contentAddIpfsPost

> String contentAddIpfsPost(body)

Add IPFS object

This endpoint is used to add an IPFS object to the network. The object can be a file or a directory.

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.ContentApi();
let body = new EstuaryApi.UtilContentAddIpfsBody(); // UtilContentAddIpfsBody | IPFS Body
apiInstance.contentAddIpfsPost(body, (error, data, response) => {
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
 **body** | [**UtilContentAddIpfsBody**](UtilContentAddIpfsBody.md)| IPFS Body | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contentAddPost

> String contentAddPost(file, opts)

Add new content

This endpoint is used to upload new content.

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.ContentApi();
let file = "/path/to/file"; // File | File to upload
let opts = {
  'collection': "collection_example", // String | Collection
  'collectionPath': "collectionPath_example" // String | Collection Path
};
apiInstance.contentAddPost(file, opts, (error, data, response) => {
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
 **file** | **File**| File to upload | 
 **collection** | **String**| Collection | [optional] 
 **collectionPath** | **String**| Collection Path | [optional] 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## contentAggregatedContentGet

> String contentAggregatedContentGet(content)

Get aggregated content stats

This endpoint returns aggregated content stats

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.ContentApi();
let content = "content_example"; // String | Content ID
apiInstance.contentAggregatedContentGet(content, (error, data, response) => {
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
 **content** | **String**| Content ID | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contentAllDealsGet

> String contentAllDealsGet(begin, duration, all)

Get all deals for a user

This endpoint is used to get all deals for a user

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.ContentApi();
let begin = "begin_example"; // String | Begin
let duration = "duration_example"; // String | Duration
let all = "all_example"; // String | All
apiInstance.contentAllDealsGet(begin, duration, all, (error, data, response) => {
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
 **begin** | **String**| Begin | 
 **duration** | **String**| Duration | 
 **all** | **String**| All | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contentBwUsageContentGet

> String contentBwUsageContentGet(content)

Get content bandwidth

This endpoint returns content bandwidth

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.ContentApi();
let content = "content_example"; // String | Content ID
apiInstance.contentBwUsageContentGet(content, (error, data, response) => {
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
 **content** | **String**| Content ID | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contentCreatePost

> String contentCreatePost(body)

Add a new content

This endpoint adds a new content

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.ContentApi();
let body = "body_example"; // String | Content
apiInstance.contentCreatePost(body, (error, data, response) => {
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
 **body** | **String**| Content | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contentDealsGet

> String contentDealsGet(opts)

Content with deals

This endpoint lists all content with deals

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.ContentApi();
let opts = {
  'limit': 56, // Number | Limit
  'offset': 56 // Number | Offset
};
apiInstance.contentDealsGet(opts, (error, data, response) => {
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
 **limit** | **Number**| Limit | [optional] 
 **offset** | **Number**| Offset | [optional] 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contentEnsureReplicationDatacidGet

> String contentEnsureReplicationDatacidGet(datacid)

Ensure Replication

This endpoint ensures that the content is replicated to the specified number of providers

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.ContentApi();
let datacid = "datacid_example"; // String | Data CID
apiInstance.contentEnsureReplicationDatacidGet(datacid, (error, data, response) => {
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
 **datacid** | **String**| Data CID | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contentFailuresContentGet

> String contentFailuresContentGet(content)

List all failures for a content

This endpoint returns all failures for a content

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.ContentApi();
let content = "content_example"; // String | Content ID
apiInstance.contentFailuresContentGet(content, (error, data, response) => {
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
 **content** | **String**| Content ID | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contentImportdealPost

> String contentImportdealPost(body)

Import a deal

This endpoint imports a deal into the shuttle.

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.ContentApi();
let body = new EstuaryApi.MainImportDealBody(); // MainImportDealBody | Import a deal
apiInstance.contentImportdealPost(body, (error, data, response) => {
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
 **body** | [**MainImportDealBody**](MainImportDealBody.md)| Import a deal | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contentListGet

> [String] contentListGet()

List all pinned content

This endpoint lists all content

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.ContentApi();
apiInstance.contentListGet((error, data, response) => {
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

**[String]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contentReadContGet

> String contentReadContGet(cont)

Read content

This endpoint reads content from the blockstore

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.ContentApi();
let cont = "cont_example"; // String | CID
apiInstance.contentReadContGet(cont, (error, data, response) => {
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
 **cont** | **String**| CID | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contentStagingZonesGet

> String contentStagingZonesGet()

Get staging zone for user

This endpoint is used to get staging zone for user.

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.ContentApi();
apiInstance.contentStagingZonesGet((error, data, response) => {
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

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contentStatsGet

> String contentStatsGet(limit)

Get content statistics

This endpoint is used to get content statistics. Every content stored in the network (estuary) is tracked by a unique ID which can be used to get information about the content. This endpoint will allow the consumer to get the collected stats of a conten

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.ContentApi();
let limit = "limit_example"; // String | limit
apiInstance.contentStatsGet(limit, (error, data, response) => {
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
 **limit** | **String**| limit | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contentStatusIdGet

> String contentStatusIdGet(id)

Content Status

This endpoint returns the status of a content

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.ContentApi();
let id = 56; // Number | Content ID
apiInstance.contentStatusIdGet(id, (error, data, response) => {
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
 **id** | **Number**| Content ID | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

