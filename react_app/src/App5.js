import React, { Component } from 'react'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div>
        {/*内联样式要求使用对象类型书写*/}
        <span style={{ 
          color: "blue",
          display: "inline-block",
          padding:"10px",
          borderRadius:"4px",
          backgroundColor:"pink",
          boxShadow:"2px 2px 2px red" }}>
            Hello World!
          </span>
          <br/>
          <br/>
          {/*注意： JSX本质是 DOM 的语法糖*/}
          <span className="danger">危险</span>
      </div>
      
    )
  }
}


