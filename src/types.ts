import { ObjectId } from "mongoose";

export type Chat = {
  id: _id
  nameChat: string;
  messages: Array<Message>;
};
export type Message = {
  id: string;
  text: string;
  user: string;
  room: string;
};
export type _id = {
  _id: ObjectId
};
