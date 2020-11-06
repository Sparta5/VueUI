import React, { Component } from 'react'

export default class App extends Component {

   state = { num:1 };

   _doAdd = () => {
     this.setState({num:this.state.num + 1},()=>{
       console.log("我更新前",this.state.num)
     })

     console.log("我更完毕",this.state.mum)
   };
   
  render() {
    return (
      <div>
        <h2>{this.state.num}</h2>
        <button onClick={this._doAdd.bind(this)}>普通函数</button>

        {/*解决方案2*/}
        <button onClick={()=> this._doAdd()}>普通函数</button>
      </div>
    )
  }
}
