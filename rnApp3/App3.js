// rnc

import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

//rpx
const {width, height} = Dimensions.get('screen');

function rpx(p) {
  return (width / 750) * p;
}

export default class App extends Component {
  // 状态值: 数据变化
  state = {data: []};

  // 挂载时
  componentDidMount() {
    let url = 'http://capi.douyucdn.cn/api/v1/live';

    // vue: axios.get(url).then(res=>{})
    // ng : this.http.get(url).subscribe(res=>{})
    // rn : fetch(url).then(res=>res.json()).then(res=>{})
    fetch(url)
      .then((res) => res.json()) //固定写法: 把返回值的 json 数据读取
      .then((res) => {
        console.log(res);

        this.setState({data: res.data});
      });
  }

  render() {
    /**
     * 核心3属性:
     * data: 数据数组
     * renderItem: 每一项数组的 UI
     * keyExtractor: 每一个UI的唯一标识 key
     * 
     * 次要属性（不是必备的）
     * ItemSeparatorComponent:栏目之间的分割
     */
    return (
      <FlatList
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index + ''}
        ItemSeparatorComponent = {this._ItemSeparatorComponent}
        ListFooterComponent={this._ListFooterComponent}
        onEndReached={this._onEndReached}
        onEndReachedThreshold={0.1}
      />
    );
  }

  _onEndReached = () => {
    // alert(123)
    let offset = this.state.data.length;
    
  }

  _ListFooterComponent = () => (
    <View 
      style={{
        backgroundColor:"rgb(240,240,240)",
        alignItems:'center',

      }}>
      <ActivityIndicator color="orange" size="large"/>
      <Text style={{fontSize:rpx(30)}}>加载中...</Text>
    </View>
  )

  _ItemSeparatorComponent = () => {
    <View style={{height:1,backgroundColor:'gray'}}></View>
  }

  _renderItem = ({item, index}) => (
    <View style={{flexDirection: 'row'}}>
      <Image style={ss.room_icon} source={{uri: item.room_src}} />
      {/* flex:1  代表 宽度和剩余空间大小一样 */}
      <View
        style={{
          flex: 1,
          paddingRight: rpx(5),
          justifyContent: 'space-evenly',
        }}>
        <Text style={{fontSize: rpx(30)}}>{item.room_name}</Text>
        <Text style={ss.game_name}>{item.game_name}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{uri: item.avatar}}
            style={{width: rpx(40), height: rpx(40), borderRadius: 1000}}
          />
          <Text style={{marginLeft: rpx(10)}}>{item.nickname}</Text>
        </View>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  game_name: {
    backgroundColor: 'orange',
    borderRadius: rpx(7),
    alignSelf: 'flex-start',
    padding: rpx(7),
    color: 'white',
  },
  room_icon: {
    width: rpx(320),
    height: rpx(180),
    margin: rpx(5),
    borderRadius: rpx(5),
  },
});
