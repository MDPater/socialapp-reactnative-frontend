import { StyleSheet, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitBtn from './FormSubmitBtn';

const RegisterForm = () => {
    const {onLogin, onRegister} = useAuth();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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

    return <FormContainer>
      <FormInput title='Username' placeholder='myspace.michael'/>
      <FormInput title='Email' placeholder='test@example.com'/>
      <FormInput title='Password' placeholder='******'/>
      <FormInput title='Confirm Password' placeholder='******'/>
      <FormSubmitBtn title='Sign up' />
    </FormContainer>
}

const styles = StyleSheet.create({});

export default RegisterForm