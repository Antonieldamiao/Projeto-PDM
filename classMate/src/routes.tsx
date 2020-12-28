import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderHome from './components/headerHome';
import Login from './pages/login';
import Form from './pages/form';
import Home from './pages/home';
import createClass from './pages/createClass';
import addParticipant from './pages/addParticipants';
import Mapa from './pages/map';
import Class from './pages/class'
import Chat from './pages/classChat'
import classDetails from './pages/classDetails'


const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="login" component={Login} options={{ headerShown: false }} />
                <Screen name="form" component={Form} options={{ headerShown: false }} />
                <Screen name="home" component={Home} options={
                    {
                        headerShown: true,
                        header: () => <HeaderHome />
                    }
                } />
                <Screen name="createClass" component={createClass} options={{ headerShown: false }} />
                <Screen name="addParticipant" component={addParticipant} options={{ headerShown: false }} />
                <Screen name="mapa" component={Mapa} options={{ headerShown: false }} />
                <Screen name="class" component={Class} options={{ headerShown: false }} />
                <Screen name="chat" component={Chat} options={{ headerShown: false }} />
                <Screen name="classDetails" component={classDetails} options={{ headerShown: false }} />
            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;