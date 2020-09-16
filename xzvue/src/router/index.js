import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Details from '../views/Details'
Vue.use(VueRouter)
// 路由字典
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index//匹配地址栏和文件夹
  },
  { //这里是懒加载，暂时不要问，明天讲
    path:"/details/:lid",
    props:true,//有参数参数，必须加上props为true
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //异步加载要改两个地方
    component: () => import(/* webpackChunkName: "detalis" */ '../views/Details.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
