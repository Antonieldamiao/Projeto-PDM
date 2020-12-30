import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import HomeStyle from '../styles/homeStyles'; 

const HeaderSearch: React.FC = () => {
    const navigation = useNavigation();

    function openSideMenu(){
        navigation.dispatch(DrawerActions.openDrawer());
    }

    return (
        <View style={HomeStyle.viewSearch}>
            <RectButton style={{ marginRight: '2%' }} onPress={openSideMenu}>
                <Feather name="menu" color="#808080" size={29}/>
            </RectButton>
            <TextInput style={HomeStyle.inputSearch} placeholder="Pesquisar" />
            <RectButton onPress={() =>{navigation.navigate('search')}}>
                <Feather name="search" color="#808080" size={25} />
            </RectButton> 
        </View>
    );
}

export default HeaderSearch;