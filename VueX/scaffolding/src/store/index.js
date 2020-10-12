import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
import router from '../router';

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
    login(content,payload){
      //发送异步请求
      axios.post('/login',qs.stringify(payload)).then(res=>{
        if(res.data.code === 1) {
          //提交Mutations
          content.commit('logined');
          localStorage.setItem('isLogined','1')
          router.push('/');
        }else{
          
        }
      })
    }
  },
  modules: {
  }
})
