import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Create = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#D5F2E3'}}>
        <StatusBar
                backgroundColor="#1B1B33"
        />
      <Text>Create</Text>
    </SafeAreaView>
  )
}

export default Create