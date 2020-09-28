// cartList 购物车列表
export default {
	state:{
			unLogincartList:[]
	// CartList结构
	/* 
	CartList = {
		pid: "", // 商品id
		productName: "", // 商品名称
		pImg: "", // 商品图片
		price: "", // 商品价格
		count: "", // 商品数量
		stock: "", // 商品库存数量
		check: false // 是否勾选
	} */
	},
	getters:{
		_getShoppingCart (state) {
				return state.unLogincartList
		}
	},
	mutations: {
		// 看成 methods ---> 对数据进行提交以及修改
		// 未登陆用户点击添加商品
		_setUnloginCartProduct(state,product){ 
			state.unLogincartList.push(product)
			console.log(state.unLogincartList,'...添加成功')
			return state.unLogincartList
		},
		// 增加商品
		_addCartList(state,product){
			// 获取购物车状态
			for(let i = 0; i < state.unLogincartList.length; i++){
				let tmp = state.unLogincartList[i]
				if(tmp.pid == product.pid){
					state.unLogincartList[i].count ++
					state.unLogincartList[i].totalPrice = state.unLogincartList[i].price*state.unLogincartList[i].count
				}
			}
			return state.unLogincartList
		
		},
		// 减少商品
		_minusCartList(state,product){
			for(let i = 0; i < state.unLogincartList.length; i++){
				let tmp = state.unLogincartList[i]
				if(tmp.pid == product.pid){
				state.unLogincartList[i].count--
				state.unLogincartList[i].totalPrice = state.unLogincartList[i].price*state.unLogincartList[i].count
				}
				if(product.count <= 0){
						state.unLogincartList.splice(i,1)
				}
			}
			return state.unLogincartList
		},
		// 用户 结算 后 清空前端 购物车 缓存
		_clearCartList(state){
			state.unLogincartList = []
		}
	},
	actions:{
		// 可在此处发起异步请求	
	}
}