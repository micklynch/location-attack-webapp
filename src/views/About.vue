<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      Hello <span v-if="user">{{ user }}</span>
    </p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import store from "@/store";
export default {
  methods: {
    logout: function () {
      this.$store.dispatch("logout");
      this.$router.push("Login");
    },
  },
  computed: {
    user: () => {
      return store.getters.getUser;
    },
  },
};
</script>
