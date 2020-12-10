import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login';
import Form from './pages/form';
import createClass from './pages/createClass';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="login" component={Login} options={{ headerShown: false }} />
                <Screen name="form" component={Form} options={{ headerShown: false }} />
                <Screen name="createClass" component={createClass} options={{ headerShown: false }} />
            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;