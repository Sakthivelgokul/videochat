import { useEffect } from "react";
import { io } from "socket.io-client";

export default function Home() {
  useEffect(() => {
    const socket = io("http://localhost:3000/");
    socket.on("connect", () => {
      console.log("connet");
    });
    socket.on("hi", () => {
      console.log("noy");
    });
  }, []);

  return (
    <>
      <p>home</p>
    </>
  );
}
