<template>
  <div>
    <h1>Chats: {{chatsCount}}</h1>
    <div class="list-group">
      <router-link
        v-for="chat in chats"
        :key="chat._id"
        tag="a"
        :to="{name: 'chat', params: {id: chat._id}}"
        class="list-group-item list-group-item-action"
        aria-current="true"
      >
        {{chat.nameChat}}
      </router-link>
    </div>
  </div>
</template>
<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const chats = computed(() => store.getters.chats);
    const chatsCount = computed(() => store.getters.chatsCount);
    onMounted(() => store.dispatch("fetchChats"));
    return {
      chats,
      chatsCount,
    };
  },
};
</script>
