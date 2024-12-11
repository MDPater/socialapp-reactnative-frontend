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
      alert(result.data);
    };
  };

  return <FormContainer>
    <FormInput title='Username' placeholder='myspace.michael'/>
    <FormInput title='Password' placeholder='******'/>
    <FormSubmitBtn title='Login'/>
  </FormContainer>
}

const styles = StyleSheet.create({});

export default LoginForm