import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

function CustomButton({title, buttonColor,buttonTitleColor,onPress}) {
    return (
        <TouchableOpacity style={styles({buttonColor,buttonTitleColor}).button} onPress={onPress}>
            <Text style={styles({buttonColor,buttonTitleColor}).buttonTitle}>{title}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;