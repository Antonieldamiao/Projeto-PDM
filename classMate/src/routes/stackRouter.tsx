import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerRoutes from './drawerRoutes';
import Login from '../pages/login';
import Form from '../pages/form';


const {Navigator, Screen} = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="login" component={Login} options={{headerShown: false}}/>
      <Screen name="form" component={Form} options={{headerShown: false}}/>
      <Screen name="home" component={DrawerRoutes} options={{headerShown: false}}/>
    </Navigator>
  );
}

export default StackRoutes;