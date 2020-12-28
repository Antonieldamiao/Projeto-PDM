import React, { useState } from 'react';
import { Image, ScrollView, View, TextInput, Text, TouchableOpacity, Alert, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';
import InputMask from '../components/InputMask';
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

    await api.post('/classmate/user', data);
    navigation.navigate('home');

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
        <RectButton onPress={registerUser} style={FormStyles.registerButton}>
          <Text style={FormStyles.textRegister}>Cadastrar</Text>
        </RectButton>
      </View>

    </ScrollView>
  );
}

export default Form;