import React, { Component } from 'react'

export default class App extends Component {
  state = { isLogin:true }

  show(){
    if(this.state.val == true){
      return (
        <h3>欢迎，果果 
          <button onClick={()=>this.setState({ isLogin:false })}>退出</button> 
        </h3>);
    }else{
      return (
      <h3>
        <button onClick={()=>this.setState({ isLogin:true })}>登录</button>
        <button>注册</button>        
      </h3>);
    }    
  }

  render() {
    return <div>
      <span>{this.show()}</span>
    </div>
  }
}
