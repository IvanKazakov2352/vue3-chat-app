import express from "express";
import mongoose from "mongoose"
import { Chat, Message, _id } from "../types";
const Chats = require("./schema")

const app = express();

const server = app.listen(5000, () => console.log("Server started"));
mongoose.connect("mongodb+srv://IvanKazakov:53SoUAj1yIF4IRk8@tire-rus.iamog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(() => console.log("Database connected"))
.catch((err) => console.log(err))

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket: any) => {
  socket.on("createChat", async (data: Chat) => {
    const chat = await new Chats(data)
    chat.save()
  });
  socket.on("getChats", async () => {
    const chats = await Chats.find()
    socket.emit("fetchChats", chats)
  })
  socket.on("getChat", async (data: _id) => {
    const chat = await Chats.findById(data)
    socket.emit("fetchChat", chat)
  })
  socket.on("joinRoom", (room: string) => {
    socket.join(room);
    io.to(room).emit("userJoined", "Пользователь присоеденился")
  });
  socket.on("createMessage", (data: Message) => {
    io.to(data.room).emit("sendMessage", data);
  });
});
