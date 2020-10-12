<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="学前端,到学问">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="/register" slot="right" class="shortcut">注册</router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 用户登录表单区开始 -->
    <div>
      <mt-field
        type="text"
        label="用户名"
        placeholder="请输入登录名"
        :attr="{maxlength:15}"
        v-model="username"
        :state="usernameState"
        @blur.native.capture="checkUsername">
      </mt-field>
      <mt-field
        type="password"
        label="密码"
        placeholder="请输入登录密码"
        :attr="{maxlength:20,autocomplete:'off'}"
        v-model="password"
        :state="passwordState"
        @blur.native.capture="checkPassword">
      </mt-field>
      <mt-button type="primary" size="large" @click="handle">快速登录</mt-button>
    </div>
    <!-- 用户登录表单区结束 -->
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
    checkUsername(){
      let usernameRegExp = /^[a-zA-Z0-9_]{6,12}$/;
      if(usernameRegExp.test(this.username)){
        this.usernameState = 'success';
        return true;
      } else {
        this.usernameState = 'error';
        this.$toast({
          message:"用户名错误",
          position:"middle",
          duration:5000
        });
        return false;
      }  
    },
    //检测密码
    checkPassword(){
      let passwordRegExp = /^[a-zA-Z0-9_]{8,20}$/;
      if(passwordRegExp.test(this.password)){
        this.passwordState = 'success';
        return true;
      }  else {
        this.passwordState = 'error';
        this.$toast({
            message:"密码错误",
            position:"middle",
            duration:3000
        });
        return false;
      }
    },
    handle(){
      if(this.usernameState == "success" && this.passwordState == "success"){
        let obj = {
          username:this.username,
          password:this.password
        }
        //分发A
        this.$store.dispatch('login',obj)
        // this.axios.post('/login',this.qs.stringify(obj)).then(res=>{
        //   if(res.data == 1){
        //     //提交Mutaions
        //     localStorage.setItem('isLogined','1');
        //     this.$router.push('/')
        //   }else{
        //     this.$messagebox("登录提示","登录成功")
        //   }
        // })
        
      }
    }
  }
}
</script>
<style>
/* div{color: aqua;} */
</style>
© 2020 GitHub, Inc.