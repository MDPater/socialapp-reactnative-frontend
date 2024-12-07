import {  StyleSheet, Image, useWindowDimensions, Button, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_URL, useAuth } from '../context/AuthContext';
import CustomInput from '../components/CustomInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

const Login = () => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {onLogin, onRegister} = useAuth();

  const testcall = async () =>{
        const result = await axios.get(`${API_URL}/status`);
        console.log(result.data);
  };
  const login = async () => {
    const result = await onLogin!(username, password);
    if(result){
      alert("success")
    }
    if(result && result.error) {
      alert(result.msg);
    };
  };

  const register = async () => {
    const result = await onRegister!(username, email, password);
    if(result && result.error) {
      alert(result.msg);
    } else{
      login();
    }
  }

  return (
    <SafeAreaView style={styles.root}>
      <Image style={[styles.logo, {height: height * 0.3}]} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
      <TextInput placeholder='Username' value={username} onChangeText={setUsername} secureTextEntry={false}/>
      <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry={true}/>
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
    maxHeight: 200,
  },
});
export default Login