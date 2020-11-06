import React, { Component } from 'react'

export default class App extends Component {

  //事件的 this 指向

  /**
   * 
   * 储备知识：
   * 普通函数： this指向 obj.xxx();  xxx()函数中的this 指向obj
   * 箭头函数： this指向 obj.xxx();  xxx()
   * 
   **/

   state = { num:1 };

   _doAdd = () => {
     this.setState({num:this.state.num + 1})
   }
   
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
