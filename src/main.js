import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase';

Vue.config.productionTip = false;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'your-apiKey',
  authDomain: 'your-authDomain',
  databaseURL: 'your-databaseURL',
  projectId: 'your-projectId',
  storageBucket: 'your-storageBucket',
  messagingSenderId: 'your-messagingSenderId',
  appId: 'your-appId'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
