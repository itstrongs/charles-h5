import Vue from 'vue'
import App from './App.vue'
import http from "./config/axios";
import router from "./config/router";
import store from "./config/store";

Vue.prototype.$http = Vue.$http = http;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
