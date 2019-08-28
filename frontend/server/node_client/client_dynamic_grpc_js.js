/*
 *
 * Copyright 2015 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var path = require('path');

var PROTO_PATH = path.join(__dirname, '../ml_metadata/proto/metadata_store_service.proto');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    options = {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
      includeDirs: [path.join(__dirname, '../')]
    }
);
var mlmd = grpc.loadPackageDefinition(packageDefinition).ml_metadata;

function main() {
  var client = new mlmd.MetadataStoreService('0.0.0.0:8080',
      grpc.credentials.createInsecure());
  var exec_type = {
    execution_type: {
      id: 1,
      name: 'exec_type_one'
    },
    all_fields_match: true
  };
  client.PutExecutionType(exec_type, function (err, response) {
    console.log('put execution type: ', response.type_id);
  });
}

main();