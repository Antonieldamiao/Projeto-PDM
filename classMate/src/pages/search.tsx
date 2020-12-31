import React , {useEffect , useState} from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity , FlatList} from 'react-native';
import { Avatar, Title } from 'react-native-paper';
import SearchStyle from '../styles/searchStyle';
import { AsyncStorage } from 'react-native';

const Search: React.FC = () => {

    const [Class , setClass]= useState("")
   
useEffect(() => {
    AsyncStorage.getItem('dados' ,(err, result) => {
        setClass(JSON.parse(result));
        console.log(Class)
    })
}, []);

    return (
        <View style={SearchStyle.container}>
            <ScrollView horizontal={false}>
                {/* <View style={SearchStyle.boxShow}>
                    <Text style={SearchStyle.textResult}>NENHUM RESULTADO</Text>
                    <Text style={SearchStyle.textResult}>FOI</Text>
                    <Text style={SearchStyle.textResult}>ENCONTRADO</Text>
                </View> */}
                <View style={SearchStyle.rooms}>
                <TouchableOpacity style={SearchStyle.boxButtonRoom}>
                        <View style={SearchStyle.boxRoom}>
                            <Avatar.Image style={SearchStyle.img} size={100} source={{uri:Class.icone}} />
    <Title style={SearchStyle.title}>{Class.nome}</Title>
                        </View>
                        <View style={SearchStyle.textDate}>
    <Text {...item}style={{fontFamily: 'Jost_400Regular'}}>{Class.descricao}</Text>
                        </View>

                    </TouchableOpacity>
                   
                </View>
            </ScrollView>

        </View>
    );
}

export default Search;