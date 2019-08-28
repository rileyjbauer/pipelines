import {MetadataStoreServiceClient} from './metadata_store_service_grpc_pb';
import {PutExecutionTypeRequest} from './metadata_store_service_pb';
import {ExecutionType} from './metadata_store_pb';

import * as grpc from 'grpc';

const client= new MetadataStoreServiceClient('0.0.0.0:8080', grpc.credentials.createInsecure());
const req = new PutExecutionTypeRequest();
const exec_type = new ExecutionType();
exec_type.setId(1);
exec_type.setName('exec_type_one');
req.setExecutionType(exec_type);
req.setAllFieldsMatch(true);
client.putExecutionType(req, (err, rep) => {
  if(err){
    console.log(err);
  } else{
    console.log('Greeting:', rep.getTypeId());
  }
});
