import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import routes from './routes';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name={routes.WELCOME} component={WelcomeScreen} options={{headerShown : false}}></Stack.Screen>
        <Stack.Screen name={routes.LOGIN} component={LoginScreen}></Stack.Screen>
        <Stack.Screen name={routes.REGISTER} component={RegisterScreen}></Stack.Screen>
    </Stack.Navigator>
)

export default AuthNavigator;