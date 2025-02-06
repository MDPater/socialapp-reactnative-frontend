import React from 'react'
import Icon from '@expo/vector-icons/Feather'
import {StyleSheet, View} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';
import Profile from './Profile';
import Create from './Create';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            paddingTop: 25,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: '#1B1B33',
            borderRadius: 25,
            height: 90,
            ...styles.shadow
          }
      }}
    >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon name='home'color="#D5F2E3" size={25} 
                style={{color: focused ? '#FF8811' : '#D5F2E3'}}
              />
            </View>
          ),
        }}/>
        <Tab.Screen name="Create" component={Create} options={{
          tabBarIcon: ({focused}) => (
            <View style={{height: 50,width: 100, alignItems: 'center', justifyContent: 'center'}}>
              <Icon name='plus-circle' size={50} 
                style={{color: focused ? '#FF8811' : '#D5F2E3'}}
              />
            </View>
          ),
        }}/>
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon name='user'color="#D5F2E3" size={25}
                style={{color: focused ? '#FF8811' : '#D5F2E3'}}
              />
            </View>
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