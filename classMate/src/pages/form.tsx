import React, { useState } from 'react';
import { Image, ScrollView, View, TextInput, Text, TouchableOpacity, Alert, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';
import InputMask from '../components/inputMask';
import FormStyles from '../styles/formStyles';
import { formatDate } from '../utils/resources';
import api from '../utils/api';
import * as ImagePicker from 'expo-image-picker';


const Form: React.FC = () => {
  const navigation = useNavigation();

  const [foto, setFoto] = useState('');
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [senha, setSenha] = useState('');

  const [errorDate, setErrorDate] = useState(false);
  const [errorRequired, setErrorRiqured] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorUserExist, setErrorUserExist] = useState(false);
  const [errorImage, setErrorImage] = useState(false);

  const [phone, setPhone] = useState('');
  const [isVisible, setVisible] = useState(false);
  const [dateNow, setDateNow] = useState(formatDate(new Date()))

  async function registerUser() {
    const data = new FormData();
    data.append('email', email);
    data.append('nome', nome);
    data.append('sobrenome', sobrenome);
    data.append('telefone', phone);
    data.append('dataNascimento', dateNow);
    data.append('senha', senha);
    data.append('foto', {
      name: foto,
      type: 'image/*',
      uri: foto,
    } as any);
    let value = dateNow.split('/');
    let year = value[2];
    if ((email.trim().length <= 0) || (nome.trim().length <= 0) || (sobrenome.trim().length < 0)
      || (phone.trim().length <= 0) || (senha.trim().length <= 0)) {
      setErrorDate(false);
      setErrorEmail(false);
      setErrorPassword(false);
      setErrorUserExist(false);
      setErrorImage(false);
      setErrorRiqured(true);

    } else if (new Date().getFullYear() - Number(year) < 11) {
      setErrorRiqured(false);
      setErrorEmail(false);
      setErrorPassword(false);
      setErrorUserExist(false);
      setErrorImage(false);
      setErrorDate(true);

    } else if (email.search('@') < 0) {
      setErrorRiqured(false);
      setErrorDate(false);
      setErrorPassword(false);
      setErrorUserExist(false);
      setErrorImage(false);
      setErrorEmail(true);

    } else if (senha.length < 8) {
      setErrorRiqured(false);
      setErrorDate(false);
      setErrorEmail(false);
      setErrorUserExist(false);
      setErrorImage(false);
      setErrorPassword(true);
    } else if (foto.trim().length <= 0) {
      setErrorRiqured(false);
      setErrorDate(false);
      setErrorEmail(false);
      setErrorPassword(false);
      setErrorUserExist(false);
      setErrorImage(true);

    }
    else {
      await api.post('http://192.168.0.108:8080/classmate/user', data).then(
        resp => {
          navigation.reset({
            index: 0,
            routes:[
              {
                name:'form',
              }
            ]
          })
          navigation.navigate('home', { message: true });
        }
      ).catch(err => {
        setErrorRiqured(false);
        setErrorDate(false);
        setErrorEmail(false);
        setErrorPassword(false);
        setErrorImage(false);
        setErrorUserExist(true);
      });
      ;

    }
  }

  async function selectImage() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status != 'granted') {
      Alert.alert('PERMISSÃO DE ACESSO', 'Libere o acesso a câmera');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync(
      {
        allowsEditing: false,
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      }
    );

    if (result.cancelled) {
      return;
    }

    const { uri } = result;
    setFoto(uri);
  }

  function custom(value: string) {
    setPhone(value);
  }

  const showDate = () => {
    setVisible(true);
  };

  const hideDate = () => {
    setVisible(false);
  };

  const dateConfirm = (date: Date) => {
    setDateNow(formatDate(date));
    hideDate();
  };

  return (
    <ScrollView style={FormStyles.container}>
      <View style={FormStyles.boxImg}>
        <Image style={FormStyles.imgLogo} source={require('../images/logo.png')} />
      </View>
      <View style={FormStyles.boxInputs}>
        <Text style={[FormStyles.textInput, { right: '28%' }]}>Foto</Text>
        {foto.trim().length > 0 && (
          <Image style={FormStyles.selectImg} source={{ uri: foto }} />
        )}
        <View style={FormStyles.viewButtonImage}>
          <Button onPress={selectImage} title="Adicionar imagem" />
        </View>
        <Text style={[FormStyles.textInput, { right: '24%' }]}>E-mail</Text>
        <TextInput style={FormStyles.input} onChangeText={setEmail} />
        <Text style={[FormStyles.textInput, { right: '26%' }]}>Nome</Text>
        <TextInput style={FormStyles.input} onChangeText={setNome} />
        <Text style={[FormStyles.textInput, { right: '20%' }]}>Sobrenome</Text>
        <TextInput style={FormStyles.input} onChangeText={setSobrenome} />
        <Text style={[FormStyles.textInput, { right: '24%' }]}>Telefone</Text>
        <InputMask maxLength={14}
          value={phone}
          mask="phone"
          inputMaskChange={(text: string) => custom(text)}
          style={FormStyles.input}
        />
        <Text style={[FormStyles.textInput, { right: '10%' }]}>Data de Nascimento</Text>
        <TouchableOpacity onPress={showDate} style={FormStyles.input}>
          <Text style={FormStyles.textDate}>{dateNow}</Text>
        </TouchableOpacity>
        <DateTimePickerModal isVisible={isVisible} mode="date" onConfirm={dateConfirm} onCancel={hideDate} />
        <Text style={[FormStyles.textInput, { right: '25%' }]}>Senha</Text>
        <TextInput style={FormStyles.input} secureTextEntry={true} onChangeText={setSenha} />
        {errorDate && (
          <Text style={FormStyles.errorText}>Só é permitido usuários de 11 anos à cima</Text>
        )}
        {errorRequired && (
          <Text style={FormStyles.errorText}>Preencha todos os campos</Text>
        )}
        {errorEmail && (
          <Text style={FormStyles.errorText}>Informe um e-mail válido</Text>
        )}
        {errorPassword && (
          <Text style={FormStyles.errorText}>A senha deve ter no mínimo 8 dígitos</Text>
        )}
        {errorUserExist && (
          <Text style={FormStyles.errorText}>O e-mail já está cadastrado</Text>
        )}
        {errorImage && (
          <Text style={FormStyles.errorText}>Escolha uma foto</Text>
        )}

        <RectButton onPress={registerUser} style={FormStyles.registerButton}>
          <Text style={FormStyles.textRegister}>Cadastrar</Text>
        </RectButton>
      </View>

    </ScrollView>
  );
}

export default Form;