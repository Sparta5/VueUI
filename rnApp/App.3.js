import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={ss.box}>
        <Text style={ss.one}> one </Text>
        <Text style={ss.two}> Two </Text>
        <Text style={ss.three}> Three </Text>
      </View>
    );
  }
}
// 修改 styles -> ss: 便于使用
const ss = StyleSheet.create({
  // 非层叠样式: 给父元素加样式 无法影响子元素, 所以只能给每个子元素添加fontSize
  box: {
    // view组件默认是弹性盒子布局：元素竖向排列，横向拉伸
    backgroundColor: 'pink',
    height: 300,

    // flex: 管理内容布局方向
    flexDirection: 'column',
    flexDirection: 'column-reverse',
    flexDirection: 'row-reverse',
    flexDirection: 'row',     

    // 主轴排列:
    justifyContent: 'center', //居中
    justifyContent: 'flex-end', //end: 主轴方向的结尾对齐
    justifyContent: 'flex-start', //start: 主轴方向起始对齐, 默认值
    justifyContent: 'space-around', //空白环绕子元素两侧
    justifyContent: 'space-between', //空白间隔中间, 两侧没有
    justifyContent: 'space-evenly', //空白均分
    // 交叉轴: 与主轴垂直关系
    alignItems: 'center', //居中
    alignItems: 'flex-end', // 布局方向的末尾对齐: 上->下, 左->右
    alignItems: 'flex-start', // 布局方向头部对齐
    alignItems: 'stretch', //拉伸充满, 默认值

  },
  one: {
    fontSize: 30,
    backgroundColor:  'red',
    alignSelf: 'center'
  },
  two: {
    fontSize:30,
    backgroundColor:'rgb(0,225,0)',
  },
  three: {
    fontSize: 30,
    backgroundColor: '#00f',
  }
})