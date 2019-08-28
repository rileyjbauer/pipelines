import {credentials, loadPackageDefinition} from 'grpc';
import * as path from 'path';
import * as loader from '@grpc/proto-loader';

const PROTO_PATH = path.join(__dirname, '/metadata_store_service.proto');
const packageDefinition = loader.loadSync(
    PROTO_PATH,
    {
      keepCase: false,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
      includeDirs: ['/']
    }
);
const mlmd = loadPackageDefinition(packageDefinition).ml_metadata as any;
const MetadataStoreService = mlmd.MetadataStoreService;
const client = new MetadataStoreService('0.0.0.0:8080', credentials.createInsecure());
const exec_type = {
    executionType: {
      id: 1,
      name: 'exec_type_one'
    },
    allFieldsMatch: true
};
client.putExecutionType(exec_type, function (err, response) {
  console.log('put execution type: ', response.typeId);
});

