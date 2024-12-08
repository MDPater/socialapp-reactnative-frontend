import {  StyleSheet, Image, useWindowDimensions, Button, TextInput} from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import CustomInput from '../components/CustomInput';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {onLogin, onRegister} = useAuth();

  const login = async () => {
    const result = await onLogin!(username, password);
    if(result && result.error) {
      alert(result.data);
    };
  };

  const register = async () => {
    const result = await onRegister!(username, "test1@test.com", password);
    if(result && result.error) {
      alert(result.data);
    } else{
      login();
    }
  }

  return (
    <SafeAreaView style={styles.root}>
      <Image style={[styles.logo, {height: height * 0.3}]} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
      <CustomInput placeholder='Username' value={username} setValue={setUsername} secureText={false}/>
      <CustomInput placeholder='Password' value={password} setValue={setPassword} secureText={true}/>
      <Button onPress={login} title='Login' />
      <Button onPress={register} title='Register'/>
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
    maxHeight: 200,
  },
});
export default Login