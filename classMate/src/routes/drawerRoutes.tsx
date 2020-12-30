import React from 'react';
import { Image, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from '../components/sideMenu';
import Home from '../pages/home';
import CreateClass from '../pages/createClass';
import User from '../pages/user';
import Search from '../pages/search';
import Class from '../pages/class';


const { Navigator, Screen } = createDrawerNavigator();

const DrawerRoutes: React.FC = () => {
    return (
        <Navigator drawerStyle={{ opacity: 0.8 }}
            initialRouteName="Home" drawerContent={props=><SideMenu {...props}/>}>
            <Screen name="home" component={Home} />
            <Screen name="createclass" component={CreateClass} />
            <Screen name="user" component={User}/>
            <Screen name="search" component={Search}/>
            <Screen name="class" component={Class}/>
        </Navigator>
    );
}

export default DrawerRoutes;