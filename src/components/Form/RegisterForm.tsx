import { StyleSheet, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitBtn from './FormSubmitBtn';

import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().trim().min(3, 'Invalid name!').required('Username is required'),
  email: Yup.string().email('Invalid Email!').required('Email is required!'),
  password: Yup.string().trim().min(8, 'Password is too short!').required('Password is required'),
  confirmPassword: Yup.string().equals([Yup.ref('password'), null], 'Password does not match!')
})

const RegisterForm = () => {
    const {onLogin, onRegister} = useAuth();

    const login = async (username : any, password : any) => {
        const result = await onLogin!(username, password);
        if(result && result.error) {
          alert(result.data);
        };
    };
    
    const register = async (username: any, email: any, password: any) => {
        const result = await onRegister!(username, email, password);
        if(result && result.error) {
          alert(result.data);
        } else{
          login(username, password);
        }
    };

    const userInfo={
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }

    return <FormContainer>
      <Formik initialValues={userInfo} validationSchema={validationSchema} onSubmit={(values, formikActions)=>{
        register(values.username, values.email, values.password);
        setTimeout(()=>{
            formikActions.resetForm();
            formikActions.setSubmitting(false);
        }, 3000)
      }}>
        {({values,errors, touched, handleChange,isSubmitting, handleBlur, handleSubmit}) => { 
          
          const {username, email, password, confirmPassword} = values;
          return <>
          <FormInput 
            value={username} 
            error={touched.username && errors.username}
            onblur={handleBlur('username')}
            onChangeText={handleChange('username')}
            autoCapitalize='none'
            label='Username' 
            placeholder='myspace.michael'
          />
          <FormInput 
            value={email}
            error={touched.email && errors.email}
            onblur={handleBlur('email')}
            onChangeText={handleChange('email')} 
            autoCapitalize='none' 
            label='Email' 
            placeholder='test@example.com'
          />
          <FormInput 
            value={password}
            error={touched.password && errors.password}
            onblur={handleBlur('password')}
            onChangeText={handleChange('password')} 
            secureTextEntry={true} label='Password' 
            placeholder='******'/>
          <FormInput 
            value={confirmPassword} 
            error={touched.confirmPassword && errors.confirmPassword}
            onblur={handleBlur('confirmPassword')}
            onChangeText={handleChange('confirmPassword')}
            secureTextEntry={true} 
            label='Confirm Password' 
            placeholder='******'/>
          <FormSubmitBtn submitting={isSubmitting} onPress={handleSubmit} title='Sign up'/>
          </>
        }}</Formik>
    </FormContainer>
}

const styles = StyleSheet.create({});

export default RegisterForm