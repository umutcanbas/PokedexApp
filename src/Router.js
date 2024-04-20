import { View, Text } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Pages/Home/Home'
import Detail from './Pages/Detail/Detail'

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="DetailPage" component={Detail} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Router