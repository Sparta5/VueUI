import React, { Component } from 'react'
import { ActivityIndicator, Switch, Text, View } from 'react-native'

export default class App extends Component {
  state = {show:true};

  _change(show) {
    console.log(show)
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>

        <Switch
           value={this.state.show}
           onValueChange={(show) => this._change.bind({show})}>

        </Switch>
        {/* 活动提示 */}
        <View>
          <ActivityIndicator color="green" size="large"></ActivityIndicator>
          <Text style={{fontSize:18,textAlign:'center'}}></Text>
        </View>
      </View>
    )
  }
}
