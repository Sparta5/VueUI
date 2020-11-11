// 按钮组件
// rnc
import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
export default class App extends Component {
render() {
return (
// View默认是弹性盒子容器, 子元素在交叉轴是拉伸效果. 导致Button被拉长
<View style={{alignItems: 'center'}}>
{/* 不同于web, RN的button是单标签, 使用title属性规定标题 */}
<Button title="我是按钮" />
{/* Button不能设置样式 */}
<Button title="不可用的按钮" disabled />
{/* 点击事件 */}
<Button title="点击事件" onPress={() => alert('点击事件')} />
{/* color属性: iOS文本色, Android背景色 */}
<Button title="color属性" color="green" />
</View>
);
}
}