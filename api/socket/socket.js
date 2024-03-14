import express from "express"; 
import http from "http";
import {Server} from "socket.io"

const app = express();
const server = http.createServer(app);
const io=new Server(server,{
        cors:{origin:"*"}
    });
io.on("connection",(socket)=>{
    console.log("a user connected",socket.id)
    io.emit("hi",()=>{
        console.log("noy")
    })
})

export  {io,server,app}

