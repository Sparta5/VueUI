<template>
	<!-- 左侧 tabs 切换 -->
	<div class="tabs">
		<nav>
			<ul>
				<li  v-for="(item,index) in tab" :key="index">
					<router-link :to="item.url" :key="index">{{item.title}}</router-link>
				</li>
			</ul>
		</nav>
		<div class="content">

			<!-- 路由插槽 不同组件 切换显示的地方 -->
			<router-view></router-view>
		</div>
	</div>
</template>
	
<script>
	export default{
		data(){
			return{
				tab:[
					{
						"title":"axios-get",
						"url":"/axiosall/get"
					},
					{
						"title":"axios-post",
						"url":"/axiosall/post"
					},
					{
						"title":"axios-all-spread",
						"url":"/axiosall/allspread"
					},
					{
						"title":"axios-instance",
						"url":"/axiosall/instance"
					},
					{
						"title":"axios-interceptors",
						"url":"/axiosall/interceptors"
					}
				]
			}
		}
	}

</script>

<style scoped>
	nav{
		margin-right: 10px;
	}
	a{
		color:black;
		text-decoration: none;
	}
	a.router-link-exact-active {
  		color: #42b983;
	}
	ul>li{
		list-style: none;
		padding: 20px 10px 0 0;
		background:ghostwhite;
		margin: 4px 0;
		text-align: center;
	}
	.tabs{
		display: flex;
	}
</style>
