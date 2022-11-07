import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import{ init } from '@emailjs/browser';
init("3LlkNIJmneIIiYzH7");

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

// add process env variable
axios.defaults.baseURL = process.env.VUE_APP_API_URL || 'https://land-finder-back-tnd34.ondigitalocean.app';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
