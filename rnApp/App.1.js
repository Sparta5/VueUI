import React, {Component} from 'react';
// StyleSheet
import {Text, View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{color: 'red'}}>
        <Text style={{fontSize: 30}}> textInComponent </Text>
        <Text style={{color: 'red', fontSize: 30}}>
          <Text>￥999</Text>
        </Text>
        <Text style={ss.danger}>ok</Text>
        {/*多个样式：使用数组*/}
        <Text style={[ss.danger,ss.md]}>DANGER</Text>
      </View>
    );
  }
}

// 内部样式的创建
const ss = StyleSheet.create({
  danger: {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  md: {
    width:200,
    borderWidth:2,

  }
});
