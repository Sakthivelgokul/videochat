import { useEffect } from "react"
import {socket} from "../socket"
export default function Home(){
useEffect(()=>
    {
        socket.on("connect",()=>{
        console.log("connet");
        })
    socket.on("hi",()=>{
    console.log("noy")})
    },[])

    return (
        <>
    <p>home</p>
        </>
    )
  }
  
