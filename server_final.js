//https://www.npmjs.com/package/ws


const WebSocket = require('ws');

let webSocketPort = 8000 //port for the websocket

const  webSocketServer= new WebSocket.Server({ port:  webSocketPort });


webSocketServer.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
      console.log(data.toString());
    });
  
});


