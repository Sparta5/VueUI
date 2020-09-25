import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Header from '../components/MintUI/Header'//引入路由
import Button from '../components/MintUI/Button'
import Field from '../components/MintUI/Field'
import Register from '../components/MintUI/Register'

Vue.use(VueRouter)

const routes = [
  {
    path:'/header',
    component:Header
  },
  {
    path:'/button',
    component:Button
  },
  {
    path:'/field',
    component:Field
  },
  {
    path:'/register',
    component:Register
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',//不带#号
  mode: 'hash',//带有#号
  base: process.env.BASE_URL,
  routes
})

export default router
