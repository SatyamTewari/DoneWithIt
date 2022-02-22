import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function ListItemSeparator() {
  return (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {
      width : '100%',
      height : 10,
      backgroundColor : colors.lightgrey,
  }
});

export default ListItemSeparator;