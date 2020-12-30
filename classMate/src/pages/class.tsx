import React, { useState } from 'react';
import { Image, ScrollView, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import ClassStyles from '../styles/classStyles';
import { Feather, AntDesign } from '@expo/vector-icons';
import { formatDate } from '../utils/resources';
import { useNavigation } from '@react-navigation/native';
import {Avatar, Title} from 'react-native-paper';

const Class: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={ClassStyles.container}>
      <View style={ClassStyles.header}>
        <Avatar.Image style={ClassStyles.iconClass} source={{uri: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/1-historia.jpg'}}/>
        <Title style={ClassStyles.titleClass}>História 3º Ano</Title>
      </View>

      <ScrollView>
        <View style={ClassStyles.showMessage}>
          <TouchableOpacity>
            <Text style={ClassStyles.nameUser}>Guilherme Pereira</Text>
            <Text style={ClassStyles.message}>Estou bem, mano.</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
      <View style={{ flexDirection: 'row' }}>
        <TextInput style={ClassStyles.inputMessage} placeholder="Converse..."
          multiline={true} />
        <RectButton style={ClassStyles.buttonSend} >
          <Feather style={ClassStyles.iconSend} name="send" size={35} color="#FFF" />
        </RectButton>
      </View>
    </View>

  );
}

export default Class;