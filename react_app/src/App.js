import React, { Component } from 'react'

export default class App extends Component {
  state={
    uname:'',
    age:0
  }

  render() {
    return (
      <div>
        姓名：<input value={this.state.uname} onChange={this._doUame} type="text"/><br/>
        年龄：<input
               type="text"
               valuef={this.state.uname}

                /><br/>
        <button>确定</button>
        <p>{this.state.uname}今年{this.state.age}</p>
      </div>
      
    )
  }

  _doUame = (event) =>{
    console.log(event);

    let uname = event.target.value;
    this.setState({uname})
  }

  _doSure() {

    let { name, age } = this.state;

    this.setState({ desc: `${name}` })
  }
}
