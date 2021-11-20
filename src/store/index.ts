import { createStore } from "vuex";
import { Chat } from "../types";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");
export default createStore({
  state: {
    chats: [] as Chat[],
    chat: {} as Chat,
  },
  mutations: {
    setChats(state, data) {
      state.chats = data;
    },
    setChat(state, data) {
      state.chat = data;
    },
    setMessages(state, data) {
      state.chat.messages.push(data)
    }
  },
  actions: {
    fetchChats({ commit }) {
      socket.emit("getChats");
      socket.on("fetchChats", (data) => {
        commit("setChats", data);
      });
    },
    joinRoom({ commit }, payload) {
      socket.emit("joinRoom", payload);
    },
    userJoined() {
      socket.on("userJoined", (data) => {
        console.log(data);
      });
    },
    fetchChat({ commit }, payload) {
      socket.emit("getChat", payload);
      socket.on("fetchChat", (data) => {
        commit("setChat", data);
      });
    },
    createChat({ dispatch }, payload) {
      socket.emit("createChat", payload);
    },
    createMessage({commit}, payload) {
      socket.emit("createMessage", payload)
    },
    sendMessage({commit}) {
      socket.on("sendMessage", (data) => {
        commit("setMessages", data)
      })
    }
  },
  getters: {
    chats: (state) => state.chats,
    chat: (state) => state.chat,
    chatsCount: (state) => state.chats.length,
  },
});
