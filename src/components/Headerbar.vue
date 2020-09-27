<template>
  <div class="header">
    <button v-if="loggedIn">Logout</button>
  </div>
</template>

<script>
export default {
  name: "Headerbar",
  computed: {
    loggedIn: function() {
      return this.$store.getters.isLoggedIn;
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
