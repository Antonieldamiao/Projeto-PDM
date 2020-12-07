import React from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import LoginStyles from '../styles/loginStyles';



const Login: React.FC = () => {
  return (
    <View style={LoginStyles.container}>
      <Image style={LoginStyles.img} source={require('../images/logo.png')}/>

      <Text style={LoginStyles.textInput}>E-mail</Text>
      <TextInput style={LoginStyles.input}/>

      <Text style={LoginStyles.textInput}>Senha</Text>
      <TextInput style={LoginStyles.input} secureTextEntry={true}/>

      <RectButton style={LoginStyles.loginButton}>
        <Text style={LoginStyles.textButton}>Login</Text>
      </RectButton>

      <RectButton>
        <Text style={LoginStyles.singUpButton}>Sing Up</Text>
      </RectButton>
    </View>
  );
}

export default Login;