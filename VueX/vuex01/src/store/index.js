import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //物品
  state: {
  	username:'Rose',
  	age:23,
  	//true表示男,false表示女
  	sex:true,
  	salary:12965.75,
  	products:[
  		{
  			// id:1,
  			productName:'SHARP夏普超大屏120英寸液晶电视PN',
  			salePrice:899999.00
  		},
  		{
  			// id:2,
  			productName:'ViH商用智慧语音投屏平板大屏幕电视超',
  			salePrice:599999.00
  		},
  		{
  			// id:3,
  			productName:'100英寸4K智能会议平板120英寸85英寸高清教育电视机',
  			salePrice: 347999.00
  		},
  		{
  			// id:4,
  			productName:'VIH 4K高清85 英寸液晶防爆电视机80',
  			salePrice:329999.00
  		}
  	]   
  },
  //记账员
  getters:{
    //统计仓库中的商品数量
    getCounts(state){
      return state.products.length;
    }
  },
  //搬运工
  mutations: {
    increment(state) {
      state.age++;
    },
    decrement(state) {
      state.age--;
    },
    addProduct(state,payload) {
      state.products.push(payload);
    }
  },
  //拉货车
  actions: {
  },
  //不同车间
  modules: {
  }
})
