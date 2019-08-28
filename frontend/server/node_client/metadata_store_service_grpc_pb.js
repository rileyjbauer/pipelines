// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ==============================================================================
//
'use strict';
var grpc = require('grpc');
var metadata_store_service_pb = require('./metadata_store_service_pb.js');
var metadata_store_pb = require('./metadata_store_pb.js');

function serialize_ml_metadata_GetArtifactTypeRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetArtifactTypeRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetArtifactTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetArtifactTypeRequest(buffer_arg) {
  return metadata_store_service_pb.GetArtifactTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetArtifactTypeResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetArtifactTypeResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetArtifactTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetArtifactTypeResponse(buffer_arg) {
  return metadata_store_service_pb.GetArtifactTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetArtifactTypesByIDRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetArtifactTypesByIDRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetArtifactTypesByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetArtifactTypesByIDRequest(buffer_arg) {
  return metadata_store_service_pb.GetArtifactTypesByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetArtifactTypesByIDResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetArtifactTypesByIDResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetArtifactTypesByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetArtifactTypesByIDResponse(buffer_arg) {
  return metadata_store_service_pb.GetArtifactTypesByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetArtifactTypesRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetArtifactTypesRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetArtifactTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetArtifactTypesRequest(buffer_arg) {
  return metadata_store_service_pb.GetArtifactTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetArtifactTypesResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetArtifactTypesResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetArtifactTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetArtifactTypesResponse(buffer_arg) {
  return metadata_store_service_pb.GetArtifactTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetArtifactsByContextRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetArtifactsByContextRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetArtifactsByContextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetArtifactsByContextRequest(buffer_arg) {
  return metadata_store_service_pb.GetArtifactsByContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetArtifactsByContextResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetArtifactsByContextResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetArtifactsByContextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetArtifactsByContextResponse(buffer_arg) {
  return metadata_store_service_pb.GetArtifactsByContextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetArtifactsByIDRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetArtifactsByIDRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetArtifactsByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetArtifactsByIDRequest(buffer_arg) {
  return metadata_store_service_pb.GetArtifactsByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetArtifactsByIDResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetArtifactsByIDResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetArtifactsByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetArtifactsByIDResponse(buffer_arg) {
  return metadata_store_service_pb.GetArtifactsByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetArtifactsByTypeRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetArtifactsByTypeRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetArtifactsByTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetArtifactsByTypeRequest(buffer_arg) {
  return metadata_store_service_pb.GetArtifactsByTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetArtifactsByTypeResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetArtifactsByTypeResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetArtifactsByTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetArtifactsByTypeResponse(buffer_arg) {
  return metadata_store_service_pb.GetArtifactsByTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetArtifactsByURIRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetArtifactsByURIRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetArtifactsByURIRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetArtifactsByURIRequest(buffer_arg) {
  return metadata_store_service_pb.GetArtifactsByURIRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetArtifactsByURIResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetArtifactsByURIResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetArtifactsByURIResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetArtifactsByURIResponse(buffer_arg) {
  return metadata_store_service_pb.GetArtifactsByURIResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetArtifactsRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetArtifactsRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetArtifactsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetArtifactsRequest(buffer_arg) {
  return metadata_store_service_pb.GetArtifactsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetArtifactsResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetArtifactsResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetArtifactsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetArtifactsResponse(buffer_arg) {
  return metadata_store_service_pb.GetArtifactsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetChildrenContextsByContextRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetChildrenContextsByContextRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetChildrenContextsByContextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetChildrenContextsByContextRequest(buffer_arg) {
  return metadata_store_service_pb.GetChildrenContextsByContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetChildrenContextsByContextResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetChildrenContextsByContextResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetChildrenContextsByContextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetChildrenContextsByContextResponse(buffer_arg) {
  return metadata_store_service_pb.GetChildrenContextsByContextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetContextTypeRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetContextTypeRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetContextTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetContextTypeRequest(buffer_arg) {
  return metadata_store_service_pb.GetContextTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetContextTypeResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetContextTypeResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetContextTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetContextTypeResponse(buffer_arg) {
  return metadata_store_service_pb.GetContextTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetContextTypesByIDRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetContextTypesByIDRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetContextTypesByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetContextTypesByIDRequest(buffer_arg) {
  return metadata_store_service_pb.GetContextTypesByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetContextTypesByIDResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetContextTypesByIDResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetContextTypesByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetContextTypesByIDResponse(buffer_arg) {
  return metadata_store_service_pb.GetContextTypesByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetContextsByArtifactRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetContextsByArtifactRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetContextsByArtifactRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetContextsByArtifactRequest(buffer_arg) {
  return metadata_store_service_pb.GetContextsByArtifactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetContextsByArtifactResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetContextsByArtifactResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetContextsByArtifactResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetContextsByArtifactResponse(buffer_arg) {
  return metadata_store_service_pb.GetContextsByArtifactResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetContextsByExecutionRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetContextsByExecutionRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetContextsByExecutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetContextsByExecutionRequest(buffer_arg) {
  return metadata_store_service_pb.GetContextsByExecutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetContextsByExecutionResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetContextsByExecutionResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetContextsByExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetContextsByExecutionResponse(buffer_arg) {
  return metadata_store_service_pb.GetContextsByExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetContextsByIDRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetContextsByIDRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetContextsByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetContextsByIDRequest(buffer_arg) {
  return metadata_store_service_pb.GetContextsByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetContextsByIDResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetContextsByIDResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetContextsByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetContextsByIDResponse(buffer_arg) {
  return metadata_store_service_pb.GetContextsByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetContextsByTypeRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetContextsByTypeRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetContextsByTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetContextsByTypeRequest(buffer_arg) {
  return metadata_store_service_pb.GetContextsByTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetContextsByTypeResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetContextsByTypeResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetContextsByTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetContextsByTypeResponse(buffer_arg) {
  return metadata_store_service_pb.GetContextsByTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetContextsRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetContextsRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetContextsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetContextsRequest(buffer_arg) {
  return metadata_store_service_pb.GetContextsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetContextsResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetContextsResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetContextsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetContextsResponse(buffer_arg) {
  return metadata_store_service_pb.GetContextsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetEventsByArtifactIDsRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetEventsByArtifactIDsRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetEventsByArtifactIDsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetEventsByArtifactIDsRequest(buffer_arg) {
  return metadata_store_service_pb.GetEventsByArtifactIDsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetEventsByArtifactIDsResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetEventsByArtifactIDsResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetEventsByArtifactIDsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetEventsByArtifactIDsResponse(buffer_arg) {
  return metadata_store_service_pb.GetEventsByArtifactIDsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetEventsByExecutionIDsRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetEventsByExecutionIDsRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetEventsByExecutionIDsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetEventsByExecutionIDsRequest(buffer_arg) {
  return metadata_store_service_pb.GetEventsByExecutionIDsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetEventsByExecutionIDsResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetEventsByExecutionIDsResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetEventsByExecutionIDsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetEventsByExecutionIDsResponse(buffer_arg) {
  return metadata_store_service_pb.GetEventsByExecutionIDsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetExecutionTypeRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetExecutionTypeRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetExecutionTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetExecutionTypeRequest(buffer_arg) {
  return metadata_store_service_pb.GetExecutionTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetExecutionTypeResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetExecutionTypeResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetExecutionTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetExecutionTypeResponse(buffer_arg) {
  return metadata_store_service_pb.GetExecutionTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetExecutionTypesByIDRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetExecutionTypesByIDRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetExecutionTypesByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetExecutionTypesByIDRequest(buffer_arg) {
  return metadata_store_service_pb.GetExecutionTypesByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetExecutionTypesByIDResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetExecutionTypesByIDResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetExecutionTypesByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetExecutionTypesByIDResponse(buffer_arg) {
  return metadata_store_service_pb.GetExecutionTypesByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetExecutionTypesRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetExecutionTypesRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetExecutionTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetExecutionTypesRequest(buffer_arg) {
  return metadata_store_service_pb.GetExecutionTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetExecutionTypesResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetExecutionTypesResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetExecutionTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetExecutionTypesResponse(buffer_arg) {
  return metadata_store_service_pb.GetExecutionTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetExecutionsByContextRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetExecutionsByContextRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetExecutionsByContextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetExecutionsByContextRequest(buffer_arg) {
  return metadata_store_service_pb.GetExecutionsByContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetExecutionsByContextResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetExecutionsByContextResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetExecutionsByContextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetExecutionsByContextResponse(buffer_arg) {
  return metadata_store_service_pb.GetExecutionsByContextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetExecutionsByIDRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetExecutionsByIDRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetExecutionsByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetExecutionsByIDRequest(buffer_arg) {
  return metadata_store_service_pb.GetExecutionsByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetExecutionsByIDResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetExecutionsByIDResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetExecutionsByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetExecutionsByIDResponse(buffer_arg) {
  return metadata_store_service_pb.GetExecutionsByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetExecutionsByTypeRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetExecutionsByTypeRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetExecutionsByTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetExecutionsByTypeRequest(buffer_arg) {
  return metadata_store_service_pb.GetExecutionsByTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetExecutionsByTypeResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetExecutionsByTypeResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetExecutionsByTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetExecutionsByTypeResponse(buffer_arg) {
  return metadata_store_service_pb.GetExecutionsByTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetExecutionsRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetExecutionsRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetExecutionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetExecutionsRequest(buffer_arg) {
  return metadata_store_service_pb.GetExecutionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetExecutionsResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetExecutionsResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetExecutionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetExecutionsResponse(buffer_arg) {
  return metadata_store_service_pb.GetExecutionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetParentContextsByContextRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetParentContextsByContextRequest)) {
    throw new Error('Expected argument of type ml_metadata.GetParentContextsByContextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetParentContextsByContextRequest(buffer_arg) {
  return metadata_store_service_pb.GetParentContextsByContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_GetParentContextsByContextResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.GetParentContextsByContextResponse)) {
    throw new Error('Expected argument of type ml_metadata.GetParentContextsByContextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_GetParentContextsByContextResponse(buffer_arg) {
  return metadata_store_service_pb.GetParentContextsByContextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutArtifactTypeRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutArtifactTypeRequest)) {
    throw new Error('Expected argument of type ml_metadata.PutArtifactTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutArtifactTypeRequest(buffer_arg) {
  return metadata_store_service_pb.PutArtifactTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutArtifactTypeResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutArtifactTypeResponse)) {
    throw new Error('Expected argument of type ml_metadata.PutArtifactTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutArtifactTypeResponse(buffer_arg) {
  return metadata_store_service_pb.PutArtifactTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutArtifactsRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutArtifactsRequest)) {
    throw new Error('Expected argument of type ml_metadata.PutArtifactsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutArtifactsRequest(buffer_arg) {
  return metadata_store_service_pb.PutArtifactsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutArtifactsResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutArtifactsResponse)) {
    throw new Error('Expected argument of type ml_metadata.PutArtifactsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutArtifactsResponse(buffer_arg) {
  return metadata_store_service_pb.PutArtifactsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutAttributionsAndAssociationsRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutAttributionsAndAssociationsRequest)) {
    throw new Error('Expected argument of type ml_metadata.PutAttributionsAndAssociationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutAttributionsAndAssociationsRequest(buffer_arg) {
  return metadata_store_service_pb.PutAttributionsAndAssociationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutAttributionsAndAssociationsResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutAttributionsAndAssociationsResponse)) {
    throw new Error('Expected argument of type ml_metadata.PutAttributionsAndAssociationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutAttributionsAndAssociationsResponse(buffer_arg) {
  return metadata_store_service_pb.PutAttributionsAndAssociationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutContextTypeRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutContextTypeRequest)) {
    throw new Error('Expected argument of type ml_metadata.PutContextTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutContextTypeRequest(buffer_arg) {
  return metadata_store_service_pb.PutContextTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutContextTypeResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutContextTypeResponse)) {
    throw new Error('Expected argument of type ml_metadata.PutContextTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutContextTypeResponse(buffer_arg) {
  return metadata_store_service_pb.PutContextTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutContextsRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutContextsRequest)) {
    throw new Error('Expected argument of type ml_metadata.PutContextsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutContextsRequest(buffer_arg) {
  return metadata_store_service_pb.PutContextsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutContextsResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutContextsResponse)) {
    throw new Error('Expected argument of type ml_metadata.PutContextsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutContextsResponse(buffer_arg) {
  return metadata_store_service_pb.PutContextsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutEventsRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutEventsRequest)) {
    throw new Error('Expected argument of type ml_metadata.PutEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutEventsRequest(buffer_arg) {
  return metadata_store_service_pb.PutEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutEventsResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutEventsResponse)) {
    throw new Error('Expected argument of type ml_metadata.PutEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutEventsResponse(buffer_arg) {
  return metadata_store_service_pb.PutEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutExecutionRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutExecutionRequest)) {
    throw new Error('Expected argument of type ml_metadata.PutExecutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutExecutionRequest(buffer_arg) {
  return metadata_store_service_pb.PutExecutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutExecutionResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutExecutionResponse)) {
    throw new Error('Expected argument of type ml_metadata.PutExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutExecutionResponse(buffer_arg) {
  return metadata_store_service_pb.PutExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutExecutionTypeRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutExecutionTypeRequest)) {
    throw new Error('Expected argument of type ml_metadata.PutExecutionTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutExecutionTypeRequest(buffer_arg) {
  return metadata_store_service_pb.PutExecutionTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutExecutionTypeResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutExecutionTypeResponse)) {
    throw new Error('Expected argument of type ml_metadata.PutExecutionTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutExecutionTypeResponse(buffer_arg) {
  return metadata_store_service_pb.PutExecutionTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutExecutionsRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutExecutionsRequest)) {
    throw new Error('Expected argument of type ml_metadata.PutExecutionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutExecutionsRequest(buffer_arg) {
  return metadata_store_service_pb.PutExecutionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutExecutionsResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutExecutionsResponse)) {
    throw new Error('Expected argument of type ml_metadata.PutExecutionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutExecutionsResponse(buffer_arg) {
  return metadata_store_service_pb.PutExecutionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutParentContextsRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutParentContextsRequest)) {
    throw new Error('Expected argument of type ml_metadata.PutParentContextsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutParentContextsRequest(buffer_arg) {
  return metadata_store_service_pb.PutParentContextsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutParentContextsResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutParentContextsResponse)) {
    throw new Error('Expected argument of type ml_metadata.PutParentContextsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutParentContextsResponse(buffer_arg) {
  return metadata_store_service_pb.PutParentContextsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutTypesRequest(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutTypesRequest)) {
    throw new Error('Expected argument of type ml_metadata.PutTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutTypesRequest(buffer_arg) {
  return metadata_store_service_pb.PutTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ml_metadata_PutTypesResponse(arg) {
  if (!(arg instanceof metadata_store_service_pb.PutTypesResponse)) {
    throw new Error('Expected argument of type ml_metadata.PutTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ml_metadata_PutTypesResponse(buffer_arg) {
  return metadata_store_service_pb.PutTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MetadataStoreServiceService = exports.MetadataStoreServiceService = {
  // Inserts or updates artifacts in the database.
  //
  // If an artifact_id is specified for an artifact, it is an update.
  // If an artifact_id is unspecified, it will insert a new artifact.
  // For new artifacts, type must be specified.
  // For old artifacts, type must be unchanged or unspecified.
  //
  // Args:
  //   artifacts: A list of artifacts to insert or update.
  //
  // Returns:
  //   A list of artifact ids index-aligned with the input.
  putArtifacts: {
    path: '/ml_metadata.MetadataStoreService/PutArtifacts',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.PutArtifactsRequest,
    responseType: metadata_store_service_pb.PutArtifactsResponse,
    requestSerialize: serialize_ml_metadata_PutArtifactsRequest,
    requestDeserialize: deserialize_ml_metadata_PutArtifactsRequest,
    responseSerialize: serialize_ml_metadata_PutArtifactsResponse,
    responseDeserialize: deserialize_ml_metadata_PutArtifactsResponse,
  },
  // Inserts or updates an artifact type.
  //
  // If no artifact type exists in the database with the given name, it creates
  // a new artifact type (and a database).
  //
  // If an artifact type with the same name already exists (let's call it
  // old_artifact_type), then the impact depends upon the other options.
  //
  // If artifact_type == old_artifact_type, then nothing happens.
  //
  // Otherwise, if there is a field where artifact_type and old_artifact_type
  // have different types, then it fails.
  //
  // Otherwise, if can_add_fields is False and artifact_type has a field
  // old_artifact_type is missing, then it fails.
  //
  // Otherwise, if all_fields_match is True and old_artifact_type has a field
  // artifact_type is missing, then it fails.
  //
  // Otherwise, if can_delete_fields is True and old_artifact_type has a field
  // artifact_type is missing, then it deletes that field.
  //
  // Otherwise, it does nothing.
  // Args:
  //   artifact_type: the type to add or update.
  //
  // Returns error if a constraint is violated.
  putArtifactType: {
    path: '/ml_metadata.MetadataStoreService/PutArtifactType',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.PutArtifactTypeRequest,
    responseType: metadata_store_service_pb.PutArtifactTypeResponse,
    requestSerialize: serialize_ml_metadata_PutArtifactTypeRequest,
    requestDeserialize: deserialize_ml_metadata_PutArtifactTypeRequest,
    responseSerialize: serialize_ml_metadata_PutArtifactTypeResponse,
    responseDeserialize: deserialize_ml_metadata_PutArtifactTypeResponse,
  },
  // Inserts or updates executions in the database.
  //
  // If an execution_id is specified for an execution, it is an update.
  // If an execution_id is unspecified, it will insert a new execution.
  // For new executions, type must be specified.
  // For old executions, type must be unchanged or unspecified.
  //
  // Args:
  //   executions: A list of executions to insert or update.
  //
  // Returns:
  //   A list of execution ids index-aligned with the input.
  //
  putExecutions: {
    path: '/ml_metadata.MetadataStoreService/PutExecutions',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.PutExecutionsRequest,
    responseType: metadata_store_service_pb.PutExecutionsResponse,
    requestSerialize: serialize_ml_metadata_PutExecutionsRequest,
    requestDeserialize: deserialize_ml_metadata_PutExecutionsRequest,
    responseSerialize: serialize_ml_metadata_PutExecutionsResponse,
    responseDeserialize: deserialize_ml_metadata_PutExecutionsResponse,
  },
  // Inserts or updates an execution type.
  //
  // If no execution type exists in the database with the given name, it
  // creates a new execution type (and a database).
  //
  // If an execution type with the same name already exists (let's call it
  // old_execution_type), then the impact depends upon the other options.
  //
  // If execution_type == old_execution_type, then nothing happens.
  //
  // Otherwise, if there is a field where execution_type and old_execution_type
  // have different types, then it fails.
  //
  // Otherwise, if can_add_fields is False and execution_type has a field
  // old_execution_type is missing, then it fails.
  //
  // Otherwise, if all_fields_match is True and old_execution_type has a field
  // execution_type is missing, then it fails.
  //
  // Otherwise, if can_delete_fields is True and old_execution_type has a field
  // execution_type is missing, then it deletes that field.
  //
  // Otherwise, it does nothing.
  // Args:
  //   execution_type: the type to add or update.
  //   can_add_fields: if true, you can add fields with this operation. If
  // false, then if there are more fields in execution_type than in the
  // database,
  //     the call fails.
  //   can_delete_fields: if true, you can remove fields with this operation.
  // If false, then if there are more fields.
  //
  // Returns error if a constraint is violated.
  putExecutionType: {
    path: '/ml_metadata.MetadataStoreService/PutExecutionType',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.PutExecutionTypeRequest,
    responseType: metadata_store_service_pb.PutExecutionTypeResponse,
    requestSerialize: serialize_ml_metadata_PutExecutionTypeRequest,
    requestDeserialize: deserialize_ml_metadata_PutExecutionTypeRequest,
    responseSerialize: serialize_ml_metadata_PutExecutionTypeResponse,
    responseDeserialize: deserialize_ml_metadata_PutExecutionTypeResponse,
  },
  // Inserts events in the database.
  //
  // The execution_id and artifact_id must already exist.
  // Once created, events cannot be modified.
  //
  // Args:
  //   events: A list of events to insert or update.
  putEvents: {
    path: '/ml_metadata.MetadataStoreService/PutEvents',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.PutEventsRequest,
    responseType: metadata_store_service_pb.PutEventsResponse,
    requestSerialize: serialize_ml_metadata_PutEventsRequest,
    requestDeserialize: deserialize_ml_metadata_PutEventsRequest,
    responseSerialize: serialize_ml_metadata_PutEventsResponse,
    responseDeserialize: deserialize_ml_metadata_PutEventsResponse,
  },
  // Inserts or updates an Execution and its input and output artifacts
  // atomically. The artifact include the state changes of the Artifacts used
  // or generated by the Execution, as well as the input/output Event.
  //
  // If an execution_id or artifact_id is specified, it is an update, otherwise
  // it does an insertion. For insertion, type must be specified.
  //
  // Args:
  //   execution: An executions to insert or update.
  //   artifact_event_pairs: Artifacts to insert or update and events to insert.
  //
  // Returns:
  //   An execution id and a list of artifacts ids index-aligned with the input.
  putExecution: {
    path: '/ml_metadata.MetadataStoreService/PutExecution',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.PutExecutionRequest,
    responseType: metadata_store_service_pb.PutExecutionResponse,
    requestSerialize: serialize_ml_metadata_PutExecutionRequest,
    requestDeserialize: deserialize_ml_metadata_PutExecutionRequest,
    responseSerialize: serialize_ml_metadata_PutExecutionResponse,
    responseDeserialize: deserialize_ml_metadata_PutExecutionResponse,
  },
  // Bulk inserts types atomically.
  //
  // If no type exists in the database with the given name, it creates
  // a new type.
  //
  // If a type with the same name already exists (let's call it
  // old_type), then the impact depends upon the other options.
  //
  // If type == old_type, then nothing happens.
  //
  // Otherwise, if there is a field where type and old_type have different
  // types, then it fails.
  //
  // Args:
  //   artifact_type: the artifact type to add or update.
  //   execution_type: the execution type to add or update.
  //
  // Returns error if a constraint is violated.
  putTypes: {
    path: '/ml_metadata.MetadataStoreService/PutTypes',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.PutTypesRequest,
    responseType: metadata_store_service_pb.PutTypesResponse,
    requestSerialize: serialize_ml_metadata_PutTypesRequest,
    requestDeserialize: deserialize_ml_metadata_PutTypesRequest,
    responseSerialize: serialize_ml_metadata_PutTypesResponse,
    responseDeserialize: deserialize_ml_metadata_PutTypesResponse,
  },
  // Inserts or updates an ContextType.
  //
  // If no context type exists in the database with the given name, it
  // creates a new context type (and a database).
  //
  // If an context type with the same name already exists (let's call it
  // old_context_type), then the impact depends upon the other options.
  //
  // If context_type == old_context_type, nothing happens (its id is returned).
  //
  // Otherwise, when context_type and old_context_type have different types,
  // a) if all_fields_match is True: then it fails.
  // b) can_add_fields is True: it fails when old_context_type has additional
  // fields than context_type.
  //
  // Returns error if a constraint is violated.
  putContextType: {
    path: '/ml_metadata.MetadataStoreService/PutContextType',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.PutContextTypeRequest,
    responseType: metadata_store_service_pb.PutContextTypeResponse,
    requestSerialize: serialize_ml_metadata_PutContextTypeRequest,
    requestDeserialize: deserialize_ml_metadata_PutContextTypeRequest,
    responseSerialize: serialize_ml_metadata_PutContextTypeResponse,
    responseDeserialize: deserialize_ml_metadata_PutContextTypeResponse,
  },
  // Inserts or updates contexts in database and returns a list of context ids.
  //
  // If an context_id is specified for a context, it is an update.
  // If an context_id is unspecified, it will insert a new context.
  // For new contexts, type must be specified.
  // For old contexts, type must be unchanged or unspecified.
  //
  // Args:
  //   contexts: A list of contexts to insert or update.
  //
  // Returns:
  //   A list of context ids index-aligned with the input.
  putContexts: {
    path: '/ml_metadata.MetadataStoreService/PutContexts',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.PutContextsRequest,
    responseType: metadata_store_service_pb.PutContextsResponse,
    requestSerialize: serialize_ml_metadata_PutContextsRequest,
    requestDeserialize: deserialize_ml_metadata_PutContextsRequest,
    responseSerialize: serialize_ml_metadata_PutContextsResponse,
    responseDeserialize: deserialize_ml_metadata_PutContextsResponse,
  },
  // Inserts attribution and association relationships in the database.
  // The context_id, artifact_id, and execution_id must already exist.
  // If the relationship exists, this call does nothing. Once added, the
  // relationships cannot be modified.
  //
  // Args:
  //   attributions: A list of attributions to insert.
  //   associations: A list of associations to insert.
  putAttributionsAndAssociations: {
    path: '/ml_metadata.MetadataStoreService/PutAttributionsAndAssociations',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.PutAttributionsAndAssociationsRequest,
    responseType: metadata_store_service_pb.PutAttributionsAndAssociationsResponse,
    requestSerialize: serialize_ml_metadata_PutAttributionsAndAssociationsRequest,
    requestDeserialize: deserialize_ml_metadata_PutAttributionsAndAssociationsRequest,
    responseSerialize: serialize_ml_metadata_PutAttributionsAndAssociationsResponse,
    responseDeserialize: deserialize_ml_metadata_PutAttributionsAndAssociationsResponse,
  },
  // Inserts parental context relationships in the database.
  // The ParentContext relationship has direction. The call fails if cycles are
  // detected.
  //
  // Args:
  //   parent_contexts: A list of parent contexts to insert.
  putParentContexts: {
    path: '/ml_metadata.MetadataStoreService/PutParentContexts',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.PutParentContextsRequest,
    responseType: metadata_store_service_pb.PutParentContextsResponse,
    requestSerialize: serialize_ml_metadata_PutParentContextsRequest,
    requestDeserialize: deserialize_ml_metadata_PutParentContextsRequest,
    responseSerialize: serialize_ml_metadata_PutParentContextsResponse,
    responseDeserialize: deserialize_ml_metadata_PutParentContextsResponse,
  },
  // Gets an artifact type. Returns a NOT_FOUND error if the type does not
  // exist.
  getArtifactType: {
    path: '/ml_metadata.MetadataStoreService/GetArtifactType',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetArtifactTypeRequest,
    responseType: metadata_store_service_pb.GetArtifactTypeResponse,
    requestSerialize: serialize_ml_metadata_GetArtifactTypeRequest,
    requestDeserialize: deserialize_ml_metadata_GetArtifactTypeRequest,
    responseSerialize: serialize_ml_metadata_GetArtifactTypeResponse,
    responseDeserialize: deserialize_ml_metadata_GetArtifactTypeResponse,
  },
  // Gets a list of artifact types by ID.
  // If no artifact types with an ID exists, the artifact type is skipped.
  getArtifactTypesByID: {
    path: '/ml_metadata.MetadataStoreService/GetArtifactTypesByID',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetArtifactTypesByIDRequest,
    responseType: metadata_store_service_pb.GetArtifactTypesByIDResponse,
    requestSerialize: serialize_ml_metadata_GetArtifactTypesByIDRequest,
    requestDeserialize: deserialize_ml_metadata_GetArtifactTypesByIDRequest,
    responseSerialize: serialize_ml_metadata_GetArtifactTypesByIDResponse,
    responseDeserialize: deserialize_ml_metadata_GetArtifactTypesByIDResponse,
  },
  // Gets a list of all artifact types.
  getArtifactTypes: {
    path: '/ml_metadata.MetadataStoreService/GetArtifactTypes',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetArtifactTypesRequest,
    responseType: metadata_store_service_pb.GetArtifactTypesResponse,
    requestSerialize: serialize_ml_metadata_GetArtifactTypesRequest,
    requestDeserialize: deserialize_ml_metadata_GetArtifactTypesRequest,
    responseSerialize: serialize_ml_metadata_GetArtifactTypesResponse,
    responseDeserialize: deserialize_ml_metadata_GetArtifactTypesResponse,
  },
  // Gets an execution type, or None if it does not exist.
  getExecutionType: {
    path: '/ml_metadata.MetadataStoreService/GetExecutionType',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetExecutionTypeRequest,
    responseType: metadata_store_service_pb.GetExecutionTypeResponse,
    requestSerialize: serialize_ml_metadata_GetExecutionTypeRequest,
    requestDeserialize: deserialize_ml_metadata_GetExecutionTypeRequest,
    responseSerialize: serialize_ml_metadata_GetExecutionTypeResponse,
    responseDeserialize: deserialize_ml_metadata_GetExecutionTypeResponse,
  },
  // Gets a list of execution types by ID.
  // If no execution types with an ID exists, the execution type is skipped.
  getExecutionTypesByID: {
    path: '/ml_metadata.MetadataStoreService/GetExecutionTypesByID',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetExecutionTypesByIDRequest,
    responseType: metadata_store_service_pb.GetExecutionTypesByIDResponse,
    requestSerialize: serialize_ml_metadata_GetExecutionTypesByIDRequest,
    requestDeserialize: deserialize_ml_metadata_GetExecutionTypesByIDRequest,
    responseSerialize: serialize_ml_metadata_GetExecutionTypesByIDResponse,
    responseDeserialize: deserialize_ml_metadata_GetExecutionTypesByIDResponse,
  },
  // Gets a list of all execution types.
  getExecutionTypes: {
    path: '/ml_metadata.MetadataStoreService/GetExecutionTypes',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetExecutionTypesRequest,
    responseType: metadata_store_service_pb.GetExecutionTypesResponse,
    requestSerialize: serialize_ml_metadata_GetExecutionTypesRequest,
    requestDeserialize: deserialize_ml_metadata_GetExecutionTypesRequest,
    responseSerialize: serialize_ml_metadata_GetExecutionTypesResponse,
    responseDeserialize: deserialize_ml_metadata_GetExecutionTypesResponse,
  },
  // Gets a context type. Returns a NOT_FOUND error if the type does not exist.
  getContextType: {
    path: '/ml_metadata.MetadataStoreService/GetContextType',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetContextTypeRequest,
    responseType: metadata_store_service_pb.GetContextTypeResponse,
    requestSerialize: serialize_ml_metadata_GetContextTypeRequest,
    requestDeserialize: deserialize_ml_metadata_GetContextTypeRequest,
    responseSerialize: serialize_ml_metadata_GetContextTypeResponse,
    responseDeserialize: deserialize_ml_metadata_GetContextTypeResponse,
  },
  // Gets a list of context types by ID.
  // If no context types with an ID exists, the context type is skipped.
  getContextTypesByID: {
    path: '/ml_metadata.MetadataStoreService/GetContextTypesByID',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetContextTypesByIDRequest,
    responseType: metadata_store_service_pb.GetContextTypesByIDResponse,
    requestSerialize: serialize_ml_metadata_GetContextTypesByIDRequest,
    requestDeserialize: deserialize_ml_metadata_GetContextTypesByIDRequest,
    responseSerialize: serialize_ml_metadata_GetContextTypesByIDResponse,
    responseDeserialize: deserialize_ml_metadata_GetContextTypesByIDResponse,
  },
  // Gets all the artifacts.
  getArtifacts: {
    path: '/ml_metadata.MetadataStoreService/GetArtifacts',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetArtifactsRequest,
    responseType: metadata_store_service_pb.GetArtifactsResponse,
    requestSerialize: serialize_ml_metadata_GetArtifactsRequest,
    requestDeserialize: deserialize_ml_metadata_GetArtifactsRequest,
    responseSerialize: serialize_ml_metadata_GetArtifactsResponse,
    responseDeserialize: deserialize_ml_metadata_GetArtifactsResponse,
  },
  // Gets all the executions.
  getExecutions: {
    path: '/ml_metadata.MetadataStoreService/GetExecutions',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetExecutionsRequest,
    responseType: metadata_store_service_pb.GetExecutionsResponse,
    requestSerialize: serialize_ml_metadata_GetExecutionsRequest,
    requestDeserialize: deserialize_ml_metadata_GetExecutionsRequest,
    responseSerialize: serialize_ml_metadata_GetExecutionsResponse,
    responseDeserialize: deserialize_ml_metadata_GetExecutionsResponse,
  },
  // Gets all the contexts.
  getContexts: {
    path: '/ml_metadata.MetadataStoreService/GetContexts',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetContextsRequest,
    responseType: metadata_store_service_pb.GetContextsResponse,
    requestSerialize: serialize_ml_metadata_GetContextsRequest,
    requestDeserialize: deserialize_ml_metadata_GetContextsRequest,
    responseSerialize: serialize_ml_metadata_GetContextsResponse,
    responseDeserialize: deserialize_ml_metadata_GetContextsResponse,
  },
  // Gets all artifacts with matching ids.
  //
  // The result is not index-aligned: if an id is not found, it is not returned.
  //
  // Args:
  //   artifact_ids: A list of artifact ids to retrieve.
  //
  // Returns:
  //   Artifacts with matching ids.
  getArtifactsByID: {
    path: '/ml_metadata.MetadataStoreService/GetArtifactsByID',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetArtifactsByIDRequest,
    responseType: metadata_store_service_pb.GetArtifactsByIDResponse,
    requestSerialize: serialize_ml_metadata_GetArtifactsByIDRequest,
    requestDeserialize: deserialize_ml_metadata_GetArtifactsByIDRequest,
    responseSerialize: serialize_ml_metadata_GetArtifactsByIDResponse,
    responseDeserialize: deserialize_ml_metadata_GetArtifactsByIDResponse,
  },
  // Gets all executions with matching ids.
  //
  // The result is not index-aligned: if an id is not found, it is not returned.
  //
  // Args:
  //   execution_ids: A list of execution ids to retrieve.
  getExecutionsByID: {
    path: '/ml_metadata.MetadataStoreService/GetExecutionsByID',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetExecutionsByIDRequest,
    responseType: metadata_store_service_pb.GetExecutionsByIDResponse,
    requestSerialize: serialize_ml_metadata_GetExecutionsByIDRequest,
    requestDeserialize: deserialize_ml_metadata_GetExecutionsByIDRequest,
    responseSerialize: serialize_ml_metadata_GetExecutionsByIDResponse,
    responseDeserialize: deserialize_ml_metadata_GetExecutionsByIDResponse,
  },
  // Gets all contexts with matching ids.
  //
  // The result is not index-aligned: if an id is not found, it is not returned.
  //
  // Args:
  //   context_ids: A list of context ids to retrieve.
  getContextsByID: {
    path: '/ml_metadata.MetadataStoreService/GetContextsByID',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetContextsByIDRequest,
    responseType: metadata_store_service_pb.GetContextsByIDResponse,
    requestSerialize: serialize_ml_metadata_GetContextsByIDRequest,
    requestDeserialize: deserialize_ml_metadata_GetContextsByIDRequest,
    responseSerialize: serialize_ml_metadata_GetContextsByIDResponse,
    responseDeserialize: deserialize_ml_metadata_GetContextsByIDResponse,
  },
  // Gets all the artifacts of a given type.
  getArtifactsByType: {
    path: '/ml_metadata.MetadataStoreService/GetArtifactsByType',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetArtifactsByTypeRequest,
    responseType: metadata_store_service_pb.GetArtifactsByTypeResponse,
    requestSerialize: serialize_ml_metadata_GetArtifactsByTypeRequest,
    requestDeserialize: deserialize_ml_metadata_GetArtifactsByTypeRequest,
    responseSerialize: serialize_ml_metadata_GetArtifactsByTypeResponse,
    responseDeserialize: deserialize_ml_metadata_GetArtifactsByTypeResponse,
  },
  // Gets all the executions of a given type.
  getExecutionsByType: {
    path: '/ml_metadata.MetadataStoreService/GetExecutionsByType',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetExecutionsByTypeRequest,
    responseType: metadata_store_service_pb.GetExecutionsByTypeResponse,
    requestSerialize: serialize_ml_metadata_GetExecutionsByTypeRequest,
    requestDeserialize: deserialize_ml_metadata_GetExecutionsByTypeRequest,
    responseSerialize: serialize_ml_metadata_GetExecutionsByTypeResponse,
    responseDeserialize: deserialize_ml_metadata_GetExecutionsByTypeResponse,
  },
  // Gets all the contexts of a given type.
  getContextsByType: {
    path: '/ml_metadata.MetadataStoreService/GetContextsByType',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetContextsByTypeRequest,
    responseType: metadata_store_service_pb.GetContextsByTypeResponse,
    requestSerialize: serialize_ml_metadata_GetContextsByTypeRequest,
    requestDeserialize: deserialize_ml_metadata_GetContextsByTypeRequest,
    responseSerialize: serialize_ml_metadata_GetContextsByTypeResponse,
    responseDeserialize: deserialize_ml_metadata_GetContextsByTypeResponse,
  },
  // Gets all the artifacts of a given uri.
  getArtifactsByURI: {
    path: '/ml_metadata.MetadataStoreService/GetArtifactsByURI',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetArtifactsByURIRequest,
    responseType: metadata_store_service_pb.GetArtifactsByURIResponse,
    requestSerialize: serialize_ml_metadata_GetArtifactsByURIRequest,
    requestDeserialize: deserialize_ml_metadata_GetArtifactsByURIRequest,
    responseSerialize: serialize_ml_metadata_GetArtifactsByURIResponse,
    responseDeserialize: deserialize_ml_metadata_GetArtifactsByURIResponse,
  },
  // Gets all events with matching execution ids.
  getEventsByExecutionIDs: {
    path: '/ml_metadata.MetadataStoreService/GetEventsByExecutionIDs',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetEventsByExecutionIDsRequest,
    responseType: metadata_store_service_pb.GetEventsByExecutionIDsResponse,
    requestSerialize: serialize_ml_metadata_GetEventsByExecutionIDsRequest,
    requestDeserialize: deserialize_ml_metadata_GetEventsByExecutionIDsRequest,
    responseSerialize: serialize_ml_metadata_GetEventsByExecutionIDsResponse,
    responseDeserialize: deserialize_ml_metadata_GetEventsByExecutionIDsResponse,
  },
  // Gets all events with matching artifact ids.
  getEventsByArtifactIDs: {
    path: '/ml_metadata.MetadataStoreService/GetEventsByArtifactIDs',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetEventsByArtifactIDsRequest,
    responseType: metadata_store_service_pb.GetEventsByArtifactIDsResponse,
    requestSerialize: serialize_ml_metadata_GetEventsByArtifactIDsRequest,
    requestDeserialize: deserialize_ml_metadata_GetEventsByArtifactIDsRequest,
    responseSerialize: serialize_ml_metadata_GetEventsByArtifactIDsResponse,
    responseDeserialize: deserialize_ml_metadata_GetEventsByArtifactIDsResponse,
  },
  // Gets all context that an artifact is attributed to.
  getContextsByArtifact: {
    path: '/ml_metadata.MetadataStoreService/GetContextsByArtifact',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetContextsByArtifactRequest,
    responseType: metadata_store_service_pb.GetContextsByArtifactResponse,
    requestSerialize: serialize_ml_metadata_GetContextsByArtifactRequest,
    requestDeserialize: deserialize_ml_metadata_GetContextsByArtifactRequest,
    responseSerialize: serialize_ml_metadata_GetContextsByArtifactResponse,
    responseDeserialize: deserialize_ml_metadata_GetContextsByArtifactResponse,
  },
  // Gets all context that an execution is associated with.
  getContextsByExecution: {
    path: '/ml_metadata.MetadataStoreService/GetContextsByExecution',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetContextsByExecutionRequest,
    responseType: metadata_store_service_pb.GetContextsByExecutionResponse,
    requestSerialize: serialize_ml_metadata_GetContextsByExecutionRequest,
    requestDeserialize: deserialize_ml_metadata_GetContextsByExecutionRequest,
    responseSerialize: serialize_ml_metadata_GetContextsByExecutionResponse,
    responseDeserialize: deserialize_ml_metadata_GetContextsByExecutionResponse,
  },
  // Gets all parent contexts that a context is related.
  getParentContextsByContext: {
    path: '/ml_metadata.MetadataStoreService/GetParentContextsByContext',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetParentContextsByContextRequest,
    responseType: metadata_store_service_pb.GetParentContextsByContextResponse,
    requestSerialize: serialize_ml_metadata_GetParentContextsByContextRequest,
    requestDeserialize: deserialize_ml_metadata_GetParentContextsByContextRequest,
    responseSerialize: serialize_ml_metadata_GetParentContextsByContextResponse,
    responseDeserialize: deserialize_ml_metadata_GetParentContextsByContextResponse,
  },
  // Gets all children contexts that a context is related.
  getChildrenContextsByContext: {
    path: '/ml_metadata.MetadataStoreService/GetChildrenContextsByContext',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetChildrenContextsByContextRequest,
    responseType: metadata_store_service_pb.GetChildrenContextsByContextResponse,
    requestSerialize: serialize_ml_metadata_GetChildrenContextsByContextRequest,
    requestDeserialize: deserialize_ml_metadata_GetChildrenContextsByContextRequest,
    responseSerialize: serialize_ml_metadata_GetChildrenContextsByContextResponse,
    responseDeserialize: deserialize_ml_metadata_GetChildrenContextsByContextResponse,
  },
  // Gets all direct artifacts that a context attributes to.
  getArtifactsByContext: {
    path: '/ml_metadata.MetadataStoreService/GetArtifactsByContext',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetArtifactsByContextRequest,
    responseType: metadata_store_service_pb.GetArtifactsByContextResponse,
    requestSerialize: serialize_ml_metadata_GetArtifactsByContextRequest,
    requestDeserialize: deserialize_ml_metadata_GetArtifactsByContextRequest,
    responseSerialize: serialize_ml_metadata_GetArtifactsByContextResponse,
    responseDeserialize: deserialize_ml_metadata_GetArtifactsByContextResponse,
  },
  // Gets all direct executions that a context associates with.
  getExecutionsByContext: {
    path: '/ml_metadata.MetadataStoreService/GetExecutionsByContext',
    requestStream: false,
    responseStream: false,
    requestType: metadata_store_service_pb.GetExecutionsByContextRequest,
    responseType: metadata_store_service_pb.GetExecutionsByContextResponse,
    requestSerialize: serialize_ml_metadata_GetExecutionsByContextRequest,
    requestDeserialize: deserialize_ml_metadata_GetExecutionsByContextRequest,
    responseSerialize: serialize_ml_metadata_GetExecutionsByContextResponse,
    responseDeserialize: deserialize_ml_metadata_GetExecutionsByContextResponse,
  },
};

exports.MetadataStoreServiceClient = grpc.makeGenericClientConstructor(MetadataStoreServiceService);
