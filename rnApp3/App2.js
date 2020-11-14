import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'

export default class App extends Component {
  names = ['东东','豆豆','月月','那您']

  render() {
    return  <FlatList data={this.names}
      renderItem={this._renderItem}
      // keyExtractor={this._keyExtractor}
      keyExtractor = {(item,index) => index + ''}
      />;
    
  }

  _keyExtractor = (item,index) => {
    return index + '';
  }

  // _renderItem = (data) => {
    // console.log(data)
    _renderItem = ({index,item}) => <Text style={{fontSize:50}}>{item}</Text>;

}
// function show(obj) {
//   let name = obj.name;
//   let age = obj.age;

//   console.log(name,age);
// }

// function show(obj) {
//   let {name,age} = obj;

//   console.log(name,age);
// }

function show({name,age}) {
  console.log(name,age);
}

show({name:'东东',age:18});
