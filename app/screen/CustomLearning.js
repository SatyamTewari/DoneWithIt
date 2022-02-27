import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

function CustomLearning(props) {

    return (
        <View style={styles.container}>
            <StatusBar/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      flex : 1,
      backgroundColor : 'dodgerblue'
  }
});

export default CustomLearning;