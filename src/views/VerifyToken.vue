<template>
  <h2>Verify Location page</h2>
  <p>Please enter your token below.</p>
  <main id="main-holder">
    <h1 id="login-header">Verify</h1>
    <form @submit.prevent="verify" id="login-form">
      <input
        v-model="token"
        type="text"
        class="verify-form-field"
        placeholder="Token"
      />
      <input type="submit" value="Verify" id="verify-form-submit" />
    </form>
    <div class="error" v-if="error">{{ error }}</div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "VerifyToken",
  data() {
    return {
      token: "",
      error: "",
    };
  },
  methods: {
    verify: async function () {
      let url = process.env.VUE_APP_SERVERURL;
      try {
        console.log(url + "verifylocation?token=" + this.token);
        await axios.get(url + "verifylocation?token=" + this.token);
        this.$router.push("Login");
      } catch (error) {
        this.error = "Error in verifying";
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
#verify-form {
  margin: 2em;
  align-self: flex-start;
  display: grid;
  justify-items: center;
  align-items: center;
}

.verify-form-field::placeholder {
  color: #a3a3a3;
}

.verify-form-field {
  border: 0.5px solid #a3a3a3;
  margin-bottom: 10px;
  border-radius: 2px;
  outline: none;
  padding: 0px 0px 5px 5px;
}

#verify-form-submit {
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