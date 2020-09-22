import Vue from 'vue'
import VueRouter from 'vue-router'

// axios mockjs 请求 获取 挂载
import Home from '../views/Home.vue'

// 文件上传 配合 upload 后台使用
import Upload from '../components/Upload/Upload'

// axios get\post请求、封装 例子组
import axiosTab from '../components/AllAxios/axiosTab'
import axiosGet from '../components/AllAxios/axiosGet'
import axiosPost from '../components/AllAxios/axiosPost'
import axiosAllSpread from '../components/AllAxios/axiosAllSpread'
import axiosInstance from '../components/AllAxios/axiosInstance'
import axiosInterceports from '../components/AllAxios/axiosInterceptors'

// 提交数据 给 vuex
import User from '../views/User.vue'
// 从 vuex 中 获取数据 
import About from '../views/About.vue'

// 路由 传参 导航 例子组
import RouterA from '../components/AllRouters/RouterA'
import RouterB from '../components/AllRouters/RouterB'
import DataDetails from '../views/DataDetails'

// 组件通信
import ParentToChild from '../components/AtoB/ParentToChild'
import Brother from '../components/AtoB/Brother'

// better-scroll例子
import BScroll from '../views/BScroll'

//
import LoadMore from '../views/LoadMore'

// vuex例子
import VxDemo from '../components/VxDemo'
import CartList from '../components/ShoppingCart/CartList'

// 前端缓存
import SetStorage from '../components/Storage/SetStorage'
import GetStorage from '../components/Storage/GetStorage'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/upload',
    name: 'Upload',
    component:Upload
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/loadmore',
    name: 'LoadMore',
    component: LoadMore
  },
  // 路由
  {
    path:'/routera/:name',
    // path:'/routera',
    name:'Routera',
    component:RouterA
  },
  {
    path:'/routerb',
    name:'Routerb',
    component:RouterB
  },
  {
    path:'/dataDetails',
    name:'dataDetails',
    component: DataDetails
  },
  // 组件通信
  {
    path:'/parenttochild',
    name:'parenttochild',
    component: ParentToChild
  },
  {
    path:'/brother',
    name:'brother',
    component: Brother
  },
  {
    path:'/bscroll',
    name:'bscroll',
    component: BScroll
  },
  // vuex
  {
    path:'/vxdemo',
    name:'Vxdemo',
    component: VxDemo
  },
  {
    path:'/setstorage',
    name:'setstorage',
    component: SetStorage
  },
  {
    path:'/getstorage',
    name:'getstorage',
    component: GetStorage
  },
  {
    path:'/cartlist',
    name:'cartlist',
    component: CartList
  },
  // axios
	{
		path:'/axiosall',
		name: 'axiostab',
		component: axiosTab,
		children:[
			{path:'get', name:'axiosGet',component:axiosGet},
			{path:'post', name:'axiosPost',component:axiosPost},
			{path:'allspread', name:'axiosAllSpread',component:axiosAllSpread},
			{path:'instance', name:'axiosInstance',component:axiosInstance},
			{path:'interceptors',name:'axiosInterceports',component:axiosInterceports}
		]
  },
  // 轮播图
	{
		path: '/carouse',
		name: 'Carouse',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Carouse.vue')
	}
]

const router = new VueRouter({
  routes,
  mode:'history'  // history 模式
  
})


export default router
