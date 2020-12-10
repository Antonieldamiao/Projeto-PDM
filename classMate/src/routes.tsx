import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login';
import Form from './pages/form';
import createClass from './pages/createClass';
import addParticipant from './pages/addParticipants';
import Mapa from './pages/map';


const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="login" component={Login} options={{ headerShown: false }} />
                <Screen name="form" component={Form} options={{ headerShown: false }} />
                <Screen name="createClass" component={createClass} options={{ headerShown: false }} />
                <Screen name="addParticipant" component={addParticipant} options={{ headerShown: false }} />
                <Screen name="mapa" component={Mapa} options={{ headerShown: false }} />
            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;