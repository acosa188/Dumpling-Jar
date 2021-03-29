// loading .env
require('dotenv').config();

const io = require("socket.io-client");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");

// creating streamlab websocket
const streamlabs = io(`https://sockets.streamlabs.com?token=${process.env.SOCKET_API}`);

streamlabs.on("connect", () => {
    console.log("Connection Success!!");
});

streamlabs.on("event", (eventData) => {
    if (eventData.type === "follow") {
        try {
            // raising a newFollower event
            ioserver.emit("newFollower");
        }
        catch (err) {
            console.log("something went wrong");
        }
    }
});

// creating the server side socket
const serversocket = require("socket.io");
const server = app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});

// So it will also use the static html page
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

// Socket setup
let ioserver = serversocket(server);

ioserver.on('connection', (socket) => {
    console.log(`new connection on websocket id: ${socket.id}`);
});