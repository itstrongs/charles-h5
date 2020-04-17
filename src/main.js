import Vue from 'vue'
import App from './App.vue'
import http from "./config/axios";
import router from "./router/index";
import store from "./store/index";

Vue.prototype.$http = Vue.$http = http;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
