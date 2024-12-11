import { Dimensions, KeyboardAvoidingView, StyleSheet } from 'react-native'
import React from 'react'

const FormContainer = ({children} : any) => {
  return <KeyboardAvoidingView 
    enabled 
    behavior='padding' 
    style={styles.container}
    >
      {children}
  </KeyboardAvoidingView>
}

export default FormContainer

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 20
    }
})