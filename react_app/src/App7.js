import React, { Component } from 'react'

export default class App extends Component {
  state = { player: "" };

  _doChoose = (name) =>{
    this.setState({ player: name });
  };

  _doSelect(name){
    this.setState({ player:name })
  }

  render() {
    return (
      <div>
        <h4>张老师做喜欢的选手：{this.state.player}</h4>
        <button onClick={() => this._doChoose("The Shy")}>The Shy</button>
        <button onClick={() => this._doChoose("Rookie")}>Rookie</button>
        <button>Uzi</button>
        <button onClick={this._doSelect.bind(this,"Bin")}>Bin</button>
      </div>
    )
  }
}
