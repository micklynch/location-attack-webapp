import { createStore } from "vuex";
import firebaseConfig from "../config/default";
import firebase from "firebase/app";
import createPersistedState from "vuex-persistedstate";

require("firebase/auth");

firebase.initializeApp(firebaseConfig);

export default createStore({
  state: {
    loggedIn: false,
  },
  mutations: {
    setLoggedIn: function(state) {
      state.loggedIn = true;
      console.log(state.loggedIn);
    },
    setLoggedOut: function(state) {
      state.loggedIn = false;
    },
  },
  actions: {
    async loginUser(context, credentials) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(
            credentials.username,
            credentials.password
          );
        context.commit("setLoggedIn");
        console.log(response.user.uid);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    logout(context) {
      context.commit("setLoggedOut");
    },
  },
  modules: {},
  getters: {
    isLoggedIn: (state) => state.loggedIn,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
