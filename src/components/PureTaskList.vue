<template>
  <div class="list-items">
    <template v-if="loading">
      <div v-for="n in 6" :key="n" class="loading-item">
        <span class="glow-checkbox" />
        <span class="glow-text"
          ><span>Loading</span> <span>Cool</span> <span>State</span></span
        >
      </div>
    </template>
    <template v-else-if="isEmpty">
      <div class="wrapper-message">
        <span class="icon-check" />
        <div class="title-message">We ain't found nuffin!</div>
        <div class="subtitle-message">you can relax</div>
      </div></template
    >
    <template v-else>
      <task
        v-for="task in tasksInOrder"
        :key="task.id"
        :task="task"
        v-on="$listeners"
      />
    </template>
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  name: "PureTaskList",
  components: { Task },
  props: {
    tasks: { type: Array, required: true, default: () => [] },
    loading: { type: Boolean, default: false },
  },
  computed: {
    tasksInOrder() {
      return [
        ...this.tasks.filter((t) => t.state === "TASK_PINNED"),
        ...this.tasks.filter(
          (t) => t.state !== "TASK_PINNED" && t.state !== "TASK_ARCHIVED"
        ),
        ...this.tasks.filter((t) => t.state === "TASK_ARCHIVED"),
      ];
    },
    isEmpty() {
      return this.tasks.length === 0;
    },
  },
};
</script>

<style>
</style>