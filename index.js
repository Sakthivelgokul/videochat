import { io, server, app } from "./api/socket/socket.js";
import cors from "cors";
import path from "path";
import express from "express";
import connectDb from "./db/index.js";
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use(
  cors({
    origin: "*",
    methods: ["GET,POST"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
);
//const db = connectDb()
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
