import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Header from '../components/MintUI/Header'//引入路由
import Button from '../components/MintUI/Button'
import Field from '../components/MintUI/Field'
import Navbar from '../components/MintUI/Navbar'
import Register from '../views/Register'
import Me from '../views/Me'
import Login from '../views/Login'
import Infinite from '../components/MintUI/Infinite'
import Article from '../views/Article'
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
    path:'/navbar',
    component:Navbar
  },
  {
    path:'/me',
    component:Me
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/infinite',
    component:Infinite
  },
  {
    path:'/article/:id',
    component:Article
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
  mode: 'history',//不带#号
  // mode: 'hash',//带有#号
  base: process.env.BASE_URL,
  routes
})

export default router
