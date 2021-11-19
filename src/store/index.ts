import { createStore } from "vuex";
import { Chat } from "../types";

export default createStore({
  state: {
    chats: [] as Chat[]
  },
  mutations: {
    createChat(state, payload: Chat) {
      state.chats.push(payload)
    }
  },
  getters: {
    chats: (state) => state.chats,
    chatsCount: (state) => state.chats.length
  }
});
