import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyHeader from "./components/myHeader"

//引入全局组件MyHeader--相当于创建了一个小的new Vue 快递员
Vue.component("my-header",MyHeader)//设置为全局组件

import axios from 'axios'
//要在new Vue之前配置
//配置基础路径(任何组件中都可以用this.axios访问到原型对象中的axios)
axios.defaults.baseURL="http://xzserver.applinzi.com"
Vue.prototype.axios=axios;//将axios添加到Vue的原型对象中

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
