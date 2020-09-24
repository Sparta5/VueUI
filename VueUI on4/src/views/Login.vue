<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="学前端,到学问">
      <router-link to="/" slot="left">
	      <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 用户登录表单区域开始 -->
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
      <mt-button type="primary" size="large" @click="handle">快速登录</mt-button>
    </div>
    <!-- 用户登录表单区域结束 -->
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
        password2:'',
        //用户名输入框的状态
        usernameState:'',
        //密码输入框的状态
        passwordState:''
        
      }
  },
  methods:{

    //检测用户名
    checkUsername(){
      //校验用户名是否合法,规则为: 任意的字母、数字及下划线的组合，长度为6~12位之间
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
    //单击按钮时完成用户登录的信息的校验
    handle(){
      if(this.checkUsername() && this.checkPassword()){
        //将相关的信息提交到服务器
        if(this.username != 'admin888' && this.password != 'admin888'){
          //提示:用户名已经被占用
          this.$messagebox("登录提示","用户名登录失败");
        }
      }
    }
  }
}
</script>