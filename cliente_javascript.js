const WebSocket = require("ws");
const socket = new WebSocket('ws://10.236.28.136:8011');


// Abre la conexión
socket.addEventListener('open', function (event) {
    //socket.send('Hello Server!');
    console.log("Connected with server. YOLO:");
});


// Escucha por mensajes
socket.addEventListener('message', function (event) {
    // time_platf = Date.now();
    // time_yolo = event.data/1000000;
    // time_final = time_platf-time_yolo;
    console.log(Date.now()-event.data/1000000);
    //console.log(event.data);
});
