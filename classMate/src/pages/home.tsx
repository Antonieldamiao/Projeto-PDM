import React, { useState } from 'react';
import { ScrollView, View, Modal, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Avatar, Title} from 'react-native-paper';
import HeaderSearch from '../components/headerSearch';
import HomeStyle from '../styles/homeStyles';
import { ObjectRoutes } from '../utils/interfaces';

const Home: React.FC = () => {

  const navigation = useNavigation();


  const [visible, setVisible] = useState(true);
  const route = useRoute();
  const message = route.params;

  console.log(message)

  return (
    <View style={HomeStyle.container}>
      <HeaderSearch />
      <ScrollView>

        <View style={HomeStyle.rooms}>
          <TouchableOpacity style={HomeStyle.boxButtonRoom}
          onPress={()=> navigation.navigate('class')}>
            <View style={HomeStyle.boxRoom}>
              <Avatar.Image style={HomeStyle.img} size={70} source={require('../images/node.png')} />
              <Title style={HomeStyle.title}>Nome da Sala</Title>
            </View>
            <View style={HomeStyle.textDate}>
              <Text style={{ fontFamily: 'Jost_400Regular' }}>Criada em: 20/02/2012</Text>
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* {message != undefined && (
        <Modal transparent={true}
          animationType="fade"
          visible={visible}>
          <View style={HomeStyle.posModal}>
            <View style={HomeStyle.viewModal}>
              <Text style={HomeStyle.titleModal}>BEM-VINDO</Text>
              <Image style={HomeStyle.imgWelcome} source={require('../images/logo.png')} />
              <Text style={HomeStyle.textModal}>Esperamos que tenha uma ótima</Text>
              <Text style={HomeStyle.textModal}>uma ótima experiência</Text>
              <TouchableOpacity style={HomeStyle.buttonModal} onPress={() => setVisible(false)}>
                <Text style={HomeStyle.texButton}>OK!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )} */}
    </View>
  );
}

export default Home;