import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Welcome from './screens/Welcome';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
      <Stack.Screen component={Welcome} name='Welcome'/>
    </Stack.Navigator>
  )
};

const WelcomeNavigator = () => {
    return <StackNavigator/>;
}

export default WelcomeNavigator