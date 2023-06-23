import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Home from './src/screens/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/review/Login';
import Register from './src/review/Register';
import Asteroid from './src/screens/Asteroid';
import Error from './src/screens/Error';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
          <Stack.Screen name="Asteroid" component={Asteroid} />
          <Stack.Screen options={{headerShown:false}} name="Error" component={Error} />
        </Stack.Navigator>
      </NavigationContainer>
      // <Home/>
    );
  }
}
