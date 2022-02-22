import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

function AppText(props) {
  return (
    <Text style={[style.text, props.style]}>{props.children}</Text>
  );
}

const style = StyleSheet.create({
  text: {
      fontSize : 18,
      fontFamily : Platform.OS === 'android' ? 'Roboto' : 'Alvenir'
  }
});

export default AppText;