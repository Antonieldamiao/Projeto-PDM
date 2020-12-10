import React, { useState } from 'react';
import { Image, ScrollView, View, TextInput, Text, TouchableOpacity, Alert, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import InputMask from '../components/InputMask';
import classStyles from '../styles/CreateClassStyles';
import { Feather } from '@expo/vector-icons';
import { formatDate } from '../utils/resources';


const CreateClass: React.FC = () => {
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
    <ScrollView style={classStyles.container}>
      <View style={classStyles.boxImg}>
        <Text style={classStyles.textHeader}> Criar Sala</Text>
      </View>
      <View style={classStyles.boxInputs}>
        <Text style={[classStyles.textInput, { right: '25%' }]}>Nome da Turma</Text>
        <TextInput style={classStyles.input} />
        <Text style={[classStyles.textInput, { right: '34%' }]}>Descrição</Text>
        <TextInput style={classStyles.input} />

        <Text style={[classStyles.textInput, { right: '20%' }]}>Email do participante</Text>
        <View style={classStyles.boxEmail}>
        <TextInput style={[classStyles.input,{ right: '-40%' }]} />
        <RectButton style={[classStyles.buttonAdd,{ right: '-40%' }]}>
          <Feather name="plus-square" size={40} color="gray" />
        </RectButton>
      </View>
      <Text style={classStyles.textHeader}>participante adicionado</Text>
      <View style={[classStyles.separator,
            { borderColor: 'black'
        }]}/>
           <View style={classStyles.boxParticipants}>
        <ScrollView horizontal={false}>
       
        </ScrollView>
      </View>
      <RectButton onPress={() => Alert.alert('VOCÊ CLICOU EM MIM!')} style={classStyles.registerButton}>
        <Text style={classStyles.textRegister}>Criar Sala</Text>
      </RectButton>
      </View>
      
    
    </ScrollView>
  );
}

export default CreateClass;