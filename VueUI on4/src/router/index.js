import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Me from '../views/Me.vue';


//测试案例开始
import Header from '../components/Mint/Header.vue';
import Button from  '../components/Mint/Button.vue';
import Field from  '../components/Mint/Field.vue';
import Navbar from '../components/Mint/Navbar.vue';
import Cell from '../components/Mint/Cell.vue';

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
    path:'/navbar',
    component:Navbar
  },
  {
    path:'/cell',
    component:Cell
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path:'/me',
    component:Me
  },  
  {
    path:'/register',
    component:Register
  },
  {
    path:'/login',
    component:Login
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
