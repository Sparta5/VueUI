import React, { Component } from 'react'

export default class App extends Component {
  state = {num:5};

  _doJian =()=>{
    this.setState({ num: this.state.num - 1 })
  }

  _doJia() {
    this.setState({ num: this.state.num + 1 })
  }
  render() {
    return (
      <div>
        <button onClick={this._doJia}>-</button>
        <span >{this.state}</span>
        <button onClick={this._doJia.bind(this)}>+</button>
      </div>
    )
  }
}
