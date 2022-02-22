import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';

function MyTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
        { icon && <MaterialCommunityIcons name={icon} size={20} color={colors.mediumgrey} style={styles.icon}/>}
        <TextInput style={styles.textInput} {...otherProps}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : colors.lightgrey,
        borderRadius : 25,
        flexDirection : 'row',
        width : '100%',
        padding : 15,
        marginVertical : 10
    },
    icon : {
        margin : 10
    },
    textInput : {
        color : colors.dark,
        fontSize : 18,
        fontFamily : Platform.OS === 'android' ? 'Roboto' : 'Alvenir',
        width : '100%'

    }
});

export default MyTextInput;