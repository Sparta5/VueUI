import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'

export default class App extends Component {
  state = {result: []};

  componentDidMount() {
    let url = 'https://api.apiopen.top/getWangYiNews?page=1&count=10';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        this.setState({result:res.result});
      })
  }
  render() {
    return (
      <FlatList
        data={this.state.result}
        renderItem={this._renderItem}
        keyExtractor={(item,index) => index + ''}
        numColumns={2}
      />
    )
  }

  _renderItem = ({item,index}) => {
    //间距20
    let box_w = rpx((750 - 20 * 3) /2);
    let box_h = box_w * 1.2;

    return (
      <Image 
        source={{uri:item.img}}
        style={{

        }}/>
    )
  }
}

