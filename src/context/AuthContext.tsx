import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { ref } from "yup";

interface AuthProps {
    authState?: { token: string | null; authenticated: boolean | null};
    onRegister?: (username: string, email: string, password: string) => Promise<any>;
    onLogin?: (username: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
}

const ACCESS_TOKEN_KEY = 'my-jwt';
export const API_URL = 'https://snap-share.net'
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}: any) => {
    const [authState, setAuthState] = useState<{
        token: string | null;
        authenticated: boolean | null;
    }>({
        token: null,
        authenticated: null
    });

    useEffect(() => {
        const loadToken = async () => {
            const accesstoken = await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
            console.log("Authentication Token: ", accesstoken)

            if(accesstoken){
                axios.defaults.headers.common['Authorization'] = `Bearer ${accesstoken}`;

                setAuthState({
                    token: accesstoken,
                    authenticated: true,
                })
            }
        }
        loadToken();
    }, [])

    const register = async (username: string, email: string, password: string) => {
        try{
            const result =  await axios.post(`${API_URL}/auth/register`, {username: username,email: email,password: password})
            console.log("register - result: ", result.data)
            return result.data;
        } catch(e) {
            console.log((e as any).response.data.error)
            return {error: true, msg: (e as any).response.data.error};
        }
    };

    const login = async (username: string, password: string) => {
        try{
            const result = await axios.post(`${API_URL}/auth/login`, {username: username, password: password});
            console.log("login - result: ", result.data);
            console.log("token: ", result.data.accessToken);

            setAuthState({
                token: result.data.accessToken,
                authenticated: true,
            })

            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.accessToken}`;

            await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, result.data.accessToken);

        } catch(e) {
            console.log("catch: "+(e as any).response.data.error)
            return {error: true, msg: (e as any).response.data.error}
        }
    };

    const logout = async () => {

        try {
            //delete session in DB
            const result = await axios.post(`${API_URL}/auth/logout`);
            console.log("logout result: ", result.data);

            //Delete token from storage
            await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);

            //Update axios header
            axios.defaults.headers.common['Authorization'] = '';

            //Reset auth state
            setAuthState({
                token: null,
                authenticated: false,
            })

            return result.data;
        } catch (e) {
            console.log("catch: "+(e as any).response.data.error)
            return e;
        }
    };

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}