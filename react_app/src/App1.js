//rcc
import React, { Component } from "react";

export default class App extends Component {

  show() {
    alert("点击事件")
  }

  render() {
    return (
      <div>
        <h1>Hello Workd!</h1>
        
        <button onClick={this.show}>点击</button>
      </div>
    );
  }
}
