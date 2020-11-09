import React, { Component } from 'react'

export default class App extends Component {
  names = ["亮亮","然然","华哥","小新","果子"];

  names_btns = [
    <button key={0}>亮亮</button>,
    <button key={1}>然然</button>,
    <button key={2}>华哥</button>,
    <button key={3}>小新</button>,
    <button key={4}>果子</button>,
  ]
  showNames() {
    // 循环遍历 names
    let arr=[];
    this.names.forEach((item,index) => {
      let btn = <button key={index}>{item}</button>;
      arr.push(btn)
    });
    return arr;
  }

  showNames2() {
    let arr=[];
    this.names.forEach((item,index) => {
      let color = ["greeen" , "blue"][index % 2];//数组下标
      let li = (
        // <li key={index} style={{ color:index % 2 === 0 ? "green" : "blue" }}>
        //   {item}
        // </li>
      <li key={index} style={{color}}>
        {item}
      </li>
      );
      arr.push(li)
    })
    return arr;
  }0
  

  render() {
    return (
      <div>
        <div>{this.names}</div>
        <div>{this.names_btns}</div>
        <div>{this.showNames()}</div>
        <div>{this.showNames2()}</div>
      </div>
    )
  }
}
