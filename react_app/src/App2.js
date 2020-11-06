import React, { Component } from 'react'

export default class App extends Component {
  // UI user interface 用户界面
  state = { num: 1 };

  //_开头：代码规范，用_开头
  _doAdd = () => {

    // setState() 来更新  
    this.setState({ num: this.state.num + 1 })
  };

  render() {
    return (
      <div>
        <div>{this.state.num}</div>
        <button onClick={this._doAdd}>增加</button>
      </div>
    )
  }
}
