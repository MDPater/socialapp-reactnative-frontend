import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen component={Home} name='Home'/>
    </Stack.Navigator>
  )
}

const HomeNavigator = () => {
    return <StackNavigator/>;
}

export default HomeNavigator