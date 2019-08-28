"use strict";
exports.__esModule = true;
var metadata_store_service_grpc_pb_1 = require("./metadata_store_service_grpc_pb");
var metadata_store_service_pb_1 = require("./metadata_store_service_pb");
var metadata_store_pb_1 = require("./metadata_store_pb");
var grpc = require("grpc");
var client = new metadata_store_service_grpc_pb_1.MetadataStoreServiceClient('0.0.0.0:8080', grpc.credentials.createInsecure());
var req = new metadata_store_service_pb_1.PutExecutionTypeRequest();
var exec_type = new metadata_store_pb_1.ExecutionType();
exec_type.setId(1);
exec_type.setName('exec_type_one');
req.setExecutionType(exec_type);
req.setAllFieldsMatch(true);
client.putExecutionType(req, function (err, rep) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Greeting:', rep.getTypeId());
    }
});
