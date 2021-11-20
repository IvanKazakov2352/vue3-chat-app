<template>
  <div>
    <h1>CreateChat</h1>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Name Chat</label>
      <input
        v-model="nameChat"
        type="email"
        class="form-control"
        placeholder="Name Chat"
      />
    </div>
    <button @click="createChat" type="button" class="btn btn-primary">
      Create Chat
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Chat, Message } from "../types";

export default defineComponent({
  setup() {
    const nameChat = ref("");
    const store = useStore()
    const router = useRouter();
    const createChat = (): void => {
      const chat: Chat = {
        nameChat: nameChat.value,
        messages: [] as Message[],
      };
      store.dispatch("createChat", chat)
      router.push("/chats");
    };
    return {
      nameChat,
      createChat,
    };
  },
});
</script>
