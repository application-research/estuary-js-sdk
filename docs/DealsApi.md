# EstuaryApi.DealsApi

All URIs are relative to *http://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dealsEstimatePost**](DealsApi.md#dealsEstimatePost) | **POST** /deals/estimate | Estimate the cost of a deal
[**dealsFailuresGet**](DealsApi.md#dealsFailuresGet) | **GET** /deals/failures | Get storage failures
[**dealsInfoDealidGet**](DealsApi.md#dealsInfoDealidGet) | **GET** /deals/info/{dealid} | Get Deal Info
[**dealsMakeMinerPost**](DealsApi.md#dealsMakeMinerPost) | **POST** /deals/make/{miner} | Make Deal
[**dealsProposalPropcidGet**](DealsApi.md#dealsProposalPropcidGet) | **GET** /deals/proposal/{propcid} | Get Proposal
[**dealsQueryMinerGet**](DealsApi.md#dealsQueryMinerGet) | **GET** /deals/query/{miner} | Query Ask
[**dealsStatusByProposalPropcidGet**](DealsApi.md#dealsStatusByProposalPropcidGet) | **GET** /deals/status-by-proposal/{propcid} | Get Deal Status by PropCid
[**dealsStatusDealGet**](DealsApi.md#dealsStatusDealGet) | **GET** /deals/status/{deal} | Get Deal Status
[**dealsStatusMinerPropcidGet**](DealsApi.md#dealsStatusMinerPropcidGet) | **GET** /deals/status/{miner}/{propcid} | Deal Status
[**dealsTransferInProgressGet**](DealsApi.md#dealsTransferInProgressGet) | **GET** /deals/transfer/in-progress | Transfer In Progress
[**dealsTransferStatusPost**](DealsApi.md#dealsTransferStatusPost) | **POST** /deals/transfer/status | Transfer Status



## dealsEstimatePost

> String dealsEstimatePost(body)

Estimate the cost of a deal

This endpoint estimates the cost of a deal

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.DealsApi();
let body = new EstuaryApi.MainEstimateDealBody(); // MainEstimateDealBody | The size of the deal in bytes, the replication factor, and the duration of the deal in blocks
apiInstance.dealsEstimatePost(body, (error, data, response) => {
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
 **body** | [**MainEstimateDealBody**](MainEstimateDealBody.md)| The size of the deal in bytes, the replication factor, and the duration of the deal in blocks | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dealsFailuresGet

> String dealsFailuresGet()

Get storage failures

This endpoint returns a list of storage failures

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.DealsApi();
apiInstance.dealsFailuresGet((error, data, response) => {
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


## dealsInfoDealidGet

> String dealsInfoDealidGet(dealid)

Get Deal Info

This endpoint returns the deal info for a deal

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.DealsApi();
let dealid = 56; // Number | Deal ID
apiInstance.dealsInfoDealidGet(dealid, (error, data, response) => {
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
 **dealid** | **Number**| Deal ID | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dealsMakeMinerPost

> String dealsMakeMinerPost(miner, dealRequest)

Make Deal

This endpoint makes a deal for a given content and miner

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.DealsApi();
let miner = "miner_example"; // String | Miner
let dealRequest = "dealRequest_example"; // String | Deal Request
apiInstance.dealsMakeMinerPost(miner, dealRequest, (error, data, response) => {
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
 **miner** | **String**| Miner | 
 **dealRequest** | **String**| Deal Request | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dealsProposalPropcidGet

> String dealsProposalPropcidGet(propcid)

Get Proposal

This endpoint returns the proposal for a deal

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.DealsApi();
let propcid = "propcid_example"; // String | Proposal CID
apiInstance.dealsProposalPropcidGet(propcid, (error, data, response) => {
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
 **propcid** | **String**| Proposal CID | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dealsQueryMinerGet

> String dealsQueryMinerGet(miner)

Query Ask

This endpoint returns the ask for a given CID

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.DealsApi();
let miner = "miner_example"; // String | CID
apiInstance.dealsQueryMinerGet(miner, (error, data, response) => {
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
 **miner** | **String**| CID | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dealsStatusByProposalPropcidGet

> String dealsStatusByProposalPropcidGet(propcid)

Get Deal Status by PropCid

Get Deal Status by PropCid

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.DealsApi();
let propcid = "propcid_example"; // String | PropCid
apiInstance.dealsStatusByProposalPropcidGet(propcid, (error, data, response) => {
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
 **propcid** | **String**| PropCid | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dealsStatusDealGet

> String dealsStatusDealGet(deal)

Get Deal Status

This endpoint returns the status of a deal

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.DealsApi();
let deal = 56; // Number | Deal ID
apiInstance.dealsStatusDealGet(deal, (error, data, response) => {
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
 **deal** | **Number**| Deal ID | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dealsStatusMinerPropcidGet

> String dealsStatusMinerPropcidGet(miner, propcid)

Deal Status

This endpoint returns the status of a deal

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.DealsApi();
let miner = "miner_example"; // String | Miner
let propcid = "propcid_example"; // String | Proposal CID
apiInstance.dealsStatusMinerPropcidGet(miner, propcid, (error, data, response) => {
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
 **miner** | **String**| Miner | 
 **propcid** | **String**| Proposal CID | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dealsTransferInProgressGet

> String dealsTransferInProgressGet()

Transfer In Progress

This endpoint returns the in-progress transfers

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.DealsApi();
apiInstance.dealsTransferInProgressGet((error, data, response) => {
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


## dealsTransferStatusPost

> String dealsTransferStatusPost()

Transfer Status

This endpoint returns the status of a transfer

### Example

```javascript
import EstuaryApi from 'estuary_api';
let defaultClient = EstuaryApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryApi.DealsApi();
apiInstance.dealsTransferStatusPost((error, data, response) => {
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

