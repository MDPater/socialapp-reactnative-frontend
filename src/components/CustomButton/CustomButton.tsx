import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButton = ({
    buttonStyle='', textStyle='', title='', onPress=()=>{}, loading = false, hasShadow = true
}) => {

    const shadowStyle = {

    }
  return (
    <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        height: 40,
        backgroundColor: '#f123',
        justifyContent: 'center',
        alignItems: 'center',
        borderCurve: 'continuous',
        borderRadius: 20
    },
    text:{

    }
})