import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'; 
import FlagIcon from 'vue-flag-icon';
import axios from 'axios';
import store from "./store";
import i18n from '@/plugins/i18n';
import VueQRCodeComponent from 'vue-qrcode-component'
import Swal from 'sweetalert2'

Vue.prototype.$http = axios;
window.$ = window.jQuery = require("jquery");
Vue.config.productionTip = false
Vue.use(FlagIcon);
Vue.component('qr-code', VueQRCodeComponent);
new Vue({
  i18n,
  vuetify,
  Swal,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
