import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const FormInput = (props : any) => {
  const {label, placeholder, error} = props
  return <>
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text> 
    <TextInput {...props} style={styles.input} placeholder={placeholder}/>
    {error ? <Text style={{color: 'red', fontSize: 12}}>{error}</Text> :null}
  </View>
  </>
}

export default FormInput

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#1b1b33',
        fontSize: 16,
        borderRadius: 15,
        paddingLeft: 10,
    },
    label:{
        fontWeight: 'bold'
    },
    container:{
      marginBottom: 20
    }
})