<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout: function() {
      this.$store.dispatch("logout");
      this.$router.push("Login");
    },
  },
};
</script>
