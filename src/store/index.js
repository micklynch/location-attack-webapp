import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

const APIURL = process.env.VUE_APP_SERVERURL;

export default createStore({
  state: {
    loggedIn: false,
    user: null,
  },
  mutations: {
    setLoggedIn: function(state, user) {
      state.loggedIn = true;
      state.user = user.data;
    },
    setLoggedOut: function(state) {
      state.loggedIn = false;
      state.user = null;
    },
  },
  actions: {
    async loginUser(context, credentials) {
      var url = APIURL + "login";
      try {
        let response = await axios.post(url, credentials);
        context.commit("setLoggedIn", response);
      } catch (error) {
        console.log(error);
        throw error;
      }
      return;
    },
    logout(context) {
      context.commit("setLoggedOut");
    },
  },
  modules: {},
  getters: {
    isLoggedIn: (state) => state.loggedIn,
    getUser: (state) => state.user,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
