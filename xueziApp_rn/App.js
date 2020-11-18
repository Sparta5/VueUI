// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//引入组件
import LoginScreen from './pages/LoginScreen';
import MainScreen from './pages/MainScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{title: '管理员登录'}}
        />
        <Stack.Screen
          name="main"
          component={MainScreen}
          options={{title: '主菜单'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
