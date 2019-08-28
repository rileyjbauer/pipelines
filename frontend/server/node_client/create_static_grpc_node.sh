# See instructions: https://github.com/agreatfool/grpc_tools_node_protoc_ts
npm install grpc-tools
npm install grpc_tools_node_protoc_ts --save-dev

# Copy the mlmd proto files here
# And, manually update the import path: import "metadata_store.proto";

~/.nvm/versions/node/v8.0.0/lib/node_modules/node/bin/grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./ \
                                                                             --grpc_out=./ \
                                                                             --plugin=protoc-gen-grpc=./node_modules/grpc-tools/bin/grpc_node_plugin\
                                                                             -I ./ \
                                                                             ./*.proto

protoc \
  --plugin=protoc-gen-ts=./node_modules/grpc_tools_node_protoc_ts/bin/protoc-gen-ts \
  --ts_out=./ \
  -I ./ \
  ./*.proto
