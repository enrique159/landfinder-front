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
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { init } from '@emailjs/browser';
import Vuelidate from 'vuelidate'
import VueSplide from '@splidejs/vue-splide';
init("JxIrk4_V8WSebe34h4G_2");

import '@splidejs/splide/dist/css/splide.min.css';

Vue.component('vue-phone-number-input', VuePhoneNumberInput);
Vue.use(Toast);
Vue.use(VueAxios, axios)
Vue.use(VueMask);
Vue.use(Vuelidate)
Vue.use(VueSplide);
Vue.config.productionTip = false

// add process env variable to axios
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL || 'https://land-finder-back-tnd34.ondigitalocean.app/api';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
