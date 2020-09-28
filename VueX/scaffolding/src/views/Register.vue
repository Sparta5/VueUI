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
        v-model="username"
        @blur.native.capture="checkUsername"
        :state="usernameState">
      </mt-field>
      <mt-field
        type="password"
        label="用户密码"
        placeholder="请输入密码"
        :attr="{maxlength:20,autocomplete:'off'}"
        v-model="password"
        @blur.native.capture="checkPassword"
        :state="passwordState">
      </mt-field>
      <mt-field
        type="password"
        label="确认密码"
        placeholder="请在次输入密码"
        :attr="{maxlength:20,autocomplete:'off'}"
        v-model="conpassword"
        @blur.native.capture="checkConpassword"
        :state="conpasswordState">
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
      conpassword:'',
      usernameState:'',
      passwordState:'',
      conpasswordState:''
     }
  },
    methods:{
      // 校验用户名
      checkUsername(){
        //1.校验用户名
        let usernameRegExp = /^[0-9a-zA-Z_\.]{6,20}$/
        if(usernameRegExp.test(this.username)){
          this.usernameState = 'success'
        }else{
          this.usernameState ='error',
          this.$toast({
            message:"用户名必填项",
            position:"top",//middle
            duration:"2000"
          })
        }
      },
      // 校验密码
      checkPassword(){
        let passwordRegExp = /^[0-9A-Za-z]{8,20}$/;
        if(passwordRegExp.test(this.password)){
          return true;
        }else{
          this.$toast({
            message:"密码填写错误",
            position:"top",
            duration:"2000"
          })
          return false;
        }
      },
      checkConpassword(){
        if(this.password==this.conpassword) {
          return true;
          
        }else{
          this.$toast({
            message:"两次密码不一致",
            position:"top",
            duration:"2000"
          })
          return false;
        }
      },
      handle(){
        if(this.checkUsername() && this.checkPassword() && this.checkConpassword()){
          console.log(`提交`)
          }
        }
    }
  }
</script>
<style scoped>
  .shortcut{
    text-decoration: none;
  }

</style>