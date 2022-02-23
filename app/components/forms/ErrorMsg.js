import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../AppText';

function ErrorMsg({error, visible}) {

    if(!visible || !error) return null;

    return (
        <AppText style={styles.text}>
            {error}
        </AppText>
    );
}

const styles = StyleSheet.create({
    text : {
        color : 'red'
    }
});

export default ErrorMsg;