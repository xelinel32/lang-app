import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import fb from 'firebase/app';
import 'firebase/auth'

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyANBvw9WndqD3p_wXybj0Sily85AsqSkRs',
  authDomain: 'lang-app-2cc42.firebaseapp.com',
  databaseURL: 'https://lang-app-2cc42.firebaseio.com',
  projectId: 'lang-app-2cc42',
  storageBucket: 'lang-app-2cc42.appspot.com',
  messagingSenderId: '251359115813',
  appId: '1:251359115813:web:b147ea7cf108fbaefa1dcc',
};

fb.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
