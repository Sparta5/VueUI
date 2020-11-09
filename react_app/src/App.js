import React, { Component } from "react";

import Axios from "axios";

import "./App.css";

export default class App extends Component {
  state = { data: null };

  componentDidMount() {
    this.getDate(1)
  };

  getDate(pno){
    let url = "http://101.96.128.94:9999/mfresh/data/news_select.php?pageNum" + pno;

    Axios.get(url).then((res) => {
      console.log(res);

      this.setState({ data: res.data });
    });      
  }

  showNews() {
    return this.state.data.data.map((item, index) => {
      // 字符串 *1  转数字
      let time = new Date(item.pubTime * 1);

      time = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;

      return (
        <div
          key={index}
          style={{
            borderBottom: "1px dashed gray",
            padding: "6px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>{item.title}</span>
          <span>{time}</span>
        </div>
      );
    });
  }

  showPages() {
    let arr = [];

    for (let i = 1;i <= this.state.data.pageCount;i++) {
      arr.push(
        <span 
          key={i}
          className={i === this.state.data.pageNun ? "cur" : ""}
          //普通函数的事件传参：bind方式
          onClick={this.getDate.bind(this,i)}>
            {i}
        </span>
      );     
    }
    return arr;
  }

  page(e){
    console.log(e)
  }

  render() {
    if (this.state.data === null) return <div></div>;

    return (
      <div style={{ width: "800px", margin: "0 auto" }}>
        {this.showNews()}
        <div>
          <button onClick={this.page.bind(this,-1)}>上一页</button>
            <span>{this.showPages()}</span>
          <button onClick={this.page.bind(this,+1)}>下一页</button>
        </div>
      </div>
    );
  }
}
