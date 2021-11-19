<template>
  <div>
    <h1>Chats</h1>
    <div class="list-group">
      <router-link
        tag="a"
        to="/chat"
        class="list-group-item list-group-item-action"
        aria-current="true"
      >
        The current link item
      </router-link>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const chats = computed(() => store.getters.chats);
    const chatsCount = computed(() => store.getters.chatsCount);
    return {
      getters,
    };
  },
};
</script>
