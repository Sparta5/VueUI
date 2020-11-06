import React, { Component } from 'react'

export default class App extends Component {
  state = { uname: "dongdong" }

  render() {
    return (
      <div>
        {/*
          双向绑定数据
          
        */}
        {/*readOnly:只读；输入款不能改变*/}
        <input type="text" value={this.state.uname} readOnly />
        <input 
            type="text" 
            onChange={(event)=> this.setState( {uname:event.target.value} )}/>
        <p>{this.state.uname}</p>
      </div>
    )
  }

  _doChange = (event) =>{
    console.log(event);

    let uname = event.target.value;
    this.setState({ uname })
  };
}
