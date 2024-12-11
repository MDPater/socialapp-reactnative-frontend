import { StyleSheet, Dimensions, View , Text, ScrollView} from 'react-native'
import React from 'react'
import FormHeader from '../components/Forms/FormHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormSelectorBtn from '../components/Forms/FormSelectorBtn'
import LoginForm from '../components/Forms/LoginForm'
import RegisterForm from '../components/Forms/RegisterForm'

const Welcome = () => {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 100}}>
        <View style={{height: 100}}>
            <FormHeader 
                leftHeading='Welcome'
                rightHeading='Back'
                subHeading='Snap-Share'
            />
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
            <FormSelectorBtn style={styles.borderLeft} backgroundColor='rgba(27,27,51,1)' title='Login'/>
            <FormSelectorBtn style={styles.borderRight} backgroundColor='rgba(27,27,51,0.4)' title='Sign up' />
        </View>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
            <LoginForm/>
            <RegisterForm/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
    borderLeft: {
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    borderRight: {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    }
})