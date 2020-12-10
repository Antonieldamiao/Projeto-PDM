import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import React from 'react'
import { Dimensions, StatusBar } from 'react-native';
import { Text, View, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';

const Mapp = () => {

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"></StatusBar>
            <View style={styles.header}>
                <Text style={styles.headerTexto}>
                    
        </Text>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => { }}
                >
                    <Feather name="search" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>
            <MapView
                style={styles.map} initialRegion={{
                    latitude: -7.3043658,
                    longitude: -38.1517229,
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.14,

                }}>

            </MapView>
            <View style={styles.footer}>
                <Text style={styles.footerTexto}>
                    Marcar o Local de Estudo     
        </Text>
            </View>

        </View>

    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    calloutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255,255,255, 0.8)',
        borderRadius: 16,
        justifyContent: 'center',
    },

    calloutText: {
        color: '#0089a5',
        fontSize: 14,
        
    },

    header: {
        
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: '85%',

        backgroundColor: '#fff',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        elevation: 3,
    },

    headerTexto: {
        fontFamily: 'Nunito_700Bold',
        color: '#8fa7b3',
    },


    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 32,

        backgroundColor: 'blue',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        elevation: 3,
    },

    footerTexto: {
        color: 'white',
    },


    Button: {
        width: 56,
        height: 56,
        backgroundColor: 'gray',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default Mapp;