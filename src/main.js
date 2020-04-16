import Vue from 'vue'
import App from './App.vue'
import http from "./axios/axios";

Vue.prototype.$http = Vue.$http = http; // 根据实际情况自行修改

Vue.config.productionTip = false
// Vue.prototype.$http = axios;//将axios挂载到Vue实例中的$ajax上面,在项目中的任何位置通过this.$http使用

// const init=function(){
//   axios.defaults.headers.common['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxIn0.Y4nHCEunF6YCdPxRCftfhnB7uetWwaih9ZAiQumJ4SQ';
// }
// export default {init}

new Vue({
  render: h => h(App),
}).$mount('#app')
