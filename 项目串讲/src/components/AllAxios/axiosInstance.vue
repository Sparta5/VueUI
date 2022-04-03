<template>
	<div>
		<h3>axios-instance</h3>
		 请输入用户姓名：<input type="text" v-model="uname">
		 <button @click="postTask">查询</button>
		 
	</div>
</template>

<script>
  // 使用 封装 的 axiosGet\axiosPost 方法
	import {axiosGet,axiosPost} from '../../utils/request.js'
	export default {
		data(){
			return {
				uname:''
			}
		},
		methods:{
			getTask(){
				// get 请求实例方法
				axiosGet(
					'/user/all').then(res=>{
					console.log(res);
				})
			},
			postTask(){
				let data = {uname:this.uname}
				// post 请求 实例方法
				axiosPost({url:'/user/details',data:data})
				.then(res=>{
					console.log('this is instance--------');
					console.log(res);
				})
			}
		},
		mounted(){
			this.getTask()
		}
	}
</script>

<style>
</style>
