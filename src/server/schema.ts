import mongoose from "mongoose"
const Schema = mongoose.Schema;

const chat = new Schema(
  {
    nameChat: {
      type: String,
    },
    messages: {
      type: Array,
    },
  },
  { collection: "chats" }
);
module.exports = mongoose.model("chat", chat);
