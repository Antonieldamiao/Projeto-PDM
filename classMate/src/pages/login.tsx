import React, { useState } from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import LoginStyles from '../styles/loginStyles';
import api from '../utils/api';



const Login: React.FC = () => {
  const [errorRequered, setErrorRequered] = useState(false);
  const [errorAcess, setErrorAcess] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigation = useNavigation();

  function navForm() {
    navigation.navigate('form');
  }

  async function navLogin() {

    if ((email.trim().length <= 0) || (password.trim().length <= 0)) {
      setErrorAcess(false);
      setErrorRequered(true);
    } else {
      await api.post('/classmate/user', { email: email, senha: password }).then(
        resp => {
          console.log(resp.status)
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'home',
              }
            ],
          })
          navigation.navigate('home');
        }
      ).catch(
        err=>{
          console.log(err);
          setErrorRequered(false);
          setErrorAcess(true);
        }
      );
    }

  }



  return (
    <View style={LoginStyles.container}>
      <Image style={LoginStyles.img} source={require('../images/logo.png')} />

      <Text style={LoginStyles.textInput}>E-mail</Text>
      <TextInput style={LoginStyles.input} onChangeText={setEmail} />

      <Text style={LoginStyles.textInput}>Senha</Text>
      <TextInput style={LoginStyles.input} secureTextEntry={true} onChangeText={setPassword} />

      {errorRequered && (
        <Text style={LoginStyles.errorText}>Preencha todos os campos</Text>
      )}
      {errorAcess && (
        <Text style={LoginStyles.errorText}>E-mail ou senha inválidos</Text>
      )}

      <RectButton style={LoginStyles.loginButton} onPress={navLogin}>
        <Text style={LoginStyles.textButton}>Login</Text>
      </RectButton>

      <RectButton onPress={navForm}>
        <Text style={LoginStyles.singUpButton}>Sing Up</Text>
      </RectButton>
    </View>
  );
}

export default Login;