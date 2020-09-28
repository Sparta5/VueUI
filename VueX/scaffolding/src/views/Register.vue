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
<<<<<<< HEAD
        @blur.native.capture="checkUsername"
        :state="usernameState">
=======
<<<<<<<< HEAD:VueX/scaffolding/src/views/Register.vue
        @blur.native.capture="checkUsername"
        :state="usernameState">
========
        :state="usernameState"
        @blur.native.capture="checkUsername">
>>>>>>>> 247330c98a78d9f913f608d3d1bef3098c008cff:VueX/scaffolding/src/components/MintUI/Register.vue
>>>>>>> 247330c98a78d9f913f608d3d1bef3098c008cff
      </mt-field>
      <mt-field
        type="password"
        label="用户密码"
        placeholder="请输入密码"
        :attr="{maxlength:20,autocomplete:'off'}"
        v-model="password"
<<<<<<< HEAD
        @blur.native.capture="checkPassword"
        :state="passwordState">
=======
<<<<<<<< HEAD:VueX/scaffolding/src/views/Register.vue
        @blur.native.capture="checkPassword"
        :state="passwordState">
========
        :state="passwordState"
        @blur.native.capture="checkPassword">
>>>>>>>> 247330c98a78d9f913f608d3d1bef3098c008cff:VueX/scaffolding/src/components/MintUI/Register.vue
>>>>>>> 247330c98a78d9f913f608d3d1bef3098c008cff
      </mt-field>
      <mt-field
        type="password"
        label="确认密码"
        placeholder="请在次输入密码"
        :attr="{maxlength:20,autocomplete:'off'}"
        v-model="conpassword"
<<<<<<< HEAD
        @blur.native.capture="checkConpassword"
        :state="conpasswordState">
=======
<<<<<<<< HEAD:VueX/scaffolding/src/views/Register.vue
        @blur.native.capture="checkConpassword"
        :state="conpasswordState">
========
        :state="conpasswordState"
        @blur.native.capture="checkConpassword">
>>>>>>>> 247330c98a78d9f913f608d3d1bef3098c008cff:VueX/scaffolding/src/components/MintUI/Register.vue
>>>>>>> 247330c98a78d9f913f608d3d1bef3098c008cff
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
<<<<<<< HEAD
=======
<<<<<<<< HEAD:VueX/scaffolding/src/views/Register.vue
>>>>>>> 247330c98a78d9f913f608d3d1bef3098c008cff
      // 校验用户名
      checkUsername(){
        //1.校验用户名
        let usernameRegExp = /^[0-9a-zA-Z_\.]{6,20}$/
        if(usernameRegExp.test(this.username)){
          this.usernameState = 'success'
<<<<<<< HEAD
        }else{
          this.usernameState ='error',
          this.$toast({
            message:"用户名必填项",
=======
========
      checkUsername(){
        let usernameRegExp = /^[0-9a-zA-Z_\.]{6,20}/
        if(usernameRegExp.test(this.username)){
          this.usernameState = 'success';
          return 
        }else{
          this.usernameState = 'error';
          this.$toast({
            message:"用户名错误",
            position:"middle",
            duration:'500'
          });
        }
      },
      checkPassword(){
        let passwordRegExp = /^[a-zA-Z0-9_]{8,20}$/;
        if(passwordRegExp.test(this.password)){
          this.passwordState = 'success';
        }else{
          this.passwordState = 'error';
          this.$toast({
            message:'密码格式不正确',
            position:'moddle',
            duration:'5000'
          });
        }
      },
      checkConpassword(){
        if(this.conpassword == this.password){
          this.conpasswordState = 'success';
        }else{
          this.conpasswordState = 'error'
          this.$toast({
            message:'两次输入密码不一致',
            position:'moddle',
            duration:'3000'
          });
        }
      },
      handle(){
        if(this.usernameState=='success' && this.passwordState=='success' && this.conpasswordState=='success'){
          alert(`注册成功`)
>>>>>>>> 247330c98a78d9f913f608d3d1bef3098c008cff:VueX/scaffolding/src/components/MintUI/Register.vue
        }else{
          this.usernameState ='error',
          this.$toast({
            message:"用户名已被占用",
>>>>>>> 247330c98a78d9f913f608d3d1bef3098c008cff
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
<<<<<<< HEAD
        if(this.password!=this.conpassword) {
=======
        if(this.password==this.conpassword) {
          return true;
          
        }else{
>>>>>>> 247330c98a78d9f913f608d3d1bef3098c008cff
          this.$toast({
            message:"两次密码不一致",
            position:"top",
            duration:"2000"
          })
          return false;
<<<<<<< HEAD
        }else{
          return true;
=======
>>>>>>> 247330c98a78d9f913f608d3d1bef3098c008cff
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