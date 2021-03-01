<template>
  <div id="app">
    <task-list />
  </div>
</template>

<script>
import TaskList from "./components/TaskList.vue";
import store from "./store";

export default {
  name: "App",
  store,
  components: {
    TaskList,
  },
};
</script>

<style>
@import "./index.css";
</style>
