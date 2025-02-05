import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Tabs from './screens/logedin/Tabs';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName='Tabs'>
      <Stack.Screen component={Tabs} name='Tabs'/>
    </Stack.Navigator>
  )
}

const LogedInNavigator = () => {
    return <StackNavigator/>;
}

export default LogedInNavigator