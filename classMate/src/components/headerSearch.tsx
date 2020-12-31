import React , {useState} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import HomeStyle from '../styles/homeStyles'; 
import { AsyncStorage } from 'react-native';
import api from '../utils/api';

const HeaderSearch: React.FC = () => {
    const navigation = useNavigation();
    const [TextSearch , setTextSearch] = useState("")

    function openSideMenu(){
        navigation.dispatch(DrawerActions.openDrawer());
    }


 async function search(){

    await api.get('http://192.168.0.108:8080/classmate/room/'+TextSearch ).then(
        resp => {
          console.log(resp.status)
          console.log(resp.data)
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'search',
              }
            ],
          })

          AsyncStorage.setItem(
            'seach',
            JSON.stringify(resp.data)
              )
              navigation.navigate('search')
})
}

    return (
        <View style={HomeStyle.viewSearch}>
            <RectButton style={{ marginRight: '2%' }} onPress={openSideMenu}>
                <Feather name="menu" color="#808080" size={29}/>
            </RectButton>
            <TextInput style={HomeStyle.inputSearch} placeholder="Pesquisar" onChangeText={setTextSearch}/>
            <RectButton onPress={search}>
                <Feather name="search" color="#808080" size={25} />
            </RectButton> 
        </View>
    );
}

export default HeaderSearch;