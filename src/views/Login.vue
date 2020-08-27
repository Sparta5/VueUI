<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="学前端，到学问">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <mt-field
        type="text"
        label="用户名"
        placeholder="请输入您的账号"
        :state="usernameState"
        disableClear
        v-model="username"
        @blur.native.capture="checkUsername"
      ></mt-field>
      <mt-field
        type="password"
        label="密码"
        placeholder="请输入密码"
        :state="passwordState"
        :attr="{maxlength:'20',autocomplet:'off'}"
        v-model="password"
        @blur.native.capture="checkPassword"
      ></mt-field>
      <mt-button type="primary" size="large" @click="submit">登录</mt-button>
    </div>
    <!-- 用户登录表单区域结束 -->
  </div>
</template>
<script>
    export default {
        data(){
            return {
                username:'',
                password:'',
                usernameState:'',
                passwordState:''
            }
        },
    methods:{
        // 检测用户名
      checkUsername() {
          let usernameRegExp=/^[a-zA-Z0-9_]{3,8}$/;
          if(usernameRegExp.test(this.username)){
            this.usernameState='success';
            return true;
          }else{
              // console.log(this.username)
              // console.log(usernameRegExp.test(this.username))
              this.usernameState='error'
              this.$toast({
                  message:"用户名错误",
                  position:"middle",
                   duration:3000
              });
              return false;
          }
         },
         // 检测密码
     checkPassword(){
        let passwordRegExp=/^[a-zA-Z0-9_]{8,20}$/;
        if(passwordRegExp.test(this.password)){
            this.passwordState='success';
            return true;
          }else{
            this.passwordState='error';
            this.$toast({
               message:"密码错误",
               position:"middle",
               duration:3000
           });
            return false;
          }
          //单机按钮时完成用户登录的信息的效验
          
      },
      submit(){
            if(this.checkUsername() && this.checkPassword()){
              if(this.username!="admin888" && this.password != "admin888"){
                  this.$messagebox("登录提示","用户名登录失败");
              }else{
                this.$messagebox("登录提示","登录成功")
              }
          }
        }
      }
    }
</script>