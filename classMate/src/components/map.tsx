
import React from 'react'
import { Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import styles from './../styles/mapStyles'

const ComponentMap = () => {

    return (
    
            <MapView
                style={styles.map} initialRegion={{
                    latitude: -7.3043658,
                    longitude: -38.1517229,
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.14,

                }}>

            </MapView>

    )}

export default ComponentMap;