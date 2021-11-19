export type Chat = {
  id: string,
  nameChat: string;
  messages: Array<Message>;
}
export type Message = {
  id: string;
  text: string;
  user: string;
  room: string;
}
