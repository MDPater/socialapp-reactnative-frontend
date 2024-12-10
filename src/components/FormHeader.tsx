import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FormHeader = () => {
  return <>
  <View style={styles.container}>
      <Text style={styles.heading}>Welcom{''}</Text>
      <Text style={styles.heading}>Back</Text>
    </View>
    <Text style={styles.subHeading}>Snap-Share</Text>
  </>
}

export default FormHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1b1b33'
    },
    subHeading: {
        fontSize: 18,
        color: '1b1b33',
        textAlign:'center'
    }
})