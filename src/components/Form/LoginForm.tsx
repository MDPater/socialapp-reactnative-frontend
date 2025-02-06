import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useAuth();

  const login = async () => {
    const result = await onLogin!(username, password);
    if (result.error) {
      alert(result.msg);
    } else {
      console.log(result.msg);
    }
  };

  return (
    <FormContainer>
      <FormInput
        value={username}
        onChangeText={setUsername}
        label="Username"
        placeholder="myspace.michael"
      />
      <FormInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        label="Password"
        placeholder="******"
      />
      <FormSubmitBtn onPress={login} title="Login" style={styles.buttons} />
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#1B1B33",
  },
});

export default LoginForm;
