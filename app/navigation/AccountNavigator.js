import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MyAccountScreen from '../screen/MyAccountScreen';
import MessageScreen from '../screen/MessageScreen';
import routes from './routes';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name={routes.MYACCOUNT} component={MyAccountScreen} options={{headerTitleAlign : 'center'}}/>
        <Stack.Screen name={routes.MESSAGES} component={MessageScreen}/>
    </Stack.Navigator>
)

export default AccountNavigator;