import React, { Component } from 'react'
import { Dimensions, Text, View,  } from 'react-native'

// rpx 单位
// 按照美工的效果图宽度，分成对应的份数 -- 与小程序的rpx机制相同

//1.获取屏幕实际宽度
const {width,height} = Dimensions.get('screen')

function rpx(p) {
  return (width / 750) * p;
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{width:rpx(375),backgroundColor:'red',height:30}}>
           textInComponent 
        </Text>

        <Text style={{width:rpx(135),backgroundColor:'red',height:30}}>
          textInComponent
        </Text>

        <Text style={{width:'50%',backgroundColor:'red',height:30}}>
          textInComponent
        </Text>
      </View>
    )
  }
}
