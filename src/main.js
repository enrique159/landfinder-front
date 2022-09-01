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

axios.defaults.baseURL = 'https://landfinder-back.onrender.com/api';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
