import fb from 'firebase/app';
import 'firebase/auth';
export default {
  state: {},
  mutations: {},
  actions: {
    async LOGIN({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        throw error;
      }
    },
  },
  getters: {},
};
