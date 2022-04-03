<template>
	<div>
		<h3>axios-spread</h3>
	</div>
</template>

<script>
  // 未使用axios 封装 方法、未使用全局！ 仅 此组件使用
	import axios from 'axios'
	export default {
		data(){
			return{
				res1:[],
				res2:[]
			}
		},
		methods:{
			axiosTask1(){
				return axios.get('http://localhost:3000/user/all')
			},
			axiosTask2(){
				return axios.get('http://localhost:3000/product/list')
			}
		},
		mounted(){
			axios.all([this.axiosTask1(),this.axiosTask2()])
			.then(axios.spread(function(res1,res2){ // 注意 此处如果使用箭头函数，需要 bind this
				console.log('this is all spread ------');
				console.log(res1)
				console.log(res2)
			}))
		}
	}
</script>
	
<style scoped>
</style>
