import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ListingsScreen from '../screen/ListingsScreen';
import ListingDetailsScreen from '../screen/ListingDetailsScreen';
import routes from './routes';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{animation : 'slide_from_bottom'}}>
        <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} options={{headerShown : false}}/>
        <Stack.Screen name={routes.LISTINGDETAILS} component={ListingDetailsScreen}/>
    </Stack.Navigator>
)

export default FeedNavigator;