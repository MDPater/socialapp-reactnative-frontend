import { Button, StyleSheet, useWindowDimensions, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../../components/CustomInput';
import { useAuth } from '../../context/AuthContext';

const RegisterForm = ({navigation} : any) => {
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
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid.';
      }

      //validate Password
      if(!password){
        errors.password ='Password is required';
      }else if(password.length < 6){
        errors.password = 'Password must be atleast 6 Characters';
      }else if(password == confirmPassword){
        errors.confirmPassword = 'Password doesnt match';
      }

      setErrors(errors);
      setIsFormValid(Object.keys(errors).length == 0);
    }

    const handleSubmit = () => {
    if (isFormValid) {

      // Form is valid, perform the submission logic
      console.log('Form submitted successfully!');
    }else{
          
        // Form is invalid, display error messages
        console.log('Form has errors. Please correct them.');
    }
  };

    return <View style={styles.root}>
      <CustomInput placeholder='Username' value={username} setValue={setUsername} secureText={false}/>
      <CustomInput placeholder='Email' value={email} setValue={setEmail} secureText={false}/>
      <CustomInput placeholder='Password' value={password} setValue={setPassword} secureText={true}/>
      <CustomInput placeholder='Confirm Password' value={confirmPassword} setValue={setConfirmPassword} secureText={true}/>
      <Button onPress={handleSubmit} title='Register' />
    </View>
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      justifyContent:'center',
      width: Dimensions.get('window').width,
    }
});

export default RegisterForm