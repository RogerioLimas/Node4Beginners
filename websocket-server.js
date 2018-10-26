const WebSocketServer = require('ws').Server;

const WSS = new WebSocketServer({ port: 3232 });

WSS.on('connection', (ws) => {
  ws.on('message', (data) => {
    if (data === 'close') {
      ws.close();
      return;
    }
    WSS.clients.forEach((client) => {
      client.send(data);
    });
    console.log(`Aqui: ${data}`);
  });
});
