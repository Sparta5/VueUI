<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <h4>通过computed 获取</h4> 
      <span>{{_getUser.uname}}</span><br>
      <span>{{_getUser.upwd}}</span><br> 
    </div>
  </div>
</template>

<script>
// store 基础用法
import store from './../store'

export default {
  data(){
    return {
      
    }
  },
  computed:{  // 通过computed 属性 获取 , 得到store 中返回值
    _getUser(){
      console.log(this.$store.state.userInfo )
      return this.$store.state.userInfo 
    }
  }
}
</script>