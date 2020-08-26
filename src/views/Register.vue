<template>
<div>
<!-- 顶部导航开始 -->
  <mt-header title="学前端，到学问">
    <router-link to="/" slot="left">
    <mt-button icon="back" type="danger"></mt-button>
    </router-link>
  </mt-header>
  <!-- 顶部导航结束 -->
  <!-- 用户注册表单区域开始 -->
  <div>
      <mt-field type="text" label="用户名" placeholder="请输入用户名" 
        :state="usernameState" 
        disableClear 
        v-model="username"
        @blur.native.capture="checkUsername">
      </mt-field> 
      <mt-field type="password"  label="密码" placeholder="请输入密码" 
        :state="passwordState"
        :attr="{maxlength:'20',autocomplete:'off'}"
        v-model="password"
        @blur.native.capture="checkPassword">
      </mt-field>    
      <mt-field type="password" label="确认密码" placeholder="请再次输入密码" 
        :state="password2State"
        v-model="password2"
        @blur.native.capture="checkConpassword">
      </mt-field>   
      <mt-button type="primary" size="large" @click="handle">免费注册</mt-button>
    </div>
</div>
</template>
<script>
export default {
  data(){
    return {
    // 用户名的初始值
    username:'',
    password:'',
    password2:'',
    usernameState:'',
    passwordState:'',
    password2State:''
   }
  },
  methods:{
    checkUsername(){
      let usernameRegExp = /^[a-zA-Z0-9_]{6,12}$/; 
      if(usernameRegExp.test(this.username)){
        this.usernameState = 'success';
        return true;
      } else {
        this.usernameState='success'
        this.$toast({
          message:"用户名错误",
          position:"middle",
          duration:5000
        });
       return false
      }
      let passwordRefExp = /^[a-zA-Z0-9]{8,20}$/;
     if(passwordRegExp.test(this.password)){
        //return true;
      }  else {
          this.$toast({
              message:"密码错误",
              position:"middle",
              duration:3000
          });
          return false;
      }
      // 3.在密码合法的前提下，再校验两次密码是否一致
      if(this.password == this.password2){
        //return true;
      } else {
          this.$toast({
              message:"两次密码不一致",
              position:"middle",
              duration:3000
          });
          return false;
      }
        if(this.username == 'admin888'){
          this.$messagebox("注册提示","用户名已经被占用")
        }
    }
  }
}
</script>
