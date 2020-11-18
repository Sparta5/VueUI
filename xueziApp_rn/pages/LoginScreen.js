// rncs
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Button,
  Image,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

function rpx(p) {
  return (width / 750) * p;
}

export default class LoginScreen extends Component {
  // 符合: 普通函数 && 事件触发 && 使用了 this
  _doLogin() {
    // 跳转
    this.props.navigation.push('main');
  }

  render() {
    return (
      <View style={{padding: rpx(80), backgroundColor: 'white', flex: 1}}>
        <TextInput placeholder="请输入管理员用户名" style={ss.input} />
        <TextInput placeholder="请输入用户登录密码" style={ss.input} />
        <View style={{height: 30}} />
        {/* 原生按钮  不能写样式 */}
        <Button title="登录" onPress={this._doLogin.bind(this)} />

        <View style={ss.logo}>
          <Image source={require('../assets/logo.png')} />
          <Text style={{color: 'skyblue', fontSize: rpx(40)}}>
            后台管理系统
          </Text>
        </View>

        <Text style={{textAlign: 'center', marginTop: 50}}>
          &copy;2017版权所有, CODEBOY.COM
        </Text>
      </View>
    );
  }
}

const ss = StyleSheet.create({
  input: {color: 'black', fontSize: rpx(40), borderBottomWidth: 1},

  logo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: 'center',
  },
});
