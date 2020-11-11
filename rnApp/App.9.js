// 输入框组件

// rnc
import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';

export default class App extends Component {
  // 双向绑定: 读取输入框的值
  state = {
    uname: '',
    upwd: '',
  };

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        {/* 自带上下内边距, 行元素效果: 长度随内容而变化 */}
        <TextInput style={{borderWidth: 1}} />

        <TextInput style={ss.input} />
        {/* 常用属性 */}
        <TextInput
          style={ss.input}
          placeholder="请输入用户名"
          value={this.state.uname}
          // 变化时, 参数e 是事件本身. 通过事件获取变化的值 更新给uname
          // onChange={(e) => this.setState({uname: e.target.value})}
          onChangeText={(uname) => this.setState({uname})}
        />
        {/* secureTextEntry: 密文类型 */}
        <TextInput
          style={ss.input}
          placeholder="请输入密码"
          secureTextEntry
          value={this.state.upwd}
          // onChangeText触发时, 传参就是变化的值, 而非事件.  相当于 e.target.value 作为参数
          // 参数名随便写, 此处写成 upwd 是为了凑语法糖  { upwd: upwd} -> {upwd}
          // 不用语法糖: onChangeText={value => this.setState({upwd: value})}
          onChangeText={(upwd) => this.setState({upwd})}
        />

        <Button
          title="登录"
          onPress={() => alert(this.state.uname + this.state.upwd)}
        />
      </View>
    );
  }
}

const ss = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 18,
    padding: 6,
    width: '80%',
    marginVertical: 5,
  },
});
