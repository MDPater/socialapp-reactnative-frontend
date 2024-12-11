import { StyleSheet, Text, TextInput } from 'react-native'
import React from 'react'

const FormInput = ({placeholder, title}:any) => {
  return <>
    <Text style={styles.title}>{title}</Text>
    <TextInput style={styles.input} placeholder={placeholder}/>
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
        marginBottom: 20
    },
    title:{
        fontWeight: 'bold'
    }
})