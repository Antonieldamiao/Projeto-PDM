import React, { useState } from 'react';
import { Image, ScrollView, View, TextInput, Text, TouchableOpacity, Alert, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import InputMask from '../components/InputMask';
import styles from '../styles/addParticipantsStyles';
import { Feather } from '@expo/vector-icons';
import { formatDate } from '../utils/resources';


const AddParticipant: React.FC = () => {
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
    <ScrollView style={styles.container}>
      <View style={styles.boxImg}>
        <Text style={styles.textHeader}> Adicionar</Text>
      </View>
      <View style={styles.boxInputs}>
        <Text style={[styles.textInput, { right: '20%' }]}>Email do participante</Text>
        <View style={styles.boxEmail}>
        <TextInput style={[styles.input,{ right: '-40%' }]} />
        <RectButton style={[styles.buttonAdd,{ right: '-40%' }]}>
          <Feather name="plus-square" size={40} color="gray" />
        </RectButton>
      </View>
      <Text style={styles.textHeader}>participante adicionado</Text>
      <View style={[styles.separator,
            { borderColor: 'black'
        }]}/>
          <View style={styles.boxParticipants}>
        <ScrollView horizontal={false}>
       
        </ScrollView>
      </View>
      <RectButton onPress={() => Alert.alert('VOCÊ CLICOU EM MIM!')} style={styles.Button}>
        <Text style={styles.textButton}>Adicionar todos</Text>
      </RectButton>
      </View>
      
    
    </ScrollView>
  );
}

export default AddParticipant;