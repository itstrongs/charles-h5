import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';//引入文件

Vue.config.productionTip = false
Vue.prototype.$http = axios;//将axios挂载到Vue实例中的$ajax上面,在项目中的任何位置通过this.$http使用

new Vue({
  render: h => h(App),
}).$mount('#app')
