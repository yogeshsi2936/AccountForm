import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

import './assets/main.css'

new Vue({
  render: (h) => h(App)
}).$mount('#app')
