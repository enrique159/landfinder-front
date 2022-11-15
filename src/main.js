import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMask from 'v-mask'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import{ init } from '@emailjs/browser';
init("3LlkNIJmneIIiYzH7");

Vue.component('vue-phone-number-input', VuePhoneNumberInput);
Vue.use(VueAxios, axios)
Vue.use(VueMask);
Vue.config.productionTip = false

// add process env variable
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL || 'https://land-finder-back-tnd34.ondigitalocean.app/api';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
