import React, { Component } from 'react'

export default class App extends Component {
  names = ["mike","licy","lily","jason"];

  emps = [
    {name:'东东',sex: 1, age:23},
    {name:'然然',sex: 1, age:29},
    {name:'亮亮',sex: 1, age:33},
    {name:'小月',sex: 0, age:23},
    {name:'果果',sex: 1, age:22},
  ]

  showNmaes(){
    // let a = 
    return this.names.map((item,index) => {
      return <button key={index}>{item}</button>
    })
    // return a
  }
  showLi() {
    return this.names.map((item,index) => {
    return <li key={index}>{item}</li>
    })
  }

  showEmps() {
    return this.emps.map((item,index)=>{

      let sex = ["女","男"][item.sex]

      return (
          <tr key={index} style={{backgroundColor:item.age>30? "green": "transparent"}}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{sex}</td>
            <td>{item.age}</td>
          </tr>
        )
    })

  }

  render() {
    return (
      <div>
        <div>{this.showNmaes()}</div>
        <div>{this.showLi()}</div>
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>序号</th>
                <th>姓名</th>
                <th>性别</th>
                <th>年龄</th>                
              </tr>
            </thead>
            <tbody>
              {this.showEmps()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
