import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';

const {width,height} = Dimensions.get('screen')

function rpx(p) {
  return (width / 750) * p;
}

export default class MainScreen extends Component {
  data = [
    {
      title:'上架商品总数量',
      num:'24.380',
      desc:'-50%较上月', 
    },
  ]
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
