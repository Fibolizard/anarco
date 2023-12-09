const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');

http.createServer(app);
app.use(express.static('public'));
app.listen(3000, () =>{
console.log("server on port 3000");
});



alert('copperfield es maricón');
