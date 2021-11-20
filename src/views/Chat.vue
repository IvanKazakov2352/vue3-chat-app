<template>
  <div>
    <h1>Chat {{ chat.nameChat }}</h1>
    <div
      class="alert alert-primary"
      role="alert"
      v-for="message in chat.messages"
      :key="message._id"
    >
      <h5>{{ message.user }}</h5>
      {{ message.text }}
    </div>
  </div>
  <div class="mb-3 textarea">
    <input
      type="email"
      class="form-control mb-3"
      id="exampleFormControlInput1"
      placeholder="Your name"
      v-model="name"
    />
    <textarea
      class="form-control"
      id="exampleFormControlTextarea1"
      placeholder="SendMessage"
      v-model="text"
      v-on:keyup.enter="sendMessage"
    ></textarea>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { uuid } from "vue-uuid";
import { Message } from "../types";
export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();
    const chat = computed(() => store.getters.chat);
    const name = ref("");
    const text = ref("");
    const sendMessage = () => {
      const message: Message = {
        id: uuid.v4(),
        text: text.value,
        user: name.value,
        room: `${route.params.id}`,
      };
      store.dispatch("createMessage", message)
    };
    onMounted(() => {
      store.dispatch("fetchChat", route.params.id);
      store.dispatch("joinRoom", route.params.id);
      store.dispatch("userJoined")
      store.dispatch("sendMessage")
    });
    return {
      chat,
      name,
      text,
      sendMessage,
    };
  },
});
</script>
<style scoped>
.textarea {
  position: absolute;
  width: 70%;
  bottom: 0;
}
</style>