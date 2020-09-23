import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
//用import 就会打包到app.xxx.js
// import Details from '../views/Details.vue'//懒加载注释(不用)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  // {
  //   path:'/details/:lid',
  //   component:Details,
  //   props:true//同意接收地址栏参数(如果带lid必须写)
  // },
  { //这里是懒加载，暂时不要问，明天讲
    path: '/details/:lid',
    // name: 'details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
                            //打包是的分段名,details就会被打包到details.js
    component: () => import(/* webpackChunkName: "details" */ '../views/Details.vue')
    // props:true//同意接收地址栏参数(如果带lid必须写)
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
