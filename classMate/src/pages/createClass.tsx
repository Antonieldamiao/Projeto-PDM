import React, { useState } from 'react';
import { Image, ScrollView, View, TextInput, Text, TouchableOpacity, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import ClassStyle from '../styles/createClassStyles';



const CreateClass: React.FC = () => {

  return (
    <ScrollView style={ClassStyle.container}>
      <View style={ClassStyle.boxForm}>
        <Image source={require('../images/logo.png')} />
        <Text style={[ClassStyle.textInput, {right: '16%'}]}>Escolha o ícone</Text>
        <View style={ClassStyle.buttonImg}>
          <Button onPress={() => { }} title="Icone" />
        </View>

        <Text style={[ClassStyle.textInput, { right: '25%' }]}>Nome</Text>
        <TextInput style={ClassStyle.input} />

        <Text style={[ClassStyle.textInput, { right: '23%' }]}>Assunto</Text>
        <TextInput style={ClassStyle.input} />

        <Text style={[ClassStyle.textInput, { right: '22%' }]}>Descrição</Text>
        <TextInput multiline={true} style={[ClassStyle.inputArea, ClassStyle.textInputArea]} />

        <RectButton onPress={() => { }} style={[ClassStyle.registerButton]}>
          <Text style={ClassStyle.textRegister}>Criar Sala</Text>
        </RectButton>
      </View>
    </ScrollView>
  );
}

export default CreateClass;