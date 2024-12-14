import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FormSubmitBtn = ({title, submitting, onPress}: any) => {
  const backgroundColor = submitting ? 'rgba(27,27,51,0.4)' : 'rgba(27,27,51,1)';

  return (
    <TouchableOpacity onPress={submitting ? null : onPress} style={[styles.container, {backgroundColor}]}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default FormSubmitBtn

const styles = StyleSheet.create({
    container: {
        height: 45,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: 'white'
    }
})