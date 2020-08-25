<template>
  <div>
        <mt-field type="text" 
        label="用户名" 
        placeholder="请输入您的账号"
        state="succes"
        disableClear
        v-model="username">
        </mt-field>
        <mt-field type="password"
        label="密码"
        placeholder="请输入密码"
        state="warning"
        :attr="{maxlength:'20',autocomplet:'off'}"
        disableClear
        v-model="password">
        </mt-field>
        <mt-button type="primary" size="large" @click="submit">登录</mt-button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                username:'',
                password:''
            }
        },
    methods:{
      submit() {
          let usernameRegExp=/^[a-zA-Z0-9_]$/;
          if(this.username=="123456dd"){

          }else{
              this.$toast({
                  message:"用户名或者密码错误",
                  position:"middle",
                   duration:3000
              });
              return false;
          }
          if(this.password=="123456789"){

          }else{
              this.$toast({
                  message:"用户名或者密码错误",
                  position:"middle",
                  duration:3000
              })
            return false;
          }
          if(trun){
              this.$toast({
                  message:"登录成功"
              })
          }
      }
    }
    }
</script>