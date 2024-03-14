import {io,server,app  } from "./api/socket/socket.js";
import cors from "cors";



app.use(cors({
  "origin": "*",
  "methods": "GET,POST",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}))


app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});
io.on("connection",(socket)=>{
 socket.emit("hi",()=>{
  console.log("hii");
})
})
  
server.listen(3000, () => {
  console.log('listening on *:3000');
});
