import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Welcome from './screens/logedout/Welcome';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{navigationBarColor: '#D5F2E3', headerShown: false}}>
      <Stack.Screen component={Welcome} name='Welcome'/>
    </Stack.Navigator>
  )
};

const LogedOutNavigator = () => {
    return <StackNavigator/>;
}

export default LogedOutNavigator