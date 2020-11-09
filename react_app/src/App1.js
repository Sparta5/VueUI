import React, { Component } from 'react'

export default class App extends Component {

  state = { score:60 };

  render() {
    return <div>
      <button onClick={()=> this.setState({ score:this.state.score - 10 })}
        disabled={this.state.score === 10}>-</button>
      <span>{this.state.score}</span>
      <button onClick={()=> this.setState({ score:this.state.score + 10 })}>+</button>
      <h2>{this.state.score >= 60 ? (this.state.score >= 90 ? "优秀":"及格"):"不及格"}</h2>
  <div>{this.showRes()}</div>
    </div>
  }
  showRes() {
    if (this.state.score >= 90) {
      return <h3>优秀</h3>
    }else if(this.state.score >=60 ){
      return <h3>及格</h3>
    }else{
      return <h3>不及格</h3>
    }
  }

  render2() {
    return <div onClick={this.showRes2}>
      <button>-</button>
      <span>{this.state.score}</span>
      <button>+</button>
    </div>
  }
  showRes2() {
    console.log(444)
  }
}
