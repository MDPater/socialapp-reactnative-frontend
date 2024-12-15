import {  StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitBtn from './FormSubmitBtn';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {onLogin} = useAuth();

  const login = async () => {
    const result = await onLogin!(username, password);
    if(result && result.error) {
      alert(result.data.error);
    };
  };

  return <FormContainer>
    <FormInput value={username} onChangeText={setUsername} label='Username' placeholder='myspace.michael'/>
    <FormInput value={password} onChangeText={setPassword} secureTextEntry={true} label='Password' placeholder='******'/>
    <FormSubmitBtn onPress={login} title='Login'/>
  </FormContainer>
}

const styles = StyleSheet.create({});

export default LoginForm