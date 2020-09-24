<template>
	<div>
		<h5>this is better-scroll</h5>
		<!--外层 wrapper 层 视图层 -->
		<div class="wrapper" ref="wrapper">
			<!-- 内层 列表内容区 -->
			<ul class="content">
				<li v-for="(i,k) in imgList" :key="k">
					<!-- onload 监听 当 img 加载完成 再调用 newScroll -->
					<img :src="i.bannerImg" alt="" @load="newScroll">
				</li>
			</ul>
		</div>

		<!-- data list -->
		<div class="data-list">
			<div v-for="(i,k) in dataList" :key="k" class="data-list-content" @click="toDetails(i.pid)" >
				<img src="">
				<div>
					<h5>{{i.pid}}=={{i.title}}</h5>
					<p>{{i.title}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// 引入 Bscroll 插件
import Bscroll from 'better-scroll'
// 局部使用axios,未使用 封装，未使用 全局
import axios from 'axios'
export default {
    data(){
        return{
					imgList:[],
					dataList:[]
				}
    },
    methods:{
			getData(){

				// mockjs 拿数据
				axios.get('/api/bannerList')
				.then(res=>{
					console.log(res.data)
					this.imgList = res.data
				}).then(()=>{
					this.newScroll()
				})
			},

			// 获取商品列表
			getDataList(){
				// xz 后台拿数据
				axios.get('http://localhost:3000/product/list')
				.then(res=>{
					// console.log(res.data)
					this.dataList = res.data
				})
			},

			// 跳转到详情页
			toDetails(pid){
				this.$router.push({name:'dataDetails',params:{pid:pid}})
			},
			newScroll(){
				// dom 但凡更新，重新生成 新的滚动
				this.$nextTick(function() {
					if(!this.scroll){
						this.scroll = new Bscroll(this.$refs.wrapper, {})
						
					} else {
						this.scroll.refresh()
					}
				})
			}
		},
		created(){
			this.getData(),
			this.getDataList()
		}
}
</script>

<style scoped>
  .wrapper {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
	height: 200px;
    border:1px solid red;
    overflow: hidden;
		z-index: 1;
  }
	.data-list{
		margin:210px 0 30px 10px;
	}
	.data-list-content{
		display: flex;
	}
	.data-list-content img{
		width: 100px;
		height: 100px;
	}
</style>