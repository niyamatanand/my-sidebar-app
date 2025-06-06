const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
  console.log('Client connected ✅');

  ws.on('message', (message) => {
    console.log('Received:', message);
    const reversed = message.toString().split('').reverse().join('');
    ws.send(reversed); // Send back reversed string
  });

  ws.on('close', () => {
    console.log('Client disconnected ❌');
  });
});
