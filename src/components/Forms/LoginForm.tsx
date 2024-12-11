import {  StyleSheet, useWindowDimensions, Button, Dimensions, View} from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import CustomInput from '../../components/CustomInput';

const LoginForm = ({navigation} : any) => {
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

  return <View style={styles.root}>
      <CustomInput placeholder='Username' value={username} setValue={setUsername} secureText={false}/>
      <CustomInput placeholder='Password' value={password} setValue={setPassword} secureText={true}/>
      <Button onPress={login} title='Login' />
    </View>
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent:'center',
    width: Dimensions.get('window').width,
  },
});
export default LoginForm