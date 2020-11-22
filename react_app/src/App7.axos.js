import React, { Component } from 'react';

//引入axios：npm i axios
import Axios from "axios";

  //网络请求
export default class App extends Component {
  //
  state = { data:null };

  componentDidMount() {
    let url = "https://api.apiopen.top/getWangYiNews";

    Axios.get(url).then((res) => {
      console.log(res)

      this.setState({ data: res.data });
    })
  }

  //循环渲染
  showNews() {
    return this.state.data.result.map((item,index) => {
      return <div key={index} style={{ 
                width:"200px", 
                margin:"10px",
                backgroundColor:"rgb(230,230,230)"}}>
        <img src={item.image} width="100%"/>
        <div>{item.title}</div>
        <div>{item.passtime}</div>
      </div>;
    });
  }

  render() {
    //网络数据：刚开始没有值
    if (!this.state.data) return <div></div>;
    return (
      <div>
        <div style={{ width:"600px",margin: "0 auto" }}>{this.showNews()}</div>
      </div>
    )
  }
}
