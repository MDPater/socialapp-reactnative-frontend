import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Register from './screens/Register'
import Login from './screens/Login'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen component={Register} name='Register'/>
        <Stack.Screen component={Login} name='Login'/>
    </Stack.Navigator>
  )
};

const WelcomeNavigator = () => {
    return <StackNavigator/>;
}

export default WelcomeNavigator