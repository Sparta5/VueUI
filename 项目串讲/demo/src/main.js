// 例子、配合 xz 后台、mockjs 使用
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 使用字体图标库
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'


// 全局 引入 axios 使用方法 ：
  // import Axios from 'axios'
  // 将 axios 放到 原型链上 供全局使用
  // Vue.prototype.axios = Axios
  // 全局 配置 axios 默认地址
  // axios.defaults.baseURL = 'http://localhost:3000'
  // 组件中使用写法如下：
  // this.axios.get('/user/login').then(res=>{res.data})

// 使用mockjs
import './mock.js'

// axios 封装写法 见 utils 下 request.js

// 引入 VueAwesomeswiper :轮播图
import VueAwesomeswiper from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css' // 此处未进行全组组件样式加载
Vue.use(VueAwesomeswiper)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
