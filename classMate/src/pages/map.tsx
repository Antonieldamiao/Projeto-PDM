import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import React from 'react'
import { StatusBar } from 'react-native';
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import styles from './../styles/mapStyles'

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

export default Mapp;