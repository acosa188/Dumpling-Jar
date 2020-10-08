const express = require('express');
const socket = require('socket.io');
const bodyParser = require('body-parser');

let app = express();
let port = 8080;
let server = app.listen(port, () =>{
    console.log(`Server is running in port ${port}`);
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

let io = socket(server);

//some streamlab alerts
app.post("/addBubbleFollower/:name", (req, res) => {
    //triggers a websocket event
    let name = req.params.name;

    io.emit("newFollower", {name: name});
});

io.sockets.on('connection', (socket) => {
    console.log(`new connection on websocket id: ${socket.id}`);
})