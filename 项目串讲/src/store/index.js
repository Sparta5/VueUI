import Vue from 'vue'
import Vuex from 'vuex'
// 状态管理器
import cartList from './cartList'
import user from './user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: { }, // 数据的初始化状态  ...MapState MapMutations MapActions MapGetters
  mutations: { }, // 提交 --> 需要改变的数据  methods
  actions: { },  // 处理异步
	getters:{
  // 读取
    
	},
  modules: { // 加载抽离的模块
    cartList,
    user
  }
})
