<template>
	<div>
		<h3>axios-get</h3>
		请输入要查询的编号：<input type="text" v-model="pid"><br>
		<button @click="GetParams">获取详细信息</button>
		<div>{{details}}</div>
	</div>
</template>
	
<script>
	// 未使用axios 封装 方法、未使用全局！ 仅 此组件使用axios
	import axios from 'axios'
	export default{
		data(){
			return {
				pid:'',
				details:''
			}
		},
		methods:{
			Get(){

				// 查询结果
				axios.get('http://localhost:3000/user/all')
				.then(res=>{
					console.log('this is axios get --------');
					console.log(res.data);
				})
			},

			// 按 id 查询 商品详细信息 get 请求带参 查询
			GetParams(){
				axios.get('http://localhost:3000/product/proinfo',
				{
					params:{pid:this.pid}
				})
				.then(res=>{
					this.details = res.data[0]
				})
			}
		},
		mounted(){
			this.Get()
		}
	}
</script>
	
<style>
</style>
