import { useEffect } from "react";
import { io } from "socket.io-client";
import Room from "../componets/roomController";
export default function Home() {
  useEffect(() => {
    const socket = io("http://localhost:3000/");
    socket.on("connect", () => {
      console.log("connet");
    });
    socket.on("hi", () => {
      console.log("noy");
    });

function createRoom(){
socket.emit("create","public");

}
  }, []);


  return (
    <>
    <Room createRoom={createRoom()} />
    </>
  );
}
