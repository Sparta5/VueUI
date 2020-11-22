import React, { Component } from 'react'
import { Dimensions, FlatList, Text, View } from 'react-native'

const {width,height} = Dimensions.get('screen');

function rpx(p){
  return (width / 750) * p;
}

export default class App extends Component {
  state = {result:[]}

  //自动滚动：2.5s 滚动到下一页
  curP = 0;//当前页 序号0

  componentDidMount(){
    let url = 'https://api.apiopen.top/getWangYiNews?page=1&count=10';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)

        this.setState({result:res.result});

        //定时器：
        setInterval(()=> {
          //2.5s:控制FlatList组件 滚动到下一张

          if (this.curP < this.state.result.length - 1) {
            this.curP++;
          } else {
            this.curP = 0;
          }
          
          //通过 ref 绑定给 FlatList 的变量 fl
          this.rl.scrollToIndex({index: ++this.curP});
        },1000);
      });

  }
  render() {
    return (
      <View>
        <StyleSheet hidden />

        {/* pagingEnabled： 安页滚动 */}
        {/* horizontal: 横向滚动 */}
        <FlatList
          data={this.state.result}
          renderItem={this._renderItem}
          keyExtractor={(item,index) => index + ''}
          pagingEnabled
          horizontal
          ref={e => (this.fl = e)}/>
      </View>
     
    )
  }

  _onScroll = (event) =>{
    event.persist();

    // console.log(event);

    let x = event.nativeEvent.contentOffset.x;
    let w = event.nativeEvent.layoutMeasurement.width;

    this.curP = Math.round(x / w);
    console.log(this.curP)
  }

  _renderItem = ({item,index}) => (
      <View>
        <Image source={{uri: item.img}} style={{width,height}}></Image>
      </View>) 
}

const style = StyleSheet.create({})
