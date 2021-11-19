<template>
  <div>
    <h1>CreateChat</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { Chat, Message } from "../types";
import { uuid } from "vue-uuid"

export default defineComponent({
  setup() {
    const nameChat = ref("");
    const store = useStore()
    const createChat = (): void => {
      const chat: Chat = {
        id: uuid.v4(),
        nameChat: nameChat.value,
        messages: [] as Message[]
      }
      store.commit("createChat", chat)
    }
    return {
      nameChat,
      createChat
    };
  },
});
</script>
