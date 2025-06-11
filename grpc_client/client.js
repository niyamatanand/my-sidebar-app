const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// Load proto
const packageDef = protoLoader.loadSync(
  path.join(__dirname, '..', 'grpc_server', 'proto', 'echo.proto')
);
const grpcObject = grpc.loadPackageDefinition(packageDef);
const echoPackage = grpcObject.echo;

// Create client
const client = new echoPackage.EchoService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

// Send request
console.log("📤 Sending gRPC request...");
client.Echo({ message: "Hello from Client!" }, (err, response) => {
  if (err) {
    console.error("❌ gRPC Error:", err);
  } else {
    console.log("✅ Server Response:", response.message);
  }
});
