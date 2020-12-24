import React, { useState } from 'react';
import { Image, ScrollView, View, TextInput, Text, TouchableOpacity, Alert, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import classStyles from '../styles/detailsStyles';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';


const CreateClass: React.FC = (): JSX.Element => {

  const navigation = useNavigation();

  function addparticipant(){
    navigation.navigate('addParticipant');
  }

  
  return (
    <View style={classStyles.container}>
      <View style={classStyles.boxImg}>
        <Image style={classStyles.image} source={require("../assests/imagem/cod.png")}></Image>
        <Text style={[classStyles.textHeader,{ alignSelf: 'flex-start',
        marginTop: -40 ,marginLeft: 10, marginBottom: 30 , color: 'white'}]}> nome da sala</Text>
      </View>
      <View style={classStyles.boxInputs}>
        <Text style={[classStyles.textInput, { right: '25%' }]}>Local de estudos</Text>
        <RectButton style={classStyles.buttonMap} onPress={()=> alert("voce abriu o mapa")}>
        <Image style={classStyles.image} source={require("../assests/imagem/map.png")}></Image>
        </RectButton>
        
        <Text style={[classStyles.textInput, { right: '30%' }]}>Participantes</Text>
        </View>
           <View style={classStyles.boxParticipants}>    
           <ScrollView horizontal='false'>

           </ScrollView>
      </View>
      <RectButton onPress={()=> addparticipant() } style={[classStyles.buttonAdd,{ right: -100, marginTop: -20  }]}>
        <Text style={classStyles.textAdd}>adicionar</Text>
         <Feather name="plus" size={20} color="white" /> 
        </RectButton> 
      <RectButton onPress={() => navigation.navigate('class')} style={classStyles.registerButton}>
        <Text style={classStyles.textRegister}>Criar Sala</Text>
      </RectButton>
      </View>
      
  );
}

export default CreateClass;