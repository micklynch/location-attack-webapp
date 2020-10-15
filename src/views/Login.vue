<template>
  <h2>Login Page</h2>
  <p>Please enter your login credentials below.</p>
  <main id="main-holder">
    <h1 id="login-header">Login</h1>
    <form @submit.prevent="login" id="login-form">
      <input
        v-model="username"
        type="text"
        class="login-form-field"
        placeholder="Username"
      />
      <input
        v-model="password"
        type="password"
        class="login-form-field"
        placeholder="Password"
      />
      <input type="submit" value="Login" id="login-form-submit" />
    </form>
    <div class="error" v-if="error">{{ error }}</div>
  </main>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login: async function () {
      try {
        await this.$store.dispatch("loginUser", {
          username: this.username,
          password: this.password,
        });
        window.analytics.identify("234e234", {
          name: this.username,
          email: this.username,
        });
        this.$router.push("About");
      } catch (error) {
        this.error = error;
      }
    },
  },
};
</script>

<style scoped>
.p {
  margin: 6em;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.error {
  color: crimson;
  padding: 1em;
}

#main-holder {
  margin: auto;
  width: 50%;
  height: 70%;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: white;
  border-radius: 3px;
  box-shadow: 3px 3px 6px 2px rgb(128, 128, 128);
}
#login-form {
  margin: 2em;
  align-self: flex-start;
  display: grid;
  justify-items: center;
  align-items: center;
}

.login-form-field::placeholder {
  color: #a3a3a3;
}

.login-form-field {
  border: 0.5px solid #a3a3a3;
  margin-bottom: 10px;
  border-radius: 2px;
  outline: none;
  padding: 0px 0px 5px 5px;
}

#login-form-submit {
  width: 50%;
  padding: 7px;
  border: none;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  background-color: #a3a3a3;
  cursor: pointer;
  outline: none;
}
</style>
