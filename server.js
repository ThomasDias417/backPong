const express = require('express');
const http = require('http');
const app = express();
const {Server} = require('socket.io');
const port = process.env.PORT || 8000
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET","POST"],
    },
});

io.on('connect',(socket)=>{
    console.log('user connected ',socket.id)
})


server.listen(port,()=>{
    console.log(`listening on ${port}`);
})
