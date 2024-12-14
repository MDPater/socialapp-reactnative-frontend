import { StyleSheet, View , ScrollView, Animated, Dimensions, ScrollViewProps} from 'react-native'
import React, { RefObject, useRef } from 'react'
import FormHeader from '../components/Form/FormHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormSelectorBtn from '../components/Form/FormSelectorBtn'
import LoginForm from '../components/Form/LoginForm'
import RegisterForm from '../components/Form/RegisterForm'

const {width} = Dimensions.get('window');

const Welcome = () => {
    const animation = useRef(new Animated.Value(0)).current;
    const scrollView = useRef();

    const rightHeaderOpacity = animation.interpolate({
        inputRange: [0, width],
        outputRange: [1, 0]
    });

    const leftHeaderTranslateX = animation.interpolate({
        inputRange: [0, width],
        outputRange: [0, 35]
    });

    const rightHeaderTranslateY = animation.interpolate({
        inputRange: [0, width],
        outputRange: [0, -20]
    });
    
    const loginColor = animation.interpolate({
        inputRange: [0, width],
        outputRange: ['rgba(27,27,51,1)', 'rgba(27,27,51,0.4)']
    });

    const signupColor = animation.interpolate({
        inputRange: [0, width],
        outputRange: ['rgba(27,27,51,0.4)', 'rgba(27,27,51,1)']
    });
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 100}}>
        <View style={{height: 100}}>
            <FormHeader 
                leftHeading='Welcome '
                rightHeading='Back'
                subHeading='to Snap Share'
                rightHeaderOpacity={rightHeaderOpacity}
                leftHeaderTranslateX={leftHeaderTranslateX}
                rightHeaderTranslateY={rightHeaderTranslateY}
            />
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20}}>
            <FormSelectorBtn 
                style={styles.borderLeft} 
                backgroundColor={loginColor} 
                title='Login'
                onPress={() => scrollView.current.scrollTo({x: 0})}
            />
            <FormSelectorBtn 
                style={styles.borderRight} 
                backgroundColor={signupColor} 
                title='Sign up'
                onPress={() => scrollView.current.scrollTo({x: width})}
            />
        </View>
        <ScrollView 
            ref={scrollView}
            horizontal 
            pagingEnabled 
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event([
                {nativeEvent: {contentOffset: {x: animation}}},
            ], {useNativeDriver: false})}
        >
            <ScrollView>
                <LoginForm/>
            </ScrollView>
            <ScrollView>
                <RegisterForm/>
            </ScrollView>
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