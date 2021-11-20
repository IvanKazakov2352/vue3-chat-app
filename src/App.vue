<template>
  <Navbar></Navbar>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  setup() {},
  components: {
    Navbar,
  },
});
</script>
