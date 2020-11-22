// 登录页面练习

// rncs
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

// 自定义rpx
const {width, height} = Dimensions.get('screen');

function rpx(p) {
  return (width / 750) * p;
}

export default class App extends Component {
  bgImg =
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602501253879&di=d320d67d2efffbaed7d6477f24254e80&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F28%2F20150928003950_KHcrM.jpeg';

  render() {
    return (
      // View默认的高度和 窗口window高度一样
      // window高度 = 屏幕高度 - 键盘高度
      // 键盘弹出时, 会导致View高度缩小, 进而影响其中的布局!
      // 语法糖 {height: height} -> height;   height是屏幕高, 本页面第17行代码声明
      <View style={{alignItems: 'center', height}}>
        <StatusBar backgroundColor="rgba(0,0,0,0.5)" translucent />

        <ImageBackground
          source={{uri: this.bgImg}}
          style={{width: '100%', height: '100%', alignItems: 'center'}}>
          <View style={{alignItems: 'center', marginTop: rpx(200)}}>
            <Text style={{fontSize: rpx(60)}}>达内教育</Text>
            <Text style={{fontSize: rpx(40), fontWeight: 'bold'}}>TARENA</Text>
          </View>
          {/* 输入框部分 */}
          <View style={{marginTop: rpx(200)}}>
            <TextInput style={ss.input} placeholder="账号" />
            <TextInput style={ss.input} placeholder="密码" />
          </View>

          <View style={ss.account}>
            <TouchableOpacity>
              <Text style={{color: 'white'}}>注册新用户</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={{color: 'white'}}>忘记密码</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity activeOpacity={0.7} style={ss.loginBtn}>
            <Text style={ss.loginBtn_title}>登录</Text>
          </TouchableOpacity>

          {/* 底部 */}
          <View style={ss.bottom}>
            <View style={ss.logo_box}>
              <TouchableOpacity style={ss.logo}>
                <Image
                  style={ss.logo_img}
                  source={require('./assets/qq.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity style={ss.logo}>
                <Image
                  source={require('./assets/weibo.png')}
                  style={ss.logo_img}
                />
              </TouchableOpacity>

              <TouchableOpacity style={ss.logo}>
                <Image
                  source={require('./assets/wechat.png')}
                  style={ss.logo_img}
                />
              </TouchableOpacity>
            </View>

            <Text style={ss.copyright}>
              Copyright &copy; 2015 All Rights Reserved
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const ss = StyleSheet.create({
  logo_box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: rpx(50),
  },
  logo: {
    backgroundColor: 'white',
    borderRadius: rpx(20 + 35),
    padding: rpx(10),
    marginHorizontal: rpx(10),
  },
  logo_img: {
    width: rpx(70),
    height: rpx(70),
  },
  bottom: {
    marginTop: 'auto',
    width: '100%',
    borderTopWidth: rpx(2),
    borderTopColor: 'rgba(0, 0, 0, 0.4)',
  },
  copyright: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: rpx(20),
    marginBottom: rpx(20),
  },
  input: {
    backgroundColor: 'white',
    width: rpx(550),
    marginVertical: rpx(15),
    borderRadius: rpx(50),
    fontSize: rpx(35),
    color: 'black',
    paddingHorizontal: rpx(30),
  },
  account: {
    width: rpx(550),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: rpx(30),
  },
  loginBtn: {
    width: rpx(550),
    paddingVertical: rpx(20),
    borderRadius: rpx(50),
    backgroundColor: 'green',
    alignItems: 'center',
    marginTop: rpx(40),
  },
  loginBtn_title: {
    fontSize: rpx(35),
    color: 'white',
    letterSpacing: rpx(40), //文字之间的间隔
  },
});
