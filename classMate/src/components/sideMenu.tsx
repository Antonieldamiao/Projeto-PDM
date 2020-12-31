import React ,{ useEffect , useState}from 'react';
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
import { AsyncStorage } from 'react-native';

const SideMenu: React.FC<Props> = ({ ...props }) => {
    const navigation = useNavigation();

    const [dateUser , setDateUser]= useState("")
    const [nome, setNome] = useState("")
    const [sobreNome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [foto, setFoto] = useState("")
    const [dataNascimento, setData] = useState("")
    const [telefone, setTelefone] = useState("")

    useEffect(() => {
      AsyncStorage.getItem('dados' , (err, result) => {
       setDateUser(JSON.parse(result));
        console.log(dateUser)
      })
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={HomeStyle.containerDrawer}>
                    <View style={HomeStyle.sectionUser}>
                        <View>
                            <Avatar.Image size={70}
                                source={{ uri: dateUser.foto }} />
                            <View>
    <Title>{dateUser.nome+""+dateUser.sobrenome}</Title>
                                <Caption>{dateUser.email}                                </Caption>
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