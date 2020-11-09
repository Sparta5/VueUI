import React, { Component } from 'react'

export default class App extends Component {
  state = {show:false}
  timer;
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ show: !this.state.show })}>显示/隐藏</button>
        {this.state.show ? <Son name="咚咚咚"/> : ""}
      </div>
    );
  }
}

//子组件
class Son extends Component {
  //挂载时
  componentDidMount() {
    console.log("componentDidMount: 挂载时. 组件显示时");
    this.timer = setInterval(()=>{
      this.setState({ num:this.state.num + 1 })
    },3000)
  }

  //组件内容更新
  componentDidUpdate(props,state) {
    // console.log("原props",props,"新值",this.props);
    // console.log("原state",state,"新值",this.state);
  }

  //控制页面的刷新与否
  //面试：如何提高 React 效率
  shouldComponentUpdate(props,state) {
    console.log("新props",props,"原值",this.props);
    console.log("新state",state,"原值",this.state);

    if (state.num % 2 === 1) return false;

    return true
  }

  //卸载
  componentWillUnmount() {
    console.log("componentWillUnmount: 卸载时. 组件显示时");

    //卸载时 关闭定时器
    clearInterval(this.timer)
  }

  state = { num:1 }

  render() {
    return (
      <div>
        <h2>子组件:{this.state.num}</h2>
      </div>
    );
  }
}
