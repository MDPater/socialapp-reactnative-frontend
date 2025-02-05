import React from 'react'
import Icon from '@expo/vector-icons/Feather'
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
        tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            paddingTop: 20,
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
            <Icon name='home'color="#1b1b33" size={25} />
          ),
        }}/>
        <Tab.Screen name="Create" component={Create} options={{
          tabBarIcon: ({focused}) => (
            <Icon name='plus-circle'color="#1b1b33" size={25} />
          ),
        }}/>
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({focused}) => (
            <Icon name='user'color="#1b1b33" size={25} />
          ),
        }}/>
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