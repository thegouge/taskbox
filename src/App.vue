<template>
  <div id="app">
    <inbox-screen />
  </div>
</template>

<script>
import InboxScreen from "./components/InboxScreen.vue";
import store from "./store";

export default {
  name: "App",
  store,
  components: {
    InboxScreen,
  },
};
</script>

<style>
@import "./index.css";
</style>
