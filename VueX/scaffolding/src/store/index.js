import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //标识用户是否已经登录
    isLogined:localStorage.getItem('isLogined') ? localStorage.getItem('isLogined') : 0
  },
  mutations: {
    logined(state){
      state.isLogined = 1;
    }
  },
  actions: {
  },
  modules: {
  }
})
