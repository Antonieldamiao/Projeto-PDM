import React, { useState } from 'react';
import { Image, ScrollView, View, TextInput, Text, TouchableOpacity, Alert, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import InputMask from '../components/InputMask';
import styles from '../styles/classStyles';
import { Feather, AntDesign } from '@expo/vector-icons';
import { formatDate } from '../utils/resources';
import { useNavigation } from '@react-navigation/native';

const Class: React.FC = () => {
  const navigation = useNavigation();

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
      <RectButton style={styles.Button} onPress={() => navigation.navigate('createClass')}>
      <AntDesign name="pluscircle" size={50} color="gray" />
      </RectButton>
      
    
    </ScrollView>
  );
}

export default Class;