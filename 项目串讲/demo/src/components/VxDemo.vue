<template>
  <div class="vxdemo">
    <h1>This is an vxdemo page</h1>
    <div>
      <span>{{_getUser.uname}}</span><br> 
      <span>{{_getUser.upwd}}</span><br> 
    </div>
  </div>
</template>

<script>
import store from './../store'
import { mapState } from 'vuex'

export default {
  data(){
    return {
      
    }
  },
  computed:{  // 通过computed 属性 获取 , 得到返回
    _getUser(){
      return this.$store.state.userInfo // vuex 基础写法  state.xxx 的形式获取 state 中的数据
    }
  }
}
</script>
