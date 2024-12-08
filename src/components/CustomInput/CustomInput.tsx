import { View, Text , TextInput, StyleSheet} from 'react-native'
import React from 'react'

const CustomInput  = ({value, setValue, placeholder, secureText}: 
    {value: string, setValue: any, placeholder: string, secureText: boolean}) => {
    return(
    <View style={styles.container}>
        <TextInput 
            value={value} 
            onChangeText={setValue} 
            style={styles.input} 
            placeholder={placeholder} 
            secureTextEntry={secureText}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    input:{},
});

export default CustomInput