import express from "express";
import { Chat, Message } from "./types";
const app = express();

const server = app.listen(5000, () => console.log("Server started"));

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket: any) => {
  socket.on("createChat", (data: Chat) => {
    socket.broadcast.emit("createChat", data);
  });
  socket.on("joinRoom", (room: string) => {
    socket.join(room);
  });
  socket.on("createMessage", (data: Message) => {
    io.to(data.room).emit("sendMessage", data);
  });
});
