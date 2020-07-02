import Vue from 'vue'
import App from './App.vue'
import http from "./config/axios";
import router from "./config/router";
import store from "./config/store";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.prototype.$http = Vue.$http = http;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
}).$mount('#app');
