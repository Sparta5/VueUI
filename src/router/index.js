import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Header from '../components/Mint/Header.vue'
import Button from '../components/Mint/Button.vue'
import Index from '../views/Index.vue'
import Register from '../views/Register'
import Field from '../components/Mint/Field'
import Login from '../components/Mint/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/login',//'login'前少了一个斜杆
    component:Login
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
    path:'/header',
    component:Header  //不能加引号
  },
  {
    path:'/register',
    component:Register
  },
  {
    path: '/',
    name: 'Home',
    component:Index
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
  mode: 'history',//hash带#号
  base: process.env.BASE_URL,
  routes
})

export default router
