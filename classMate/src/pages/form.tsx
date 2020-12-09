import React, { useState } from 'react';
import { Image, ScrollView, View, TextInput, Text, TouchableOpacity, Alert, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import InputMask from '../components/InputMask';
import FormStyles from '../styles/formStyles';
import {Feather} from '@expo/vector-icons';
import {formatDate} from '../utils/resources';


const Form: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [isVisible, setVisible] = useState(false);
  const [dateNow, setDateNow] = useState(formatDate(new Date()))

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
        <Text style={[FormStyles.textInput,{right:'28%'}]}>Foto</Text>
        <View style={FormStyles.viewButtonImage}>
          <Button onPress={()=>{}} title="Adicionar imagem"/>
        </View>
        <Text style={[FormStyles.textInput,{right:'24%'}]}>E-mail</Text>
        <TextInput style={FormStyles.input}/>
        <Text style={[FormStyles.textInput,{right:'26%'}]}>Nome</Text>
        <TextInput style={FormStyles.input}/>
        <Text style={[FormStyles.textInput,{right:'20%'}]}>Sobrenome</Text>
        <TextInput style={FormStyles.input}/>
        <Text style={[FormStyles.textInput,{right:'24%'}]}>Telefone</Text>
        <InputMask maxLength={14}
          value={phone}
          mask="phone"
          inputMaskChange={(text: string) => custom(text)}
          style={FormStyles.input}
        />
        <Text style={[FormStyles.textInput,{right:'10%'}]}>Data de Nascimento</Text>
        <TouchableOpacity onPress={showDate} style={FormStyles.input}>
          <Text style={FormStyles.textDate}>{dateNow}</Text>
        </TouchableOpacity>
        <DateTimePickerModal isVisible={isVisible} mode="date" onConfirm={dateConfirm} onCancel={hideDate} />
        <Text style={[FormStyles.textInput,{right:'25%'}]}>Senha</Text>
        <TextInput style={FormStyles.input} secureTextEntry={true} />
        <RectButton onPress={()=>Alert.alert('VOCÊ CLICOU EM MIM!')} style={FormStyles.registerButton}>
          <Text style={FormStyles.textRegister}>Cadastrar</Text>
        </RectButton>
      </View>

    </ScrollView>
  );
}

export default Form;