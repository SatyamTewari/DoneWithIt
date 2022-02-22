import React from 'react';
import { View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';


function Icon({name, color}) {
  return (
    <View style={styles(color).circularHolder}>
        <MaterialCommunityIcons name={name} color={colors.white} size={20}/>
    </View>
  );
}

const styles = (color) => StyleSheet.create({
    circularHolder : {
        width: 50, 
        height: 50, 
        borderRadius:50,
        justifyContent : 'center',
        alignItems : 'center',
        marginEnd : 10,
        backgroundColor : color
    }
});

export default Icon;