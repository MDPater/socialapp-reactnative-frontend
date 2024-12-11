import { AuthProvider, useAuth } from './src/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeNavigator from './src/WelcomeNavigator';
import HomeNavigator from './src/HomeNavigator';


const Stack = createNativeStackNavigator();

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
        <HomeNavigator/> : <WelcomeNavigator/>}
  </NavigationContainer>);
};