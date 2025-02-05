import React from 'react'
import Icon from '@react-native-vector-icons/common'
import {StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';
import Profile from './Profile';
import Create from './Create';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: '#fffff1',
            borderRadius: 25,
            height: 90,
            ...styles.shadow
          }
      }}
    >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({focused}) => (
            <Icon name='home'color="#ff0000" size={20} />
          ),
        }}/>
        <Tab.Screen name="Create" component={Create}/>
        <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#1b1b33',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})

export default Tabs