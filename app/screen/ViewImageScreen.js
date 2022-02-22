import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors'

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name='close' color={colors.white} size={30}/>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name='trash-can-outline' color={colors.white} size={30}/>
            </View>
            <Image source={require('../assets/chair.jpg')} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon : {
        position : 'absolute',
        top : 40,
        left : 30,
    },
    deleteIcon : {
        position : 'absolute',
        top : 40,
        right : 30
    },
    container : {
        backgroundColor : 'dodgerblue',
        flex : 1,
        justifyContent : 'center'
    },
    image : {
        height : '60%',
        width : '100%',
        resizeMode : 'stretch'
    }
});

export default ViewImageScreen;