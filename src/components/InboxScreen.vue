<template>
  <pure-inbox-screen :error="error" />
</template>

<script>
import { mapState } from "vuex";
import PureInboxScreen from "./PureInboxScreen.vue";
export default {
  components: { PureInboxScreen },
  name: "InboxScreen",
  computed: mapState(["error"]),
};
</script>

<style>
</style>