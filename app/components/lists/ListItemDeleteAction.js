import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ListItemDeleteAction(props) {
  return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name='trash-can' size={30} color={colors.white}/>
            </View>
        </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor : colors.delete,
      width : 70,
      justifyContent : 'center',
      alignItems : 'center'
  }
});

export default ListItemDeleteAction;