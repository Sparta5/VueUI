//自定义按钮

import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default class App extends Component {
  btnImg =
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1683332319,2879851340&fm=26&gp=0.jpg';
  render() {
    return (
      <View style={{alignItems:'center'}}>
        {/* TouchableOpacity: 自带点击的容器 */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
          backgroundColor: 'green',
          paddingHorizontal: 40, //padding-left: 40; padding-right:40
          paddingVertical: 5, // padding-top: 5; padding-bottom: 5;
          borderRadius: 5,
        }}>
          <Text style={{fontSize:20}}>通用</Text>
          <Text style={{fontSize:20}}>&gt;</Text>
        </TouchableOpacity>

        <TouchableOpacity
          >
          <Text style={{color: 'white',fontSize:20,letterSpacing: 10}}>提交</Text>
        </TouchableOpacity>

        {/* 图片按钮 */}
        <TouchableOpacity>
          <Image source={{uri: this.btnImg}} style={{width:60,height: 60}}></Image>
        </TouchableOpacity>
      </View>
    )
  }
}
