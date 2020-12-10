import React, { useState } from 'react';
import { Image, ScrollView, View, TextInput, Text, TouchableOpacity, Alert, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import InputMask from '../components/InputMask';
import styles from '../styles/classStyles';
import { Feather, AntDesign } from '@expo/vector-icons';
import { formatDate } from '../utils/resources';


const Class: React.FC = () => {
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
        <Text style={styles.textHeader}> Salas</Text>
      </View>
    
          <View style={styles.boxParticipants}>
        <ScrollView horizontal={false}>
       {/* colocar o componente de render de sala aqui */}
        </ScrollView>
      </View>
      <RectButton style={styles.Button} onPress={() => Alert.alert('VOCÊ CLICOU EM MIM!')}>
      <AntDesign name="pluscircle" size={50} color="gray" />
      </RectButton>
      
    
    </ScrollView>
  );
}

export default Class;