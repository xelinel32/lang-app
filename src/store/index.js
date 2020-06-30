import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
  },
  state: {
    processing: false,
    error: null,
  },
  mutations: {
    SET_PROCESSING(state, payload) {
      state.processing = payload;
    },
    SET_ERROR(state, payload) {
      state.error = error;
    },
    CLEAN_ERROR(state) {
      state.error = null;
    },
  },
  actions: {},
  getters: {
    GET_PROCESSING(state) {
      state.processing;
    },
    GET_ERROR(state) {
      state.processing;
    },
  },
});
