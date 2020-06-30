import fb from 'firebase/app';
import 'firebase/auth';
export default {
  state: {
    user: {
      isAuth: false,
      uid: null,
    },
  },
  mutations: {},
  actions: {
    async SIGNUP({ commit }, { email, password }) {
      await fb
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {},
};
