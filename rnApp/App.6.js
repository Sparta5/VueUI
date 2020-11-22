import React, { Component } from 'react'
import { ImageBackground, StatusBar, Text, View } from 'react-native'

export default class App extends Component {
  img ='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2147846627,2063492150&fm=26&gp=0.jpg';
  render() {
    return (
      <View>
        <StatusBar backgroundColor="rgba(0,0,0,0)" translucent={true}></StatusBar>
        
        <ImageBackground 
          blurRadius={4}
          source={{uri:this.img}}
          style={{width:'100%',height: '100%'}}>
          <Text style={{fontSize: 40, marginTop: 24, backgroundColor: 'red'}}>textInComponent
          </Text>
        </ImageBackground>
      </View>
    )
  }
}
