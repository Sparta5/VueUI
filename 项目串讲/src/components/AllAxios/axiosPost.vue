<template>
	<div>
		<h3>axios-posts</h3>
		用户名：<input type="text" v-model="uname"><br>
		密--码：<input type="password" v-model="upwd"><br>
		<button @click="login">login</button>
		<div>{{res}}</div>
	</div>
</template>
	
<script>
  	// 未使用axios 封装 方法、未使用全局！ 仅 此组件使用
	import axios from 'axios'

	// 引入 qs 模块进行 数据 格式调整  npm i qs -S
	import qs from 'qs'
	
	export default{
		data(){
			return{
				uname:'',
				upwd:'',
				res:''
			}
		},
		methods:{
			login(){
				// 数据格式 将对象转为 字符串形式
				let data = qs.stringify({uname:this.uname,upwd:this.upwd})
				axios.post(
					'http://localhost:3000/user/login',
					data,

					// 修改相应的消息头
					// {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
				).then(res=>{
					console.log('this is post-------- 用户登陆');
					console.log(res)
					this.res = res.data
					// this.$router.push('/')
				})
			}
		}
	}
</script>

<style scoped>
	button{
		margin-top: 20px;
		margin-left: 100px;
	}
</style>
