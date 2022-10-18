const WebSocket = require('ws');


const socket = new WebSocket('ws://10.236.30.29:8000');


// Abre la conexión
socket.addEventListener('open', function (event) {
    //socket.send('Hello Server!');
    console.log("Connected with server. YOLO:");
});


// Escucha por mensajes
socket.addEventListener('message', function (event) {
    console.log(event.data);
});
