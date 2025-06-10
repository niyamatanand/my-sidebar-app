const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected ✅');

  ws.on('message', (message) => {
    console.log('Received:', message.toString());

    const reversed = message.toString().split('').reverse().join('');
    ws.send(reversed);
  });

  ws.on('close', () => {
    console.log('Client disconnected ❌');
  });
});
