import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const {onLogout} = useAuth();
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={onLogout} title='Sign Out'/>
    </View>
  )
}

export default Home