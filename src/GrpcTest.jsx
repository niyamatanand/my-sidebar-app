import React, { useEffect } from 'react';

// Import your generated gRPC-web client and messages
import { GreeterClient } from './proto/echo_grpc_web_pb';
import { HelloRequest } from './proto/echo_pb';


const GrpcTest = () => {
  useEffect(() => {
    const client = new GreeterClient('http://localhost:8080'); // envoy proxy endpoint

    const request = new HelloRequest();
    request.setName("Akeniyamat");

    client.sayHello(request, {}, (err, response) => {
      if (err) {
        console.error('gRPC Error:', err);
      } else {
        console.log('gRPC Response:', response.getMessage());
        alert("gRPC Response: " + response.getMessage());
      }
    });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Testing gRPC Connection...</h1>
    </div>
  );
};

export default GrpcTest;
