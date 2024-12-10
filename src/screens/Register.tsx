import { Button, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../context/AuthContext';
import CustomButton from '../components/CustomButton';

const Register = ({navigation} : any) => {
    const {onLogin, onRegister} = useAuth();
    const {height} = useWindowDimensions();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
      //validate inputs on change
      validateForm();
    }, [username, email, password, confirmPassword])

    const login = async () => {
        const result = await onLogin!(username, password);
        if(result && result.error) {
          alert(result.data);
        };
    };
    
    const register = async () => {
        const result = await onRegister!(username, email, password);
        if(result && result.error) {
          alert(result.data);
        } else{
          login();
        }
    };

    const validateForm = () => {
      let errors: any = {};

      //validate Username
      if(!username){
        errors.username = 'No Username Entered';
      } else if(username.length < 3){
        errors.username = 'Username should have atleast 3 characters' ;
      }

      //validate Email
      if(!email){
        
      }

      setErrors(errors);
    }

    return (
    <SafeAreaView style={styles.root}>
      <Image style={[styles.logo, {height: height * 0.4}]} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
      <CustomInput placeholder='Username' value={username} setValue={setUsername} secureText={false}/>
      <CustomInput placeholder='Email' value={email} setValue={setEmail} secureText={false}/>
      <CustomInput placeholder='Password' value={password} setValue={setPassword} secureText={true}/>
      <CustomInput placeholder='Confirm Password' value={confirmPassword} setValue={setConfirmPassword} secureText={true}/>
      <CustomButton onPress={() => {navigation.navigate('Login')}} title='Login'/>
      <Button onPress={register} title='Register' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 12,
      backgroundColor: '#FBFCFC',
      height: '100%',
    },
    logo: {
      width: '70%',
      margin: 8,
      maxWidth: 300,
      maxHeight: 300,
    },
});

export default Register