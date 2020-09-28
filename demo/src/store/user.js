export default {
    state:{
        userInfo : { }    // 定义数据初始状态 ,
    },
    getters:{
        _getUser(state){
            return state.userInfo
        }
    },
    mutations:{
        _setUser(state,value){  // 传入的 state 初始值 
            state.userInfo = value    // 储存并 更改 state.user 的数据  
            sessionStorage.setItem('user1',JSON.stringify(value))
            return state.userInfo
          },
    }
}