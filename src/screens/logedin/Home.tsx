import { Text, Button, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const {onLogout} = useAuth();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#D5F2E3'}}>
      <StatusBar
              backgroundColor="#1B1B33"
      />
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home