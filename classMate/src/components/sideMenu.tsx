import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
    Avatar,
    Drawer,
    Title,
    Caption,
} from 'react-native-paper';
import { Props } from '../utils/interfaces';
import { Feather, Fontisto } from '@expo/vector-icons';
import HomeStyle from '../styles/homeStyles';

const SideMenu: React.FC<Props> = ({ ...props }) => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={HomeStyle.containerDrawer}>
                    <View style={HomeStyle.sectionUser}>
                        <View>
                            <Avatar.Image size={70}
                                source={{ uri: 'https://caocidadao.com.br/wp-content/uploads/2019/09/user.png' }} />
                            <View>
                                <Title>Guilherme</Title>
                                <Caption>amarante189@gmail.com</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={HomeStyle.section}>
                        <DrawerItem icon={({ color, size }) => (
                            <Feather name="home" color={color} size={size} />
                        )} label="Home" onPress={() => {
                            navigation.navigate('home');
                         }} />
                        <DrawerItem icon={({ color, size }) => (
                            <Feather name="user" color={color} size={size} />
                        )} label="Conta" onPress={() => {
                            navigation.navigate('user');
                        }} />
                        <DrawerItem icon={({ color, size }) => (
                            <Fontisto name="room" color={color} size={size} />
                        )} label="Criar Sala" onPress={() => {
                            navigation.navigate('createclass');
                         }} />
                        <DrawerItem icon={({ color, size }) => (
                            <Feather name="log-out" color={color} size={size} />
                        )} label="Sair" onPress={() => {
                            navigation.reset({
                                index: 0,
                                routes:[
                                    {
                                        name: 'home',
                                    }
                                ]
                            });
                            navigation.navigate('login')
                         }} />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

export default SideMenu;