const express = require('express');
const app = express();
const http = require('http');
const httpserver = http.createServer(app);

// Loads Server class from socket.io and makes a new server instance variable with the name io, using the http server.
const { Server } = require('socket.io');
const io = new Server(httpserver);

// first route to root, sending hello world to the user.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
    console.log('User connected.');
});

// Makes the server availible to access.
httpserver.listen(3000, () => {
    console.log('Listening on *:3000');
});