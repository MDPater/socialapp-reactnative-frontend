import {  StyleSheet, Image, useWindowDimensions, Button} from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import CustomInput from '../components/CustomInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';

const Login = ({navigation} : any) => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {onLogin} = useAuth();

  const login = async () => {
    const result = await onLogin!(username, password);
    if(result && result.error) {
      alert(result.data);
    };
  };

  return (
    <SafeAreaView style={styles.root}>
      <Image style={[styles.logo, {height: height * 0.4}]} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
      <CustomInput placeholder='Username' value={username} setValue={setUsername} secureText={false}/>
      <CustomInput placeholder='Password' value={password} setValue={setPassword} secureText={true}/>
      <CustomButton onPress={() => {navigation.goBack('Register')}} title='Register'/>
      <Button onPress={login} title='Login' />
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
export default Login