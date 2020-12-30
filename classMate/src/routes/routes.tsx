import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './stackRouter';
// import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login';
import Form from '../pages/form';
import Home from '../pages/home';
import createClass from '../pages/createClass';
import Mapa from '../pages/map';
import Class from '../pages/class'
import classDetails from '../pages/classDetails'


// const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    );
}

export default Routes;