var data = require('./metadata_store_pb');
var messages = require('./metadata_store_service_pb');
var services = require('./metadata_store_service_grpc_pb');

var grpc = require('grpc');

function main() {
  var client = new services.MetadataStoreServiceClient('0.0.0.0:8080',
      grpc.credentials.createInsecure());
  var request = new messages.PutExecutionTypeRequest();
  var exec_type = new data.ExecutionType();
  exec_type.setId(1);
  exec_type.setName('exec_type_one');
  request.setExecutionType(exec_type);
  request.setAllFieldsMatch(true);
  client.putExecutionType(request, function(err, response) {
    if(err){
      console.log(err);
    }else{
      console.log('Greeting:', response.getTypeId());
    }
  });
}

main();