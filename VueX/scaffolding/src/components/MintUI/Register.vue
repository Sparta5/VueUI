<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="学前端到学问">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link class="shortcut" to="/login" slot="right">
        登录
      </router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 表单区域开始 -->
    <div>
      <mt-field
        type="text"
        label="用户名"
        placeholder="请输入用户名"
        :attr="{maxlength:20}"
        v-model="username">
      </mt-field>
      <mt-field
        type="password"
        label="用户密码"
        placeholder="请输入密码"
        :attr="{maxlength:20,autocomplete:'off'}"
        v-model="password">
      </mt-field>
      <mt-field
        type="password"
        label="确认密码"
        placeholder="请在次输入密码"
        :attr="{maxlength:20,autocomplete:'off'}"
        v-model="conpassword">
      </mt-field>
      <mt-button type="primary" size="large" @click="handle">登录</mt-button>
    </div>
    <!-- 表单区域结束 -->
  </div>
</template>
<script>
export default {
  data(){
    return {
      username:'',
      password:'',
      conpassword:''
     }
  },
    methods:{
      handle(){
        //1.校验用户名
        let usernameRegExp = /^[0-9a-zA-Z_\.]{6,20}$/
        if(usernameRegExp.test(this.username)){
          console.log(`用户名ok`)
        }else{
          // console.log(`用户名非法`)
          // this.$toast('用户名为必填项');
          this.$toast({
            message:"用户名必填项",
            position:"top",//middle
            duration:"2000"
          })
        }
        //2.校验密码
        //3.校验两次密码
       }
     }
  }
</script>
<style scoped>
  .shortcut{
    text-decoration: none;
  }

</style>