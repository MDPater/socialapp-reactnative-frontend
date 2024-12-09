import { Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const {onLogout} = useAuth();
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button onPress={onLogout} title='Sign Out'/>
    </SafeAreaView>
  )
}

export default Home