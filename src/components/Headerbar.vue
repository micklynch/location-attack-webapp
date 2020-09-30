<template>
  <div class="header">
    <button v-if="loggedIn">Logout</button>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "Headerbar",
  computed: {
    loggedIn: function() {
      return store.getters.isLoggedIn;
    },
  },
};
</script>

<style scoped>
#header {
  width: 100%;
  align-content: right;
}
</style>
