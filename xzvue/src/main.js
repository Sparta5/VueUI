import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyHeader from "./components/myHeader"//引入全局组件
Vue.component("my-Header",MyHeader);//把引入myHeader.vue组件对象(变成全局组件)
//结果:将来在当前脚手架中任何位置都可以用<my-header>标签引入组件
Vue.config.productionTip = false//开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
