<template>
  <div class="header">
    <button v-if="loggedIn" @click="logout()">Logout</button>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "Headerbar",
  methods: {
    logout: function () {
      store.dispatch("logout");
      this.$router.push("Login");
    },
  },
  computed: {
    loggedIn: function () {
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
