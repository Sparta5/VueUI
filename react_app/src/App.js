import React, { Component } from 'react'

export default class App extends Component {
  state={ uname:"", age:"", desc:""};

  _nameChanged = (event) =>{
    this.setState({ uname: event.target.value });
  }
  render() {
    return (
      <div>
        姓名：
        <input
            value={this.state.uname} 
            onChange={this._nameChanged} 
            type="text"/><br/>
        年龄：
        <input
            type="text"
            value={this.state.age}
            onChange={(event) => this.setState({ age:event.target.value })}
            /><br/>
        {/* 普通函数，用bin 绑定this */}
        <button onClick={this._doSure.bind(this)}>确定</button>
        <p 
          style={{
            color: "blue",
            fontSize:"25px",
            backgroundColor:"orange",
            fontWeight:"bold"
          }} 
        >
          {this.state.desc}
        </p>

        <p className="desc">{this.state.desc}</p>
      </div>
      
    )
  }

  _doSure() {

    let { uname, age } = this.state;

    this.setState({ desc: `${uname}今年${age}岁`});
  }
}
