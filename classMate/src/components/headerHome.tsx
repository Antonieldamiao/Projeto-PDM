import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather, AntDesign } from '@expo/vector-icons';



const HeaderSearch: React.FC = () => {
    const navigation = useNavigation();
    function navBack() {
        navigation.goBack();
    }

    return (
        <View style={style.viewSearch}>
            <RectButton style={{ marginRight: '2%' }}>
                <Feather name="menu" color="#808080" size={23}/>
            </RectButton>
            <TextInput style={style.inputSearch} placeholder="Pesquisar" />
            <RectButton onPress={() => alert('Aqui é para pesquisar')}>
                <Feather name="search" size={28} />
            </RectButton>
        </View>
    );
}

const style = StyleSheet.create({
    viewSearch: {
        justifyContent: 'center',
        marginTop: '10%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputSearch: {
        width: '77%',
        borderWidth: 1,
        paddingLeft: '2%',
        marginRight: 1,
        borderRadius: 14,
        fontSize: 17,
        fontFamily: 'Jost_400Regular',
    },

})

export default HeaderSearch;