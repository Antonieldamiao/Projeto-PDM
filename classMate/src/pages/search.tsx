import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { Avatar, Title } from 'react-native-paper';
import SearchStyle from '../styles/searchStyle';


const Search: React.FC = () => {
    return (
        <View style={SearchStyle.container}>
            <ScrollView>
                {/* <View style={SearchStyle.boxShow}>
                    <Text style={SearchStyle.textResult}>NENHUM RESULTADO</Text>
                    <Text style={SearchStyle.textResult}>FOI</Text>
                    <Text style={SearchStyle.textResult}>ENCONTRADO</Text>
                </View> */}
                <View style={SearchStyle.rooms}>
                    <TouchableOpacity style={SearchStyle.boxButtonRoom}>
                        <View style={SearchStyle.boxRoom}>
                            <Avatar.Image style={SearchStyle.img} size={100} source={require('../images/node.png')} />
                            <Title style={SearchStyle.title}>Nome da Sala</Title>
                        </View>
                        <View style={SearchStyle.textDate}>
                            <Text style={{fontFamily: 'Jost_400Regular'}}>Criada em: 20/02/2012</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    );
}

export default Search;