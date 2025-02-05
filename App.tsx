import { AuthProvider, useAuth } from './src/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogedOutNavigator from './src/LogedOutNavigator';
import LogedInNavigator from './src/LogedInNavigator';

export default function App() {
  return (
    <AuthProvider>
        <Layout>
        </Layout>
    </AuthProvider>
  );
}


export const Layout = () => {
  const { authState} = useAuth();
  return (<NavigationContainer>
      {authState?.authenticated ? 
        <LogedInNavigator/> : <LogedOutNavigator/>}
  </NavigationContainer>);
};