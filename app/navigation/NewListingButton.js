import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function NewListingButton({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name='plus-circle' color={colors.white} size={40}/>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
  container: {
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor : colors.primary,
      borderRadius : 40,
      borderColor : colors.white,
      borderWidth : 10,
      bottom : 30,
      height : 80,
      width : 80
  }
});

export default NewListingButton;