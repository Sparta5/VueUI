import React, { Component } from 'react'
import { Image,Text, View } from 'react-native'

export default class App extends Component {
  image = 
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1354268575,1268995723&fm=26&gp=0.jpg';

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Image source={{uri: this.image}} style={{width:100,height:100}}></Image>
      {/* 本地图片： 自建 assets 文件夹进行存放*/}
        <Image source={require('./assets/01.jpg')}></Image>
      </View>

    )
  }
}
