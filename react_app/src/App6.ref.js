import React, { Component } from 'react'

export default class App extends Component {
  showSon = () =>{
    console.log(this.son);

    this.son.show();

    this.son.setState({ num: 100 })
  };

  render() {
    return (
      <div>
        <button onClick={this.showSon}>操作子组件</button>
        <Son ref={(e) => (this.son = e)}/>
      </div>
    )
  }
}

class Son extends Component {
  state = { num: 1 };

  show() {
    alert("123");
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
