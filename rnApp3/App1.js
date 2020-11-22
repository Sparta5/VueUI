// rncs

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

// rpx
const {width, height} = Dimensions.get('screen');

function rpx(p) {
  return (width / 750) * p;
}

export default class App extends Component {
  bg =
    'https://tse3-mm.cn.bing.net/th/id/OIP.vqc5i7Y7k1csMpJjAoQS9AHaLH?pid=Api&rs=1';

  render() {
    return (
      <ImageBackground
        style={{width, height}}
        source={{uri: this.bg}}
        blurRadius={5}>
        <StatusBar backgroundColor="rgba(0,0,0,0)" translucent />

        {/* rpx: 相对像素  宽度/750;  根据宽度适配的 都要用rpx */}
        <TouchableOpacity
          style={{width: rpx(80), marginTop: 25, marginLeft: rpx(20)}}>
          <Image
            source={require('./assets/left.png')}
            style={{width: rpx(80), height: rpx(80)}}
          />
        </TouchableOpacity>

        <Text style={ss.logo}>TEDU</Text>

        <View style={{width: rpx(650), alignSelf: 'center'}}>
          <TextInput placeholder="邮箱/手机号" style={ss.input} />
          <TextInput
            placeholder="密码"
            style={[ss.input, {marginVertical: 25}]}
            secureTextEntry
          />

          <TouchableOpacity style={ss.login} activeOpacity={0.6}>
            <Text style={ss.login_title}>登录</Text>
          </TouchableOpacity>

          <View style={ss.passwd}>
            <TouchableOpacity>
              <Text style={{color: 'white', fontSize: rpx(30)}}>忘记密码?</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={{color: 'white', fontSize: rpx(30)}}>手机注册</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 定位: 最下方 */}
        <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
          <Text
            style={{color: 'white', alignSelf: 'center', fontSize: rpx(30)}}>
            第三方账号直接登录
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 30,
            }}>
            <TouchableOpacity activeOpacity={0.5} style={ss.qq_btn}>
              <Image
                source={require('./assets/qq.png')}
                style={{width: rpx(60), height: rpx(60)}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={[ss.qq_btn, {marginHorizontal: rpx(50)}]}>
              <Image
                source={require('./assets/weibo.png')}
                style={{width: rpx(60), height: rpx(60)}}
              />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={ss.qq_btn}>
              <Image
                source={require('./assets/wx.png')}
                style={{width: rpx(60), height: rpx(60)}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const ss = StyleSheet.create({
  qq_btn: {
    backgroundColor: 'white',
    padding: rpx(20),
    borderRadius: 1000,
  },
  passwd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: rpx(20),
    marginTop: 25,
  },
  login_title: {
    color: 'white',
    fontSize: rpx(40),
    letterSpacing: rpx(10),
  },
  login: {
    backgroundColor: 'orange',
    borderRadius: rpx(6),
    paddingVertical: rpx(15),
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: rpx(10),
    padding: rpx(20),
    fontSize: rpx(35),
    color: 'black',
  },
  logo: {
    alignSelf: 'center',
    fontSize: rpx(80),
    color: 'white',
    fontWeight: 'bold',
    marginTop: 50, //单纯高度的设置 可以不写rpx;  rpx与宽度有关的适配
    marginBottom: 50,
  },
});
