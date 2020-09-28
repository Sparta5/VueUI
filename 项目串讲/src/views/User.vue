<template>
  <div>
    <h4>this is userPage</h4>
    uname:<input type="text" v-model="userInfo.uname"><br>
    upwd:<input type="password" v-model="userInfo.upwd"><br>
    <button @click="setUser" @keyup.13="setUser">click me</button>
  </div>
</template>

<script>
// 使用xz 后台，使用 封装的 axios 实例
import { axiosPost, axiosGet } from '../utils/request'
import { mapMutations } from 'vuex' // 引入辅助函数
export default {
  data(){
    return {
      userInfo:{
        uname:'',
        upwd:'',
        uid:''
      },
      cartlist:[]
    }
  },
  methods:{
    ...mapMutations(['_setUser']),
    setUser(){
      axiosPost({
        url:'/user/login',
        data:this.userInfo
      }).then(res=>{
        if(res.data.code == 200){
          // console.log(this.userInfo)
          // this.$store.commit('_setUser',res.data.msg) // 通过commit 方法 提交 给 vuex 
          this._setUser(res.data.msg) // mapMutations 映射 保存用户信息
          this.$router.push({path:'/cartlist'})
        }else{
          alert('用户名或密码错误')
        }
      })
    }
  }
}
</script>