<template>
  <div>
    <mt-field 
      type="text" 
      label="用户名" 
      placeholder="请输入用户名" 
      state="success"
      disableClear
      v-model="username">
    </mt-field>   

    <mt-field 
      type="password" 
      label="密码" 
      placeholder="请输入密码" 
      state="warning"
      :attr="{maxlength:'20',autocomplete:'off'}"
      v-model="password">
    </mt-field>    

    <mt-field 
      type="password" 
      label="确认密码" 
      placeholder="请再次输入密码" 
      state="error"
      v-model="password2">
    </mt-field>   
    <mt-button type="primary" size="large" @click="handle">免费注册</mt-button>
  </div>
</template>
<script>
export default {
  data(){
      return {
        //用户名的初始值
        username:'',
        //密码的初始值
        password:'',
        //确认密码的初始值
        password2:''
      }
  },
  methods:{
    //单击按钮时完成用户注册的信息的校验
    handle(){
      // 1.校验用户名是否合法,规则为: 任意的字母、数字及下划线的组合，长度为6~12位之间
      let usernameRegExp = /^[a-zA-Z0-9_]{6,12}$/;
      if(usernameRegExp.test(this.username)){
          //return true;
      } else {
          this.$toast({
              message:"用户名错误",
              position:"middle",
              duration:5000
          });
          return false;
      }      
      // 2.在用户名法的前提下，再校验密码是否合法,规则为:字母、数字及下划线的组合，长度为8~20位
      let passwordRegExp = /^[a-zA-Z0-9_]{8,20}$/;
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
      // 4.如果都正确了，则将相关的信息提交到服务器
      //...缺少提交代码...
      if(this.username == 'admin888'){
        //提示:用户名已经被占用
        this.$messagebox("注册提示","用户名已经被占用");
      }
    }
  }
}
</script>







