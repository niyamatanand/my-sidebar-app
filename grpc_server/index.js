const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// Load proto
const packageDef = protoLoader.loadSync(
  path.join(__dirname, 'proto', 'echo.proto')
);
const grpcObject = grpc.loadPackageDefinition(packageDef);
const echoPackage = grpcObject.echo;

// Create and start server
const server = new grpc.Server();
server.addService(echoPackage.EchoService.service, {
  Echo: (call, callback) => {
    console.log("📥 Received:", call.request.message);
    callback(null, { message: `Echo: ${call.request.message}` });
  },
});

server.bindAsync(
  '0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("✅ gRPC server running at http://localhost:50051");
    server.start();
  }
);
